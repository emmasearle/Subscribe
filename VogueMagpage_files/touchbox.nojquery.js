var delay = 500;
var ready = false;
var styles = [
    '#bmuse-touchbox { position: absolute; z-index: 99999; width: 0; height: 0; transition: all .5s ease; background-color: rgba(0, 0, 0, 0.85); left: 50%; top: 50%; bottom: 0;}',
    '#bmuse-touchbox.show { width: 100%; height: 100%; left: 0; top: 0; }',
    '#bmuse-touchbox #bmuse-touchbox-close { position: absolute; top: 20px; right: 20px; width: 20px; height: 20px; color: white; font-size: 20px; text-align: center; line-height: 20px; }',
    '#bmuse-touchbox #bmuse-touchbox-ad { position: relative; padding-bottom: 56.25%; padding-top:44px; height: 0;max-width: 1280px; max-height: 766px; top:100px; margin:0 auto; }',
    '#bmuse-touchbox #bmuse-touchbox-ad iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; max-width: 1280px; max-height: 766px; }'
];
var vendor = {
    'webkit': [
        '#bmuse-touchbox { position: absolute; z-index: 99999; width: 0; height: 0; -webkit-transition: all .5s ease; transition: all .5s ease; background-color: rgba(0, 0, 0, 0.85); left: 50%; top: 50%; bottom: 0; }'
    ],
    'moz': [
        '#bmuse-touchbox { position: absolute; z-index: 99999; width: 0; height: 0; transition: all .5s ease; background-color: rgba(0, 0, 0, 0.85); left: 50%; top: 50%; bottom: 0; }'
    ],
    'ms': [
        '#bmuse-touchbox { position: absolute; z-index: 99999; width: 0; height: 0; transition: all .5s ease; background-color: rgba(0, 0, 0, 0.85); left: 50%; top: 50%; bottom: 0; margin-bottom: 100px; overflow: scroll; }'
    ]
};

/****************************************
 * prototyping some useful functionality for HTMLElement
 ****************************************/
HTMLElement.prototype.addClass = function(string) {
    if (!(string instanceof Array)) {
        string = string.split(' ');
    }
    for(var i = 0, len = string.length; i < len; ++i) {
        if (string[i] && !new RegExp('(\\s+|^)' + string[i] + '(\\s+|$)').test(this.className)) {
            this.className = this.className.trim() + ' ' + string[i];
        }
    }
};

HTMLElement.prototype.removeClass = function(string) {
    if (!(string instanceof Array)) {
        string = string.split(' ');
    }
    for(var i = 0, len = string.length; i < len; ++i) {
        this.className = this.className.replace(new RegExp('(\\s+|^)' + string[i] + '(\\s+|$)'), ' ').trim();
    }
};

/****************************************
 * declare the bmuse namespace and setup a default bmuse.about object which will 
 * hold all relevant information about the host site
 ****************************************/
window.bmuse = window.bmuse || {};

/****************************************
 * document ready function
 ****************************************/
(function(funcName, baseObj) {
    var readyList = []
    ,   readyFired = false
    ,   readyEventHandlersInstalled = false;

    funcName = funcName || 'docReady';
    baseObj = baseObj || window;
    
    function ready() {
        if( !readyFired ) {
            readyFired = true;

            for (var i = readyList.length - 1; i >= 0; i--) {
                readyList[i].fn.call(window, readyList[i].ctx);
            };

            readyList = [];
        }
    }

    function readyStateChange() {
        if( document.readyState === 'complete' ) ready();
    }

    baseObj[funcName] = function(callback, context) {
        if(readyFired) {
            setTimeout(function() {
                callback(context);
            }, 1);
            return;
        } else {
            readyList.push({
                fn: callback, ctx: context
            });
        }
        if(document.readyState === 'complete') {
            setTimeout(ready, 1);
        } else if(!readyEventHandlersInstalled) {
            if(document.addEventListener) {
                document.addEventListener('DOMContentLoaded', ready, false);
                window.addEventListener("load", ready, false);
            } else {
                document.attachEvent('onreadystatechange', readyStateChange);
                window.attachEvent('onload', ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})('docReady', window);

/****************************************
 * declare a loader method to handle asynchronously loading scripts with a callback
 * this will eventually handle the safeframe script
 ****************************************/
var loader = function() {
    this.require = function(scripts, callback) {
        this.loadCount = 0;
        this.totalRequired = scripts.length;
        this.callback = callback;

        for (var i = scripts.length - 1; i >= 0; i--) {
            this.writeScript(scripts[i]);
        }
    }
    this.loaded = function(e) {
        this.loadCount++;

        if(this.loadCount == this.totalRequired && typeof this.callback == 'function') {
            this.callback.call();
        }
    }
    this.writeScript = function(src) {
        var that = this
        ,   head = document.getElementsByTagName('head')[0]
        ,   s = document.createElement('script');

        s.type = 'text/javascript';
        s.async = true;
        s.src = src;
        s.addEventListener('load', function(e) {
            that.loaded(e);
        }, false);

        head.appendChild(s);
    }
};

/****************************************
 * create a new stylesheet and make it available via bmuse.styles
 ****************************************/
var createStyles = function(callback){
    var style = document.createElement('style');
        style.appendChild(document.createTextNode(''));

    document.head.appendChild(style);
    bmuse.styles = style.sheet;
    styles = styles.concat(vendor[getPrefix()]);

    for (var i = styles.length - 1; i >= 0; i--) {
        addCSSRule(styles[i], 0);
        if(i == 0) callback();
    };
};

/****************************************
 * add a css rule to the stylesheet created by this script - bmuse.styles
 ****************************************/
var addCSSRule = function(rules, index) {
    if('insertRule' in bmuse.styles) {
        try {
            bmuse.styles.insertRule(rules, index);
        } catch(err) {
            console.log(err);
        }
    } 
    else if ('addRule' in bmuse.styles) {
        try {
            bmuse.styles.addRule(rules, index);
        } catch(err) {
            console.log(err);
        }
    }
};

/****************************************
 * get browser prefixes for styles
 ****************************************/
var getPrefix = function() {
    var styles = window.getComputedStyle(document.documentElement, '')
    ,   pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1];

    return pre;
};

var createLightbox = function() {
    if(document.getElementById('bmuse-touchbox') === null) {
        var box = document.createElement('div');
            box.id = "bmuse-touchbox";
        var close = document.createElement('span');
            close.id = "bmuse-touchbox-close";
            close.innerHTML = '&#215';
        var ad = document.createElement('div');
            ad.id = "bmuse-touchbox-ad";

            box.appendChild(close);
            box.appendChild(ad);

        var parent = document.getElementsByTagName('body')[0];
            parent.appendChild(box);

        var closeTouchbox = function() {
            box.removeChild(close);
            box.removeChild(ad);
            box.removeClass('show');

            setTimeout(function(){
                parent.removeChild(box);
            }, delay);
        };

        setTimeout(function(){
            box.addClass('show');
            close.addEventListener('click', closeTouchbox);
            
            setTimeout(function(){
                bmuse.touchad();
            }, delay);
        }, 100);
    }
};

bmuse.setup = function() {
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    createStyles(function(){
        ready = true;

        eventer(messageEvent,function(e) {
            if(e.data == 'touchad') bmuse.init();
        },false);
    });
};

bmuse.init = function() {
    if(ready) createLightbox();
};

bmuse.touchad = function() {
    var touchad = document.getElementById('bmuse-touchbox-ad');

    if(touchad != null) {
        var iframe = document.createElement('iframe');

        /*
         * this url needs to point at the current Touchcast creative
         */
        iframe.src = 'http://www.touchcast.com/levisembed/85479?autoplay=1';
        iframe.id = 'touchad';

        touchad.appendChild(iframe);
    }
};

/* -------------------------------------------------- kick things off -------------------------------------------------- */

/****************************************
 * launch functionality on document ready and after all additional scripts are loaded 
 ****************************************/
docReady(function(){
    var array = [
        'http://www.touchcast.com/sdk/v4/js/embed.min.js'
    ];

    loader = new loader();
    loader.require(array, bmuse.setup);
});