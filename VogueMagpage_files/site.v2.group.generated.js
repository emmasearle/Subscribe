// Combined with SharedResources v2
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);;
/* -----------------------------*/
// Knockout JavaScript library v2.1.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,document,navigator,undefined){
function m(w){throw w;}var n=void 0,p=!0,s=null,t=!1;function A(w){return function(){return w}};function E(w){function B(b,c,d){d&&c!==a.k.r(b)&&a.k.S(b,c);c!==a.k.r(b)&&a.a.va(b,"change")}var a="undefined"!==typeof w?w:{};a.b=function(b,c){for(var d=b.split("."),f=a,g=0;g<d.length-1;g++)f=f[d[g]];f[d[d.length-1]]=c};a.B=function(a,c,d){a[c]=d};a.version="2.1.0";a.b("version",a.version);a.a=new function(){function b(b,c){if("input"!==a.a.o(b)||!b.type||"click"!=c.toLowerCase())return t;var e=b.type;return"checkbox"==e||"radio"==e}var c=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,d={},f={};d[/Firefox\/2/i.test(navigator.userAgent)?
"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");for(var g in d){var e=d[g];if(e.length)for(var h=0,j=e.length;h<j;h++)f[e[h]]=g}var k={propertychange:p},i=function(){for(var a=3,b=document.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",c[0];);return 4<a?a:n}();return{Ca:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
v:function(a,b){for(var c=0,e=a.length;c<e;c++)b(a[c])},j:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,e=a.length;c<e;c++)if(a[c]===b)return c;return-1},ab:function(a,b,c){for(var e=0,f=a.length;e<f;e++)if(b.call(c,a[e]))return a[e];return s},ba:function(b,c){var e=a.a.j(b,c);0<=e&&b.splice(e,1)},za:function(b){for(var b=b||[],c=[],e=0,f=b.length;e<f;e++)0>a.a.j(c,b[e])&&c.push(b[e]);return c},T:function(a,b){for(var a=a||[],c=[],
e=0,f=a.length;e<f;e++)c.push(b(a[e]));return c},aa:function(a,b){for(var a=a||[],c=[],e=0,f=a.length;e<f;e++)b(a[e])&&c.push(a[e]);return c},N:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,e=b.length;c<e;c++)a.push(b[c]);return a},extend:function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},ga:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Ab:function(b){for(var b=a.a.L(b),c=document.createElement("div"),e=0,f=b.length;e<f;e++)a.F(b[e]),
c.appendChild(b[e]);return c},X:function(b,c){a.a.ga(b);if(c)for(var e=0,f=c.length;e<f;e++)b.appendChild(c[e])},Na:function(b,c){var e=b.nodeType?[b]:b;if(0<e.length){for(var f=e[0],d=f.parentNode,g=0,h=c.length;g<h;g++)d.insertBefore(c[g],f);g=0;for(h=e.length;g<h;g++)a.removeNode(e[g])}},Pa:function(a,b){0<=navigator.userAgent.indexOf("MSIE 6")?a.setAttribute("selected",b):a.selected=b},w:function(a){return(a||"").replace(c,"")},Ib:function(b,c){for(var e=[],f=(b||"").split(c),g=0,d=f.length;g<
d;g++){var h=a.a.w(f[g]);""!==h&&e.push(h)}return e},Hb:function(a,b){a=a||"";return b.length>a.length?t:a.substring(0,b.length)===b},eb:function(a,b){for(var c="return ("+a+")",e=0;e<b;e++)c="with(sc["+e+"]) { "+c+" } ";return new Function("sc",c)},kb:function(a,b){if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a!=s;){if(a==b)return p;a=a.parentNode}return t},fa:function(b){return a.a.kb(b,b.ownerDocument)},o:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},
n:function(a,c,e){var f=i&&k[c];if(!f&&"undefined"!=typeof jQuery){if(b(a,c))var g=e,e=function(a,b){var c=this.checked;b&&(this.checked=b.fb!==p);g.call(this,a);this.checked=c};jQuery(a).bind(c,e)}else!f&&"function"==typeof a.addEventListener?a.addEventListener(c,e,t):"undefined"!=typeof a.attachEvent?a.attachEvent("on"+c,function(b){e.call(a,b)}):m(Error("Browser doesn't support addEventListener or attachEvent"))},va:function(a,c){(!a||!a.nodeType)&&m(Error("element must be a DOM node when calling triggerEvent"));
if("undefined"!=typeof jQuery){var e=[];b(a,c)&&e.push({fb:a.checked});jQuery(a).trigger(c,e)}else"function"==typeof document.createEvent?"function"==typeof a.dispatchEvent?(e=document.createEvent(f[c]||"HTMLEvents"),e.initEvent(c,p,p,window,0,0,0,0,0,t,t,t,t,0,a),a.dispatchEvent(e)):m(Error("The supplied element doesn't support dispatchEvent")):"undefined"!=typeof a.fireEvent?(b(a,c)&&(a.checked=a.checked!==p),a.fireEvent("on"+c)):m(Error("Browser doesn't support triggering events"))},d:function(b){return a.la(b)?
b():b},Ua:function(b,c,e){var f=(b.className||"").split(/\s+/),g=0<=a.a.j(f,c);if(e&&!g)b.className+=(f[0]?" ":"")+c;else if(g&&!e){e="";for(g=0;g<f.length;g++)f[g]!=c&&(e+=f[g]+" ");b.className=a.a.w(e)}},Qa:function(b,c){var e=a.a.d(c);if(e===s||e===n)e="";"innerText"in b?b.innerText=e:b.textContent=e;9<=i&&(b.style.display=b.style.display)},lb:function(a){if(9<=i){var b=a.style.width;a.style.width=0;a.style.width=b}},Eb:function(b,e){for(var b=a.a.d(b),e=a.a.d(e),c=[],f=b;f<=e;f++)c.push(f);return c},
L:function(a){for(var b=[],e=0,c=a.length;e<c;e++)b.push(a[e]);return b},tb:6===i,ub:7===i,ja:i,Da:function(b,e){for(var c=a.a.L(b.getElementsByTagName("input")).concat(a.a.L(b.getElementsByTagName("textarea"))),f="string"==typeof e?function(a){return a.name===e}:function(a){return e.test(a.name)},g=[],d=c.length-1;0<=d;d--)f(c[d])&&g.push(c[d]);return g},Bb:function(b){return"string"==typeof b&&(b=a.a.w(b))?window.JSON&&window.JSON.parse?window.JSON.parse(b):(new Function("return "+b))():s},sa:function(b,
e,c){("undefined"==typeof JSON||"undefined"==typeof JSON.stringify)&&m(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));return JSON.stringify(a.a.d(b),e,c)},Cb:function(b,e,c){var c=c||{},f=c.params||{},g=c.includeFields||this.Ca,d=b;if("object"==typeof b&&"form"===a.a.o(b))for(var d=b.action,h=g.length-1;0<=h;h--)for(var k=a.a.Da(b,g[h]),
j=k.length-1;0<=j;j--)f[k[j].name]=k[j].value;var e=a.a.d(e),i=document.createElement("form");i.style.display="none";i.action=d;i.method="post";for(var z in e)b=document.createElement("input"),b.name=z,b.value=a.a.sa(a.a.d(e[z])),i.appendChild(b);for(z in f)b=document.createElement("input"),b.name=z,b.value=f[z],i.appendChild(b);document.body.appendChild(i);c.submitter?c.submitter(i):i.submit();setTimeout(function(){i.parentNode.removeChild(i)},0)}}};a.b("utils",a.a);a.b("utils.arrayForEach",a.a.v);
a.b("utils.arrayFirst",a.a.ab);a.b("utils.arrayFilter",a.a.aa);a.b("utils.arrayGetDistinctValues",a.a.za);a.b("utils.arrayIndexOf",a.a.j);a.b("utils.arrayMap",a.a.T);a.b("utils.arrayPushAll",a.a.N);a.b("utils.arrayRemoveItem",a.a.ba);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Ca);a.b("utils.getFormFields",a.a.Da);a.b("utils.postJson",a.a.Cb);a.b("utils.parseJson",a.a.Bb);a.b("utils.registerEventHandler",a.a.n);a.b("utils.stringifyJson",a.a.sa);a.b("utils.range",a.a.Eb);
a.b("utils.toggleDomNodeCssClass",a.a.Ua);a.b("utils.triggerEvent",a.a.va);a.b("utils.unwrapObservable",a.a.d);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments),a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={};return{get:function(b,c){var e=a.a.f.getAll(b,t);return e===n?n:e[c]},set:function(b,c,e){e===n&&a.a.f.getAll(b,
t)===n||(a.a.f.getAll(b,p)[c]=e)},getAll:function(a,g){var e=a[c];if(!(e&&"null"!==e)){if(!g)return;e=a[c]="ko"+b++;d[e]={}}return d[e]},clear:function(a){var b=a[c];b&&(delete d[b],a[c]=s)}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.G=new function(){function b(b,c){var f=a.a.f.get(b,d);f===n&&c&&(f=[],a.a.f.set(b,d,f));return f}function c(e){var f=b(e,t);if(f)for(var f=f.slice(0),d=0;d<f.length;d++)f[d](e);a.a.f.clear(e);"function"==typeof jQuery&&"function"==typeof jQuery.cleanData&&
jQuery.cleanData([e]);if(g[e.nodeType])for(f=e.firstChild;e=f;)f=e.nextSibling,8===e.nodeType&&c(e)}var d="__ko_domNodeDisposal__"+(new Date).getTime(),f={1:p,8:p,9:p},g={1:p,9:p};return{wa:function(a,c){"function"!=typeof c&&m(Error("Callback must be a function"));b(a,p).push(c)},Ma:function(c,f){var g=b(c,t);g&&(a.a.ba(g,f),0==g.length&&a.a.f.set(c,d,n))},F:function(b){if(f[b.nodeType]&&(c(b),g[b.nodeType])){var d=[];a.a.N(d,b.getElementsByTagName("*"));for(var b=0,j=d.length;b<j;b++)c(d[b])}},
removeNode:function(b){a.F(b);b.parentNode&&b.parentNode.removeChild(b)}}};a.F=a.a.G.F;a.removeNode=a.a.G.removeNode;a.b("cleanNode",a.F);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.G);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.G.wa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.G.Ma);(function(){a.a.pa=function(b){var c;if("undefined"!=typeof jQuery){if((c=jQuery.clean([b]))&&c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&
b.parentNode.removeChild(b)}}else{var d=a.a.w(b).toLowerCase();c=document.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof window.innerShiv?c.appendChild(window.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.L(c.lastChild.childNodes)}return c};
a.a.Y=function(b,c){a.a.ga(b);if(c!==s&&c!==n)if("string"!=typeof c&&(c=c.toString()),"undefined"!=typeof jQuery)jQuery(b).html(c);else for(var d=a.a.pa(c),f=0;f<d.length;f++)b.appendChild(d[f])}})();a.b("utils.parseHtmlFragment",a.a.pa);a.b("utils.setHtml",a.a.Y);a.s=function(){function b(){return(4294967296*(1+Math.random())|0).toString(16).substring(1)}function c(b,g){if(b)if(8==b.nodeType){var e=a.s.Ja(b.nodeValue);e!=s&&g.push({jb:b,yb:e})}else if(1==b.nodeType)for(var e=0,d=b.childNodes,j=d.length;e<
j;e++)c(d[e],g)}var d={};return{na:function(a){"function"!=typeof a&&m(Error("You can only pass a function to ko.memoization.memoize()"));var c=b()+b();d[c]=a;return"<\!--[ko_memo:"+c+"]--\>"},Va:function(a,b){var c=d[a];c===n&&m(Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized."));try{return c.apply(s,b||[]),p}finally{delete d[a]}},Wa:function(b,d){var e=[];c(b,e);for(var h=0,j=e.length;h<j;h++){var k=e[h].jb,i=[k];d&&a.a.N(i,d);a.s.Va(e[h].yb,i);k.nodeValue="";k.parentNode&&
k.parentNode.removeChild(k)}},Ja:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:s}}}();a.b("memoization",a.s);a.b("memoization.memoize",a.s.na);a.b("memoization.unmemoize",a.s.Va);a.b("memoization.parseMemoText",a.s.Ja);a.b("memoization.unmemoizeDomNodeAndDescendants",a.s.Wa);a.Ba={throttle:function(b,c){b.throttleEvaluation=c;var d=s;return a.h({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})},notify:function(b,c){b.equalityComparer="always"==c?A(t):a.m.fn.equalityComparer;
return b}};a.b("extenders",a.Ba);a.Sa=function(b,c,d){this.target=b;this.ca=c;this.ib=d;a.B(this,"dispose",this.A)};a.Sa.prototype.A=function(){this.sb=p;this.ib()};a.R=function(){this.u={};a.a.extend(this,a.R.fn);a.B(this,"subscribe",this.ta);a.B(this,"extend",this.extend);a.B(this,"getSubscriptionsCount",this.ob)};a.R.fn={ta:function(b,c,d){var d=d||"change",b=c?b.bind(c):b,f=new a.Sa(this,b,function(){a.a.ba(this.u[d],f)}.bind(this));this.u[d]||(this.u[d]=[]);this.u[d].push(f);return f},notifySubscribers:function(b,
c){c=c||"change";this.u[c]&&a.a.v(this.u[c].slice(0),function(a){a&&a.sb!==p&&a.ca(b)})},ob:function(){var a=0,c;for(c in this.u)this.u.hasOwnProperty(c)&&(a+=this.u[c].length);return a},extend:function(b){var c=this;if(b)for(var d in b){var f=a.Ba[d];"function"==typeof f&&(c=f(c,b[d]))}return c}};a.Ga=function(a){return"function"==typeof a.ta&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.R);a.b("isSubscribable",a.Ga);a.U=function(){var b=[];return{bb:function(a){b.push({ca:a,Aa:[]})},
end:function(){b.pop()},La:function(c){a.Ga(c)||m(Error("Only subscribable things can act as dependencies"));if(0<b.length){var d=b[b.length-1];0<=a.a.j(d.Aa,c)||(d.Aa.push(c),d.ca(c))}}}}();var G={undefined:p,"boolean":p,number:p,string:p};a.m=function(b){function c(){if(0<arguments.length){if(!c.equalityComparer||!c.equalityComparer(d,arguments[0]))c.I(),d=arguments[0],c.H();return this}a.U.La(c);return d}var d=b;a.R.call(c);c.H=function(){c.notifySubscribers(d)};c.I=function(){c.notifySubscribers(d,
"beforeChange")};a.a.extend(c,a.m.fn);a.B(c,"valueHasMutated",c.H);a.B(c,"valueWillMutate",c.I);return c};a.m.fn={equalityComparer:function(a,c){return a===s||typeof a in G?a===c:t}};var x=a.m.Db="__ko_proto__";a.m.fn[x]=a.m;a.ia=function(b,c){return b===s||b===n||b[x]===n?t:b[x]===c?p:a.ia(b[x],c)};a.la=function(b){return a.ia(b,a.m)};a.Ha=function(b){return"function"==typeof b&&b[x]===a.m||"function"==typeof b&&b[x]===a.h&&b.pb?p:t};a.b("observable",a.m);a.b("isObservable",a.la);a.b("isWriteableObservable",
a.Ha);a.Q=function(b){0==arguments.length&&(b=[]);b!==s&&(b!==n&&!("length"in b))&&m(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));var c=a.m(b);a.a.extend(c,a.Q.fn);return c};a.Q.fn={remove:function(a){for(var c=this(),d=[],f="function"==typeof a?a:function(c){return c===a},g=0;g<c.length;g++){var e=c[g];f(e)&&(0===d.length&&this.I(),d.push(e),c.splice(g,1),g--)}d.length&&this.H();return d},removeAll:function(b){if(b===n){var c=this(),
d=c.slice(0);this.I();c.splice(0,c.length);this.H();return d}return!b?[]:this.remove(function(c){return 0<=a.a.j(b,c)})},destroy:function(a){var c=this(),d="function"==typeof a?a:function(c){return c===a};this.I();for(var f=c.length-1;0<=f;f--)d(c[f])&&(c[f]._destroy=p);this.H()},destroyAll:function(b){return b===n?this.destroy(A(p)):!b?[]:this.destroy(function(c){return 0<=a.a.j(b,c)})},indexOf:function(b){var c=this();return a.a.j(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.I(),
this()[d]=c,this.H())}};a.a.v("pop push reverse shift sort splice unshift".split(" "),function(b){a.Q.fn[b]=function(){var a=this();this.I();a=a[b].apply(a,arguments);this.H();return a}});a.a.v(["slice"],function(b){a.Q.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.Q);a.h=function(b,c,d){function f(){a.a.v(v,function(a){a.A()});v=[]}function g(){var a=h.throttleEvaluation;a&&0<=a?(clearTimeout(x),x=setTimeout(e,a)):e()}function e(){if(!l)if(i&&w())u();else{l=
p;try{var b=a.a.T(v,function(a){return a.target});a.U.bb(function(c){var e;0<=(e=a.a.j(b,c))?b[e]=n:v.push(c.ta(g))});for(var e=q.call(c),f=b.length-1;0<=f;f--)b[f]&&v.splice(f,1)[0].A();i=p;h.notifySubscribers(k,"beforeChange");k=e}finally{a.U.end()}h.notifySubscribers(k);l=t}}function h(){if(0<arguments.length)j.apply(h,arguments);else return i||e(),a.U.La(h),k}function j(){"function"===typeof o?o.apply(c,arguments):m(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."))}
var k,i=t,l=t,q=b;q&&"object"==typeof q?(d=q,q=d.read):(d=d||{},q||(q=d.read));"function"!=typeof q&&m(Error("Pass a function that returns the value of the ko.computed"));var o=d.write;c||(c=d.owner);var v=[],u=f,r="object"==typeof d.disposeWhenNodeIsRemoved?d.disposeWhenNodeIsRemoved:s,w=d.disposeWhen||A(t);if(r){u=function(){a.a.G.Ma(r,arguments.callee);f()};a.a.G.wa(r,u);var y=w,w=function(){return!a.a.fa(r)||y()}}var x=s;h.nb=function(){return v.length};h.pb="function"===typeof d.write;h.A=function(){u()};
a.R.call(h);a.a.extend(h,a.h.fn);d.deferEvaluation!==p&&e();a.B(h,"dispose",h.A);a.B(h,"getDependenciesCount",h.nb);return h};a.rb=function(b){return a.ia(b,a.h)};w=a.m.Db;a.h[w]=a.m;a.h.fn={};a.h.fn[w]=a.h;a.b("dependentObservable",a.h);a.b("computed",a.h);a.b("isComputed",a.rb);(function(){function b(a,g,e){e=e||new d;a=g(a);if(!("object"==typeof a&&a!==s&&a!==n&&!(a instanceof Date)))return a;var h=a instanceof Array?[]:{};e.save(a,h);c(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=
d;break;case "object":case "undefined":var i=e.get(d);h[c]=i!==n?i:b(d,g,e)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){var b=[],c=[];this.save=function(e,d){var j=a.a.j(b,e);0<=j?c[j]=d:(b.push(e),c.push(d))};this.get=function(e){e=a.a.j(b,e);return 0<=e?c[e]:n}}a.Ta=function(c){0==arguments.length&&m(Error("When calling ko.toJS, pass the object you want to convert."));return b(c,function(b){for(var c=
0;a.la(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,e){b=a.Ta(b);return a.a.sa(b,c,e)}})();a.b("toJS",a.Ta);a.b("toJSON",a.toJSON);(function(){a.k={r:function(b){switch(a.a.o(b)){case "option":return b.__ko__hasDomDataOptionValue__===p?a.a.f.get(b,a.c.options.oa):b.getAttribute("value");case "select":return 0<=b.selectedIndex?a.k.r(b.options[b.selectedIndex]):n;default:return b.value}},S:function(b,c){switch(a.a.o(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.c.options.oa,
n);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.c.options.oa,c),b.__ko__hasDomDataOptionValue__=p,b.value="number"===typeof c?c:""}break;case "select":for(var d=b.options.length-1;0<=d;d--)if(a.k.r(b.options[d])==c){b.selectedIndex=d;break}break;default:if(c===s||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.k);a.b("selectExtensions.readValue",a.k.r);a.b("selectExtensions.writeValue",a.k.S);a.g=function(){function b(a,b){for(var d=
s;a!=d;)d=a,a=a.replace(c,function(a,c){return b[c]});return a}var c=/\@ko_token_(\d+)\@/g,d=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,f=["true","false"];return{D:[],W:function(c){var e=a.a.w(c);if(3>e.length)return[];"{"===e.charAt(0)&&(e=e.substring(1,e.length-1));for(var c=[],d=s,f,k=0;k<e.length;k++){var i=e.charAt(k);if(d===s)switch(i){case '"':case "'":case "/":d=k,f=i}else if(i==f&&"\\"!==e.charAt(k-1)){i=e.substring(d,k+1);c.push(i);var l="@ko_token_"+(c.length-
1)+"@",e=e.substring(0,d)+l+e.substring(k+1),k=k-(i.length-l.length),d=s}}f=d=s;for(var q=0,o=s,k=0;k<e.length;k++){i=e.charAt(k);if(d===s)switch(i){case "{":d=k;o=i;f="}";break;case "(":d=k;o=i;f=")";break;case "[":d=k,o=i,f="]"}i===o?q++:i===f&&(q--,0===q&&(i=e.substring(d,k+1),c.push(i),l="@ko_token_"+(c.length-1)+"@",e=e.substring(0,d)+l+e.substring(k+1),k-=i.length-l.length,d=s))}f=[];e=e.split(",");d=0;for(k=e.length;d<k;d++)q=e[d],o=q.indexOf(":"),0<o&&o<q.length-1?(i=q.substring(o+1),f.push({key:b(q.substring(0,
o),c),value:b(i,c)})):f.push({unknown:b(q,c)});return f},ka:function(b){for(var c="string"===typeof b?a.g.W(b):b,h=[],b=[],j,k=0;j=c[k];k++)if(0<h.length&&h.push(","),j.key){var i;a:{i=j.key;var l=a.a.w(i);switch(l.length&&l.charAt(0)){case "'":case '"':break a;default:i="'"+l+"'"}}j=j.value;h.push(i);h.push(":");h.push(j);l=a.a.w(j);if(0<=a.a.j(f,a.a.w(l).toLowerCase())?0:l.match(d)!==s)0<b.length&&b.push(", "),b.push(i+" : function(__ko_value) { "+j+" = __ko_value; }")}else j.unknown&&h.push(j.unknown);
c=h.join("");0<b.length&&(c=c+", '_ko_property_writers' : { "+b.join("")+" } ");return c},wb:function(b,c){for(var d=0;d<b.length;d++)if(a.a.w(b[d].key)==c)return p;return t},$:function(b,c,d,f,k){if(!b||!a.Ha(b)){if((b=c()._ko_property_writers)&&b[d])b[d](f)}else(!k||b()!==f)&&b(f)}}}();a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.bindingRewriteValidators",a.g.D);a.b("jsonExpressionRewriting.parseObjectLiteral",a.g.W);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",
a.g.ka);(function(){function b(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(e)}function c(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(h)}function d(a,e){for(var d=a,f=1,g=[];d=d.nextSibling;){if(c(d)&&(f--,0===f))return g;g.push(d);b(d)&&f++}e||m(Error("Cannot find closing comment tag to match: "+a.nodeValue));return s}function f(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:s}var g="<\!--test--\>"===document.createComment("test").text,e=g?/^<\!--\s*ko\s+(.*\:.*)\s*--\>$/:
/^\s*ko\s+(.*\:.*)\s*$/,h=g?/^<\!--\s*\/ko\s*--\>$/:/^\s*\/ko\s*$/,j={ul:p,ol:p};a.e={C:{},childNodes:function(a){return b(a)?d(a):a.childNodes},ha:function(c){if(b(c))for(var c=a.e.childNodes(c),e=0,d=c.length;e<d;e++)a.removeNode(c[e]);else a.a.ga(c)},X:function(c,e){if(b(c)){a.e.ha(c);for(var d=c.nextSibling,f=0,g=e.length;f<g;f++)d.parentNode.insertBefore(e[f],d)}else a.a.X(c,e)},Ka:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},
Fa:function(a,c,e){b(a)?a.parentNode.insertBefore(c,e.nextSibling):e.nextSibling?a.insertBefore(c,e.nextSibling):a.appendChild(c)},firstChild:function(a){return!b(a)?a.firstChild:!a.nextSibling||c(a.nextSibling)?s:a.nextSibling},nextSibling:function(a){b(a)&&(a=f(a));return a.nextSibling&&c(a.nextSibling)?s:a.nextSibling},Xa:function(a){return(a=b(a))?a[1]:s},Ia:function(e){if(j[a.a.o(e)]){var d=e.firstChild;if(d){do if(1===d.nodeType){var g;g=d.firstChild;var h=s;if(g){do if(h)h.push(g);else if(b(g)){var o=
f(g,p);o?g=o:h=[g]}else c(g)&&(h=[g]);while(g=g.nextSibling)}if(g=h){h=d.nextSibling;for(o=0;o<g.length;o++)h?e.insertBefore(g[o],h):e.appendChild(g[o])}}while(d=d.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.C);a.b("virtualElements.emptyNode",a.e.ha);a.b("virtualElements.insertAfter",a.e.Fa);a.b("virtualElements.prepend",a.e.Ka);a.b("virtualElements.setDomNodeChildren",a.e.X);(function(){a.J=function(){this.cb={}};a.a.extend(a.J.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind")!=
s;case 8:return a.e.Xa(b)!=s;default:return t}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c):s},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.Xa(b);default:return s}},parseBindingsString:function(b,c){try{var d=c.$data,d="object"==typeof d&&d!=s?[d,c]:[c],f=d.length,g=this.cb,e=f+"_"+b,h;if(!(h=g[e])){var j=" { "+a.g.ka(b)+" } ";h=g[e]=a.a.eb(j,f)}return h(d)}catch(k){m(Error("Unable to parse bindings.\nMessage: "+
k+";\nBindings value: "+b))}}});a.J.instance=new a.J})();a.b("bindingProvider",a.J);(function(){function b(b,d,e){for(var h=a.e.firstChild(d);d=h;)h=a.e.nextSibling(d),c(b,d,e)}function c(c,g,e){var h=p,j=1===g.nodeType;j&&a.e.Ia(g);if(j&&e||a.J.instance.nodeHasBindings(g))h=d(g,s,c,e).Gb;h&&b(c,g,!j)}function d(b,c,e,d){function j(a){return function(){return l[a]}}function k(){return l}var i=0,l,q;a.h(function(){var o=e&&e instanceof a.z?e:new a.z(a.a.d(e)),v=o.$data;d&&a.Ra(b,o);if(l=("function"==
typeof c?c():c)||a.J.instance.getBindings(b,o)){if(0===i){i=1;for(var u in l){var r=a.c[u];r&&8===b.nodeType&&!a.e.C[u]&&m(Error("The binding '"+u+"' cannot be used with virtual elements"));if(r&&"function"==typeof r.init&&(r=(0,r.init)(b,j(u),k,v,o))&&r.controlsDescendantBindings)q!==n&&m(Error("Multiple bindings ("+q+" and "+u+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),q=u}i=2}if(2===i)for(u in l)(r=a.c[u])&&"function"==
typeof r.update&&(0,r.update)(b,j(u),k,v,o)}},s,{disposeWhenNodeIsRemoved:b});return{Gb:q===n}}a.c={};a.z=function(b,c){c?(a.a.extend(this,c),this.$parentContext=c,this.$parent=c.$data,this.$parents=(c.$parents||[]).slice(0),this.$parents.unshift(this.$parent)):(this.$parents=[],this.$root=b);this.$data=b};a.z.prototype.createChildContext=function(b){return new a.z(b,this)};a.z.prototype.extend=function(b){var c=a.a.extend(new a.z,this);return a.a.extend(c,b)};a.Ra=function(b,c){if(2==arguments.length)a.a.f.set(b,
"__ko_bindingContext__",c);else return a.a.f.get(b,"__ko_bindingContext__")};a.ya=function(b,c,e){1===b.nodeType&&a.e.Ia(b);return d(b,c,e,p)};a.Ya=function(a,c){(1===c.nodeType||8===c.nodeType)&&b(a,c,p)};a.xa=function(a,b){b&&(1!==b.nodeType&&8!==b.nodeType)&&m(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));b=b||window.document.body;c(a,b,p)};a.ea=function(b){switch(b.nodeType){case 1:case 8:var c=a.Ra(b);if(c)return c;if(b.parentNode)return a.ea(b.parentNode)}};
a.hb=function(b){return(b=a.ea(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("applyBindings",a.xa);a.b("applyBindingsToDescendants",a.Ya);a.b("applyBindingsToNode",a.ya);a.b("contextFor",a.ea);a.b("dataFor",a.hb)})();a.a.v(["click"],function(b){a.c[b]={init:function(c,d,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},f,g)}}});a.c.event={init:function(b,c,d,f){var g=c()||{},e;for(e in g)(function(){var g=e;"string"==typeof g&&a.a.n(b,g,function(b){var e,i=c()[g];if(i){var l=
d();try{var q=a.a.L(arguments);q.unshift(f);e=i.apply(f,q)}finally{e!==p&&(b.preventDefault?b.preventDefault():b.returnValue=t)}l[g+"Bubble"]===t&&(b.cancelBubble=p,b.stopPropagation&&b.stopPropagation())}})})()}};a.c.submit={init:function(b,c,d,f){"function"!=typeof c()&&m(Error("The value for a submit binding must be a function"));a.a.n(b,"submit",function(a){var e,d=c();try{e=d.call(f,b)}finally{e!==p&&(a.preventDefault?a.preventDefault():a.returnValue=t)}})}};a.c.visible={update:function(b,c){var d=
a.a.d(c()),f="none"!=b.style.display;d&&!f?b.style.display="":!d&&f&&(b.style.display="none")}};a.c.enable={update:function(b,c){var d=a.a.d(c());d&&b.disabled?b.removeAttribute("disabled"):!d&&!b.disabled&&(b.disabled=p)}};a.c.disable={update:function(b,c){a.c.enable.update(b,function(){return!a.a.d(c())})}};a.c.value={init:function(b,c,d){function f(){var e=c(),f=a.k.r(b);a.g.$(e,d,"value",f,p)}var g=["change"],e=d().valueUpdate;e&&("string"==typeof e&&(e=[e]),a.a.N(g,e),g=a.a.za(g));if(a.a.ja&&
("input"==b.tagName.toLowerCase()&&"text"==b.type&&"off"!=b.autocomplete&&(!b.form||"off"!=b.form.autocomplete))&&-1==a.a.j(g,"propertychange")){var h=t;a.a.n(b,"propertychange",function(){h=p});a.a.n(b,"blur",function(){if(h){h=t;f()}})}a.a.v(g,function(c){var e=f;if(a.a.Hb(c,"after")){e=function(){setTimeout(f,0)};c=c.substring(5)}a.a.n(b,c,e)})},update:function(b,c){var d="select"===a.a.o(b),f=a.a.d(c()),g=a.k.r(b),e=f!=g;0===f&&(0!==g&&"0"!==g)&&(e=p);e&&(g=function(){a.k.S(b,f)},g(),d&&setTimeout(g,
0));d&&0<b.length&&B(b,f,t)}};a.c.options={update:function(b,c,d){"select"!==a.a.o(b)&&m(Error("options binding applies only to SELECT elements"));for(var f=0==b.length,g=a.a.T(a.a.aa(b.childNodes,function(b){return b.tagName&&"option"===a.a.o(b)&&b.selected}),function(b){return a.k.r(b)||b.innerText||b.textContent}),e=b.scrollTop,h=a.a.d(c());0<b.length;)a.F(b.options[0]),b.remove(0);if(h){d=d();"number"!=typeof h.length&&(h=[h]);if(d.optionsCaption){var j=document.createElement("option");a.a.Y(j,
d.optionsCaption);a.k.S(j,n);b.appendChild(j)}for(var c=0,k=h.length;c<k;c++){var j=document.createElement("option"),i="string"==typeof d.optionsValue?h[c][d.optionsValue]:h[c],i=a.a.d(i);a.k.S(j,i);var l=d.optionsText,i="function"==typeof l?l(h[c]):"string"==typeof l?h[c][l]:i;if(i===s||i===n)i="";a.a.Qa(j,i);b.appendChild(j)}h=b.getElementsByTagName("option");c=j=0;for(k=h.length;c<k;c++)0<=a.a.j(g,a.k.r(h[c]))&&(a.a.Pa(h[c],p),j++);b.scrollTop=e;f&&"value"in d&&B(b,a.a.d(d.value),p);a.a.lb(b)}}};
a.c.options.oa="__ko.optionValueDomData__";a.c.selectedOptions={Ea:function(b){for(var c=[],b=b.childNodes,d=0,f=b.length;d<f;d++){var g=b[d],e=a.a.o(g);"option"==e&&g.selected?c.push(a.k.r(g)):"optgroup"==e&&(g=a.c.selectedOptions.Ea(g),Array.prototype.splice.apply(c,[c.length,0].concat(g)))}return c},init:function(b,c,d){a.a.n(b,"change",function(){var b=c(),g=a.c.selectedOptions.Ea(this);a.g.$(b,d,"value",g)})},update:function(b,c){"select"!=a.a.o(b)&&m(Error("values binding applies only to SELECT elements"));
var d=a.a.d(c());if(d&&"number"==typeof d.length)for(var f=b.childNodes,g=0,e=f.length;g<e;g++){var h=f[g];"option"===a.a.o(h)&&a.a.Pa(h,0<=a.a.j(d,a.k.r(h)))}}};a.c.text={update:function(b,c){a.a.Qa(b,c())}};a.c.html={init:function(){return{controlsDescendantBindings:p}},update:function(b,c){var d=a.a.d(c());a.a.Y(b,d)}};a.c.css={update:function(b,c){var d=a.a.d(c()||{}),f;for(f in d)if("string"==typeof f){var g=a.a.d(d[f]);a.a.Ua(b,f,g)}}};a.c.style={update:function(b,c){var d=a.a.d(c()||{}),f;
for(f in d)if("string"==typeof f){var g=a.a.d(d[f]);b.style[f]=g||""}}};a.c.uniqueName={init:function(b,c){c()&&(b.name="ko_unique_"+ ++a.c.uniqueName.gb,(a.a.tb||a.a.ub)&&b.mergeAttributes(document.createElement("<input name='"+b.name+"'/>"),t))}};a.c.uniqueName.gb=0;a.c.checked={init:function(b,c,d){a.a.n(b,"click",function(){var f;if("checkbox"==b.type)f=b.checked;else if("radio"==b.type&&b.checked)f=b.value;else return;var g=c();"checkbox"==b.type&&a.a.d(g)instanceof Array?(f=a.a.j(a.a.d(g),b.value),
b.checked&&0>f?g.push(b.value):!b.checked&&0<=f&&g.splice(f,1)):a.g.$(g,d,"checked",f,p)});"radio"==b.type&&!b.name&&a.c.uniqueName.init(b,A(p))},update:function(b,c){var d=a.a.d(c());"checkbox"==b.type?b.checked=d instanceof Array?0<=a.a.j(d,b.value):d:"radio"==b.type&&(b.checked=b.value==d)}};var F={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.d(c())||{},f;for(f in d)if("string"==typeof f){var g=a.a.d(d[f]),e=g===t||g===s||g===n;e&&b.removeAttribute(f);8>=a.a.ja&&
f in F?(f=F[f],e?b.removeAttribute(f):b[f]=g):e||b.setAttribute(f,g.toString())}}};a.c.hasfocus={init:function(b,c,d){function f(b){var e=c();a.g.$(e,d,"hasfocus",b,p)}a.a.n(b,"focus",function(){f(p)});a.a.n(b,"focusin",function(){f(p)});a.a.n(b,"blur",function(){f(t)});a.a.n(b,"focusout",function(){f(t)})},update:function(b,c){var d=a.a.d(c());d?b.focus():b.blur();a.a.va(b,d?"focusin":"focusout")}};a.c["with"]={p:function(b){return function(){var c=b();return{"if":c,data:c,templateEngine:a.q.K}}},
init:function(b,c){return a.c.template.init(b,a.c["with"].p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c["with"].p(c),d,f,g)}};a.g.D["with"]=t;a.e.C["with"]=p;a.c["if"]={p:function(b){return function(){return{"if":b(),templateEngine:a.q.K}}},init:function(b,c){return a.c.template.init(b,a.c["if"].p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c["if"].p(c),d,f,g)}};a.g.D["if"]=t;a.e.C["if"]=p;a.c.ifnot={p:function(b){return function(){return{ifnot:b(),templateEngine:a.q.K}}},
init:function(b,c){return a.c.template.init(b,a.c.ifnot.p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c.ifnot.p(c),d,f,g)}};a.g.D.ifnot=t;a.e.C.ifnot=p;a.c.foreach={p:function(b){return function(){var c=a.a.d(b());return!c||"number"==typeof c.length?{foreach:c,templateEngine:a.q.K}:{foreach:c.data,includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,templateEngine:a.q.K}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.p(c))},
update:function(b,c,d,f,g){return a.c.template.update(b,a.c.foreach.p(c),d,f,g)}};a.g.D.foreach=t;a.e.C.foreach=p;a.t=function(){};a.t.prototype.renderTemplateSource=function(){m(Error("Override renderTemplateSource"))};a.t.prototype.createJavaScriptEvaluatorBlock=function(){m(Error("Override createJavaScriptEvaluatorBlock"))};a.t.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){var c=c||document,d=c.getElementById(b);d||m(Error("Cannot find template with ID "+b));return new a.l.i(d)}if(1==
b.nodeType||8==b.nodeType)return new a.l.M(b);m(Error("Unknown template type: "+b))};a.t.prototype.renderTemplate=function(a,c,d,f){return this.renderTemplateSource(this.makeTemplateSource(a,f),c,d)};a.t.prototype.isTemplateRewritten=function(a,c){return this.allowTemplateRewriting===t||!(c&&c!=document)&&this.V&&this.V[a]?p:this.makeTemplateSource(a,c).data("isRewritten")};a.t.prototype.rewriteTemplate=function(a,c,d){var f=this.makeTemplateSource(a,d),c=c(f.text());f.text(c);f.data("isRewritten",
p);!(d&&d!=document)&&"string"==typeof a&&(this.V=this.V||{},this.V[a]=p)};a.b("templateEngine",a.t);a.Z=function(){function b(b,c,e){for(var b=a.g.W(b),d=a.g.D,j=0;j<b.length;j++){var k=b[j].key;if(d.hasOwnProperty(k)){var i=d[k];"function"===typeof i?(k=i(b[j].value))&&m(Error(k)):i||m(Error("This template engine does not support the '"+k+"' binding within its templates"))}}b="ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {             return (function() { return { "+a.g.ka(b)+
" } })()         })";return e.createJavaScriptEvaluatorBlock(b)+c}var c=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,d=/<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g;return{mb:function(b,c,e){c.isTemplateRewritten(b,e)||c.rewriteTemplate(b,function(b){return a.Z.zb(b,c)},e)},zb:function(a,g){return a.replace(c,function(a,c,d,f,i,l,q){return b(q,c,g)}).replace(d,function(a,c){return b(c,"<\!-- ko --\>",g)})},Za:function(b){return a.s.na(function(c,
e){c.nextSibling&&a.ya(c.nextSibling,b,e)})}}}();a.b("templateRewriting",a.Z);a.b("templateRewriting.applyMemoizedBindingsToNextSibling",a.Z.Za);(function(){a.l={};a.l.i=function(a){this.i=a};a.l.i.prototype.text=function(){var b=a.a.o(this.i),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.i[b];var c=arguments[0];"innerHTML"===b?a.a.Y(this.i,c):this.i[b]=c};a.l.i.prototype.data=function(b){if(1===arguments.length)return a.a.f.get(this.i,"templateSourceData_"+
b);a.a.f.set(this.i,"templateSourceData_"+b,arguments[1])};a.l.M=function(a){this.i=a};a.l.M.prototype=new a.l.i;a.l.M.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.i,"__ko_anon_template__")||{};b.ua===n&&b.da&&(b.ua=b.da.innerHTML);return b.ua}a.a.f.set(this.i,"__ko_anon_template__",{ua:arguments[0]})};a.l.i.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.i,"__ko_anon_template__")||{}).da;a.a.f.set(this.i,"__ko_anon_template__",{da:arguments[0]})};
a.b("templateSources",a.l);a.b("templateSources.domElement",a.l.i);a.b("templateSources.anonymousTemplate",a.l.M)})();(function(){function b(b,c,d){for(var f,c=a.e.nextSibling(c);b&&(f=b)!==c;)b=a.e.nextSibling(f),(1===f.nodeType||8===f.nodeType)&&d(f)}function c(c,d){if(c.length){var f=c[0],g=c[c.length-1];b(f,g,function(b){a.xa(d,b)});b(f,g,function(b){a.s.Wa(b,[d])})}}function d(a){return a.nodeType?a:0<a.length?a[0]:s}function f(b,f,j,k,i){var i=i||{},l=b&&d(b),l=l&&l.ownerDocument,q=i.templateEngine||
g;a.Z.mb(j,q,l);j=q.renderTemplate(j,k,i,l);("number"!=typeof j.length||0<j.length&&"number"!=typeof j[0].nodeType)&&m(Error("Template engine must return an array of DOM nodes"));l=t;switch(f){case "replaceChildren":a.e.X(b,j);l=p;break;case "replaceNode":a.a.Na(b,j);l=p;break;case "ignoreTargetNode":break;default:m(Error("Unknown renderMode: "+f))}l&&(c(j,k),i.afterRender&&i.afterRender(j,k.$data));return j}var g;a.ra=function(b){b!=n&&!(b instanceof a.t)&&m(Error("templateEngine must inherit from ko.templateEngine"));
g=b};a.qa=function(b,c,j,k,i){j=j||{};(j.templateEngine||g)==n&&m(Error("Set a template engine before calling renderTemplate"));i=i||"replaceChildren";if(k){var l=d(k);return a.h(function(){var g=c&&c instanceof a.z?c:new a.z(a.a.d(c)),o="function"==typeof b?b(g.$data):b,g=f(k,i,o,g,j);"replaceNode"==i&&(k=g,l=d(k))},s,{disposeWhen:function(){return!l||!a.a.fa(l)},disposeWhenNodeIsRemoved:l&&"replaceNode"==i?l.parentNode:l})}return a.s.na(function(d){a.qa(b,c,j,d,"replaceNode")})};a.Fb=function(b,
d,g,k,i){function l(a,b){c(b,o);g.afterRender&&g.afterRender(b,a)}function q(c,d){var h="function"==typeof b?b(c):b;o=i.createChildContext(a.a.d(c));o.$index=d;return f(s,"ignoreTargetNode",h,o,g)}var o;return a.h(function(){var b=a.a.d(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.aa(b,function(b){return g.includeDestroyed||b===n||b===s||!a.a.d(b._destroy)});a.a.Oa(k,b,q,g,l)},s,{disposeWhenNodeIsRemoved:k})};a.c.template={init:function(b,c){var d=a.a.d(c());if("string"!=typeof d&&!d.name&&
(1==b.nodeType||8==b.nodeType))d=1==b.nodeType?b.childNodes:a.e.childNodes(b),d=a.a.Ab(d),(new a.l.M(b)).nodes(d);return{controlsDescendantBindings:p}},update:function(b,c,d,f,g){c=a.a.d(c());f=p;"string"==typeof c?d=c:(d=c.name,"if"in c&&(f=f&&a.a.d(c["if"])),"ifnot"in c&&(f=f&&!a.a.d(c.ifnot)));var l=s;"object"===typeof c&&"foreach"in c?l=a.Fb(d||b,f&&c.foreach||[],c,b,g):f?(g="object"==typeof c&&"data"in c?g.createChildContext(a.a.d(c.data)):g,l=a.qa(d||b,g,c,b)):a.e.ha(b);g=l;(c=a.a.f.get(b,"__ko__templateSubscriptionDomDataKey__"))&&
"function"==typeof c.A&&c.A();a.a.f.set(b,"__ko__templateSubscriptionDomDataKey__",g)}};a.g.D.template=function(b){b=a.g.W(b);return 1==b.length&&b[0].unknown||a.g.wb(b,"name")?s:"This template engine does not support anonymous templates nested within its templates"};a.e.C.template=p})();a.b("setTemplateEngine",a.ra);a.b("renderTemplate",a.qa);(function(){a.a.O=function(b,c,d){if(d===n)return a.a.O(b,c,1)||a.a.O(b,c,10)||a.a.O(b,c,Number.MAX_VALUE);for(var b=b||[],c=c||[],f=b,g=c,e=[],h=0;h<=g.length;h++)e[h]=
[];for(var h=0,j=Math.min(f.length,d);h<=j;h++)e[0][h]=h;h=1;for(j=Math.min(g.length,d);h<=j;h++)e[h][0]=h;for(var j=f.length,k,i=g.length,h=1;h<=j;h++){k=Math.max(1,h-d);for(var l=Math.min(i,h+d);k<=l;k++)e[k][h]=f[h-1]===g[k-1]?e[k-1][h-1]:Math.min(e[k-1][h]===n?Number.MAX_VALUE:e[k-1][h]+1,e[k][h-1]===n?Number.MAX_VALUE:e[k][h-1]+1)}d=b.length;f=c.length;g=[];h=e[f][d];if(h===n)e=s;else{for(;0<d||0<f;){j=e[f][d];i=0<f?e[f-1][d]:h+1;l=0<d?e[f][d-1]:h+1;k=0<f&&0<d?e[f-1][d-1]:h+1;if(i===n||i<j-1)i=
h+1;if(l===n||l<j-1)l=h+1;k<j-1&&(k=h+1);i<=l&&i<k?(g.push({status:"added",value:c[f-1]}),f--):(l<i&&l<k?g.push({status:"deleted",value:b[d-1]}):(g.push({status:"retained",value:b[d-1]}),f--),d--)}e=g.reverse()}return e}})();a.b("utils.compareArrays",a.a.O);(function(){function b(a){if(2<a.length){for(var b=a[0],c=a[a.length-1],e=[b];b!==c;){b=b.nextSibling;if(!b)return;e.push(b)}Array.prototype.splice.apply(a,[0,a.length].concat(e))}}function c(c,f,g,e,h){var j=[],c=a.h(function(){var c=f(g,h)||
[];0<j.length&&(b(j),a.a.Na(j,c),e&&e(g,c));j.splice(0,j.length);a.a.N(j,c)},s,{disposeWhenNodeIsRemoved:c,disposeWhen:function(){return 0==j.length||!a.a.fa(j[0])}});return{xb:j,h:c}}a.a.Oa=function(d,f,g,e,h){for(var f=f||[],e=e||{},j=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===n,k=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],i=a.a.T(k,function(a){return a.$a}),l=a.a.O(i,f),f=[],q=0,o=[],v=0,i=[],u=s,r=0,w=l.length;r<w;r++)switch(l[r].status){case "retained":var y=
k[q];y.qb(v);v=f.push(y);0<y.P.length&&(u=y.P[y.P.length-1]);q++;break;case "deleted":k[q].h.A();b(k[q].P);a.a.v(k[q].P,function(a){o.push({element:a,index:r,value:l[r].value});u=a});q++;break;case "added":for(var y=l[r].value,x=a.m(v),v=c(d,g,y,h,x),C=v.xb,v=f.push({$a:l[r].value,P:C,h:v.h,qb:x}),z=0,B=C.length;z<B;z++){var D=C[z];i.push({element:D,index:r,value:l[r].value});u==s?a.e.Ka(d,D):a.e.Fa(d,D,u);u=D}h&&h(y,C,x)}a.a.v(o,function(b){a.F(b.element)});g=t;if(!j){if(e.afterAdd)for(r=0;r<i.length;r++)e.afterAdd(i[r].element,
i[r].index,i[r].value);if(e.beforeRemove){for(r=0;r<o.length;r++)e.beforeRemove(o[r].element,o[r].index,o[r].value);g=p}}if(!g&&o.length)for(r=0;r<o.length;r++)e=o[r].element,e.parentNode&&e.parentNode.removeChild(e);a.a.f.set(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult",f)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Oa);a.q=function(){this.allowTemplateRewriting=t};a.q.prototype=new a.t;a.q.prototype.renderTemplateSource=function(b){var c=!(9>a.a.ja)&&b.nodes?b.nodes():s;
if(c)return a.a.L(c.cloneNode(p).childNodes);b=b.text();return a.a.pa(b)};a.q.K=new a.q;a.ra(a.q.K);a.b("nativeTemplateEngine",a.q);(function(){a.ma=function(){var a=this.vb=function(){if("undefined"==typeof jQuery||!jQuery.tmpl)return 0;try{if(0<=jQuery.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,f,g){g=g||{};2>a&&m(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));var e=b.data("precompiled");
e||(e=b.text()||"",e=jQuery.template(s,"{{ko_with $item.koBindingContext}}"+e+"{{/ko_with}}"),b.data("precompiled",e));b=[f.$data];f=jQuery.extend({koBindingContext:f},g.templateOptions);f=jQuery.tmpl(e,b,f);f.appendTo(document.createElement("div"));jQuery.fragments={};return f};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){document.write("<script type='text/html' id='"+a+"'>"+b+"<\/script>")};0<a&&(jQuery.tmpl.tag.ko_code=
{open:"__.push($1 || '');"},jQuery.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.ma.prototype=new a.t;var b=new a.ma;0<b.vb&&a.ra(b);a.b("jqueryTmplTemplateEngine",a.ma)})()}"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?E(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],E):E(window.ko={});p;
})(window,document,navigator);;
/* -----------------------------*/
var CNUTIL = CNUTIL || {};

CNUTIL.getNumberFromObject = function (input) {
    var number;
    if (typeof input === 'number') {
        number = input;
    } else if (typeof input === 'function') {
        var calculatedValue = input();
        if (typeof calculatedValue === 'number') {
            number = calculatedValue;
        }
    }
    return number;
};

CNUTIL.callIfFunction = function (possibleFunction, args) {
    if (typeof possibleFunction === 'function') {
        possibleFunction(args);
    }
};

var CNCSS = CNCSS || {};

CNCSS.getMatrixObjectFromString = function (matrixString) {
    var matrixObject = {};
    if (matrixString.length > 0) {
        var matrixParts = /matrix\((\d+), (\d+), (\d+), (\d+), (-?\d+)p?x?, (-?\d+)p?x?\)/.exec(matrixString);
        if (matrixParts.length === 7) {
            matrixObject.a = matrixParts[1];
            matrixObject.b = matrixParts[3];
            matrixObject.c = matrixParts[2];
            matrixObject.d = matrixParts[4];
            matrixObject.tx = parseInt(matrixParts[5]);
            matrixObject.ty = parseInt(matrixParts[6]);
        }
    }
    return matrixObject;
};
CNCSS.getMatrixStringFromObject = function (matrixObject) {
    var matrixString = '';
    if (matrixObject !== null && typeof matrixObject === 'object') {
        matrixString = 'matrix(' + matrixObject.a + ', ' + matrixObject.c + ', ' + matrixObject.b + ', ' + matrixObject.d + ', ' + matrixObject.tx + ', ' + matrixObject.ty + ')';
    }
    return matrixString;
};

var CNTOUCH = CNTOUCH || {};

CNTOUCH.isTouchAvailable = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

// cross-browser, cross device, cross event pointer position
CNTOUCH.getTouchPosition = function (e) {
    var x = 0;
    var y = 0;
    if (typeof e.originalEvent.changedTouches === 'object' && e.originalEvent.changedTouches.length > 0 && typeof e.originalEvent.changedTouches[0].pageX === 'number') {
        x = e.originalEvent.changedTouches[0].pageX;
        y = e.originalEvent.changedTouches[0].pageY;
    } else if (typeof e.originalEvent.pageX === 'number') {
        x = e.originalEvent.pageX;
        y = e.originalEvent.pageY;
    } else if (typeof e.originalEvent.clientX === 'number') {
        x = e.originalEvent.clientX;
        y = e.originalEvent.clientY;
    } else if (typeof e.originalEvent.targetTouches === 'object' && e.originalEvent.targetTouches.length > 0) {
        x = e.originalEvent.targetTouches[0].pageX;
        y = e.originalEvent.targetTouches[0].pageY;
    }
    return {
        x: x,
        y: y
    };
};

(function ($) {
    $.fn.followTouch = function (options) {
        var defaults = {
            allowedAxis: 'x', // x|y|xy
            eventNamespace: null,
            getSafeLeftPosition: null, // can be a function that returns an integer that sanitises a proposed left position (which is passed to the function)
            getSafeTopPosition: null, // can be a function that returns an integer that sanitises a proposed top position (which is passed to the function)
            isMomentumEnabled: false,
            minValue: {}, // to contain left and/or top. can be either integer or function that returns integer for minimum left and top positions.
            maxValue: {}, // to contain left and/or top. can be either integer or function that returns integer for maximum left and top positions.
            momentumEaseTime: 500,
            onStartCallback: null,
            onMoveCallback: null,
            onEndCallback: null,
            swipeThreshold: 100,
            useMouse: true
        };
        options = $.extend(defaults, options);

        return this.each(function () {
            var $this = $(this);

            var touchStartPosition = {};
            var lastPageX, lastPageY, lastTouchDeltaX, lastTouchDeltaY, touchHistory;

            function isDirectionAllowed(direction) {
                return options.allowedAxis.indexOf(direction) != -1;
            };

            function getMinLeft() {
                return CNUTIL.getNumberFromObject(options.minValue.left);
            };

            function getMaxLeft() {
                return CNUTIL.getNumberFromObject(options.maxValue.left);
            };

            function getMinTop() {
                return CNUTIL.getNumberFromObject(options.minValue.top);
            };

            function getMaxTop() {
                return CNUTIL.getNumberFromObject(options.maxValue.top);
            };

            function keepInBounds(position) {
                var safePosition = position;
                if (typeof safePosition.left === 'number') {
                    if (safePosition.left < getMinLeft()) {
                        safePosition.left = getMinLeft();
                    } else if (safePosition.left > getMaxLeft()) {
                        safePosition.left = getMaxLeft();
                    }
                } else {
                    safePosition.left = null;
                }
                if (typeof safePosition.top === 'number') {
                    if (safePosition.top < getMinTop()) {
                        safePosition.top = getMinTop();
                    } else if (safePosition.top > getMaxTop()) {
                        safePosition.top = getMaxTop();
                    }
                } else {
                    safePosition.top = null;
                }
                return safePosition;
            };

            $this.swipeDetect({
                eventNamespace: options.eventNamespace,
                onStartCallback:
                    function () {
                        if (options.isMomentumEnabled) {
                            $this.stop(true, false);
                            touchHistory = [];
                        }
                        touchStartPosition.left = $this.position().left;
                        touchStartPosition.top = $this.position().top;
                        CNUTIL.callIfFunction(options.onStartCallback);
                    },
                onMoveCallback:
                    function (delta) {
                        if (options.isMomentumEnabled) {
                            touchHistory.push({ timestamp: new Date().getTime(), position: $this.position() });
                        }
                        var newPosition = {};
                        if (isDirectionAllowed('x')) {
                            newPosition.left = delta.x + touchStartPosition.left;
                        }
                        if (isDirectionAllowed('y')) {
                            newPosition.top = delta.y + touchStartPosition.top;
                        }
                        var safePosition = keepInBounds(newPosition);
                        if (typeof safePosition.left !== 'undefined') {
                            $this.css('left', safePosition.left + 'px');
                        }
                        if (typeof safePosition.top !== 'undefined') {
                            $this.css('top', safePosition.top + 'px');
                        }
                        CNUTIL.callIfFunction(options.onMoveCallback, delta);
                    },
                onEndCallback:
                    function (delta, swipeResult) {
                        if (options.isMomentumEnabled) {
                            var currentPosition = $this.position();
                            var currentTime = new Date().getTime();
                            var startMomentumCalcPosition = currentPosition;
                            while (touchHistory !== null && touchHistory.length > 0) {
                                var touchHistoryItem = touchHistory.pop();
                                if (touchHistoryItem.timestamp > currentTime - 50) {
                                    startMomentumCalcPosition = touchHistoryItem.position;
                                } else {
                                    touchHistory = null;
                                }
                            }
                            var desiredPosition = {
                                left: isDirectionAllowed('x') ? currentPosition.left + ((currentPosition.left - startMomentumCalcPosition.left) * 8) : 0,
                                top: isDirectionAllowed('y') ? currentPosition.top + ((currentPosition.top - startMomentumCalcPosition.top) * 8) : 0
                            };
                            var safePosition = keepInBounds(desiredPosition);
                            var animationTime = options.momentumEaseTime;
                            if (typeof safePosition.left === 'number') {
                                safePosition.left += 'px';
                            }
                            if (typeof safePosition.top === 'number') {
                                safePosition.top += 'px';
                            }
                            $this.animate(safePosition, animationTime, 'easeOutQuad');
                        }
                        CNUTIL.callIfFunction(options.onEndCallback, delta, swipeResult);
                    },
                swipeThreshold: options.swipeThreshold,
                swipeDirection: options.allowedAxis,
                useMouse: options.useMouse
            });
        });
    };
})(jQuery);

(function ($) {
    $.fn.swipeDetect = function (options) {

        var defaults = {
            eventNamespace: null,
            onStartCallback: null,
            onMoveCallback: null,
            onEndCallback: null,
            swipeThreshold: 100,
            swipeDirection: 'x', // x|y|xy
            useMouse: false // set to true to enable using the mouse to trigger 'touch' events
        };
        options = $.extend(defaults, options);

        function isDirectionAllowed (direction) {
            return options.swipeDirection.indexOf(direction) != -1;
        };

        return this.each(function () {
            var $this = $(this);
            var dragInProgress = false;
            CNTOUCH.registerTouchEvents(
                $this,
                function () {
                    dragInProgress = false;
                    if (typeof options.onStartCallback === 'function') {
                        options.onStartCallback();
                    }
                },
                function (e, delta) { // move
                    if (
                        dragInProgress || // we've already determined that a drag is occurring
                        (
                            (Math.abs(delta.x) >= 3 || Math.abs(delta.y) >= 3) && // the movement is of a directionally discernable distance
                            (
                                (isDirectionAllowed('x') && isDirectionAllowed('y')) || // movement in any direction is allowed
                                (isDirectionAllowed('x') && Math.abs(delta.x) > Math.abs(delta.y) * 2) || // movement in allowed direction indicates this is a swipe
                                (isDirectionAllowed('y') && Math.abs(delta.y) > Math.abs(delta.x) * 2) // movement in allowed direction indicates this is a swipe
                            )
                        )
                    ) {
                        if (!dragInProgress) {
                            dragInProgress = true;
                        }
                        e.preventDefault();
                    }
                    if (typeof options.onMoveCallback === 'function') {
                        options.onMoveCallback(delta);
                    }
                },
                function (e, delta) { // end
                    dragInProgress = false;
                    var event = '';
                    if (Math.abs(delta.x) > Math.abs(delta.y)) {
                        // horizontal swipe
                        if (Math.abs(delta.x) >= options.swipeThreshold) {
                            if (delta.x < 0) {
                                event = 'swipeLeft';
                            } else {
                                event = 'swipeRight';
                            }
                        }
                    } else {
                        // vertical swipe
                        if (Math.abs(delta.y) >= options.swipeThreshold) {
                            if (delta.y < 0) {
                                event = 'swipeUp';
                            } else {
                                event = 'swipeDown';
                            }
                        }
                    }
                    if (event.length > 0) {
                        e.preventDefault();
                        $this.trigger(event);
                    }
                    if (typeof options.onEndCallback === 'function') {
                        options.onEndCallback(delta, event);
                    }
                },
                options.useMouse,
                options.eventNamespace
            );
        });
    }
})(jQuery);

(function ($) {
    $.fn.registerTouchEvents = function (options) {
        var defaults = {
            eventNamespace: null,
            onStartCallback: null,
            onMoveCallback: null,
            onEndCallback: null,
            useMouse: false // set to true to enable using the mouse to trigger 'touch' events
        };
        options = $.extend(defaults, options);
        return this.each(function () {
            if (options.useMouse === false && CNTOUCH.isTouchAvailable === false) {
                return;
            }
            var $element = $(this);
            var firstPageX, firstPageY, lastPageX, lastPageY;
            var mousedown = false;
            var eventNamespace = typeof options.eventNamespace === 'string' ? '.' + options.eventNamespace : '';
            var startEventNames = (CNTOUCH.isTouchAvailable ? 'touchstart' : 'mousedown') + eventNamespace;
            var moveEventNames = (CNTOUCH.isTouchAvailable ? 'touchmove' : 'mousemove') + eventNamespace;
            var endEventNames = (CNTOUCH.isTouchAvailable ? 'touchend' : 'mouseup') + eventNamespace;

            function onStart(e) {
                if (e.type === 'mousedown') {
                    e.preventDefault();
                    mousedown = true;
                }
                firstPageX = lastPageX = CNTOUCH.getTouchPosition(e).x;
                firstPageY = lastPageY = CNTOUCH.getTouchPosition(e).y;
                $('html')
                    .on(moveEventNames, onMove)
                    .on(endEventNames, onEnd);
                if (typeof options.onStartCallback === 'function') {
                    options.onStartCallback($element, e, { x: firstPageX, y: firstPageY });
                }
            };

            function onMove(e) {
                if (e.type === 'mousemove' && !mousedown) {
                    return;
                }
                if (typeof options.onMoveCallback === 'function') {
                    var totalTouchDeltaY = CNTOUCH.getTouchPosition(e).y - firstPageY;
                    var totalTouchDeltaX = CNTOUCH.getTouchPosition(e).x - firstPageX;
                    options.onMoveCallback($element, e, { x: totalTouchDeltaX, y: totalTouchDeltaY });
                }
            };

            function onEnd(e) {
                $('html')
                    .off(moveEventNames, onMove)
                    .off(endEventNames, onEnd);
                mousedown = false;
                if (typeof options.onEndCallback === 'function') {
                    var totalTouchDeltaY = CNTOUCH.getTouchPosition(e).y - firstPageY;
                    var totalTouchDeltaX = CNTOUCH.getTouchPosition(e).x - firstPageX;
                    options.onEndCallback($element, e, { x: totalTouchDeltaX, y: totalTouchDeltaY });
                }
            };

            $element.on(startEventNames, onStart);
        });
    }
    $.fn.clearTouchEvents = function(options) {
        var defaults = {
            eventNamespace: null
        };
        options = $.extend(defaults, options);
        return this.each(function () {
            var $element = $(this);
            var eventNamespace = typeof options.eventNamespace === 'string' ? '.' + options.eventNamespace : '';
            var startEventNames = (CNTOUCH.isTouchAvailable ? 'touchstart' : 'mousedown') + eventNamespace;
            $element.off(startEventNames);
        });
    }
})(jQuery);

(function ($) {
    $.fn.cssTransform = function (newValue) {
        if (this.length === 0) {
            return;
        }
        if (typeof newValue === 'undefined' || newValue === null) {
            var $this = $(this[0]);
            var currentValue = $this.css('transform') || $this.css('-o-transform') || $this.css('-ms-transform') || $this.css('-moz-transform') || $this.css('-webkit-transform');
            return currentValue;
        } else {
            this.css({ '-webkit-transform': newValue, '-moz-transform': newValue, '-ms-transform': newValue, '-o-transform': newValue, 'transform': newValue });
        }
    }
})(jQuery);

// registers touch events and reports back information about touch movement
CNTOUCH.registerTouchEvents = function ($element, onStartCallback, onMoveCallback, onEndCallback, useMouse, eventNamespace) {
    if (useMouse === false && CNTOUCH.isTouchAvailable === false) {
        return;
    }
    var firstPageX, firstPageY, lastPageX, lastPageY;
    var mousedown = false;
    eventNamespace = typeof eventNamespace === 'string' ? '.' + eventNamespace : '';
    var startEventNames = (CNTOUCH.isTouchAvailable ? 'touchstart' : 'mousedown') + eventNamespace;
    var moveEventNames = (CNTOUCH.isTouchAvailable ? 'touchmove' : 'mousemove') + eventNamespace;
    var endEventNames = (CNTOUCH.isTouchAvailable ? 'touchend' : 'mouseup') + eventNamespace;

    function onStart(e) {
        if (e.type === 'mousedown') {
            e.preventDefault();
            mousedown = true;
        }
        firstPageX = lastPageX = CNTOUCH.getTouchPosition(e).x;
        firstPageY = lastPageY = CNTOUCH.getTouchPosition(e).y;
        $('html')
            .on(moveEventNames, $.throttle(1, onMove))
            .on(endEventNames, onEnd);
        if (typeof onStartCallback === 'function') {
            onStartCallback(e, { x: firstPageX, y: firstPageY });
        }
    };

    function onMove(e) {
        if (e.type === 'mousemove' && !mousedown) {
            return;
        }
        if (typeof onMoveCallback === 'function') {
            var totalTouchDeltaY = CNTOUCH.getTouchPosition(e).y - firstPageY;
            var totalTouchDeltaX = CNTOUCH.getTouchPosition(e).x - firstPageX;
            onMoveCallback(e, { x: totalTouchDeltaX, y: totalTouchDeltaY });
        }
    };

    function onEnd(e) {
        $('html')
            .off(moveEventNames, onMove)
            .off(endEventNames, onEnd);
        mousedown = false;
        if (typeof onEndCallback === 'function') {
            var totalTouchDeltaY = CNTOUCH.getTouchPosition(e).y - firstPageY;
            var totalTouchDeltaX = CNTOUCH.getTouchPosition(e).x - firstPageX;
            onEndCallback(e, { x: totalTouchDeltaX, y: totalTouchDeltaY });
        }
    };

    $element.on(startEventNames, onStart);
};

// easing function for touch momentum
jQuery.extend(jQuery.easing, {
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }
});

//from: http://stackoverflow.com/questions/1560926/efficiently-detect-when-sibling-elements-overlap
function findIntersectors(targetSelector, intersectorsSelector) {
    var intersectors = [];

    var $target = $(targetSelector);
    var tAxis = $target.offset();
    var t_x = [tAxis.left, tAxis.left + $target.outerWidth()];
    var t_y = [tAxis.top, tAxis.top + $target.outerHeight()];

    $(intersectorsSelector).each(function () {
        var $this = $(this);
        var thisPos = $this.offset();
        var i_x = [thisPos.left, thisPos.left + $this.innerWidth()]
        var i_y = [thisPos.top, thisPos.top + $this.innerHeight()];

        if (t_x[0] < i_x[1] && t_x[1] > i_x[0] &&
               t_y[0] < i_y[1] && t_y[1] > i_y[0]) {
            intersectors.push($this);
        }

    });
    return intersectors;
}

/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
* Licensed under the MIT License (LICENSE.txt).
*
* Version 1.1
*/

(function ($) {

    $.fn.overlaps = function (selector) {
        // if nothing is passed, act as a filter
        if (arguments.length === 0) {
            return this.pushStack(filterOverlaps(this));
        }
        // otherwise compare selected elements against passed eleemnts
        else {
            return isOverlapping(this, $(selector));
        }
    };

    $.expr[':'].overlaps = function (elem, i, m, array) {
        return isOverlapping([elem], array);
    };
    $.expr[':'].overlapping = $.expr[':'].overlaps;

    function filterOverlaps(collection) {
        var dims = getDims(collection),
        stack = [],
        index1 = 0,
        index2 = 0,
        length = dims.length;

        for (; index1 < length; index1++) {
            for (index2 = 0; index2 < length; index2++) {
                if (index1 === index2) {
                    continue;
                }
                if (checkOverlap(dims[index1], dims[index2])) {
                    stack.push(collection[index2]);
                }
            }
        }

        return $.unique(stack);
    }

    function isOverlapping(collection1, collection2) {
        var dims1 = getDims(collection1),
        dims2 = getDims(collection2),
        index1 = 0,
        index2 = 0,
        length1 = dims1.length,
        length2 = dims2.length;

        for (; index1 < length1; index1++) {
            for (index2 = 0; index2 < length2; index2++) {
                if (collection1[index1] === collection2[index2]) {
                    continue;
                }
                if (checkOverlap(dims1[index1], dims2[index2])) {
                    return true;
                }
            }
        }

        return false;
    }

    function getDims(elems) {
        var dims = [], i = 0, offset, elem;

        while ((elem = elems[i++])) {
            offset = $(elem).offset();
            dims.push([
            offset.top,
            offset.left,
            elem.offsetWidth,
            elem.offsetHeight
        ]);
        }

        return dims;
    }

    function checkOverlap(dims1, dims2) {
        var x1 = dims1[1], y1 = dims1[0],
        w1 = dims1[2], h1 = dims1[3],
        x2 = dims2[1], y2 = dims2[0],
        w2 = dims2[2], h2 = dims2[3];
        return !(y2 + h2 < y1 || y1 + h1 < y2 || x2 + w2 < x1 || x1 + w1 < x2);
    }

})(jQuery);

/* nano scroller */
(function($, window, document) {
  var DOMSCROLL, DOWN, DRAG, MOUSEDOWN, MOUSEMOVE, MOUSEUP, MOUSEWHEEL, NanoScroll, PANEDOWN, RESIZE, SCROLL, SCROLLBAR, UP, WHEEL, defaults, getScrollbarWidth;
  SCROLLBAR = 'scrollbar';
  SCROLL = 'scroll';
  MOUSEDOWN = 'mousedown';
  MOUSEMOVE = 'mousemove';
  MOUSEWHEEL = 'mousewheel';
  MOUSEUP = 'mouseup';
  RESIZE = 'resize';
  DRAG = 'drag';
  UP = 'up';
  PANEDOWN = 'panedown';
  DOMSCROLL = 'DOMMouseScroll';
  DOWN = 'down';
  WHEEL = 'wheel';
  defaults = {
    paneClass: 'pane',
    sliderClass: 'slider',
    contentClass: 'content',
    iOSNativeScrolling: false
  };
  getScrollbarWidth = function() {
    var outer, outerStyle, scrollbarWidth;
    outer = document.createElement('div');
    outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.width = '100px';
    outerStyle.height = '100px';
    outerStyle.overflow = SCROLL;
    outerStyle.top = '-9999px';
    document.body.appendChild(outer);
    scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);
    return scrollbarWidth;
  };
  NanoScroll = (function() {

    NanoScroll.name = 'NanoScroll';

    function NanoScroll(el, options) {
      this.options = options;
      this.el = $(el);
      this.doc = $(document);
      this.win = $(window);
      this.generate();
      this.createEvents();
      this.addEvents();
      this.reset();
    }

    NanoScroll.prototype.createEvents = function() {
      var _this = this;
      this.events = {
        down: function(e) {
          _this.isDrag = true;
          _this.offsetY = e.clientY - _this.slider.offset().top;
          _this.pane.addClass('active');
          _this.doc.bind(MOUSEMOVE, _this.events[DRAG]).bind(MOUSEUP, _this.events[UP]);
          return false;
        },
        drag: function(e) {
          _this.sliderY = e.clientY - _this.el.offset().top - _this.offsetY;
          _this.scroll();
          return false;
        },
        up: function(e) {
          _this.isDrag = false;
          _this.pane.removeClass('active');
          _this.doc.unbind(MOUSEMOVE, _this.events[DRAG]).unbind(MOUSEUP, _this.events[UP]);
          return false;
        },
        resize: function(e) {
          _this.reset();
        },
        panedown: function(e) {
          _this.sliderY = e.clientY - _this.el.offset().top - _this.sliderH * 0.5;
          _this.scroll();
          _this.events.down(e);
        },
        scroll: function(e) {
          var content, top;
          if (_this.isDrag === true) {
            return;
          }
          content = _this.content[0];
          top = content.scrollTop / (content.scrollHeight - content.clientHeight) * (_this.paneH - _this.sliderH);
          if (top + _this.sliderH === _this.paneH) {
            _this.el.trigger('scrollend');
          }
          _this.slider.css({
            top: top + 'px'
          });
        },
        wheel: function(e) {
          _this.sliderY += -e.wheelDeltaY || -e.delta;
          _this.scroll();
          return false;
        }
      };
    };

    NanoScroll.prototype.addEvents = function() {
      var events, pane;
      events = this.events;
      pane = this.pane;
      this.win.bind(RESIZE, events[RESIZE]);
      this.slider.bind(MOUSEDOWN, events[DOWN]);
      pane.bind(MOUSEDOWN, events[PANEDOWN]);
      this.content.bind(SCROLL, events[SCROLL]);
      if (window.addEventListener) {
        pane = pane[0];
        pane.addEventListener(MOUSEWHEEL, events[WHEEL], false);
        pane.addEventListener(DOMSCROLL, events[WHEEL], false);
      }
    };

    NanoScroll.prototype.removeEvents = function() {
      var events, pane;
      events = this.events;
      pane = this.pane;
      this.win.unbind(RESIZE, events[RESIZE]);
      this.slider.unbind(MOUSEDOWN, events[DOWN]);
      pane.unbind(MOUSEDOWN, events[PANEDOWN]);
      this.content.unbind(SCROLL, events[SCROLL]);
      if (window.addEventListener) {
        pane = pane[0];
        pane.removeEventListener(MOUSEWHEEL, events[WHEEL], false);
        pane.removeEventListener(DOMSCROLL, events[WHEEL], false);
      }
    };

    NanoScroll.prototype.generate = function() {
      var options;
      options = this.options;
      this.el.append('<div class="' + options.paneClass + '"><div class="' + options.sliderClass + '" /></div>');
      this.content = $(this.el.children("." + options.contentClass)[0]);
      this.slider = this.el.find("." + options.sliderClass);
      this.pane = this.el.find("." + options.paneClass);
      this.scrollW = getScrollbarWidth();
      if (options.iOSNativeScrolling) {
        this.content.css({
          right: -this.scrollW + 'px',
          WebkitOverflowScrolling: 'touch'
        });
      } else {
        this.content.css({
          right: -this.scrollW + 'px'
        });
      }
    };

    NanoScroll.prototype.reset = function() {
      var content, contentStyle, contentStyleOverflowY;
      if (!this.el.find("." + this.options.paneClass).length) {
        this.generate();
        this.stop();
      }
      if (this.isDead === true) {
        this.isDead = false;
        this.pane.show();
        this.addEvents();
      }
      content = this.content[0];
      contentStyle = content.style;
      contentStyleOverflowY = contentStyle.overflowY;
      if (window.navigator.appName === 'Microsoft Internet Explorer' && /msie 7./i.test(window.navigator.appVersion) && window.ActiveXObject) {
        this.content.css({
          height: this.content.height()
        });
      }
      this.contentH = content.scrollHeight + this.scrollW;
      this.paneH = this.pane.outerHeight();
      this.sliderH = Math.round(this.paneH / this.contentH * this.paneH);
      this.sliderH = this.sliderH > 20 ? this.sliderH : 20;
      if (contentStyleOverflowY === SCROLL && contentStyle.overflowX !== SCROLL) {
        this.sliderH += this.scrollW;
      }
      this.scrollH = this.paneH - this.sliderH;
      this.slider.height(this.sliderH);
      this.diffH = content.scrollHeight - content.clientHeight;
      this.pane.show();
      if (this.paneH >= content.scrollHeight && contentStyleOverflowY !== SCROLL) {
        this.pane.hide();
      } else if (this.el.height() === content.scrollHeight && contentStyleOverflowY === SCROLL) {
        this.slider.hide();
      } else {
        this.slider.show();
      }
    };

    NanoScroll.prototype.scroll = function() {
      var scrollValue;
      this.sliderY = Math.max(0, this.sliderY);
      this.sliderY = Math.min(this.scrollH, this.sliderY);
      scrollValue = (this.paneH - this.contentH + this.scrollW) * this.sliderY / this.scrollH;
      this.content.scrollTop(-scrollValue);
      this.slider.css({
        top: this.sliderY
      });
    };

    NanoScroll.prototype.scrollBottom = function(offsetY) {
      var diffH, scrollTop;
      diffH = this.diffH;
      scrollTop = this.content[0].scrollTop;
      this.reset();
      if (scrollTop < diffH && scrollTop !== 0) {
        return;
      }
      this.content.scrollTop(this.contentH - this.content.height() - offsetY);
    };

    NanoScroll.prototype.scrollTop = function(offsetY) {
      this.reset();
      this.content.scrollTop(+offsetY);
    };

    NanoScroll.prototype.scrollTo = function(node) {
      var fraction, new_slider, offset;
      this.reset();
      offset = $(node).offset().top;
      if (offset > this.scrollH) {
        fraction = offset / this.contentH;
        new_slider = this.scrollH * fraction;
        this.sliderY = new_slider;
        this.scroll();
      }
    };

    NanoScroll.prototype.stop = function() {
      this.isDead = true;
      this.removeEvents();
      this.pane.hide();
    };

    return NanoScroll;

  })();
  $.fn.nanoScroller = function(settings) {
    var options;
    options = $.extend({}, defaults, settings);
    this.each(function() {
      var me, scrollbar;
      me = this;
      scrollbar = $.data(me, SCROLLBAR);
      if (!scrollbar) {
        scrollbar = new NanoScroll(me, options);
        $.data(me, SCROLLBAR, scrollbar);
      }
      if (options.scrollBottom) {
        return scrollbar.scrollBottom(options.scrollBottom);
      }
      if (options.scrollTop) {
        return scrollbar.scrollTop(options.scrollTop);
      }
      if (options.scrollTo) {
        return scrollbar.scrollTo(options.scrollTo);
      }
      if (options.scroll === 'bottom') {
        return scrollbar.scrollBottom(0);
      }
      if (options.scroll === 'top') {
        return scrollbar.scrollTop(0);
      }
      if (options.scroll instanceof $) {
        return scrollbar.scrollTo(options.scroll);
      }
      if (options.stop) {
        return scrollbar.stop();
      }
      return scrollbar.reset();
    });
  };
})(jQuery, window, document);

/*jquery mousewheel */
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)
;
/* -----------------------------*/
var GLOBALS = {};
GLOBALS.ComScorePublisherId = "15335235";
;
/* -----------------------------*/
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);;
/* -----------------------------*/
var DEBUG_FLAG = window.ALLOW_DEBUG && false; // CN Developers! Change this to true to enable debugging. Avoid committing this file with it set to true, however sites should correctly set window.ALLOW_DEBUG in their Housing to avoid it ever being set to true in a release build
DEBUG_FLAG |= (window.location.search + "").indexOf("jsdebug") >= 0;
window.DEBUG_FILTER_INCLUDE = null; // "SrcTwizzle,logsteps"; //  "PerformanceTicker,logsteps";
window.DEBUG_FILTER_EXCLUDE = null; //  "PerformanceTicker,logsteps";
window.DEBUG_CONSOLE_DISPLAY = 0;
window.DEBUG_TO_CONSOLE = false;

var PERFORMANCE_TICKER_INTERVAL = null; // null, 100, 250, 500
var PERFORMANCE_TICKER_INTERVAL_FAIL_MILLIS = 25; // the number of 'grace' milliseconds we'll allow for a long running script;
/* -----------------------------*/
String.prototype.nullifyEmpty = function() {
    return this.length == 0 ? null : this.toString();
};

String.prototype.contains = function(other) {
    return this.indexOf(other) >= 0;
};

String.prototype.containsIgnoreCase = function(other) {
    return this.toLowerCase().indexOf(other.toLowerCase()) >= 0;
};

var StringUtils = {};

StringUtils.isNullOrEmpty = function(value) {
    return value === null || value === "";
};

// http://stackoverflow.com/questions/202605/repeat-string-javascript
String.prototype.repeat = function (count) {
    if (count < 1) return '';
    var result = '', pattern = this.valueOf();
    while (count > 0) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result;
};

String.prototype.padLeft = function(finalWidth, char) {
    var charsNeeded = +finalWidth - this.length;
    if (charsNeeded <= 0) return this.toString();
    return (char + "").substr(0, 1).repeat(charsNeeded) + this;
};

String.prototype.ensureEndsWith = function (suffix, ignoreCase) {
    if (ignoreCase == null) ignoreCase = false;

    var suffixOfThis = this.substr(this.length - suffix.length);

    if (ignoreCase) {
        suffixOfThis = suffixOfThis.toLowerCase();
        suffix = suffix.toLowerCase();
    }

    if (suffix == suffixOfThis) return this.toString();
    return this + suffix;
};

String.prototype.ensureStartsWith = function (prefix, ignoreCase) {
    if (ignoreCase == null) ignoreCase = false;

    var prefixOfThis = this.substring(0, prefix.length);

    if (ignoreCase) {
        prefixOfThis = prefixOfThis.toLowerCase();
        prefix = prefix.toLowerCase();
    }

    if (prefix == prefixOfThis) return this.toString();
    return prefix + this;
};

String.prototype.startsWith = function (prefix, ignoreCase) {
    if (ignoreCase == null) ignoreCase = false;

    var prefixOfThis = this.substring(0, prefix.length);

    if (ignoreCase) {
        prefixOfThis = prefixOfThis.toLowerCase();
        prefix = prefix.toLowerCase();
    }

    return (prefix == prefixOfThis);
};

String.prototype.keyValueStringToAssociativeArray = function (keyValuePairDelimiter, keyValueSeparator) {
    keyValuePairDelimiter = keyValuePairDelimiter || ';';
    keyValueSeparator = keyValueSeparator || '=';
    var associativeArray = {};
    var keyValuePairs = this.split(keyValuePairDelimiter);
    for (var i = 0; i < keyValuePairs.length; i++) {
        var keyValueSplit = keyValuePairs[i].split(keyValueSeparator);
        if (keyValueSplit.length > 1) {
            associativeArray[keyValueSplit[0]] = keyValueSplit[1];
        }
    }
    return associativeArray;
};;
/* -----------------------------*/
(function () {
    var TAG = 'AnalyticsUtils';
    var analyticsCookieName = 'AnalyticsQueueCookie';
    window.AnalyticsUtils = window.AnalyticsUtils || {};
    window.AnalyticsUtils.trackEventHistory = window.AnalyticsUtils.trackEventHistory || [];
    window.AnalyticsUtils.trackTimingHistory = window.AnalyticsUtils.trackTimingHistory || [];

    window.AnalyticsUtils.HasGoogleAnaltyics = function () {
        return !UTILITIES.NullOrUndefined(window._gaq) && window._gaq.push;
    };
    window.AnalyticsUtils.HasUniversalAnaltyics = function () {
        return UTILITIES.isFunction(window.ga);
    };
    
/* 
        category (string)
        action (string)
        optionalLabel (string)
        optionalValue (int)
        options:
            maxTrackCount (int)
			queueTracking (bool)
			callback (function)
    */

    window.AnalyticsUtils.trackPageView = function(url) {
        UTILITIES.SilenceExceptionsOnLive(function() {
            if (AnalyticsUtils.HasGoogleAnaltyics()) {
                window._gaq.push(['_trackPageview', url]);
                window._gaq.push(['uk._trackPageview', url]);
            }
        });
        window.AnalyticsUtils.trackDimensions();
        
        if (AnalyticsUtils.HasUniversalAnaltyics()) { // Universal Analytics
            var propertyPrefixes = [""];
            if (!UTILITIES.NullOrUndefined(window.CndGoogleAnalytics)) {
                propertyPrefixes = window.CndGoogleAnalytics.PropertyPrefixes;
            }

            for (var i = 0; i < propertyPrefixes.length; i++) {
                if (UTILITIES.NullOrEmpty(url)) {
                    ga(propertyPrefixes[i] + 'send', 'pageview');
                } else {
                    ga(propertyPrefixes[i] + 'send', 'pageview', url);
                }
            }
        }
    };

    window.AnalyticsUtils.trackDimensions = function() {
        if (AnalyticsUtils.HasUniversalAnaltyics()) { // Universal Analytics
            if (!UTILITIES.NullOrUndefined(window.CndGoogleAnalytics)) {
                UTILITIES.iterateDictionary(window.CndGoogleAnalytics.DimensionValues, function (key, value) {

                    if (!UTILITIES.NullOrEmpty(value)) {
                        switch(parseInt(key)) {
                            case window.CndGoogleAnalytics.DimensionIndexes.Categories:
                            case window.CndGoogleAnalytics.DimensionIndexes.VideoUrls:
                            case window.CndGoogleAnalytics.DimensionIndexes.Brands:
                            case window.CndGoogleAnalytics.DimensionIndexes.Products:
                            case window.CndGoogleAnalytics.DimensionIndexes.People:
                            case window.CndGoogleAnalytics.DimensionIndexes.Events:
                                value = '["' + value.split(',').join('","') + '"]';
                                break;
                        }
                    }
                    ga('set', 'dimension' + key, value);
                });
            }
        }
    };

    window.AnalyticsUtils.trackEvent = function (category, action, optionalLabel, optionalValue, options) {
        options = options || {};

        var logLine = 'TrackEvent: ' + 'category=' + category + ', action=' + action + ', optionalLabel=' + optionalLabel + ', optionalValue=' + optionalValue;
        if (window.ALLOW_DEBUG) {
            if (optionalValue != null && (optionalValue === '' || isNaN(+optionalValue))) {
                dalert('optionalValue was not a number');
            }
        }
        if (category != null) {
            category = String(category);
        }
        if (action != null) {
            action = String(action);
        }
        if (optionalLabel != null) {
            optionalLabel = String(optionalLabel);
        }
        var trackLabel = 'category=' + category + ', action=' + action + (optionalValue ? ', optionalLabel=' + optionalLabel : '');
        if (options.maxTrackCount && !isNaN(options.maxTrackCount)) {
            var instanceCount = UTILITIES.InstanceCountInArray(window.AnalyticsUtils.trackEventHistory, trackLabel);
            if (instanceCount >= options.maxTrackCount) {
                //log(TAG, 'MaxTrackCount reached: ' + trackLabel);
                return;
            } else {
                window.AnalyticsUtils.trackEventHistory.push(trackLabel);
            }
        }

        try {
            if (options.queueTracking) {
                queueTracking({ method: 'trackEvent', category: category, action: action, optionalLabel: optionalLabel, optionalValue: optionalValue, options: options });
                log(TAG, 'Queued: ' + logLine);
                return;
            }
            if (AnalyticsUtils.HasGoogleAnaltyics()) { // Google Analytics
                if (options.callback) {
                    _gaq.push(['_set', 'hitCallback', options.callback]);
                }
                _gaq.push(['_trackEvent', category, action, optionalLabel, optionalValue, true]);
                log(TAG, 'Success: ' + logLine);
            }
            if (AnalyticsUtils.HasUniversalAnaltyics()) { // Universal Analytics
                ga('send', {
                    'hitType': 'event',                 // Required.
                    'eventCategory': category,          // Required.
                    'eventAction': action,              // Required.
                    'eventLabel': optionalLabel,
                    'eventValue': optionalValue,
                    'hitCallback': options.callback
                });
                log(TAG, 'Success: ' + logLine);
            } else {
                log(TAG, 'NoGA: ' + logLine);
                if (UTILITIES.isFunction(options.callback)) {
                    options.callback();
                }
            }
        } catch(e) {
            log(TAG, 'Fail: ' + logLine + '. ' + e);
        }
    };

    window.AnalyticsUtils.trackEventWithTimeout = function (category, action, optionalLabel, optionalValue, options) {
        // Like trackEvent, but fires callback after options.callbackTimeout (default 200 ms) if GA doesn't finish by then.

        // default timeout is 200 ms
        var timeout = (options && options.callbackTimeout) ? options.callbackTimeout : 200;

        // fire off event
        window.AnalyticsUtils.trackEvent(category, action, optionalLabel, optionalValue, options);

        if (options && UTILITIES.isFunction(options.callback)) {
            // in case google takes too long, also set up our own timeout to avoid leaving the user hanging
            setTimeout(options.callback, timeout);
        }
    };

    window.AnalyticsUtils.trackLinkEvent = function (link, category, action, optionalLabel, optionalValue, options) {
        // Suited for invoking in <a href onclick="...">. Not suited for use with target=_blank as it will be ignored.
        // Auto-applies the trackClickEvent timeout.
        
        if (!options) {
            options = {};
        }

        var originalCallback = options.callback;
        options.callback = function () {
            // fire originally specified callback, if any
            if (UTILITIES.isFunction(originalCallback)) {
                originalCallback();
            }

            // once done, follow link
            if (link && link.href) {
                document.location = link.href;
            }
        };

        window.AnalyticsUtils.trackEventWithTimeout(category, action, optionalLabel, optionalValue, options);
    };
    
    /* 
       category (string)
       variable (string)
       time (int): milliseconds
       optionalLabel (string)
       optionalSample (int): percent of visitors whose timing hits get sent to Google Analytics
  		options:
            maxTrackCount (int)
			queueTracking (bool)

   */

    window.AnalyticsUtils.trackTiming = function(category, variable, time, optionalLabel, optionalSample, options) {
        options = options || {};

        var logLine = 'TrackTiming: ' + 'category=' + category + ', variable=' + variable + ', time: ' + time + ', optionalLabel=' + optionalLabel + ', optionalSample=' + optionalSample;
        if (window.ALLOW_DEBUG) {
            if (time != null && (time === '' || isNaN(+time))) {
                dalert('time was not a number');
            }
            if (optionalSample != null && (optionalSample === '' || isNaN(+optionalSample))) {
                dalert('optionalSample was not a number');
            }
        }
        var trackLabel = 'category=' + category + ', variable=' + variable + ', optionalLabel=' + optionalLabel;

        if (options.maxTrackCount && !isNaN(options.maxTrackCount)) {
            var instanceCount = UTILITIES.InstanceCountInArray(window.AnalyticsUtils.trackTimingHistory, trackLabel);
            if (instanceCount >= options.maxTrackCount) {
                // log(TAG, 'MaxTrackCount reached: ' + trackLabel);
                return;
            } else {
                window.AnalyticsUtils.trackTimingHistory.push(trackLabel);
            }
        }


        if (options.queueTracking) {
            queueTracking({ method: 'trackTiming', category: category, variable: variable, time: time, optionalLabel: optionalLabel, optionalSample: optionalSample, options: options });
            log(TAG, 'Queued: ' + logLine);
            return;
        }

        try {
            optionalSample = optionalSample != null ? optionalSample : 100;

            if (AnalyticsUtils.HasGoogleAnaltyics()) { // Google Analytics
                _gaq.push(['_trackTiming', category, variable, time, optionalLabel, optionalSample]);
                log(TAG, 'Success: ' + logLine);
            }
            if (AnalyticsUtils.HasUniversalAnaltyics()) { // Universal Analytics
                ga('send', {
                    'hitType': 'timing',
                    'timingCategory': category,
                    'timingVar': variable,
                    'timingValue': time,
                    'timingLabel': optionalLabel
                });
                log(TAG, 'Success: ' + logLine);
            } else {
                log(TAG, 'NoGA: ' + logLine);
            }

        } catch(e) {
            log(TAG, 'Fail: ' + logLine + '. ' + e);
        }

    };

    window.AnalyticsUtils.setDimensionFromBase = function() {
        if (UTILITIES.NullOrUndefined(window.CndGoogleAnalytics))
            return;
        window.CndGoogleAnalytics.DimensionValues = window.CndGoogleAnalytics.BaseDimensionValues;
    };
    window.AnalyticsUtils.setDimensionFromParentBase = function () {
        if (UTILITIES.NullOrUndefined(window.CndGoogleAnalytics) || UTILITIES.NullOrUndefined(window.parent.CndGoogleAnalytics))
            return;
        window.CndGoogleAnalytics.DimensionValues = window.parent.CndGoogleAnalytics.BaseDimensionValues;
    };

    window.AnalyticsUtils.setDimension = function (slot, value) {
        var method = "SetDimension";
        var logLine = method + ": dimension" + slot + ", value=" + value;
        if (window.ALLOW_DEBUG) {
            if (slot == null || slot == "" || isNaN(+slot) || slot > 200 || slot < 1) {
                dalert(method + ": slot must be a number from 1-200. ");
            }
            //if (value == null){ //} || value == "") {
            //    dalert(method + ": value is required. ");
            //}
        }

        try {
            if (AnalyticsUtils.HasUniversalAnaltyics()) { // Universal Analytics
                if (value != null)
                    value = value.toString();
                if (!UTILITIES.NullOrUndefined(window.CndGoogleAnalytics)) {
                    if (UTILITIES.NullOrWhitespace(value)) {
                        value = window.CndGoogleAnalytics.BlankValue;
                    }
                    window.CndGoogleAnalytics.DimensionValues[slot] = value;
                } else {
                    ga('set', 'dimension' + slot, value);
                }
                log(TAG, 'Success: ' + logLine);
            } else {
                log(TAG, "NoGA: " + logLine);
            }

        } catch (e) {
            log(TAG, "Fail: " + logLine + ". " + e);
        }
    };
    // Adds a Google Analytics Custom Variable.
	// Doc: https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables
	// NOTE: This is for old Google Analytics and will be migrated to Custom Dimensions when we upgrade to Universal Analytics: https://support.google.com/analytics/answer/2709829?hl=en-GB
    window.AnalyticsUtils.setCustomVar = function(slot, name, value, scope) {
        var method = "SetCustomVar";
        var logLine = method + ": slot=" + slot + ", name=" + name + ", value=" + value + ", scope=" + scope;
        if (window.ALLOW_DEBUG) {
            if (slot == null || slot == "" || isNaN(+slot) || slot > 5 || slot < 1) {
                dalert(method + ": slot must be a number from 1-5. ");
            }
            if (name == null || name == "") {
                dalert(method + ": name is required. ");
            }
            if (value == null || value == "") {
                dalert(method + ": value is required. ");
            }
            if (scope == null || isNaN(+scope) || scope < 1 || scope > 3) {
                dalert(method + ": scope must be a valid option: Page=3, Session=2, Visitor=1. ");
            }
        }

        try {
            if (AnalyticsUtils.HasGoogleAnaltyics()) {
                _gaq.push(['_setCustomVar', slot, name, value, scope]);
                log(TAG, "Success: " + logLine);
            } else if (AnalyticsUtils.HasUniversalAnaltyics()) { // Universal Analytics
                // TODO: Migrate all custom vars to custom dimensions / metrics
                if (window.ALLOW_DEBUG) {
                    dalert('CustomVar not supported in Universal Analytics. Please use CustomDimension or CustomMetric');
                }
                log(TAG, 'NotImplemented: ' + logLine);
                //log(TAG, 'Success: ' + logLine);
            } else {
                log(TAG, "NoGA: " + logLine);
            }

        } catch(e) {
            log(TAG, "Fail: " + logLine + ". " + e);
        }
    };

	// Tracks the page's current template.
	// NOTE: Currently uses GA Custom Variables, but will use Custom Dimensions when we upgrade to Universal Analytics.
    window.AnalyticsUtils.setTemplate = function (templateName) {
	    // NOTE: Custom debug log may not capture this event, e.g. on first gallery image page.
	    if (AnalyticsUtils.HasGoogleAnaltyics()) {
	        AnalyticsUtils.setCustomVar(1, "TemplateName", templateName, 3);
	    }
	    if (AnalyticsUtils.HasUniversalAnaltyics()) { // Universal Analytics
	        AnalyticsUtils.setDimension(1, templateName);
	    }
	};

    function queueTracking(paramObject) {
        if (paramObject != null) {
            delete paramObject.options.queueTracking;
            var analyticsCookie = $.cookie(analyticsCookieName, { path: '/' });
            if (analyticsCookie === null)
                analyticsCookie = [];
            else
                analyticsCookie = $.parseJSON(analyticsCookie);

            analyticsCookie.push(paramObject);
            $.cookie(analyticsCookieName, JSON.stringify(analyticsCookie), { expires: 1, path: '/' });
        }
    }
    
    function fireQueuedTracking() {
        try {
            var analyticsCookie = $.cookie(analyticsCookieName, { path: '/' });
            removeAnalyticsQueueTrackingCookie();
            if (analyticsCookie != null) {
                var paramObjects;
                try {
                    paramObjects = $.parseJSON(analyticsCookie);
                } catch (e) {
                    // some invalid JSON, clear the cookie, log an error, give up.
                    paramObjects = null;
                    removeAnalyticsQueueTrackingCookie();
                    log(TAG, "Failed to parse queued tracking: " + e + ". " + analyticsCookie);
                }
                if (paramObjects != null && paramObjects.length > 0) {
                    // TODO: Debug this line, throws error due to hard-coded null param:
                    // AnalyticsUtils.trackEvent('Logging', 'QueuedTrackingCount', paramObjects.length, null, { maxTrackCount: 1 });

                    // Imposed limit of 100 to prevent unforseen abuse
                    for (var i = 0; i < paramObjects.length && i < 100; i++) {
                        if (paramObjects[i].method === 'trackEvent') {
                            AnalyticsUtils.trackEvent(paramObjects[i].category, paramObjects[i].action, paramObjects[i].optionalLabel, paramObjects[i].optionalValue, paramObjects[i].options);
                        } else if (paramObjects[i].method === 'trackTiming') {
                            AnalyticsUtils.trackTiming(paramObjects[i].category, paramObjects[i].variable, paramObjects[i].time, paramObjects[i].optionalLabel, paramObjects[i].optionalSample, paramObjects[i].options);
                        }
                    }
                }
            }
        } catch (e) {
            if (window.ALLOW_DEBUG)
                alert(e);
            removeAnalyticsQueueTrackingCookie();
        }
    }

    function removeAnalyticsQueueTrackingCookie() {
        if (!UTILITIES.isFunction($.cookie)) {
            log(TAG, "Fail: $.cookie does not exist");
            return;
        }
        $.cookie(analyticsCookieName, null, { path: '/' });
    }

    window.AnalyticsUtils.wireUpAnalyticsEvents = function (collection) {
        var $allAnchors = collection.filter('[data-analytics-event-category][data-analytics-event-action]');

        $allAnchors.click(function (event) {
            var $link = $(this);
            var eventCategory = $link.data('analytics-event-category');
            var eventAction = $link.data('analytics-event-action');
            var eventLabel = $link.data('analytics-event-label');
            var eventValue = $link.data('analytics-event-value');

            followLink = function () {
                var href = $link.attr('href');
                if (href) {
                    document.location = href;
                } else {
                    // if it's a button or something else with no href, don't do anything
                    return;
                }
            };

            // fire off event and follow link once done
            window.AnalyticsUtils.trackEvent(eventCategory, eventAction, eventLabel, eventValue, { callback: followLink });

            // in case google takes too long, also set up our own timeout
            setTimeout(followLink, 200);

            if (!$link.data('analytics-event-allow-default')) {
                // prevent default action / don't follow link immediately, unless requested
                event.preventDefault();
                return false;
            }
        });
    }

    $(function() {
        setTimeout(fireQueuedTracking, 2500);
    });
})();;
/* -----------------------------*/
!function () {
    var htmlEncoderElement;
    var HtmlUtils = window.HtmlUtils = {};

    HtmlUtils.htmlEncode = function(text) {
        if (htmlEncoderElement == null) htmlEncoderElement = $("<div/>");
        return htmlEncoderElement.text(text).html();
    };
    
    // decodes html - be careful with script tags!
    HtmlUtils.htmlDecode = function(html) {
        if (htmlEncoderElement == null) htmlEncoderElement = $("<div/>");
        return htmlEncoderElement.html(html).text();
    };

    // see http://stackoverflow.com/a/7124052 
    HtmlUtils.htmlEncodeFast = function(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };

    // Wraps part of a string in a HTML element. The result will be correctly HTML encoded, so it can be inserted into the
    // document. The substring will be compared case-insensitively.
    //
    // startTagHtmlOrTagName and endTagHtml are optional.
    // If startTagHtmlOrTagName is omitted, the part of the string will be wrapped in <strong> tags.
    // If startTagHtmlOrTagName is a tagName (i.e no opening/closing angular brackets) then endTagHtml is not required
    // expected usage: htmlWrapSubstring("banana","a");
    // expected usage: htmlWrapSubstring("banana","a", "em");
    // expected usage: htmlWrapSubstring("banana","a", '<span class="yay">', '</span>');
    HtmlUtils.htmlWrapSubstring = function (substringToWrap, text, startTagHtmlOrTagName, endTagHtml) {
        var startTagHtml;
        if (startTagHtmlOrTagName == null) startTagHtmlOrTagName = "strong";

        if (endTagHtml == null) {
            startTagHtml = "<" + startTagHtmlOrTagName + ">";
            endTagHtml = "</" + startTagHtmlOrTagName + ">";
        } else {
            startTagHtml = startTagHtmlOrTagName;
        }

        if (substringToWrap == null || substringToWrap.length == 0) return HtmlUtils.htmlEncodeFast(text);

        var startPos = 0;
        var result = "";

        while (true) {
            var substringPosition = text.toLowerCase().indexOf(substringToWrap.toLowerCase(), startPos);
            if (substringPosition >= 0) {
                var before = text.substr(startPos, substringPosition - startPos);
                var middle = text.substr(substringPosition, substringToWrap.length);
                result += HtmlUtils.htmlEncodeFast(before) + startTagHtml + HtmlUtils.htmlEncodeFast(middle) + endTagHtml;
                startPos = substringPosition + substringToWrap.length;
            } else {
                return result += text.substring(startPos);
            }
        }
    };
}();
;
/* -----------------------------*/
!function () {
    var WebUtils = window.WebUtils = {};
    var scrollBarWidthCached;

    WebUtils.getProtocolAndHostName = function() {
        return window.location.protocol + "//" + window.location.host;
    };
    
    WebUtils.removeQueryStringAndHash = function() {
        return WebUtils.getProtocolAndHostName() + window.location.pathname;
    };

    WebUtils.getScrollBarWidth = function() {
        if (scrollBarWidthCached == null) {
            var parent, child;
            parent = $('<div style="width:50px;height:50px;overflow:auto;position:fixed;left:-60px;"><div style="height:55px"></div></div>').appendTo('body');
            child = parent.children();
            scrollBarWidthCached = parent.innerWidth() - child.innerWidth();
            parent.remove();
        }
        return scrollBarWidthCached;
    };
    
    // Opens a link from a click event. Usually, there'd be no way to open that link in a new window by ctrl+clicking, but this
    // method attempts to preserve that behaviour.
    WebUtils.openLinkViaJavascript = function(href, clickEvent) {
        // when ctrl on PC or apple-key on Mac are pressed....
        if (clickEvent && (clickEvent.ctrlKey || clickEvent.metaKey)) {
            var newWindow = window.open(href);
            if (newWindow) newWindow.blur();
            window.focus();
        } else {
            window.location.href = href;
        }

        if (clickEvent) {
            clickEvent.stopPropagation();
            clickEvent.preventDefault();
        }
    };
    WebUtils.openJsLinky = function ($element, e) {
        var href = $element.find('a.jsLinky').attr('href');
        if (href != null && href.length > 0) {
            WebUtils.openLinkViaJavascript(href, e);
        }
    };

	// This method uses a data attribute to store a debounced function (i.e. only the last call to the function will be run) 
	// which is then called. It is particuluarly useful when re-sizing a browser window which subsequently has to reload an IFrame
	// to ensure the source get reloaded and fit into the IFrame - it will only reload the source one.
    WebUtils.reloadIFrame = function (frame) {
    	var reloader = $(frame).data("reloadIFrame");

    	if (reloader == null) {
    		$(frame).data(
				"reloadIFrame",
				$.debounce(250, function () {
					var oldSrc = $(frame).attr("src");
					$(frame).attr("src", oldSrc);
				})
			);
    	};

    	reloader = $(frame).data("reloadIFrame");
    	reloader();
    };

} ();;
/* -----------------------------*/
/* Debugging */
// Show d(ebug)alerts only when in DEBUG mode
window.dalert = function (a, b, c, d) {
    if (window.ALLOW_DEBUG) {
        if (window.confirm(a+"\n\nPress OK to break", b, c, d)) debugger;
    }
};
window.dtitle = function (a) {
    if (window.ALLOW_DEBUG) document.title=a;
};
// Prevent console.log undefined exception on IE
if (!window.console) {
    window.console = {};
    window.console.log = function () { };
}
$(function () {
    // konami code - up up down down left right left right b a
    var code1 = String.fromCharCode(38, 38, 40, 40, 37, 39, 37, 39, 66, 65);
    var code2 = String.fromCharCode(38, 38, 40, 40, 37, 39, 37, 39, 65, 66);
    var codeBuffer = "";
    $(document).keyup(function (e) {
        codeBuffer += String.fromCharCode(e.which);
        if (code1.substring(0, codeBuffer.length) == codeBuffer) {
            if (code1.length == codeBuffer.length) {
                toggle1();
                codeBuffer = String.fromCharCode(38, 38, 40, 40, 37, 39, 37, 39, 66);
            }
        } else if (code2.substring(0, codeBuffer.length) == codeBuffer) {
            if (code2.length == codeBuffer.length) {
                toggle2();
                codeBuffer = "";
            }
        } else {
            codeBuffer = "";
        }
    });

    function toggle1() {
        var $body = $("body");
        if ($body.raptorize) {
            $body.raptorize();
        } else {
            $("head").append('<script src="/_/logic/jquery.raptorize.1.0.js?'+Math.random()+'"></script>');
        }
    }

    function toggle2() {
        window.DEBUG_FLAG = !window.DEBUG_FLAG;
        window.DEBUG_FILTER_INCLUDE = null;
        window.DEBUG_FILTER_EXCLUDE = null;
        window.DEBUG_TO_CONSOLE = false;
        window.logInited=true;

        updateConsoleVisibility();
    }
});
function updateConsoleVisibility() {
    if (window.DEBUG_FLAG && !window.DEBUG_TO_CONSOLE) {
        var console = $("#console");
        if (console.length == 0) {
            $("body").addClass("jsDebug").keyup(function (e) { if (e.which == 46/*delete*/) $("#console").empty(); });
            console = $("<div/>").attr("id", "console").css("z-index", "65000").css("position", "fixed").css("width", "100%").css("bottom", "0").css("height", "20%").css("overflow", "scroll").css("background", "#fff").css("color","#000").css("border", "1px solid #000").css("font","11px monospace").appendTo("body");
            console.dblclick(function () {
                DEBUG_CONSOLE_DISPLAY++;
                updateForDisplayMode();
            });
        }
        $.each(window.beforeReadyRows || [], function (index, elem) {
            console.append(elem);
        });
        console.show();
        log("Debug innited");
        if (window.DEBUG_FILTER_INCLUDE != null || window.DEBUG_FILTER_EXCLUDE != null) {
            log("...", "Debug innited WITH FILTERS. You may not see all log messages!!!");
        } else {
            log("...", "Debug innited");
        }
        updateForDisplayMode();
    } else {
        $("#console").hide();
        $("body").removeClass("jsDebug");
    }


    function updateForDisplayMode() {
        switch (window.DEBUG_CONSOLE_DISPLAY) {
            case 0:
            default:
                displayMode = 0;
                console.css("top", "auto").css("bottom", "0").height("20%");
                break;
            case 1:
                console.css("top", "auto").css("bottom", "0").height("40%");
                break;
            case 2:
                console.css("bottom", "auto").css("top", "0").height("20%");
                break;
            case 3:
                console.css("bottom", "auto").css("top", "0").height("40%");
                break;
        }
    }
}
window.evenLogRow=false;
function log(textOrTag, text) {
    if (window.DEBUG_FLAG) {
        if (window.parent != window)
            window.parent.log('IFRAME:' + textOrTag, text);
        
        if (text == null) {
            text = textOrTag;
            textOrTag = null;
        }

        if (textOrTag!="..." && window.DEBUG_FILTER_INCLUDE != null) {
            if ((","+window.DEBUG_FILTER_INCLUDE+",").indexOf(","+textOrTag+",")<0) {
                // don't log it
                return;
            }
        }
        if (textOrTag != "..." && window.DEBUG_FILTER_EXCLUDE != null) {
            if (("," + window.DEBUG_FILTER_EXCLUDE + ",").indexOf("," + textOrTag + ",") >= 0) {
                // don't log it
                return;
            }
        }

        var $console =  $('#console');

        //if (window.DEBUG_TO_CONSOLE) {
            console.log((textOrTag == null ? "" : (textOrTag + " - \t")) + text);
        //} else {
            var date = new Date();
            var logRow = $("<div/>").
                css("background", evenLogRow ? "#fff" : "#fafafa").
                css("border-top", "1px solid #eee").
                append($("<span/>").
                    css("font-weight", "bold").
                    text(date.getHours() + ":" + pad(date.getMinutes(), 2) + ":" + pad(date.getSeconds(), 2) + "." + pad(date.getMilliseconds(), 3) + ": ")
                ).
                append(textOrTag == null
                    ? null
                    : ($("<span/>").
                        css("color", "#666").
                        text(textOrTag + " - ")
                    )
                ).
                append($("<span/>").text(text));
            if (window.logInited) {
                $console.append(logRow);
            } else {
                window.beforeReadyRows = window.beforeReadyRows || [];
                window.beforeReadyRows.push(logRow);
            }
            $console.scrollTop(500000);
        //}
        window.evenLogRow = !window.evenLogRow;
    }
}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length - size);
}

if (window.DEBUG_FLAG) $(function () { window.logInited=true });
$(updateConsoleVisibility);
/* End debugger */

/* */
function getPathForElement(element) {
    var result = "";
    var $current = $(element);
    while ($current.length > 0) {
        var id = $current.attr("id") || "" ;
        var cls = $current.attr("class") || "";

        result += $current[0].tagName + (id == "" ? "" : ("#" + id)) + (cls == "" ? "" : ("." + cls)) + " > ";
        $current = $current.parent();
    }
    return result + "TOP";
}
/* */

/* Performance step start */
var logStepsMap = {};
function logStepStart(name, logTag) {
    if (!DEBUG_FLAG) return;

    var logItem = logStepsMap[name];
    if (logItem == null) {
        logItem = {
            lastStartMs: null,
            runCount: 0
        };
        logStepsMap[name] = logItem;
    }

    if (logItem.lastStartMs !=null) {
        log(logTag || "logsteps", "Log step with name '"+name+"' was not stopped. Stopping it now.");
    }
    logItem.lastStartMs = new Date().getTime();
}
/* Performance step end*/
function logStepStop(name, invokeDebuggerMillisLimit, logTag) {
    if (!DEBUG_FLAG) return;

    var timeNow = new Date().getTime();
    var logItem = logStepsMap[name];
    if (logItem == null || logItem.lastStartMs==null) {
        log(logTag || "logsteps", "Log step with name '" + name + "' was not started");
    }else{
        var millisDifference = timeNow - logItem.lastStartMs;
        logItem.lastStartMs = null;
        logItem.runCount++;
        log(logTag || "logsteps", "LOGSTEP - " + name + " - " + millisDifference + "ms - " + logItem.runCount);
        if (invokeDebuggerMillisLimit != null && millisDifference >= invokeDebuggerMillisLimit) {
            debugger;
        }
    }
}
function logStepRemove(name) {
    if (!DEBUG_FLAG) return;

    delete logStepsMap[name];
}
function logStepResetStartTime(name) {
    if (!DEBUG_FLAG) return;

    var logItem = logStepsMap[name];
    if (logItem != null) logItem.lastStartMs = null;
}
function logStepFunction(name, callback) {
    logStepStart(name);
    callback();
    logStepStop(name);
}

/* Performance debugger */
if (window.PERFORMANCE_TICKER_INTERVAL) {
    var LAST_PERFORMANCE_TICKER_MILLIS;
    setInterval(function () {
        var currentMillis = new Date().getTime();
        if (window.PERFORMANCE_TICKER_INTERVAL!=null) {
            var millisDifference = currentMillis - window.LAST_PERFORMANCE_TICKER_MILLIS;
            if (millisDifference > window.PERFORMANCE_TICKER_INTERVAL + window.PERFORMANCE_TICKER_INTERVAL_FAIL_MILLIS) {
                log("PerformanceTicker","SCRIPT TOOK "+millisDifference+"ms");
            }
        }
        window.LAST_PERFORMANCE_TICKER_MILLIS = currentMillis;
    }, window.PERFORMANCE_TICKER_INTERVAL);
}

/* End Performance debugger */
(function () {
    if ((window.location.search || "").indexOf("jsdebugadvert")>=0) {
        DEBUG_FLAG=true;
        window.DEBUG_FILTER_INCLUDE = "advert,iframed.advert";
        window.DEBUG_FILTER_EXCLUDE = null;

        document.originalDocumentWrite = document.write;
        document.write = function (text) {
            log("documentwrite",text);
            document.originalDocumentWrite(text);
        };
    }
})();
if (window.ALLOW_DEBUG) {
    (function () {
        var windowVariableMap = {};

        window.dumpGlobalVariables = function () {
            var text="";
            for (var key in window) {
                if (!windowVariableMap[key]) text+=key+", ";
            }
            log(dumpGlobalVariables, text);
        }
        //setTimeout(window.dumpGlobalVariables, 2000);

        for (var key in window) {
            windowVariableMap[key]=true;
        }

    
    })();
}
// test if the query string contains a value that is helpful for debugging
function debugParamTest(value) {
    return (window.location.href.toLowerCase().indexOf(value.toLowerCase()) >= 0);
}
// register that the page can respond to a value that is helpful for debugging. This may be shown in a list at some point
function debugRegisterHashParam(value, description) {
    window.debugUrlHashParams = (window.debugUrlHashParams || []);
    window.debugUrlHashParams.push(value);
    log("...", "Debug hash param available: #" + value + " - " + description);
    return function () {
        return debugParamTest(value)
    }
};
/* -----------------------------*/
/**
* Version: 1.0 Alpha-1 
* Build Date: 13-Nov-2007
* Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
* License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
* Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
*/
Date.CultureInfo = {
    /* Culture Name */
    name: "en-GB",
    englishName: "English (United Kingdom)",
    nativeName: "English (United Kingdom)",

    /* Day Name Strings */
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],

    /* Month Name Strings */
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

    /* AM/PM Designators */
    amDesignator: "AM",
    pmDesignator: "PM",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,

    /**
    * The dateElementOrder is based on the order of the 
    * format specifiers in the formatPatterns.DatePattern. 
    *
    * Example:
    <pre>
    shortDatePattern    dateElementOrder
    ------------------  ---------------- 
    "M/d/yyyy"          "mdy"
    "dd/MM/yyyy"        "dmy"
    "yyyy-MM-dd"        "ymd"
    </pre>
    * The correct dateElementOrder is required by the parser to
    * determine the expected order of the date elements in the
    * string being parsed.
    * 
    * NOTE: It is VERY important this value be correct for each Culture.
    */
    dateElementOrder: "dmy",

    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },

    /**
    * NOTE: If a string format is not parsing correctly, but
    * you would expect it parse, the problem likely lies below. 
    * 
    * The following regex patterns control most of the string matching
    * within the parser.
    * 
    * The Month name and Day name patterns were automatically generated
    * and in general should be (mostly) correct. 
    *
    * Beyond the month and day name patterns are natural language strings.
    * Example: "next", "today", "months"
    *
    * These natural language string may NOT be correct for this culture. 
    * If they are not correct, please translate and edit this file
    * providing the correct regular expression pattern. 
    *
    * If you modify this file, please post your revised CultureInfo file
    * to the Datejs Discussions located at
    *     http://groups.google.com/group/date-js
    *
    * Please mark the subject with [CultureInfo]. Example:
    *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)
    * 
    * We will add the modified patterns to the master source files.
    *
    * As well, please review the list of "Future Strings" section below. 
    */
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,

        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,

        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,

        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,

        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }

};

/********************
** Future Strings **
********************
* 
* The following list of strings are not currently being used, but 
* may be incorporated later. We would appreciate any help translating
* the strings below.
* 
* If you modify this file, please post your revised CultureInfo file
* to the Datejs Discussions located at
*     http://groups.google.com/group/date-js
*
* Please mark the subject with [CultureInfo]. Example:
*    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)
*
* English Name        Translated
* ------------------  -----------------
* date                date
* time                time
* calendar            calendar
* show                show
* hourly              hourly
* daily               daily
* weekly              weekly
* bi-weekly           bi-weekly
* monthly             monthly
* bi-monthly          bi-monthly
* quarter             quarter
* quarterly           quarterly
* yearly              yearly
* annual              annual
* annually            annually
* annum               annum
* again               again
* between             between
* after               after
* from now            from now
* repeat              repeat
* times               times
* per                 per
*/

/**
* Version: 1.0 Alpha-1 
* Build Date: 12-Nov-2007
* Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
* License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
* Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
*/

/**
* Gets the month number (0-11) if given a Culture Info specific string which is a valid monthName or abbreviatedMonthName.
* @param {String}   The name of the month (eg. "February, "Feb", "october", "oct").
* @return {Number}  The day number
*/
Date.getMonthNumberFromName = function (name) {
    var n = Date.CultureInfo.monthNames, m = Date.CultureInfo.abbreviatedMonthNames, s = name.toLowerCase();
    for (var i = 0; i < n.length; i++) {
        if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) {
            return i;
        }
    }
    return -1;
};

/**
* Gets the day number (0-6) if given a CultureInfo specific string which is a valid dayName, abbreviatedDayName or shortestDayName (two char).
* @param {String}   The name of the day (eg. "Monday, "Mon", "tuesday", "tue", "We", "we").
* @return {Number}  The day number
*/
Date.getDayNumberFromName = function (name) {
    var n = Date.CultureInfo.dayNames, m = Date.CultureInfo.abbreviatedDayNames, o = Date.CultureInfo.shortestDayNames, s = name.toLowerCase();
    for (var i = 0; i < n.length; i++) {
        if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) {
            return i;
        }
    }
    return -1;
};

/**
* Determines if the current date instance is within a LeapYear.
* @param {Number}   The year (0-9999).
* @return {Boolean} true if date is within a LeapYear, otherwise false.
*/
Date.isLeapYear = function (year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
};

/**
* Gets the number of days in the month, given a year and month value. Automatically corrects for LeapYear.
* @param {Number}   The year (0-9999).
* @param {Number}   The month (0-11).
* @return {Number}  The number of days in the month.
*/
Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

Date.getTimezoneOffset = function (s, dst) {
    return (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST[s.toUpperCase()] :
        Date.CultureInfo.abbreviatedTimeZoneStandard[s.toUpperCase()];
};

Date.getTimezoneAbbreviation = function (offset, dst) {
    var n = (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard, p;
    for (p in n) {
        if (n[p] === offset) {
            return p;
        }
    }
    return null;
};

/**
* Returns a new Date object that is an exact date and time copy of the original instance.
* @return {Date}    A new Date instance
*/
Date.prototype.clone = function () {
    return new Date(this.getTime());
};

/**
* Compares this instance to a Date object and return an number indication of their relative values.  
* @param {Date}     Date object to compare [Required]
* @return {Number}  1 = this is greaterthan date. -1 = this is lessthan date. 0 = values are equal
*/
Date.prototype.compareTo = function (date) {
    if (isNaN(this)) {
        throw new Error(this);
    }
    if (date instanceof Date && !isNaN(date)) {
        return (this > date) ? 1 : (this < date) ? -1 : 0;
    } else {
        throw new TypeError(date);
    }
};

/**
* Compares this instance to another Date object and returns true if they are equal.  
* @param {Date}     Date object to compare [Required]
* @return {Boolean} true if dates are equal. false if they are not equal.
*/
Date.prototype.equals = function (date) {
    return (this.compareTo(date) === 0);
};

/**
* Determines is this instance is between a range of two dates or equal to either the start or end dates.
* @param {Date}     Start of range [Required]
* @param {Date}     End of range [Required]
* @return {Boolean} true is this is between or equal to the start and end dates, else false
*/
Date.prototype.between = function (start, end) {
    var t = this.getTime();
    return t >= start.getTime() && t <= end.getTime();
};

/**
* Adds the specified number of milliseconds to this instance. 
* @param {Number}   The number of milliseconds to add. The number can be positive or negative [Required]
* @return {Date}    this
*/
Date.prototype.addMilliseconds = function (value) {
    this.setMilliseconds(this.getMilliseconds() + value);
    return this;
};

/**
* Adds the specified number of seconds to this instance. 
* @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
* @return {Date}    this
*/
Date.prototype.addSeconds = function (value) {
    return this.addMilliseconds(value * 1000);
};

/**
* Adds the specified number of seconds to this instance. 
* @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
* @return {Date}    this
*/
Date.prototype.addMinutes = function (value) {
    return this.addMilliseconds(value * 60000); /* 60*1000 */
};

/**
* Adds the specified number of hours to this instance. 
* @param {Number}   The number of hours to add. The number can be positive or negative [Required]
* @return {Date}    this
*/
Date.prototype.addHours = function (value) {
    return this.addMilliseconds(value * 3600000); /* 60*60*1000 */
};

/**
* Adds the specified number of days to this instance. 
* @param {Number}   The number of days to add. The number can be positive or negative [Required]
* @return {Date}    this
*/
Date.prototype.addDays = function (value) {
    return this.addMilliseconds(value * 86400000); /* 60*60*24*1000 */
};

/**
* Adds the specified number of weeks to this instance. 
* @param {Number}   The number of weeks to add. The number can be positive or negative [Required]
* @return {Date}    this
*/
Date.prototype.addWeeks = function (value) {
    return this.addMilliseconds(value * 604800000); /* 60*60*24*7*1000 */
};

/**
* Adds the specified number of months to this instance. 
* @param {Number}   The number of months to add. The number can be positive or negative [Required]
* @return {Date}    this
*/
Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};

/**
* Adds the specified number of years to this instance. 
* @param {Number}   The number of years to add. The number can be positive or negative [Required]
* @return {Date}    this
*/
Date.prototype.addYears = function (value) {
    return this.addMonths(value * 12);
};

/**
* Adds (or subtracts) to the value of the year, month, day, hour, minute, second, millisecond of the date instance using given configuration object. Positive and Negative values allowed.
* Example
<pre><code>
Date.today().add( { day: 1, month: 1 } )
 
new Date().add( { year: -1 } )
</code></pre> 
* @param {Object}   Configuration object containing attributes (month, day, etc.)
* @return {Date}    this
*/
Date.prototype.add = function (config) {
    if (typeof config == "number") {
        this._orient = config;
        return this;
    }
    var x = config;
    if (x.millisecond || x.milliseconds) {
        this.addMilliseconds(x.millisecond || x.milliseconds);
    }
    if (x.second || x.seconds) {
        this.addSeconds(x.second || x.seconds);
    }
    if (x.minute || x.minutes) {
        this.addMinutes(x.minute || x.minutes);
    }
    if (x.hour || x.hours) {
        this.addHours(x.hour || x.hours);
    }
    if (x.month || x.months) {
        this.addMonths(x.month || x.months);
    }
    if (x.year || x.years) {
        this.addYears(x.year || x.years);
    }
    if (x.day || x.days) {
        this.addDays(x.day || x.days);
    }
    return this;
};

// private
Date._validate = function (value, min, max, name) {
    if (typeof value != "number") {
        throw new TypeError(value + " is not a Number.");
    } else if (value < min || value > max) {
        throw new RangeError(value + " is not a valid value for " + name + ".");
    }
    return true;
};

/**
* Validates the number is within an acceptable range for milliseconds [0-999].
* @param {Number}   The number to check if within range.
* @return {Boolean} true if within range, otherwise false.
*/
Date.validateMillisecond = function (n) {
    return Date._validate(n, 0, 999, "milliseconds");
};

/**
* Validates the number is within an acceptable range for seconds [0-59].
* @param {Number}   The number to check if within range.
* @return {Boolean} true if within range, otherwise false.
*/
Date.validateSecond = function (n) {
    return Date._validate(n, 0, 59, "seconds");
};

/**
* Validates the number is within an acceptable range for minutes [0-59].
* @param {Number}   The number to check if within range.
* @return {Boolean} true if within range, otherwise false.
*/
Date.validateMinute = function (n) {
    return Date._validate(n, 0, 59, "minutes");
};

/**
* Validates the number is within an acceptable range for hours [0-23].
* @param {Number}   The number to check if within range.
* @return {Boolean} true if within range, otherwise false.
*/
Date.validateHour = function (n) {
    return Date._validate(n, 0, 23, "hours");
};

/**
* Validates the number is within an acceptable range for the days in a month [0-MaxDaysInMonth].
* @param {Number}   The number to check if within range.
* @return {Boolean} true if within range, otherwise false.
*/
Date.validateDay = function (n, year, month) {
    return Date._validate(n, 1, Date.getDaysInMonth(year, month), "days");
};

/**
* Validates the number is within an acceptable range for months [0-11].
* @param {Number}   The number to check if within range.
* @return {Boolean} true if within range, otherwise false.
*/
Date.validateMonth = function (n) {
    return Date._validate(n, 0, 11, "months");
};

/**
* Validates the number is within an acceptable range for years [0-9999].
* @param {Number}   The number to check if within range.
* @return {Boolean} true if within range, otherwise false.
*/
Date.validateYear = function (n) {
    return Date._validate(n, 1, 9999, "seconds");
};

/**
* Set the value of year, month, day, hour, minute, second, millisecond of date instance using given configuration object.
* Example
<pre><code>
Date.today().set( { day: 20, month: 1 } )

new Date().set( { millisecond: 0 } )
</code></pre>
* 
* @param {Object}   Configuration object containing attributes (month, day, etc.)
* @return {Date}    this
*/
Date.prototype.set = function (config) {
    var x = config;

    if (!x.millisecond && x.millisecond !== 0) {
        x.millisecond = -1;
    }
    if (!x.second && x.second !== 0) {
        x.second = -1;
    }
    if (!x.minute && x.minute !== 0) {
        x.minute = -1;
    }
    if (!x.hour && x.hour !== 0) {
        x.hour = -1;
    }
    if (!x.day && x.day !== 0) {
        x.day = -1;
    }
    if (!x.month && x.month !== 0) {
        x.month = -1;
    }
    if (!x.year && x.year !== 0) {
        x.year = -1;
    }

    if (x.millisecond != -1 && Date.validateMillisecond(x.millisecond)) {
        this.addMilliseconds(x.millisecond - this.getMilliseconds());
    }
    if (x.second != -1 && Date.validateSecond(x.second)) {
        this.addSeconds(x.second - this.getSeconds());
    }
    if (x.minute != -1 && Date.validateMinute(x.minute)) {
        this.addMinutes(x.minute - this.getMinutes());
    }
    if (x.hour != -1 && Date.validateHour(x.hour)) {
        this.addHours(x.hour - this.getHours());
    }
    if (x.month !== -1 && Date.validateMonth(x.month)) {
        this.addMonths(x.month - this.getMonth());
    }
    if (x.year != -1 && Date.validateYear(x.year)) {
        this.addYears(x.year - this.getFullYear());
    }

    /* day has to go last because you can't validate the day without first knowing the month */
    if (x.day != -1 && Date.validateDay(x.day, this.getFullYear(), this.getMonth())) {
        this.addDays(x.day - this.getDate());
    }
    if (x.timezone) {
        this.setTimezone(x.timezone);
    }
    if (x.timezoneOffset) {
        this.setTimezoneOffset(x.timezoneOffset);
    }

    return this;
};

/**
* Resets the time of this Date object to 12:00 AM (00:00), which is the start of the day.
* @return {Date}    this
*/
Date.prototype.clearTime = function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
};

/**
* Determines whether or not this instance is in a leap year.
* @return {Boolean} true if this instance is in a leap year, else false
*/
Date.prototype.isLeapYear = function () {
    var y = this.getFullYear();
    return (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0));
};

/**
* Determines whether or not this instance is a weekday.
* @return {Boolean} true if this instance is a weekday
*/
Date.prototype.isWeekday = function () {
    return !(this.is().sat() || this.is().sun());
};

/**
* Get the number of days in the current month, adjusted for leap year.
* @return {Number}  The number of days in the month
*/
Date.prototype.getDaysInMonth = function () {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

/**
* Moves the date to the first day of the month.
* @return {Date}    this
*/
Date.prototype.moveToFirstDayOfMonth = function () {
    return this.set({ day: 1 });
};

/**
* Moves the date to the last day of the month.
* @return {Date}    this
*/
Date.prototype.moveToLastDayOfMonth = function () {
    return this.set({ day: this.getDaysInMonth() });
};

/**
* Move to the next or last dayOfWeek based on the orient value.
* @param {Number}   The dayOfWeek to move to.
* @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
* @return {Date}    this
*/
Date.prototype.moveToDayOfWeek = function (day, orient) {
    var diff = (day - this.getDay() + 7 * (orient || +1)) % 7;
    return this.addDays((diff === 0) ? diff += 7 * (orient || +1) : diff);
};

/**
* Move to the next or last month based on the orient value.
* @param {Number}   The month to move to. 0 = January, 11 = December.
* @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
* @return {Date}    this
*/
Date.prototype.moveToMonth = function (month, orient) {
    var diff = (month - this.getMonth() + 12 * (orient || +1)) % 12;
    return this.addMonths((diff === 0) ? diff += 12 * (orient || +1) : diff);
};

/**
* Get the numeric day number of the year, adjusted for leap year.
* @return {Number} 0 through 364 (365 in leap years)
*/
Date.prototype.getDayOfYear = function () {
    return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 86400000);
};

/**
* Get the week of the year for the current date instance.
* @param {Number}   A Number that represents the first day of the week (0-6) [Optional]
* @return {Number}  0 through 53
*/
Date.prototype.getWeekOfYear = function (firstDayOfWeek) {
    var y = this.getFullYear(), m = this.getMonth(), d = this.getDate();

    var dow = firstDayOfWeek || Date.CultureInfo.firstDayOfWeek;

    var offset = 7 + 1 - new Date(y, 0, 1).getDay();
    if (offset == 8) {
        offset = 1;
    }
    var daynum = ((Date.UTC(y, m, d, 0, 0, 0) - Date.UTC(y, 0, 1, 0, 0, 0)) / 86400000) + 1;
    var w = Math.floor((daynum - offset + 7) / 7);
    if (w === dow) {
        y--;
        var prevOffset = 7 + 1 - new Date(y, 0, 1).getDay();
        if (prevOffset == 2 || prevOffset == 8) {
            w = 53;
        } else {
            w = 52;
        }
    }
    return w;
};

/**
* Determine whether Daylight Saving Time (DST) is in effect
* @return {Boolean} True if DST is in effect.
*/
Date.prototype.isDST = function () {
    console.log('isDST');
    /* TODO: not sure if this is portable ... get from Date.CultureInfo? */
    return this.toString().match(/(E|C|M|P)(S|D)T/)[2] == "D";
};

/**
* Get the timezone abbreviation of the current date.
* @return {String} The abbreviated timezone name (e.g. "EST")
*/
Date.prototype.getTimezone = function () {
    return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST());
};

Date.prototype.setTimezoneOffset = function (s) {
    var here = this.getTimezoneOffset(), there = Number(s) * -6 / 10;
    this.addMinutes(there - here);
    return this;
};

Date.prototype.setTimezone = function (s) {
    return this.setTimezoneOffset(Date.getTimezoneOffset(s));
};

/**
* Get the offset from UTC of the current date.
* @return {String} The 4-character offset string prefixed with + or - (e.g. "-0500")
*/
Date.prototype.getUTCOffset = function () {
    var n = this.getTimezoneOffset() * -10 / 6, r;
    if (n < 0) {
        r = (n - 10000).toString();
        return r[0] + r.substr(2);
    } else {
        r = (n + 10000).toString();
        return "+" + r.substr(1);
    }
};

/**
* Gets the name of the day of the week.
* @param {Boolean}  true to return the abbreviated name of the day of the week
* @return {String}  The name of the day
*/
Date.prototype.getDayName = function (abbrev) {
    return abbrev ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] :
        Date.CultureInfo.dayNames[this.getDay()];
};

/**
* Gets the month name.
* @param {Boolean}  true to return the abbreviated name of the month
* @return {String}  The name of the month
*/
Date.prototype.getMonthName = function (abbrev) {
    return abbrev ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] :
        Date.CultureInfo.monthNames[this.getMonth()];
};

// private
Date.prototype._toString = Date.prototype.toString;

/**
* Converts the value of the current Date object to its equivalent string representation.
* Format Specifiers
<pre>
Format  Description                                                                  Example
------  ---------------------------------------------------------------------------  -----------------------
s      The seconds of the minute between 1-59.                                      "1" to "59"
ss     The seconds of the minute with leading zero if required.                     "01" to "59"
 
m      The minute of the hour between 0-59.                                         "1"  or "59"
mm     The minute of the hour with leading zero if required.                        "01" or "59"
 
h      The hour of the day between 1-12.                                            "1"  to "12"
hh     The hour of the day with leading zero if required.                           "01" to "12"
 
H      The hour of the day between 1-23.                                            "1"  to "23"
HH     The hour of the day with leading zero if required.                           "01" to "23"
 
d      The day of the month between 1 and 31.                                       "1"  to "31"
dd     The day of the month with leading zero if required.                          "01" to "31"
ddd    Abbreviated day name. Date.CultureInfo.abbreviatedDayNames.                  "Mon" to "Sun" 
dddd   The full day name. Date.CultureInfo.dayNames.                                "Monday" to "Sunday"
 
M      The month of the year between 1-12.                                          "1" to "12"
MM     The month of the year with leading zero if required.                         "01" to "12"
MMM    Abbreviated month name. Date.CultureInfo.abbreviatedMonthNames.              "Jan" to "Dec"
MMMM   The full month name. Date.CultureInfo.monthNames.                            "January" to "December"

yy     Displays the year as a maximum two-digit number.                             "99" or "07"
yyyy   Displays the full four digit year.                                           "1999" or "2007"
 
t      Displays the first character of the A.M./P.M. designator.                    "A" or "P"
Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
tt     Displays the A.M./P.M. designator.                                           "AM" or "PM"
Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
</pre>
* @param {String}   A format string consisting of one or more format spcifiers [Optional].
* @return {String}  A string representation of the current Date object.
*/
Date.prototype.toString = function (format) {
    var self = this;
    var formatContainsAmPm = (format || "").indexOf("t") >= 0;
    var p = function p(s) {
        return (s.toString().length == 1) ? "0" + s : s;
    };

    return format ? format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g,
    function (format) {
        switch (format) {
            case "hh":
                if (formatContainsAmPm) {
                    if (self.getHours() == 0) return 12;
                }
                return p(self.getHours() < 13 ? self.getHours() : (self.getHours() - 12));
            case "h":
                if (formatContainsAmPm) {
                    if (self.getHours() == 0) return 12;
                }
                return self.getHours() < 13 ? self.getHours() : (self.getHours() - 12);
            case "HH":
                return p(self.getHours());
            case "H":
                return self.getHours();
            case "mm":
                return p(self.getMinutes());
            case "m":
                return self.getMinutes();
            case "ss":
                return p(self.getSeconds());
            case "s":
                return self.getSeconds();
            case "yyyy":
                return self.getFullYear();
            case "yy":
                return self.getFullYear().toString().substring(2, 4);
            case "dddd":
                return self.getDayName();
            case "ddd":
                return self.getDayName(true);
            case "dd":
                return p(self.getDate());
            case "d":
                return self.getDate().toString();
            case "MMMM":
                return self.getMonthName();
            case "MMM":
                return self.getMonthName(true);
            case "MM":
                return p((self.getMonth() + 1));
            case "M":
                return self.getMonth() + 1;
            case "t":
                return self.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
            case "tt":
                return self.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
            case "zzz":
            case "zz":
            case "z":
                return "";
        }
    }
    ) : this._toString();
};;
/* -----------------------------*/
window.FontEvents = (function () {
    var callbacks = [];
    var hasLoaded = false;
    // To be called when TypeKit, et al have finished loading.
    function pokeOnLoad() {
        hasLoaded = true;
        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i]();
        }
    }

    // To be called by components that want to be notified when fonts have finished loading
    function registerOnLoad(callback) {
        if (hasLoaded) {
            callback();
        } else {
            callbacks.push(callback);
        }
    }

    return {
        pokeOnLoad: pokeOnLoad,
        registerOnLoad: registerOnLoad
    };
})();
;
/* -----------------------------*/
// IE8 may repeatedly fire the resize event, causing lots of resizes to queue up. The extra resize events may
// get fired when the BODY element changes size, but not necessarily when the window changes size.
//
// EXPECTED USAGE: You need to create an instance for each of the resize handlers that you attach. These
// should be instanitated within reach of the resize handler's scope, but not _inside_ the resize handler (so
// that it is not recreated each time). Then at the very top of the resize handler's callback, include this line:
//      if (ieResizeFixer.isBadResize()) return;
function createIeResizeFixer() {
    var oldWidth, oldHeight;

    return {
        // returns true if the window hasn't actually resized.
        isBadResize: function () {
            var width = $(window).width();
            var height = $(window).height();
            if (oldWidth != width || oldHeight != height) {
                oldWidth = width;
                oldHeight = height;
                return false;
            } else {
                return true;
            }
        }
    };
}
/* BEGIN: SrcTwizzle */
window.SRC_TWIZZLE_DEBUG = true;
var SrcTwizzle = {};
SrcTwizzle.AsyncQueueBySelector = {};
SrcTwizzle.AsyncTimeoutIdBySelector = {};
SrcTwizzle.SrcTwizzleAsyncIdCount = 1;

SrcTwizzle.devicePixelRatio = (window.devicePixelRatio || 1);
try {
    if (SrcTwizzle.devicePixelRatio > 1 && window.performance && window.performance.timing) {
        var responseTime = window.performance.timing.responseStart - window.performance.timing.requestStart;
        if (responseTime > 400) {
            SrcTwizzle.devicePixelRatio = 1;
        }
    }
    if (SrcTwizzle.devicePixelRatio > 2) {
        SrcTwizzle.devicePixelRatio = 2;  // reduce crazy huge img requests for super high DPR. e.g. iPhone 6+ & Nexus 5 have DPR = 3
    }
    if (SrcTwizzle.devicePixelRatio >= 2 && $('body').hasClass('isMobile')) {
        SrcTwizzle.devicePixelRatio = 1; // reduce DPR for known mobiles, as it slows down the page
    }
}catch (e){}

(function () {
    var resizeTimeoutId;
    var ieResizeFixer = createIeResizeFixer();

    $(window).resize(function() {
        if (ieResizeFixer.isBadResize()) return;

        if (SrcTwizzle.resizeTimeoutId == null) { //throttle
            SrcTwizzle.resizeTimeoutId = setTimeout(function () { SrcTwizzle.srcTwizzleAll();}, 100);
        } else {
            SrcTwizzle.queueExtraTimeout = true;
        }
    });
    $(window).load(onLoadTwizzle);

    function onLoadTwizzle() {
        // cookie stuff moved elsewhere
	    if (window.SrcTwizzleDocumentAsOverflowContainer) {
		    SrcTwizzle.srcTwizzleOverflowContainer($(document));
	    }
	    //SrcTwizzle.srcTwizzleAll();
    }
})();
// SrcTwizzles all the .multiImg elements WITHIN the container. If you provide a selector, it will SrcTwizzle all of the .multiImg elements WITHIN the
// container that is found by the selector. If you pass 'asyncedBatchMode' as true to yield after SrcTwizzling 10 elements; you will also receive a 
// cancelToken to pass to SrcTwizzle.cancelAsync if you need to manually cancel the async SrcTwizzling.
SrcTwizzle.srcTwizzleAll = function(selectorOrContainer, asyncedBatchMode) {
    SrcTwizzle.resizeTimeoutId = null;
    if (SrcTwizzle.queueExtraTimeout) {
        SrcTwizzle.queueExtraTimeout = false;
        SrcTwizzle.resizeTimeoutId = setTimeout(SrcTwizzle.srcTwizzleAll, 100);
    }
    //if (!confirm("Can twizzle?")) return;
    if (asyncedBatchMode) {

        var lookupKey;
        if (selectorOrContainer == null) {
            lookupKey = "{ALL}";
        } else if (typeof selectorOrContainer == "string") {
            lookupKey = selectorOrContainer;
        } else {
            lookupKey = $(selectorOrContainer).data("SrcTwizzleAsyncId");
            if (lookupKey == null) {
                lookupKey = SrcTwizzle.SrcTwizzleAsyncIdCount++;
                $(selectorOrContainer).data("SrcTwizzleAsyncId", lookupKey);
            }
        }

        var elementsToTwizzle = $("img.multiImg", selectorOrContainer);

        SrcTwizzle._internalAsyncSrcTwizzleLoop(elementsToTwizzle, lookupKey);
        return lookupKey;
    } else {
        SrcTwizzle.srcTwizzleChildImages(selectorOrContainer);
    }
};
// SrcTwizzles each .multiImg element of an array. All of the elements must already be .multiImg elements, this is not checked. If you set
// 'asyncedBatchMode' to true, you should provide a unique cancelToken that describes the contents of the array. This is so that multiple
// calls to this method allow the previous call to be cancelled. If you do not provide a cancelToken one will be generated for you. You
// should call SrcTwizzle.cancelAsync with that cancelToken before calling this method again on the same array of images, otherwise
// multiple calls of the srcTwizzle may be performed on the images
SrcTwizzle.srcTwizzleMany = function(arrayOfImg, cancelToken, asyncedBatchMode) {
    if (asyncedBatchMode) {
        if (cancelToken == null || cancelToken.length == 0) 
            cancelToken = "cancelToken" + SrcTwizzle.SrcTwizzleAsyncIdCount++;
        var lookupKey = cancelToken;
        SrcTwizzle._internalAsyncSrcTwizzleLoop(arrayOfImg, lookupKey);
        return cancelToken;
    } else {
        var arrayOfImgCount = arrayOfImg.length;
        for (var i = 0; i < arrayOfImgCount; i++) {
            SrcTwizzle.srcTwizzle(arrayOfImg[i]);
        }
    }
};
// Cancels a SrcTwizzle that was previously done with 'srcTwizzleMany' with'asyncedBatchMode' set to true. AsyncedBatchMode srcTwizzleAlls
// are not currently supported.
SrcTwizzle.cancelAsync = function(cancelToken) {
    delete SrcTwizzle.AsyncQueueBySelector[cancelToken];
    delete SrcTwizzle.AsyncTimeoutIdBySelector[cancelToken];
    log("SrcTwizzle", "Finished async SrcTwizzle for " + cancelToken);
};
// DO NOT CALL DIRECTLY!
SrcTwizzle._internalAsyncSrcTwizzleLoop = function(arrayOfElements, lookupKey, settingsForAllElements) {
    clearTimeout(SrcTwizzle.AsyncTimeoutIdBySelector[lookupKey]);
    SrcTwizzle.AsyncQueueBySelector[lookupKey] = arrayOfElements;

    var queueIndex = 0;
    var asyncTwizzleForSelector = function() {
        log("SrcTwizzle", "Async SrcTwizzle for " + lookupKey + " at index " + queueIndex);
        var queue = SrcTwizzle.AsyncQueueBySelector[lookupKey];
        if (queue == null) return;
        var elem;
        for (var i = 0; i < 10; i++) {
            elem = queue[queueIndex];
            if (elem == null) {
                SrcTwizzle.cancelAsync(lookupKey);
                return;
            }

            queueIndex++;

            SrcTwizzle.srcTwizzle(elem, settingsForAllElements);
        }

        SrcTwizzle.AsyncTimeoutIdBySelector[lookupKey] = setTimeout(asyncTwizzleForSelector, 1);

    };

    SrcTwizzle.AsyncTimeoutIdBySelector[lookupKey] = setTimeout(asyncTwizzleForSelector, 1);
};
SrcTwizzle.getSizeData = function (img) {
    var $img = $(img);
    var imgElement = $img[0];
    var sizeData = $img.data("srcsizedata");
    if (sizeData == null) {
        sizeData = [];
        var attr, name, values;
        var imgElementAttributesCount = imgElement.attributes.length;
        for (var i = 0; i < imgElementAttributesCount; i++) {
            attr = imgElement.attributes[i];
            name = attr.name;
            if (name.indexOf("data-src") == 0) {
                values = name.substr(8).split("x");
                sizeData.push({
                    url: attr.value,
                    width: +(values[0]),
                    height: +(values[1])
                });
            }
        }
        $img.data("srcsizedata", sizeData);
    }
    // NOTE: object.values() exists for all objects in newer versions of javascript
    if (sizeData.values!=null && typeof sizeData.values != "function") {
        return sizeData.values;
    }
    return sizeData;
};
SrcTwizzle.getAspectRatio = function(img) {
    var biggest = SrcTwizzle.getBiggest(img);
    if (biggest == null) return null;
    return biggest.width / biggest.height;
};
SrcTwizzle.getBiggest = function (img, sizeData) {
    sizeData = sizeData || SrcTwizzle.getSizeData(img);
    var biggest = null;
    var current;
    var sizeDataCount = sizeData.length;
    for (var i = 0; i < sizeDataCount; i++) {
        current = sizeData[i];
        if (biggest == null || biggest.width < current.width) {
            biggest = current;
        }
    }
    return biggest;
};
SrcTwizzle.getSmallest = function (img, sizeData) {
    sizeData = sizeData || SrcTwizzle.getSizeData(img);
    var smallest = null;
    var current;
    var sizeDataCount = sizeData.length;
    for (var i = 0; i < sizeDataCount; i++) {
        current = sizeData[i];
        if (smallest == null || smallest.width > current.width) {
            smallest = current;
        }
    }
    return smallest;
};
// When given an array of objects with width, height and url, creates a IMG tag that works with SrcTwizzle.
SrcTwizzle.createElement = function (imageInfo, immediateSrcTwizzle, hideIfOffScreen) {
    //logStepStart("SrcTwizzle.createElement");
    var $img = $("<img/>").addClass("multiImg");
    if (hideIfOffScreen)
        $img.addClass("multiImgHideOffscreen");
    var sizeData = [];
    var info;
    var imageInfoCount = imageInfo.length;
    for (var i = 0; i < imageInfoCount; i++) {
        info = imageInfo[i];
        $img.attr("data-src" + info.width + "x" + info.height, info.url);
        sizeData.push({
            url: info.url,
            width: info.width,
            height: info.height
        });
    }
    $img.data("srcsizedata", sizeData);

    if (immediateSrcTwizzle) {
        SrcTwizzle.srcTwizzle($img);
    } else {
        SrcTwizzle.unLoad($img, sizeData);
        //$img.attr("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
    }

    //logStepStop("SrcTwizzle.createElement");
    return $img;
};

SrcTwizzle.srcTwizzle = function (img, forceLoad, options) {
    var settings = {
        threshold: 300,
        container: null,
        containerFrame: null,
        hideOffScreen: false
    };
    $.extend(settings, options);

    var $img = $(img);
    var width = $img.width();
    var height = $img.height();
    var sizeData = SrcTwizzle.getSizeData($img);
    
    if (height == 0 && width > 0 && sizeData.length > 0)
        height = width * sizeData[0].height / sizeData[0].width;

    var dpiAwareWidth = width * SrcTwizzle.devicePixelRatio;
    var dpiAwareHeight = height * SrcTwizzle.devicePixelRatio;

    var shouldCalculateSrc;
    var finalSrc;
    if (!forceLoad && (settings.hideOffScreen || $img.hasClass("multiImgHideOffscreen"))) {
        if (settings.container == null) {
            if ($img.hasClass('multiImgInContainer')) {
                settings.container = $img.closest('.srcTwizzleContainer');
            }
        }
        var viewable = $.st_inviewport($img, settings);

        // FIX to check if element is in viewport, as window.ScrollTop = 0
        if (viewable) { //bottom > windowTop && top < windowBottom) {
            shouldCalculateSrc = true;
        } else {
            shouldCalculateSrc = false;
            finalSrc = null;
            SrcTwizzle.unLoad($img, sizeData);
        }
    } else {
        shouldCalculateSrc = true;
    }

    if (shouldCalculateSrc) {
        var chosenCropBig = null, chosenCropSmall = null;
        var thisCrop, thisCropDifference, chosenCropDifference;
        var sizeDataCount = sizeData.length;
        for (var i = 0; i < sizeDataCount; i++) {
            thisCrop = sizeData[i];
            thisCropDifference = (thisCrop.width - dpiAwareWidth) + (thisCrop.height - dpiAwareHeight);
            if (thisCrop.width >= dpiAwareWidth || thisCrop.height >= dpiAwareHeight) {
                if (chosenCropBig == null) {
                    chosenCropBig = thisCrop;
                } else {
                    chosenCropDifference = (chosenCropBig.width - dpiAwareWidth) + (chosenCropBig.height - dpiAwareHeight);
                    if (thisCropDifference < chosenCropDifference) {
                        chosenCropBig = thisCrop;
                    }
                }
            } else {
                if (chosenCropSmall == null) {
                    chosenCropSmall = thisCrop;
                } else {
                    chosenCropDifference = (chosenCropSmall.width - dpiAwareWidth) + (chosenCropSmall.height - dpiAwareHeight);
                    if (thisCropDifference > chosenCropDifference) {
                        chosenCropSmall = thisCrop;
                    }
                }
            }
        }

        var finalCrop;
        var debugInfo;
        if (chosenCropBig != null) {
            finalSrc = chosenCropBig.url;
            finalCrop = chosenCropBig;
            if (window.DEBUG_FLAG && chosenCropBig.width > width) {
                debugInfo = "#0f0";
            }
        } else if (chosenCropSmall != null) {
            finalSrc = chosenCropSmall.url;
            finalCrop = chosenCropSmall;
            if (window.DEBUG_FLAG && chosenCropSmall.width > width) {
                debugInfo = "#f00";
            }
        } else {
            finalSrc = null;
        }
    }

    if (finalSrc != null) {
        var existingSrc = $img.attr("src");
        if (existingSrc != finalSrc) $img.attr("src", finalSrc);
    }
    if (window.DEBUG_FLAG && window.SRC_TWIZZLE_DEBUG) {
        var randomId = $img.data("srcTwizzleDebugId") || (Math.random() + "").substr(2);
        $img.data("srcTwizzleDebugId", randomId);
        $("#SrcTwizzleDebug" + randomId).remove();

        var debugLeft = $img.offset().left + $img.width() / 2;
        var debugTop = $img.offset().top + $img.height() / 2;
        $("body").append($("<div/>").
            attr("id", "SrcTwizzleDebug" + randomId).
            css("position", "absolute").
            css("top", debugTop).
            css("left", debugLeft).
            css("background", debugInfo || "#ff0").
            css("font-size", "8px").
	        css("z-index", 65000).
            html(width + "x" + height + "<br />[" + (finalCrop ? (finalCrop.width + "x" + finalCrop.height) : "NoCrop") + "]")
        );
    }
};

// Forces the given image element to use its smallest image. NOTE: This change should be considered temporary. Another call to SrcTwizzle
// or SrcTwizzleAll will reset it to the most appropriately sized image.
SrcTwizzle.srcTwizzleToSmallest = function(img) {
    var $img = $(img);
    var smallest = SrcTwizzle.getSmallest($img);
    $img.attr("src", smallest.url);
};

SrcTwizzle.srcTwizzleOverflowContainer = function($container, options) {
    var DEFAULT_THRESHOLD = 300;
    var settings = {
        threshold: DEFAULT_THRESHOLD,
        event: UTILITIES.isLowPerformanceMachine ? "scroll" : null,
        hideOffScreen: true
    };
    $.extend(settings, options);

    if ($container == null) {
        $container = $(window);
    }

    if ($container.get(0) == window) {
        if (settings.containerFrame == null) {
            settings.containerFrame = $.calculateContainerFrame(settings.container);
        }
        if (settings.threshold == DEFAULT_THRESHOLD) {
            settings.threshold = $container.height();
        }
        $container = null;
    } else {
        if (settings.threshold == DEFAULT_THRESHOLD) {
            settings.threshold = $container.width();
        }
    }

    if (settings.event) {
        var throttleInterval = UTILITIES.hasSlowJavascript ? 350 : 150;
        $container.off(settings.event + '.SrcTwizzle').on(settings.event + '.SrcTwizzle', $.throttle(throttleInterval, function() {
            setTimeout(function() {
                SrcTwizzle.srcTwizzleChildImages($container, settings);
            }, 10);
        }));
    }

    SrcTwizzle.srcTwizzleChildImages($container, settings);
};

SrcTwizzle.srcTwizzleChildImages = function(selectorOrContainer, options) {
    var settings = {
        forceLoad: false,
        container: $(window),
        containerFrame: null
    };
    $.extend(settings, options);
    if (selectorOrContainer != null && selectorOrContainer instanceof $) {
        settings.container = selectorOrContainer;
    }

    if (settings.containerFrame == null) {

        settings.containerFrame = $.calculateContainerFrame(settings.container);
    }

    $("img.multiImg", selectorOrContainer).each(function(index, elem) {
        SrcTwizzle.srcTwizzle(elem, settings.forceLoad, settings);
    });
};


SrcTwizzle.unLoadChildImages = function(selectorOrContainer) {
    $("img.multiImg", selectorOrContainer).each(function(index, elem) {
        SrcTwizzle.unLoad($(elem));
    });
};

SrcTwizzle.unLoad = function($img, sizeData) {
    var finalSrc;
    sizeData = sizeData || SrcTwizzle.getSizeData($img);

    // Get smallest crop
//    var bigCrop = SrcTwizzle.getBiggest($img);
//    var divisor = gcd(bigCrop.width, bigCrop.height);

//    finalSrc = 'http://d283tlc9jx3ws7.cloudfront.net/transpng/' + (bigCrop.width / divisor) + '/' + (bigCrop.height / divisor);

	if (SrcTwizzle.unloadUsesBlankPixelDataUri) {
		finalSrc = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
	} else {
		finalSrc = SrcTwizzle.getSmallest($img, sizeData).url;

//    if (isApproxRatio(ratio, 1)) {
//        finalSrc = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
//    }
//    else if (isApproxRatio(ratio, 1.5)) {
//        finalSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAADklEQVQIW2NkQAKMyBwAAEEAAzqc1JUAAAAASUVORK5CYII=";
//    }
//    else if (isApproxRatio(ratio, 0.667)) {
//        finalSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAADCAYAAAC56t6BAAAADklEQVQIW2NkgAJGDAYAAFEABLEYLX0AAAAASUVORK5CYII=";
//    }
//    else if (isApproxRatio(ratio, 1.333)) {
//        finalSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAADklEQVQIW2NkQAOMBAUAAJkABB99l1EAAAAASUVORK5CYII=";
//    }
//    else if (isApproxRatio(ratio, 0.75)) {
//        finalSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAYAAABLLYUHAAAADklEQVQIW2NkQAKMxHEAALYABRC+YgUAAAAASUVORK5CYII=";
//    }
//    else {
//        finalSrc = SrcTwizzle.getSmallest($img).url;
//    }
	}

	var existingSrc = $img.attr("src");
    if (existingSrc != finalSrc)
        $img.attr("src", finalSrc);
};


/* 
 * Returns the GCD of the given integers. Each input must be non-negative.
 */
function gcd(x, y) {
	while (y != 0) {
		var z = x % y;
		x = y;
		y = z;
	}
	return x;
}

function isApproxRatio(ratio1, ratio2) {
    return ratio1 == ratio2 || Math.round((ratio1 - ratio2) * 10) == 0;
}

/* END: SrcTwizzle */

$.calculateContainerFrame = function ($container) {
    var offset;
    if ($container == null) {
        $container = $(window);
    }
    var container = $container.get(0);
    if (container == window || container == document) {
        offset = {
            top: $container.scrollTop(),
            left: $container.scrollLeft()
        };
    }
    else {
        offset = $container.offset();
    }

    if (offset == null) {
        offset = {
            top: $container.scrollTop(),
            left: $container.scrollLeft()
        };
    }

    return $.extend(offset, {
        bottom: offset.top + $container.height(),
        right: offset.left + $container.width()
    });
};

$.st_belowthefold = function (element, settings) {
    var fold;
    if (settings.containerFrame != null && settings.containerFrame.bottom != null) {
        fold = settings.containerFrame.bottom;
    }
    else {
        if (settings.container === undefined || settings.container === window) {
            fold = $(window).height() + $(window).scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }
    }
    return fold <= $(element).offset().top - settings.threshold;
};

$.st_rightoffold = function (element, settings) {
    var fold;
    if (settings.containerFrame != null && settings.containerFrame.right != null) {
        fold = settings.containerFrame.right;
    }
    else {
        if (settings.container === undefined || settings.container === window) {
            fold = $(window).width() + $(window).scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }
    }

    return fold <= $(element).offset().left - settings.threshold;
};

$.st_abovethetop = function (element, settings) {
    var fold;
    if (settings.containerFrame != null && settings.containerFrame.top != null) {
        fold = settings.containerFrame.top;
    }
    else {
        if (settings.container === undefined || settings.container === window) {
            fold = $(window).scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }
    }

    return fold >= $(element).offset().top + settings.threshold + $(element).height();
};

$.st_leftofbegin = function (element, settings) {
    var fold;
    if (settings.containerFrame != null && settings.containerFrame.left != null) {
        fold = settings.containerFrame.left;
    }
    else {
        if (settings.container === undefined || settings.container === window) {
            fold = $(window).scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }
    }
    
    return fold >= $(element).offset().left + settings.threshold + $(element).width();
};

$.st_inviewport = function (element, settings) {
    if (settings.containerFrame == null) {
        // Ideally this should be set higher up, as we dont want to run the calculations on the container for every element
        
        settings.containerFrame = $.calculateContainerFrame(settings.container);
    }

    return !$.st_rightoffold(element, settings) && !$.st_leftofbegin(element, settings) &&
                !$.st_belowthefold(element, settings) && !$.st_abovethetop(element, settings);
};
;
/* -----------------------------*/
// Searches the HTML page for any elements with the class 'expandyWidths'. It will then make sure the children of
// those elements fill the width of the screen, while maintaining the original width of the child elements as the
// minimum width.
//
// WARNING: Negative margins, positive margins and paddings on both the container and the selector are likely to
// screw up the calculations that this uses.
window.MatchHeights = {};

// keep track of each instance of matchHeights that we are using, so we can turn the resize event on and off easily
MatchHeights.matchHeightsIdCount = 1;

// Initialise the expandiness of an element. You can call this manually if it is created after document.ready.
// You can also call it on the same element more than once. However, the minimum width will also be recalculated!

// data-expandy-widths-item-selector: the item whose width should be adjusted
// data-expandy-widths-max-rows: whether to limit the number of rows that are shown.
// data-expandy-widths-min-width: the minimum width that a child can be. This affects the number of columns. 
// data-fill-space: if there aren't enough children, then this decides whether the children should be expanded to fill the
//                  available space, rather than leaving an empty column
MatchHeights.initMatchHeightsElement = function (elem) {
    var $elem = $(elem).first(); // only designed to operate on one item
    var matchHeightsId = $elem.data("matchHeightsId");
    if (matchHeightsId == null) {
        MatchHeights.matchHeightsIdCount++;
        matchHeightsId = MatchHeights.matchHeightsIdCount;
        $elem.data("matchHeightsId", matchHeightsId);
    }
    var childSelector = $elem.attr("data-match-heights-item-selector");
    
    if (window.SrcTwizzle) {
        var throttledSrcTwizzle = $.throttle(1000, function () { SrcTwizzle.srcTwizzleAll($elem); });
    }
    // prepare a closure for this particular instance of an ExpandyWidth
    var resizeCallbackForElem = function () {
        var children = $elem.find(childSelector);
        children.css("min-height", "0");

        var biggestHeight;
        children.each(function (index, elem) {
            var $elem = $(elem);
            var elemHeight = $elem.height();
            if (biggestHeight == null || elemHeight > biggestHeight) biggestHeight = elemHeight;
        });

        children.css("min-height", biggestHeight);

        if (throttledSrcTwizzle) throttledSrcTwizzle();
    };

    $elem.data("ematchHeightsResizeCallback", resizeCallbackForElem);

    $(window).unbind("resize.matchHeights" + matchHeightsId);
    $(window).bind("resize.matchHeights" + matchHeightsId, function () {
        log("MatchHeights resize for id=" + matchHeightsId);
        resizeCallbackForElem();
    });

    resizeCallbackForElem();
};


MatchHeights.updateChildWidths = function(elem) {
    $(elem).data("matchHeightsResizeCallback")();
};


$(function () {
    $(".matchHeights").each(function (index, elem) {
        window.MatchHeights.initMatchHeightsElement(elem);
    });
});
;
/* -----------------------------*/
var NumberUtils = {};

NumberUtils.toIntOrNull = function (value) {
    var result = +value;
    if (isNaN(result)) return null;
    return result;
};;
/* -----------------------------*/
// REQUIRE: NumberUtils.js

// Searches the HTML page for any elements with the class 'expandyWidths'. It will then make sure the children of
// those elements fill the width of the screen, while maintaining the original width of the child elements as the
// minimum width.
//
// WARNING: Negative margins, positive margins and paddings on both the container and the selector are likely to
// screw up the calculations that this uses.
window.ExpandyWidths = {};

ExpandyWidths.expandyWidthIdCount = 1;

// Initialise the expandiness of an element. You can call this manually if it is created after document.ready.
// You can also call it on the same element more than once. However, the minimum width will also be recalculated!

// data-expandy-widths-item-selector: the item whose width should be adjusted
// data-expandy-widths-max-rows: whether to limit the number of rows that are shown.
// data-expandy-widths-min-width: the minimum width that a child can be. This affects the number of columns. 
// data-expandy-widths-min-columns: the minimum number of columns that are shown. This will override the data-expandy-widths-min-width above.
// data-fill-space: if there aren't enough children, then this decides whether the children should be expanded to fill the
//                  available space, rather than leaving an empty column
// data-overflow-container-selector: a jquery-selector that will receive any items that do not fit in this current expandy-width element
ExpandyWidths.initExpandyWidthElement = function (elem, skipAddingCssClass) {
    var $elem = $(elem).first(); // only designed to operate on one item
    if ($elem.length == 0) {
        log("No element was given to expandy widths initExpandyWidthElement");
        return;
    }
    if (!skipAddingCssClass) $elem.addClass("expandyWidths");
    var expandyWidthId = ExpandyWidths.getExpandyWidthId($elem);
    var childSelector = $elem.attr("data-expandy-widths-item-selector");
    var overflowSelector = $elem.attr("data-overflow-container-selector");
    var maxRows = NumberUtils.toIntOrNull($elem.attr("data-expandy-widths-max-rows"));
    var minColumns = NumberUtils.toIntOrNull($elem.attr("data-expandy-widths-min-columns"));
    var maxColumns = NumberUtils.toIntOrNull($elem.attr("data-expandy-widths-max-columns"));
    var minimumWidth = NumberUtils.toIntOrNull($elem.attr("data-expandy-widths-min-width"));
    var maxOrphans = NumberUtils.toIntOrNull($elem.attr("data-max-orphans"));
    var minimumWidth = minimumWidth == null ? $elem.find(childSelector).first().outerWidth(true) : minimumWidth;
    var fillSpace = $elem.attr("data-fill-space") == "true";
    var noSrcTwizzle = $elem.attr("data-no-src-twizzle") == "true"; // Whether to call SrcTwizzle after a resize. If set to false, consumers should use the ExpandyWidths_AfterRelayout jQuery event attached to $elem.
    var useElementResizeHandler = $elem.attr("data-use-element-resize-handler") == "true"; // Where to bind to resize events OR register an ElementResizeHandler.
    var imgManager;
    var overflowImgManager;

    var $overflowElem = $(overflowSelector);

    var throttledSrcChanger;
    if (!noSrcTwizzle) {
        if (window.SrcTwizzle) {
            throttledSrcChanger = $.throttle(1000, function () { SrcTwizzle.srcTwizzleAll($elem) });
        } else if ($.imgManager) {
            var imgManager = $elem.getImgManager({
                itemSelector: "img",
                runOnWindowResize: false,
                runImmediately: true
            });
            if ($overflowElem.length > 0) {
                overflowImgManager = $overflowElem.getImgManager({
                    itemSelector: "img",
                    runOnWindowResize: false,
                    runImmediately: true
                });
            }
            throttledSrcChanger = $.throttle(1000, function () {
                imgManager.reload(true);
                if (overflowImgManager) overflowImgManager.reload(true);
            });
        }
    }
    // prepare a closure for this particular instance of an ExpandyWidth
    var resizeCallbackForElem = function () {
        var fullWidth = $elem.width() - 1; // HACK sometimes a browser will wrap the items to the next line
        var columns = Math.floor(fullWidth / minimumWidth);
        if (minColumns != null && columns < minColumns) columns = minColumns;
        if (maxColumns != null && columns > maxColumns) columns = maxColumns;
        var maxItemWidth = Math.floor(fullWidth / columns);

        if (!$elem.hasClass("expandyWidths")) return;


        var children = $elem.find(childSelector);
        var overflowChildren = $overflowElem.find(childSelector);
        var allChildren = children.add(overflowChildren);
        var childrenCount = children.length + overflowChildren.length;
        var rowsToShow = maxRows;

        if (fillSpace) {
            if (childrenCount < columns) {
                columns = childrenCount;
                maxItemWidth = Math.floor(fullWidth / columns);
            }
        } else if (maxOrphans != null) {
            // mutually exclusive with filling space
            var totalRows = Math.floor(childrenCount / columns);
            if (maxRows == null || maxRows > totalRows) {
                var remainder = childrenCount % columns;
                if (remainder < maxOrphans) {
                    var rowsSoThereAreNoOrphans = totalRows;
                    if (rowsSoThereAreNoOrphans > 0) rowsToShow = rowsSoThereAreNoOrphans;
                }
            }

        }

        log("ExpandyWidths for ID " + expandyWidthId + ". Width=" + fullWidth + ", columns=" + columns + ", itemWidth" + maxItemWidth + ", rowsToShow=" + rowsToShow);


        allChildren.css("width", maxItemWidth + "px");

        if (rowsToShow != null) {
            var itemsPerExpandyWidthHolder = (rowsToShow * columns);
            allChildren.each(function (childIndex, child) {
                var $child = $(child);
                if (childIndex < itemsPerExpandyWidthHolder) {
                    $child.show();
                    if ($child.parent()[0] != $elem[0]) {
                        $child.appendTo($elem);
                    }
                } else {
                    if ($overflowElem.length > 0) {
                        // HARDCODED - one level of overflowing.
                        $(child).appendTo($overflowElem);
                        var indexInOverflow = childIndex - itemsPerExpandyWidthHolder;
                        if (indexInOverflow < itemsPerExpandyWidthHolder) {
                            $child.show();
                        } else {
                            $child.hide();
                        }
                    } else {
                        $child.hide();
                    }
                }
            });
        } else {
            // need to reshow all children that may have previously been hidden
            allChildren.show();
        }

        var existingClassName = $elem.attr("class");
        var cleanedClassName = existingClassName.replace(/expandyWidthWith\d+Columns\s?/g, "");

        var newClassName = cleanedClassName + (columns == Infinity ? "" : (" expandyWidthWith" + columns + "Columns"));
        $elem.attr("class", newClassName);

        if (throttledSrcChanger) throttledSrcChanger();
        $elem.trigger("ExpandyWidths_AfterRelayout");
    };

    $elem.data("expandyWidthResizeCallback", resizeCallbackForElem);

    $(window).unbind("resize.expandyWidth" + expandyWidthId);
    ElementResizeHandler.clearAllHandlers(elem);

    if (!useElementResizeHandler) {
        var resizeFunction = function () {
            log("ExpandyWidth resize for id=" + expandyWidthId);
            resizeCallbackForElem();
        };
        $(window).bind("resize.expandyWidth" + expandyWidthId, $.throttle ? $.throttle(250, resizeFunction) : resizeFunction);
    } else {
        ElementResizeHandler.addResizeHandler($elem, resizeCallbackForElem);
    }

    resizeCallbackForElem();
};


ExpandyWidths.updateChildWidths = function(elemOrSelector) {
    $(elemOrSelector).each(function(index, elem) {
        $(elem).data("expandyWidthResizeCallback")();
    });
};

ExpandyWidths.init = function() {
    $(".expandyWidths").each(function(index, elem) {
        window.ExpandyWidths.initExpandyWidthElement(elem, true);
    });
};

ExpandyWidths.getExpandyWidthId = function($elem) {
    var expandyWidthId = $elem.data("expandyWidthId");
    if (expandyWidthId == null) {
        ExpandyWidths.expandyWidthIdCount++;
        expandyWidthId = ExpandyWidths.expandyWidthIdCount;
        $elem.data("expandyWidthId", expandyWidthId);
        if (window.ALLOW_DEBUG) $elem.attr("data-debug-id", expandyWidthId);
    }
    return expandyWidthId;
};

ExpandyWidths.applyToElement = function (element, itemSelector, maxRows, minWidth, fillSpace, overflowSelector, maxColumns/* note rather than adding more stuff here, consider using an object */) {
    var $item = $(element);
    if ($item.length == 0) {
        log("No element was given to expandy widths applyToElement");
        return;
    }
    $item.addClass("expandyWidths");
    if (itemSelector !== null) $item.attr("data-expandy-widths-item-selector", itemSelector);
    if (maxRows !== null) $item.attr("data-expandy-widths-max-rows", maxRows);
    if (minWidth !== null) $item.attr("data-expandy-widths-min-width", minWidth);
    if (maxColumns !== null) $item.attr("data-expandy-widths-max-columns", maxColumns);
    if (fillSpace !== null) $item.attr("data-fill-space", fillSpace);
    if (overflowSelector !== null) $item.attr("data-overflow-container-selector", overflowSelector);

    ExpandyWidths.initExpandyWidthElement($item, true);
};

ExpandyWidths.removeFromElement = function (itemSelector) {
    var $elem = $(itemSelector);
    if ($elem.length == 0) {
        log("No element was given to expandy widths removeFromElement");
        return;
    }
    var expandyWidthId = ExpandyWidths.getExpandyWidthId($elem);
    $(window).unbind("resize.expandyWidth" + expandyWidthId);

    var itemSelector = $elem.attr("data-expandy-widths-item-selector");
    var overflowSelector = $elem.attr("data-overflow-container-selector");

    $(itemSelector, $elem).css("width", "").show();

    if (overflowSelector) {
        // WARNING: Not implemented. It should probably take any 'itemSelector' elements within 'overflowSelector', and place them
        // back into $elem.
        if (DEBUG_FLAG) throw "NOT IMPLEMENTED. SEE COMMENT.";
    }

    $elem.removeClass("expandyWidths").
        removeAttr("data-expandy-widths-item-selector").
        removeAttr("data-expandy-widths-max-rows").
        removeAttr("data-expandy-widths-min-width").
        removeAttr("data-overflow-container-selector").
        removeAttr("data-fill-space");

};

$(ExpandyWidths.init);;
/* -----------------------------*/
/*
 * Allows you to attach a 'resize handler' event to an element, so that other scripts on the page can tell an element
 * that it has just been resized. Expected usage:
 *
 * --- some code responsible for laying out an element
 * ElementResizeHandler.addResizeHandler($myElement, function ($elem) { $elem.height=$elem.parent().height()/2; });
 *
 *
 * --- some other code responsible for laying out the page
 * $(".someElements").children().each(function (index, elem) {
 *      ElementResizeHandler.pokeResizeEvents(elem);
 * });
 *
 * jQuery does not appear to be able to stash data against <object> elements. Do it another way
 */
(function () {
    var objectDataStash = {};
    var idCount = 0;

    function getHandlers($elem) {
        var handlers;
        if ($elem[0].tagName.toLowerCase() == "object") {
            var className = getOrAddClassName($elem);
            return objectDataStash[className];
        } else {
            return $elem.data("resizeHandlers");
        }
    }

    function getOrAddClassName($elem) {
        var classes = ($elem.attr("class") || "").split(" ");
        for (var i = 0; i < classes.length; i++) {
            var className = classes[i];
            if (className.substring(0, 22) == "elementResizeHandlerId") return className;
        }
        var className = "elementResizeHandlerId" + idCount++;
        $elem.addClass(className);
        return className;
    }

    function stashData($elem, data) {
        if ($elem[0].tagName.toLowerCase() == "object") {
            var className = getOrAddClassName($elem);
            objectDataStash[className] = data;
        } else {
            $elem.data("resizeHandlers", data);
        }
    }

    window.ElementResizeHandler = {
        HAS_RESIZE_HANDLER_CLASS: "hasResizeHandler",
        pokeResizeEvents: function (elem) {
            var $elem = $(elem);
            if ($elem.length == 0) return;
            if ($elem.length > 1) dalert("ElementResizeHandler can only accept single elements");
            var handlers = getHandlers($elem);
            if (handlers != null) {
                for (var i = 0; i < handlers.length; i++) {
                    handlers[i].call($elem, $elem);
                }
            }
        },
        addResizeHandler: function (elem, callback) {
            var $elem = $(elem);
            if ($elem.length == 0) return;
            if ($elem.length > 1) dalert("ElementResizeHandler can only accept single elements");
            var handlers = getHandlers($elem);
            if (handlers == null) {
                handlers = [];
                stashData($elem, handlers);
            }
            $elem.addClass(ElementResizeHandler.HAS_RESIZE_HANDLER_CLASS);
            handlers.push(callback);
        },
        clearAllHandlers: function (elem) {
            var $elem = $(elem);
            if ($elem.length == 0) return;
            if ($elem.length > 1) dalert("ElementResizeHandler can only accept single elements");
            var handlers = getHandlers($elem);
            if (handlers == null) {
                handlers = [];
                stashData($elem, handlers);
            }
            handlers.length = 0;
        }
    };
})();;
/* -----------------------------*/
!function () {

	// TODO: Remove all code for the old .socialButtonsContainer which is replaced by Sharify.

    function whenFacebookReady(callback) {
        if ('FB' in window) {
            callback();
        } else {
            $(window).bind("fbinitted", function () { callback(); });
        }
    }

    function whenTwitterReady(callback) {
        if ('twttr' in window) {
            callback();
        } else {
            $(window).bind("twttrinitted", function () { callback(); });
        }
    }

    function whenGooglePlusOneReady(callback) {
        if (typeof(window.gapi) == 'undefined') {
            window.gapi_onload = callback;
        } else {
            callback();
        }
    }

    whenFacebookReady(function () {
        // Tracking events for Facebook API.
        // No individual button events available - we have to set up once for whole page.

        // track all Like buttons
        FB.Event.subscribe('edge.create', function () {
            if ('AnalyticsUtils' in window) {
                window.AnalyticsUtils.trackEvent("Social", "Like", "Facebook");
            }
        });

        // track comments
        FB.Event.subscribe('comment.create', function () {
            if ('AnalyticsUtils' in window) {
                window.AnalyticsUtils.trackEvent("Social", "Comment", "Facebook");
            }
        });
    });

    whenTwitterReady(function () {
        // Tracking events for Twitter API.
        // No individual button events available - we have to set up once for whole page.

        // track follows from within the page
        window.twttr.events.bind('follow', function () {
            if ('AnalyticsUtils' in window) {
                window.AnalyticsUtils.trackEvent("Social", "Follow", "Twitter");
            }
        });

        // track tweets from within the page
        window.twttr.events.bind('tweet', function () {
            if ('AnalyticsUtils' in window) {
                window.AnalyticsUtils.trackEvent("Social", "Share", "Twitter");
            }
        });
    });

    var fbAppId = null;

    window.SocialHelpers = {
        getFaceBookAppIdFromOpenGraphTags: function () {
            if (fbAppId == null) {
                fbAppId  = $("meta[itemprop='fb:app_id']").attr("content");
            }
            return fbAppId;
        },
        initFacebook: function () {
            var appId = SocialHelpers.getFaceBookAppIdFromOpenGraphTags();
            window.fbAsyncInit = function () {
                $(window).trigger("fbinitted");
            };
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=" + appId;
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        },
        // open up the whenFacebookReady function to allow pages using FB comments to attach callbacks once everything has loaded.
        onFacebookReady: function (callback) {
            whenFacebookReady(callback);
        },
        // creates a like button. NOTE that Facebook needs to run FB.XFBML.parse upon the div that is created, so you should
        // immediately append it to the document somewhere.
        // REQUIRES: Facebook javascript API
        // REQUIRES: Facebook ready trigger before FB API script: window.fbAsyncInit = function () { $(window).trigger("fbinitted"); };
        createFacebookLikeButton: function (urlToLike) {
            var div = $("<div/>").
                attr("class", "fb-like").
                attr("data-href", urlToLike).
                attr("data-width", "120").
                attr("data-layout", "button_count").
                attr("data-show-faces", "false");
            setTimeout(function () {
                whenFacebookReady(function () { FB.XFBML.parse(div.parent()[0]); });
            }, 1);

            return div;
        },
        createTwitterTweetButton: function (urlToTweet) {
            return $("<iframe/>").
                addClass("twitterButtonFrame").
                attr("allowtransparency", "true").
                attr("frameborder", "0").
                attr("scrolling", "no").
                attr("src", "https://platform.twitter.com/widgets/tweet_button.html?url=" + escape(urlToTweet)).
                attr("style", "width:130px; height:20px;");
        },
        // REQUIRES //assets.pinterest.com/js/pinit.js
        createPinterestPinButton: function (urlToPin, imageSrcToPin) {
            return $("<a/>").
                attr("href", "http://pinterest.com/pin/create/button/?url=" + escape(urlToPin) + "&media=" + escape(imageSrcToPin)).
                addClass("pin-it-button").
                attr("count-layout", "horizontal").
                append($("<img/>").
                    attr("border", "0").
                    attr("src", "//assets.pinterest.com/images/PinExt.png").
                    attr("title", "Pin It")
                ).
                add($("<script/>").
                    attr("src", "//assets.pinterest.com/js/pinit.js")
                );


        },

        // REQUIRES: https://apis.google.com/js/plusone.js. NOTE that the gplusone scripts needs to do some work. The returned element
        // should immediately be appended to the document somewhere.
        createGooglePlusPlusOneButton: function (urlToPlusOne) {
            var element = $("<div/>");
            setTimeout(function () {
                whenGooglePlusOneReady(function () { 
                    gapi.plusone.render(
                        element[0],
                        {
                            "size": "medium",
                            "callback": function (status) {
                                // Individual button events available - hook in per button.
                                // Catch on to +1 / Like callback, then trackEvent to GooglePlus.
                                if (status['state'] === 'on' && 'AnalyticsUtils' in window) {
                                    window.AnalyticsUtils.trackEvent("Social", "Share", "GooglePlus");
                                }
                            }
                        }
                    );
                });
            }, 1);
            return element;
        },

        // creates a Facebook comments holder. NOTE that Facebook needs to run FB.XFBML.parse upon the div that is created, so you should
        // immediately append it to the body node.
        // REQUIRES Facebook javascript API
        // REQUIRES: Facebook ready trigger before FB API script: window.fbAsyncInit = function () { $(window).trigger("fbinitted"); };
        createFacebookCommentsHolder: function (urlToCommentOn, forceDisplayBlock, numberOfPosts, dataAttributeWidth, colorScheme, afterParseCallback) {
            if (forceDisplayBlock == null) forceDisplayBlock = true;
            if (numberOfPosts == null) numberOfPosts = 4;
            if (dataAttributeWidth == null) dataAttributeWidth = 400;
            if (colorScheme == null) colorScheme = "light";
            // afterParseCallback may be null

            var fbMarkup = '<div class="fb-comments" ' +
            (forceDisplayBlock
                ? 'style="display:block !important;width:100% !important" '
                : '') +
                'data-num-posts="' + numberOfPosts + '" ' +
                'data-width="' + dataAttributeWidth + '" ' +
                'data-colorscheme="' + colorScheme + '">' +
                '</div>';
            var div = $(fbMarkup);
            div.attr("data-href", urlToCommentOn || "");
            setTimeout(function () {
                whenFacebookReady(function () {
                    FB.XFBML.parse(div.parent()[0]);
                    if (afterParseCallback) afterParseCallback();
                });
            }, 1);
            return div;
        },

        LoadAll: function ($container) {
            SocialHelpers.LoadFacebookButtons($container);
            SocialHelpers.LoadGooglePlusButtons($container);
            SocialHelpers.LoadPinterestButtons();
            SocialHelpers.LoadTwitterButtons();
            SocialHelpers.SetupSocialButtonToggles($container);
        },
        LoadFacebookButtons: function ($container) {
            var container = UTILITIES.NullOrEmpty($container) ? document.body : $container.get(0);
            if (!UTILITIES.NullOrUndefined(window.FB))
                window.FB.XFBML.parse(container);
        },
        LoadGooglePlusButtons: function ($container) {
            var container = UTILITIES.NullOrEmpty($container) ? document.body : $container.get(0);
            if (!UTILITIES.NullOrUndefined(window.gapi))
                window.gapi.plusone.go(container);
        },
        LoadPinterestButtons: function () {
            $.ajax({ url: 'http://assets.pinterest.com/js/pinit.js', dataType: 'script', cache: true });
        },
        LoadTwitterButtons: function () {
            if (!UTILITIES.NullOrUndefined(window.twttr))
                window.twttr.widgets.load();
        },
        SetupSocialButtonToggles: function ($container) {
            $container = $container || $('body');
            $container.find('.socialButtonsToggle').on('click', function () {
                var $this = $(this);
                $this.toggleClass('expanded');
                if ($this.hasClass('expanded')) {
                    var $socialButtonsContainer = $this.find('.socialButtonsContainer');

                    var left = UTILITIES.getWindow().width() - $this.offset().left - $socialButtonsContainer.outerWidth() - 10;
                    if (left > 0)
                        left = 0;

                    $socialButtonsContainer.css({ 'left': left});
                }
            });
        }
    };
} ();

$(function () {
    SocialHelpers.SetupSocialButtonToggles();
});

function GetSocialButtonContainer($el) {
    var $container = $el.closest('.socialButtonsToggle');
    if ($container.length == 0)
        $container = $el.closest('.socialButtonsContainer');

    return $container;
}

function GetGooglePlusButtonFromCallbackElement(el) {
    if (typeof (el.b) == 'object' && el.b.tagName == 'IFRAME' && $(el.b).length > 0) {
        return $(el.b);
    } else {
        return $('#' + el.id);
    }
}

function GooglePlusOnStartInteraction(url) {
    try {
        var $iframe = GetGooglePlusButtonFromCallbackElement(this);
        if ($iframe.length > 0) {
            GetSocialButtonContainer($iframe).addClass('hover');
        }
    } catch(err) {
    }
}

function GooglePlusOnEndInteraction(url) {
    try {
        var $iframe = GetGooglePlusButtonFromCallbackElement(this);
        if ($iframe.length > 0) {
            GetSocialButtonContainer($iframe).removeClass('hover');
        }
    } catch(err) {
    }
};
/* -----------------------------*/
window.SRC_TWIZZLE_DEBUG = false;

var ResponsiveImgSrc = {};
ResponsiveImgSrc.AsyncQueueBySelector = {};
ResponsiveImgSrc.AsyncTimeoutIdBySelector = {};

ResponsiveImgSrc.Process = function (img, options) {
    var settings =
    {
        width: null,
        height: null,
        useMaxContainerWidth: false
    };
    $.extend(settings, options);
    
    var $img = $(img);

    var sizeData = ResponsiveImgSrc.getSizeData($img);

    var processImg = true;
    
    if (UTILITIES.NullOrEmpty(sizeData)) {
        processImg = false;
    }
    else if (sizeData.length === 1) {
        if ($img.attr('src') != sizeData[0].url) {
            $img.attr('src', sizeData[0].url);
        }
        finalCrop = "SingleCrop";
        processImg = false;
    }

    if (processImg) {
        var imgVisible = $img.is(':visible');
        $img.data('initialstyles', $img.attr('style') || '');
        
        if (settings.useMaxContainerWidth && imgVisible) {
            // reset image size when loaded
            ResponsiveImgSrc.setImgMaxContainerWidth($img);
        }

        if (settings.width == null || settings.width == 0) {
            settings.width = $img.width();
        }

        if (settings.width == 0 && !imgVisible) {
            UTILITIES.tempShowDisplayNoneAncestors($img, function() {
                if (settings.useMaxContainerWidth) {
                    // reset image size when loaded
                    ResponsiveImgSrc.setImgMaxContainerWidth($img);
                }
                settings.width = $img.width();
            });
        }

        if (settings.useMaxContainerWidth) {
            // reset image size when loaded
            ResponsiveImgSrc.resetImgAfterMaxSizeFound($img);
        }

        if ((settings.height == null || settings.height == 0) && settings.width > 0 && sizeData.length > 0) {
            if (sizeData.length > 0) {
                settings.height = settings.width * sizeData[0].height / sizeData[0].width;
            } else {
                // We may not have any sizes. Just use the height so we don't crash.
                settings.height = $img.height();
            }
        }
        var dpiAwareWidth = settings.width * UTILITIES.getDevicePixelRatio();
        var dpiAwareHeight = settings.height * UTILITIES.getDevicePixelRatio();
        
        var existingSrc = $img.attr('src');
        var existingCrop = null;

        for (var i = 0; i < sizeData.length; i++) {
            if (existingSrc == sizeData[i].url) {
                existingCrop = sizeData[i];
                break;
            }
        }

        // Dont request smaller image when higher resolution has already been loaded. This will just add extra requests to the server and slow down the page.
        if (existingCrop == null || (existingCrop.width < dpiAwareWidth && existingCrop.height < dpiAwareHeight)) {

            var chosenCropBig = null, chosenCropSmall = null;
            var thisCrop, thisCropDifference, chosenCropDifference;

            for (var i = 0; i < sizeData.length; i++) {
                thisCrop = sizeData[i];
                thisCropDifference = (thisCrop.width - dpiAwareWidth) + (thisCrop.height - dpiAwareHeight);
                if (thisCrop.width >= dpiAwareWidth || thisCrop.height >= dpiAwareHeight) {
                    if (chosenCropBig == null) {
                        chosenCropBig = thisCrop;
                    } else {
                        chosenCropDifference = (chosenCropBig.width - dpiAwareWidth) + (chosenCropBig.height - dpiAwareHeight);
                        if (thisCropDifference < chosenCropDifference) {
                            chosenCropBig = thisCrop;
                        }
                    }
                } else {
                    if (chosenCropSmall == null) {
                        chosenCropSmall = thisCrop;
                    } else {
                        chosenCropDifference = (chosenCropSmall.width - dpiAwareWidth) + (chosenCropSmall.height - dpiAwareHeight);
                        if (thisCropDifference > chosenCropDifference) {
                            chosenCropSmall = thisCrop;
                        }
                    }
                }
            }

            var finalCrop;
            var finalSrc;
            var debugInfo;
            if (chosenCropBig != null) {
                finalSrc = chosenCropBig.url;
                finalCrop = chosenCropBig;
                if (window.DEBUG_FLAG && chosenCropBig.width > settings.width) {
                    debugInfo = '#0f0';
                }
            } else if (chosenCropSmall != null) {
                finalSrc = chosenCropSmall.url;
                finalCrop = chosenCropSmall;
                if (window.DEBUG_FLAG && chosenCropSmall.width > settings.width) {
                    debugInfo = '#f00';
                }
            } else {
                finalSrc = null;
            }

            if (finalSrc != null) {
                if (existingSrc != finalSrc) {
                    //$img.trigger('ResponsiveImgSrc_Changing');
                    $img.attr('src', finalSrc);
                } else {
                    // $img.trigger('ResponsiveImgSrc_NoChange');
                }
            }
        } else {
            finalCrop = 'existing-' + existingCrop.width + 'x' + existingCrop.height;
        }
        if (settings.useMaxContainerWidth) {
            if ($img.get(0).complete) {
                // reset image size if image already loaded
                ResponsiveImgSrc.resetImgAfterMaxSizeFound($img);
            }
        }
    }

    $img.trigger('ResponsiveImgSrc_Complete');

    if (window.DEBUG_FLAG && window.SRC_TWIZZLE_DEBUG) {
        if (sizeData.length == 0) {
            finalCrop = 'NoSrcData';
        }
        var randomId = $img.data('ResponsiveImgSrcDebugId') || (Math.random() + '').substr(2);
        $img.data('ResponsiveImgSrcDebugId', randomId);
        $('#ResponsiveImgSrcDebug' + randomId).remove();

        var debugLeft = $img.offset().left + $img.width() / 2;
        var debugTop = $img.offset().top + $img.height() / 2;
        UTILITIES.getBody().append($('<div/>').
            attr('id', 'ResponsiveImgSrcDebug' + randomId).
            css('position', 'absolute').
            css('top', debugTop).
            css('left', debugLeft).
            css('background', debugInfo || '#ff0').
            css('font-size', '8px').
            css('z-index', '65000').
            html(settings.width + 'x' + settings.height + '<br />[' + (finalCrop ? (typeof finalCrop == 'string' ? finalCrop : (finalCrop.width + 'x' + finalCrop.height)) : 'NoCrop') + ']')
        );
    }
};

ResponsiveImgSrc.setImgMaxContainerWidth = function ($img) {
    //$img.data('responsiveimgsrc-prev-max-width', $img[0].style.maxWidth);
    //$img.data('responsiveimgsrc-prev-visibility', $img[0].style.visibility);
    //$img.data('responsiveimgsrc-prev-width', $img[0].style.width);
    $img.css({
        'max-width': '100%',
        visibility: 'hidden',
        width: 2000 // a number larger than any possible image to force use parent to expand to max size
    });
};

ResponsiveImgSrc.resetImgAfterMaxSizeFound = function ($img) {
    $img.attr('style', $img.data('initialstyles'));

    $img.on('load', function() {
        if ($img.is(':visible') && $img.width() == 0) { // some browsers dont allow a loaded image to fill the space sometimes, so we should force it to do so
            $img.css({
                'max-width': '100%',
                width: 2000 // a number larger than any possible image to force use parent to expand to max size
            });
        }
    });
};

ResponsiveImgSrc.UnLoad = function (img) {
    var $img = $(img);

    // Get smallest crop
    var finalSrc = ResponsiveImgSrc.getSmallestUrl(img);
    var existingSrc = $img.attr('src');
    if (existingSrc != finalSrc)
        $img.attr('src', finalSrc);
};

ResponsiveImgSrc.getSizeData = function (img) {
    // If an image only has one size it may not have any data. It may still be
    // selected as part of a CSS selector, so cannot be excluded
    var imageData = $(img).data('srcsizedata');
    if (imageData == null) {
        // We only have the src attribute to go by. Ideally, we'd return naturalWidth/Height here, but IE8 does not
        // support it. Also, the image may not be loaded yet.
        return [];
    }
    return imageData.values;
};
ResponsiveImgSrc.getAspectRatio = function (img, sizeData) {
    var biggest = ResponsiveImgSrc.getBiggest(img, sizeData);
    if (biggest == null) {
        return null;
    }
    return biggest.width / biggest.height;
};
ResponsiveImgSrc.getBiggest = function (img, sizeData) {
    sizeData = sizeData || ResponsiveImgSrc.getSizeData(img);
    if (sizeData == null)
        return null;
    var biggest = null;
    var current;
    for (var i = 0; i < sizeData.length; i++) {
        current = sizeData[i];
        if (biggest == null || biggest.width < current.width) {
            biggest = current;
        }
    }
    return biggest;
};
ResponsiveImgSrc.getSmallestUrl = function (img, sizeData) {
    var smallestSizeData = ResponsiveImgSrc.getSmallest(img, sizeData);

    return smallestSizeData != null ? smallestSizeData.url : img.src;
};
ResponsiveImgSrc.getSmallest = function (img, sizeData) {
    sizeData = sizeData || ResponsiveImgSrc.getSizeData(img);
    if (sizeData == null)
        return null;
    var smallest = null;
    var current;
    for (var i = 0; i < sizeData.length; i++) {
        current = sizeData[i];
        if (smallest == null || smallest.width > current.width) {
            smallest = current;
        }
    }
    return smallest;
};
/* creates a ResponsiveImgSrc element.
* initialSrcMode - determines what the src attribute is initially filled in with
*/
ResponsiveImgSrc.createElement = function (imageInfo, initialSrcMode, optionalHolderWidth, optionalHolderHeight, optionalAttachElementCallback) {
    var initialImageSrcMode = (initialSrcMode || 'smallest').toLowerCase();
    //logStepStart('ResponsiveImgSrc.createElement');
    var $img = $('<img/>');

    var sizeData = [];
    var info;
    var imageInfoCount = imageInfo.length;
    for (var i = 0; i < imageInfoCount; i++) {
        info = imageInfo[i];
        // No longer necessary to stash suff in the HTML attributes
        // $img.attr('data-src' + info.width + 'x' + info.height, info.url); 
        sizeData.push({
            url: info.url,
            width: info.width,
            height: info.height
        });
    }
    // srcsizedata is an object that has a single 'values' property of type Array
    $img.attr('data-srcsizedata', JSON.stringify({ values: sizeData }));
    
    if (optionalAttachElementCallback) {
        optionalAttachElementCallback($img);
    }

    switch (initialImageSrcMode) {
        case 'pixel': // The image should start with no image loaded. The img element will not be attached to the page yet, so we don't know its width/height/styles. We must not let src be blank, otherwise the HTML page will reload in Firefox
            $img.attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
            break;
        case 'smallest':
            $img.attr('src', ResponsiveImgSrc.getSmallestUrl($img, sizeData));
            break;
        // uncomment and implement as needed: 
        case 'bestsize': // We want the best size for the image immediately. We either know the width/height of the parent holder 
            var options = {};
            if (optionalHolderWidth)
                options.width = optionalHolderWidth;
            if (optionalHolderHeight)
                options.height = optionalHolderHeight;
            ResponsiveImgSrc.Process($img, options);
            //ResponsiveImgSrc.Process($img, { useMaxContainerWidth: true });
            break;
        case "holderdimensions":
            if (optionalHolderWidth == null || optionalHolderHeight == null) {
                throw "initialImageSrcMode set as 'holderdimensions' requires both optionalHolderWidth and optionalHolderHeight to be numbers and not null";
            }
            var aspectRatio = ResponsiveImgSrc.getAspectRatio($img),
                idealWidth = optionalHolderWidth,
                idealHeight = idealWidth / aspectRatio;

            if (idealHeight > optionalHolderHeight) {
                idealHeight = optionalHolderHeight;
                idealWidth = idealHeight * aspectRatio;
            }
            ResponsiveImgSrc.Process($img, { width: idealWidth, height: idealHeight });
            break;
        default:
            throw "ResponsiveImgSrc.createElement couldn't understant initialSrcMode of '" + initialImageSrcMode + "'";
    }

    //logStepStop("ResponsiveImgSrc.createElement");
    return $img;
};;
/* -----------------------------*/
// ImgManager

// On page load, if no ImgConMemMgr, then do one for $('body') with a timeout of 50ms
// or cancel Body one when making specific one

// window.DEFAULT_IMG_MGR = {};

var IMG_MANAGER = window.IMG_MANAGER || {};
IMG_MANAGER.DefaultImgClass = 'multiSrcImg';
IMG_MANAGER.UseMaxContainerWidth = false;
    
$(function () {
    if (window.DEFAULT_IMG_MGR == null) {
        window.DEFAULT_IMG_MGR = UTILITIES.getBody().getImgManager({
            itemSelector: 'img.' + IMG_MANAGER.DefaultImgClass,
            offScreenThreshold: UTILITIES.getWindow().height(),
            useMaxContainerWidth: IMG_MANAGER.UseMaxContainerWidth
        });
    }
});



/*global window, jQuery */
(function ($) {
    // Default configuration properties.
    var defaults = {
        itemSelector: 'img.' + IMG_MANAGER.DefaultImgClass,

        // You should only change these for edge case usage when performance tweaking is extremely necessary!
        runOnWindowResize: true,
        // When set to true, factors like scroll position are not taken into account. All images are always SrcTwizzle'd. Set this to
        // false to limit the SrcTwizzle'd images to only those within the window/viewport
        runImmediately: true,
        unloadIfOffScreen: false,
        allImagesSameSize: false,
        offScreenThreshold: 500,
        checkContainerPositionForLoading: false,
        runOnContainerScroll: null,  // 'horizontal', 'vertical'
        asyncDelay: null,
        useMaxContainerWidth: false,
        processInvisibleImages: true,
        initCallback: null,
        setupCallback: null,
        stopCallback: null,
        reloadCallback: null,
        debugTag: "notag"
    };
    
    /**
    * The ImgManager object.
    */
    $.imgManager = function (e, o) {
        this.options = $.extend({}, defaults, o || {});
        this.imageContainer = $(e);
        this.images = [];
        this.processIndex = 0;
        this.processing = false;
        this.currentProcessingThread = null;
        this.imageContainerFrame = null;
        this.imageWidth = null;
        this.imageHeight = null;
        this.throttleInterval = UTILITIES && UTILITIES.hasSlowJavascript ? 350 : 150;
        
        // if this value is greater than other JS resize debounce interval it will allow other calculations to be performed before calculating the img sizes.
        this.debounceInterval = UTILITIES && UTILITIES.hasSlowJavascript ? 200 : 125;
        
        this.setup();
    };

    var TAG = "ImgManager";

    $.imgManager.fn = $.imgManager.prototype = {
        imgManager: '1.0'
    };

    $.imgManager.fn.extend = $.imgManager.extend = $.extend;

    $.imgManager.fn.extend({

        setup: function () {
            var instance = this;
            
            if(!UTILITIES.NullOrEmpty(this.options.itemSelector))
                this.images = this.imageContainer.find(this.options.itemSelector);
            
            if (this.options.runImmediately) {
                this.start();
            }

            if (this.options.unloadIfOffScreen) {
                //this.calculateFrameWhenImagesLoaded();
                UTILITIES.getWindow().on('scroll.ImgManager',
                    $.throttle(instance.throttleInterval, function() {
                        instance.restart();
                    })
                );
            }
            
            if (this.options.runOnContainerScroll) {
                this.imageContainer.off('scroll.ImgManager').on('scroll.ImgManager', $.throttle(this.throttleInterval, function () {
                    setTimeout(function () {
                        instance.start();
                    }, 10);
                }));
            }
            
            if (this.options.runOnWindowResize) {
                UTILITIES.getWindow().on('resize.ImgManager',
                    $.debounce(instance.debounceInterval, function () {
                        // IE8 produces spurious window resize events if the body changes, but the window does not. Ignore these.
                        // We must store the lastWindowWidth/Height against each individual ImgManager instance. If it was stored statically, then
                        // only the first ImgManager instance would fire its resize event before updating the lastWindowWidth/Height with the current
                        // values.
                        var width = UTILITIES.getWindow().width();
                        var height = UTILITIES.getWindow().height();

                        if (width == instance.lastWindowWidth && height == instance.lastWindowHeight) return;

                        instance.lastWindowWidth = width;
                        instance.lastWindowHeight = height;

                        if (!UTILITIES.NullOrEmpty(instance.options.itemSelector)) {
                            instance.imageContainer.find(instance.options.itemSelector).each(function() {
                                if (instance.images.index(this) < 0) { // add any missing images
                                    instance.images.push(this);
                                }
                            });
                        }
                        instance.restart(); // Since browser resize is so infrequent, restart does ALL the images. DONT use reload, as manually added images may not fit the selector
                    })
                );
            }
            
            if (this.options.setupCallback !== null) {
                this.options.setupCallback(this);
            }
        },
        
        updateOptions: function(options) {
            this.options = $.extend({}, this.options, options || {});
            
        },

        start: function() {
            // Loop ASync through images
            // ASSUMPTION: the window only scrolls vertically
            if (!this.options.checkContainerPositionForLoading || $.st_inverticalviewport(this.imageContainer, { threshold: this.options.offScreenThreshold })) {
                this.processing = true;

                if (this.options.unloadIfOffScreen) {
                    // TODO: intelligent processing. e.g. remember first and last images within viewport, then start from there.
                }

                this.processImages();
            }
        },
        
        restart:function() {
            this.stop();
            this.imageHeight = null;
            this.imageWidth = null;
            this.processIndex = 0;
            this.start();
        },

        processImages:function() {
            if (this.images != null && this.processing && this.images.length > this.processIndex) {
                this.cancelProcessing();
                this.processImageAsync();
            } else {
                this.processing = false;
                UTILITIES.getWindow().trigger('ImgManager_ProcessImagesComplete');
            }
        },
        
        processImageAsync: function() {
             var process = true;
            
                if (this.options.unloadIfOffScreen) {
                    if (this.options.runOnContainerScroll) {
                        var imageContainerFrame = this.calculateFrame();

                        if (this.runOnContainerScroll == "horizontal") {
                            process = $.st_inhorizontalviewport(this.images[this.processIndex], { threshold: imageContainerFrame.right - imageContainerFrame.left, containerFrame: imageContainerFrame });
                        } else {
                            process = $.st_inverticalviewport(this.images[this.processIndex], { threshold: imageContainerFrame.bottom - imageContainerFrame.top, containerFrame: imageContainerFrame });
                        }
                    } else {
                        process = $.st_inverticalviewport(this.images[this.processIndex], { threshold: this.options.offScreenThreshold });
                    }
                }
                if (process && (this.options.processInvisibleImages || $(this.images[this.processIndex]).is(':visible'))) {
                    if (this.options.allImagesSameSize) {
                        this.imageWidth = this.imageWidth || $(this.images[0]).width();
                        if (this.imageWidth > 0) {
                            this.imageHeight = this.imageHeight || $(this.images[0]).height();
                            ResponsiveImgSrc.Process(this.images[this.processIndex], { width: this.imageWidth, height: this.imageHeight });
                        } else {
                            this.imageWidth = null;
                            var $imgContainer = $(this.images[0]).parent();
                            ResponsiveImgSrc.Process(this.images[this.processIndex], { width: $imgContainer.width(), height: $imgContainer.height() });
                        }
                    } else {
                        ResponsiveImgSrc.Process(this.images[this.processIndex], { useMaxContainerWidth: this.options.useMaxContainerWidth });
                    }
                } else if(this.options.unloadIfOffScreen) {
                    ResponsiveImgSrc.UnLoad(this.images[this.processIndex]);
                }
                this.processIndex += 1;
                var instance = this;
                //instance.processImages();
                if (this.options.asyncDelay == null)
                    this.currentProcessingThread = window.requestAnimationFrame(function () { instance.processImages(); });
                else
                    this.currentProcessingThread = setTimeout(function() { instance.processImages(); }, this.options.asyncDelay);
        },

        cancelProcessing: function() {
            if (this.options.asyncDelay == null)
                window.cancelAnimationFrame(this.currentProcessingThread);
            else
                clearTimeout(this.currentProcessingThread);
        },
        
        stop: function () {
            this.cancelProcessing();
            this.processing = false;

            if (this.options.stopCallback !== null) {
                this.options.stopCallback(this);
            }
        },

        calculateFrame: function () {
            return this.imageContainerFrame || $.calculateContainerFrame(this.imageContainer);
        },
        calculateFrameWhenImagesLoaded: function() {
            var container = this.imageContainer.get(0);
            if (container != window && container != document && this.images != null && this.images.length > 0) {
                this.images.imagesLoaded(function() {
                    // Cached container frame once all images have been loaded
                    this.imageContainerFrame = $.calculateContainerFrame(this.imageContainer);
                });
            }
        },

        addImagesFromContainer: function($container) {
            if ($container != null && $container.length > 0 && !UTILITIES.NullOrEmpty(this.options.itemSelector)) {
                this.addImages($container.find(this.options.itemSelector));
            }
        },

        addImages: function ($images) {
            if ($images != null && $images.length > 0) {
                if (this.images) {
                    var instance = this;
                    $images.each(function() {
                        instance.images.push(this);  // for some reason .add() doesnt necessarily add them at the end
                    });
                } else {
                    this.images = $images;
                }
                if (this.options.unloadIfOffScreen) {
                    this.imageContainerFrame = null;
                    this.calculateFrameWhenImagesLoaded();
                }
                if (this.options.runImmediately)
                    this.start();
            }
        },

        reload: function (forceRestart) {
            //console.log(TAG, "ImgManager '"+this.options.debugTag+"' is reloading.");
            if (this.options.reloadCallback !== null) {
                this.options.reloadCallback(this);
            }
            this.images = [];
            if(!UTILITIES.NullOrEmpty(this.options.itemSelector))
                this.images = this.imageContainer.find(this.options.itemSelector);
            //console.log(TAG, "ImgManager '"+this.options.debugTag+"' found "+this.images.length+" items");
            if (forceRestart != false || this.options.runImmediately) {
                this.restart();
            }
        }
    });

    $.imgManager.extend({
        /**
        * Gets/Sets the global default configuration properties.
        *
        * @method defaults
        * @return {Object}
        * @param d {Object} A set of key/value pairs to set as configuration properties.
        */
        defaults: function (d) {
            return $.extend(defaults, d || {});
        }
    });

    /**
    * Creates a Memory Manager object for an image container

    * @method imgManager
    * @return jQuery
    * @param o {Hash|String} A set of key/value pairs to set as configuration properties or a method name to call on a formerly created instance.
    */
    $.fn.imgManager = function (o) {
        if (typeof o == 'string') {
            var instance = $(this).data('imgManager'), args = Array.prototype.slice.call(arguments, 1);
            return instance[o].apply(instance, args);
        } else {
            return this.each(function () {
                var instance = $(this).data('imgManager');
                if (instance) {
                    if (o) {
                        instance.options = $.extend(instance.options, o);
                    }
                    instance.reload(false);
                } else {
                    $(this).data('imgManager', new $.imgManager(this, o));
                }
            });
        }
    };

    /**
    * Gets or creates an ImgManager. If the imgManager already exists, the options are thrown away. i.e it the imgManager is NOT updated
    *
    * @method imgManager
    * @return imgManager object
    * @param o {Hash|String} A set of key/value pairs to set as configuration properties or a method name to call on a formerly created instance.
    */
    $.fn.getImgManager = function (o) {
        var existing = $(this).data('imgManager');
        if (existing == null) {
            $(this).imgManager(o);
            return $(this).data('imgManager');
        } else {
            existing.options = $.extend({}, existing.options, o || {});
        }
        return existing;
    };

})(jQuery);

$.calculateContainerFrame = function ($container) {
    var offset;
    if ($container == null) {
        $container = UTILITIES.getWindow();
    }
    var container = $container.get(0);
    if (container == window || container == document) {
        offset = {
            top: $container.scrollTop(),
            left: $container.scrollLeft()
        };
    }
    else {
        offset = $container.offset();
    }

    if (offset == null) {
        offset = {
            top: $container.scrollTop(),
            left: $container.scrollLeft()
        };
    }

    return $.extend(offset, {
        bottom: offset.top + $container.height(),
        right: offset.left + $container.width()
    });
};

$.st_belowthefold = function (element, settings) {
    var fold;
    if (settings.containerFrame != null && settings.containerFrame.bottom != null) {
        fold = settings.containerFrame.bottom;
    }
    else {
        if (settings.container === undefined || settings.container === window) {
            fold = UTILITIES.getWindow().height() + UTILITIES.getWindow().scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }
    }
    return fold <= $(element).offset().top - settings.threshold;
};

$.st_rightoffold = function (element, settings) {
    var fold;
    if (settings.containerFrame != null && settings.containerFrame.right != null) {
        fold = settings.containerFrame.right;
    }
    else {
        if (settings.container === undefined || settings.container === window) {
            fold = UTILITIES.getWindow().width() + UTILITIES.getWindow().scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }
    }

    return fold <= $(element).offset().left - settings.threshold;
};

$.st_abovethetop = function (element, settings) {
    var fold;
    if (settings.containerFrame != null && settings.containerFrame.top != null) {
        fold = settings.containerFrame.top;
    }
    else {
        if (settings.container === undefined || settings.container === window) {
            fold = UTILITIES.getWindow().scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }
    }

    return fold >= $(element).offset().top + settings.threshold + $(element).height();
};

$.st_leftofbegin = function (element, settings) {
    var fold;
    if (settings.containerFrame != null && settings.containerFrame.left != null) {
        fold = settings.containerFrame.left;
    }
    else {
        if (settings.container === undefined || settings.container === window) {
            fold = UTILITIES.getWindow().scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }
    }
    
    return fold >= $(element).offset().left + settings.threshold + $(element).width();
};

$.st_inviewport = function (element, settings) {
    settings = $.st_viewportsettings(settings);
    return !$.st_rightoffold(element, settings) && !$.st_leftofbegin(element, settings) &&
                !$.st_belowthefold(element, settings) && !$.st_abovethetop(element, settings);
};

$.st_inverticalviewport = function (element, settings) {
    settings = $.st_viewportsettings(settings);
    return !$.st_belowthefold(element, settings) && !$.st_abovethetop(element, settings);
};

$.st_completelyinverticalviewport = function (element, settings) {
    settings = $.st_viewportsettings(settings);
    settings.threshold = -$(element).outerHeight();
    return !$.st_belowthefold(element, settings) && !$.st_abovethetop(element, settings);
};

$.st_inhorizontalviewport = function (element, settings) {
    settings = $.st_viewportsettings(settings);
    return !$.st_rightoffold(element, settings) && !$.st_leftofbegin(element, settings);
};
$.st_viewportsettings = function (settings) {
    settings = settings || {};
    if (settings.containerFrame == null) {
        // Ideally this should be set higher up, as we dont want to run the calculations on the container for every element
        settings.containerFrame = $.calculateContainerFrame(settings.container);
    }
    if (settings.threshold == null) {
        settings.threshold = 0;
    }

    return settings;
};;
/* -----------------------------*/
// Images Loaded event gets fired when all selected images are loaded
// Example: $('img').imagesLoaded(function () { do stuff });
$.fn.imagesLoaded = function (callback, callbackWhenNumberLoaded, options) {
    options = options || {};
    var elems = this.filter('img'),
      blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

    if (elems.length == 0)
        elems = this.find('img');

    if (callbackWhenNumberLoaded == null || callbackWhenNumberLoaded > elems.length)
        callbackWhenNumberLoaded = elems.length;
    
    // Use specific number so that other calls to imagesLoaded dont cancel your previous ones.
    var uniqueEventId = options.uniqueEventId || 'imgloaded-' + Math.random();

    elems.unbind('load.' + uniqueEventId).bind('load.' + uniqueEventId, function () {
        if (--callbackWhenNumberLoaded <= 0 && this.src !== blank) {
            elems.unbind('load.' + uniqueEventId);
            callback.call(elems, this);
        }
    }).each(function () {
        // cached images don't fire load sometimes, so we reset src.
        if (this.complete || this.complete === undefined) {
            var src = this.src;
            // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
            // data uri bypasses webkit log warning (thx doug jones)
            this.src = blank;
            this.src = src;
        }
    });

    return this;
};

// MoveTo moves an element from one parent to another
// Example: $element.moveTo($newParent, true);
$.fn.moveTo = function (selector, prepend) {
    return this.each(function () {
        var $this = $(this);
        $this.detach();
        if (prepend) {
            $this.prependTo(selector);
        } else {
            $this.appendTo(selector);
        }

        //var $cl = $($this.clone(true, true));
        //if (prepend)
        //    $cl.prependTo(selector);
        //else
        //    $cl.appendTo(selector);
        //$this.remove();
    });
};

$.fn.moveToIndex = function (selector, index) {
    return this.each(function () {
        var $newParent = $(selector);
        if ($newParent.length > 0) {
            var $this = $(this);
            var newParentChildCount = $newParent.children().length;
            if (index < newParentChildCount) {
                $this.moveToSibling($($newParent.children().get(index)), true);
            } else {
                $this.moveTo(selector);
            }
        }
    });
};

$.fn.moveItemsAroundThisDown = function (selector, moveCount) {
    $(this).moveItemsAroundThis(selector, 'down', moveCount);
};

$.fn.moveItemsAroundThisUp = function(selector, moveCount) {
    $(this).moveItemsAroundThis(selector, 'up', moveCount);
};

$.fn.moveItemsAroundThis = function (selector, direction, moveCount)
{
    return this.each(function () {
        direction = direction || 'down';
        moveCount = moveCount || 1;
        var $this = $(this);
        var $parent = $this.parent();
        var counter = 0;
        var $itemToMove;
        var itemIndex;
        while (counter < moveCount) {
            itemIndex = $parent.children().index($this);
            if (itemIndex < 0)
                break;
            if (direction == 'down') {
                $itemToMove = $this.next(selector);
            } else {
                $itemToMove = $this.prev(selector);
            }
            if ($itemToMove.length == 0)
                break;

            $itemToMove.moveToIndex($parent, itemIndex);
            counter++;
        }
    });
};
  

$.fn.moveToSibling = function ($element, before) {
    return this.each(function () {
        var $this = $(this);
        $this.detach();
        if (before) {
            $element.before($this);
        } else {
            $element.after($this);
        }
        
        //var $cl = $($this.clone(true));
        //if (before)
        //    $element.before($cl);
        //else
        //    $element.after($cl);
        //$this.remove();
    });
};
$.fn.moveToParent = function ($element, prepend) {
    return this.each(function () {
        var $this = $(this);
        $this.detach();
        if (prepend) {
            $element.prepend($this);
        } else {
            $element.append($this);
        }
        
        //var $cl = $($this.clone(true));
        //if (prepend)
        //    $element.prepend($cl);
        //else
        //    $element.append($cl);
        //$this.remove();
    });
};

$.fn.setMinWidthFromChildren = function (childrenSelector) {
    var minWidth = 0;
    $(this).children(childrenSelector).each(function () {
        minWidth += $(this).outerWidth(true);
    });

    if (minWidth > $(this).parent().width())
        $(this).css('max-width', '100%');
    $(this).css('min-width', minWidth);

    return this;
};
$.fn.siblingsOuterWidth = function (includeMargin) {
    var siblingWidth = 0;
    $(this).siblings(':visible').each(function () {
        siblingWidth += $(this).outerWidth(includeMargin);
    });
    return siblingWidth;
};
$.fn.availableWidth = function () {
    return $(this).parent().width() - $(this).siblingsOuterWidth(true);
};

$.fn.changeElementType = function (newType) {

    function changeElementTypeForSingleElement(element) {
        var attrs = {};

        $.each(element.attributes, function (idx, attr) {
            attrs[attr.nodeName] = attr.nodeValue;
        });

        $(element).replaceWith(function () {
            return $("<" + newType + "/>", attrs).append($(element).contents());
        });
    }

    this.each(function (index, elem) {
        changeElementTypeForSingleElement(elem);
    });

    return $(this);
};
$.fn.removeWhitespace = function () {
    this.contents().filter(
        function () {
            return (this.nodeType == 3 && !/\S/.test(this.nodeValue));
        }
    ).remove();
    return this;
};
$.fn.removeWhitespace = function() {
    this.contents().filter(
        function() {
            return (this.nodeType == 3 && !/\S/.test(this.nodeValue));
        }
    ).remove();
    return this;
};

// Obsolete: Use jquey.mousescrollevents
$.fn.preventPageScrollOnContainerScroll = function () {
    var $this = $(this);
    $this.on('wheel.preventPageScrollOnContainerScroll mousewheel.preventPageScrollOnContainerScroll DOMMouseScroll.preventPageScrollOnContainerScroll', function (e) {
        var direction = (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) ? -1 : 1;
        if (direction > 0) {
            if ($this.scrollTop() >= this.scrollHeight - $this.outerHeight()) {
                e.preventDefault();
            }
        } else {
            if ($this.scrollTop() <= 0) {
                e.preventDefault();
            }
        }
    });
    return this;
};
;
/* -----------------------------*/
(function () {
    // stores ids and callbacks to generate incontent ads
    var _incontentAdRenderedCallbacks = [];
    var _registeredIncontentHolderAndCallbacks = [];
    var docReadyFired = false;

    function registerInContentAd(advertRenderCode, renderFinishedCallback, placeholderId) {
        placeholderId = placeholderId || window.ArticleAdverts.incontentAdPlaceholderId;

        _registeredIncontentHolderAndCallbacks.push({
            placeholderId: placeholderId,
            advertRenderCode: advertRenderCode,
            renderFinishedCallback: renderFinishedCallback
        });

        log("InContentAd has been registered. Total InContentAds=" + _registeredIncontentHolderAndCallbacks.length);
    };

    // To be called on document ready. If using iframes to render ads, this may be called before the
    // parent page's document ready has occurred. In that case, do not actually do anything
    function renderAllAds() {
        if (!docReadyFired) return;
        
        var advertsRendered = 0;
        for (var i = 0; i < _registeredIncontentHolderAndCallbacks.length; i++) {
            var item = _registeredIncontentHolderAndCallbacks[i];
            var $elem = $("#" + item.placeholderId);
            if ($elem.length > 0) {
                // we've found the place where this advert should go. remove it from the list
                item.advertRenderCode($elem);
                if (item.renderFinishedCallback) 
                    item.renderFinishedCallback();
                // remove the incontent ad that we just removed
                _registeredIncontentHolderAndCallbacks.splice(i, 1);
                i--; // decrement the loop-counter since we've removed an item
                advertsRendered++; // increment our rendered ads count, so we know whether to callback later on
            }
        }
        
        if (advertsRendered > 0) {
            for (var i = 0; i < _incontentAdRenderedCallbacks.length; i++) {
                _incontentAdRenderedCallbacks[i]();
            }
        }
    }

    // returns the number of incontent ads that still need to be placed upon the page (or parent page if in iframed-ad-mode)
    function getPendingInContentAdCount() {
        return _registeredIncontentHolderAndCallbacks.length;
    }

    // registers interest in being informed when incontent ads get rendered to the page. These callbacks will be called when
    // one or more incontent ads have finished rendering
    function registerOnIncontentAdRenderedCallback(callback) {
        _incontentAdRenderedCallbacks.push(callback);
    }

    // the public-facing interface for incontent ads
    window.ArticleAdverts = {
        registerOnIncontentAdRenderedCallback: registerOnIncontentAdRenderedCallback,
        registerInContentAd: registerInContentAd,
        getPendingInContentAdCount: getPendingInContentAdCount,
        renderAllAds: renderAllAds,
        registerInContentAdHolder: function () { }, // not used. Here to prevent errors
        incontentAdPlaceholderId: null // this may get set by ad-position
    };

    $(function () {
        docReadyFired = true;
        window.ArticleAdverts.renderAllAds();
    });
})();;
/* -----------------------------*/
// detect the URL of this script element
(function () {
    if (!window.CondeNastScriptsPath || window.CondeNastScriptsPath.length == 0) {
        var scripts = document.getElementsByTagName('script');
        var scriptPath = '';
        for (var i = 1; i <= scripts.length; i++) {
            scriptPath = scripts[scripts.length - i].src;
            if (scriptPath && scriptPath.length > 0)
                break;
        }
        var groupSplit = scriptPath.lastIndexOf("XxSHAREDPARTxX");
        if (groupSplit >= 0) scriptPath = scriptPath.substr(0, groupSplit);
        var slashPos = scriptPath.lastIndexOf("/");
        var scriptFolder = scriptPath.substr(0, slashPos + 1);
        window.CondeNastScriptsPath = scriptFolder;
    }
})();

window.RESPONSIVEADS = {};
window.RESPONSIVEADS.RESPSONSIVEADS_DEBUG_PATH = "_DOT__DOT_/FromShared/logic/ResponsiveAdsIframe_DOT_scriptgroupXxSHAREDPARTxX_DOT__DOT_/_DOT__DOT_/_DOT__DOT_/_DOT__DOT_/_DOT__DOT_/_DOT__DOT_/CondeNetUK_DOT_Web_DOT_SharedResources/Components/ResponsiveAdverts/ResponsiveAdsIframe_DOT_js";
window.RESPONSIVEADS.RESPSONSIVEADS_RELEASE_PATH = "../FromShared/logic/ResponsiveAdsIframe.generated.min.js";
window.RESPONSIVEADS.RESPSONSIVEADS_WS_PATH = "ResponsiveAdsIframe.js";

window.RESPONSIVEADS.EXPANSION_DURATION = 300;
window.RESPONSIVEADS.allowExpansionTransition = navigator.userAgent.match(/iPad/i) == null;
window.RESPONSIVEADS.toggleExpansion = function (element, fullHeightPx, useTransition) {
    var isExpanded = !!$(RESPONSIVEADS.getContainingIframeFromElement(element)).data("RESPONSIVEADS.Expanded");

    if (isExpanded) {
        window.RESPONSIVEADS.closeExpansion(element, useTransition);
    } else {
        window.RESPONSIVEADS.openExpansion(element, fullHeightPx, useTransition);
    }
};
window.RESPONSIVEADS.openExpansion = function (element, fullHeightPx, useTransition) {
    var $iframe = $(RESPONSIVEADS.getContainingIframeFromElement(element));
    var existingState = !!$iframe.data("RESPONSIVEADS.Expanded");
    if (existingState) return;

    if (useTransition == null) useTransition = true;

    $iframe.data("RESPONSIVEADS.Expanded", true);
    $iframe.stop(true, true);
    $iframe.data("RESPONSIVEADS.ContractedHeight", $iframe.height());
    $iframe.animate(
        {
            "height": fullHeightPx
        },
        {
            step: function (now, fx) {
                var tot = fx.end - fx.start;
                var pos = now - fx.start;
                if ($iframe[0].contentWindow.pokeAnimation) $iframe[0].contentWindow.pokeAnimation(true, pos / tot, fullHeightPx);
            },
            complete: function () {
                if ($iframe[0].contentWindow.setExpansionState) {
                    $iframe[0].contentWindow.setExpansionState(true);
                }
                $(window).trigger('Content_SizeChange');
                $(window).trigger("ResponsiveAds_SizeChange");
            },
            duration: (useTransition && window.RESPONSIVEADS.allowExpansionTransition) ? RESPONSIVEADS.EXPANSION_DURATION : 0
        });
};
window.RESPONSIVEADS.closeExpansion = function (element, useTransition) {
    var $iframe = $(RESPONSIVEADS.getContainingIframeFromElement(element));
    var existingState = !!$iframe.data("RESPONSIVEADS.Expanded");

    if (useTransition == null) useTransition = true;

    $iframe.data("RESPONSIVEADS.Expanded", false);
    $iframe.stop(true, true);
    var contractedHeight = $iframe.data("RESPONSIVEADS.ContractedHeight");
    $iframe.animate({
        "height": contractedHeight
    },
        {
            step: function (now, fx) {
                var tot = fx.end - fx.start;
                var pos = now - fx.start;
                if ($iframe[0].contentWindow.pokeAnimation) $iframe[0].contentWindow.pokeAnimation(false, pos / tot, contractedHeight);
            },
            complete: function () {
                if ($iframe[0].contentWindow.setExpansionState) {
                    $iframe[0].contentWindow.setExpansionState(false);
                }
                $(window).trigger('Content_SizeChange');
                $(window).trigger("ResponsiveAds_SizeChange");
            },
            duration: (useTransition && window.RESPONSIVEADS.allowExpansionTransition) ? 300 : 0
        });
};
window.RESPONSIVEADS.setHeight = function (element, newHeight) {
    var $iframe = $(RESPONSIVEADS.getContainingIframeFromElement($(element)[0]));

    $iframe.data("RESPONSIVEADS.Expanded", false);
    $iframe.stop(true, true);
    $iframe.data("RESPONSIVEADS.ContractedHeight", newHeight);
    $iframe.height(newHeight);
    window.RESPONSIVEADS.closeExpansion(element, false);

    for (var i = 0; i < window.RESPONSIVEADS._registerOnAdHeightSetCallbacks.length; i++) {
        window.RESPONSIVEADS._registerOnAdHeightSetCallbacks[i]();
    }
}

window.RESPONSIVEADS._registerOnAdHeightSetCallbacks = [];
window.RESPONSIVEADS.registerOnAdHeightSetCallback = function (callback) {
    window.RESPONSIVEADS._registerOnAdHeightSetCallbacks.push(callback);
}


window.RESPONSIVEADS.getContainingIframeFromElement = function (elementOrWindow) {
    if (elementOrWindow.frameElement != null) {
        // all good browsers
        return elementOrWindow.frameElement;
    } else {
        // IE8
        return elementOrWindow.ownerDocument.frameElement;
    }
}

// Renders the adConfig into the specified document. Older sites will only ever write to the current document. Iframed ads will want
// to write to their iframe's document, rather than the parent document.
window.RESPONSIVEADS.renderIframeWithDocWrite = function (adConfig, documentOverride, mainResponsiveAdsHost, adsinIframesMode) {
    mainResponsiveAdsHost = mainResponsiveAdsHost || window.RESPONSIVEADS;
    documentOverride = (documentOverride || document);

    var currentAdId = mainResponsiveAdsHost.adIds || 0;
    mainResponsiveAdsHost.configsMap = mainResponsiveAdsHost.configsMap || {};
    mainResponsiveAdsHost.adIds = currentAdId + 1;
    mainResponsiveAdsHost.configsMap[currentAdId] = adConfig;

    if (adsinIframesMode) {
        // We're already in an iframe. Write a DIV immediately. We will also need to include the ad script.
        var responsiveAdsFrameSrc = window.CondeNastScriptsPath + (
                        window.ALLOW_DEBUG
                            ? window.RESPONSIVEADS.RESPSONSIVEADS_DEBUG_PATH
                            : (window.location.href.toLowerCase().indexOf("mthe7") > 0 && window.location.href.toLowerCase().indexOf("stag") < 0)
                                ? window.RESPONSIVEADS.RESPSONSIVEADS_WS_PATH
                                : window.RESPONSIVEADS.RESPSONSIVEADS_RELEASE_PATH
                        );
        documentOverride.write('<script src="' + responsiveAdsFrameSrc + '"></script><div id="responsiveAdHolder' + currentAdId + '" style="width:100%"><script>function tryResponsiveAd() { if (!window.RESPONSIVEADSFRAME) { setTimeout(tryResponsiveAd, 250); return;}RESPONSIVEADSFRAME.initAdvert("#responsiveAdHolder' + currentAdId + '", window.parent.RESPONSIVEADS.configsMap[' + currentAdId + ']); } tryResponsiveAd();</scri' + 'pt></div>');
        (documentOverride.defaultView || documentOverride.parentWindow).cnAdFullWidth = true;
    } else {
        // We're not in an iframe. Create an iframe for the ad.
        // We also need to tell our parent container that we're a full width ad, so that any styling can be changed to accomodate it.
        // Note that cnAdFullWidthResponsive is different from cnAdFullWidth because one is intended for adverts in iframes, whereas the other is new for non-iframed ads
        documentOverride.write('<div id="responsiveAdHolder' + currentAdId + '" style="width:100%"><script>$(function () { $("#responsiveAdHolder' + currentAdId + '").closest(".cnAd").addClass("cnAdFullWidthResponsive"); RESPONSIVEADS.renderIframeIntoElement(window.parent.RESPONSIVEADS.configsMap[' + currentAdId + '], "#responsiveAdHolder' + currentAdId + '", window); })</scri' + 'pt></div>');
    }
};

// For GPT only
window.RESPONSIVEADS.renderCallbackForGpt = function (renderCallback, gptIframeWindow) {
    var gptIframe = window.RESPONSIVEADS.getContainingIframeFromElement(gptIframeWindow);
    var $gptIframe = $(gptIframe);
    var placeholderId = GptAdSlots.getPlaceholderIdForSlotWindow(gptIframeWindow);
    var $gptSlotContainer = $gptIframe.closest(GptAdSlots.AD_SLOT_CSS_SELECTOR_OUTER);
    $gptSlotContainer.addClass("cnGptResponsiveAd");

    var destinationElement;
    var putCssClassesOnGptAdSlot;

    if (placeholderId == null || (placeholderId || "").length == 0) {
        // render immediately into the $gptSlotContainer
        destinationElement = $gptSlotContainer.find(GptAdSlots.AD_SLOT_CSS_SELECTOR_INNER);
        putCssClassesOnGptAdSlot = true;
    } else {
        destinationElement = document.getElementById(placeholderId);
        $(destinationElement).attr('data-ad-placeholder-state', 'rendered');
        
        // Hide the calling ad slots, since it may be elsewhere. However, if the ad slot itself is also
        // the placeholder, don't hide the ad slot...
        if (destinationElement != $gptSlotContainer.find(GptAdSlots.AD_SLOT_CSS_SELECTOR_INNER)[0]) {
            putCssClassesOnGptAdSlot = false;
            GptAdSlots.setSlotAsHidden(gptIframeWindow);
        } else {
            putCssClassesOnGptAdSlot = true;
        }
    }

    if (putCssClassesOnGptAdSlot) {
        GptAdSlots.setSlotAsFullWidth(gptIframeWindow);
        $gptSlotContainer.addClass("cnGptResponsiveAd");
    }
    renderCallback(destinationElement);


};

window.RESPONSIVEADS.renderIframeIntoElement = function (adConfig, elementOrSelector, contextOverride) {
    (contextOverride || window).$(elementOrSelector).append(window.RESPONSIVEADS.renderIframe(adConfig));
}

window.RESPONSIVEADS.renderIframe = function (adConfig) {
    var currentAdId = window.RESPONSIVEADS.adIds || 0;
    window.RESPONSIVEADS.configsMap = window.RESPONSIVEADS.configsMap || {};
    window.RESPONSIVEADS.adIds = currentAdId + 1;
    window.RESPONSIVEADS.configsMap[currentAdId] = adConfig;

    var $frame = $("<iframe/>").
        load(function () {
            var that = this;
            setTimeout(function () {
                var frame = $(that)[0];
                var contentDocument = frame.contentDocument;
                var frameBody = frame.contentDocument.body;
                var $frameBody = $(frame.contentDocument.body);

                var createScriptElement = function (src) {
                    var script = contentDocument.createElement('script');
                    script.type = 'text/javascript';
                    script.src = src;
                    frameBody.appendChild(script);
                };
                var createScriptElementInline = function (javascript) {
                    var script = contentDocument.createElement('script');
                    script.type = 'text/javascript';
                    script.language = 'javascript';
                    if ($.browser.msie && +$.browser.version < 9) {
                        script.text = javascript;
                    } else {
                        script.innerHTML = javascript;
                    }
                    frameBody.appendChild(script);
                };

                $frameBody.css("margin", "0");
                // need to pass this adConfig data to the iframe. jQuery's .data is disappearing when read from inside the iframe
                $frameBody.
                append($('<div/>').
                    attr("id", "advert")
                );


                createScriptElement("https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js");
                var responsiveAdsFrameSrc = window.CondeNastScriptsPath + (
                        window.ALLOW_DEBUG
                            ? window.RESPONSIVEADS.RESPSONSIVEADS_DEBUG_PATH
                            : (window.location.href.toLowerCase().indexOf("mthe7") > 0 && window.location.href.toLowerCase().indexOf("stag") < 0)
                                ? window.RESPONSIVEADS.RESPSONSIVEADS_WS_PATH
                                : window.RESPONSIVEADS.RESPSONSIVEADS_RELEASE_PATH
                ); // +"?"+Math.random();
                createScriptElement(responsiveAdsFrameSrc);
                createScriptElementInline(
                'window.ALLOW_DEBUG = ' + window.ALLOW_DEBUG + ';' + // propagate our DEBUG flag to the iframe
                'function waitForObject(windowPropertyName, callback) {' +
                    'if (window[windowPropertyName]==null) { ' +
                        'setTimeout(function () { waitForObject(windowPropertyName, callback); },100);' +
                    '} else {' +
                        'callback();' +
                    '}' +
                '}' +
                'waitForObject("jQuery", ' +
                    'function () { waitForObject("RESPONSIVEADSFRAME", ' +
                        'function () { RESPONSIVEADSFRAME.initAdvert("#advert", window.parent.RESPONSIVEADS.configsMap[' + currentAdId + ']);})' +
                    '});'
            )


            }, 650);

        }
        ).
        attr("frameborder", "0").
        attr("scrolling", "no").
        addClass("responsiveAdvert").
        attr("src", ($.browser.msie && +$.browser.version < 9) ? "/blankhtml" : "about:blank");

    return $frame;
}

;
/* -----------------------------*/
// Provides support for third party ads to be resized. Third parties can call 'window.ResponsiveAdsResizing.getHeightForAdvertWidth'
// to retrieve a height that their advert should be resized to.
window.ResponsiveAdsResizing = window.ResponsiveAdsResizing || {};

window.ResponsiveAdsResizing.ADVERT_SIZES = [
    [320, 100],
    [400, 130],
    [500, 150],
    [630, 180],
    [760, 200],
    [1000, 250],
    [1200, 280],
    [1400, 300],
    [1520, 340]
];
window.ResponsiveAdsResizing.ADVERT_SIZE_MAX_HEIGHT = window.ResponsiveAdsResizing.ADVERT_SIZES[window.ResponsiveAdsResizing.ADVERT_SIZES.length - 1][1];

window.ResponsiveAdsResizing.getHeightForAdvertWidth = function (advertWidth) {
    for (var j = 0; j < window.ResponsiveAdsResizing.ADVERT_SIZES.length; j++) {
        var size = window.ResponsiveAdsResizing.ADVERT_SIZES[j];
        if (advertWidth <= size[0]) {
            return size[1];
        }
    }
    return window.ResponsiveAdsResizing.ADVERT_SIZE_MAX_HEIGHT;
}
;
/* -----------------------------*/
window.IframeResizeHost = window.IframeResizeHost || {};

window.IframeResizeHost.iframeCount = 0;

window.IframeResizeHost.initIframe = function(iframe) {
    var $iframe = $(iframe);
    var iframeId = $iframe.attr("id");

    if (iframeId == null) {
        window.IframeResizeHost.iframeCount++;
        iframeId = "iframeResizeHost" + window.IframeResizeHost.iframeCount;
        $iframe.attr("id", iframeId);
    }

    $iframe[0].contentWindow.postMessage("CondeNast_NotifyFrameId_" + iframeId, "*");
};

window[window.addEventListener ? "addEventListener" : "attachEvent"](window.addEventListener ? "message" : "onmessage", function (e) {
    var message = e.data || "";
    if (message != null && message.length >= 10 && message.substr(0, 10) == "CondeNast_") {
        message = message.substring(10);

        if (message.substr(0, 16) == "SetIframeHeight_") {
            var content = message.substring(16);
            var parts = content.split("=");
            var iframeId = parts[0];
            var newHeight = parts[1];
            $("#" + iframeId.replace(" ", "")).height(newHeight); ;
        }
    }

}, false);
;
/* -----------------------------*/
(function () {
    var $window = $(window);
    var EXPANSION_TIMEOUT = 700;
    var videoHasStarted = false;

    function log(text) {
        window.log("InreadSupport", text);
    }

    function requestAd(options) {
        // provide the option that InreadSupport is expecting to use
        options.slot = '#inreadAdPlaceholderInner';
        options.callbacks = options.callbacks || {};
        options.callbacks.ad = function () {
            notifyInreadAdEvent()
        };
        options.callbacks.finish = function () {
            notifyInreadFinishEvent()
        };

        if (options.condeNastDummyAd) {
            setTimeout(function () {
                var dummyDiv = $("<div/>").
                    append($("<img/>").
                        attr("src", "http://placekitten.com/g/800/450").
                        css("display", "block").
                        css("width", "100%")
                    );
                dummyDiv.insertAfter("#inreadAdPlaceholderInner");
                notifyInreadAdEvent();
            }, 250);
        } else {
            window._ttf = window._ttf || [];
            window._ttf.push(options);

            (function (d) {
                var js, s = d.getElementsByTagName('script')[0];
                js = d.createElement('script'); js.async = true;
                js.src = "http://cdn.teads.tv/js/all-v1.js";
                s.parentNode.insertBefore(js, s);
            })(window.document);
        }
    }

    function addVideoExpandedAndStartedCallback(eventNamespace, callback) {
        $window.on("__InreadSupport_ExpandedAndStarted." + eventNamespace, callback);
    }
    function addVideoFinishedAndCollapsedCallback(eventNamespace, callback) {
        $window.on("__InreadSupport_FinishedAndCollapsed." + eventNamespace, callback);
    }
    
    function notifyInreadAdEvent() {
        videoHasStarted = true;
        log("Video start event fired.");

        // the inread expansion is supposed to take a fixed amount of time. However, on a slow machine it may take longer. There's no 
        // true 'expanded' event, so we're stuck with polling :'(
        var $placeholder = $("#inreadAdPlaceholderOuter");
        $placeholder.addClass("videoPlaying");
        var lastSize = null;
        var pollLimit = 20;

        function pollSize() {
            var size = $placeholder.outerHeight();

            if (lastSize == size) {
                log("Expanding... size stopped changing.");
                $window.trigger("__InreadSupport_ExpandedAndStarted");
            } else {
                lastSize = size;

                pollLimit--;
                if (pollLimit > 0) {
                    setTimeout(pollSize, 200);
                } else {
                    log("Expanding... polled too many times.");
                }

            }
        }
        pollSize();
        
    }
    function notifyInreadFinishEvent() {
        log("Video finish event fired.");
        if (!videoHasStarted) {
            return;
        }

        var $placeholder = $("#inreadAdPlaceholderOuter");
        var lastSize = null;
        var pollLimit = 20;

        function pollSize() {
            var size = $placeholder.outerHeight();

            if (lastSize == size) {
                log("Collapsing... size stopped changing.");
                $placeholder.removeClass("videoPlaying");
                $window.trigger("__InreadSupport_FinishedAndCollapsed");
            } else {
                lastSize = size;

                pollLimit--;
                if (pollLimit > 0) {
                    setTimeout(pollSize, 200);
                } else {
                    log("Collapsing... polled too many times.");
                }
            }
        }
        pollSize();
    }

    window.InreadSupport = {
        //
        requestAd: requestAd,

        // callbacks we can subscribe to
        addVideoExpandedAndStartedCallback: addVideoExpandedAndStartedCallback,
        addVideoFinishedAndCollapsedCallback: addVideoFinishedAndCollapsedCallback,

        // incoming events from Inread API/Ad server script
        notifyInreadAdEvent: notifyInreadAdEvent,
        notifyInreadFinishEvent: notifyInreadFinishEvent
    };
})();;
/* -----------------------------*/
/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
;
/* -----------------------------*/
/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);;
/* -----------------------------*/
/* Modified by Neil Sankey to make work as needed 
    implemented default content from "title" attribute
    replaced hover with hoverIntent
    made positioning relative to the parent control rather than the page
    added extension to remove event
*/

/* Extend remove */
(function () {
    var ev = new $.Event('remove'),
        orig = $.fn.remove;
    $.fn.remove = function () {
        $(this).trigger(ev);
        return orig.apply(this, arguments);
    }
})();


/**
* jquery.simpletip 1.3.1. A simple tooltip plugin
* 
* Copyright (c) 2009 Craig Thompson
* http://craigsworks.com
*
* Licensed under GPLv3
* http://www.opensource.org/licenses/gpl-3.0.html
*
* Launch  : February 2009
* Version : 1.3.1
* Released: February 5, 2009 - 11:04am
*/
(function ($) {

    function Simpletip(elem, conf) {
        var self = this;
        elem = jQuery(elem);


        jQuery.extend(self,
      {
          getVersion: function () {
              return [1, 2, 0];
          },

          getParent: function () {
              return elem;
          },

          getTooltip: function () {
              return tooltip;
          },

          getPos: function () {
              return tooltip.offset();
          },

          setPos: function (posX, posY) {
              var elemPos = elem.offset();

              if (typeof posX == 'string') 
                posX = parseInt(posX) + elemPos.left;
              if (typeof posY == 'string') 
                posY = parseInt(posY) + elemPos.top;

              tooltip.css({ left: posX, top: posY });

              return self;
          },

          show: function (event) {
              conf.onBeforeShow.call(self);

              self.updatePos((conf.fixed) ? null : event);

              switch (conf.showEffect) {
                case 'fade':
                    tooltip.fadeIn(conf.showTime); break;
                case 'slide':
                    tooltip.slideDown(conf.showTime, self.updatePos); break;
                case 'custom':
                    conf.showCustom.call(tooltip, conf.showTime); break;
                default:
                case 'none':
                    tooltip.show(); break;
              };
            
              tooltip.addClass(conf.activeClass);

              conf.onShow.call(self);

              return self;
          },

          hide: function () {
              self.hideWithEffect(conf.hideEffect);
              return self;
          },
          hideWithEffect: function(hideEffect){
            conf.onBeforeHide.call(self);

              switch (hideEffect) {
                  case 'fade':
                      tooltip.fadeOut(conf.hideTime); break;
                  case 'slide':
                      tooltip.slideUp(conf.hideTime); break;
                  case 'custom':
                      conf.hideCustom.call(tooltip, conf.hideTime); break;
                  default:
                  case 'none':
                      tooltip.hide(); break;
              };

              tooltip.removeClass(conf.activeClass);

              conf.onHide.call(self);

              return self;
          },
          update: function (content) {
              self.hideWithEffect('none');
              tooltip.html(content);
              return self;
          },
          updateFromTitle: function () {
              self.update(elem.attr('title'));
              elem.data("title", elem.attr("title")).removeAttr("title");
              return self;
          },
          load: function (uri, data) {
              conf.beforeContentLoad.call(self);

              tooltip.load(uri, data, function () { conf.onContentLoad.call(self); });

              return self;
          },

          boundryCheck: function (posX, posY) {
              var newX = posX + tooltip.outerWidth();
              var newY = posY + tooltip.outerHeight();

              var windowWidth = jQuery(window).width() + jQuery(window).scrollLeft();
              var windowHeight = jQuery(window).height() + jQuery(window).scrollTop();

              return [(newX >= windowWidth), (newY >= windowHeight)];
          },

          updatePos: function (event) {
              var tooltipWidth = tooltip.outerWidth();
              var tooltipHeight = tooltip.outerHeight();

              if (!event && conf.fixed) {
                  if (conf.position.constructor == Array) {
                      posX = parseInt(conf.position[0]);
                      posY = parseInt(conf.position[1]);
                  }
                  else if (jQuery(conf.position).attr('nodeType') === 1) {
                      var offset = jQuery(conf.position).offset();
                      posX = offset.left;
                      posY = offset.top;
                  }
                  else {
                      var elemPos = elem.position();
                      var elemWidth = elem.outerWidth();
                      var elemHeight = elem.outerHeight();
                      var elemMarginLeft = parseInt(elem.css('margin-left'));
                      if(isNaN(elemMarginLeft))
                        elemMarginLeft = 0;
                      var elemMarginTop = parseInt(elem.css('margin-top'));
                      if(isNaN(elemMarginTop))
                        elemMarginTop = 0;

                      var elemPosLeft = elemPos.left + elemMarginLeft;
                      var elemPosTop = elemPos.top + elemMarginTop;

                      switch (conf.position) {
                          case 'top':
                              var posX = elemPosLeft - (tooltipWidth / 2) + (elemWidth / 2);
                              var posY = elemPosTop - tooltipHeight;
                              break;

                          case 'bottom':
                              var posX = elemPosLeft - (tooltipWidth / 2) + (elemWidth / 2);
                              var posY = elemPosTop + elemHeight;
                              break;

                          case 'left':
                              var posX = elemPosLeft - tooltipWidth;
                              var posY = elemPosTop - (tooltipHeight / 2) + (elemHeight / 2);
                              break;

                          case 'right':
                              var posX = elemPosLeft + elemWidth;
                              var posY = elemPosTop - (tooltipHeight / 2) + (elemHeight / 2);
                              break;

                          default:
                          case 'default':
                              var posX = (elemWidth / 2) + elemPosLeft + 20;
                              var posY = elemPosTop;
                              break;
                      };
                  };
              }
              else {
                  var posX = event.pageX;
                  var posY = event.pageY;
              };

              if (typeof conf.position != 'object') {
                  posX = posX + conf.offset[0];
                  posY = posY + conf.offset[1];

                  if (conf.boundryCheck) {
                      var overflow = self.boundryCheck(posX, posY);

                      if (overflow[0]) posX = posX - (tooltipWidth / 2) - (2 * conf.offset[0]);
                      if (overflow[1]) posY = posY - (tooltipHeight / 2) - (2 * conf.offset[1]);
                  }
              }
              else {
                  if (typeof conf.position[0] == "string") posX = String(posX);
                  if (typeof conf.position[1] == "string") posY = String(posY);
              };

              self.setPos(posX, posY);

              return self;
          }
      });

        var tooltip = jQuery(document.createElement('div'))
                     .addClass(conf.baseClass)
                     .addClass((conf.fixed) ? conf.fixedClass : '')
                     .addClass((conf.persistent) ? conf.persistentClass : '')
                     .addClass((conf.position) ? (conf.position) : '')
                     .addClass((conf.theme) ? (conf.theme + 'theme') : '')
                     .insertAfter(elem);

        if (conf.content.length == 0) {
            self.updateFromTitle();
        }
        else {
            self.update(conf.content);
        }
        elem.bind('remove', function () {
            tooltip.remove();
        });

        if (!conf.hidden)
            tooltip.show();
        else
            tooltip.hide();

        if (!conf.persistent) {
            elem.hoverIntent(
                function (event) { self.show(event) },
                function () { self.hide() }
             );

            if (!conf.fixed) {
                elem.mousemove(function (event) {
                    if (tooltip.css('display') !== 'none') self.updatePos(event);
                });
            };
        }
        else {
            elem.click(function (event) {
                if (event.target === elem.get(0)) {
                    if (tooltip.css('display') !== 'none')
                        self.hide();
                    else
                        self.show();
                };
            });

            jQuery(window).mousedown(function (event) {
                if (tooltip.css('display') !== 'none') {
                    var check = (conf.focus) ? jQuery(event.target).parents('.tooltip').andSelf().filter(function () { return this === tooltip.get(0) }).length : 0;
                    if (check === 0)
                        self.hide();
                };
            });
        };
    };

    jQuery.fn.simpletip = function (conf) {
        // Check if a simpletip is already present
        var api = jQuery(this).eq(typeof conf == 'number' ? conf : 0).data("simpletip");
        if (api) return api;

        // Default configuration
        var defaultConf = {
            // Basics
            content: '',
            persistent: false,
            focus: false,
            hidden: true,

            // Positioning
            position: 'default',
            offset: [0, 0],
            boundryCheck: true,
            fixed: true,

            // Effects
            showEffect: (jQuery.browser.msie ? 'none' : 'fade'), // Bug with IE not fading in the tooltip on hover.
            showTime: 150,
            showCustom: null,
            hideEffect: 'fade',
            hideTime: 150,
            hideCustom: null,

            // Selectors and classes
            baseClass: 'tooltip',
            activeClass: 'active',
            fixedClass: 'fixed',
            persistentClass: 'persistent',
            focusClass: 'focus',

            // Themes
            theme: '',

            // Callbacks
            onBeforeShow: function () { },
            onShow: function () { },
            onBeforeHide: function () { },
            onHide: function () { },
            beforeContentLoad: function () { },
            onContentLoad: function () { }
        };
        jQuery.extend(defaultConf, conf);
        
        this.each(function () {
           if (!("ontouchstart" in document.documentElement)) {
                var el = new Simpletip(jQuery(this), defaultConf);
                jQuery(this).data("simpletip", el);
            }
        });

        return this;
    };
})();
;
/* -----------------------------*/
// TODO - This is not the correct place to put this but it's vaguely global
if (typeof (window.DisplayAdverts) == "undefined") {
    window.DisplayAdverts = true;
}

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz', 'ms', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
    Object.keys = (function () {
        'use strict';
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
            dontEnums = [
              'toString',
              'toLocaleString',
              'valueOf',
              'hasOwnProperty',
              'isPrototypeOf',
              'propertyIsEnumerable',
              'constructor'
            ],
            dontEnumsLength = dontEnums.length;

        return function (obj) {
            if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                throw new TypeError('Object.keys called on non-object');
            }

            var result = [], prop, i;

            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                }
            }

            if (hasDontEnumBug) {
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i]);
                    }
                }
            }
            return result;
        };
    }());
}

// Prevent console.log undefined exception on IE
window.console = window.console || {
    log: function () { }
};

// Add a new method available on all function values
Function.prototype.getName = function () {
    // Find zero or more non-parent chars after the function start
    return /function ([^(]*)/.exec(this + "")[1];
};

var UTILITIES = window.UTILITIES || {};

UTILITIES.NullOrUndefined = function (x) {
    return typeof (x) == "undefined" || x == null;
};
UTILITIES.NullOrEmpty = function (x) {
    return x == null || x.length == 0;
};
UTILITIES.NullOrWhitespace = function (x) {
    return x == null || x.length == 0 || x.replace(/\s/gi, '').length < 1;
};

UTILITIES.isFunction = function (possibleFunction) {
    return !UTILITIES.NullOrUndefined(possibleFunction) && typeof possibleFunction === 'function';
};

UTILITIES.SilenceExceptionsOnLive = function (execute) {
    try {
        UTILITIES.callIfFunction(execute);
    } catch (err) {
        if (UTILITIES.isFunction(dalert)) {
            dalert(err);
        }
        console.log(err);
    }
};


UTILITIES.throttledRequestAnimationFrame = function (callback, throttleDelay) {
    if ($ && $.throttle) {
        throttleDelay = throttleDelay || UTILITIES.isLowPerformanceMachine ? 64 : 16;
        return $.throttle(throttleDelay, function () {
            window.requestAnimationFrame(callback);
        });
    }
    return window.requestAnimationFrame(callback);
};
UTILITIES.getInternetExplorerVersion = function () {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
};

var $utilityVars = [];
$utilityVars['getInternetExplorerVersion'] = UTILITIES.getInternetExplorerVersion();

UTILITIES.isTouchDevice = 'ontouchstart' in document.documentElement;
UTILITIES.isIE8 = $utilityVars['getInternetExplorerVersion'] === 8;
UTILITIES.isIE9 = $utilityVars['getInternetExplorerVersion'] === 9;
UTILITIES.isIE10 = $utilityVars['getInternetExplorerVersion'] === 10;
UTILITIES.isIE = $utilityVars['getInternetExplorerVersion'] > 0;
UTILITIES.isIPad = /iPad/.test(navigator.userAgent);
UTILITIES.isIPhone = /iPhone/.test(navigator.userAgent);
UTILITIES.isKindleFire = /(((Kindle Fire|KF).*Build\/)|Android).*(Silk\/.*Silk-Accelerated)/.test(navigator.userAgent);
UTILITIES.isIOs = UTILITIES.isIPhone || UTILITIES.isIPad;
UTILITIES.isAndroid = /Android/.test(navigator.userAgent) && !UTILITIES.isKindleFire; //excludes kindle fire
UTILITIES.isMacSafari = /Safari/.test(navigator.userAgent) && /Macintosh/.test(navigator.userAgent) && !(/Chrome/.test(navigator.userAgent));
UTILITIES.isMacChrome = /Macintosh/.test(navigator.userAgent) && (/Chrome/.test(navigator.userAgent));
UTILITIES.isMac = /Macintosh/.test(navigator.userAgent);
UTILITIES.hasSlowJavascript = UTILITIES.isTouchDevice || UTILITIES.isIE8;  // This is a VERY rough estimate. Please update with more data
UTILITIES.isLowPerformanceMachine = UTILITIES.isTouchDevice || screen.width <= 1024 || UTILITIES.isIE8;  // This is a VERY rough estimate. Please update with more data

// Referencing a cached selector is about 20x-30x faster for window/document and 100x-150x faster for 'body'
UTILITIES.getWindow = function () { return $utilityVars['window'] != null && $utilityVars['window'].length > 0 ? $utilityVars['window'] : ($utilityVars['window'] = $(window)); };
UTILITIES.getDocument = function () { return $utilityVars['document'] != null && $utilityVars['document'].length > 0 ? $utilityVars['document'] : ($utilityVars['document'] = $(document)); };
UTILITIES.getBody = function () { return $utilityVars['body'] != null && $utilityVars['body'].length > 0 ? $utilityVars['body'] : ($utilityVars['body'] = $('body')); };
UTILITIES.getHtml = function () { return $utilityVars['html'] != null && $utilityVars['html'].length > 0 ? $utilityVars['html'] : ($utilityVars['html'] = $('html')); };
UTILITIES.getHtmlAndBody = function () { return $utilityVars['htmlAndBody'] != null && $utilityVars['htmlAndBody'].length > 0 ? $utilityVars['htmlAndBody'] : ($utilityVars['htmlAndBody'] = $('html, body')); };
UTILITIES.getHeader = function () { return $utilityVars['header'] != null && $utilityVars['header'].length > 0 ? $utilityVars['header'] : ($utilityVars['header'] = $('header')); };
UTILITIES.getFooter = function () { return $utilityVars['footer'] != null && $utilityVars['footer'].length > 0 ? $utilityVars['footer'] : ($utilityVars['footer'] = $('footer')); };
UTILITIES.getAspNetForm = function () { return $utilityVars['aspNetForm'] != null && $utilityVars['aspNetForm'].length > 0 ? $utilityVars['aspNetForm'] : ($utilityVars['aspNetForm'] = $('form#aspnetForm')); };

UTILITIES.getNewDiv = function () {
    return $utilityVars['div'] != null ? $utilityVars['div'] : ($utilityVars['div'] = $('<div/>'));
};

var $utilitySizeDependantVars = [];
UTILITIES.getCachedWindowActualWidth = function () { return $utilitySizeDependantVars['getCachedWindowActualWidth'] != null && $utilitySizeDependantVars['getCachedWindowActualWidth'] != 0 ? $utilitySizeDependantVars['getCachedWindowActualWidth'] : ($utilitySizeDependantVars['getCachedWindowActualWidth'] = UTILITIES.windowActualWidth()); };
UTILITIES.getCachedWindowActualHeight = function () { return $utilitySizeDependantVars['getCachedWindowActualHeight'] != null && $utilitySizeDependantVars['getCachedWindowActualHeight'] != 0 ? $utilitySizeDependantVars['getCachedWindowActualHeight'] : ($utilitySizeDependantVars['getCachedWindowActualHeight'] = UTILITIES.windowActualHeight()); };

UTILITIES.getCachedWindowWidth = function () { return $utilitySizeDependantVars['getCachedWindowWidth'] != null && $utilitySizeDependantVars['getCachedWindowWidth'] != 0 ? $utilitySizeDependantVars['getCachedWindowWidth'] : ($utilitySizeDependantVars['getCachedWindowWidth'] = UTILITIES.getWindow().width()); };
UTILITIES.getCachedWindowHeight = function () { return $utilitySizeDependantVars['getCachedWindowHeight'] != null && $utilitySizeDependantVars['getCachedWindowHeight'] != 0 ? $utilitySizeDependantVars['getCachedWindowHeight'] : ($utilitySizeDependantVars['getCachedWindowHeight'] = UTILITIES.getWindow().height()); };

$(function() {
    if (UTILITIES.isIE10) {
        UTILITIES.getHtml().addClass('.ie10');
    }
    if (UTILITIES.browserSupportFeature('position', 'sticky')) {
        UTILITIES.getHtml().addClass('positionStickySupport');
    } else {
        UTILITIES.getHtml().addClass('noPositionStickySupport');
    }

    UTILITIES.getWindow().off('resize.shared-utilities').on('resize.shared-utilities', function () {
        $utilitySizeDependantVars = [];
    });
});

UTILITIES.browserSupportFeature = function (property, value, noPrefixes) {
    var prop = property + ':',
        el = document.createElement('div'),
        elStyle = el.style;

    if (!noPrefixes) {
        elStyle.cssText = prop + ['-webkit-', '-moz-', '-ms-', '-o-', ''].join(value + ';' + prop) + value + ';';
    } else {
        elStyle.cssText = prop + value;
    }
    return elStyle[property];
};

UTILITIES.getCachedSelect = function (cacheArray, key, func) {
    return cacheArray[key] != null && cacheArray[key].length > 0 ? cacheArray[key] : (cacheArray[key] = func());
};

UTILITIES.callIfFunction = function (possibleFunction) {
    if (UTILITIES.isFunction(possibleFunction)) {
        var args = Array.prototype.slice.call(arguments).splice(1, 256); // second argument required for this to work in IE8 :-/
        return possibleFunction.apply(this, args);
    } else {
        return null;
    }
};

UTILITIES.executeFunctionByName = function (functionName, context) {
    var args = Array.prototype.slice.call(arguments).splice(2, 256); // second argument required for this to work in IE8 :-/
    var namespaces = functionName.split('.');
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
};

UTILITIES.htmlDecode = function (value) {
    return UTILITIES.getNewDiv().html(value).text();
};
UTILITIES.htmlEncode = function (value) {
    return UTILITIES.getNewDiv().text(value).html();
};

UTILITIES.getValueFromFunctionOrProperty = function (possibleFunction) {
    if (UTILITIES.isFunction(possibleFunction))
        return possibleFunction();

    return possibleFunction;
};

UTILITIES.isInt = function (x) {
    var y = parseInt(x);
    return !isNaN(y) && x === y && x.toString() === y.toString();
};

UTILITIES.iterateDictionary = function(dictionary, callback) {
    if (dictionary == null || !UTILITIES.isFunction(callback))
        return;
    var keys = Object.keys(dictionary);
    for (var i = 0; i < keys.length; i++) {
        callback(keys[i], dictionary[keys[i]]);
    }
};

UTILITIES.getCacheBustUrl = function (url) {
    var cacheBustUrl = '';
    if (url && url.length) {
        var cacheBustUrlKvp = Math.random() + '=' + Math.random();
        if (url.indexOf('?') !== -1) {
            // URL already has a querystring
            cacheBustUrl = url.replace(/\?/, '?' + cacheBustUrlKvp + '&');
        } else if (url.indexOf('#') !== -1) {
            // URL has anchor in it, querystring must be before that
            cacheBustUrl = url.replace(/#/, '?' + cacheBustUrlKvp + '#');
        } else {
            // URL does not have an anchor or a querystring.
            cacheBustUrl = url + '?' + cacheBustUrlKvp;
        }
    }
    return cacheBustUrl;
};
UTILITIES.dateToSortableString = function (date) {
    var output = '';
    if (typeof date === 'object' && typeof date.getDay === 'function') {
        var month = date.getMonth() + 1;  //Months are zero based
        output = date.getFullYear() + '-' + (month < 10 ? '0' : '') + month + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate() + 'T' + (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
    }
    return output;

};
UTILITIES.getDayOfWeek = function (date, shortened) {
    var dayOfWeek = null;
    if (typeof date === 'object' && typeof date.getDay === 'function') {
        var weekday = new Array(7);
        if (shortened === true) {
            weekday[0] = 'Sun';
            weekday[1] = 'Mon';
            weekday[2] = 'Tue';
            weekday[3] = 'Wed';
            weekday[4] = 'Thu';
            weekday[5] = 'Fri';
            weekday[6] = 'Sat';
        } else {
            weekday[0] = 'Sunday';
            weekday[1] = 'Monday';
            weekday[2] = 'Tuesday';
            weekday[3] = 'Wednesday';
            weekday[4] = 'Thursday';
            weekday[5] = 'Friday';
            weekday[6] = 'Saturday';
        }
        dayOfWeek = weekday[date.getDay()];
    }
    return dayOfWeek;
};
UTILITIES.getNumberSuffix = function (number) {
    number = String(number);
    return number.substr(-(Math.min(number.length, 2))) > 3 && number.substr(-(Math.min(number.length, 2))) < 21 ? "th" : ["th", "st", "nd", "rd", "th"][Math.min(Number(number) % 10, 4)];
};
UTILITIES.getMonthName = function (date) {
    var monthName = '';
    if (typeof date === 'object' && typeof date.getMonth === 'function') {
        var month = new Array();
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        monthName = month[date.getMonth()];
    }
    return monthName;
};
UTILITIES.getMonthNameShort = function (date) {
    var monthName = '';
    if (typeof date === 'object' && typeof date.getMonth === 'function') {
        var month = new Array();
        month[0] = 'Jan';
        month[1] = 'Feb';
        month[2] = 'Mar';
        month[3] = 'Apr';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'Aug';
        month[8] = 'Sept';
        month[9] = 'Oct';
        month[10] = 'Nov';
        month[11] = 'Dec';
        monthName = month[date.getMonth()];
    }
    return monthName;
};
UTILITIES.getDateNumberWithSup = function (date) {
    return date.getDate() + '<sup>' + UTILITIES.getNumberSuffix(date.getDate()) + '</sup>';
};
UTILITIES.getTimeOfDay = function (date) {
    var timeOfDay = '';
    if (typeof date === 'object' && typeof date.getTime === 'function' && typeof date.getMinutes === 'function') {
        timeOfDay = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    }
    return timeOfDay;
};
UTILITIES.getQueryStringParameterByName = function (name, context, queryString, caseInsensitive) {
    context = context || window;
    queryString = queryString || context.location.search;
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var regexS = '[\\?#&]' + name + '=([^&#]*)';
    var regex = new RegExp(regexS, caseInsensitive ? "i" : "");
    var results = regex.exec(queryString);
    if (results == null) {
        return '';
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
};

$utilityVars['getDevicePixelRatio'] = !UTILITIES.NullOrUndefined(window.devicePixelRatio) ? window.devicePixelRatio : 1;
try {
    if (UTILITIES.isIPhone)
        $utilityVars['getDevicePixelRatio'] = 1; // reduce DPR for known mobiles, as it slows down the page

    if ($utilityVars['getDevicePixelRatio'] > 1 && window.performance && window.performance.timing) {
        var responseTime = window.performance.timing.responseStart - window.performance.timing.requestStart;
        if (responseTime > 400) {
            $utilityVars['getDevicePixelRatio'] = 1; // reduce DPR for slow connections
        }
    }
    if ($utilityVars['getDevicePixelRatio'] > 2) {
        $utilityVars['getDevicePixelRatio'] = 2;  // reduce crazy huge img requests for super high DPR. e.g. Nexus 5 has DPR = 3
    }
} catch (e) {
}
$(function () {
    if (UTILITIES.getDevicePixelRatio() > 1 && UTILITIES.getBody().hasClass('isMobile')) {
        $utilityVars['getDevicePixelRatio'] = 1;  // reduce DPR for known mobiles, as it slows down the page
    }
});

UTILITIES.getDevicePixelRatio = function () { return $utilityVars['getDevicePixelRatio']; };


UTILITIES.dateToString = function (datetime, format) {
    var formattedDate = '';
    switch (format) {
        case 'h.mmTT':
            var hours = datetime.getHours();
            var minutes = datetime.getMinutes();
            formattedDate = (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours)) + '.' + (minutes < 10 ? '0' : '') + minutes + (hours >= 12 ? 'P' : 'A') + 'M';
            break;
        case 'timespan1':

            break;
    }
    return formattedDate;
};
UTILITIES.parseJsonDate = function (input) {
    return new Date(parseInt(input.replace('/Date(', '').replace(')/', ''), 10));
};
UTILITIES.windowActualHeight = function () {
    if (window.innerHeight != null)
        return Math.max(UTILITIES.getWindow().height(), window.innerHeight);
    else
        return UTILITIES.getWindow().height();
};
UTILITIES.windowActualWidth = function () {
    if(window.innerWidth != null)
        return Math.max(UTILITIES.getWindow().width(), window.innerWidth);
    else
        return UTILITIES.getWindow().width();
};
UTILITIES.getClassesStartingWith = function($el, classStartsWith) {
    var matchedClasses = [];
    var classes = $el.attr('class').split(' ');
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].indexOf(classStartsWith) == 0) {
            matchedClasses.push(classes[i]);
        }
    }
    return matchedClasses;
};
UTILITIES.getClassesEndingWith = function ($el, classEndsWith) {
    var matchedClasses = [];
    var classes = $el.attr('class').split(' ');
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].indexOf(classEndsWith) == classes[i].length - classEndsWith.length) {
            matchedClasses.push(classes[i]);
        }
    }
    return matchedClasses;
};

UTILITIES.getGreatestWidth = function ($els) {
    var greatest = 0; // Stores the greatest

    $els.each(function () { // Select the elements you're comparing
        var thisSize = $(this).width(); // Grab the current size

        if (thisSize > greatest) { // If theWidth > the greatest so far,
            greatest = thisSize; //    set greatest to thisSize
        }
    });
    return greatest;
};

UTILITIES.setEqualWidth = function ($els, reset) {
    if (reset)
        $els.height('auto');

    $els.width(UTILITIES.getGreatestWidth($els)); // Update the elements you were comparing
};
UTILITIES.setEqualHeight = function ($els, reset) {
    var greatest = 0; // Stores the greatest

    if (reset)
        $els.height('');
    
    $els.each(function () { // Select the elements you're comparing
        var thisSize = $(this).height(); // Grab the current size

        if (thisSize > greatest) { // If thisSize > the greatest so far,
            greatest = thisSize; //    set greatest to thisSize
        }
    });

    $els.height(greatest); // Update the elements you were comparing
};

UTILITIES.getSiblingHorizontalSpace = function($el) {
    var space = 0;
    $el.siblings(':visible').each(function () {
        space += $(this).outerWidth(true);
    });
    return space;
};
UTILITIES.getSiblingVerticalSpace = function ($el) {
    var space = 0;
    $el.siblings(':visible').each(function () {
        space += $(this).outerHeight(true);
    });
    return space;
};

/* 
* Returns the Greatest Common Divisor of the given integers. Each input must be non-negative.
*/
UTILITIES.GCD = function(x, y) {
    while (y != 0) {
        var z = x % y;
        x = y;
        y = z;
    }
    return x;
};

/* 
* Returns the Lowest Common Multiple of the given integers. Each input must be non-negative.
*/
UTILITIES.LCM = function (x, y) {
    return (x / GCD(x, y) * y);
};

UTILITIES.LCMRange = function (x, y) {
    if (x + 1< y) {
        return UTILITIES.LCM(x, UTILITIES.LCMRange(x+1, y));
    } else {
        return UTILITIES.LCM(x, y);
    }
};

UTILITIES.InstanceCountInArray = function(array, item) {
    var instanceCount = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === item) {
            instanceCount++;
        }
    }
    return instanceCount;
};


UTILITIES.setTransform = function ($el, value) {
    var cssPropertyName = UTILITIES.getTransformCssPropertyName();
    if (cssPropertyName) {
        $el.css(cssPropertyName, value);
    }
};

UTILITIES.setTransition = function ($el, value) {
    var cssPropertyName = UTILITIES.getTransitionCssPropertyName();
    if (cssPropertyName) {
        $el.css(cssPropertyName, value);
    }
};

UTILITIES.setTransitionDuration = function ($el, duration) {
    var cssTransitionPropertyName = UTILITIES.getTransitionCssPropertyName();
    if (cssTransitionPropertyName) {
        var durationValue = '';
        if (duration != null && duration.toString().length > 0) {
            durationValue = duration.toString();
            if (!durationValue.endsWith('s'))
                durationValue += 'ms';
        }
        $el.css(cssTransitionPropertyName + "-duration", durationValue);
    }
};

// Returns Filter with fallback of Children with fallback of Find
UTILITIES.FilterChildrenFind = function ($els, selector) {
    var $selected = $els.filter(selector);
    if ($selected.length == 0)
        $selected = $els.children(selector);
    if ($selected.length == 0)
        $selected = $els.find(selector);
    return $selected;
};

String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

String.prototype.wordCount = function () {
    var trimValue = this.trim();
    if (trimValue.length == 0)
        return 0;
    return trimValue.split(' ').length;
};

UTILITIES.getTransitionCssPropertyName = function () {
    
    if (UTILITIES.getTransitionCssPropertyName_cached)
        return UTILITIES.getTransitionCssPropertyName_cached;

    UTILITIES.getTransitionEndEventName(); // force a cache of the values
    return UTILITIES.getTransitionCssPropertyName_cached;
};
UTILITIES.getTransitionEndEventName = function () {
    if (UTILITIES.getTransitionEndEventName_cached)
        return UTILITIES.getTransitionEndEventName_cached;
    // adapted from here: http://stackoverflow.com/questions/5023514/how-do-i-normalize-css3-transition-functions-across-browsers
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        'transition': {endEvent:'transitionend', cssProperty:"transition"},
        'OTransition': {endEvent:'oTransitionEnd', cssProperty:"-o-transition"},
        'MozTransition': { endEvent: 'transitionend', cssProperty: "-moz-transition" },
        'WebkitTransition': { endEvent: 'webkitTransitionEnd', cssProperty: "-webkit-transition" }
    };

    for (t in transitions) {
        if (el.style[t] !== undefined) {
            UTILITIES.getTransitionEndEventName_cached = transitions[t].endEvent;
            UTILITIES.getTransitionCssPropertyName_cached = transitions[t].cssProperty;
            break;
        }
    }
    return UTILITIES.getTransitionEndEventName_cached;
};
UTILITIES.getAnimationEndEventName = function () {
    if (UTILITIES.getAnimationEndEventName_cached) return UTILITIES.getAnimationEndEventName_cached;
    // adapted from getTransitionEndEventName
    var t;
    var el = document.createElement('fakeelement');
    var animations = {
// these names have been guessed, because I can't find any documentation of their existance
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    };
    for (t in animations) {
        if (el.style[t] !== undefined) {
            UTILITIES.getAnimationEndEventName_cached = animations[t];
            break;
        }
    }
    return UTILITIES.getAnimationEndEventName_cached;
};

UTILITIES.getTransformCssPropertyName = function () {
    if (UTILITIES.getTransformCssPropertyName_cached) return UTILITIES.getTransformCssPropertyName_cached;
    // adapted from getTransitionEndEventName
    var t;
    var el = document.createElement('fakeelement');
    var transforms = {
        // these names have been guessed, because I can't find any documentation of their existance
        'transform': 'transform',
        'OTransform': '-o-transform',
        'MozTransform': '-moz-transform',
        'WebkitTransform': '-webkit-transform'
    };
    for (t in transforms) {
        if (el.style[t] !== undefined) {
            UTILITIES.getTransformCssPropertyName_cached = transforms[t];
            break;
        }
    }
    return UTILITIES.getTransformCssPropertyName_cached;
};



UTILITIES.tempShowDisplayNoneAncestors = function ($el, callback) {
    var hiddenAncestors = [];
    if (!($el instanceof jQuery))
        $el = $($el);
    var $ancestor = $el;
    
    while (!$el.is(':visible') && $ancestor.length != 0 && $ancestor.get(0).nodeName.toLowerCase() != 'body') {
        if ($ancestor.css('display') === 'none') {
            $ancestor.data('initialstyles', $ancestor.attr('style') || '');
            // Make hidden ancestor temporarily occupy space, but remain unseen
            $ancestor.css({
                position: 'absolute',
                visibility: 'hidden',
                display: 'block'
            });
            hiddenAncestors.push($ancestor);
        }
        $ancestor = $ancestor.parent();
    }

    if (callback) {
        callback();
    }

    for (var i = 0; i < hiddenAncestors.length; i++) {
        var $this = hiddenAncestors[i];
        $this.attr('style', $this.data('initialstyles'));
    }
};

UTILITIES.imgFillContainer = function ($imgs, options) {
    if (UTILITIES.getBody().children('style.imgFillContainer').length == 0)
        UTILITIES.getBody().append('<style class="imgFillContainer">img[data-overflow]{min-height:100%;min-width:100%;} img[data-overflow="y"] {width:100%;height:auto;} img[data-overflow="x"] {height:100%;width:auto;})</style>');

    var defaults = {
        centreHorizontally: true,
        centreVertically: false,
        imgContainerWidth: null,
        imgContainerHeight: null
    };
    
    options = $.extend({}, defaults, options || {});

    if (!($imgs instanceof jQuery))
        $imgs = $($imgs);

    $imgs.each(function() {
        var $img = $(this);
        var $imgContainer = $img.parent();
        $img.css({
            'max-height': 'auto',
            'max-width': 'auto'
        }).attr('data-overflow', 'none');
        var imgAspectRatio = 1;
        if ($img.data('aspectratio')) {
            imgAspectRatio = parseFloat($img.data('aspectratio'));
        } else if (this.complete && $img.height() > 0) {
            imgAspectRatio = $img.width() / $img.height();
        } else {
            $img.imagesLoaded(function () {
                UTILITIES.tempShowDisplayNoneAncestors($img, function () {
                    UTILITIES.imgFillContainer($img, options);
                });
            });
            return;
        }
        
        var imgContainerWidth = options.imgContainerWidth || $imgContainer.width();
        var imgContainerHeight = options.imgContainerHeight || $imgContainer.height();
        var imgContainerAspectRatio = imgContainerWidth / imgContainerHeight;
        if (imgAspectRatio > imgContainerAspectRatio) {
            $img.attr('data-overflow', 'x');
            $img.css('margin-top', '');
            
            if (options.centreHorizontally) {
                var offsetX = Math.floor((imgContainerHeight * imgAspectRatio - imgContainerWidth) / -2);
                if (offsetX < -2)  // handles discrepancies from aspectRatio and actual img width/height
                    $img.css('margin-left', offsetX);
                else
                    $img.css('margin-left', '');
            }

        } else {
            $img.attr('data-overflow', 'y');
            $img.css('margin-left', '');
            if (options.centreVertically) {
                var offsetY = Math.floor((imgContainerWidth / imgAspectRatio - imgContainerHeight) / -2);
                if (offsetY < -2)  // handles discrepancies from aspectRatio and actual img width/height
                    $img.css('margin-top', offsetY);
                else
                    $img.css('margin-top', '');
            }
        }
        if (!UTILITIES.NullOrUndefined(ResponsiveImgSrc)) {
            ResponsiveImgSrc.Process(this);
        }
    });
};

// returns the current URL
UTILITIES.getCurrentAbsoluteUrl = function () {
    return document.location.pathname + document.location.search + document.location.hash;
};
// add a script to the current page
UTILITIES.addScriptToPage = function (id, url) {
    if (document.getElementById(id)) return;
    var js, tagName = 'script', fjs = document.getElementsByTagName(tagName)[0];
    js = document.createElement(tagName);
    js.id = id;
    js.src = url;
    fjs.parentNode.insertBefore(js, fjs);
};
// add a stylesheet to the current page
UTILITIES.addStyleSheetToPage = function(id, url) {
    if (document.getElementById(id)) return;
    var css, tagName = 'link', fcss = document.getElementsByTagName(tagName)[0];
    css = document.createElement(tagName);
    css.id = id;
    css.href = url;
    css.rel = 'Stylesheet';
    fcss.parentNode.insertBefore(css, fcss);
};
// Returns the stack trace at the current point in time. Only for debugging purposes. You may wish to use UTILITIES.getStackTrace().join('\n\n');
// Adapted from http://www.eriwen.com/javascript/js-stack-trace/
UTILITIES.getStackTrace = function () {
    var callstack = [];
    var isCallstackPopulated = false;
    
    try {
        i.dont.exist+=0; //doesn't exist- that's the point
    } catch(e) {
        if (e.stack) { //Firefox
            var lines = e.stack.split('\n');
            for (var i=0, len=lines.length; i<len; i++) {
                callstack.push(lines[i]);
            }
            //Remove call to printStackTrace()
            callstack.shift();
            isCallstackPopulated = true;
        }
        else if (window.opera && e.message) { //Opera
            var lines = e.message.split('\n');
            for (var i=0, len=lines.length; i<len; i++) {
                if (lines[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
                    var entry = lines[i];
                    //Append next line also since it has the file info
                    if (lines[i+1]) {
                        entry += ' at ' + lines[i+1];
                        i++;
                    }
                    callstack.push(entry);
                }
            }
            //Remove call to printStackTrace()
            callstack.shift();
            isCallstackPopulated = true;
        }
    }
    if (!isCallstackPopulated) { //IE and Safari
        var currentFunction = arguments.callee.caller;
        while (currentFunction) {
        var fn = currentFunction.toString();
        var fname = fn.substring(fn.indexOf("function") + 8, fn.indexOf('')) || 'anonymous';
            callstack.push(fname);
            currentFunction = currentFunction.caller;
        }
    }
    return callstack;
};

// Polls the global scope to see if a named object is present. successCallback may be called IMMEDIATELY if it is present when this method is called.
// failureCallback is optional.
function waitForGlobalObject(globalObjectName, successCallback, checkingInterval, checkingLimit, failureCallback) {
    if (UTILITIES.NullOrUndefined(checkingInterval)) {
        checkingInterval = 100;
    }
    if (UTILITIES.NullOrUndefined(checkingLimit)) {
        checkingLimit = 50;
    }

    if (window[globalObjectName]) {
        successCallback();
    } else if (checkingLimit == 1 && failureCallback) {
        failureCallback();
    }else {
        setTimeout(function () {
            waitForGlobalObject(globalObjectName, successCallback, checkingInterval, checkingLimit - 1, failureCallback);
        }, checkingInterval);
    }
}

var utilitiesTimeout = [];
UTILITIES.debounce = function (func, wait) {
    var functionName = func.getName();
    wait = wait || 250;
    if (utilitiesTimeout[functionName]) {
        clearTimeout(utilitiesTimeout[functionName]);
    }
    utilitiesTimeout[functionName] = setTimeout(func, wait);
};

// OBSOLETE: Do not use
UTILITIES.getMasterAdvertProperties_KeyValues = function () {
    if (UTILITIES.NullOrEmpty(window.MasterAdvertProperties_KeyValues) && window.parent != null && window.parent != window && window.parent.UTILITIES)
        return window.parent.UTILITIES.getMasterAdvertProperties_KeyValues();
    
    return window.MasterAdvertProperties_KeyValues;
};

(function () {
    var isZooming;
    // see https://trello.com/c/Cq5xFKXz/99-adverts-on-vogue-don-t-appear-correctly-when-zoomed
    UTILITIES.isBrowserZoomAffectingIframes = function () {
        if (isZooming == null) {
            var $iframe = $("<iframe/>").css({
                "width": "970px"
            }).prependTo("body");
            isZooming = $iframe.outerWidth() != 970;
            $iframe.remove();
        }
        return isZooming;
    };
})();

// Adds support for array.indexOf for browsers that dont support it (e.g. IE8)
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elem, startFrom) {
        startFrom = startFrom || 0;
        if (startFrom > this.length)
            return -1;

        for (var i = 0; i < this.length; i++) {
            if (this[i] == elem && startFrom <= i) {
                return i;
            } else if (this[i] == elem && startFrom > i) {
                return -1;
            }
        }
        return -1;
    };
}

UTILITIES.stripHtml = function(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText;
};

UTILITIES.removeDiacritics = function (text) {
    // Non-exhaustive list of accented characters. Add more as required.
    // NOTE: This was originally implemented to remove accents from elements that had been CSS'd to text-transform:uppercase. Therefore
    // the requirement at the time was to strip all accents. A future improvement to this may be to remove either or both upper/lowercase
    // accents

    /* WARNING: Part of our build process messes up these accents, so they must be encoded
        This Javascript can encode them for you:
        "<paste stuff here>".replace(/./g, function (a,b,c,d,e,f) { return a.charCodeAt(0)>128 ? "\\u00"+a.charCodeAt(0).toString(16) : a })

        replace(/[àáâãäå]/g, "a").
        replace(/[ÀÁÂÃÄÅ]/g, "A").

        replace(/[èéêë]/g, "e").
        replace(/[ÈÉÊË]/g, "E").

        replace(/[ìíîï]/g, "i").
        replace(/[ÌÍÎÏ]/g, "I").

        replace(/[ñ]/g, "n").
        replace(/[Ñ]/g, "N").

        replace(/[òóôõö]/g, "o").
        replace(/[ÒÓÔÕÖ]/g, "O").

        replace(/[ùúûü]/g, "u").
        replace(/[ÙÚÛÜ]/g, "U");
    */


    return text.
        replace(/[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]/g, "a").
        replace(/[\u00c0\u00c1\u00c2\u00c3\u00c4\u00c5]/g, "A").
        replace(/[\u00e8\u00e9\u00ea\u00eb]/g, "e").
        replace(/[\u00c8\u00c9\u00ca\u00cb]/g, "E").
        replace(/[\u00ec\u00ed\u00ee\u00ef]/g, "i").
        replace(/[\u00cc\u00cd\u00ce\u00cf]/g, "I").
        replace(/[\u00f1]/g, "n").
        replace(/[\u00d1]/g, "N").
        replace(/[\u00f2\u00f3\u00f4\u00f5\u00f6]/g, "o").
        replace(/[\u00d2\u00d3\u00d4\u00d5\u00d6]/g, "O").
        replace(/[\u00f9\u00fa\u00fb\u00fc]/g, "u").
        replace(/[\u00d9\u00da\u00db\u00dc]/g, "U");
        
};

// IE8 support
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

(function () {
    // adds a promotion to the list of cards, and notifies any listeners. The owner window (i.e promotion might be in an iframe) should be provided.
    function updateSubscriptionPanel(json, options) {
        if (json == null || json.length == 0)
            return;

        options = options || {};

        var subscribePanelSelector = options.subscribePanelSelector || '.subscribe-header-panel';
        var imageContainerSelector = options.imageContainerSelector || '.image-container';
        var secondaryImageContainerSelector = options.secondaryImageContainerSelector || '.secondary-image-container';
        var subscribeMessageSelector = options.subscribeMessageSelector || '.subscribe-message';
        var subscribeLinkSelector = options.subscribeLinkSelector || '.subscribe-link';
        
        var $subscribePanel = $(subscribePanelSelector);
        
        if (json.ImageUrl != null && json.ImageUrl.length > 0) {
            $subscribePanel.find(imageContainerSelector + ' img').on('load.updateSubscriptionPanel', function () { $(this).parent().css('visibility', ''); }).attr('src', json.ImageUrl).parent().css('visibility', 'hidden');
        } else {
            $subscribePanel.find(imageContainerSelector).remove();
        }
        if (json.DigitalImageUrl != null || json.DigitalImageUrl.length > 0) {
            $subscribePanel.find(secondaryImageContainerSelector + ' img').on('load.updateSubscriptionPanel', function () { $(this).parent().css('visibility', ''); }).attr('src', json.DigitalImageUrl).parent().css('visibility', 'hidden');
        } else {
            $subscribePanel.find(secondaryImageContainerSelector).remove();
        }
        
        if (json.SubscriptionMessage != null && json.SubscriptionMessage.length > 0) {
            $subscribePanel.find(subscribeMessageSelector).text(json.SubscriptionMessage);
        } else {
            $subscribePanel.find(subscribeMessageSelector).remove();
        }

        if (json.LinkUrl != null && json.LinkUrl.length > 0) {
            $subscribePanel.find(subscribeLinkSelector).attr('href', json.LinkUrl);
        }

        $subscribePanel.css('visibility', 'visible');
    }

    // public interface
    window.AdServer = {
        updateSubscriptionPanel: updateSubscriptionPanel
    };
})();;
/* -----------------------------*/
/**
* @version: 1.0 Alpha-1
* @author: Coolite Inc. http://www.coolite.com/
* @date: 2008-04-13
* @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
* @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
* @website: http://www.datejs.com/
*/

/* 
* TimeSpan(milliseconds);
* TimeSpan(days, hours, minutes, seconds);
* TimeSpan(days, hours, minutes, seconds, milliseconds);
*/
var TimeSpan = function (days, hours, minutes, seconds, milliseconds) {
    var attrs = "days hours minutes seconds milliseconds".split(/\s+/);

    var gFn = function (attr) {
        return function () {
            return this[attr];
        };
    };

    var sFn = function (attr) {
        return function (val) {
            this[attr] = val;
            return this;
        };
    };

    for (var i = 0; i < attrs.length; i++) {
        var $a = attrs[i], $b = $a.slice(0, 1).toUpperCase() + $a.slice(1);
        TimeSpan.prototype[$a] = 0;
        TimeSpan.prototype["get" + $b] = gFn($a);
        TimeSpan.prototype["set" + $b] = sFn($a);
    }

    if (arguments.length == 4) {
        this.setDays(days);
        this.setHours(hours);
        this.setMinutes(minutes);
        this.setSeconds(seconds);
    } else if (arguments.length == 5) {
        this.setDays(days);
        this.setHours(hours);
        this.setMinutes(minutes);
        this.setSeconds(seconds);
        this.setMilliseconds(milliseconds);
    } else if (arguments.length == 1 && typeof days == "number") {
        var orient = (days < 0) ? -1 : +1;
        this.setMilliseconds(Math.abs(days));

        this.setDays(Math.floor(this.getMilliseconds() / 86400000) * orient);
        this.setMilliseconds(this.getMilliseconds() % 86400000);

        this.setHours(Math.floor(this.getMilliseconds() / 3600000) * orient);
        this.setMilliseconds(this.getMilliseconds() % 3600000);

        this.setMinutes(Math.floor(this.getMilliseconds() / 60000) * orient);
        this.setMilliseconds(this.getMilliseconds() % 60000);

        this.setSeconds(Math.floor(this.getMilliseconds() / 1000) * orient);
        this.setMilliseconds(this.getMilliseconds() % 1000);

        this.setMilliseconds(this.getMilliseconds() * orient);
    }

    this.getTotalMilliseconds = function () {
        return (this.getDays() * 86400000) + (this.getHours() * 3600000) + (this.getMinutes() * 60000) + (this.getSeconds() * 1000);
    };

    this.compareTo = function (time) {
        var t1 = new Date(1970, 1, 1, this.getHours(), this.getMinutes(), this.getSeconds()), t2;
        if (time === null) {
            t2 = new Date(1970, 1, 1, 0, 0, 0);
        }
        else {
            t2 = new Date(1970, 1, 1, time.getHours(), time.getMinutes(), time.getSeconds());
        }
        return (t1 < t2) ? -1 : (t1 > t2) ? 1 : 0;
    };

    this.equals = function (time) {
        return (this.compareTo(time) === 0);
    };

    this.add = function (time) {
        return (time === null) ? this : this.addSeconds(time.getTotalMilliseconds() / 1000);
    };

    this.subtract = function (time) {
        return (time === null) ? this : this.addSeconds(-time.getTotalMilliseconds() / 1000);
    };

    this.addDays = function (n) {
        return new TimeSpan(this.getTotalMilliseconds() + (n * 86400000));
    };

    this.addHours = function (n) {
        return new TimeSpan(this.getTotalMilliseconds() + (n * 3600000));
    };

    this.addMinutes = function (n) {
        return new TimeSpan(this.getTotalMilliseconds() + (n * 60000));
    };

    this.addSeconds = function (n) {
        return new TimeSpan(this.getTotalMilliseconds() + (n * 1000));
    };

    this.addMilliseconds = function (n) {
        return new TimeSpan(this.getTotalMilliseconds() + n);
    };

    this.get12HourHour = function () {
        return (this.getHours() > 12) ? this.getHours() - 12 : (this.getHours() === 0) ? 12 : this.getHours();
    };

    this.getDesignator = function () {
        return (this.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
    };

    this.toString = function (format) {
        this._toString = function () {
            if (this.getDays() !== null && this.getDays() > 0) {
                return this.getDays() + "." + this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
            }
            else {
                return this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
            }
        };

        this.p = function (s) {
            return (s.toString().length < 2) ? "0" + s : s;
        };

        var me = this;

        return format ? format.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g,
        function (format) {
            switch (format) {
                case "d":
                    return me.getDays();
                case "dd":
                    return me.p(me.getDays());
                case "H":
                    return me.getHours();
                case "HH":
                    return me.p(me.getHours());
                case "h":
                    return me.get12HourHour();
                case "hh":
                    return me.p(me.get12HourHour());
                case "m":
                    return me.getMinutes();
                case "mm":
                    return me.p(me.getMinutes());
                case "s":
                    return me.getSeconds();
                case "ss":
                    return me.p(me.getSeconds());
                case "t":
                    return ((me.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator).substring(0, 1);
                case "tt":
                    return (me.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
            }
        }
        ) : this._toString();
    };
    return this;
};

/**
* Gets the time of day for this date instances. 
* @return {TimeSpan} TimeSpan
*/
Date.prototype.getTimeOfDay = function () {
    return new TimeSpan(0, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
};

/* 
* TimePeriod(startDate, endDate);
* TimePeriod(years, months, days, hours, minutes, seconds, milliseconds);
*/
var TimePeriod = function (years, months, days, hours, minutes, seconds, milliseconds) {
    var attrs = "years months days hours minutes seconds milliseconds".split(/\s+/);

    var gFn = function (attr) {
        return function () {
            return this[attr];
        };
    };

    var sFn = function (attr) {
        return function (val) {
            this[attr] = val;
            return this;
        };
    };

    for (var i = 0; i < attrs.length; i++) {
        var $a = attrs[i], $b = $a.slice(0, 1).toUpperCase() + $a.slice(1);
        TimePeriod.prototype[$a] = 0;
        TimePeriod.prototype["get" + $b] = gFn($a);
        TimePeriod.prototype["set" + $b] = sFn($a);
    }

    if (arguments.length == 7) {
        this.years = years;
        this.months = months;
        this.setDays(days);
        this.setHours(hours);
        this.setMinutes(minutes);
        this.setSeconds(seconds);
        this.setMilliseconds(milliseconds);
    } else if (arguments.length == 2 && arguments[0] instanceof Date && arguments[1] instanceof Date) {
        // startDate and endDate as arguments

        var d1 = years.clone();
        var d2 = months.clone();

        var temp = d1.clone();
        var orient = (d1 > d2) ? -1 : +1;

        this.years = d2.getFullYear() - d1.getFullYear();
        temp.addYears(this.years);

        if (orient == +1) {
            if (temp > d2) {
                if (this.years !== 0) {
                    this.years--;
                }
            }
        } else {
            if (temp < d2) {
                if (this.years !== 0) {
                    this.years++;
                }
            }
        }

        d1.addYears(this.years);

        if (orient == +1) {
            while (d1 < d2 && d1.clone().addDays(Date.getDaysInMonth(d1.getYear(), d1.getMonth())) < d2) {
                d1.addMonths(1);
                this.months++;
            }
        }
        else {
            while (d1 > d2 && d1.clone().addDays(-d1.getDaysInMonth()) > d2) {
                d1.addMonths(-1);
                this.months--;
            }
        }

        var diff = d2 - d1;

        if (diff !== 0) {
            var ts = new TimeSpan(diff);
            //Edited by Henry Donnelly - 05/09/2012
            //Wasn't working correctly so fixed - used in Vogue History

            var days = ts.getDays();
            var hours = ts.getHours();
            var mins = ts.getMinutes();
            var seconds = ts.getSeconds();

            if (days > 0) {
                return days + ((days == 1) ? ' day' : ' days');
            }
            if (hours > 0) {
                return hours + ((hours == 1) ? ' hour' : ' hours');
            }
            if (mins > 0) {
                return mins + ((mins == 1) ? ' minute' : ' mins');
            }
            if (seconds > 0) {
                return "Just now";
            }
        }
    }
    return this;
};;
/* -----------------------------*/
var CONTENTIDENTIFIERS = function () {
    var currentContentId;
    function getCurrentContentId() {
        return currentContentId || (currentContentId = $('#VogueUI').attr('data-contentid'));
    }

    var currentSectionId;
    function getCurrentSectionId() {
        return currentSectionId || (currentSectionId = $('#VogueUI').attr('data-sectioncontentid'));
    }

    var currentListingSectionId;
    function getCurrentListingSectionId() {
        return currentListingSectionId || (currentListingSectionId = $('#VogueUI').attr('data-listingsectioncontentid'));
    }

    var pub = {
        currentContentId: getCurrentContentId,
        currentSectionId: getCurrentSectionId,
        currentListingSectionId: getCurrentListingSectionId
    };

    return pub;
} ();;
/* -----------------------------*/
var CONTENTNAVIGATIONVMHELPER = function () {
    function createGroup(groupName, firstContentId, listingSectionContentId) {
        return { FirstContentId: firstContentId, GroupName: groupName, ListingSectionContentId: listingSectionContentId || "" };
    };

    function addGroupToViewModel(viewModel, group, atStart) {
        group.items = ko.observableArray();
        if (atStart === true) {
            viewModel.groups.unshift(group);
        } else {
            viewModel.groups.push(group);
        }
        return group;
    };

    function addItemToViewModel(viewModel, item, addToStart) {
        item.DisplayDate = UTILITIES.parseJsonDate(item.DisplayDate);
        // check for grouping
        if (viewModel.isGrouped === true) {
            // if the items should be grouped by date
            if (viewModel.groupByDate === true) {
                // calculate the name of this group from the date
                if (viewModel.groupNameDateFormat && viewModel.groupNameDateFormat.length > 0) {
                    item.Group = item.DisplayDate.toString(viewModel.groupNameDateFormat);
                } else if (UTILITIES.isFunction(viewModel.groupNameDateFunction)) {
                    item.Group = viewModel.groupNameDateFunction(item);
                }
            }
            // get or create the group
            var group = getGroupByName(viewModel, item.Group);
            if (group === null) {
                group = addGroupToViewModel(viewModel, createGroup(item.Group, item.Id), false);
            }
            // add this item to the group
            if (addToStart === true) {
                group.items.unshift(item);
            } else {
                group.items.push(item);
            }
        }
    };

    function addItemsToViewModel(viewModel, items, addToStart) {
        $.each(items, function (index, item) {
            item.DisplayDate = UTILITIES.parseJsonDate(item.DisplayDate);

        });

        // check for grouping
        if (viewModel.isGrouped === true) {
            // if the items should be grouped by date
            if (viewModel.groupByDate === true) {
                // calculate the name of this group from the date
                if (viewModel.groupNameDateFormat && viewModel.groupNameDateFormat.length > 0) {
                    $.each(items, function (index, item) {
                        item.Group = item.DisplayDate.toString(viewModel.groupNameDateFormat);
                    });
                } else if (UTILITIES.isFunction(viewModel.groupNameDateFunction)) {
                    $.each(items, function (index, item) {
                        item.Group = viewModel.groupNameDateFunction(item);
                    });
                }
            }
        }


        // group the items
        if (viewModel.isGrouped === false) {
            $.each(items, function (index, item) { item.Group = null; });
        }

        var groupedItems = [];
        $.each(items, function (index, item) {
            if (typeof logStepStart === 'function') logStepStart("Fashion Shows - remove duplicate DateSubgroups");
            // Remove duplicate DateSubgroups
            if (this.Type == "DateSubgroup") {
                // Check if DateSubgroup already exists
                var group = getGroupByName(viewModel, item.Group);
                if (group != null && group.items().length > 0) {
                    var skip = 0;
                    $.each(group.items(), function (i, groupItem) {
                        if (this.Type == "DateSubgroup" && this.DisplayDate.toString() == item.DisplayDate.toString()) {
                            if (addToStart) {
                                // remove duplicate from group.items()
                                group.items().splice(i, 1);
                            }
                            else {
                                skip = 1;
                            }
                            return false;
                        }
                    });
                    if (skip > 0) {
                        // dont include new duplicate
                        return true;
                    }
                }
            }
            if (typeof logStepStop === 'function') logStepStop("Fashion Shows - remove duplicate DateSubgroups");
            var itemGroupMatch = $.grep(groupedItems, function (i) {
                return i.Group === item.Group;
            });
            var itemGroup = null;
            if (!itemGroupMatch.length) {
                itemGroup = new Array();
                itemGroup.Group = item.Group;
                groupedItems.push(itemGroup);
            } else {
                itemGroup = itemGroupMatch[0];
            }
            itemGroup.push(item);
        });
        $.each(groupedItems, function () {

            var groupArray = this;
            var groupName = groupArray.Group;

            // get or create the group
            var group = getGroupByName(viewModel, groupName);
            if (group === null) {
                group = addGroupToViewModel(viewModel, createGroup(groupName, groupArray[0].Id), addToStart);
            }
            if (typeof logStepStart === 'function') logStepStart("knockout - addItemsToViewModel:" + groupArray.length);
            // add this groups items
            if (addToStart === true) {
                group.items.unshift.apply(group.items, groupArray.reverse());
            } else {
                group.items.push.apply(group.items, groupArray);
            }
            if (typeof logStepStop === 'function') logStepStop("knockout - addItemsToViewModel:" + groupArray.length);
        });
    };

    function getGroupByName(viewModel, groupName) {
        var group = null;
        $.each(viewModel.groups(), function (idx, grp) {
            if (grp.GroupName === groupName) {
                group = grp;
                return false;
            }
        });
        return group;
    };

    var pub = {
        addGroupToViewModel: addGroupToViewModel,
        addItemToViewModel: addItemToViewModel,
        addItemsToViewModel: addItemsToViewModel
    };
    return pub;
} ();;
/* -----------------------------*/
/*!

   Flowplayer v5.4.3 (Wednesday, 19. June 2013 11:34PM) | flowplayer.org/license

*/
!function ($) {

    /*
       jQuery.browser for 1.9+
    
       We all love feature detection but that's sometimes not enough.
    
       @author Tero Piirainen
    */
    !function ($) {

        if (!$.browser) {

            var b = $.browser = {},
               ua = navigator.userAgent.toLowerCase(),
               match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
               /(safari)[ \/]([\w.]+)/.exec(ua) ||
               /(webkit)[ \/]([\w.]+)/.exec(ua) ||
               /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
               /(msie) ([\w.]+)/.exec(ua) ||
               ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

            if (match[1]) {
                b[match[1]] = true;
                b.version = match[2] || "0";
            }

        }

    }(jQuery);
    // auto-install (any video tag with parent .flowplayer)
    $(function () {
        if (typeof $.fn.flowplayer == 'function') {
            $("video").parent(".flowplayer").flowplayer();
        }
    });

    var instances = [],
       extensions = [],
       UA = window.navigator.userAgent;


    /* flowplayer()  */
    window.flowplayer = function (fn) {
        return $.isFunction(fn) ? extensions.push(fn) :
           typeof fn == 'number' || fn === undefined ? instances[fn || 0] :
           $(fn).data("flowplayer");
    };

    $(window).on('beforeunload', function () {
        $.each(instances, function (i, api) {
            if (api.conf.splash) {
                api.unload();
            } else {
                api.bind("error", function () {
                    $(".flowplayer.is-error .fp-message").remove();
                });
            }
        });
    });

    $.extend(flowplayer, {

        version: '5.4.3',

        engine: {},

        conf: {},

        support: {},

        defaults: {

            debug: false,

            // true = forced playback
            disabled: false,

            // first engine to try
            engine: 'html5',

            fullscreen: window == window.top,

            // keyboard shortcuts
            keyboard: true,

            // default aspect ratio
            ratio: 9 / 16,

            adaptiveRatio: false,

            // scale flash object to video's aspect ratio in normal mode?
            flashfit: false,

            rtmp: 0,

            splash: false,

            swf: "//releases.flowplayer.org/5.4.3/flowplayer.swf",

            speeds: [0.25, 0.5, 1, 1.5, 2],

            tooltip: true,

            // initial volume level
            volume: typeof localStorage != "object" ? 1 : localStorage.muted == "true" ? 0 : !isNaN(localStorage.volume) ? localStorage.volume || 1 : 1,

            // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#error-codes
            errors: [

               // video exceptions
               '',
               'Video loading aborted',
               'Network error',
               'Video not properly encoded',
               'Video file not found',

               // player exceptions
               'Unsupported video',
               'Skin not found',
               'SWF file not found',
               'Subtitles not found',
               'Invalid RTMP URL',
               'Unsupported video format. Try installing Adobe Flash.'
            ],
            errorUrls: ['', '', '', '', '', '', '', '', '', '',
               'http://get.adobe.com/flashplayer/'
            ],
            playlist: []

        }

    });

    // keep track of players
    var playerCount = 1;

    // jQuery plugin
    $.fn.flowplayer = function (opts, callback) {

        if (typeof opts == 'string') opts = { swf: opts }
        if ($.isFunction(opts)) { callback = opts; opts = {} }

        return !opts && this.data("flowplayer") || this.each(function () {

            // private variables
            var root = $(this).addClass("is-loading"),
               conf = $.extend({}, flowplayer.defaults, flowplayer.conf, opts, root.data()),
               videoTag = $("video", root).addClass("fp-engine").removeAttr("controls"),
               urlResolver = videoTag.length ? new URLResolver(videoTag) : null,
               storage = {},
               lastSeekPosition,
               engine;

            if (conf.playlist.length) { // Create initial video tag if called without
                var preload = videoTag.attr('preload'), placeHolder;
                if (videoTag.length) videoTag.replaceWith(placeHolder = $('<p />'));
                videoTag = $('<video />').addClass('fp-engine');
                placeHolder ? placeHolder.replaceWith(videoTag) : root.prepend(videoTag);
                videoTag.attr('preload', preload);
                if (typeof conf.playlist[0] === 'string') videoTag.attr('src', conf.playlist[0]);
                else {
                    $.each(conf.playlist[0], function (i, plObj) {
                        for (var type in plObj) {
                            if (plObj.hasOwnProperty(type)) {
                                videoTag.append($('<source />').attr({ type: 'video/' + type, src: plObj[type] }));
                            }
                        }
                    });
                }
                urlResolver = new URLResolver(videoTag);

            }

            //stop old instance
            var oldApi = root.data('flowplayer');
            if (oldApi) oldApi.unload();

            root.data('fp-player_id', root.data('fp-player_id') || playerCount++);

            try {
                storage = window.localStorage || storage;
            } catch (e) { }

            var isRTL = (this.currentStyle && this.currentStyle['direction'] === 'rtl')
               || (window.getComputedStyle && window.getComputedStyle(this, null).getPropertyValue('direction') === 'rtl');

            if (isRTL) root.addClass('is-rtl');

            /*** API ***/
            var api = oldApi || {

                // properties
                conf: conf,
                currentSpeed: 1,
                volumeLevel: typeof conf.volume === "undefined" ? storage.volume * 1 : conf.volume,
                video: {},

                // states
                disabled: false,
                finished: false,
                loading: false,
                muted: storage.muted == "true" || conf.muted,
                paused: false,
                playing: false,
                ready: false,
                splash: false,
                rtl: isRTL,

                // methods
                load: function (video, callback) {

                    if (api.error || api.loading || api.disabled) return;

                    // resolve URL
                    video = urlResolver.resolve(video);
                    $.extend(video, engine.pick(video.sources));

                    if (video.src) {
                        var e = $.Event("load");
                        root.trigger(e, [api, video, engine]);

                        if (!e.isDefaultPrevented()) {
                            engine.load(video);

                            // callback
                            if ($.isFunction(video)) callback = video;
                            if (callback) root.one("ready", callback);
                        } else {
                            api.loading = false;
                        }
                    }

                    return api;
                },

                pause: function (fn) {
                    if (api.ready && !api.seeking && !api.disabled && !api.loading) {
                        engine.pause();
                        api.one("pause", fn);
                    }
                    return api;
                },

                resume: function () {

                    if (api.ready && api.paused && !api.disabled) {
                        engine.resume();

                        // Firefox (+others?) does not fire "resume" after finish
                        if (api.finished) {
                            api.trigger("resume");
                            api.finished = false;
                        }
                    }

                    return api;
                },

                toggle: function () {
                    return api.ready ? api.paused ? api.resume() : api.pause() : api.load();
                },

                /*
                   seek(1.4)   -> 1.4s time
                   seek(true)  -> 10% forward
                   seek(false) -> 10% backward
                */
                seek: function (time, callback) {
                    if (api.ready) {

                        if (typeof time == "boolean") {
                            var delta = api.video.duration * 0.1;
                            time = api.video.time + (time ? delta : -delta);
                        }
                        time = lastSeekPosition = Math.min(Math.max(time, 0), api.video.duration).toFixed(1);
                        var ev = $.Event('beforeseek');
                        root.trigger(ev, [api, time]);
                        if (!ev.isDefaultPrevented()) {
                            engine.seek(time);
                            if ($.isFunction(callback)) root.one("seek", callback);
                        } else {
                            api.seeking = false;
                            root.toggleClass("is-seeking", api.seeking); // remove loading indicator
                        }
                    }
                    return api;
                },

                /*
                   seekTo(1) -> 10%
                   seekTo(2) -> 20%
                   seekTo(3) -> 30%
                   ...
                   seekTo()  -> last position
                */
                seekTo: function (position, fn) {
                    var time = position === undefined ? lastSeekPosition : api.video.duration * 0.1 * position;
                    return api.seek(time, fn);
                },

                mute: function (flag) {
                    if (flag === undefined) flag = !api.muted;
                    storage.muted = api.muted = flag;
                    storage.volume = !isNaN(storage.volume) ? storage.volume : conf.volume; // make sure storage has volume
                    api.volume(flag ? 0 : storage.volume, true);
                    api.trigger("mute", flag);
                    return api;
                },

                volume: function (level, skipStore) {
                    if (api.ready) {
                        level = Math.min(Math.max(level, 0), 1);
                        if (!skipStore) storage.volume = level;
                        engine.volume(level);
                    }

                    return api;
                },

                speed: function (val, callback) {

                    if (api.ready) {

                        // increase / decrease
                        if (typeof val == "boolean") {
                            val = conf.speeds[$.inArray(api.currentSpeed, conf.speeds) + (val ? 1 : -1)] || api.currentSpeed;
                        }

                        engine.speed(val);
                        if (callback) root.one("speed", callback);
                    }

                    return api;
                },


                stop: function () {
                    if (api.ready) {
                        api.pause();
                        api.seek(0, function () {
                            root.trigger("stop");
                        });
                    }
                    return api;
                },

                unload: function () {
                    if (!root.hasClass("is-embedding")) {

                        if (conf.splash) {
                            api.trigger("unload");
                            engine.unload();
                        } else {
                            api.stop();
                        }
                    }
                    return api;
                },

                disable: function (flag) {
                    if (flag === undefined) flag = !api.disabled;

                    if (flag != api.disabled) {
                        api.disabled = flag;
                        api.trigger("disable", flag);
                    }
                    return api;
                }

            };

            api.conf = $.extend(api.conf, conf);


            /* event binding / unbinding */
            $.each(['bind', 'one', 'unbind'], function (i, key) {
                api[key] = function (type, fn) {
                    root[key](type, fn);
                    return api;
                };
            });

            api.trigger = function (event, arg) {
                root.trigger(event, [api, arg]);
                return api;
            };


            /*** Behaviour ***/
            if (!root.data('flowplayer')) { // Only bind once
                root.bind("boot", function () {

                    // conf
                    $.each(['autoplay', 'loop', 'preload', 'poster'], function (i, key) {
                        var val = videoTag.attr(key);
                        if (val !== undefined) conf[key] = val ? val : true;
                    });

                    // splash
                    if (conf.splash || root.hasClass("is-splash") || !flowplayer.support.firstframe) {
                        api.forcedSplash = !conf.splash && !root.hasClass("is-splash");
                        api.splash = conf.splash = conf.autoplay = true;
                        root.addClass("is-splash");
                        videoTag.attr("preload", "none");
                    }

                    // extensions
                    $.each(extensions, function (i) {
                        this(api, root);
                    });

                    // 1. use the configured engine
                    engine = flowplayer.engine[conf.engine];
                    if (engine) engine = engine(api, root);

                    if (engine.pick(urlResolver.initialSources)) {
                        api.engine = conf.engine;

                        // 2. failed -> try another
                    } else {
                        $.each(flowplayer.engine, function (name, impl) {
                            if (name != conf.engine) {
                                engine = this(api, root);
                                if (engine.pick(urlResolver.initialSources)) api.engine = name;
                                return false;
                            }
                        });
                    }

                    // instances
                    instances.push(api);

                    // no engine
                    if (!api.engine) return api.trigger("error", { code: flowplayer.support.flashVideo ? 5 : 10 });

                    // start
                    conf.splash ? api.unload() : api.load();

                    // disabled
                    if (conf.disabled) api.disable();

                    //initial volumelevel
                    engine.volume(api.volumeLevel);

                    // initial callback
                    root.one("ready", callback);


                }).bind("load", function (e, api, video) {

                    // unload others
                    if (conf.splash) {
                        $(".flowplayer").filter(".is-ready, .is-loading").not(root).each(function () {
                            var api = $(this).data("flowplayer");
                            if (api.conf.splash) api.unload();
                        });
                    }

                    // loading
                    root.addClass("is-loading");
                    api.loading = true;


                }).bind("ready", function (e, api, video) {
                    video.time = 0;
                    api.video = video;

                    function notLoading() {
                        root.removeClass("is-loading");
                        api.loading = false;
                    }

                    if (conf.splash) root.one("progress", notLoading);
                    else notLoading();

                    // saved state
                    if (api.muted) api.mute(true);
                    else api.volume(api.volumeLevel);


                }).bind("unload", function (e) {
                    if (conf.splash) videoTag.remove();
                    root.removeClass("is-loading");
                    api.loading = false;


                }).bind("ready unload", function (e) {
                    var is_ready = e.type == "ready";
                    root.toggleClass("is-splash", !is_ready).toggleClass("is-ready", is_ready);
                    api.ready = is_ready;
                    api.splash = !is_ready;


                }).bind("progress", function (e, api, time) {
                    api.video.time = time;


                }).bind("speed", function (e, api, val) {
                    api.currentSpeed = val;

                }).bind("volume", function (e, api, level) {
                    api.volumeLevel = Math.round(level * 100) / 100;
                    if (!api.muted) storage.volume = level;
                    else if (level) api.mute(false);


                }).bind("beforeseek seek", function (e) {
                    api.seeking = e.type == "beforeseek";
                    root.toggleClass("is-seeking", api.seeking);

                }).bind("ready pause resume unload finish stop", function (e, _api, video) {

                    // PAUSED: pause / finish
                    api.paused = /pause|finish|unload|stop/.test(e.type);

                    // SHAKY HACK: first-frame / preload=none
                    if (e.type == "ready") {
                        api.paused = conf.preload == 'none';
                        if (video) {
                            api.paused = !video.duration || !conf.autoplay && (conf.preload != 'none');
                        }
                    }

                    // the opposite
                    api.playing = !api.paused;

                    // CSS classes
                    root.toggleClass("is-paused", api.paused).toggleClass("is-playing", api.playing);

                    // sanity check
                    if (!api.load.ed) api.pause();

                }).bind("finish", function (e) {
                    api.finished = true;

                }).bind("error", function () {
                    videoTag.remove();
                });
            }

            // boot
            root.trigger("boot", [api, root]).data("flowplayer", api);

        });

    };

    !function () {

        var parseIpadVersion = function (UA) {
            var e = /Version\/(\d\.\d)/.exec(UA);
            if (e && e.length > 1) {
                return parseFloat(e[1], 10);
            }
            return 0;
        };

        var s = flowplayer.support,
           browser = $.browser,
           video = $("<video loop autoplay preload/>")[0],
           IS_IE = browser.msie,
           UA = navigator.userAgent,
           IS_IPAD = /iPad|MeeGo/.test(UA) && !/CriOS/.test(UA),
           IS_IPAD_CHROME = /iPad/.test(UA) && /CriOS/.test(UA),
           IS_IPHONE = /iP(hone|od)/i.test(UA) && !/iPad/.test(UA),
           IS_ANDROID = /Android/.test(UA) && !/Firefox/.test(UA),
           IS_ANDROID_FIREFOX = /Android/.test(UA) && /Firefox/.test(UA),
           IS_SILK = /Silk/.test(UA),
           IS_WP = /IEMobile/.test(UA),
           IPAD_VER = IS_IPAD ? parseIpadVersion(UA) : 0,
           ANDROID_VER = IS_ANDROID ? parseFloat(/Android\ (\d\.\d)/.exec(UA)[1], 10) : 0;
        $.extend(s, {
            subtitles: !!video.addTextTrack,
            fullscreen: !IS_ANDROID &&
               (typeof document.webkitCancelFullScreen == 'function' && !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(UA) ||
                  document.mozFullScreenEnabled ||
                  typeof document.exitFullscreen == 'function'),
            inlineBlock: !(IS_IE && browser.version < 8),
            touch: ('ontouchstart' in window),
            dataload: !IS_IPAD && !IS_IPHONE && !IS_WP,
            zeropreload: !IS_IE && !IS_ANDROID, // IE supports only preload=metadata
            volume: !IS_IPAD && !IS_ANDROID && !IS_IPHONE && !IS_SILK && !IS_IPAD_CHROME,
            cachedVideoTag: !IS_IPAD && !IS_IPHONE && !IS_IPAD_CHROME && !IS_WP,
            firstframe: !IS_IPHONE && !IS_IPAD && !IS_ANDROID && !IS_SILK && !IS_IPAD_CHROME && !IS_WP && !IS_ANDROID_FIREFOX,
            inlineVideo: !IS_IPHONE && !IS_SILK && !IS_WP && (!IS_ANDROID || ANDROID_VER >= 3),
            hlsDuration: !browser.safari || IS_IPAD || IS_IPHONE || IS_IPAD_CHROME,
            seekable: !IS_IPAD && !IS_IPAD_CHROME
        });

        // flashVideo
        try {
            var ver = IS_IE ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable('$version') :
               navigator.plugins["Shockwave Flash"].description;

            ver = ver.split(/\D+/);
            if (ver.length && !ver[0]) ver = ver.slice(1);

            s.flashVideo = ver[0] > 9 || ver[0] == 9 && ver[3] >= 115;

        } catch (ignored) { }
        try {
            s.video = !!video.canPlayType;
            s.video && video.canPlayType('video/mp4');
        } catch (e) {
            s.video = false;
        }

        // animation
        s.animation = (function () {
            var vendors = ['', 'Webkit', 'Moz', 'O', 'ms', 'Khtml'], el = $("<p/>")[0];

            for (var i = 0; i < vendors.length; i++) {
                if (el.style[vendors[i] + 'AnimationName'] !== 'undefined') return true;
            }
        })();



    }();


    /* The most minimal Flash embedding */

    // movie required in opts
    function embed(swf, flashvars) {

        var id = "obj" + ("" + Math.random()).slice(2, 15),
           tag = '<object class="fp-engine" id="' + id + '" name="' + id + '" ';

        tag += $.browser.msie ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' :
           ' data="' + swf + '" type="application/x-shockwave-flash">';

        var opts = {
            width: "100%",
            height: "100%",
            allowscriptaccess: "always",
            wmode: "transparent",
            quality: "high",
            flashvars: "",

            // https://github.com/flowplayer/flowplayer/issues/13#issuecomment-9369919
            movie: swf + ($.browser.msie ? "?" + id : ""),
            name: id
        };

        // flashvars
        $.each(flashvars, function (key, value) {
            opts.flashvars += key + "=" + value + "&";
        });

        // parameters
        $.each(opts, function (key, value) {
            tag += '<param name="' + key + '" value="' + value + '"/>';
        });

        tag += "</object>";

        return $(tag);
    }


    // Flash is buggy allover
    if (window.attachEvent) {
        window.attachEvent("onbeforeunload", function () {
            __flash_savedUnloadHandler = __flash_unloadHandler = function () { };
        });
    }


    flowplayer.engine.flash = function (player, root) {

        var conf = player.conf,
           video = player.video,
           callbackId,
           objectTag,
           api;

        var engine = {

            pick: function (sources) {

                if (flowplayer.support.flashVideo) {

                    // always pick video/flash first
                    var flash = $.grep(sources, function (source) { return source.type == 'flash'; })[0];
                    if (flash) return flash;

                    for (var i = 0, source; i < sources.length; i++) {
                        source = sources[i];
                        if (/mp4|flv/.test(source.type)) return source;
                    }
                }
            },

            load: function (video) {

                function escapeURL(url) {
                    return url.replace(/&amp;/g, '%26').replace(/&/g, '%26').replace(/=/g, '%3D');
                }

                var html5Tag = $("video", root),
                   url = escapeURL(video.src);
                is_absolute = /^https?:/.test(url);

                // html5 tag not needed (pause needed for firefox)
                if (html5Tag.length > 0 && flowplayer.support.video) html5Tag[0].pause();
                html5Tag.remove();

                // convert to absolute
                if (!is_absolute && !conf.rtmp) url = $("<img/>").attr("src", url)[0].src;

                if (api) {
                    api.__play(url);

                } else {

                    callbackId = "fp" + ("" + Math.random()).slice(3, 15);

                    var opts = {
                        hostname: conf.embedded ? conf.hostname : location.hostname,
                        url: url,
                        callback: "jQuery." + callbackId
                    };
                    if (root.data("origin")) {
                        opts.origin = root.data("origin");
                    }

                    if (is_absolute) delete conf.rtmp;

                    // optional conf
                    $.each(['key', 'autoplay', 'preload', 'rtmp', 'loop', 'debug', 'preload', 'splash'], function (i, key) {
                        if (conf[key]) opts[key] = conf[key];
                    });

                    // issue #376
                    if (opts.rtmp) {
                        opts.rtmp = escapeURL(opts.rtmp);
                    }

                    objectTag = embed(conf.swf, opts);

                    objectTag.prependTo(root);

                    api = objectTag[0];

                    // throw error if no loading occurs
                    setTimeout(function () {
                        try {
                            if (!api.PercentLoaded()) {
                                return root.trigger("error", [player, { code: 7, url: conf.swf }]);
                            }
                        } catch (e) { }
                    }, 5000);

                    // listen
                    $[callbackId] = function (type, arg) {

                        if (conf.debug && type != "status") console.log("--", type, arg);

                        var event = $.Event(type);

                        switch (type) {

                            // RTMP sends a lot of finish events in vain
                            // case "finish": if (conf.rtmp) return;
                            case "ready": arg = $.extend(video, arg); break;
                            case "click": event.flash = true; break;
                            case "keydown": event.which = arg; break;
                            case "seek": video.time = arg; break;
                            case "buffered": video.buffered = true; break;

                            case "status":
                                player.trigger("progress", arg.time);

                                if (arg.buffer <= video.bytes && !video.buffered) {
                                    video.buffer = arg.buffer / video.bytes * video.duration;
                                    player.trigger("buffer", video.buffer);

                                } else if (video.buffered) player.trigger("buffered");

                                break;

                        }

                        // add some delay to that player is truly ready after an event
                        setTimeout(function () { player.trigger(event, arg); }, 1)

                    };

                }

            },

            // not supported yet
            speed: $.noop,


            unload: function () {
                api && api.__unload && api.__unload();
                delete $[callbackId];
                $("object", root).remove();
                api = 0;
            }

        };

        $.each("pause,resume,seek,volume".split(","), function (i, name) {

            engine[name] = function (arg) {

                if (player.ready) {

                    if (name == 'seek' && player.video.time && !player.paused) {
                        player.trigger("beforeseek");
                    }

                    if (arg === undefined) {
                        api["__" + name]();

                    } else {
                        api["__" + name](arg);
                    }

                }
            };

        });

        var win = $(window);

        // handle Flash object aspect ratio
        player.bind("ready fullscreen fullscreen-exit", function (e) {
            var origH = root.height(),
               origW = root.width();
            if (player.conf.flashfit || /full/.test(e.type)) {

                var fs = player.isFullscreen,
                   truefs = fs && FS_SUPPORT,
                   ie7 = !flowplayer.support.inlineBlock,
                   screenW = fs ? (truefs ? screen.availWidth : win.width()) : origW,
                   screenH = fs ? (truefs ? screen.availHeight : win.height()) : origH,

                   // default values for fullscreen-exit without flashfit
                   hmargin = truefs ? screen.width - screen.availWidth : 0,
                   vmargin = truefs ? screen.height - screen.availHeight : 0,
                   objwidth = ie7 ? origW : '',
                   objheight = ie7 ? origH : '',

                   aspectratio, dataratio;

                if (player.conf.flashfit || e.type === "fullscreen") {
                    aspectratio = player.video.width / player.video.height,
                    dataratio = player.video.height / player.video.width,
                    objheight = Math.max(dataratio * screenW),
                    objwidth = Math.max(aspectratio * screenH);
                    objheight = objheight > screenH ? objwidth * dataratio : objheight;
                    objheight = Math.min(Math.round(objheight), screenH);
                    objwidth = objwidth > screenW ? objheight * aspectratio : objwidth;
                    objwidth = Math.min(Math.round(objwidth), screenW);
                    vmargin = Math.max(Math.round((screenH + vmargin - objheight) / 2), 0);
                    hmargin = Math.max(Math.round((screenW + hmargin - objwidth) / 2), 0);
                }

                $("object", root).css({
                    width: objwidth,
                    height: objheight,
                    marginTop: vmargin,
                    marginLeft: hmargin
                });
            }
        });

        return engine;

    };


    var VIDEO = $('<video/>')[0];

    // HTML5 --> Flowplayer event
    var EVENTS = {

        // fired
        ended: 'finish',
        pause: 'pause',
        play: 'resume',
        progress: 'buffer',
        timeupdate: 'progress',
        volumechange: 'volume',
        ratechange: 'speed',
        //seeking: 'beforeseek',
        seeked: 'seek',
        // abort: 'resume',

        // not fired
        loadeddata: 'ready',
        // loadedmetadata: 0,
        // canplay: 0,

        // error events
        // load: 0,
        // emptied: 0,
        // empty: 0,
        error: 'error',
        dataunavailable: 'error'

    };

    function round(val) {
        return Math.round(val * 100) / 100;
    }

    function getType(type) {
        return /mpegurl/i.test(type) ? "application/x-mpegurl" : "video/" + type;
    }

    function canPlay(type) {
        if (!/^(video|application)/.test(type))
            type = getType(type);
        return !!VIDEO.canPlayType(type).replace("no", '');
    }

    function findFromSourcesByType(sources, type) {
        var arr = $.grep(sources, function (s) {
            return s.type === type;
        });
        return arr.length ? arr[0] : null;
    }

    var videoTagCache;
    var createVideoTag = function (video) {
        if (videoTagCache) {
            return videoTagCache.attr({ type: getType(video.type), src: video.src });
        }
        return (videoTagCache = $("<video/>", {
            src: video.src,
            type: getType(video.type),
            'class': 'fp-engine',
            'autoplay': 'autoplay',
            preload: 'none',
            'x-webkit-airplay': 'allow'
        }));
    }

    flowplayer.engine.html5 = function (player, root) {

        var videoTag = $("video", root),
           support = flowplayer.support,
           track = $("track", videoTag),
           conf = player.conf,
           self,
           timer,
           api;

        return self = {

            pick: function (sources) {
                if (support.video) {
                    if (conf.videoTypePreference) {
                        var mp4source = findFromSourcesByType(sources, conf.videoTypePreference);
                        if (mp4source) return mp4source;
                    }
                    for (var i = 0, source; i < sources.length; i++) {
                        if (canPlay(sources[i].type)) return sources[i];
                    }
                }
            },

            load: function (video) {

                if (conf.splash && !api) {

                    videoTag = createVideoTag(video).prependTo(root);

                    if (!support.inlineVideo) {
                        videoTag.css({
                            position: 'absolute',
                            top: '-9999em'
                        });
                    }

                    if (track.length) videoTag.append(track.attr("default", ""));

                    if (conf.loop) videoTag.attr("loop", "loop");

                    api = videoTag[0];

                } else {

                    api = videoTag[0];
                    var sources = videoTag.find('source');
                    if (!api.src && sources.length) {
                        api.src = video.src;
                        sources.remove();
                    }

                    // change of clip
                    if (player.video.src && video.src != player.video.src) {
                        videoTag.attr("autoplay", "autoplay");
                        api.src = video.src;

                        // preload=none or no initial "loadeddata" event
                    } else if (conf.preload == 'none' || !support.dataload) {

                        if (support.zeropreload) {
                            player.trigger("ready", video).trigger("pause").one("ready", function () {
                                root.trigger("resume");
                            });

                        } else {
                            player.one("ready", function () {
                                root.trigger("pause");
                            });
                        }
                    }

                }

                listen(api, $("source", videoTag).add(videoTag), video);

                // iPad (+others?) demands load()
                if (conf.preload != 'none' || !support.zeropreload || !support.dataload) api.load();
                if (conf.splash) api.load();
            },

            pause: function () {
                api.pause();
            },

            resume: function () {
                api.play();
            },

            speed: function (val) {
                api.playbackRate = val;
            },

            seek: function (time) {
                try {
                    var pausedState = player.paused;
                    api.currentTime = time;
                    if (pausedState) api.pause();
                } catch (ignored) { }
            },

            volume: function (level) {
                api.volume = level;
            },

            unload: function () {
                $("video.fp-engine", root).remove();
                if (!support.cachedVideoTag) videoTagCache = null;
                timer = clearInterval(timer);
                api = 0;
            }

        };

        function listen(api, sources, video) {
            // listen only once

            if (api.listeners && api.listeners.hasOwnProperty(root.data('fp-player_id'))) return;
            (api.listeners || (api.listeners = {}))[root.data('fp-player_id')] = true;

            sources.bind("error", function (e) {
                try {
                    if (e.originalEvent && $(e.originalEvent.originalTarget).is('img')) return e.preventDefault();
                    if (canPlay($(e.target).attr("type"))) {
                        player.trigger("error", { code: 4 });
                    }
                } catch (er) {
                    // Most likely: https://bugzilla.mozilla.org/show_bug.cgi?id=208427
                }
            });

            $.each(EVENTS, function (type, flow) {

                api.addEventListener(type, function (e) {

                    // safari hack for bad URL (10s before fails)
                    if (flow == "progress" && e.srcElement && e.srcElement.readyState === 0) {
                        setTimeout(function () {
                            if (!player.video.duration) {
                                flow = "error";
                                player.trigger(flow, { code: 4 });
                            }
                        }, 10000);
                    }

                    if (conf.debug && !/progress/.test(flow)) console.log(type, "->", flow, e);

                    // no events if player not ready
                    if (!player.ready && !/ready|error/.test(flow) || !flow || !$("video", root).length) { return; }

                    var event = $.Event(flow), arg;

                    switch (flow) {

                        case "ready":

                            arg = $.extend(video, {
                                duration: api.duration,
                                width: api.videoWidth,
                                height: api.videoHeight,
                                url: api.currentSrc,
                                src: api.currentSrc
                            });

                            try {
                                arg.seekable = api.seekable && api.seekable.end(null);

                            } catch (ignored) { }

                            // buffer
                            timer = timer || setInterval(function () {

                                try {
                                    arg.buffer = api.buffered.end(null);

                                } catch (ignored) { }

                                if (arg.buffer) {
                                    if (arg.buffer <= arg.duration && !arg.buffered) {
                                        player.trigger("buffer", e);

                                    } else if (!arg.buffered) {
                                        arg.buffered = true;
                                        player.trigger("buffer", e).trigger("buffered", e);
                                        clearInterval(timer);
                                        timer = 0;
                                    }
                                }

                            }, 250);

                            if (!arg.duration && !support.hlsDuration && type === "loadeddata") {
                                var durationChanged = function () {
                                    arg.duration = api.duration;
                                    try {
                                        arg.seekable = api.seekable && api.seekable.end(null);

                                    } catch (ignored) { }
                                    player.trigger(event, arg);
                                    api.removeEventListener('durationchange', durationChanged);
                                };
                                api.addEventListener('durationchange', durationChanged);
                                return;
                            }

                            break;

                        case "progress": case "seek":

                            var dur = player.video.duration

                            if (api.currentTime > 0) {
                                arg = Math.max(api.currentTime, 0);
                                break;

                            } else if (flow == 'progress') {
                                return;
                            }


                        case "speed":
                            arg = round(api.playbackRate);
                            break;

                        case "volume":
                            arg = round(api.volume);
                            break;

                        case "error":
                      try {
                          arg = (e.srcElement || e.originalTarget).error;
                      } catch (er) {
                          // Most likely https://bugzilla.mozilla.org/show_bug.cgi?id=208427
                          return;
                      }
                    }

                    player.trigger(event, arg);

                }, false);

            });

        }

    }; var TYPE_RE = /\.(\w{3,4})(\?.*)?$/i;

    function parseSource(el) {

        var src = el.attr("src"),
           type = el.attr("type") || "",
           suffix = src.split(TYPE_RE)[1];

        type = /mpegurl/.test(type) ? "mpegurl" : type.replace("video/", "");

        return { src: src, suffix: suffix || type, type: type || suffix };
    }

    /* Resolves video object from initial configuration and from load() method */
    function URLResolver(videoTag) {

        var self = this,
           sources = [];

        // initial sources
        $("source", videoTag).each(function () {
            sources.push(parseSource($(this)));
        });

        if (!sources.length) sources.push(parseSource(videoTag));

        self.initialSources = sources;

        self.resolve = function (video) {
            if (!video) return { sources: sources };

            if ($.isArray(video)) {

                video = {
                    sources: $.map(video, function (el) {
                        var type, ret = $.extend({}, el);
                        $.each(el, function (key, value) { type = key; });
                        ret.type = type;
                        ret.src = el[type];
                        delete ret[type];
                        return ret;
                    })
                };

            } else if (typeof video == 'string') {

                video = { src: video, sources: [] };

                $.each(sources, function (i, source) {
                    if (source.type != 'flash') {
                        video.sources.push({
                            type: source.type,
                            src: video.src.replace(TYPE_RE, "." + source.suffix + "$2")
                        });
                    }
                });
            }

            return video;
        };

    };
    /* A minimal jQuery Slider plugin with all goodies */

    // skip IE policies
    // document.ondragstart = function () { return false; };


    // execute function every <delay> ms
    if (!$.throttle) {
        $.throttle = function (fn, delay) {
            var locked;

            return function () {
                if (!locked) {
                    fn.apply(this, arguments);
                    locked = 1;
                    setTimeout(function () { locked = 0; }, delay);
                }
            };
        };
    }


    $.fn.slider2 = function (rtl) {

        var IS_IPAD = /iPad/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent);

        return this.each(function () {

            var root = $(this),
               doc = $(document),
               progress = root.children(":last"),
               disabled,
               offset,
               width,
               height,
               vertical,
               size,
               maxValue,
               max,
               skipAnimation = false,

               /* private */
               calc = function () {
                   offset = root.offset();
                   width = root.width();
                   height = root.height();

                   /* exit from fullscreen can mess this up.*/
                   // vertical = height > width;

                   size = vertical ? height : width;
                   max = toDelta(maxValue);
               },

               fire = function (value) {
                   if (!disabled && value != api.value && (!maxValue || value < maxValue)) {
                       root.trigger("slide", [value]);
                       api.value = value;
                   }
               },

               mousemove = function (e) {
                   var pageX = e.pageX;
                   if (!pageX && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length) {
                       pageX = e.originalEvent.touches[0].pageX;
                   }
                   var delta = vertical ? e.pageY - offset.top : pageX - offset.left;
                   delta = Math.max(0, Math.min(max || size, delta));

                   var value = delta / size;
                   if (vertical) value = 1 - value;
                   if (rtl) value = 1 - value;
                   return move(value, 0, true);
               },

               move = function (value, speed) {
                   if (speed === undefined) { speed = 0; }
                   if (value > 1) value = 1;

                   var to = (Math.round(value * 1000) / 10) + "%";

                   if (!maxValue || value <= maxValue) {
                       if (!IS_IPAD) progress.stop(); // stop() broken on iPad
                       if (skipAnimation) {
                           progress.css('width', to);
                       } else {
                           progress.animate(vertical ? { height: to } : { width: to }, speed, "linear");
                       }
                   }

                   return value;
               },

               toDelta = function (value) {
                   return Math.max(0, Math.min(size, vertical ? (1 - value) * height : value * width));
               },

               /* public */
               api = {

                   max: function (value) {
                       maxValue = value;
                   },

                   disable: function (flag) {
                       disabled = flag;
                   },

                   slide: function (value, speed, fireEvent) {
                       calc();
                       if (fireEvent) fire(value);
                       move(value, speed);
                   },

                   // Should animation be handled via css
                   disableAnimation: function (value) {
                       skipAnimation = value !== false;
                   }

               };

            calc();

            // bound dragging into document
            root.data("api", api).bind("mousedown.sld touchstart", function (e) {
                e.preventDefault();

                if (!disabled) {

                    // begin --> recalculate. allows dynamic resizing of the slider
                    var delayedFire = $.throttle(fire, 100);
                    calc();
                    api.dragging = true;
                    root.addClass('is-dragging');
                    fire(mousemove(e));

                    doc.bind("mousemove.sld touchmove", function (e) {
                        e.preventDefault();
                        delayedFire(mousemove(e));

                    }).one("mouseup touchend", function () {
                        api.dragging = false;
                        root.removeClass('is-dragging');
                        doc.unbind("mousemove.sld touchmove");
                    });

                }

            });

        });

    };

    function zeropad(val) {
        val = parseInt(val, 10);
        return val >= 10 ? val : "0" + val;
    }

    // display seconds in hh:mm:ss format
    function format(sec) {

        sec = sec || 0;

        var h = Math.floor(sec / 3600),
            min = Math.floor(sec / 60);

        sec = sec - (min * 60);

        if (h >= 1) {
            min -= h * 60;
            return h + ":" + zeropad(min) + ":" + zeropad(sec);
        }

        return zeropad(min) + ":" + zeropad(sec);
    }

    flowplayer(function (api, root) {

        var conf = api.conf,
           support = flowplayer.support,
           hovertimer;
        root.find('.fp-ratio,.fp-ui').remove();
        root.addClass("flowplayer").append('\
      <div class="ratio"/>\
      <div class="ui">\
         <div class="waiting"><em/><em/><em/></div>\
         <a class="fullscreen"/>\
         <a class="unload"/>\
         <p class="speed"/>\
         <div class="controls">\
            <a class="play"></a>\
            <div class="timeline">\
               <div class="buffer"/>\
               <div class="progress"/>\
            </div>\
            <div class="volume">\
               <a class="mute"></a>\
               <div class="volumeslider">\
                  <div class="volumelevel"/>\
               </div>\
            </div>\
         </div>\
         <div class="time">\
            <em class="elapsed">00:00</em>\
            <em class="remaining"/>\
            <em class="duration">00:00</em>\
         </div>\
         <div class="message"><h2/><p/></div>\
      </div>'.replace(/class="/g, 'class="fp-')
        );

        function find(klass) {
            return $(".fp-" + klass, root);
        }

        // widgets
        var progress = find("progress"),
           buffer = find("buffer"),
           elapsed = find("elapsed"),
           remaining = find("remaining"),
           waiting = find("waiting"),
           ratio = find("ratio"),
           speed = find("speed"),
           durationEl = find("duration"),
           origRatio = ratio.css("paddingTop"),

           // sliders
           timeline = find("timeline").slider2(api.rtl),
           timelineApi = timeline.data("api"),

           volume = find("volume"),
           fullscreen = find("fullscreen"),
           volumeSlider = find("volumeslider").slider2(api.rtl),
           volumeApi = volumeSlider.data("api"),
           noToggle = root.is(".fixed-controls, .no-toggle");

        timelineApi.disableAnimation(root.hasClass('is-touch'));

        // aspect ratio
        function setRatio(val) {
            if ((root.css('width') === '0px' || root.css('height') === '0px') || val !== flowplayer.defaults.ratio) {
                if (!parseInt(origRatio, 10)) ratio.css("paddingTop", val * 100 + "%");
            }
            if (!support.inlineBlock) $("object", root).height(root.height());
        }

        function hover(flag) {
            root.toggleClass("is-mouseover", flag).toggleClass("is-mouseout", !flag);
        }

        // loading...
        if (!support.animation) waiting.html("<p>loading &hellip;</p>");

        setRatio(conf.ratio);

        // no fullscreen in IFRAME
        try {
            if (!conf.fullscreen) fullscreen.remove();

        } catch (e) {
            fullscreen.remove();
        }


        api.bind("ready", function () {

            var duration = api.video.duration;

            timelineApi.disable(api.disabled || !duration);

            conf.adaptiveRatio && setRatio(api.video.height / api.video.width);

            // initial time & volume
            durationEl.add(remaining).html(format(duration));

            // do we need additional space for showing hour
            ((duration >= 3600) && root.addClass('is-long')) || root.removeClass('is-long');
            volumeApi.slide(api.volumeLevel);


        }).bind("unload", function () {
            if (!origRatio) ratio.css("paddingTop", "");

            // buffer
        }).bind("buffer", function () {
            var video = api.video,
               max = video.buffer / video.duration;

            if (!video.seekable && support.seekable) timelineApi.max(max);
            if (max < 1) buffer.css("width", (max * 100) + "%");
            else buffer.css({ width: '100%' });

        }).bind("speed", function (e, api, val) {
            speed.text(val + "x").addClass("fp-hilite");
            setTimeout(function () { speed.removeClass("fp-hilite") }, 1000);

        }).bind("buffered", function () {
            buffer.css({ width: '100%' });
            timelineApi.max(1);

            // progress
        }).bind("progress", function () {

            var time = api.video.time,
               duration = api.video.duration;

            if (!timelineApi.dragging) {
                timelineApi.slide(time / duration, api.seeking ? 0 : 250);
            }

            elapsed.html(format(time));
            remaining.html("-" + format(duration - time));

        }).bind("finish resume seek", function (e) {
            root.toggleClass("is-finished", e.type == "finish");

        }).bind("stop", function () {
            elapsed.html(format(0));
            timelineApi.slide(0, 100);

        }).bind("finish", function () {
            elapsed.html(format(api.video.duration));
            timelineApi.slide(1, 100);
            root.removeClass("is-seeking");

            // misc
        }).bind("beforeseek", function () {
            progress.stop();

        }).bind("volume", function () {
            volumeApi.slide(api.volumeLevel);


        }).bind("disable", function () {
            var flag = api.disabled;
            timelineApi.disable(flag);
            volumeApi.disable(flag);
            root.toggleClass("is-disabled", api.disabled);

        }).bind("mute", function (e, api, flag) {
            root.toggleClass("is-muted", flag);

        }).bind("error", function (e, api, error) {
            root.removeClass("is-loading").addClass("is-error");

            if (error) {
                error.message = conf.errors[error.code];
                api.error = true;

                var el = $(".fp-message", root);
                $("h2", el).text((api.engine || 'html5') + ": " + error.message);
                $("p", el).text(error.url || api.video.url || api.video.src || conf.errorUrls[error.code]);
                root.unbind("mouseenter click").removeClass("is-mouseover");
            }


            // hover
        }).bind("mouseenter mouseleave", function (e) {
            if (noToggle) return;

            var is_over = e.type == "mouseenter",
               lastMove;

            // is-mouseover/out
            hover(is_over);

            if (is_over) {

                root.bind("pause.x mousemove.x volume.x", function () {
                    hover(true);
                    lastMove = new Date;
                });

                hovertimer = setInterval(function () {
                    if (new Date - lastMove > 5000) {
                        hover(false)
                        lastMove = new Date;
                    }
                }, 100);

            } else {
                root.unbind(".x");
                clearInterval(hovertimer);
            }


            // allow dragging over the player edge
        }).bind("mouseleave", function () {

            if (timelineApi.dragging || volumeApi.dragging) {
                root.addClass("is-mouseover").removeClass("is-mouseout");
            }

            // click
        }).bind("click.player", function (e) {
            if ($(e.target).is(".fp-ui, .fp-engine") || e.flash) {
                e.preventDefault();
                return api.toggle();
            }
        });

        // poster -> background image
        if (conf.poster) root.css("backgroundImage", "url(" + conf.poster + ")");

        var bc = root.css("backgroundColor"),
           has_bg = root.css("backgroundImage") != "none" || bc && bc != "rgba(0, 0, 0, 0)" && bc != "transparent";

        // is-poster class
        if (has_bg && !conf.splash && !conf.autoplay) {

            api.bind("ready stop", function () {
                root.addClass("is-poster").one("progress", function () {
                    root.removeClass("is-poster");
                });
            });

        }

        // default background color if not present
        if (!has_bg && api.forcedSplash) {
            root.css("backgroundColor", "#555");
        }

        $(".fp-toggle, .fp-play", root).click(api.toggle);

        /* controlbar elements */
        $.each(['mute', 'fullscreen', 'unload'], function (i, key) {
            find(key).click(function () {
                api[key]();
            });
        });

        timeline.bind("slide", function (e, val) {
            api.seeking = true;
            api.seek(val * api.video.duration);
        });

        volumeSlider.bind("slide", function (e, val) {
            api.volume(val);
        });

        // times
        find("time").click(function (e) {
            $(this).toggleClass("is-inverted");
        });

        hover(noToggle);

    });

    var focused,
       focusedRoot,
       IS_HELP = "is-help";

    // keyboard. single global listener
    $(document).bind("keydown.fp", function (e) {

        var el = focused,
           metaKeyPressed = e.ctrlKey || e.metaKey || e.altKey,
           key = e.which,
           conf = el && el.conf;

        if (!el || !conf.keyboard || el.disabled) return;

        // help dialog (shift key not truly required)
        if ($.inArray(key, [63, 187, 191, 219]) != -1) {
            focusedRoot.toggleClass(IS_HELP);
            return false;
        }

        // close help / unload
        if (key == 27 && focusedRoot.hasClass(IS_HELP)) {
            focusedRoot.toggleClass(IS_HELP);
            return false;
        }

        if (!metaKeyPressed && el.ready) {

            e.preventDefault();

            // slow motion / fast forward
            if (e.shiftKey) {
                if (key == 39) el.speed(true);
                else if (key == 37) el.speed(false);
                return;
            }

            // 1, 2, 3, 4 ..
            if (key < 58 && key > 47) return el.seekTo(key - 48);

            switch (key) {
                case 38: case 75: el.volume(el.volumeLevel + 0.15); break;        // volume up
                case 40: case 74: el.volume(el.volumeLevel - 0.15); break;        // volume down
                case 39: case 76: el.seeking = true; el.seek(true); break;        // forward
                case 37: case 72: el.seeking = true; el.seek(false); break;       // backward
                case 190: el.seekTo(); break;                                     // to last seek position
                case 32: el.toggle(); break;                                      // spacebar
                case 70: conf.fullscreen && el.fullscreen(); break;               // toggle fullscreen
                case 77: el.mute(); break;                                        // mute
                case 27: el[el.isFullscreen ? "fullscreen" : "unload"](); break;  // esc
            }

        }

    });

    flowplayer(function (api, root) {

        // no keyboard configured
        if (!api.conf.keyboard) return;

        // hover
        root.bind("mouseenter mouseleave", function (e) {
            focused = !api.disabled && e.type == 'mouseenter' ? api : 0;
            if (focused) focusedRoot = root;
        });

        // TODO: add to player-layout.html
        root.append('\
      <div class="fp-help">\
         <a class="fp-close"></a>\
         <div class="fp-help-section fp-help-basics">\
            <p><em>space</em>play / pause</p>\
            <p><em>esc</em>stop</p>\
            <p><em>f</em>fullscreen</p>\
            <p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster <small>(latest Chrome and Safari)</small></p>\
         </div>\
         <div class="fp-help-section">\
            <p><em>&#8593;</em><em>&#8595;</em>volume</p>\
            <p><em>m</em>mute</p>\
         </div>\
         <div class="fp-help-section">\
            <p><em>&#8592;</em><em>&#8594;</em>seek</p>\
            <p><em>&nbsp;. </em>seek to previous\
            </p><p><em>1</em><em>2</em>&hellip;<em>6</em> seek to 10%, 20%, &hellip;60% </p>\
         </div>\
      </div>\
   ');

        if (api.conf.tooltip) {
            $(".fp-ui", root).attr("title", "Hit ? for help").on("mouseout.tip", function () {
                $(this).removeAttr("title").off("mouseout.tip");
            });
        }

        $(".fp-close", root).click(function () {
            root.toggleClass(IS_HELP);
        });

    });

    var VENDOR = $.browser.mozilla ? "moz" : "webkit",
       FS_ENTER = "fullscreen",
       FS_EXIT = "fullscreen-exit",
       FULL_PLAYER,
       FS_SUPPORT = flowplayer.support.fullscreen,
       FS_NATIVE_SUPPORT = typeof document.exitFullscreen == 'function',
       ua = navigator.userAgent.toLowerCase(),
       IS_SAFARI = /(safari)[ \/]([\w.]+)/.exec(ua) && !/(chrome)[ \/]([\w.]+)/.exec(ua);


    // esc button
    $(document).bind(FS_NATIVE_SUPPORT ? "fullscreenchange" : VENDOR + "fullscreenchange", function (e) {
        var el = $(document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || e.target);
        if (el.length && !FULL_PLAYER) {
            FULL_PLAYER = el.trigger(FS_ENTER, [el]);
        } else {
            FULL_PLAYER.trigger(FS_EXIT, [FULL_PLAYER]);
            FULL_PLAYER = null;
        }

    });


    flowplayer(function (player, root) {

        if (!player.conf.fullscreen) return;

        var win = $(window),
           fsSeek = { pos: 0, play: false },
           scrollTop;

        player.isFullscreen = false;

        player.fullscreen = function (flag) {

            if (player.disabled) return;

            if (flag === undefined) flag = !player.isFullscreen;

            if (flag) scrollTop = win.scrollTop();

            if (FS_SUPPORT) {

                if (flag) {
                    if (FS_NATIVE_SUPPORT) {
                        root[0].requestFullscreen();
                    } else {
                        root[0][VENDOR + 'RequestFullScreen'](Element.ALLOW_KEYBOARD_INPUT);
                        if (IS_SAFARI && !document.webkitCurrentFullScreenElement && !document.mozFullScreenElement) { // Element.ALLOW_KEYBOARD_INPUT not allowed
                            root[0][VENDOR + 'RequestFullScreen']();
                        }
                    }

                } else {
                    if (FS_NATIVE_SUPPORT) {
                        document.exitFullscreen();
                    } else {
                        document[VENDOR + 'CancelFullScreen']();
                    }
                }

            } else {
                if (player.engine === "flash" && player.conf.rtmp)
                    fsSeek = { pos: player.video.time, play: player.playing };
                player.trigger(flag ? FS_ENTER : FS_EXIT, [player])
            }

            return player;
        };

        var lastClick;

        root.bind("mousedown.fs", function () {
            if (+new Date - lastClick < 150 && player.ready) player.fullscreen();
            lastClick = +new Date;
        });

        player.bind(FS_ENTER, function (e) {
            root.addClass("is-fullscreen");
            player.isFullscreen = true;

        }).bind(FS_EXIT, function (e) {
            root.removeClass("is-fullscreen");
            player.isFullscreen = false;
            win.scrollTop(scrollTop);

        }).bind("ready", function () {
            if (fsSeek.pos && !isNaN(fsSeek.pos)) {
                setTimeout(function () {
                    player.play(); // avoid hang in buffering state
                    player.seek(fsSeek.pos);
                    if (!fsSeek.play) {
                        setTimeout(function () {
                            player.pause();
                        }, 100);
                    }
                    fsSeek = { pos: 0, play: false };
                }, 250);
            }
        });

    });


    flowplayer(function (player, root) {

        var conf = $.extend({ active: 'is-active', advance: true, query: ".fp-playlist a" }, player.conf),
           klass = conf.active;

        // getters
        function els() {
            return $(conf.query, root);
        }

        function active() {
            return $(conf.query + "." + klass, root);
        }


        player.play = function (i) {
            if (i === undefined) return player.resume();
            if (typeof i === 'number' && !player.conf.playlist[i]) return player;
            else if (typeof i != 'number') player.load.apply(null, arguments);
            player.unbind('resume.fromfirst'); // Don't start from beginning if clip explicitely chosen
            player.video.index = i;
            player.load(typeof player.conf.playlist[i] === 'string' ?
               player.conf.playlist[i].toString() :
               $.map(player.conf.playlist[i], function (item) { return $.extend({}, item); })
            );
            return player;
        };

        player.next = function (e) {
            e && e.preventDefault();
            var current = player.video.index;
            if (current != -1) {
                current = current === player.conf.playlist.length - 1 ? 0 : current + 1;
                player.play(current);
            }
            return player;
        };

        player.prev = function (e) {
            e && e.preventDefault();
            var current = player.video.index;
            if (current != -1) {
                current = current === 0 ? player.conf.playlist.length - 1 : current - 1;
                player.play(current);
            }
            return player;
        };

        $('.fp-next', root).click(player.next);
        $('.fp-prev', root).click(player.prev);

        if (conf.advance) {
            root.unbind("finish.pl").bind("finish.pl", function (e, player) {

                // next clip is found or loop
                var next = player.video.index + 1;
                if (next < player.conf.playlist.length || conf.loop) {
                    next = next === player.conf.playlist.length ? 0 : next;
                    root.removeClass('is-finished');
                    setTimeout(function () { // Let other finish callbacks fire first
                        player.play(next);
                    });

                    // stop to last clip, play button starts from 1:st clip
                } else {
                    root.addClass("is-playing"); // show play button

                    // If we have multiple items in playlist, start from first
                    if (player.conf.playlist.length > 1) player.one("resume.fromfirst", function () {
                        player.play(0);
                        return false;
                    });
                }
            });
        }

        var playlistInitialized = false;
        if (player.conf.playlist.length) { // playlist configured by javascript, generate playlist
            playlistInitialized = true;
            var plEl = root.find('.fp-playlist');
            if (!plEl.length) {
                plEl = $('<div class="fp-playlist"></div>');
                var cntrls = $('.fp-next,.fp-prev', root).eq(0).before(plEl);
                if (!cntrls.length) $('video', root).after(plEl);
            }
            plEl.empty();
            $.each(player.conf.playlist, function (i, item) {
                var href;
                if (typeof item === 'string') {
                    href = item;
                } else {
                    for (var key in item[0]) {
                        if (item[0].hasOwnProperty(key)) {
                            href = item[0][key];
                            break;
                        }
                    }
                }
                plEl.append($('<a />').attr({
                    href: href,
                    'data-index': i
                }));
            });
        }

        if (els().length) {
            if (!playlistInitialized) {
                player.conf.playlist = [];
                els().each(function () {
                    var src = $(this).attr('href');
                    $(this).attr('data-index', player.conf.playlist.length);
                    player.conf.playlist.push(src);
                });
            }

            /* click -> play */
            root.on("click", conf.query, function (e) {
                e.preventDefault();
                var el = $(e.target).closest(conf.query);
                var toPlay = Number(el.attr('data-index'));
                if (toPlay != -1) {
                    player.play(toPlay);
                }
            });

            // playlist wide cuepoint support
            var has_cuepoints = els().filter("[data-cuepoints]").length;

            // highlight
            player.bind("load", function (e, api, video) {
                var prev = active().removeClass(klass),
                   prevIndex = prev.attr('data-index'),
                   index = video.index = player.video.index || 0,
                   el = $('a[data-index="' + index + '"]', root).addClass(klass),
                   is_last = index == player.conf.playlist.length - 1;
                // index
                root.removeClass("video" + prevIndex).addClass("video" + index).toggleClass("last-video", is_last);

                // video properties
                video.index = api.video.index = index;
                video.is_last = api.video.is_last = is_last;

                // cuepoints
                if (has_cuepoints) player.cuepoints = el.data("cuepoints");


                // without namespace callback called only once. unknown rason.
            }).bind("unload.pl", function () {
                active().toggleClass(klass);

            });

        }

        if (player.conf.playlist.length) {
            // disable single clip looping
            player.conf.loop = false;
        }


    });

    var CUE_RE = / ?cue\d+ ?/;

    flowplayer(function (player, root) {

        var lastTime = 0;

        player.cuepoints = player.conf.cuepoints || [];

        function setClass(index) {
            root[0].className = root[0].className.replace(CUE_RE, " ");
            if (index >= 0) root.addClass("cue" + index);
        }

        player.bind("progress", function (e, api, time) {

            // avoid throwing multiple times
            if (lastTime && time - lastTime < 0.015) return lastTime = time;
            lastTime = time;

            var cues = player.cuepoints || [];

            for (var i = 0, cue; i < cues.length; i++) {

                cue = cues[i];
                if (!isNaN(cue)) cue = { time: cue };
                if (cue.time < 0) cue.time = player.video.duration + cue.time;
                cue.index = i;

                // progress_interval / 2 = 0.125
                if (Math.abs(cue.time - time) < 0.125 * player.currentSpeed) {
                    setClass(i);
                    root.trigger("cuepoint", [player, cue]);
                }

            }

            // no CSS class name
        }).bind("unload seek", setClass);

        if (player.conf.generate_cuepoints) {

            player.bind("load", function () {

                // clean up cuepoint elements of previous playlist items
                $(".fp-cuepoint", root).remove();

            }).bind("ready", function () {

                var cues = player.cuepoints || [],
                   duration = player.video.duration,
                   timeline = $(".fp-timeline", root).css("overflow", "visible");

                $.each(cues, function (i, cue) {

                    var time = cue.time || cue;
                    if (time < 0) time = duration + cue;

                    var el = $("<a/>").addClass("fp-cuepoint fp-cuepoint" + i)
                       .css("left", (time / duration * 100) + "%");

                    el.appendTo(timeline).mousedown(function () {
                        player.seek(time);

                        // preventDefault() doesn't work
                        return false;
                    });

                });

            });

        }

    });
    flowplayer(function (player, root, engine) {

        var track = $("track", root),
           conf = player.conf;

        if (flowplayer.support.subtitles) {

            player.subtitles = track.length && track[0].track;

            // use native when supported
            if (conf.nativesubtitles && conf.engine == 'html5') return;
        }

        // avoid duplicate loads
        track.remove();

        var TIMECODE_RE = /^(([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3}) --\> (([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3})(.*)/;

        function seconds(timecode) {
            var els = timecode.split(':');
            if (els.length == 2) els.unshift(0);
            return els[0] * 60 * 60 + els[1] * 60 + parseFloat(els[2].replace(',', '.'));
        }

        player.subtitles = [];

        var url = track.attr("src");

        if (!url) return;

        $.get(url, function (txt) {

            for (var i = 0, lines = txt.split("\n"), len = lines.length, entry = {}, title, timecode, text, cue; i < len; i++) {

                timecode = TIMECODE_RE.exec(lines[i]);

                if (timecode) {

                    // title
                    title = lines[i - 1];

                    // text
                    text = "<p>" + lines[++i] + "</p><br/>";
                    while ($.trim(lines[++i]) && i < lines.length) text += "<p>" + lines[i] + "</p><br/>";

                    // entry
                    entry = {
                        title: title,
                        startTime: seconds(timecode[1]),
                        endTime: seconds(timecode[2] || timecode[3]),
                        text: text
                    };

                    cue = { time: entry.startTime, subtitle: entry };

                    player.subtitles.push(entry);
                    player.cuepoints.push(cue);
                    player.cuepoints.push({ time: entry.endTime, subtitleEnd: title });

                    // initial cuepoint
                    if (entry.startTime === 0) {
                        player.trigger("cuepoint", cue);
                    }

                }

            }

        }).fail(function () {
            player.trigger("error", { code: 8, url: url });
            return false;
        });

        var wrap = $("<div class='fp-subtitle'/>", root).appendTo(root),
           currentPoint;

        player.bind("cuepoint", function (e, api, cue) {

            if (cue.subtitle) {
                currentPoint = cue.index;
                wrap.html(cue.subtitle.text).addClass("fp-active");

            } else if (cue.subtitleEnd) {
                wrap.removeClass("fp-active");
                currentPoint = cue.index;
            }

        }).bind("seek", function (e, api, time) {
            // Clear future subtitles if seeking backwards
            if (currentPoint && player.cuepoints[currentPoint] && player.cuepoints[currentPoint].time > time) {
                wrap.removeClass('fp-active');
                currentPoint = null;
            }
            $.each(player.cuepoints || [], function (i, cue) {
                var entry = cue.subtitle;
                //Trigger cuepoint if start time before seek position and end time nonexistent or in the future
                if (entry && currentPoint != cue.index) {
                    if (time >= cue.time && (!entry.endTime || time <= entry.endTime)) player.trigger("cuepoint", cue);
                } // Also handle cuepoints that act as the removal trigger
                else if (cue.subtitleEnd && time >= cue.time && cue.index == currentPoint + 1) player.trigger("cuepoint", cue);
            });

        });

    });



    flowplayer(function (player, root) {

        var id = player.conf.analytics, time = 0, last = 0;

        if (id) {

            // load Analytics script if needed
            if (typeof _gat == 'undefined') $.getScript("//google-analytics.com/ga.js");

            function track(e) {

                if (time && typeof _gat != 'undefined') {
                    var tracker = _gat._getTracker(id),
                       video = player.video;

                    tracker._setAllowLinker(true);

                    // http://code.google.com/apis/analytics/docs/tracking/eventTrackerGuide.html
                    tracker._trackEvent(
                       "Video / Seconds played",
                       player.engine + "/" + video.type,
                       root.attr("title") || video.src.split("/").slice(-1)[0].replace(TYPE_RE, ''),
                       Math.round(time / 1000)
                    );
                    time = 0;
                }

            }

            player.bind("load unload", track).bind("progress", function () {

                if (!player.seeking) {
                    time += last ? (+new Date - last) : 0;
                    last = +new Date;
                }

            }).bind("pause", function () {
                last = 0;
            });

            $(window).unload(track);

        }

    }); var isIeMobile = /IEMobile/.test(UA);
    if (flowplayer.support.touch || isIeMobile) {

        flowplayer(function (player, root) {
            var isAndroid = /Android/.test(UA) && !/Firefox/.test(UA) && !/Opera/.test(UA),
                isSilk = /Silk/.test(UA);

            // custom load for android
            if (isAndroid) {
                player.conf.videoTypePreference = "mp4"; // Android has problems with webm aspect ratio
                var originalLoad = player.load;
                player.load = function (video, callback) {
                    var ret = originalLoad.apply(player, arguments);
                    player.trigger('ready', player, player.video);
                    return ret;
                };
            }

            // hide volume
            if (!flowplayer.support.volume) {
                root.addClass("no-volume no-mute");
            }
            root.addClass("is-touch");
            root.find('.fp-timeline').data('api').disableAnimation();

            // fake mouseover effect with click
            var hasMoved = false;
            root.bind('touchmove', function () {
                hasMoved = true;
            }).bind("touchend click", function (e) {
                if (hasMoved) { //not intentional, most likely scrolling
                    hasMoved = false;
                    return;
                }

                if (player.playing && !root.hasClass("is-mouseover")) {
                    root.addClass("is-mouseover").removeClass("is-mouseout");
                    return false;
                }

                if (player.paused && root.hasClass("is-mouseout")) {
                    player.toggle();
                }

                if (player.paused && isIeMobile) { // IE on WP7 need an additional api.play() call
                    $('video', root)[0].play();
                }

            });

            // native fullscreen
            if (player.conf.native_fullscreen && ($.browser.webkit || $.browser.safari)) {
                player.fullscreen = function () {
                    var video = $('video', root);
                    video[0].webkitEnterFullScreen();
                    video.one('webkitendfullscreen', function () {
                        video.prop('controls', true).prop('controls', false);
                    });
                };
            }


            // Android browser gives video.duration == 1 until second 'timeupdate' event
            (isAndroid || isSilk) && player.bind("ready", function () {

                var video = $('video', root);
                video.one('canplay', function () {
                    video[0].play();
                });
                video[0].play();

                player.bind("progress.dur", function () {

                    var duration = video[0].duration;

                    if (duration !== 1) {
                        player.video.duration = duration;
                        $(".fp-duration", root).html(format(duration));
                        player.unbind("progress.dur");
                    }
                });
            });


        });

    }

    flowplayer(function (player, root) {

        // no embedding
        if (player.conf.embed === false) return;

        var conf = player.conf,
           ui = $(".fp-ui", root),
           trigger = $("<a/>", { "class": "fp-embed", title: 'Copy to your site' }).appendTo(ui),
           target = $("<div/>", { 'class': 'fp-embed-code' })
              .append("<label>Paste this HTML code on your site to embed.</label><textarea/>").appendTo(ui),
           area = $("textarea", target);

        player.embedCode = function () {

            var video = player.video,
               width = video.width || root.width(),
               height = video.height || root.height(),
               el = $("<div/>", { 'class': 'flowplayer', css: { width: width, height: height } }),
               tag = $("<video/>").appendTo(el);

            // configuration
            $.each(['origin', 'analytics', 'logo', 'key', 'rtmp'], function (i, key) {
                if (conf[key]) el.attr("data-" + key, conf[key]);
            });

            // sources
            $.each(video.sources, function (i, src) {
                tag.append($("<source/>", { type: "video/" + src.type, src: src.src }));
            });

            var scriptAttrs = { src: "//embed.flowplayer.org/5.4.3/embed.min.js" };
            if ($.isPlainObject(conf.embed)) {
                scriptAttrs['data-swf'] = conf.embed.swf;
                scriptAttrs['data-library'] = conf.embed.library;
                scriptAttrs['src'] = conf.embed.script || scriptAttrs['src'];
                if (conf.embed.skin) { scriptAttrs['data-skin'] = conf.embed.skin; }
            }

            var code = $("<foo/>", scriptAttrs).append(el);
            return $("<p/>").append(code).html().replace(/<(\/?)foo/g, "<$1script");
        };

        root.fptip(".fp-embed", "is-embedding");

        area.click(function () {
            this.select();
        });

        trigger.click(function () {
            area.text(player.embedCode());
            area[0].focus();
            area[0].select();
        });

    });


    $.fn.fptip = function (trigger, active) {

        return this.each(function () {

            var root = $(this);

            function close() {
                root.removeClass(active);
                $(document).unbind(".st");
            }

            $(trigger || "a", this).click(function (e) {

                e.preventDefault();

                root.toggleClass(active);

                if (root.hasClass(active)) {

                    $(document).bind("keydown.st", function (e) {
                        if (e.which == 27) close();

                        // click:close
                    }).bind("click.st", function (e) {
                        if (!$(e.target).parents("." + active).length) close();
                    });
                }

            });

        });

    };

}(jQuery);
flowplayer(function (e, o) { function a(e) { var o = n("<a/>")[0]; return o.href = e, o.hostname } var n = jQuery, t = e.conf, i = t.swf.indexOf("flowplayer.org") && t.e && o.data("origin"), l = i ? a(i) : location.hostname, r = t.key; if ("file:" == location.protocol && (l = "localhost"), e.load.ed = 1, t.hostname = l, t.origin = i || location.href, i && o.addClass("is-embedded"), "string" == typeof r && (r = r.split(/,\s*/)), r && "function" == typeof key_check && key_check(r, l)) t.logo && o.append(n("<a>", { "class": "fp-logo", href: i }).append(n("<img/>", { src: t.logo }))); else { var s = n("<a/>").attr("href", "http://flowplayer.org").appendTo(o); n(".fp-controls", o), e.bind("pause resume finish unload", function (e, o) { var a = o.video.src ? o.video.src.indexOf("://my.flowplayer.org") : -1; /pause|resume/.test(e.type) && "flash" != o.engine && 4 != a && 5 != a ? (s.show().css({ position: "absolute", left: 16, bottom: 36, zIndex: 99999, width: 100, height: 20, backgroundImage: "url(" + [".png", "logo", "/", ".net", ".cloudfront", "d32wqyuo10o653", "//"].reverse().join("") + ")" }), o.load.ed = s.is(":visible"), o.load.ed || o.pause()) : s.hide() }) } });;
/* -----------------------------*/

/********************************************************************
* FlowPlayerAdverts.js
* Usage:
* - Populate a Config.videoConfig object with required settings
* - var myVideo = new VideoManager(...)
* - myVideo.RenderPlayer("dom-element-to-render-to")
*
* FlowPlayer API doc: http://flowplayer.org/docs/api.html
* 
********************************************************************/
// if console is not defined, e.g., Firebug console is not enabled or Non-Firefox browser

if (typeof console == 'undefined') {
    var console = {};
   console.log = function(msg){
        return;
    };
}
// console now definitely exists, add some stuff to it
console.videolog = function (message, logid) {
    console.log('autoplay-' + (logid !== undefined ? logid.toString() : "x") + ': ' + message);
};


Config = {};
Config.VideoConfig = {};

//Config.VideoConfig.VideoPlayerWidth = 620;
//Config.VideoConfig.VideoPlayerHeight = 385;
//Config.VideoConfig.PlayerBackgroundColourHex = '#000000';
//Config.VideoConfig.VideoUrlFull = "";

//Wait until DOM is ready before reacting to pre-rolls
$(function () {
    //console.log('starting flowplayer customisations');

    var videoIsInPlayableArea = function ($element) {

        var win = $(window);

        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = $element.offset();
        bounds.right = bounds.left + $element.outerWidth();
        bounds.bottom = bounds.top + $element.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };

    //flowplayer doesn't support auto-mute out of the box for both html and flash engine, so let's implement ourselves
    $('.flowplayer[data-mute=true]').each(function () {
        $(this).flowplayer().bind('ready', function (e, player, video) {
            console.log('muted video because of automute (data-mute was true)');
            player.mute(true);
        });
    });

    //we don't like the fact flowplayer remembers mute setting, so if we're not automute, don't use it
    $('.flowplayer').not('[data-mute=true]').not('.autopreview').each(function () {
        $(this).flowplayer().bind('ready', function (e, player, video) {
            console.log('un muted just in case (data-mute was not true)');
            player.mute(false);
        });
    });



    // All videos: track playback progress.
	$('.flowplayer').each(function(i) {
		var item = $(this);
		var api = item.flowplayer();

		api.bind("progress", function(e, player, time) { // NOTE: Manual scrubbing triggers progress event, so this alone does not strictly guarantee video is watched.

			var progress = (time / player.video.duration) * 100; // % progress, from time/duration in seconds.
			//console.log(parseInt(progress));

			var progressTrackingMax = 100;
			var progressTrackingIncrement = 25;

			if (player.nextTrackingThreshold > progressTrackingMax) {
				return;
			}

			if (player.nextTrackingThreshold == null) {
				player.nextTrackingThreshold = progressTrackingIncrement;
			}

			// When progress reaches a threshold we want to track, track it once.
			if (progress >= player.nextTrackingThreshold) {
				trackProgressIncremental(player, item);
				player.nextTrackingThreshold += progressTrackingIncrement;
			}

		});
	});


    //for autoplay videos, stop playing on blur, and start again on focus, unless user has initiated play
    $('.flowplayer[data-cnautoplay=true]').each(function (i) {
        var $item = $(this);
        var api = $item.flowplayer();
        var thisIndex = i.toString();

        api.bind('ready', function (e, player, video) {
            console.videolog('found an autoplay video...');
            console.videolog('...making sure it pauses and plays on blur...');

            //function to take a player, detect if its in the viewport and toggle play/pause. will also setup pausing/resume on window blur if starting to play automatically
            var detectScrollAndPlay = function ($element, ply, logid) {

                if (videoIsInPlayableArea($element) === true) {
                	console.videolog('video is in viewport...', logid);

                    //only play if window has focus. if not an event will be set in a moment to play when window gets focus again
                    if (!ply.playing && document.hasFocus()) {
                    	console.videolog('...and viewport has focus, going to play.', logid);

                    	setTrackedPlayEvent(player, "Play (auto)");

                        ply.play();
                    }

                    //on window blur, pause this video
                    $(window).on('blur.autoplayfocus' + logid + '.autoplaytrue' + logid, { ply: ply, logid: logid }, function (event) {
                        var ply = event.data.ply;
                        var logid = event.data.logid;
                        console.videolog('window blurred, stopped autoplay', logid);
                        if (ply.playing)

                        	setTrackedPauseEvent(player, "Pause (blur)");

                            ply.pause();
                    });

                    //start playing again when window in focus
                    $(window).on('focus.autoplayfocus' + logid + '.autoplaytrue' + logid, { ply: ply, logid: logid }, function (event) {
                        var ply = event.data.ply;
                        var logid = event.data.logid;
                        console.videolog('window has focus, playing', logid);
	                    if (!ply.playing)

	                    	setTrackedPlayEvent(player, "Play (focus)");

                            ply.play();
                    });
                }
                else {
                    console.videolog('autoplaying video is outside viewport, going to pause...', logid);
                    if (ply.playing)

                    	setTrackedPauseEvent(player, "Pause (viewport)");

                        ply.pause();
                    $(window).off('.autoplayfocus' + logid);
                }
            };

            //start playing video when it's in viewport
            console.log('...making sure it pauses and plays when in and out of viewport...');
            $(window).on('scroll.autoplaytrue' + thisIndex,
                { item: $item, player: player, index: thisIndex },
                $.throttle(500, true,
                    function (event) {
                        return detectScrollAndPlay(event.data.item, event.data.player, event.data.index);
                    }
             )
            );
            detectScrollAndPlay($item, player, thisIndex);

            //unbind everything when user starts interacting as they may not want us to override their play/pause action
            $item.on('click', { index: thisIndex }, function (event) {
                console.videolog('unbinding all events, disabling autoplay', event.data.index);
                $(window).off('.autoplaytrue' + event.data.index);
            });

            console.log('...finished with autoplaying video.');
        });
    });


    // Non--autoplay videos: track when play button visible.
	// Based on function for autoplay videos above.
    $('.flowplayer').not('[data-cnautoplay=true]').each(function (i) {
		var item = $(this);
		var api = item.flowplayer();
		var thisIndex = i.toString();

		api.bind('ready', function(e, player, video) {
			//console.videolog('found an autoplay video...');
			//console.videolog('...making sure it is tracked for scrolling...');

			// Detect and track if play buton visible.
			var detectScrollAndTrack = function(element, ply, logid) {

				if (isPlayButtonVisible(element) === true) {
					//console.videolog('play button visible...', logid);

					// Only consider play button visible if window has focus.
					if (!ply.playing && document.hasFocus()) {
						//console.videolog('...and viewport has focus, going to track.', logid);

						if (isPlayButtonVisible(element) === true) {
							trackPlayButtonVisible(element);
						}

					}

				}

			};

			//start playing video when it's in viewport
			//console.log('...making sure it detects when in and out of viewport...');
			$(window).on('scroll.autoplayfalse' + thisIndex,
				{ item: item, player: player, index: thisIndex },
				$.throttle(700, true,
					function(event) {
						return detectScrollAndTrack(event.data.item, event.data.player, event.data.index);
					}
				)
			);
			detectScrollAndTrack(item, player, thisIndex);

			//console.log('...finished with non-autoplaying video.');
		});
	});


    //for autopreview videos, we want to play them immediately on mute, then offer a 'replay with sound' button
    //on load, play video automatically, on mute, with loop, and add overlay
    $('body:not(.isTablet,.isMobile) .flowplayer.autopreview').each(function () {
        var $item = $(this);
        var api = $item.flowplayer();
        //todo: turn off pre-rolls
        
        //it's nice to loop autopreview videos
        $('video', $item).attr('loop', 'true');

        api.bind('ready', function (e, player, video) {

            //only autopreview if not using flash since flash sucks the fun out
            if (player.engine === 'flash')
                return;

            //play right away

            //hide controls
            $('.fp-ui', $item).css('visibility', 'hidden');

            //ensure video will be muted
            api.bind('progress.autopreviewvideo', function (e, player) {
                console.log('muted');
                player.mute(true); //dirty hack to do this everytime progress changes because some browsers were not muting when this was called on load!
            });

            //play
            player.play();

            //stop playing when window out of focus
            $(window).on('blur.autopreviewvideo',function () {
                player.pause();
            });

            //start playing again when window in focus
            $(window).on('focus.autopreviewvideo', function () {
                player.play();
            });

            //add 'play with sound' overlay'
            var overlay = $('<div class="autopreview-play"><p class="playcommand">Play with sound</p></div>');
            overlay.bind('click', function () {
                //todo: turn back on pre-rolls

                //stop looping
                $('video', $item).attr('loop', 'false');
                //rewind
                player.seek(0);
                //turn off mute
                console.log('un-muted');
                player.mute(false);
                //turn controls back on
                $('.fp-ui', $item).css('visibility', 'visible');
                //hide overlay
                overlay.remove();

                //dont pause on window blur
                //TODO: this will turn it off for all autopreviewvideos in the window, so perhaps use a unique namespace
                $(window).off('.autopreviewvideo');
                player.unbind('.autopreviewvideo');
            });
            $item.append(overlay);
        });

    });

    $('.flowplayer').each(function () {

        $(this).flowplayer().bind('resume', function (e, player, video) { // NOTE: Any play event is a resume event.
			//if (!$(this).data("cnReportedPlay")) { // Track only the first play event for a video.
        		//$(this).data("cnReportedPlay", true);
				trackPlay($(this), player);
			//}
        });

		$(this).flowplayer().bind('pause', function (e, player, video) {
			trackPause($(this), player);
		});

    });

	// Helpers

	// Get ID of a video in a flowplayer event e.g. resume.
	// Brand-specific ID for a video in Video Library.
	var getVideoIdByEvent = function(player) {
		return player.data("videosourceandid");
	};

	/* GA tracking */

	/* FlowPlayer GA custom events:

		category=Video
		optionalLabel=VideoLibrary{0}

		action=Play
		action=Play button visible
		action=Play (auto)
		action=Pause
		action=Pause (blur)
		action=Play (focus)
		action=Pause (viewport)
		action=Watched {25/50/75/100%}
		action=Pause (end)

		NOTE: Pause event also occurs automatically at end of video.

	*/

	$(window).unload(function () { // NOTE: Unload is very unreliable, because scripts and resulting HTTP requests may not have time to execute. Collected data will be a partial picture.

		// All videos: track playback progress.
		$('.flowplayer').each(function (i) {
			var item = $(this);
			var api = item.flowplayer();

			trackProgress(api, item);
		});

	});

	// Play

	var setTrackedPlayEvent = function(player, eventType) {
		if (player) {
			player.cnTrackedPlayEvent = eventType;
		}
	};

	var getTrackedPlayEvent = function(player) {
		if (player) {
			return player.cnTrackedPlayEvent;
		}
		return null;
	};

	var trackPlay = function(event, player) {

		var eventType = getTrackedPlayEvent(player);
		if (eventType == null) {
			eventType = "Play";
		}

		if (window.AnalyticsUtils) {
			window.AnalyticsUtils.trackEvent("Video", eventType, getVideoIdByEvent(event), null);
		}

	};

	// Pause

	var setTrackedPauseEvent = function(player, eventType) {
		if (player) {
			player.cnTrackedPauseEvent = eventType;
		}
	};

	var getTrackedPauseEvent = function(player) {
		if (player) {
			return player.cnTrackedPauseEvent;
		}
		return null;
	};

	var trackPause = function(event, player) {

		var eventType = getTrackedPauseEvent(player);
		if (eventType == null) {
			eventType = "Pause";

			if (player.video.time === player.video.duration) {
				eventType += " (end)";
			}
		}

		if (window.AnalyticsUtils) {
			window.AnalyticsUtils.trackEvent("Video", eventType, getVideoIdByEvent(event), null);
		}

	};

	// Play button visible

	var lastVideoIdTrackedAsPlayButtonVisible;

	var trackPlayButtonVisible = function(event) {

		var videoId = getVideoIdByEvent(event);

		if (lastVideoIdTrackedAsPlayButtonVisible === videoId) {
			return; // Only track when the video that's in the viewport changes.
		}
		lastVideoIdTrackedAsPlayButtonVisible = videoId;

		var eventType = "Play button visible";

		if (window.AnalyticsUtils) {
			window.AnalyticsUtils.trackEvent("Video", eventType, videoId, null);
		}
	};

	var isPlayButtonVisible = function(element) { // Based on videoIsInPlayableArea.

		var win = $(window);

		var viewport = {
			top: win.scrollTop(),
			left: win.scrollLeft()
		};

		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = element.offset();
		bounds.right = bounds.left + element.outerWidth();
		bounds.bottom = bounds.top + element.outerHeight();

		// TODO: Improve accuracy of detection, and consider definition of play button because video can be clicked even when button icon is below viewport.
		var playButtonHeightAboveCentre = 50; // Approx 100px high button.

		var playButtonOffsetTop = (element.outerHeight() * 0.5) + playButtonHeightAboveCentre; // Roughly centre, half way down player.

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < (bounds.top + playButtonOffsetTop) || viewport.top > (bounds.bottom - playButtonHeightAboveCentre)));
	};

	// Progress

	var trackProgressIncremental = function (player, element) {

		if (player.nextTrackingThreshold == null) {
			return;
		}

		if (window.AnalyticsUtils) {
			window.AnalyticsUtils.trackEvent("Video", "Watched " + player.nextTrackingThreshold + "%", getVideoIdByEvent(element), null);
		}
	};

	var trackProgress = function (player, element) {
		if (window.AnalyticsUtils) {
			console.log(getVideoIdByEvent(element) + " @ " + player.video.time);
			window.AnalyticsUtils.trackEvent("Video", "TimeWatched", getVideoIdByEvent(element), player.video.time);
		}
	};

});




//Config.IsAppleDevice = function () {
//    return (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPhone/i));
//};

//// Static variables/methods below
//// -----------------------------------

//Config.prerolls = [];
//Config.postrolls = [];

////Inserts a preroll video
//Config.InsertPreRoll = function (video_url, link_url) {
//    if (typeof (console) != 'undefined' && typeof (console.log) == 'function') {
//        console.log('Insert Pre Roll');
//    }
//    var preroll = Config.CreateVideoAdvert(video_url, link_url);
//    Config.prerolls.splice(0, 0, Config.getShortAdvertismentSplash());
//    Config.prerolls.splice(0, 0, preroll);
//}

////Inserts a postroll video
//Config.InsertPostRoll = function (video_url, link_url) {
//    if (typeof (console) != 'undefined' && typeof (console.log) == 'function') {
//        console.log('Insert Post Roll');
//    }
//    var postroll = Config.CreateVideoAdvert(video_url, link_url);
//    Config.postrolls.push(Config.getShortAdvertismentSplash());
//    Config.postrolls.push(postroll);
//}

//// Creates a clip object for the specified video and linking to the specified URL
//// Created as an advert so has particular settings to prevent user skipping etc.
//Config.CreateVideoAdvert = function (video_url, link_url) {
//    // Add prefix to relative URLs
//    if (!Config.IsAbsoluteUrl(video_url)) {
//        video_url = Config.VideoConfig.RelativePathPrefix + videoUrls[vidIdx];
//    }

//    // Complete URI to video (e.g. http://www.test.com/video/test.flv)
//    var videoUrlFull = video_url;

//    // URI up to but not including the filename (e.g. http://www.test.com/video/)
//    var videoPath = videoUrlFull.substring(0, videoUrlFull.lastIndexOf('/') + 1);

//    // Just the filename (e.g. test.flv)
//    var videoFilename = videoUrlFull.substring(videoUrlFull.lastIndexOf('/') + 1, videoUrlFull.lastIndexOf('.'));
//    if (typeof (console) != 'undefined' && typeof (console.log) == 'function') {
//        console.log("Creating advert clip");
//    }



//    var videoClip = {
//        url: videoUrlFull,
//        onBeforePause: function () {
//            return false;
//        },
//        onBeforeBegin: function () {
//            this.getPlugin("canvas").css({
//                backgroundColor: Config.VideoConfig.PlayerBackgroundColourHex,
//                backgroundGradient: 'none'
//            });
//        },
//        onFinish: function () {
//            this.getControls().show();
//        },
//        autoBuffering: false, // Video will be buffered when splash screen is visible
//        autoPlay: true,
//        scaling: 'fit',
//        onStart: function () {
//            if (typeof (console) != 'undefined' && typeof (console.log) == 'function') {
//                console.log('Advert started');
//            }
//        }
//    };

//    // Disable the URL resolvers from the RTMP/Akamai plugins if we have a vanilla HTTP stream
//    if (Config.IsRtmpStream(videoUrlFull))
//        videoClip.provider = 'rtmp';
//    else
//        videoClip.urlResolvers = null;

//    // Where applicable, set the video link so that it can be clicked on
//    if (typeof link_url != 'undefined') {
//        videoClip.linkUrl = link_url;
//        videoClip.linkWindow = "";
//    }

//    return videoClip;
//}

//// Clip for the advert splash (image with 'ADVERTISEMENT' text)
//Config.getShortAdvertismentSplash = function () {
//    return {
//        //url: Config.VideoConfig.AdvertSplashImage,
//        url: "http://www.condenast.co.uk/sponsorships/short-advertisement.gif",
//        duration: 2,
//        onBeforePause: function () {
//            return false;
//        },
//        onBeforeBegin: function () {
//            this.getControls().hide();
//        },
//        scaling: 'orig',
//        autoPlay: true
//    };
//};

////TODO: Get rid of this when possible, here for backwards compatibility
////whilst Adidas advert is running (14/01/2010).
//function InsertPreRoll(video_url, link_url) {
//    return Config.InsertPreRoll(video_url, link_url);
//}

//function InsertPostRoll(video_url, link_url) {
//    return Config.InsertPostRoll(video_url, link_url);
//};
/* -----------------------------*/
// REQUIRE: Utilities.js
(function () {
    var AD_SLOT_CSS_SELECTOR_OUTER = ".cnGptSlotOuter";
    var AD_SLOT_CSS_SELECTOR_INNER = ".cnGptSlotInner";
    var FAKE_SIZE_TO_REAL_SIZE_MAP = {
        "3x3": "300x250",
        "300x251": "300x250"
    };
    var NETWORK_CODE_FOR_OPENX = 5574;
    var EMPTY_KEY_VALUE_VALUES = "CN0";

    var EVENT_NAMES = {
        RENDER_ENDED: "RenderEnded",
        JUMPINESS_MINIMISED_RENDER_ENDED: "JumpinessMinimisedRenderEnded",
        SIZE_CHANGED: "SizeChanged"
    };

    // HACKS - Nasty hacks to workaround browser problems
    var nonNullUserAgent = navigator.userAgent || "";
    var hacks_DeviceDoesNotComputeLayoutOnClassChange = (
        Boolean(nonNullUserAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i)) // iOS7, definitely iOS7.0.3
        ||
        Boolean(/Safari/.test(nonNullUserAgent) && /Macintosh/.test(nonNullUserAgent) && !(/Chrome/.test(nonNullUserAgent))) // Mac Safari, definitely 7 and 8(beta), possibly other Safaris :'(
    );

    // YOU SHOULD NOT BE REFERENCING THIS OUTSIDE OF THIS FILE. Use GptAdSlots.setSlotAsFullWidth or GptAdSlots.isSlotFullWidth 
    var AD_SLOT_FULL_WIDTH_CSS_CLASS = "cnGptFullWidthSlot";    
    var AD_SLOT_NOTFULL_WIDTH_CSS_CLASS = "cnGptNotFullWidthSlot";
    var INCONTENT_AD_ID_PREFIX = "incontentAd_";

    var slotNameToAdvertInfoMap = {};
    var slotNameToGoogleSlotMap = {};
    var inflightAdSlots = {};
    var totalSlots = null;
    var readySlots = [];
    var gptHasBeenCalled = false;
    var optionsAfterPageLoad = null;
    var remainingDependencyScriptSrcs = 0;

    var DEBUG_CONFIRM_REGISTER = debugRegisterHashParam("gptConfirmRegister");
    var DEBUG_CLICK_TO_LOAD = debugRegisterHashParam("gptLoadOnClick");
    var DEBUG_NO_DELETE_EMPTY_QUERY_STRING = debugRegisterHashParam("gptnodelete");

    function initialiseBeforePageLoad(options) {
        options = $.extend(
            {
                afterGptScriptSrcs: []     // an array of { src, waitForObjectName } that should be added as script sources after GPT has been put on the page
            }, options);
        window.googletag = window.googletag || {};
        googletag.cmd = googletag.cmd || [];

        addGptAndDependencyScriptToPage(options.afterGptScriptSrcs);
        initThirdPartySupport();
    }

    function log(text) {
        window.log("GptAdSlots", text);
    }
    // log verbose, for extra spammy messages
    function logv(text) {
        window.log("GptAdSlotsVerbose", text);
    }
    function logError(text) {
        window.log("Error GptAdSlots", text);

        if (window.console && window.console.log) {
            window.console.log("Error GptAdSlots", text);
        }
    }
    
   

    function initThirdPartySupport() {
        window.cn_rubicon_resize = rubicon_adSizeChanged;
    }

    function updateSlotKeyValues(slotName, options) {
        options = $.extend(
            {
                keysToKeep: null                 // clear all key values, except those in the list. If null, no keys are removed
                , keysToDelete: []               // an array of key value keys to remove completely
                , keyValuesToReplace: {}         // a map of key to values to completely replace
                // TODO - add if required
                // keysValuesToMerge: {}         // a map of key to values to merge with the existing key values for the slot
                // 
            }, options);

        var slotInfo = slotNameToAdvertInfoMap[slotName];
        if (slotInfo == null) {
            
            log("Slot '" + slotName + "' was not defined, so cannot be updated.");
            return;
        }

        if (options.keysToKeep != null) {
            var keysToKeepLookup = convertArrayToMap(options.keysToKeep);
            var existingKeys = convertMapToArray(slotInfo.keyValues);
            for (var i = 0; i < existingKeys.length; i++) {
                var keyToCheck = existingKeys[i];
                if (keysToKeepLookup[keyToCheck] == null) {
                    delete slotInfo.keyValues[keyToCheck];
                }
            }
        }

        for (var i = 0; i < options.keysToDelete.length; i++) {
            var keyToDelete = options.keysToDelete[i];
            delete slotInfo.keyValues[keyToDelete];
        }

        for (var key in options.keyValuesToReplace) {
            var values = options.keyValuesToReplace[key];
            if (values == null) {
                values = [];
            } else if (values.constructor.name == "Array") {
                // fine, leave it as values
            } else {
                // convert it to an array with a single string value
                values = [values + ""];
            }
            slotInfo.keyValues[key] = values.slice(0);
        }

    }

    function updateSlotSizes(slotName, options) {
        options = $.extend(
           {
               sizes: undefined                   // A CSV string of sizes that should REPLACE the slot's existing sizes. To specify no sizes, use empty-string or null
               // Implement as needed
               // containerMinWidthToSizeMap A map of sizes for different container widths to REPLACE the slot's existing containerMinWidthToSizeMap
               // viewportMinWidthToSizeMap  A map of sizes for different viewport widths to REPLACE the slot's existing viewportMinWidthToSizeMap
           }, options);

        var slotInfo = slotNameToAdvertInfoMap[slotName];

        if (slotInfo == null) {
            logError("Slot '" + slotName + "' was not defined, so cannot be updated.");
            return;
        }

        if (options.sizes !== undefined) {
            slotInfo.sizes = options.sizes;
        }
    }

    function register(slotName, adUnitPath, options) {
        if (DEBUG_CONFIRM_REGISTER() && !confirm(window.location.href + "\n\nDo you want to register '" + slotName + "'?")) {
            return;
        }
        if (gptHasBeenCalled) {
            throw "GPT has already been called. Cannot ad more slots.";
        }
        if (adUnitPath == null) {
            throw "Ad unit path cannot be null when registering '" + slotName + "'.";
        }
        if (slotName == null) {
            throw "Slotname cannot be null.";
        }

        if (typeof (UTILITIES) != "undefined" && UTILITIES != null && UTILITIES.getQueryStringParameterByName('displayAdverts') === 'false') {
            removeAdSlotElement(slotName);
            if (UTILITIES.isFunction(log)) {
                log("displayAdverts=false, so no GPT ads");
            }
            return;
        }
        
        options = $.extend(
            {
                _: null
                , delaySlot: false                 // Whether to delay loading of this slot until the slot wants to be displayed (enabling this will exclude this slot road-blocks)
                , keyValues: {}                    // Ad-targetting key values. A may of 'key' to array of 'value'.
                , sizes: ""                        // Sizes that should always be requested
			    , containerMinWidthToSizeMap: {}   // Sizes that should be requested, based on the size of the container.
                , viewportMinWidthToSizeMap: {}    // Sizes that should be requested, based on the size of the viewport.
			    , beforeAdLoadingCallback: null    // If specified, instructs GptAdSlots to pause loading of adverts until this function says it is ready.  function (slotInfo) {}
                , onRenderEndedCallback: null      // If specified, this callback will be called when the ad slot has finished rendering. function (slotInfo, sizeInfo). The size inside sizeInfo cannot be trusted for anything other than the ad slot size that was used (e.g. it won't actually be that size)
                , onJumpinessMinimisedRenderEndedCallback: null // If specified, this callback will be called when the ad slot has finished rendering if 'minimiseJumpiness' is set to true, and the ad has returned something non-empty
                , onSizeChangedCallback: null       // If specified, this callback will be called when the ad slot changes size
                , deleteSlotIfEmpty: true
                , minimiseJumpiness: false
            },
            options
        );

        options.slotName = slotName;
        options.adUnitPath = adUnitPath;

        for (var key in options.keyValues) {
            var valueArrayOrSingleValue = options.keyValues[key];
            if (typeof valueArrayOrSingleValue == "string") {
                options.keyValues[key] = [valueArrayOrSingleValue];
            }
        }

        if (slotNameToAdvertInfoMap[slotName] != null) {
            throw "SlotName '" + slotName + "' already exists.";
        }

        slotNameToAdvertInfoMap[slotName] = options;
    }

    function initialiseAfterPageLoad(options) {
        if (gptHasBeenCalled)
            throw "GptAdSlots has already been initialised";
        gptHasBeenCalled = true;

        optionsAfterPageLoad = options;
        waitForAfterPageLoadAndDependencyScriptSrcs();
    }

    function dependencyScriptSrcLoaded() {
        remainingDependencyScriptSrcs--;
        waitForAfterPageLoadAndDependencyScriptSrcs();
    }

    function waitForAfterPageLoadAndDependencyScriptSrcs() {
        if (remainingDependencyScriptSrcs == 0 && gptHasBeenCalled) {
            log("All dependencies loaded, and after page load.");
            pageLoadedAndAllDependenciesReady();
        } else {
            // do nothing, wait for callbacks to fire
            log("Waiting for " + remainingDependencyScriptSrcs + " dependencies, initialisedAfterPageLoad=" + gptHasBeenCalled);
        }
    }

    function pageLoadedAndAllDependenciesReady() {
        optionsAfterPageLoad = $.extend(
            {
                _: null
                , globalSlotModifier: function (slotInfo) { } // A callback that lets you modify the slotInfo before it is registered with GPT
                , hideOversizedAdsOnResize: true
            },
            optionsAfterPageLoad
        );

        if (optionsAfterPageLoad.hideOversizedAdsOnResize) {
            $(window).resize(onWindowResizeCheckAdSizes);
        }

        googletag.cmd.push(function () {
            log("initialiseAfterPageLoad calling enableSingleRequest after all dependencies loaded");
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.pubads().addEventListener("slotRenderEnded", function (e) {
                // GPT does stuff inside try...catch blocks, which hides errors from the console. Report them, and rethrow
                try {
                    onSlotRenderEnded(e);
                } catch (e) {
                    logError('onSlotRenderEnded: ' + e);
                    //throw e;
                }
            });

            totalSlots = 0;
            
            for (var key in slotNameToAdvertInfoMap) {
                var slotInfo = slotNameToAdvertInfoMap[key];

                optionsAfterPageLoad.globalSlotModifier(slotInfo);

                if (slotInfo.beforeAdLoadingCallback) {
                    initialiseAdvancedSlot(slotInfo);
                } else if (slotInfo.delaySlot) {
                    initialiseDelayedSlot(slotInfo);
                } else {
                    initialiseSimpleSlot(slotInfo);
                }
                totalSlots++;
            }

            if (totalSlots == readySlots.length) {
                allAdsAreReady();
            } 
        });

    }

    var throttleTimeoutId; // quick n dirty throttle, so we don't have any dependancies
    function onWindowResizeCheckAdSizes() {
        if (throttleTimeoutId == null) {
            throttleTimeoutId = setTimeout(onWindowResizeCheckAdSizesUnthrottled, 1000);
        }

    }
    function onWindowResizeCheckAdSizesUnthrottled() {
        throttleTimeoutId = null;

        var elemsToRemove = [];
        for (var key in slotNameToAdvertInfoMap) {
            var $adSlot = $("#" + key);
            var slotInfo = slotNameToAdvertInfoMap[key];
            if (slotInfo.lastRenderedAdSize != null && !slotInfo.lastAdWasFullWidth) {
                var parts = slotInfo.lastRenderedAdSize.split("x");
                var width = +parts[0];
                var height = +parts[1];
                var adSlotWidth = $adSlot.width();
                var adSlotHeight = $adSlot.height();
                if ($adSlot.width() < width || $adSlot.height < height) {
                    log("Ad slot '" + key + "' will be removed because the last ad was " + slotInfo.lastRenderedAdSize + ", but the container is " + adSlotWidth + "x" + adSlotHeight);
                    slotInfo.lastRenderedAdSize = null;
                    elemsToRemove.push($adSlot); // don't remove it immediately, because we would cause a relayout. batch remove them later
                }
            }
        }

        $.each(elemsToRemove, function (index, elem) {
            elem.remove();
        });
        // TODO - consider adding an event here which fires after the element is removed, and passes the slot ID that was removed

    }

    function findOverridesFromParents() {
        var current = window;

        do {
            var currentWindowOverrides;
            try {
                currentWindowOverrides = current.documentWriteOverrides;
            } catch (e) {
                // might get a cross-domain error
                currentWindowOverrides = null;
            }
            if (currentWindowOverrides) return currentWindowOverrides;

            var last = current;
            current = current.parent;
        } while (last != current && current != null);

        return null;
    }

    function contentOverridesIframeReady(contentOverrideIndex, gptFrameWindow, gptFrameDocument) {
        var overrideForSlot = gptFrameWindow.parent.__GptAdSlotsSupport.slotOverridesArray[contentOverrideIndex];
        if (overrideForSlot.slotInfo.delaySlot) {
            inflightAdSlots[overrideForSlot.slotInfo.slotName] = false;
        } else {
            gptFrameDocument.__GptAdSlotInfo = overrideForSlot.slotInfo;
            gptFrameDocument.write(overrideForSlot.html);

            // create a dummy event 
            var dummyEvent = {
                slot: slotNameToGoogleSlotMap[overrideForSlot.slotInfo.slotName],
                creativeId: "dummyContent" + contentOverrideIndex,
                lineItemId: "dummyLineItem" + contentOverrideIndex,
                size: [
                    overrideForSlot.containerWidth == null ? 123 : overrideForSlot.containerWidth,
                    overrideForSlot.containerHeight == null ? 123 : overrideForSlot.containerHeight,
                ]
            };
            onSlotRenderEnded(dummyEvent);
        }
    }

    function getOverriddenContentForSlot(slotInfo) {
        var overrideItemForSlot;

        var overrides = findOverridesFromParents();
        if (!overrides) 
			return null;

        for (var i = 0; i < overrides.length; i++) {
            var item = overrides[i];
            var requiredMatches = item.adValues.length;
            var matchesFound = 0;
            for (var j = 0; j < item.adValues.length; j++) {
                var key = item.adValues[j].key;
                var value = item.adValues[j].value;

                if (value == "*") {
                    matchesFound++;
                } else {
                    if (key == "sz" && slotInfo.evaluatedSizes != null) {
                        for (var k = 0; k < slotInfo.evaluatedSizes.length; k++) {
                            if (slotInfo.evaluatedSizes[k] == value) {
                                matchesFound++;
                                break;
                            }
                        }
                    } else {
                        var slotValuesForKey = slotInfo.keyValues[key];
                        if (slotValuesForKey != null) {
                            for (var valueIndex = 0; valueIndex < slotValuesForKey.length; valueIndex++) {
                                if (slotValuesForKey[valueIndex] == value) {
                                    matchesFound++;
                                    break;
                                }
                            }
                        }
                    }
                }
            }

            if (matchesFound == requiredMatches) {
                overrideItemForSlot = item;
                break;
            }
        }

        if (!overrideItemForSlot) return null;

        // set up our repository of content overrides, so that our iframes can fill themselves in
        window.__GptAdSlotsSupport = window.__GptAdSlotsSupport || {
            slotOverridesArray: [],
            contentOverridesIframeReady: contentOverridesIframeReady
        };

        var optionalWidthAndHeight;
        if (overrideItemForSlot.containerWidth != null && overrideItemForSlot.containerHeight != null) {
            optionalWidthAndHeight = 'width="' + overrideItemForSlot.containerWidth + '" height="' + overrideItemForSlot.containerHeight + '" ';
        } else {
            optionalWidthAndHeight = "";
        }

        var contentOverrideIndexForSlot = __GptAdSlotsSupport.slotOverridesArray.length;
        __GptAdSlotsSupport.slotOverridesArray.push({
            html: overrideItemForSlot.override,
            slotInfo: slotInfo,
            containerWidth: overrideItemForSlot.containerWidth,
            containerHeight: overrideItemForSlot.containerHeight,
        });


        log("__GptAdSlotsSupport.slotOverridesArray now contains " + __GptAdSlotsSupport.slotOverridesArray.length);

        // this method uses a document.write. WARNING: Lots of escaping within escaping within escaping
        var contentInserterForSlot2 = '<iframe id="GptAdSlotsContentOverridesIframe/iframe' + contentOverrideIndexForSlot + '" frameborder="0" ' +
            optionalWidthAndHeight +
            'src="javascript:&quot;' +
            /* */ '<?DOCTYPE html><html><head></head><body marginwidth=\\&quot;0\\&quot; marginheight=\\&quot;0\\&quot;>' +

            /* */'<script>' +

            /*   */ //'alert(\'iframe\');' +
            /*   */'window.parent.__GptAdSlotsSupport.contentOverridesIframeReady(' +
            /*       */contentOverrideIndexForSlot + ',' +
            /*       */'window,' +
            /*       */'window.document' +
            /*   */');' +

            /* */'</script>' +
            /* */'</body></html>&quot;"></iframe>';
        return contentInserterForSlot2;
    }

    function initialiseServiceForSlot(slotInfo, googleSlot) {
        var overridenContentForSlot = getOverriddenContentForSlot(slotInfo);

        if (overridenContentForSlot) {
            googleSlot.addService(googletag.content());
            googletag.content().setContent(googleSlot, overridenContentForSlot);
        }
        else {
            googleSlot.addService(googletag.pubads());
        }
    }

    function allAdsAreReady() {
        var askForAds = function() {
            //            alert("asking for ads" + readySlots.length);
            googletag.cmd.push(function() {
                setupSizesAndKeyValuesForSlots(readySlots);

                for (var key in slotNameToAdvertInfoMap) {
                    var slotInfo = slotNameToAdvertInfoMap[key];
                    var googleslot = slotNameToGoogleSlotMap[key];

                    initialiseServiceForSlot(slotInfo, googleslot);
                }

                // this must happen before enableServices is called, as content serviced slots will occur immediately in enableServices
                for (var i = 0; i < readySlots.length; i++) {
                    inflightAdSlots[readySlots[i]] = true;
                }

                googletag.enableServices();

                for (var i = 0; i < readySlots.length; i++) {
                    googletag.display(readySlots[i]);
                }

                // Any delayed slots that don't have elements on the page will never have their Google GPT render event called.
                // Set them as no-longer inflight here
                for (var key in slotNameToAdvertInfoMap) {
                    var slotInfo = slotNameToAdvertInfoMap[key];
                    if (slotInfo.delaySlot) {
                        inflightAdSlots[slotInfo.slotName] = false;
                    }
                }

                // Any delayed slots that don't have elements on the page will never have their Google GPT render event called.
                // Set them as no-longer inflight here
                for (var key in slotNameToAdvertInfoMap) {
                    var slotInfo = slotNameToAdvertInfoMap[key];
                    if (slotInfo.delaySlot) {
                        inflightAdSlots[slotInfo.slotName] = false;
                    }
                }

            });
        };

        if (DEBUG_CLICK_TO_LOAD()) {
            $("body").one("click", function () {
                askForAds();
            });
            $("<div/>").
                css({ position: "fixed", left: 0, right: 0, top: 0, background: "red", color: "#fff", "z-index": 65000 }).
                text("GPT DEBUG: Click page to load adverts").
                appendTo("body").
                fadeOut(2000);
        } else {
            askForAds();
        }
    }

    function initialiseAdvancedSlot(slotOptions) {
        var slotReady = function() {
            var gptSizes;
            if (slotOptions.delaySlot) {
                log("Advanced slot '" + slotOptions.slotName + "' is delayed.");
                gptSizes = DUMMY_SIZE_ARRAY();
            } else {
                gptSizes = getGptSizesForSlot(slotOptions);
            }
            var googleSlot = slotNameToGoogleSlotMap[slotOptions.slotName];
            var sizeMapping = googletag.sizeMapping().
                addSize([1, 1], gptSizes).
                build();
            googleSlot.defineSizeMapping(sizeMapping);


            readySlots.push(slotOptions.slotName);
            if (readySlots.length == totalSlots) {
                allAdsAreReady();
            }
        };
        log("Slot '" + slotOptions.slotName + "' is advanced. Waiting for googletag.cmd to respond");

        googletag.cmd.push(function () {
            var googleSlot = googletag.defineSlot(slotOptions.adUnitPath, DUMMY_SIZE_ARRAY(), slotOptions.slotName);
            if (googleSlot == null) {
                logError("googletag.defineSlot returned null");
                return;
            }

            addTargeting(googleSlot, slotOptions);
            slotNameToGoogleSlotMap[slotOptions.slotName] = googleSlot;

            log("Slot '" + slotOptions.slotName + "' is advanced. Notifying registration callback");
            slotOptions.beforeAdLoadingCallback(slotOptions, slotReady);
        });

    }

    function initialiseDelayedSlot(slotOptions) {

        log("Slot '" + slotOptions.slotName + "' is delayed");
        googletag.cmd.push(function () {
            var googleSlot = googletag.defineSlot(slotOptions.adUnitPath, DUMMY_SIZE_ARRAY(), slotOptions.slotName);
            if (googleSlot == null) {
                logError("googletag.defineSlot returned null");
                return;
            }
addTargeting(googleSlot, slotOptions);

            slotNameToGoogleSlotMap[slotOptions.slotName] = googleSlot;
        });

        readySlots.push(slotOptions.slotName);
    }

    function initialiseSimpleSlot(slotOptions) {
        var gptSizes = getGptSizesForSlot(slotOptions);
        log("Slot '" + slotOptions.slotName + "' has sizes " + dumpGptSizes(gptSizes));
        googletag.cmd.push(function () {
            var googleSlot = googletag.defineSlot(slotOptions.adUnitPath, gptSizes, slotOptions.slotName);
            if (googleSlot == null) {
                logError("googletag.defineSlot returned null");
                return;
            }
 addTargeting(googleSlot, slotOptions);

            slotNameToGoogleSlotMap[slotOptions.slotName] = googleSlot;
        });

        /*var sizeMapping = googletag.sizeMapping().
            addSize([1, 1], [666, 666]).
            //addSize([800, 600], [300, 250]).
            //addSize([1024, 768], [728, 90]).
            build();
        interstitialSlot.defineSizeMapping(sizeMapping);*/

        readySlots.push(slotOptions.slotName);
    }

    var audienceScienceLookup;
    function getAudienceScienceLookup() {
        if (audienceScienceLookup == null) {
            audienceScienceLookup = [];
            audienceScienceLookup["970x250"] = window.ASPQ_8DXiYi;
            audienceScienceLookup["728x90"] = window.ASPQ_VeYzEO;
            audienceScienceLookup["300x600"] = window.ASPQ_xdtohT;
            audienceScienceLookup["300x250"] = window.ASPQ_qxv9VM;
            audienceScienceLookup["320x50"] = window.ASPQ_yTTGdw;
        }
        return audienceScienceLookup;
    }

    function addTargeting(googleSlot, slotOptions) {
        if (UTILITIES.NullOrUndefined(window.asiPlacements) || UTILITIES.NullOrUndefined(slotOptions) || UTILITIES.NullOrUndefined(slotOptions.evaluatedSizes)) {
            return;
        }
        var targeting = [];
        for (var i = 0; i < slotOptions.evaluatedSizes.length; i++) {
            var audienceScienceTarget = getAudienceScienceLookup()[slotOptions.evaluatedSizes[i]];
            if (!UTILITIES.NullOrUndefined(audienceScienceTarget) && !UTILITIES.NullOrWhitespace(audienceScienceTarget)) {
                targeting.push(audienceScienceTarget);
            }
        }
        if (!UTILITIES.NullOrEmpty(targeting)) {
            googleSlot.setTargeting('gwd', targeting);
        }
    }

    function dumpGptSizes(sizeArray) {
        var result = "";
        for (var i = 0; i < sizeArray.length; i++) {
            result += sizeArray[i][0] + "x" + sizeArray[i][1] + ",";
        }
        return result;
    }

    function addGptAndDependencyScriptToPage(afterGptScriptSrcs) {
        var src = '//www.googletagservices.com/tag/js/gpt.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');

        $.each(afterGptScriptSrcs, function (index, scriptSrcInfo) {
            // set up wait for callbacks
            if (scriptSrcInfo.waitForObjectName) {
                remainingDependencyScriptSrcs++;
                waitForGlobalObject(
                    scriptSrcInfo.waitForObjectName,
                    function () {
                        log("Dependency '" + scriptSrcInfo.waitForObjectName + "' loaded.");
                        dependencyScriptSrcLoaded();
                    },
                    40,
                    10000 / 40,
                    function () {
                        log("Dependency '" + scriptSrcInfo.waitForObjectName + "' failed to load in time.");
                        dependencyScriptSrcLoaded();
                    }
                );
            } else {
                // TODO: implement some kind script ready callback handling
            }

            // add it to the page
            document.write('<scr' + 'ipt src="' + scriptSrcInfo.src + '"></scr' + 'ipt>');
        });
        log("Gpt and dependencies added to page.");
    }

    function onSlotRenderEnded(event) {
        for (var slotName in slotNameToGoogleSlotMap) {
            if (slotNameToGoogleSlotMap[slotName] == event.slot) {
                inflightAdSlots[slotName] = false;
                var slot = slotNameToAdvertInfoMap[slotName];
                var returnedSizeString = gptSizeToString(event.size);
                var sizeString = returnedSizeString;
                if (slot.lastRenderedAdSizeChange !== undefined) {
                    // since the slot render ended event can happen after an ad slots has changed its size, we need to make
                    // sure that we use any updated size, rather than the size that will be reported by GPT
                    sizeString = slot.lastRenderedAdSizeChange;
                }
                var isBlankedViaJavascript = slot.isBlankedViaJavascript;

                
                // fix the sizes to the actual size of the advert
                var sizeString = FAKE_SIZE_TO_REAL_SIZE_MAP[sizeString] || sizeString;

                log("Slot '" + slot.slotName + "' rendered with " + sizeString +
                    " (ad-server reported " + returnedSizeString + (slot.lastRenderedAdSizeChange != undefined ? ", ad size changed via JS" : "") + ") from creativeId=" + event.creativeId + ", lineItem=" + event.lineItemId +
                    (isBlankedViaJavascript
                        ? " and was blanked via javascript"
                        : ""
                    ) +
                    (slot.delaySlot
                        ? " and was delayed. Not running render ended event."
                        : ""
                    )
                );

                if (slot.delaySlot) {
                    continue;
                }


                if (slot.delaySlot) {
                    continue;
                }


                if (isBlankedViaJavascript) {
                    sizeString = null;
                }

                var $elementOuter = getElementForSlot(slotName);
                var $elementInner = getInnerElementForSlot(slotName);
                slot.lastRenderedAdSize = sizeString;

                if (sizeString == null && !slot.delaySlot) {
                    if (!isBlankedViaJavascript) {
                        handleBlankAdvert(slot, $elementOuter, false);
                    }
                    // If we're minimising jumpiness, and we're blank, we can fire this event immediately
                    triggerSlotSizeEvent(slot, EVENT_NAMES.JUMPINESS_MINIMISED_RENDER_ENDED, sizeString);
                } else {
                    $elementOuter.addClass("cnGptNotEmpty").removeClass("cnGptEmpty");
                    
                    applySizeAttributesToSlot($elementOuter, $elementInner, sizeString);
                    
                    if (slot.minimiseJumpiness) {
                        (function ($elementOuter, slot) {
                            setTimeout(function () {
                                $elementOuter.addClass("cnGptNotEmptyForJumpiness");

                                if (hacks_DeviceDoesNotComputeLayoutOnClassChange) {
                                    $elementOuter.css("border-bottom", "1px solid transparent");
                                    var woo = $elementOuter.width();
                                    $elementOuter.css("border-bottom", "");
                                }

                                triggerSlotSizeEvent(slot, EVENT_NAMES.JUMPINESS_MINIMISED_RENDER_ENDED, slot.lastRenderedAdSize);
                            }, 150);
                        })($elementOuter, slot);
                    }

                    // HACK: GPT sets the iframe to the size of the creative. However, ads may be traffic'd to any size. Use the size from FAKE_SIZE_TO_REAL_SIZE_MAP.
                    var returnedSizeParts = returnedSizeString.split("x");
                    var returnedWidth = returnedSizeParts[0];
                    var returnedHeight = returnedSizeParts[1];

                    var sizeParts = sizeString.split("x");

                    $elementInner.find("iframe[width=" + returnedWidth + "][height=" + returnedHeight + "]").css({
                        "width": sizeParts[0],
                        "height": sizeParts[1]
                    });
                }

                if (!isBlankedViaJavascript) {
                    $elementOuter.attr("data-gpt-info", "lineitem=" + event.lineItemId + ",creative=" + event.creativeId);
                }

                triggerSlotSizeEvent(slot, EVENT_NAMES.RENDER_ENDED, sizeString);
                break;
            }
        }

    }

    function triggerSlotSizeEvent(slot, sizeEventType, sizeInfo) {
        var eventInfo = {
            slotInfo: slot,
            sizeInfo: sizeInfo
        };
        if (sizeEventType == EVENT_NAMES.RENDER_ENDED && slot.onRenderEndedCallback) {
            slot.onRenderEndedCallback(eventInfo);
        } else if (sizeEventType == EVENT_NAMES.JUMPINESS_MINIMISED_RENDER_ENDED && slot.onJumpinessMinimisedRenderEndedCallback) {
            slot.onJumpinessMinimisedRenderEndedCallback(eventInfo);
        } else if (sizeEventType == EVENT_NAMES.SIZE_CHANGED && slot.onSizeChangedCallback) {
            slot.onSizeChangedCallback(eventInfo);
        }
        triggerJqueryEvent(slot.slotName, sizeEventType, eventInfo);
    }

    function handleBlankAdvert(slotInfo, $element, blankedViaJavascript) {
        if ($element == null)
            $element = getElementForSlot(slotInfo.slotName);

        if (UTILITIES.NullOrEmpty($element)) {
            logError('No element in handleBlankAdvert for: ' + slotInfo.slotName);
            return;
        }
        log("Setting '" + slotInfo.slotName + "' as blank advert");
        if (slotInfo.deleteSlotIfEmpty && !DEBUG_NO_DELETE_EMPTY_QUERY_STRING()) {
            // if we delete the frame immediately, GPT's code will throw a wobbly in firefox
            setTimeout(function () {
                $element.remove();
            }, 1);
            // NOTE: We don't call 'onSlotIsBlankAfterRenderCallback' here, because we were not removed via javascript. Consumers should handle onRenderEndedCallback being null
        } else {
            $element.addClass("cnGptEmpty").removeClass("cnGptNotEmpty");
            $element.attr("class", $element.attr("class").replace(/cnGptSize_\d+x\d+/g, ""));
            $element.removeAttr("data-gpt-width");
            $element.removeAttr("data-gpt-height");
            if (blankedViaJavascript) {
                $element.addClass("cnGptEmptyViaJavascript");
            }
        }
    }

    function removeAdSlotElement(slotName, immediate) {
        if (immediate) {
            var $element = getElementForSlot(slotName);
            $element.remove();
        } else {
            setTimeout(function () {
                removeAdSlotElement(slotName, true);
            });
        }
    }


    function gptSizeToString(singleSizeArray) {
        if (singleSizeArray == null) 
			return null;
        return singleSizeArray[0] + "x" + singleSizeArray[1];
    }

    function setupSizesAndKeyValuesForSlots(slotNames) {
        var pageLevelTargetting = {};

        var slotsThatHaveValidSizes = [];

        // figure out the sizes for a slot, to see if it will be displayed
        for (var slotIndex = 0; slotIndex < slotNames.length; slotIndex++) {
            var slotName = slotNames[slotIndex];

            var googleSlot = slotNameToGoogleSlotMap[slotName];
            var slotOptions = slotNameToAdvertInfoMap[slotName];

            if (googleSlot == null || slotOptions == null) {
                
                log("Attempted to set up a slot '" + slotName + "', which was not originally registered.");
                continue;
            }

            var gptSizes = getGptSizesForSlot(slotOptions);
            var sizeMapping = googletag.sizeMapping().
                        addSize([1, 1], gptSizes). // for all viewports, put gptSizes on the slot
                        build();
            googleSlot.defineSizeMapping(sizeMapping);

            logv("Slot '" + slotName + "' has sizes " + (slotOptions.evaluatedSizes.length == 0 ? "NONE" : slotOptions.evaluatedSizes.join(",")));

            if (slotOptions.evaluatedSizes.length > 0) {
                slotsThatHaveValidSizes.push(slotOptions.slotName);
                for (var key in slotOptions.keyValues) {
                    var valuesForKey = slotOptions.keyValues[key];

                    if (valuesForKey.length == 0 || (valuesForKey.length == 1 && (valuesForKey[0] == null || (valuesForKey[0] + "").trim() == ""))) {
                        valuesForKey = slotOptions.keyValues[key] = [EMPTY_KEY_VALUE_VALUES];
                    }

                    for (var valueIndex = 0; valueIndex < valuesForKey.length; valueIndex++) {
                        // clean up the value
                        valuesForKey[valueIndex] = cleanUpKeyValue(valuesForKey[valueIndex]);

                        var value = valuesForKey[valueIndex];
                        var pageLevelForKeyValue = pageLevelTargetting[key];
                        if (pageLevelForKeyValue == null) {
                            pageLevelForKeyValue = {};
                            pageLevelTargetting[key] = pageLevelForKeyValue;
                        }
                        pageLevelForKeyValue[value] = (pageLevelForKeyValue[value] || 0) + 1;
                    }
                }
            }
        }

        // now that we know all of the valid slots' key values, set up the page level targetting
        var validSlotCount = slotsThatHaveValidSizes.length;
        googletag.pubads().clearTargeting();
        for (var kvKey in pageLevelTargetting) {
            var pageLevelValuesForKey = pageLevelTargetting[kvKey];

            var keyValuesForKeyForGpt = [];

            for (var kvValue in pageLevelValuesForKey) {
                if (pageLevelValuesForKey[kvValue] == validSlotCount) {
                    keyValuesForKeyForGpt.push(kvValue);
                }
            }

            if (keyValuesForKeyForGpt.length > 0) {
                logv("Setting page-level targetting: " + kvKey + "=" + keyValuesForKeyForGpt.join(","));
                googletag.pubads().setTargeting(kvKey, keyValuesForKeyForGpt);
            }
        }

        // set up targetting per slot
        for (var slotIndex = 0; slotIndex < slotNames.length; slotIndex++) {
            var slotName = slotNames[slotIndex];

            var googleSlot = slotNameToGoogleSlotMap[slotName];
            var slotOptions = slotNameToAdvertInfoMap[slotName];
            
            if (googleSlot == null || slotOptions == null) {
                log(slotName + " slot does not exist for setupSizesAndKeyValuesForSlots");
                continue;
            }
            

            googleSlot.clearTargeting();
            for (var targetingKey in slotOptions.keyValues) {
                var values = slotOptions.keyValues[targetingKey];
                var valuesForGpt = [];

                for (var valueIndex = 0; valueIndex < values.length; valueIndex++) {
                    var countOfSlotWithKeyValue;
                    var pageLevelKeyValue = pageLevelTargetting[targetingKey];
                    if (pageLevelKeyValue != null) {
                        countOfSlotWithKeyValue = pageLevelKeyValue[values[valueIndex]] || 0;
                    } else {
                        countOfSlotWithKeyValue = 0;
                    }

                    if (countOfSlotWithKeyValue != validSlotCount) {
                        valuesForGpt.push(values[valueIndex]);
                    }
                }

                if (valuesForGpt.length > 0) {
                    logv("Slot '" + slotName + "' has slot-level keyvalues " + targetingKey + "=" + valuesForGpt.join(","));
                    googleSlot.setTargeting(targetingKey, valuesForGpt);
                }
            }

        }
    }

    function cleanUpKeyValue(value) {
        // NOTE: We don't escape / here, even though it's one of the special characters, because we use it as a special character to "separate" paths
        return value.replace(/[\#\"\,\*\.\(\)\=\+\<\>\[\]\?\:\@\;\&\%\{\}\|\^\~\\]/g, "_");
    }

    function refreshAllSlots() {
        var slotNames = [];
        for (var key in slotNameToAdvertInfoMap) {
            slotNames.push(key);
        }
        refreshSlots(slotNames);
    }

    function refreshSlots(slotNames) {
        if (!gptHasBeenCalled) 
			throw "Cannot call refreshSlots before initialiseAfterPageLoad has been called";
        if (typeof slotNames == "string") {
            slotNames = [slotNames];
        } else {
            // make sure slotNames are unique
            slotNames = convertMapToArray(convertArrayToMap(slotNames));
        }

        if (slotNames.length == 0) {
            log("Not refreshing. slotNames was empty");
            return;
        }

        // remove any slots that are still refreshing. NOTE: We may need some kind of queued-refreshing thing if this doesn't work out for every case
        for (var i = slotNames.length - 1; i >= 0; i--) {
            if (inflightAdSlots[slotNames[i]]) {
                log("Slot '" + slotNames[i] + "' is still loading. Ignoring refresh");
                slotNames.splice(i, 1);
            } else {
                inflightAdSlots[slotNames[i]] = true;
            }
        }

        if (slotNames.length == 0) {
            log("All slots in slotNames were busy refreshing.");
        }



        //var refreshedSlotNamesMap = {};
        var slotsToRefreshForDebug = "";
        var googleSlotsToRefresh = [];
        var slotsWithOverriddenContent = 0;

        // clear the delay flag on any slots, so that it can get deleted when the renderended event happens if it is empty
        for (var i = 0; i < slotNames.length; i++) {
            var slotName = slotNames[i];

            var slotOptions = slotNameToAdvertInfoMap[slotName];
            if (slotOptions != null) {
                slotOptions.delaySlot = false;
            }
        }

        // set up the sizes and keyvalues for the slots
        setupSizesAndKeyValuesForSlots(slotNames);

        // sort out any stuff that would have changed last time this slow was rendrered
        for (var i = 0; i < slotNames.length; i++) {
            var slotName = slotNames[i];

            var googleSlot = slotNameToGoogleSlotMap[slotName];
            var slotOptions = slotNameToAdvertInfoMap[slotName];

            if (googleSlot == null || slotOptions == null) {
                log(slotName + ' slot does not exist for refreshSlots');
                continue;
            }
            // the slot is being reloaded, so is no longer blankedViaJavascript
            slotOptions.isBlankedViaJavascript = false;

            // remove any special classes we've applied to the slot, so that it starts afresh
            getElementForSlot(slotName).removeClass(AD_SLOT_FULL_WIDTH_CSS_CLASS).addClass(AD_SLOT_NOTFULL_WIDTH_CSS_CLASS).removeClass("cnGptHideAdSlot"); // this may cause jumpiness. It needs to be done here so that container calculations are correct
            slotOptions.lastRenderedAdSize = null;
            slotOptions.lastAdWasFullWidth = null;
            // Set lastRenderedAdSizeChange back to undefined, rather than null. null means 'no size'
            slotOptions.lastRenderedAdSizeChange = undefined;

            var overiddenContentForSlot = getOverriddenContentForSlot(slotOptions);
            if (overiddenContentForSlot != null) {
                $("#" + slotName).empty().html(overiddenContentForSlot);
                slotsWithOverriddenContent++;
            } else {
                googleSlotsToRefresh.push(googleSlot);
                slotsToRefreshForDebug += slotName + ",";
            }

        }

        // if we have an advanced slot, then we may not have actually started GPT yet. In that case don't do anything yet
        if (totalSlots == readySlots.length) {
            if (googleSlotsToRefresh.length > 0) {
                log("Refreshing slots " + slotsToRefreshForDebug.substring(0, slotsToRefreshForDebug.length - 1));
                googletag.pubads().refresh(googleSlotsToRefresh);
            } else {
                log("No slots to refresh from GPT, with " + slotsWithOverriddenContent + " slots using overridden content.");
            }
        } else {
            log("Cannot refresh slots " + slotsToRefreshForDebug.substring(0, slotsToRefreshForDebug.length - 1) + " because GptAdSlots was not ready yet.");
        }
    }

    function applySizeAttributesToSlot($elementOuter, $elementInner, sizeString) {
        $elementOuter.attr("class", ($elementOuter.attr("class") || "").replace(/cnGptSize_\d+x\d+/g, "")); // clear existing size class
        $elementOuter.addClass("cnGptSize_" + sizeString); // WARNING: sz values are the size of the slot that was requested, not the size of the advert

        if (sizeString != null) {
            var sizeParts = sizeString.split("x");
            var width = parseInt(sizeParts[0], 10);
            var height = parseInt(sizeParts[1], 10);
            $elementInner.css("width", width);
            // let's not set the height, since we only really need the width for centering purposes

            $elementOuter.attr("data-gpt-width", width);
            $elementOuter.attr("data-gpt-height", height);
        } else {
            $elementOuter.removeAttr("data-gpt-width");
            $elementOuter.removeAttr("data-gpt-height");
        }

    }

    function getGptSizesForSlot(slotOptions) {
        var sizesMap = {};
        if (slotOptions.delaySlot) {
            // don't fill any sizes yet
        } else {
            if (slotOptions.sizes) {
                addArrayToMap(slotOptions.sizes.split(","), sizesMap);
            }

            var sizesThatFitInContainerAndViewport = getSizesThatFitInContainerAndViewport(slotOptions);
            addArrayToMap(sizesThatFitInContainerAndViewport, sizesMap);

            // if the size string began with a comma, just remove the incorrect blank size
            delete sizesMap[""];
        }

        var sizes = convertMapToArray(sizesMap);
        var gptSizes;
        if (sizes.length == 0) {
            gptSizes = DUMMY_SIZE_ARRAY();
            slotOptions.evaluatedSizes = [];
        } else {
            gptSizes = convertAdSizesToGptAsSizes(sizes);
            slotOptions.evaluatedSizes = sizes;
        }

        return gptSizes;
    }

    function getSizesThatFitInContainerAndViewport(slotOptions) {
        var $adContainer = $("#" + slotOptions.slotName);
        var oldStyle = $adContainer.attr("style");
        $adContainer.css("display", "").css("width", "").css("height", ""); // clear any hiding and sizes, so that we know the exact sizes we want
        var wasHidden = $adContainer.hasClass(".cnGptHideAdSlot");
        if (wasHidden) {
            $adContainer.removeClass("cnGptHideAdSlot");
        }

        var containerWidth = $adContainer.width();
        var viewportWidth = $(window).width();
        var height = $adContainer.height();

        if (oldStyle == null) {
            $adContainer.removeAttr("style");
        } else {
            $adContainer.attr("style", oldStyle);
        }
        if (wasHidden) {
            $adContainer.addClass("cnGptHideAdSlot");
        }

        var allowedAtContainerWidth = null;
        if (slotOptions.containerMinWidthToSizeMap != null) {
            var foundSizesAtWidth = -999; // keep track of the sizes we find, use the sizes fromt eh biggest viewport we're allowed to use
            for (var key in slotOptions.containerMinWidthToSizeMap) {
                if (allowedAtContainerWidth == null) allowedAtContainerWidth = [];
                var keyAsNumber = +key;
                if (containerWidth >= keyAsNumber && keyAsNumber > foundSizesAtWidth) {
                    foundSizesAtWidth = keyAsNumber;
                    allowedAtContainerWidth = (slotOptions.containerMinWidthToSizeMap[key] || "").split(",");
                }
            }
        }

        var allowedAtViewportWidth = null;
        if (slotOptions.viewportMinWidthToSizeMap != null) {
            var foundSizesAtWidth = -999; // keep track of the sizes we find, use the sizes fromt eh biggest viewport we're allowed to use
            for (var key in slotOptions.viewportMinWidthToSizeMap) {
                if (allowedAtViewportWidth == null) allowedAtViewportWidth = [];
                var keyAsNumber = +key;
                if (viewportWidth >= keyAsNumber && keyAsNumber > foundSizesAtWidth) {
                    foundSizesAtWidth = keyAsNumber;
                    allowedAtViewportWidth = (slotOptions.viewportMinWidthToSizeMap[key] || "").split(",");
                }
            }
        }

        var intersectionOfAllowedSizes = intersectMaps([convertArrayToMap(allowedAtContainerWidth), convertArrayToMap(allowedAtViewportWidth)]);
        var adSizes = convertMapToArray(intersectionOfAllowedSizes);
        return adSizes;
    }

    function intersectMaps(arrayOfMaps) {
        if (arrayOfMaps.length == 0) 
			return {};

        var startIndex = 0;
        var mapToStartWith = null;
        while (startIndex < arrayOfMaps.length && mapToStartWith == null) {
            mapToStartWith = arrayOfMaps[startIndex];
            startIndex++;
        }

        if (mapToStartWith == null) 
			return {};

        var result = cloneMap(mapToStartWith);

        for (var i = startIndex; i < arrayOfMaps.length; i++) {
            if (arrayOfMaps[i] == null) 
				continue;

            var currentMap = arrayOfMaps[i];
            for (var key in result) {
                if (currentMap[key] === undefined) {
                    delete result[key];
                }
            }
        }

        return result;
    }

    function cloneMap(existingMap) {
        var result = {};

        for (var key in existingMap) {
            result[key] = existingMap[key];
        }

        return result;
    }

    function addArrayToMap(array, map) {
        for (var i = 0; i < array.length; i++) {
            map[array[i]] = map[array[i]];
        }
    }

    function convertArrayToMap(array) {
        if (array == null) 
			return null;
        var result = {};
        for (var i = 0; i < array.length; i++) {
            result[array[i]] = array[i];
        }
        return result;
    }

    function convertMapToArray(map) {
        var result = [];
        for (var key in map) {
            result.push(key);
        }
        return result;
    }

    function convertAdSizesToGptAsSizes(sizesArray) {
        if (sizesArray.length == 0) 
			return DUMMY_SIZE_ARRAY();

        var result = [];
        for (var i = 0; i < sizesArray.length; i++) {
            var parts = sizesArray[i].split("x");
            result.push([+parts[0], +parts[1]]);
        }
        return result;
    }

    function isInitialised() {
        return gptHasBeenCalled;
    }

    function getElementForSlot(slotName) {
        return $("#" + slotName + "_GptOuter");
    }

    function getInnerElementForSlot(slotName) {
        return $("#" + slotName);
    }

    // this is a function, so that we always return a fresh copy (i.e noone can ad more things into it)
    function DUMMY_SIZE_ARRAY() {
        return [[10, 1]];
    }

    function getSlotNameForSlotWindow(windowOfGptIframe) {
        var cnGptSlot = getCnGptSlotInnerForSlotWindow(windowOfGptIframe);
        var id = cnGptSlot.attr("id");
        if (id == null || id.length == 0) {
            throw "ElementHasNoSlotName";
        }
        return id;
    }

    function getCnGptSlotInnerForSlotWindow(windowOfGptIframe) {
        try {
            var iframeElement = (windowOfGptIframe.frameElement || windowOfGptIframe.ownerDocument.defaultView.frameElement);
        } catch (e) {
            return "InvalidIframeWindow";
        }
        var $iframeElement = $(iframeElement);

        var cnGptSlot = $iframeElement.closest(AD_SLOT_CSS_SELECTOR_INNER);
        if (cnGptSlot.length == 0) {
            throw "IframeWindowNotInCnGptSlotElement";
        }
        return cnGptSlot;
    }

    function getCnGptSlotOuterForSlotWindow(windowOfGptIframe) {
        try {
            var iframeElement = (windowOfGptIframe.frameElement || windowOfGptIframe.ownerDocument.defaultView.frameElement);
        } catch (e) {
            return "InvalidIframeWindow";
        }
        var $iframeElement = $(iframeElement);

        var cnGptSlot = $iframeElement.closest(AD_SLOT_CSS_SELECTOR_OUTER);
        if (cnGptSlot.length == 0) {
            throw "IframeWindowNotInCnGptSlotElement";
        }
        return cnGptSlot;
    }

    function getPlaceholderIdForSlotWindow(windowOfGptIframe) {
        var $gptSlotContainer = getCnGptSlotOuterForSlotWindow(windowOfGptIframe);

        var placeholderId = $gptSlotContainer.attr("data-incontentplaceholderid");
        return placeholderId;
    }

    function setSlotAsFullWidth(slotNameOrWindowOfGptIframe) {
        var slotName = typeof slotNameOrWindowOfGptIframe == "string" ? slotNameOrWindowOfGptIframe : getSlotNameForSlotWindow(slotNameOrWindowOfGptIframe);
        var slotInfo = slotNameToAdvertInfoMap[slotName];
        getElementForSlot(slotName).removeClass(AD_SLOT_NOTFULL_WIDTH_CSS_CLASS).addClass(AD_SLOT_FULL_WIDTH_CSS_CLASS);
        slotInfo.lastAdWasFullWidth = true;
    }

    function setSlotAsHidden(slotNameOrWindowOfGptIframe) {
        var slotName = typeof slotNameOrWindowOfGptIframe == "string" ? slotNameOrWindowOfGptIframe : getSlotNameForSlotWindow(slotNameOrWindowOfGptIframe);

        var $element = getElementForSlot(slotName);
        $element.addClass("cnGptHideAdSlot");
    }

    function isSlotFullWidth(jqueryElementOrId) {
        var elem;
        if (typeof jqueryElementOrId == "string") {
            elem = getElementForSlot(jqueryElementOrId);
        } else {
            elem = jqueryElementOrId;
        }
        if (elem.length == 0) 
			return false;
        return elem.hasClass(AD_SLOT_FULL_WIDTH_CSS_CLASS);
    }

    function setSlotWindowAsBlankAdvert(windowOfGptIframe) {
        var slotName;
        try {
            slotName = getSlotNameForSlotWindow(windowOfGptIframe);
            log("Slot '" + slotName + "' declared itself as blank via javascript");
        } catch (e) {
            if (e == "ElementHasNoSlotName" || e == "InvalidIframeWindow" || e == "IframeWindowNotInCnGptSlotElement") {
                // the slot ID doesn't exist any more, since we were only going to remove it from the page everything is fine to not care
                logError("Slot declared itself as blank via javascript, but we could not find the ID");
                return;
            }
            throw e;
        }

        var slotInfo = slotNameToAdvertInfoMap[slotName];
        slotInfo.isBlankedViaJavascript = true;
        handleBlankAdvert(slotInfo, null, true);
    }
    // Any changes made here should marry up with server-side GptAdvert.cs RenderAdPlaceholder
    function createAdSlotElement(slotName, options) {
        options = $.extend(
            {
                cssClass: "",
                alignment: "HorizontalCentered",
                minimiseJumpiness: false,
                incontentAdPlaceholderId: ""
            }, options);

        // NOTE: This is a flags enum. It could have both a horizontal and vertical alignment in future. See GptAdvertAlign.cs
        var actualAlignment;
        if (options.alignment == "HorizontalCentered") {
            actualAlignment = "HorizontalCentered"
        } else if (options.alignment == "HorizontalLeft") {
            actualAlignment = "HorizontalLeft"
        }

        var outerSlotElement = $("<div/>").
            addClass("cnGptSlotOuter").
            addClass(AD_SLOT_NOTFULL_WIDTH_CSS_CLASS).
            addClass(actualAlignment != null ? ("cnGptAlign_" + actualAlignment) : "").
            addClass(options.minimiseJumpiness ? "cnGptMinimiseJumpiness" : "").
            addClass(options.cssClass).
            attr("id", slotName + "_GptOuter");

        if (options.incontentAdPlaceholderId.length > 0) {
            outerSlotElement.attr("data-incontentplaceholderid", INCONTENT_AD_ID_PREFIX + options.incontentAdPlaceholderId);
        }
        outerSlotElement.
            append($("<div/>").
                addClass("cnGptSlotInner").
                attr("id", slotName)
            );
        return outerSlotElement;
    }

    function globalSlotModifierHelper_overwriteKeyValues(slotInfoToModify, keyValuesToCopy, excludeKeyValuesMapOrArray) {
        if (keyValuesToCopy == null) 
			return; // do nothing

        excludeKeyValuesMapOrArray = excludeKeyValuesMapOrArray || {}; // default to empty

        var excludeKeyValues;
        if (excludeKeyValuesMapOrArray.constructor.name == "Array") {
            excludeKeyValues = convertArrayToMap(excludeKeyValuesMapOrArray);
        } else {
            excludeKeyValues = excludeKeyValuesMapOrArray
        }

        for (var key in keyValuesToCopy) {
            if (excludeKeyValues[key] != null) {
                continue; // we're not allowed to copy this keyvalue
            }
            slotInfoToModify.keyValues[key] = keyValuesToCopy[key].slice(0); // create a copy of the array
        }
    }

    function globalSlotModifierHelper_overwriteAdUnitPath(slotInfoToModify, newAdUnitPath) {
        slotInfoToModify.adUnitPath = newAdUnitPath;
    }

    function deepCloneKeyValues(keyValueMap) {
        var result = {};
        for (var key in keyValueMap) {
            result[key] = keyValueMap[key].slice(0);
        }
        return result;
    }

    function rubicon_adSizeChanged(iframeId, sizeString) {
        _sizeChangedFromGptAdSlotIframeId(iframeId, sizeString);
    }

    // uber-internal-hidden-private function that should only be used by functions in GptAdSlots. Create other functions that
    // call this one if required.
    function _sizeChangedFromGptAdSlotIframeId(gptAdSlotIframeId, sizeString) {
        var $gptIframe = $(document.getElementById(gptAdSlotIframeId));
        var $slotInner = $gptIframe.closest(AD_SLOT_CSS_SELECTOR_INNER);
        var $slotOuter = $slotInner.closest(AD_SLOT_CSS_SELECTOR_OUTER);
        
        var slotName = $slotInner.attr("id");
        var slot = slotNameToAdvertInfoMap[slotName];
        slot.lastRenderedAdSize = sizeString;
        slot.lastRenderedAdSizeChange = sizeString;

        log("Slot '"+slotName+"' changed size to "+(sizeString ? sizeString : "blank"));

        applySizeAttributesToSlot($slotOuter, $slotInner, sizeString);
        if (sizeString == null || sizeString.length == 0) {
            handleBlankAdvert(slot, $slotOuter, true);
        } else {
            var sizeParts = sizeString.split("x");
            $gptIframe.css("width", +sizeParts[0]).css("height", +sizeParts[1]);
        }
        
        triggerSlotSizeEvent(slot, EVENT_NAMES.SIZE_CHANGED, sizeString);
    }


    // NOTE: eventNamespace eventNamespace must be provided as a value, null or empty string. DO NOT ASSUME THAT IT CAN BE REPLACED WITH callback
    function addEventListener(slotNameOrNames, cnGptEventName, eventNamespace, callback) {
        var slotNames = slotNameOrNames.split(",");
        for (var i = 0; i < slotNames.length; i++) {
            var jqueryEventName = createJqueryEventName(slotNames[i].trim(), cnGptEventName, eventNamespace);
            $(window).on(jqueryEventName, function (e, eventArgs) { callback(eventArgs); });
        }
    }

    // NOTE: eventNamespace eventNamespace must be provided as a value, null or empty string. DO NOT ASSUME THAT IT CAN BE REPLACED WITH callback
    function removeEventListener(slotNameOrNames, cnGptEventName, eventNamespace) {
        var slotNames = slotNameOrNames.split(",");
        for (var i = 0; i < slotNames.length; i++) {
            var jqueryEventName = createJqueryEventName(slotNames[i].trim(), cnGptEventName, eventNamespace);
            $(window).off(jqueryEventName);
        }
    }

    function triggerJqueryEvent(slotName, eventName, eventArgs) {
        var jqueryEventName = createJqueryEventName(slotName, eventName);
        $(window).triggerHandler(jqueryEventName, eventArgs);
    }
    function createJqueryEventName(slotName, eventName, eventNamespace) {
        return "__CnGpt_" + slotName + "_" + eventName + (eventNamespace ? ("." + eventNamespace) : "");
    }

    // set up public interface
    window.GptAdSlots = {
        AD_SLOT_CSS_SELECTOR_OUTER: AD_SLOT_CSS_SELECTOR_OUTER,
        AD_SLOT_CSS_SELECTOR_INNER: AD_SLOT_CSS_SELECTOR_INNER,

        // initialisation
        initialiseBeforePageLoad: initialiseBeforePageLoad,
        initialiseAfterPageLoad: initialiseAfterPageLoad,
        isInitialised: isInitialised,

        // slot information manipulation
        register: register,
        updateSlotKeyValues: updateSlotKeyValues,
        updateSlotSizes: updateSlotSizes,
        refreshSlots: refreshSlots,
        refreshAllSlots: refreshAllSlots,

        // method to get information about a slot's iframe window (e.g. to be called from within an ad request)
        getPlaceholderIdForSlotWindow: getPlaceholderIdForSlotWindow,
        getCnGptSlotInnerForSlotWindow: getCnGptSlotInnerForSlotWindow,
        getCnGptSlotOuterForSlotWindow: getCnGptSlotOuterForSlotWindow,

        // slot information
        getElementForSlot: getElementForSlot,
        getInnerElementForSlot: getInnerElementForSlot,
        setSlotWindowAsBlankAdvert: setSlotWindowAsBlankAdvert,
        setSlotAsFullWidth: setSlotAsFullWidth,
        setSlotAsHidden: setSlotAsHidden,
        isSlotFullWidth: isSlotFullWidth,

        deepCloneKeyValues: deepCloneKeyValues,

        // DOM slot manipulation
        createAdSlotElement: createAdSlotElement,
        removeAdSlotElement: removeAdSlotElement,

        // Event helpers
        addEventListener: addEventListener,
        removeEventListener: removeEventListener,

        // a collection of useful functions for use by the 'globalSlotModifier' option of 'initialiseAfterPageLoad'.
        globalSlotModifiers: {
            overwriteKeyValues: globalSlotModifierHelper_overwriteKeyValues,
            overwriteAdUnitPath: globalSlotModifierHelper_overwriteAdUnitPath
        },
        // a collection of event names that can be used with addEventListener/removeEventListener
        eventNames: EVENT_NAMES

    };
})();


/*
GptAdSlots.register(
	"leaderboard",
    {
        containerMinWidthToSizeMap: {
            728: "728x90",
            970: "970x100"
        }
    }
);

GptAdSlots.register(
	"dskyOrMpu",
    {
        containerMinWidthToSizeMap: {
            300: "300x600,300x250",
        }
    }
);

var crazySlotAdvertInfo;
GptAdSlots.register(
    "crazySlot",
    {
        beforeAdLoadingCallback: function (advertInfo) {
            crazySlotAdvertInfo = advertInfo;
        }

    }
);


$("#button").click(function () {
    crazySlotAdvertInfo.setSizes();
    crazySlotAdvertInfo.faffingComplete();
});*/;
/* -----------------------------*/
// REQUIRE: WebUtils.js

// Store some global vars for updating the share & comment counts
var SharifyMe = {
	fbAppId: null,
	counterRefreshInterval: 100,
	counterSpeed: 2000,
	counterVars: {},
	shareCountContainers: {},	
	updateCommentCounter: function (count, url) {
		var from = SharifyMe.counterVars[url].comments.value,
			to = SharifyMe.counterVars[url].comments.total + count;

		SharifyMe.counterVars[url].comments.increment = (to - from) / SharifyMe.counterVars[url].comments.loops;
		SharifyMe.counterVars[url].comments.loopCount = 0;
		SharifyMe.counterVars[url].comments.interval = setInterval(function () { SharifyMe.updateCommentCounterHtml(url); }, SharifyMe.counterRefreshInterval)

		SharifyMe.counterVars[url].comments.total = to;
	},
	updateCommentCounterHtml: function (url) {
		SharifyMe.counterVars[url].comments.value += SharifyMe.counterVars[url].comments.increment;
		SharifyMe.counterVars[url].comments.loopCount += 1;

		if (SharifyMe.counterVars[url].comments.loopCount >= SharifyMe.counterVars[url].comments.loops) {
			clearInterval(SharifyMe.counterVars[url].comments.interval);
			SharifyMe.counterVars[url].comments.value = SharifyMe.counterVars[url].comments.total;
		}

		var elems = SharifyMe.shareCountContainers[url];
		$.each(elems, function (index, elem) {
			var $commentCounter = $(this).find(".commentCounter"),
				commentCount = Math.floor(SharifyMe.counterVars[url].comments.value);

			$commentCounter.html(commentCount);

			if (commentCount == 1) {
				$commentCounter.addClass("singular");
			} else {
				$commentCounter.removeClass("singular");
			}

			if (SharifyMe.counterVars[url].shares.total + SharifyMe.counterVars[url].comments.total >= 10) {
				$commentCounter.parent().removeClass("hide");
			}
		});
	},
	updateShareCounter: function (count, url) {
		var from = SharifyMe.counterVars[url].shares.value,
			to = SharifyMe.counterVars[url].shares.total + count;

		SharifyMe.counterVars[url].shares.increment = (to - from) / SharifyMe.counterVars[url].shares.loops;
		SharifyMe.counterVars[url].shares.loopCount = 0;
		SharifyMe.counterVars[url].shares.interval = setInterval(function () { SharifyMe.updateShareCounterHtml(url); }, SharifyMe.counterRefreshInterval)

		SharifyMe.counterVars[url].shares.total = to;
	},
	updateShareCounterHtml: function (url) {
		SharifyMe.counterVars[url].shares.value += SharifyMe.counterVars[url].shares.increment;
		SharifyMe.counterVars[url].shares.loopCount += 1;

		if (SharifyMe.counterVars[url].shares.loopCount >= SharifyMe.counterVars[url].shares.loops) {
			clearInterval(SharifyMe.counterVars[url].shares.interval);
			SharifyMe.counterVars[url].shares.value = SharifyMe.counterVars[url].shares.total;
		}

		var elems = SharifyMe.shareCountContainers[url];
		$.each(elems, function (index, elem) {
			var $shareCounter = $(this).find(".shareCounter"),
				shareCount = Math.floor(SharifyMe.counterVars[url].shares.value);

			$shareCounter.html(shareCount);

			if (shareCount == 1) {
				$shareCounter.addClass("singular");
			} else {
				$shareCounter.removeClass("singular");
			}

			if (SharifyMe.counterVars[url].shares.total + SharifyMe.counterVars[url].comments.total >= 10) {
				$shareCounter.parent().removeClass("hide");
			}
		});
	},
	track: function (channel, link) {
	    // Use when code should just follow a link after submitting the GA event.
	    // Note: target=_blank is not supported.
        // If `link` is not an <a> element with valid tag, only fires the tracking.
	    
	    if ('AnalyticsUtils' in window) {
	        window.AnalyticsUtils.trackLinkEvent(link, "Social", "Share", channel);
	    } else if (link && link.href) {
	        // proceed straight to link
	        document.location = link.href;
	    }
	}
};

function init() {
	if (SharifyMe.fbAppId == null) {
		SharifyMe.fbAppId = $("meta[itemprop='fb:app_id']").attr("content");
	}
	
	// Auto call sharify where sharify data-attributes have been set
	$("[data-sharify]").each(function () {
		var $this = $(this),
			sharifyOptions = $.parseJSON($this.attr("data-sharify"));
		$this.sharifyMe(sharifyOptions);
	});
}

(function () {
	// Sharify Plugin
	jQuery.fn.extend({
		sharifyMe: function (options) {
			options = $.extend(
		        {
		        	platforms: "facebook, twitter, pinterest, googleplus, tumblr, reddit, linkedin, email",
		        	shareCount: true,
		        	redirectUrl: WebUtils.getProtocolAndHostName() + "/closewindow",
		        	shareUrl: window.location.href,
		        	shareText: document.title,
		        	shareImage: ""
		        },
		        options
	        );

		    // open graph overrides
			var ogImageOverride = $('meta[id=facebookOgimage]').attr('content');
			if (ogImageOverride) {
			    options.shareImage = ogImageOverride;
			}
			var ogTitleOverride = $('meta[id=facebookOgtitle]').attr('content');
			if (ogTitleOverride) {
			    options.shareText = ogTitleOverride;
			}

			// what social platforms do we want to show
			var showPlatforms = options.platforms;

			// over ride comments and share counts for testing purposes.
			var testShares = window.location.href.toLowerCase().indexOf("testshares") > 0,
				testComments = window.location.href.toLowerCase().indexOf("testcomments") > 0,
				testCount = function () {
					return Math.floor(Math.random() * (17 - 3)) + 3;
				};
			
			// have we already requested the shareCounts for facebook, twitter, pinterest & linkedIn & tracked total count
			var shareCountRequested = false;
			if (!SharifyMe.counterVars[options.shareUrl]) {
				SharifyMe.counterVars[options.shareUrl] = {
					// Count up the shares
					shares: {
						total: 0,
						loops: Math.ceil(SharifyMe.counterSpeed / SharifyMe.counterRefreshInterval),
						increment: 0,
						loopCount: 0,
						value: 0,
						interval: 0
					},
					// Count up the comments
					comments: {
						total: 0,
						loops: Math.ceil(SharifyMe.counterSpeed / SharifyMe.counterRefreshInterval),
						increment: 0,
						loopCount: 0,
						value: 0,
						interval: 0
					}
				};
			} else {
				shareCountRequested = true;
			}
			
			var shareCount = {
				getFacebook: function () {
					$.getJSON("/Sharify/Counts?platform=Facebook&shareUrl=" + escape(options.shareUrl), function (json) {
						var commentCount = (json.comments == null ? 0 : json.comments) || 0,
							shareCount = (json.shares == null ? 0 : json.shares) || 0;

						if (testComments) {
							commentCount = testCount();
						}

						if (commentCount > 0) {
							SharifyMe.updateCommentCounter(commentCount, options.shareUrl);								
						}

						if (testShares) {
							shareCount = testCount();
						}

						if (shareCount > 0) {
							SharifyMe.updateShareCounter(shareCount, options.shareUrl);
						}
					});
				},

				getTwitter: function () {
					$.getJSON("/Sharify/Counts?platform=Twitter&shareUrl=" + escape(options.shareUrl), function (json) {
						var shareCount = (json.count == null ? 0 : json.count) || 0;

						if (testShares) {
							shareCount = testCount();
						}

						if (shareCount > 0) {
							SharifyMe.updateShareCounter(shareCount, options.shareUrl);
						}
					});
				},

				getPinterest: function () {
					$.getJSON("/Sharify/Counts?platform=Pinterest&shareUrl=" + escape(options.shareUrl), function (json) {
						var shareCount = (json.count == null ? 0 : json.count) || 0;

						if (testShares) {
							shareCount = testCount();
						}

						if (shareCount > 0) {
							SharifyMe.updateShareCounter(shareCount, options.shareUrl);
						}
					});
				},

				getLinkedIn: function () {
					$.getJSON("/Sharify/Counts?platform=LinkedIn&shareUrl=" + escape(options.shareUrl), function (json) {
						var shareCount = (json.count == null ? 0 : json.count) || 0;

						if (testShares) {
							shareCount = testCount();
						}

						if (shareCount > 0) {
							SharifyMe.updateShareCounter(shareCount, options.shareUrl);
						}
					});
				},

				getReddit: function () {
					$.getJSON("/Sharify/Counts?platform=Reddit&shareUrl=" + escape(options.shareUrl), function (json) {
						var shareCount = 0;
						if (json.hasOwnProperty("data")) {
							$.each(json.data.children, function (i, item) {
								shareCount += item.data.ups;
							});

							if (testShares) {
								shareCount = testCount();
							}

							if (shareCount > 0) {
								SharifyMe.updateShareCounter(shareCount, options.shareUrl);
							}
						}
					});	
				}
			};

			// Make sure holder is empty & append panel
			var $sharePanel = $("<ul />");
			$(this).empty().addClass("sharify").append($sharePanel);
			if (!SharifyMe.shareCountContainers[options.shareUrl]) {
				SharifyMe.shareCountContainers[options.shareUrl] = [];
			}
			SharifyMe.shareCountContainers[options.shareUrl].push($sharePanel);

			$.each(showPlatforms.split(","), function (i, val) {
				var thisPlatform = val.trim().toLowerCase();
				// Add facebook button
				if (thisPlatform == "facebook") {
					var $facebookButton = $("<a />").attr({ "href": "#", "title": "Facebook" }).addClass("facebook");
					$facebookButton.on("click", function (e) {
					    e.preventDefault();
					    var fbShareUrl = "https://www.facebook.com/dialog/share?app_id=" + SharifyMe.fbAppId + "&display=popup&href=" + escape(options.shareUrl) + "&redirect_uri=" + encodeURIComponent(options.redirectUrl);
					    window.open(fbShareUrl, "facebook", "menubar=no,status=1,width=575,height=400");

					    SharifyMe.track("Facebook");
					});
					$sharePanel.append($("<li />").append($facebookButton));
					if (!shareCountRequested) {
						shareCount.getFacebook();
					}
				}

				// Add twitter button
				if (thisPlatform == "twitter") {
					var $twitterButton = $("<a />").attr({ "href": "#", "title": "Twitter" }).addClass("twitter");
					$twitterButton.on("click", function (e) {
					    e.preventDefault();
					    var twitterShareUrl = "https://twitter.com/intent/tweet?url=" + escape(options.shareUrl) + "&text=" + options.shareText;
					    window.open(twitterShareUrl, "twitter", "status=1,width=575,height=400");
				
					    SharifyMe.track("Twitter");
					});
					$sharePanel.append($("<li />").append($twitterButton));
					if (!shareCountRequested) {
						shareCount.getTwitter();
					}
				}

				// Add pinterest button
				if (thisPlatform == "pinterest" && !UTILITIES.NullOrEmpty(options.shareImage)) {
					var $pinterestButton = $("<a />").attr({ "href": "#", "title": "Pinterest" }).addClass("pinterest");
					$pinterestButton.on("click", function (e) {
					    e.preventDefault();
					    var pinterestShareUrl = "http://www.pinterest.com/pin/create/button/?url=" + escape(options.shareUrl) + "&description=" + options.shareText + "&media=" + options.shareImage;
					    window.open(pinterestShareUrl, "pinterest", "status=1,width=770,height=400");
				
					    SharifyMe.track("Pinterest");
					});
					$sharePanel.append($("<li />").append($pinterestButton));
					if (!shareCountRequested) {
						shareCount.getPinterest();
					}
				}

				// Add googlePlus button
				if (thisPlatform == "googleplus") {
					var $googlePlusButton = $("<a />").attr({ "href": "#", "title": "GooglePlus" }).addClass("googlePlus");
					$googlePlusButton.on("click", function (e) {
					    e.preventDefault();
					    var googlePlusShareUrl = "https://plus.google.com/share?url=" + escape(options.shareUrl) + "&hl=en-GB";
					    window.open(googlePlusShareUrl, "googlePlus", "menubar=no,status=1,width=600,height=600");
				
					    SharifyMe.track("GooglePlus");
					});
					$sharePanel.append($("<li />").append($googlePlusButton));
				}

				// Add reddit button
				if (thisPlatform == "reddit") {
					var $redditButton = $("<a />").attr({ "href": "#", "title": "Reddit" }).addClass("reddit");
					$redditButton.on("click", function (e) {
					    e.preventDefault();
					    var redditShareUrl = "http://www.reddit.com/submit?url=" + escape(options.shareUrl) + "&title=" + options.shareText;
					    window.open(redditShareUrl, "reddit", "status=1,width=900,height=900");
				
					    SharifyMe.track("Reddit");
					});
					$sharePanel.append($("<li />").append($redditButton));
					if (!shareCountRequested) {
						shareCount.getReddit();
					}
				}

				// Add linkedIn button
				if (thisPlatform == "linkedin") {
					var $linkedInButton = $("<a />").attr({ "href": "#", "title": "LinkedIn" }).addClass("linkedIn");
					$linkedInButton.on("click", function (e) {
					    e.preventDefault();
					    var linkedInShareUrl = "https://www.linkedIn.com/shareArticle?mini=true&url=" + escape(options.shareUrl) + "&title=" + options.shareText;
					    window.open(linkedInShareUrl, "linkedIn", "status=1,width=575,height=400");
				
					    SharifyMe.track("LinkedIn");
					});
					$sharePanel.append($("<li />").append($linkedInButton));
					if (!shareCountRequested) {
						shareCount.getLinkedIn();
					}
				}

				// Add tumblr button
				if (thisPlatform == "tumblr") {
					var $tumblrButton = $("<a />").attr({ "href": "#", "title": "Tumblr" }).addClass("tumblr");
					$tumblrButton.on("click", function (e) {
					    e.preventDefault();
					    var tumblrShareUrl = "http://www.tumblr.com/share?v=3&u=" + escape(options.shareUrl) + "&t=" + options.shareText;
					    window.open(tumblrShareUrl, "tumblr", "status=1,width=720,height=400");
					    
					    SharifyMe.track("Tumblr");
					});
					$sharePanel.append($("<li />").append($tumblrButton));
				}

				// Add email button
				if (thisPlatform == "email") {
				    var $emailButton = $("<a />").attr({ "href": "mailto:?body=" + escape(options.shareUrl) + "&subject=" + options.shareText, "title": "Email" }).addClass("email");
				    $emailButton.on("click", function (e) {
				        e.preventDefault();
				        SharifyMe.track("Email", this);
				    });
					$sharePanel.append($("<li />").append($emailButton));
				}

				// Add whatsApp button
				if (thisPlatform == "whatsapp") {
					var whatsAppShareUrl = encodeURI("whatsApp://send?text=" + options.shareText + " - " + options.shareUrl),
						$whatsAppButton = $("<a />").attr({ "href": whatsAppShareUrl, "title": "WhatsApp" }).addClass("whatsApp");
					$whatsAppButton.on("click", function (e) {
					    e.preventDefault();
					    SharifyMe.track("WhatsApp", this);
					});
					$sharePanel.append($("<li />").append($whatsAppButton));
				}
			});

			// Add share count panel 
			var $shareCounter = $("<span />").addClass("shareCounter").html("0"),
				$commentCounter = $("<span />").addClass("commentCounter").html("0"),
				$sharesComments = $("<div />").addClass("sharesComments hide").append($shareCounter).append($commentCounter);

			$sharePanel.append($("<li />").append($sharesComments));
		}
	});
})();


// init on doc ready 
$(init);;
/* -----------------------------*/
/* START: Expandy ads */
var PushDownAd = {};
PushDownAd.adServerBaseUrl = null;

PushDownAd.init = function (strAdServerBaseUrl) {
    PushDownAd.adServerBaseUrl = strAdServerBaseUrl;
};

PushDownAd.getAdUrl = function (strPartialUrl) {
    if (!/^[a-z]+:\/\//i.test(strPartialUrl)) {
        if (strPartialUrl.indexOf("/") != 0) {
            strPartialUrl = "/" + strPartialUrl;
        }
        strPartialUrl = (PushDownAd.adServerBaseUrl || "http://ad.uk.doubleclick.net") + strPartialUrl;
    }
    return strPartialUrl;
};

PushDownAd.writeImageWithExpansion = function (strImageSrc, strAdSrc, intHeight, intOptionalWidth, callingWindow) {

    intOptionalWidth = intOptionalWidth == null ? "100%" : (intOptionalWidth +"px") ;

    var pushDownDiv = GptAdSlots.getCnGptSlotInnerForSlotWindow(callingWindow);
    pushDownDiv.children().hide(); // hide all existing elements
    var closeButton = $("<span style='z-index:100;display:inline-block; position:absolute; cursor:pointer;right:10px;top:10px;line-height:20px;font-size:20px;background-color:#FFF;filter:alpha(opacity=60);-moz-opacity: 0.60;opacity: 0.6;' class='closeButton' title='Close ad' alt='Close ad'>X</span>");
    var imgElement = $("<img src='" + strImageSrc + "' alt='Advertisement' style='cursor:pointer'/>");
    var strAdSrcFull = PushDownAd.getAdUrl(strAdSrc);
    pushDownDiv.append(imgElement);

    function happyEscape(script) {
        return script.
            replace(/\\/, "\\\\").
            replace(/</g, "\\x3c").
            replace(/>/g, "\\x3e").
            replace(/"/g, "\\x22");
    }

    var scriptWithSrc = '<script src="' +
        strAdSrcFull.replace(/'/g, "\\'")
                .replace(/"/g, '\\";')
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;') +
                '"></scr\'+\'ipt>';

    var scriptToWriteInIframe = "document.write('" + happyEscape(scriptWithSrc) + "');";
    var scriptWithTagsToWriteInIframe = "<script>" + happyEscape(scriptToWriteInIframe).replace(/"/g, "&quot;") + "</script>";

    var iframeCode = '<iframe frameborder="0" scrolling="no" style="width:' + intOptionalWidth + ';height:' + intHeight + 'px;border:none;padding:none;overflow:hidden;display:none" ' +
            'src="javascript:&quot;' +
            /* */ '<?DOCTYPE html><html><head></head><body marginwidth=\\&quot;0\\&quot; marginheight=\\&quot;0\\&quot;>' +

            happyEscape(scriptWithTagsToWriteInIframe) +

            /* */'</body></html>&quot;"></iframe>';

    function biggerfy() {
        imgElement.css("visiblity", "hidden");
        iframeElement.css("position", "relative").css("top", -imgElement.height()).css("margin-bottom", -imgElement.height());
        iframeElement.css("height", intHeight);
        iframeElement.slideDown("10s", function () {
            closeButton.show();
            pushDownDiv.append(closeButton);
        });
    }

    var expanded = false;
    var iframeElement = $(iframeCode);
    iframeElement.load(function () {
        biggerfy();
    });
    imgElement.click(function () {
        if (expanded) {
            biggerfy();
        } else {
            pushDownDiv.append(iframeElement);
            expanded = true;
        }
    });
    closeButton.click(function () {
        closeButton.hide();
        iframeElement.slideUp("slow", function () {
            imgElement.css("visiblity", "visible");
        });


    });
};
/* END: Expandy ads */;
/* -----------------------------*/
// REQUIRE: utilities.js
// REQUIRE: jquery.cookie.js
var SUBSCRIBEPANEL = (function () {
    var _docElem = $(document.documentElement),
        _selectorInteractiveEditionPanel = '.subscribe-interactive-edition-panel',
        _classNameIsInteractiveEdition = 'subscribe-interactive-edition-active',
        _classNameAppStoreButtonsLoaded = 'app-store-button-loaded';

    var _targetedDevices = {
        iPad: UTILITIES.isIPad,
        iPhone: UTILITIES.isIPhone,
        KindleFire: UTILITIES.isKindleFire,
        Android: UTILITIES.isAndroid
    };
    var _options = {
        interactiveDevicesList: [],
        interactiveCookieName: 'mobileInteractiveEditionAd',
        interactiveCookieExpires: 7
    };
    var _forceInteractive = UTILITIES.getQueryStringParameterByName("forceinteractive", null, null, true) || "";
    if (_forceInteractive.length > 1) {
        for (var key in _targetedDevices) {
            _targetedDevices[key] = false;
        }
        _targetedDevices[_forceInteractive] = true;
    }

    var _subscribePanel = {
        init: function (options) {
            _options = $.extend(_options, options);

            if (_subscribePanel.isInteractiveEditionRequired()) {
                _subscribePanel.enableInteractiveEdition();
            }
        },
        isInteractiveEditionRequired: function () {
            if (_forceInteractive != null && _forceInteractive.length > 0)
                return true;
            if (!$.cookie || !_subscribePanel || !_options)
                return false;
            return !$.cookie(_options.interactiveCookieName) && _subscribePanel.isCurrentDeviceInteractive();
        },
        isCurrentDeviceInteractive: function () {
            for (var i = 0; i < _options.interactiveDevicesList.length; i++)
            {
                var isInteractiveDevice = _targetedDevices[_options.interactiveDevicesList[i]];
                if (typeof (isInteractiveDevice) === 'boolean' && isInteractiveDevice) {
                    return true;
                }
            }
            return false;
        },
        setInteractiveEditionCookie: function () {
            if($.cookie)
                $.cookie(_options.interactiveCookieName, "shown", { expires: _options.interactiveCookieExpires, path: '/' });
        },
        enableInteractiveEdition: function () {
            _docElem.addClass(_classNameIsInteractiveEdition);
            _subscribePanel.setInteractiveEditionCookie();

            $(function () {
                var activeLinkLabel = '';

                var $panelContainer = $(_selectorInteractiveEditionPanel);
                $panelContainer
                    .find('[data-device]')
                        .filter(function (index) {
                            if (_forceInteractive != null && _forceInteractive.length == 1) return index != 0;
                            
                            var $this = $(this);

                            // add tracking to the link
                            $this.click(function (e) {
                                if ('AnalyticsUtils' in window) {
                                    e.preventDefault();
                                    window.AnalyticsUtils.trackLinkEvent(this, 'SubsFunnel', 'DownloadFreeIssue', $this.text());
                                }
                            });

                            // filter out the nodes that match the user's device (undefined devices will be removed)
                            var devices = $(this).data("device").split(" "),
                                isItemToFilter = true;
                            for (var i = 0; i < devices.length; i++) {
                                var device = devices[i],
                                    isTargetDevice = _targetedDevices[device];
                                if (isTargetDevice) {
                                    activeLinkLabel = $this.text();
                                    var mainBlurbOverride = $this.data("main-blurb") || "";
                                    var secondaryBlurbOverride = $this.data("secondary-blurb") || "";

                                    if (mainBlurbOverride.length > 0) {
                                        $panelContainer.find(".main-blurb").html(mainBlurbOverride);
                                    }
                                    if (secondaryBlurbOverride.length > 0) {
                                        $panelContainer.find(".secondary-blurb").html(secondaryBlurbOverride);
                                    }
                                }

                                if (typeof (isTargetDevice) === 'boolean' && isTargetDevice)
                                    return !isItemToFilter;
                            }
                            return isItemToFilter;
                        })
                        .remove()
                        .end()
                    .end()
                    .addClass(_classNameAppStoreButtonsLoaded);

                // track display of ad
                if ('AnalyticsUtils' in window) {
                    window.AnalyticsUtils.trackEvent('SubsFunnel', 'ShownFreeIssuePushdown', activeLinkLabel);
                }
            });
            
           
        }
    };

    return _subscribePanel;
})();
;
/* -----------------------------*/

var VOGUE = window.VOGUE || {};

var $vogueLocalVars = [];
VOGUE.isMobile = function () { return $vogueLocalVars['isMobile'] != null ? $vogueLocalVars['isMobile'] : ($vogueLocalVars['isMobile'] = UTILITIES.getBody().hasClass('isMobile')); };
VOGUE.isTablet = function () { return $vogueLocalVars['isTablet'] != null ? $vogueLocalVars['isTablet'] : ($vogueLocalVars['isTablet'] = UTILITIES.getBody().hasClass('isTablet')); };
VOGUE.isDesktop = function () { return $vogueLocalVars['isDesktop'] != null ? $vogueLocalVars['isDesktop'] : ($vogueLocalVars['isDesktop'] = UTILITIES.getBody().hasClass('isDesktop')); };


VOGUE.isMobileSite = function () {
    return $('html.isMobileSite').length > 0;
};

VOGUE.isTouchDevice = 'ontouchstart' in document.documentElement;

$(function () {
    VOGUE.isIE8 = $('body.ie8').length > 0;
    VOGUE.isIE9 = $('body.ie9').length > 0;
    VOGUE.isIE = $.browser.msie;
});

VOGUE.isIpad = navigator.userAgent.match(/iPad/i) != null;

VOGUE.isMicrosite = false;;
/* -----------------------------*/
GptAdSlots.initialiseBeforePageLoad();


SrcTwizzle.unloadUsesBlankPixelDataUri = true;

/* BEGIN: Viewport Selectors for jQuery */

/*
* http://www.appelsiini.net/projects/viewport
*/
(function ($) { $.belowthefold = function (element, settings) { var fold = $(window).height() + $(window).scrollTop(); return fold <= $(element).offset().top - settings.threshold; }; $.abovethetop = function (element, settings) { var top = $(window).scrollTop(); return top >= $(element).offset().top + $(element).height() - settings.threshold; }; $.rightofscreen = function (element, settings) { var fold = $(window).width() + $(window).scrollLeft(); return fold <= $(element).offset().left - settings.threshold; }; $.leftofscreen = function (element, settings) { var left = $(window).scrollLeft(); return left >= $(element).offset().left + $(element).width() - settings.threshold; }; $.inviewport = function (element, settings) { return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings); }; $.extend($.expr[':'], { "below-the-fold": function (a, i, m) { return $.belowthefold(a, { threshold: 0 }); }, "above-the-top": function (a, i, m) { return $.abovethetop(a, { threshold: 0 }); }, "left-of-screen": function (a, i, m) { return $.leftofscreen(a, { threshold: 0 }); }, "right-of-screen": function (a, i, m) { return $.rightofscreen(a, { threshold: 0 }); }, "in-viewport": function (a, i, m) { return $.inviewport(a, { threshold: 0 }); } }); })(jQuery);

/* END: Viewport Selectors for jQuery */

$(function () {
    if (VOGUE.isTouchDevice) {
        $("html").addClass("touch");
    }
});

/* BEGIN: Smooth scrolling */

var SMOOTHSCROLL = {};

$(function () {
    SMOOTHSCROLL.filterPath = function (string) {
        return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
    }
    // use the first element that is "scrollable"
    SMOOTHSCROLL.scrollableElement = function (els) {
        for (var i = 0, argLength = arguments.length; i < argLength; i++) {
            var el = arguments[i], $scrollElement = $(el);
            if ($scrollElement.scrollTop() > 0) {
                return el;
            } else {
                $scrollElement.scrollTop(1);
                var isScrollable = $scrollElement.scrollTop() > 0;
                $scrollElement.scrollTop(0);
                if (isScrollable) {
                    return el;
                }
            }
        }
        return [];
    }
    SMOOTHSCROLL.locationPath = SMOOTHSCROLL.filterPath(location.pathname);
    SMOOTHSCROLL.scrollElem = SMOOTHSCROLL.scrollableElement("html", "body");

    SMOOTHSCROLL.scrollToAnchor = function ($element, additionalOffset, updateUrl, callback, $target, $scrollableElement) {
        var target;
        if (!$target || $target.length == 0) {
            target = $element.attr("href");
            $target = $(target);
        }
        if ($target.length > 0) {
            var targetOffset = parseInt($target.offset().top) + (additionalOffset || 0);
            $($scrollableElement || SMOOTHSCROLL.scrollElem).scrollTop(targetOffset);
            if (updateUrl && target) {
                location.hash = target;
            }
        }
        if ($.isFunction(callback)) {
            callback();
        }
    }
});

/* END: Smooth scrolling */

/* BEGIN: Apply class dependent on scroll position */

VOGUE.applyClassOnScroll = function (ifYGreaterThan, $targetElements, className, bindToScroll, runNow, callbackOnAdd, callbackOnRemove, $scrollableArea) {
    $scrollableArea = $scrollableArea || $(window);
    function apply() {
        if ($scrollableArea.scrollTop() > ifYGreaterThan) {
            $targetElements.addClass(className);
            if (callbackOnAdd && $.isFunction(callbackOnAdd)) {
                callbackOnAdd();
            }
        } else {
            $targetElements.removeClass(className);
            if (callbackOnRemove && $.isFunction(callbackOnRemove)) {
                callbackOnRemove();
            }
        }
    };
    if (runNow) {
        apply();
    }
    if (bindToScroll === true) {
        $scrollableArea.scroll($.throttle(10, apply)).resize(apply);
    }
};

/* END: Apply class dependent on scroll position */

VOGUE.isRenderedInIFrame = function () {
    return $('body.isRenderedInIFrame').length > 0;
};

VOGUE.resizeElement = function ($element, dimensions) {
    if ($element && $element.length && dimensions && typeof dimensions === 'object') {
        var newDimensions = {};
        if (typeof dimensions.height !== 'undefined') {
            newDimensions['height'] = dimensions.height;
        }
        if (typeof dimensions.width !== 'undefined') {
            newDimensions['width'] = dimensions.width;
        }
        $element.css(newDimensions);
    }
};

/* BEGIN: hiddenobject measurement plugin */

// obtained from: http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/

//Optional parameter includeMargin is used when calculating outer dimensions
(function ($) {
    $.fn.getHiddenDimensions = function (includeMargin) {
        var $item = this,
        props = { position: 'absolute', visibility: 'hidden', display: 'block' },
        dim = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 },
        $hiddenParents = $item.parents().andSelf().not(':visible'),
        includeMargin = (includeMargin == null) ? false : includeMargin;

        var oldProps = [];
        $hiddenParents.each(function () {
            var old = {};

            for (var name in props) {
                old[name] = this.style[name];
                this.style[name] = props[name];
            }

            oldProps.push(old);
        });

        dim.width = $item.width();
        dim.outerWidth = $item.outerWidth(includeMargin);
        dim.innerWidth = $item.innerWidth();
        dim.height = $item.height();
        dim.innerHeight = $item.innerHeight();
        dim.outerHeight = $item.outerHeight(includeMargin);

        $hiddenParents.each(function (i) {
            var old = oldProps[i];
            for (var name in props) {
                this.style[name] = old[name];
            }
        });

        return dim;
    }
} (jQuery));

/* END: hiddenobject measurement plugin */

var KEYCODES = {};
KEYCODES.ENTER = 13;
KEYCODES.BACKSPACE = 8;
KEYCODES.TAB = 9;
KEYCODES.SHIFT = 16;
KEYCODES.CTRL = 17;
KEYCODES.ALT = 18;
KEYCODES.PAUSE = 19;
KEYCODES.CAPS_LOCK = 20;
KEYCODES.ESCAPE = 27;
KEYCODES.PAGE_UP = 33;
KEYCODES.PAGE_DOWN = 34;
KEYCODES.END = 35;
KEYCODES.HOME = 36;
KEYCODES.LEFT_ARROW = 37;
KEYCODES.UP_ARROW = 38;
KEYCODES.RIGHT_ARROW = 39;
KEYCODES.DOWN_ARROW = 40;
KEYCODES.INSERT = 45;
KEYCODES.DELETE = 46;

$.expr[":"].textEquals = function (obj, index, meta, stack) {
    return (obj.textContent || obj.innerText || $(obj).text() || "").toLowerCase() == meta[3].toLowerCase();
}

/* BEGIN: Content navigation */

//
// namespace for all content navigation functionality
//
var CONTENTNAVIGATION = window.CONTENTNAVIGATION || {};

$(function () {
    // check that there is content navigation on the page and exit if there isn't
    var $contentNavigationAndContent = $('#ContentNavigationAndContent');
    if ($contentNavigationAndContent.length === 0) {
        return;
    }

    var $contentNavigation = $('#ContentNavigation');
    var loaded = false;

    CONTENTNAVIGATION.$contentNavigation = $contentNavigation;

    var $loadingPanel = $contentNavigation.parent().find('.loadingPanel');

    CONTENTNAVIGATION.isLoaded = function () {
        return loaded;
    };

    CONTENTNAVIGATION.isContentLoaded = function () {
        return ((CONTENTNAVIGATION.MAINNAVIGATION != null && CONTENTNAVIGATION.MAINNAVIGATION.isLoaded())
             && (CONTENTNAVIGATION.SECTIONNAVIGATION == null || CONTENTNAVIGATION.SECTIONNAVIGATION.isLoaded()));
    };


    function checkContentLoadComplete() {
        //log('checkContentLoadComplete: ' + CONTENTNAVIGATION.isLoaded());
        if (CONTENTNAVIGATION.isContentLoaded()) {
            if ($loadingPanel != null && $loadingPanel.length > 0) {
                $loadingPanel.fadeOut(200, function () {
                    $loadingPanel.remove()
                });
            }
            $contentNavigation.children('.contentNavigationPanel').fadeTo(400, 1.0, function () {
                $contentNavigation.removeClass('contentNavigationLoading');
                loaded = true;
            });
        }
        else {
            setTimeout(checkContentLoadComplete, 150);
        }
    }

    function resize() {
        CONTENTNAVIGATION.MAINNAVIGATION.resize();
        if (CONTENTNAVIGATION.SECTIONNAVIGATION != null)
            CONTENTNAVIGATION.SECTIONNAVIGATION.resize();
        if (CONTENTNAVIGATION.GALLERYNAVIGATION != null)
            CONTENTNAVIGATION.GALLERYNAVIGATION.resize();
        if (CONTENTNAVIGATION.TOPICBAR != null)
            CONTENTNAVIGATION.TOPICBAR.resize();
        if (TOPICS.NAVLIST != null)
            TOPICS.NAVLIST.resize();
    }

    $(function () {
        resize();
    });

    $(window).resize($.debounce(150, resize));

    //
    // namespace for all functionality specific to the main navigation within the content navigation panel
    //
    CONTENTNAVIGATION.MAINNAVIGATION = function () {
        //
        // private
        //
        var displayedCssClass = 'displayed';
        var expandedCssClass = 'expanded';
        var $lastDisplayedPanel = null;
        var $topLevelNavigation = $('#TopLevelNavigation');
        var $contentNavigation = $('#ContentNavigation');
        var $vogueUI = $('#VogueUI');
        var $topLevelNavigationButton = $('#TopLevelNavigationButton');
        var $galleryNavigationButton = $('#GalleryNavigationButton');
        var contentNavigationPanelCssClass = 'contentNavigationPanel';
        var $navigationBar = $('#NavigationBar');

        var loaded = false;

        var $navBarButtons = $('#NavigationBar .navigationBarButton');
        var $window = $(window);

        var selectedClassPrefix = 'navigationSelected_';
        var contentNavigationClosedCssClass = 'contentNavigationClosed';
        var contentNavigationOpenedCssClass = 'contentNavigationOpened';

        function getNavigationSectionSelectedClass(navigationSection) {
            return selectedClassPrefix + navigationSection.toLowerCase();
        }

        function getNavigationSectionSelectedName() {
            var selectedClasses = UTILITIES.getClassesStartingWith($vogueUI, selectedClassPrefix);
            if (selectedClasses != null && selectedClasses.length > 0) {
                return selectedClasses[0].substr(selectedClassPrefix.length);
            }
            else {
                return '';
            }
        }

        $window.unbind('Navigation_Change').bind('Navigation_Change', function (e, navigationSection) {
            var selectedClass = getNavigationSectionSelectedClass(navigationSection);

            $vogueUI.removeClass(contentNavigationClosedCssClass);
            $vogueUI.addClass(contentNavigationOpenedCssClass);
            // if value is different from current
            if (!$vogueUI.hasClass(selectedClass)) {
                // Remove previous selected state class
                var classes = $vogueUI.attr('class').split(' ');
                for (var i = 0; i < classes.length; i++) {
                    if (classes[i].indexOf(selectedClassPrefix) == 0) {
                        $vogueUI.removeClass(classes[i]);
                    }
                }

                if (navigationSection.length > 0) {
                    // Add new selected state class
                    $vogueUI.addClass(selectedClass);
                    $vogueUI.data('Navigation.Selected', navigationSection);
                }
                else {
                    $vogueUI.addClass(contentNavigationClosedCssClass);
                    $vogueUI.removeClass(contentNavigationOpenedCssClass);
                }
            }
            else {
                // if screen width smaller than 1000px, collapse
                if (($window.width() < 1000 || $vogueUI.hasClass("noSectionNavigation")) && !IsGalleryOpen()) {
                    $vogueUI.removeClass(selectedClass);
                    $vogueUI.addClass(contentNavigationClosedCssClass);
                    $vogueUI.removeClass(contentNavigationOpenedCssClass);
                    $vogueUI.data('Navigation.Selected', null);
                }
            }

            // TODO: Consider making responsive content layouts (e.g. Vogue Festival) adapt to custom left nav more gracefully, e.g. with transition at same rate as left nav.
            var customLeftNavAnimationCompleteClass = "customLeftNavAnimationComplete";
            $vogueUI.removeClass(customLeftNavAnimationCompleteClass);

            setTimeout(function () {
                $contentNavigation.trigger('widthchange');
                $window.resize();
                $vogueUI.addClass(customLeftNavAnimationCompleteClass);
            }, 501);
        });

        function getNavigationSectionFromButton(button) {
            var buttonId = button.attr('id');
            if (buttonId != null) {
                buttonId = buttonId.toLowerCase();
                if (buttonId.indexOf('button') > 0) {
                    buttonId = buttonId.replace('button', '');
                }
            }
            return buttonId;
        }

        $navBarButtons.on('click', function () {
            var $this = $(this);
            // If Nav Buttons naming convention changes, we will need to write a translation function here
            var navigationSection = getNavigationSectionFromButton($this);
            if (navigationSection != null) {
                if (navigationSection == "history") {
                    CONTENTNAVIGATION.HISTORY.openCloseHistory($this);
                } else {
                    navigationChange(navigationSection);
                }
                setToolTipText($this);
            }
        }).on('mouseover', function () {
            setToolTipText($(this));
        });

        function setToolTipText(button) {
            var navigationSection = getNavigationSectionFromButton(button);
            if (navigationSection != null) {
                var selectedClass = selectedClassPrefix + navigationSection.toLowerCase();
                if ($vogueUI.hasClass(selectedClass) && $window.width() < 1000 && button.data('simpletip')) {
                    button.data('simpletip').update('Collapse');
                }
                else if (button.data('simpletip')) {
                    button.data('simpletip').update(button.data('title'));
                }
            }
        }

        function navigationChange(panelName, initialLoad) {
            var windowWidth = UTILITIES.windowActualWidth();
            if ((!initialLoad || windowWidth >= 1000)
                && panelName != null
                && (panelName != getNavigationSectionSelectedName() || windowWidth < 1000 || $vogueUI.hasClass("noSectionNavigation"))) {
                $window.trigger('Navigation_Change', panelName);
            }
            else if (initialLoad) {
                $vogueUI.data('Navigation.Selected', panelName);
            }
        }
        function navigationReopen() {
            navigationChange($vogueUI.data('Navigation.Selected'));
        }

        // events fired when width of panel changes
        var panelWidth = $contentNavigation.width();
        var panelLeft = $contentNavigation.css('left');
        function checkForWidthChange() {
            var newPanelWidth = $contentNavigation.width();
            var newPanelLeft = $contentNavigation.css('left');
            if (panelWidth !== newPanelWidth || panelLeft !== newPanelLeft) {
                panelWidth = newPanelWidth;
                panelLeft = newPanelLeft;
                setTimeout(function () { $contentNavigation.trigger('widthchange'); $window.resize(); }, 301);
            }
        };

        function isLoaded() {
            return loaded;
        }

        var previousWindowWidth; // = UTILITIES.windowActualWidth();
        var resizeLock = false;
        function resize() {
            if (!resizeLock) {
                resizeLock = true;
                checkForWidthChange();
                if (window.CONTENTNAVIGATION && CONTENTNAVIGATION.GALLERYNAVIGATION)
                    CONTENTNAVIGATION.GALLERYNAVIGATION.resize();

                var windowWidth = UTILITIES.windowActualWidth();

                if ((previousWindowWidth == null || previousWindowWidth >= 1000) &&
                    windowWidth < 1000 && !IsGalleryOpen()) {
                    navigationChange('');
                }
                else if ((previousWindowWidth == null || previousWindowWidth < 1000) && windowWidth >= 1000) {
                    // set to last active or default
                    navigationReopen();
                }
                previousWindowWidth = windowWidth;
                resizeLock = false;
            }
        }

        /*
        * If we insert any fixed position custom controls elsewhere, need to push the nav down
        */
        function pushNavigationDown(intHeight) {
            $contentNavigation.css("top", intHeight + "px");
            $navigationBar.css("padding-top", intHeight + "px");
        }

        // this function gets exposed publicly, so that we don't have to leak out $contentNavigation or do an ID-select in a horrible way.
        function addContentNavigationWidthChangeHandler(callback) {
            $contentNavigation.bind('widthchange', callback);
        }

        loaded = true;

        //
        // public
        //
        var pub = {
            navigationChange: navigationChange,
            expandedCssClass: expandedCssClass,
            $topLevelNavigation: $topLevelNavigation,
            resize: resize,
            isLoaded: isLoaded,
            pushNavigationDown: pushNavigationDown,
            addContentNavigationWidthChangeHandler: addContentNavigationWidthChangeHandler
        };
        return pub;



    } ();

    //
    // namespace for all functionality specific to the section navigation within the content navigation panel
    ///
    CONTENTNAVIGATION.SECTIONNAVIGATION = function () {

        //
        // private
        //
        var contentId = CONTENTIDENTIFIERS.currentContentId();
        var listingSectionContentId = CONTENTIDENTIFIERS.currentListingSectionId();
        //todo: load=false if current page is site root homepage
        var load = $('#TopLevelNavigation li[data-id="' + contentId + '"]').length == 0 && StringUtils.isNullOrEmpty(listingSectionContentId) === false;
        log('CONTENTNAVIGATION.SECTIONNAVIGATION: listingSectionContentId:' + listingSectionContentId + ' is it null? ' + StringUtils.isNullOrEmpty(listingSectionContentId).toString() + '. Will SectionNavigation be requested? ' + load.toString());
        var loaded;
        if (!load) {
            return null;
        }

        var contentNavigationElementId = 'ContentNavigation';
        var isExpandableCssClass = 'isExpandable';
        var fixedCssClass = 'fixed';
        var galleryDisplayedCssClass = 'galleryOpen';
        var subSectionSelector = '.subSection';
        var subSectionsSelector = '.subSections';
        var noSectionNavigationSelector = '.noSectionNavigation';
        
        // view model for section navigation data
        var viewModel = {
            sectionUrl: ko.observable(''),
            sectionName: ko.observable(''),
            groups: ko.observableArray(),
            isGrouped: false,
            groupByDate: false,
            groupNameDateFormat: null,
            groupNameDateFunction: null,
            itemDateFunction: null,
            canExpand: false
        };
        var $articleList1 = $('#ContentNavigation .articleList1');
        var $sectionNavigationButton = $('#SectionNavigationButton');
        var $sectionNavigationContracted = $('#SectionNavigation');
        var $sectionNavigationExpanded = $('#SectionNavigationExpanded');
        var $subSectionsList = $('#ContentNavigation ' + subSectionsSelector);
        var $sectionNavigationExpandedIFrame = $('#ContentNavigation .sectionNavigationExpandedIFrame');
        var $topicBar = $('#TopicBar');
        var $sectionTitle = $('.sectionTitle', $sectionNavigationContracted);
        var $currentArticleNavigationItem;
        var $currentArticleNavigationItemHeader;
        var $currentSectionHeader;

        // take the JSON object we receive from the server and make any changes we need to make it usable in this JS and insert it into the view model
        function addNavigationItem(navigationItem, addToStart) {
            // stub for a gallery
            navigationItem.gallery = {
                isGalleryOnly: false,
                startGroupIndex: 0,
                currentItemIndex: 0,
                itemGroups: []
            };
            // add item to the VM
            CONTENTNAVIGATIONVMHELPER.addItemToViewModel(viewModel, navigationItem, addToStart);
        };

        function addNavigationItems(navigationItems, addToStart) {
            $.each(navigationItems, function (index, elem) {
                elem.gallery = {
                    isGalleryOnly: false,
                    startGroupIndex: 0,
                    currentItemIndex: 0,
                    itemGroups: []
                };
            });
            CONTENTNAVIGATIONVMHELPER.addItemsToViewModel(viewModel, navigationItems, addToStart);
        }

        // clear section navigation items
        function clearSectionNavigationItems() {
            viewModel.groups.removeAll();
        };

        // remove the on scroll events that will cause more content to be loaded when the user scrolls near the end of the content navigation
        function disableLoadOnScroll() {
            $articleList1.off('scroll.infinitescroll');
        };

        // set up the on scroll events that will cause more content to be loaded when the user scrolls near the end of the content navigation
        function enableLoadOnScroll() {
            var previousScrollPosition = $articleList1.scrollTop();
            var dataLoadPending = false;
            function loadCompletedCallback(heightBeforeLoading, scrollPos) {
                // if heightBeforeLoading is set this means that the user is scrolling up so we have to change the scroll position to account for the new content messing it up
                if (heightBeforeLoading !== null && typeof heightBeforeLoading === 'number') {
                    var heightAfterLoading = 0;
                    $articleList1.children().each(function () {
                        heightAfterLoading += $(this).outerHeight();
                    });
                    $articleList1.scrollTop($articleList1.scrollTop() + heightAfterLoading - heightBeforeLoading);
                } else if (scrollPos !== null && typeof scrollPos === 'number') {
                    $articleList1.scrollTop(scrollPos);
                }
                $articleList1.find('.loading').remove();
                dataLoadPending = false;
            };
            $articleList1.on('scroll.infinitescroll', $.debounce(250, function () {
                if (dataLoadPending) {
                    return;
                }
                var scrollPos = $articleList1.scrollTop();
                var scrollDelta = previousScrollPosition - scrollPos;
                var listingSectionContentIdCurrent = $articleList1.parent().find("> .subSection").data("listingsectioncontentid") || listingSectionContentId;
                if (scrollDelta > 0) { // scrolled up
                    // check if the top list-item is in view at all
                    var $firstListItem = $($articleList1.find('.navigationItem').get(0));
                    if ($firstListItem.outerHeight() > scrollPos) {
                        $firstListItem.before('<li class="loading"></li>');
                        var articleListHeight = 0;
                        $articleList1.children().each(function () {
                            articleListHeight += $(this).outerHeight();
                        });
                        dataLoadPending = true;
                        var dataId = $firstListItem.data('id');
                        while (dataId == null || dataId.length == 0) {
                            $firstListItem = $firstListItem.next();
                            dataId = $firstListItem.data('id');
                        }
                        loadNextItems(dataId, function () { loadCompletedCallback(articleListHeight, scrollPos); }, listingSectionContentIdCurrent);
                    }
                } else if (scrollDelta < 0) { // scrolled down
                    // check if the bottom list-item is in view at all
                    var $articles = $articleList1.find('.navigationItem');
                    var $lastListItem = $($articles.get($articles.length - 1));
                    if ($lastListItem.position().top < $articleList1.height()) {
                        $lastListItem.after('<li class="loading"></li>');
                        dataLoadPending = true;
                        loadPreviousItems($lastListItem.data('id'), function () { loadCompletedCallback(null, scrollPos); }, listingSectionContentIdCurrent);
                    }
                }
                previousScrollPosition = scrollPos;
            }));
        };

        // fix sub-section headers to the top of the section navigation as the user scrolls
        function fixContentNavigationSubSectionHeader() {
            var fixHeader = function () {
                var scrollTop = $articleList1.scrollTop();
                var $fixedTitle = $articleList1.siblings(subSectionSelector + '.' + fixedCssClass);
                var $detectedCurrentSectionHeader = null;
                var fixedHeaderTopValue = 0;
                var $element = null;
                var elementPositionTop = null;
                $articleList1.find(subSectionSelector).each(function (index, element) {
                    $element = $(element);
                    elementPositionTop = Math.floor($element.position().top);
                    // if the top of the element is scrolled up out of view
                    if (elementPositionTop <= 0) {
                        // this header may be the one we will use as the currently fixed header, so let's save a reference to it for later
                        $detectedCurrentSectionHeader = $element;
                    } else if ($fixedTitle.length > 0 && elementPositionTop < $fixedTitle.outerHeight()) {
                        // this header should be nudging the previous one out of view
                        fixedHeaderTopValue = (($fixedTitle.outerHeight() - elementPositionTop) * -1) + 'px';
                        return false;
                    } else {
                        // this item is so far down the list that we don't have to worry about it or any others after it.
                        return false;
                    }
                });
                // reposition the fixed header as necessary
                $fixedTitle.css({ 'top': fixedHeaderTopValue });
                // if we found a section header that should be fixed AND if there is no currently fixed header, or the detected current section header is different to the displayed current section header
                if ($detectedCurrentSectionHeader !== null && ($fixedTitle.length === 0 || $fixedTitle.html() !== $detectedCurrentSectionHeader.html())) {
                    if ($fixedTitle.length > 0) {
                        $fixedTitle.html($detectedCurrentSectionHeader.html());
                        $fixedTitle.attr("data-listingsectioncontentid", $detectedCurrentSectionHeader.data("listingsectioncontentid"));
                        $fixedTitle.data("listingsectioncontentid", $detectedCurrentSectionHeader.data("listingsectioncontentid"));
                    } else {
                        $currentSectionHeader = $detectedCurrentSectionHeader.clone(true);
                        $currentSectionHeader.addClass(fixedCssClass);
                        $currentSectionHeader.width($articleList1.find('.navigationItem').outerWidth(true));
                        $articleList1.before($currentSectionHeader);
                    }
                }
            }
            // bind now
            fixHeader();
            // bind on scroll
            $articleList1.on('scroll.contentNavigationFixSubSectionHeaders', fixHeader);
        };

        function getAllNavigationItems() {
            return $('.navigationItem', $articleList1);
        };

        function getCurrentNavigationItemData() {
            var contentId = getCurrentNavigationItemDomElement().data('id');
            var navItem = getNavigationItemDataById(contentId);
            if (navItem.length > 1)
                return navItem.first();
            else
                return navItem;
        };

        function getCurrentNavigationItemDomElement() {
            return getAllNavigationItems().filter('.selected');
        };

        function getNextNavigationItemDomElement() {
            var allNavItems = getAllNavigationItems();
            var selectedIndex = allNavItems.index(getCurrentNavigationItemDomElement());

            if (selectedIndex < allNavItems.length - 1)
                return $(allNavItems.get(selectedIndex + 1));
            else
                return null;
        };

        function getFirstVisibleNavigationItemContentId() {
            return getFirstVisibleNavigationItemDomElement().data('id');
        };

        function getFirstVisibleNavigationItemDomElement() {
            var $this;
            var $firstVisibleElement;
            getAllNavigationItems().each(function () {
                $this = $(this);
                if ($this.position().top > 0) {
                    $firstVisibleElement = $this;
                    return false;
                }
            });
            return $firstVisibleElement;
        };

        function getImageUrl(images, itemType) {
            var imageUrl = '';
            if (images) {
                var imageWidth = getImageWidth(itemType);
                $.each(images, function (index, image) {
                    imageUrl = image.Url;
                    if (image.Width >= imageWidth) {
                        return false;
                    }
                });
            }
            return imageUrl;
        };

        // gets the image width of the item currently being added to the 
        function getImageWidth(itemType) {
            return $('#ContentNavigation .' + itemType + ' .imageLink').width() * UTILITIES.getDevicePixelRatio();
        };

        function getNavigationItemDataById(id) {
            var navigationItem = null;
            if (id !== null) {
                id = id.toString();
                $.each(viewModel.groups(), function (index, group) {
                    $.each(group.items(), function (index, item) {
                        if (item.Id === id) {
                            navigationItem = item;
                            return false;
                        }
                    });
                    if (navigationItem !== null) {
                        return false;
                    }
                });
            }
            return navigationItem;
        };

        // get the DOM element of the navigation item with a specified content ID
        function getNavigationItemDomElementById(id) {
            return getAllNavigationItems().filter('[data-id="' + id + '"]');
        };

        function getSectionNavigationHeight() {
            return $articleList1.height();
        };

        function getSectionNavigationWidth() {
            return $articleList1.width();
        };

        // initialise some UI elements that need to be styled with JS
        function init() {
            // set JS calculated CSS on contracted content navigation
            var $sectionTitle = $('.sectionTitle', $sectionNavigationContracted);
            var $articleList1Wrapper = $('.articleList1Wrapper', $sectionNavigationContracted);

            if ($sectionTitle.length > 0 && $articleList1.length > 0) {
                $articleList1Wrapper.css({ 'top': '0' });
                if ($sectionTitle.is(':visible')) {
                    $articleList1Wrapper.css({
                        'top': $sectionTitle.outerHeight() + 'px'
                    });
                }
            }

            // fix correct header to top
            UTILITIES.callIfFunction(fixContentNavigationSubSectionHeader);

            // expansion and contraction of the panel
            $('.expandSectionNavigation,.contractSectionNavigation').on('click', function () {
                $contentNavigation.toggleClass(CONTENTNAVIGATION.MAINNAVIGATION.expandedCssClass);
                var isNavigationExpanded = $contentNavigation.hasClass(CONTENTNAVIGATION.MAINNAVIGATION.expandedCssClass);
                if (isNavigationExpanded) {
                    CONTENTNAVIGATION.MAINNAVIGATION.navigationChange('topLevelNavigation');
                    //
                    // load expanded section navigation
                    //

                    // get content id of first item in list
                    var contentId = getFirstVisibleNavigationItemContentId();

                    var iframeUrl = '/content-only' + viewModel.sectionUrl() + '?contentId=' + contentId;

                    // set iframe URL so that the content will be centred around the content item in the contracted navigation
                    $sectionNavigationExpandedIFrame.attr('src', iframeUrl);

                    // disable body scrolling
                    $('body,html').css('overflow', 'hidden');
                } else {

                    //
                    // close expanded section navigation
                    //

                    // clear iframe content
                    $sectionNavigationExpandedIFrame.attr('src', 'about:blank');

                    // enable body scrolling
                    $('body,html').css('overflow', '');
                }
            });
        };

        // load the initial data for section navigation
        function loadInitialData(firstContentId, initialLoad, sectionContentId) {
            var sectionToLoad = sectionContentId || listingSectionContentId;
            $.getJSON('/content-navigation/GetSectionBased/' + sectionToLoad + '/' + firstContentId, function (data, textStatus, jqXHR) {
                if (textStatus === 'success') {
                    if (data !== null && data.Items.length > 0) {
                        if (initialLoad === true) {
                            //                            if (data.NavBarName != null) {
                            //                                $sectionNavigationButton.text(data.NavBarName);
                            //                            }
                            // magic
                            ko.applyBindings(viewModel, document.getElementById('SectionNavigation'));
                        } else {
                            disableLoadOnScroll();
                            clearSectionNavigationItems();
                        }

                        // grouping flags set on view model
                        viewModel.isGrouped = data.IsGrouping;
                        viewModel.groupByDate = data.Groups.length === 0 && viewModel.isGrouped === true;

                        //date resolution decision
                        viewModel.groupNameDateFunction = function (navigationItem) {
                            if (navigationItem.DisplayDate) {
                                if (data.GroupingDateResolution == "Month") {
                                    return UTILITIES.getMonthName(navigationItem.DisplayDate) + ' ' + navigationItem.DisplayDate.getFullYear();
                                } else if (data.GroupingDateResolution == "Year") {
                                    return navigationItem.DisplayDate.getFullYear();
                                }

                                return UTILITIES.getDayOfWeek(navigationItem.DisplayDate, false) + ' ' + UTILITIES.getDateNumberWithSup(navigationItem.DisplayDate) + ' ' + UTILITIES.getMonthNameShort(navigationItem.DisplayDate);
                            }
                            return undefined;
                        };

                        viewModel.itemDateFunction = function (date) {
                            if (date) {
                                if (data.GroupingDateResolution == "Month") {
                                    return date.toString('dddd d').toUpperCase() + '<sup>' + UTILITIES.getNumberSuffix(date.getDate()) + '</sup>';
                                } else if (data.GroupingDateResolution == "Year") {
                                    return UTILITIES.getMonthName(date);
                                }

                                //default is day resolution, but if <12 hours show relative time
                                var dateTimeString = '';

                                var timespan = new TimeSpan(new Date() - date);
                                var timespanMilliseconds = timespan.getTotalMilliseconds();
                                if (timespanMilliseconds <= 60000) { // 1 minute
                                    dateTimeString = 'just now';
                                } else if (timespanMilliseconds <= 3600000) { // 60 minutes
                                    dateTimeString = timespan.getMinutes() + ' minutes ago';
                                } else if (timespanMilliseconds <= 5400000) { // 90 minutes
                                    dateTimeString = (timespan.getMinutes() + 60) + ' minutes ago';
                                } else if (timespanMilliseconds <= 43200000) { // 12 hours
                                    var hours = timespan.getHours();
                                    dateTimeString = hours + ' hour' + (hours == 1 ? '' : 's') + ' ago';
                                } else if (timespanMilliseconds <= 86400000) { // 24 hours
                                    dateTimeString = date.toString('h:mm tt');
                                } else {
                                    dateTimeString = UTILITIES.getDayOfWeek(date, false) + ' ' + UTILITIES.getDateNumberWithSup(date);
                                }

                                return dateTimeString;
                            }
                            return undefined;
                        };

                        // section level properties set on view model
                        viewModel.sectionName(data.SectionName);
                        viewModel.sectionUrl(data.SectionUrl);

                        //can we expand?
                        viewModel.canExpand = data.CanExpand;
                        enableExpansionIfAvailable();

                        // if we should have got groups back from the server
                        if (viewModel.isGrouped === true && viewModel.groupByDate === false) {
                            // add groups to the view model
                            $.each(data.Groups, function (index, group) {
                                CONTENTNAVIGATIONVMHELPER.addGroupToViewModel(viewModel, group, false);
                            });
                        }

                        // add navigation items to the view model
                        addNavigationItems(data.Items);

                        if (initialLoad === true) {
                            // fix layout
                            init();
                        }

                        function loadComplete() {
                            if (initialLoad === true) {
                                // trigger any load event
                                $articleList1.trigger('load');
                                loaded = true;
                            }
                            // enable load on scroll
                            enableLoadOnScroll();

                            setPhotoAlertButtons();
                        };

                        if (initialLoad === true) {
                            // display the section navigation and scroll to the current item
                            CONTENTNAVIGATION.MAINNAVIGATION.navigationChange('sectionNavigation', true);
                            scrollToCurrentItem(loadComplete);

                        } else {
                            // scroll to the item that the content is centred around
                            var $scrollToNavigationItem = getNavigationItemDomElementById(firstContentId);
                            scrollToItem($scrollToNavigationItem);
                            enableLoadOnScroll();
                        }
                        //if page has Page Specific Nav section, display that nav by default
                        if ($('#PageSpecificNavigation')[0] != null) {
                            CONTENTNAVIGATION.MAINNAVIGATION.navigationChange('pagespecificnavigation', true);
                        }
                    }
                }
            });
        };

        function setPhotoAlertButtons() {
            var cityName = '';
            var showId = '';

            // TODO: make more efficient: only check new items
            $('.navigationItem.FashionShow', $articleList1).each(function (index, elem) {
                var $elem = $(elem);
                if ($elem.hasClass('DateSubgroup'))
                    cityName = $('.title', $elem).text();
                else if ($('.reminderButton', $elem).length > 0) {
                    showId = $elem.attr('data-id');
                    if (showId.indexOf('fashionShows.') == 0) {
                        showId = showId.replace('fashionShows.', '');
                    }
                    var status = FashionShowNotifications.getReminderStatus(cityName, showId);
                    FashionShowNotifications.setPanelStatus(null, status, $elem);
                }
            });

            bindReminderButton($('.reminderButton, .unreminderButton, .unreminderRemoveButton', $articleList1))
        }

        function bindReminderButton($el) {
            $el.off('click.ReminderButton').on('click.ReminderButton', function (e) {
                var $showElement = $(this).closest("li");
                var showId = $showElement.attr("data-id");
                if (showId.indexOf('fashionShows.') == 0) {
                    showId = showId.replace('fashionShows.', '');

                    if ($showElement.find(".reminderButton").length > 0) {
                        FashionShowNotifications.subscribeToShow(
                            FashionShowNotifications.SEASON_ID,
                            showId,
                            $showElement,
                            function () { bindReminderButton($('.unreminderButton, .unreminderRemoveButton', $showElement)) }
                        );
                        e.preventDefault();
                    }
                    if ($showElement.find(".unreminderButton,.unreminderRemoveButton").length > 0) {
                        FashionShowNotifications.unsubscribeFromShow(
                            FashionShowNotifications.SEASON_ID,
                            showId,
                            null,
                            $showElement,
                            function () { bindReminderButton($('.reminderButton', $showElement)) }
                        );

                        e.preventDefault();
                    }
                }
            });
        };

        function getItemDateString(date) {
            if (viewModel.itemDateFunction && date) {
                return viewModel.itemDateFunction(date);
            }
        };

        function loadItemsPage(itemId, callback, previous, listingSectionContentIdCurrent) {
            // disable load on scroll
            disableLoadOnScroll();

            var sectionToLoad = listingSectionContentIdCurrent || listingSectionContentId;

            // load the data
            $.getJSON('/content-navigation/GetSectionBasedPage/' + sectionToLoad + '/' + itemId + '/' + previous, function (data, textStatus, jqXHR) {
                if (textStatus === 'success') {
                    if (data !== null && data.length > 0) {
                        addNavigationItems(data, !previous);
                        $articleList1.trigger('pageload');
                        setPhotoAlertButtons();
                    }
                }
                // check for and call any callback function
                UTILITIES.callIfFunction(callback);
                // re-enable load on scroll
                enableLoadOnScroll();
            });
        };

        function loadNextItems(lastItemId, callback, listingSectionContentIdCurrent) {
            loadItemsPage(lastItemId, callback, false, listingSectionContentIdCurrent);
        };

        function loadPreviousItems(firstItemId, callback, listingSectionContentIdCurrent) {
            loadItemsPage(firstItemId, callback, true, listingSectionContentIdCurrent);
        };

        function disableExpansionIfAvailable() {
            $contentNavigation.removeClass(isExpandableCssClass);
        };

        function enableExpansionIfAvailable() {
            if (viewModel.canExpand === true) {
                $contentNavigation.addClass(isExpandableCssClass);
            }
        };

        // stuff that has to happen to get the gallery displaying the way we want it to
        function onGalleryDisplayed() {
            // add gallery displayed class
            //            $sectionNavigationContracted.addClass(galleryDisplayedCssClass);
            // un-fix the subsection headers
            //            releaseContentNavigationSubSectionHeader();
            // remove the load on scroll event from the content navigation
            //            disableLoadOnScroll();
            // remove expansion behavior until galleries support it
            //            disableExpansionIfAvailable();

            setGalleryContentNav();
        };

        function setGalleryContentNav(duration) {
            // scroll so the current item is at the top of the content navigation
            $articleList1.stop(true);

            //$articleList1.scrollTop($articleList1.scrollTop() + $currentArticleNavigationItem.position().top); //, duration, function () { setGallerySize(duration); });

            CONTENTNAVIGATION.GALLERYNAVIGATION.getCloseGalleryElement().show();
        }

        function setGallerySize(duration) {
            // Wait for CONTENTNAVIGATION to be loaded before setting Gallery size
            if (!CONTENTNAVIGATION.isLoaded()) {
                setTimeout(setGallerySize, 100);
            }
            else {
                var $galleries = CONTENTNAVIGATION.GALLERYNAVIGATION.getGalleriesDomElement();
                if ($galleries.length > 0) {
                    var $selectedItem = CONTENTNAVIGATION.GALLERYNAVIGATION.getSelectedItemDomElement();
                    var selectedItemHeight = $selectedItem.height();

                    galleryThumbnailContainerHeight = $(window).height() - $galleries.offset().top + $(window).scrollTop();
                    // Set Galleries Padding-top dynamically to center the thumbnails

                    var paddingTop = (galleryThumbnailContainerHeight - selectedItemHeight) / 2;
                    if (paddingTop > selectedItemHeight / 2)
                        paddingTop = selectedItemHeight / 2;

                    var instructionsHeight = $('.galleryInstructions', $galleries).outerHeight(true);
                    paddingTop -= instructionsHeight;

                    if (paddingTop < 0)
                        paddingTop = 0;

                    $galleries.css('padding-top', paddingTop)
                          .height(galleryThumbnailContainerHeight);

                    // add padding at the bottom of the galleries list so it can be scrolled more than the content and have the selected image in the right position etc.
                    var paddingBottom = $galleries.innerHeight() - paddingTop - selectedItemHeight - instructionsHeight - $('.previewNextArticle', $galleries).outerHeight(true) - 40;
                    paddingBottom = Math.floor(paddingBottom);
                    $('.gallery', $galleries).last().css({ 'padding-bottom': paddingBottom, 'padding-top': 40 });

                    CONTENTNAVIGATION.GALLERYNAVIGATION.setCloseButtonPosition();
                }
            }
        };

        // stuff that has to happen to hide a gallery
        function onGalleryHidden() {
            // remove the gallery displayed class
            $sectionNavigationContracted.removeClass(galleryDisplayedCssClass);
            // fix the subsection headers
            fixContentNavigationSubSectionHeader();
            // add the load on scroll event to the content navigation
            enableLoadOnScroll();
            //enable expansion again (if available) since we removed it on displayed
            enableExpansionIfAvailable();
            // scroll so that the current article is in the 'initial' position again
            scrollToCurrentItem();
        };

        function onSelectedSubSectionChanged() {
            loadInitialData(this.FirstContentId, false, this.ListingSectionContentId);
        };

        function onSubSectionClicked(obj, e) {
            var openCssClass = 'open';
            var $subSectionDomElement = $(e.currentTarget);
            if ($($subSectionDomElement).find(subSectionsSelector).length > 0) {
                $subSectionDomElement.removeClass(openCssClass);
                $subSectionDomElement.find(subSectionsSelector).remove();
            } else {
                $subSectionDomElement.append($subSectionsList.clone(true)).addClass(openCssClass);
            }
        };

        // parse JSON date(s) on navigation item to Date objects
        function parseJsonDate(navigationItem) {
            navigationItem.DisplayDate = UTILITIES.parseJsonDate(navigationItem.DisplayDate);
            return navigationItem;
        };

        function registerOnLoad(callback) {
            if (loaded) {
                callback();
            } else {
                $articleList1.bind('load', callback);
            }
        };

        function registerOnPageLoad(callback) {
            $articleList1.bind('pageload', callback);
        };

        // un-fix any fixed header and remove the on scroll event
        function releaseContentNavigationSubSectionHeader() {
            $articleList1.off('scroll.contentNavigationFixSubSectionHeaders');
            $articleList1.siblings(subSectionSelector + '.' + fixedCssClass).remove();
        };

        function scrollToCurrentItem(callback) {

            $currentArticleNavigationItem = getCurrentNavigationItemDomElement();
            $currentArticleNavigationItemHeader = getCurrentNavigationItemDomElement().find('.navigationItemHeader');
            if ($currentArticleNavigationItem.length !== 0) {
                var $scrollToNavigationItem = $currentArticleNavigationItem.prev('.navigationItem');
                if ($scrollToNavigationItem.length === 0) {
                    $scrollToNavigationItem = $currentArticleNavigationItem.parents('li').prev().find('.navigationItem:last-child');
                }
                if ($scrollToNavigationItem.length === 0) {
                    $scrollToNavigationItem = $currentArticleNavigationItem;
                }
                scrollToItem($scrollToNavigationItem, callback);
            } else {
                UTILITIES.callIfFunction(callback);
            }
        };

        function scrollToItem($navigationItem, callback) {
            $articleList1.animate({ scrollTop: $articleList1.scrollTop() + $navigationItem.position().top - $('.subSection.' + fixedCssClass).outerHeight() }, 0, callback);
        };

        function strongifyNumbers(html) {
            return (html + "").replace(/([\d-]+)/g, "<strong>$1</strong>");
        }

        function initialiseDuringPageLoad() {
            // load in the content navigation for the currently viewed article
            loadInitialData(contentId, true);
        }
        // TODO implement an unregisterOnLoad if needed

        function isLoaded() {
            return loaded;
        }

        function resize() {
            setGallerySize();
            if ($currentSectionHeader && $currentSectionHeader.length) {
                $currentSectionHeader.width($articleList1.find('.navigationItem').outerWidth(true));
            }
        }

        //
        // public
        //
        var pub = {
            articleList: $articleList1,
            getAllNavigationItems: getAllNavigationItems,
            getCurrentNavigationItemData: getCurrentNavigationItemData,
            getCurrentNavigationItemDomElement: getCurrentNavigationItemDomElement,
            getNextNavigationItemDomElement: getNextNavigationItemDomElement,
            getSectionNavigationHeight: getSectionNavigationHeight,
            getSectionNavigationWidth: getSectionNavigationWidth,
            getImageUrl: getImageUrl,
            onGalleryDisplayed: onGalleryDisplayed,
            onGalleryHidden: onGalleryHidden,
            onSelectedSubSectionChanged: onSelectedSubSectionChanged,
            onSubSectionClicked: onSubSectionClicked,
            releaseContentNavigationSubSectionHeader: releaseContentNavigationSubSectionHeader,
            registerOnLoad: registerOnLoad,
            registerOnPageLoad: registerOnPageLoad,
            currentNavigationItemContentId: contentId,
            strongifyNumbers: strongifyNumbers,
            getItemDateString: getItemDateString,
            setGalleryContentNav: setGalleryContentNav,
            isLoaded: isLoaded,
            $sectionTitle: $sectionTitle,
            initialiseDuringPageLoad: initialiseDuringPageLoad,
            setGallerySize: setGallerySize,
            resize: resize
        };
        return pub;
    }();

    var $vogueUI = $('#VogueUI');
    if (CONTENTNAVIGATION.SECTIONNAVIGATION == null) {
        if ($contentNavigationAndContent.hasClass("navAlwaysHidden") || $vogueUI.hasClass("noSectionNavigation")) {
            //CONTENTNAVIGATION.MAINNAVIGATION.navigationChange('', false);
        } else {
            // this means we have no section navigation.... i.e we are on the home page
            CONTENTNAVIGATION.MAINNAVIGATION.navigationChange('toplevelNavigation', true);
        }
    } else {
        CONTENTNAVIGATION.MAINNAVIGATION.navigationChange('sectionNavigation', true);
        CONTENTNAVIGATION.SECTIONNAVIGATION.initialiseDuringPageLoad();
    }

    //
    // namespace for all functionality specific to the gallery navigation within the content navigation panel
    //
    CONTENTNAVIGATION.GALLERYNAVIGATION = function () {
        var imageWidth;
        var disableClickEvent = false;
        var galleryThumbnailContainerHeight;
        var $currentNavigationItemDomElement;
        var $galleries;
        var $galleriesContainer;
        var $galleryListItems;
        var $closeGallery;
        var $galleryNavThumbnailLinks;
        var $galleryNavSectionTitle;
        var $nextNavigationItem;
        var GalleryZoom;
        var initialised = false;
        var $controls;
        var $nextControl;
        var $prevControl;
        var currentItemGalleryData;
        var $lastGalleryItem;
        var $fixedTitle;
        var fixedTitleOuterHeight;
        var galleryHostCloseCallback;
        var $previewNextNavItem;

        function initCloseGalleryButton() {
            $closeGallery = $('#ContentNavigationAndContent .closeGallery');

            if ($closeGallery.length == 0) {
                $('#ContentNavigationAndContent').append($closeGallery = $('<div/>')
                                                                            .addClass('closeGallery hasToolTip')
                                                                            .attr('title', 'Close gallery'));
                $closeGallery.hide();
                LoadToolTips($closeGallery);

                $closeGallery.on('click', function () {
                    $(window).trigger('Gallery.Close');
                });

                $closeGallery.data('bottom', parseInt($closeGallery.css('bottom')));
            }
        }

        function openGallery() {

            logStepStart("openGallery");
            CONTENTNAVIGATION.MAINNAVIGATION.navigationChange('galleryNavigation');
            CONTENTNAVIGATION.SECTIONNAVIGATION.onGalleryDisplayed();
            resize();

            //$currentNavigationItemDomElement.css('top', $galleriesContainer.offset().top - $(window).scrollTop());
            logStepStop("openGallery");
        }

        function closeGallery() {
            CONTENTNAVIGATION.MAINNAVIGATION.navigationChange('sectionNavigation');
            hideGallery();

            $closeGallery.remove();
            //$currentNavigationItemDomElement.css('top', '');
            resetNextNavigationItem();
            GalleryZoom.stopZoom();

            if (galleryHostCloseCallback) {
                galleryHostCloseCallback();
            }
        }

        function changeSelectedImage(event) {
        }

        // display a gallery in the content navigation
        function displayGallery(galleryData, groupIndex, itemIndex, galleryZoom, closeGalleryCallback) {
            GalleryZoom = galleryZoom;

            currentItemGalleryData = getCurrentGalleryData();
            galleryHostCloseCallback = closeGalleryCallback;
            initCloseGalleryButton();

            $(window).unbind("Gallery.Close").bind('Gallery.Close', closeGallery);
            $(window).unbind("Gallery.Open").bind('Gallery.Open', openGallery);

            // TODO: refactor and move to article2012GalleryHost.js if we want gallery not to be dependent on Nav
            $(window).unbind("Gallery.Next").bind('Gallery.Next', function () {
                $nextControl.click();
            });
            $(window).unbind("Gallery.Previous").bind('Gallery.Previous', function () {
                $prevControl.click();
            });

            $galleriesContainer = $('#ContentNavigation .galleriesContainer');
            $galleries = getGalleryScrollableAreaDomElement();

            $nextNavigationItem = CONTENTNAVIGATION.SECTIONNAVIGATION.getNextNavigationItemDomElement();

            // check if the gallery for this item has already been initialised
            if (currentItemGalleryData.itemGroups.length === 0) {

                $currentNavigationItemDomElement = CONTENTNAVIGATION.SECTIONNAVIGATION.getCurrentNavigationItemDomElement();

                // set image width for gallery thumbnails
                setImageWidth();
                // section navigation stuff related to gallery being displayed
                CONTENTNAVIGATION.SECTIONNAVIGATION.onGalleryDisplayed();
                // add the gallery data to the current item in the navigation
                currentItemGalleryData.isGalleryOnly = galleryData.isGalleryOnly;
                currentItemGalleryData.startGroupIndex = galleryData.startGroupIndex;
                currentItemGalleryData.isCircularNavigation = galleryData.isCircularNavigation;

                if (window.USE_KNOCKOUT_FOR_GALLERIES) {
                    /*logStepStart("knockout - displayGallery");
                    currentItemGalleryData.itemGroups.push.apply(currentItemGalleryData.itemGroups, galleryData.itemGroups);
                    logStepStart("knockout - displayGallery");*/
                } else {
                    logStepStart("nonknockout - displayGallery");

                    // add the items to the content navigation's cache of gallery data
                    currentItemGalleryData.itemGroups.push.apply(currentItemGalleryData.itemGroups, galleryData.itemGroups);

                    var $galleriesOl = $galleries.children("ol");
                    if ($galleriesOl.length == 0) {
                        $galleriesOl = $("<ol/>").css('position', 'relative').appendTo($galleries);
                    } else {
                        $galleriesOl.empty();
                    }

                    var $galleriesHeader = $('.galleriesHeader', $galleriesContainer);
                    var $clonedNavItem;
                    $galleriesHeader.append($clonedNavItem = $('.navigationItemHeader', $currentNavigationItemDomElement).clone(true));
                    $('.time,.timeDate,.icons', $clonedNavItem).remove();

                    var subTitleHtml = $currentNavigationItemDomElement.parent().closest('.articleList1Item').find('.subSection').html();

                    var $subTitle = $('<h4 />')
                                        .addClass('subtitle')
                                        .html(subTitleHtml);

                    $('.title', $clonedNavItem).after($subTitle);

                    var $sectionTitle = $('#SectionNavigation .sectionTitle');
                    $('#GalleryNavigation .sectionTitle').replaceWith($sectionTitle.clone(true));

                    if (galleryData.fashionShow == null || (galleryData.fashionShow.Reports != null && galleryData.fashionShow.Reports.length > 0)) {
                        $('.text', $clonedNavItem).append($('<span/>')
                                                            .addClass('showReport')
                                                            .text((galleryData.fashionShow ? 'Show Report' : 'Read Article'))
                                                        );
                    }
                    var selectedGroupIndex = groupIndex;
                    var selectedItemIndex = itemIndex;

                    function createGalleryItem(item, groupIndex, itemIndex) {
                        var isSelected = selectedGroupIndex == groupIndex && selectedItemIndex == itemIndex;

                        var firstImage = item.crops[0];
                        var imageAspect = firstImage.height > firstImage.width ? "portrait" : "landscape";
                        /*var cropForItem = CONTENTNAVIGATION.GALLERYNAVIGATION.getImageCropForDisplay(item.crops);*/
                        var $li = $("<li/>").
                            addClass("galleryItem").
                            click(function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                item.clickItemCallback(null, e);
                            }).
                            mouseover(function (e) { item.mouseoverItemCallback(null, e); }).
                            append($("<a/>").
                                attr("href", item.url).
                                addClass("verticallyCentered").
                                append($("<div/>").
                        // Inline-block causes a layout issue on create where it thinks its width is 0. Set display later
                        //css("display", "inline-block").
                                    addClass("imageHolderForZoom").
                                    addClass(imageAspect).
                                    append(SrcTwizzle.createElement(item.crops, false, true).
                                        addClass("galleryImage")
                        //.addClass(imageAspect)
                                    )
                                )
                            );
                        return $li;
                    }

                    function createGalleryGroupItem(group, groupIndex) {
                        var headingIsVisible = !group.isPrimaryGallery || $currentNavigationItemDomElement.hasClass("ShowWithPhotos") || $currentNavigationItemDomElement.hasClass("ShowWithReportAndPhotos");
                        var $itemContainer;

                        var $li = $("<li/>").
                            addClass("gallery").
                            append(
                                headingIsVisible
                                    ? $("<h4/>").
                                        addClass("galleryTitle").
                                        text(group.title).
                                        click(function () { group.groupClickCallback(null, e); })
                                    : null
                            ).
                            append($itemContainer = $("<ol/>").
                                mouseover(group.mouseoverGroupCallback)
                            );

                        for (var itemIndex = 0; itemIndex < group.items.length; itemIndex++) {
                            var item = createGalleryItem(group.items[itemIndex], groupIndex, itemIndex);
                            $itemContainer.append(item);
                        }

                        return $li;
                    }

                    for (var loopGroupIndex = 0; loopGroupIndex < galleryData.itemGroups.length; loopGroupIndex++) {
                        var actualIndex = convertDisplayIndexIntoActualGroupIndex(loopGroupIndex);
                        var group = galleryData.itemGroups[actualIndex];
                        createGalleryGroupItem(group, actualIndex).appendTo($galleriesOl);
                    }

                    setTimeout(function () {
                        // Fixes bug when display inline-block on create makes imageHolderForZoom have width 0
                        $galleriesOl.find('li.gallery li.galleryItem div.imageHolderForZoom').css('display', 'inline-block');
                    }, 1);

                    if ($nextNavigationItem == null) {
                        // we have no more articles in this section. Don't show a 'see next in CURRENTSECTION' article.
                    } else {
                        $galleries.append($previewNextNavItem = $('<div/>')
                            .append('<div class="seeNextHeader">See next in<h4>' + CONTENTNAVIGATION.SECTIONNAVIGATION.$sectionTitle.text() + '</h4></div>')
                            .append($nextNavigationItem.children().clone(true))
                            .addClass($nextNavigationItem.attr('class'))
                            .addClass('previewNextArticle')
                        );
                    }

                    $galleries.unbind("scroll.galleryThumbTwizzle").bind("scroll.galleryThumbTwizzle", function () {
                        SrcTwizzle.srcTwizzleAll($(this), true);
                    });
                    $('#ContentNavigation .articleList1').unbind("scroll.galleryThumbTwizzle").bind("scroll.galleryThumbTwizzle", function () {
                        SrcTwizzle.srcTwizzleAll($(this), true);
                    });

                    setTimeout(function () {
                        SrcTwizzle.srcTwizzleAll($galleries, true);
                    }, 100);

                    $('.showReport, .title a', $clonedNavItem).off('click.CloseGallery').on('click.CloseGallery', function (e) {
                        $(window).trigger('Gallery.Close');
                        e.preventDefault();
                    });

                    logStepStop("nonknockout - displayGallery");
                }


                $nextControl = $('.next', $galleriesContainer);
                $prevControl = $('.previous', $galleriesContainer);
                $controls = $nextControl.add($prevControl);
                // set the position of the next/previous controls
                //                $controls.css('left', ($galleries.children('li').width() / 2) + 'px');
                // set the height of the gallery thumbnail list so the scrollbars are all cool and stuff

                $galleryListItems = $galleries.find('.gallery');
                $fixedTitle = null;
                fixedTitleOuterHeight = 0;

                $lastGalleryItem = $galleryListItems.last().find('.galleryItem').last();

                $galleries.scroll(function (event) {
                    setCloseButtonPosition();
                });

                // wire up the controls
                $controls.on('click', function (event) {
                    event.stopPropagation();
                    if (initialised && !disableClickEvent) {
                        disableClickEvent = true; // prevents infinite looping of gallery
                        var shift = 1;
                        if ($(this).is($prevControl))
                            shift = -1;

                        var galleryItem = getGalleryItem(shift);
                        //var followingGalleryItem = getGalleryItem(2 * shift);

                        if (galleryItem != null) {
                            galleryItem.click();
                        }

                        setCloseButtonPosition();

                        disableClickEvent = false;
                    }
                });

            }

            $(document).off("keydown.ArticleGallery").on("keydown.ArticleGallery", $.throttle(250, function (event) {
                keyboardNavigation(event);
            }));

            // mark the selected item as such, scroll to it, boogie on down, etc.
            setSelectedItemIndex(groupIndex, itemIndex);

            $galleryNavThumbnailLinks = $('.galleryItem .verticallyCentered');
            $galleryListItems.find('.galleryTitle').click(function () {
                $(this).parent().find('.galleryItem:first-child').click();
            }).css('cursor', 'pointer');

            $galleryNavSectionTitle = $('.galleryTitle.selectedTitle');
            openGallery();

            CONTENTNAVIGATION.SECTIONNAVIGATION.setGallerySize();

            /* scroll positiong was not correct on initial set, need to call again after openGallery() to be correct */
            scrollToSelectedItem();

            initialised = true;
        };

        function convertActualGroupIndexIntoDisplayIndex(groupIndex) {
            var startGroupIndex = currentItemGalleryData.startGroupIndex;

            var displayIndex = groupIndex - startGroupIndex;

            if (displayIndex < 0) displayIndex = displayIndex + currentItemGalleryData.itemGroups.length;

            return displayIndex;
        }

        function convertDisplayIndexIntoActualGroupIndex(displayIndex) {
            var startGroupIndex = currentItemGalleryData.startGroupIndex;

            var actualGroupIndex = startGroupIndex + displayIndex;
            if (actualGroupIndex >= currentItemGalleryData.itemGroups.length) {
                actualGroupIndex = actualGroupIndex - currentItemGalleryData.itemGroups.length;
            }

            return actualGroupIndex;
        };

        function setCloseButtonPosition() {
            if ($galleries != null) {
                var containerTop = $galleriesContainer.scrollTop() - 1;
                var containerOffsetTop = $galleries.offset().top;
                var containerOffsetBottom = containerOffsetTop + $galleries.outerHeight();

                var lastGalleryItemTop = $lastGalleryItem.offset().top;
                var lastGalleryItemBottom = lastGalleryItemTop + $lastGalleryItem.outerHeight();

                // Check if last gallery item is in viewable area
                if ((containerOffsetTop < lastGalleryItemTop) && (containerOffsetBottom > lastGalleryItemBottom)) {

                    var previewNavItemHeight = $previewNextNavItem.outerHeight(true);
                    var shift = (containerOffsetBottom - $previewNextNavItem.offset().top - previewNavItemHeight);
                    if (shift > 0)
                        shift = 0;

                    var closeGalleryShift = shift + previewNavItemHeight + 10; // add 10px padding so the elements dont touch
                    var closeGalleryBottomPosition = $closeGallery.data('bottom');
                    if (closeGalleryShift < closeGalleryBottomPosition)
                        closeGalleryShift = closeGalleryBottomPosition;

                    //$previewNextNavItem.css({ bottom: shift });
                    $closeGallery.css({ bottom: closeGalleryShift });
                }
                else {
                    resetCloseGalleryButton();
                }
            }
        }

        function keyboardNavigation(e) {
            if (initialised && !CONTENTNAVIGATION.TOPICBAR.SEARCHBOX.isFocused()) {
                switch (e.which) {
                    case KEYCODES.DOWN_ARROW:
                    case KEYCODES.RIGHT_ARROW:
                        $(window).trigger('Gallery.Next');
                        if (typeof _gaq !== 'undefined') {
                            _gaq.push(["_trackEvent", "Gallery", "Keyboard navigation - Next"]);
                        }
                        e.preventDefault();
                        break;

                    case KEYCODES.UP_ARROW:
                    case KEYCODES.LEFT_ARROW:
                        $(window).trigger('Gallery.Previous');
                        if (typeof _gaq !== 'undefined') {
                            _gaq.push(["_trackEvent", "Gallery", "Keyboard navigation - Previous"]);
                        }
                        e.preventDefault();
                        break;
                }
            }
        }

        function getGalleryItem(shiftBy) {
            var moveToItemIndex = -1;
            var moveToGroupIndex = -1;
            var $currentSelectedItem = getSelectedItemDomElement();
            var $currentSelectedItemGallery = getSelectedItemGalleryDomElement();
            var currentSelectedItemIndex = $currentSelectedItem.index();
            var currentSelectedItemGroupIndex = $currentSelectedItemGallery.index();

            if (shiftBy > 0) {
                var maxItemIndex = $currentSelectedItem.parent().children().length - 1;
                var maxGroupIndex = $currentSelectedItemGallery.parent().children().length - 1;
                if (currentSelectedItemIndex + shiftBy <= maxItemIndex) {
                    moveToItemIndex = currentSelectedItemIndex + shiftBy;
                    moveToGroupIndex = currentSelectedItemGroupIndex;
                } else if (currentSelectedItemGroupIndex < maxGroupIndex) {
                    moveToItemIndex = 0;
                    moveToGroupIndex = currentSelectedItemGroupIndex + 1;
                } else if (currentItemGalleryData.isCircularNavigation) {
                    moveToItemIndex = 0;
                    moveToGroupIndex = 0;
                }
            } else {
                var minItemIndex = 0;
                var minGroupIndex = 0;

                if (currentSelectedItemIndex + shiftBy >= minItemIndex) {
                    moveToItemIndex = currentSelectedItemIndex + shiftBy;
                    moveToGroupIndex = currentSelectedItemGroupIndex;
                } else if (currentSelectedItemGroupIndex > minGroupIndex) {
                    moveToItemIndex = $currentSelectedItemGallery.prev().find(".galleryItem").length + shiftBy;
                    moveToGroupIndex = currentSelectedItemGroupIndex - 1;
                }
                else if (currentItemGalleryData.isCircularNavigation) {
                    moveToItemIndex = $currentSelectedItemGallery.parent().children().last().find(".galleryItem").length + shiftBy;
                    moveToGroupIndex = $currentSelectedItemGallery.parent().children().length - 1;
                }
            }

            if (moveToItemIndex !== -1 && moveToGroupIndex !== -1) {
                return $($(getGalleriesDomElement().find('.gallery').get(moveToGroupIndex)).find('.galleryItem').get(moveToItemIndex));
            }
            else
                return null;
        }

        function validateCachedVariables() {
            if ($galleryNavThumbnailLinks == null)
                $galleryNavThumbnailLinks = $('.galleryItem .verticallyCentered');
            if ($galleryNavSectionTitle == null)
                $galleryNavSectionTitle = $('.galleryTitle.selectedTitle');
            if ($nextNavigationItem == null)
                $nextNavigationItem = CONTENTNAVIGATION.SECTIONNAVIGATION.getNextNavigationItemDomElement();
        }

        function resize() {
            if (CONTENTNAVIGATION.SECTIONNAVIGATION === null)
                return;
            if ($galleries == null || $galleries.length == 0)
                return;

            validateCachedVariables();

            var galleryWidth = CONTENTNAVIGATION.SECTIONNAVIGATION.getSectionNavigationWidth();
            var galleryInnerWidth = $galleries.innerWidth() - $.scrollbarWidth();

            $galleryNavSectionTitle.width(galleryInnerWidth);

            if (VOGUE.isIE) {
                // Fix for IE as it doesnt correctly apply max-width on display:table-cell
                /*$galleryNavThumbnailLinks.children('img.landscape').width(galleryInnerWidth);*/
            }

            CONTENTNAVIGATION.SECTIONNAVIGATION.setGalleryContentNav(initialised ? 0 : null);

            GalleryZoom.initZoom();
        }


        // hide any displayed gallery in the content navigation
        function hideGallery() {
            CONTENTNAVIGATION.SECTIONNAVIGATION.onGalleryHidden();
        };

        function getCurrentGalleryData() {
            return CONTENTNAVIGATION.SECTIONNAVIGATION.getCurrentNavigationItemData().gallery;
        };

        // returns the DOM element that is the scrollable region of the gallery
        function getGalleryScrollableAreaDomElement() {
            return $('.galleries', $galleriesContainer);
        };

        // returns the DOM element that holds all of the galleries
        function getGalleriesDomElement() {
            return $('.galleries', $galleriesContainer);
        };

        function resetCloseGalleryButton() {
            $closeGallery.css('bottom', '');
        }

        function resetNextNavigationItem() {
            //            var $nextNavigationItem = CONTENTNAVIGATION.SECTIONNAVIGATION.getNextNavigationItemDomElement();
            //            $nextNavigationItem.removeClass('previewNextArticle');
            //            $nextNavigationItem.css('bottom', '');
            //            $nextNavigationItem.css('width', '');
            //            $('.seeNextHeader', $nextNavigationItem).remove();
        };

        function getImageCropForDisplay(images) {
            var crop = null;
            $.each(images, function (index, image) {
                crop = image;
                if (image.width >= imageWidth) {
                    return false;
                }
            });
            return crop;
        };

        function getImageUrl(images) {
            var imageUrl = '';
            var crop = getImageCropForDisplay(images);
            if (crop !== null) {
                imageUrl = crop.url;
            }
            return imageUrl;
        };

        // get the DOM element of the currently selected item in the currently selected gallery
        function getSelectedItemDomElement() {
            return $('.selected', $galleriesContainer);
        };

        // return the DOM element of the gallery of the currently selected image (remember that there maybe be multiple galleries on one page)
        function getSelectedItemGalleryDomElement() {
            return getSelectedItemDomElement().closest('.gallery');
        };

        function setImageWidth() {
            // set image width for gallery thumbnails
            imageWidth = 200 * UTILITIES.getDevicePixelRatio(); // TODO: Use a real value
        };

        function setSelectedItemIndex(groupIndex, itemIndex, isUiIndex) {
            // validate input
            if (groupIndex === null || typeof groupIndex === 'undefined' || itemIndex === null || typeof itemIndex === 'undefined') {
                return;
            }
            // cache the current navigation item (the 'article' not the 'gallery item')
            $currentNavigationItemDomElement = CONTENTNAVIGATION.SECTIONNAVIGATION.getCurrentNavigationItemDomElement();
            // convert 'data group index' to 'UI group index'
            var galleryUiIndex = convertActualGroupIndexIntoDisplayIndex(groupIndex);
            // un-select the currently selected gallery item
            getSelectedItemDomElement().removeClass('selected');
            // mark the new gallery item as selected
            var selectedGroup = $galleriesContainer.find('.gallery').eq(galleryUiIndex);
            var $newSelectedItem = selectedGroup.find('li').eq(itemIndex);
            $newSelectedItem.addClass('selected');

            scrollToSelectedItem();

            var $currentImageNavItem = getSelectedItemDomElement();

            // move the controls within the current gallery item
            $currentImageNavItem.append($controls);

            // Set Next/Previous control visibility. Hide previous at start of the list and hide next at the end of the list.
            $controls.show();
            if (!currentItemGalleryData.isCircularNavigation) {
                var displayGroupIndex = convertActualGroupIndexIntoDisplayIndex(groupIndex);
                var isFirstDisplayedGroup = displayGroupIndex == 0;
                var isLastDisplayedGroup = displayGroupIndex == ($('.gallery', $galleries).length - 1);
                if (isFirstDisplayedGroup && itemIndex == 0) {
                    $prevControl.hide();
                }
                if (isLastDisplayedGroup && itemIndex + 1 == $($('.gallery', $galleries).get(galleryUiIndex)).find('li').length) {
                    $nextControl.hide();
                }
            }

            GalleryZoom.initZoom();
            $newSelectedItem.find("img").load(function () {
                GalleryZoom.initZoom();
            });

        };

        function scrollToSelectedItem() {
            // scroll to the selected item
            var $scrollableArea = getGalleryScrollableAreaDomElement();
            var $currentImageNavItem = getSelectedItemDomElement();
            if ($currentImageNavItem != null && $currentImageNavItem.length > 0) {
                var currentItemPosition = $currentImageNavItem.position();

                var imgMargin = $currentImageNavItem.outerHeight() - $currentImageNavItem.children(':first-child').outerHeight();
                if (isNaN(imgMargin))
                    imgMargin = 0;

                //                var scrollAreaTopPadding = $scrollableArea.scrollTop() + parseInt($scrollableArea.children('ol').position().top);
                //                if (isNaN(scrollAreaTopPadding))
                //                    scrollAreaTopPadding = 0;



                $scrollableArea.scrollTop(currentItemPosition.top - imgMargin);
            }
        };

        function getCloseGalleryElement() {
            return $closeGallery;
        }

        //
        // public
        //
        var pub = {
            displayGallery: displayGallery,
            getImageCropForDisplay: getImageCropForDisplay,
            getGalleriesDomElement: getGalleriesDomElement,
            getImageUrl: getImageUrl,
            getSelectedItemDomElement: getSelectedItemDomElement,
            setSelectedItemIndex: setSelectedItemIndex,
            scrollToSelectedItem: scrollToSelectedItem,
            getCloseGalleryElement: getCloseGalleryElement,
            setCloseButtonPosition: setCloseButtonPosition,
            resize: resize
        };
        return pub;
    } ();

    /* History */
    CONTENTNAVIGATION.HISTORY = function () {

        //Switch to turn History ON/OFF
        var historyEnabled = true;

        if (historyEnabled) {

            saveToHistory(CONTENTIDENTIFIERS.currentSectionId(), CONTENTIDENTIFIERS.currentContentId());

            var hist = getHistory();
            if (hist != null && hist.length >= 2) {
                $('#HistoryButton').css('display', 'block');
            }

            var mouseoverHistory = false;
            $('#History').mouseenter(function () {
                mouseoverHistory = true;
            }).mouseleave(function () {
                mouseoverHistory = false;
            });

            var mouseOverHistoryButton = false;
            $('#HistoryButton').mouseenter(function () {
                mouseOverHistoryButton = true;
            }).mouseleave(function () {
                mouseOverHistoryButton = false;
            });

            function openCloseHistory(btn) {
                var historyPanel = $('#History');
                if (historyPanel.hasClass('closed')) {
                    setupHistoryPanel();
                    historyPanel.removeClass('closed');
                    var topPos = (($('#NavigationBar > span:visible').length - 1) * 61) + 6;
                    historyPanel.css('top', topPos + 'px');
                    historyPanel.addClass('open');
                    if (typeof _gaq !== 'undefined') {
                        _gaq.push(['_trackEvent', 'History', 'Opened']);
                    }

                    $('body').click(function () {
                        if (!mouseoverHistory && !mouseOverHistoryButton) {
                            historyPanel.removeClass('open');
                            historyPanel.addClass('closed');
                            btn.removeClass('selected');
                        }
                    });
                } else {
                    historyPanel.removeClass('open');
                    historyPanel.addClass('closed');
                }
                if (btn.hasClass('selected')) {
                    btn.removeClass('selected');
                } else {
                    btn.addClass('selected');
                }
            }

        }

        function saveToHistory(sectionId, contentId) {
            //section ID will be empty on Home Page
            //topic page doesn't have section, create it
            if (sectionId == "") {
                if (contentId.split('.')[0] == 'topic') {
                    sectionId = contentId;
                }
                else {
                    return null;
                }
            }
            var currentHistory = {
                sectionId: sectionId,
                content: [{ contentId: contentId, dateViewed: Date()}]
            };
            if (getHistory() == null) {
                //create new cookie
                var data = new Array();
                data.push(currentHistory);
                $.cookie('vogueUKNavigation', JSON.stringify(data), { expires: 600, path: '/' });
            }
            else {
                var historyArray = getHistory();
                var exists = false;
                for (var i = 0; i <= historyArray.length - 1; i++) {
                    if (historyArray[i].sectionId == sectionId) {
                        //section already exists, so update
                        //need to remove element to ensure time order is preserved
                        historyArray[i] = null;
                        historyArray.push(currentHistory);
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    //create new history object
                    historyArray.push(currentHistory);
                }
                var orderedArray = new Array();
                for (var x = 0; x <= historyArray.length - 1; x++) {
                    if (historyArray[x])
                        orderedArray.push(historyArray[x]);
                }
                $.cookie('vogueUKNavigation', JSON.stringify(orderedArray), { path: '/' });
            }
        };

        function getHistory() {
            var cleanedHistory = new Array();
            var history;
            try {
                history = JSON.parse($.cookie('vogueUKNavigation', { path: '/' }));
            } catch (e) {
                // cookie value may be blank string or corrupt.
                history = null;
            }
            if (history == null) {
                return null;
            }
            $.each(history, function (index, value) {
                //Do not get data/display data for topic pages
                if (value.sectionId.split('.')[0] != 'topic') {
                    //Do not get data/display data for list pages
                    if (value.sectionId != value.content[0].contentId) {
                        cleanedHistory.push(value);
                    }
                }
            });
            if (cleanedHistory.length == 0)
                return null;
            return cleanedHistory;
        };

        //Track click event of history article
        $('#History ol').click(function (event) {
            var elem = $(event.target).closest('a');
            if (typeof _gaq !== 'undefined') {
                _gaq.push(['_trackEvent', 'History', 'Article Clicked', elem.find('p').text(), elem.attr('href')]);
            }
        });

        function setupHistoryPanel() {
            if (!$('#History .loading').hasClass('loaded')) {
                $('#History ol').empty();
                var history = getHistory();
                var contentIds = new Array();
                var maxHistoryItems = 4;
                var count = 1;
                $.each(history.reverse(), function (index, value) {
                    if (count <= maxHistoryItems) {
                        contentIds.push(value.content[0].contentId);
                        count++;
                    } else {
                        return;
                    }
                });

                var queryString = '?contentIds=' + contentIds;
                $.getJSON("/controllers/contentnavigation/gethistoryitems" + queryString, function (data) {

                    //for loop over data returned
                    for (var i = 0; i <= data.length - 1; i++) {
                        var dateViewed = new Date(history[i].content[0].dateViewed);
                        var lastViewed = TimePeriod(dateViewed, new Date());
                        lastViewed = "Read " + ((lastViewed == 'Just now') ? 'Just now' : lastViewed + ' ago');

                        //if current article say "Reading now"
                        if (history[i].content[0].contentId == CONTENTIDENTIFIERS.currentContentId()) {
                            lastViewed = "Reading Now";
                        }

                        var imgElement = "";
                        var noImageClass = "";
                        if (data[i].ArticleImageUrl != "") {
                            imgElement = "<img class='" + data[i].ImageOrientation + "' src='" + data[i].ArticleImageUrl + "'>";
                        } else {
                            noImageClass = "noImage";
                        }
                        var cssClass = "";
                        if (i == 0) {
                            cssClass = ' class="first" ';
                        }
                        var articleTitle = data[i].ArticleTitle;
                        var articleURL = data[i].ArticleUrl;

                        $('#History ol').append('<li' + cssClass + '><a' + cssClass + ' href="' + articleURL + '" >' + imgElement + '<span class="textContent ' + noImageClass + '"><h4>' + data[i].SectionName + '</h4><p>' + articleTitle + '</p><span class="time">' + lastViewed + '</span></span></a></li>');
                    }
                    $('#History .loading').addClass('loaded');
                });
            }
        };



        var pub = {
            saveToHistory: saveToHistory,
            getHistory: getHistory,
            setupHistoryPanel: setupHistoryPanel,
            openCloseHistory: openCloseHistory
        };

        return pub;
        /* 
        When a page loads, we know the section id and content id.
        We always store the different sections a user has visited, and the last content id in each section.

        A section is either the section the article is in, 
        or the topic it is in (if the user has viewed that topic without going to another list page) immediately before navigating to an article

        */

        /* on load:
        if is a list page, get current section or topic (you know you are on a topic page if the contentid is of the format topics.x), and add it to the cookie, without a specific content id
        if it is a content page, if it is under a collected section, move that section to top of list in cookie, and put this content id as attached
        if the content has a topic which matches a previously visited topic timeline, move that topic section to top of list in cookie, and put this content id as attached
        (all this information is available within the content as data attributes)
        conversely, the CONTENTNAVIGATION.SECTIONNAVIGATION should call a method on CONTENTNAVIGATION.HISTORY to work out if it should be asking for topic timeline as section navigation, or a sections timeline
        */
    } ();

    checkContentLoadComplete();
});

/* END: Content navigation */



function SearchBox($searchInput, options) {

    var defaults = {
        cookieKey: "SearchBoxInput",
        cookieLifespanDays: 1,
        searchUrlPrefix: "/search?q=",
        expandable: !VOGUE.isTouchDevice,
        expandedWidth: 225,
        expandDuration: 500,
        collapseDuration: 400
    };
    
	options = $.extend(defaults, options);

    var initialised = false;
    var $searchContainer;
    var $searchButton;
    var $searchResultsContainer;
    var $searchResultsContainerScrollable;

    var viewModel = {
        SearchTerm: ko.observable(),
        SearchUrl: ko.observable(),
        Groups: ko.observableArray()
    };
    viewModel.SearchUrl = ko.computed(function () {
        return options.searchUrlPrefix + viewModel.SearchTerm();
    });

    function isValidSearchTerm(searchTerm) {
        if (searchTerm == undefined)
            searchTerm = $searchInput.val();

        return searchTerm + "" != "";
    };

    function cookieExists() {
        var cookieVal = $.cookie(options.cookieKey);
        return cookieVal != null && cookieVal != "";
    };

    function rememberSearchTerm() {
        if ($searchInput.val() + "" != "") {
            $.cookie(options.cookieKey, $searchInput.val(), { expires: options.cookieLifespanDays });
        }
    };

    // Setup.

    var resizeLock = false;
    var focusFlag = false;
    var focusOutTimeout;

    function setupSearchBox() {
        if ($searchInput.length == 0) {
            return;
        }
        $searchContainer = $searchInput.parent();
        $searchContainer.append('<div class="searchBoxButton" />');
        $searchButton = $searchContainer.find(".searchBoxButton");

        $searchInput.change(function (event) {
            log('search input changed');
            if ($searchInput.val().length > 0) {
                $searchContainer.addClass('hasSearchText');
            }
            else {
                $searchContainer.removeClass('hasSearchText');
            }
            search($searchInput.val());
        });

        $searchInput.focusin(function (event) {
            $searchInput.select();
        });

        if (cookieExists()) {
            log('set search input from cookie');
            $searchInput.val($.cookie(options.cookieKey)).change();
        }

        $searchContainer.click(function (event) {
        	if (VOGUE.isIpad == true) {
        		expandSearchBox_ContainerClick_IPad();
        	} else {
        		expandSearchBox();
        	}

        	$searchInput.change();
        });

        $searchContainer.focusin(function (event) {
        	expandSearchBox();
        	preventFocusOut();
        	log('$searchContainer.focusin');
        }).focusout(function (event) {
        	focusFlag = false;
        	log('$searchContainer.focusout');
        	focusOutTimeout = setTimeout(collapseSearchBox, 200);
        });

        $searchContainer.css('min-width', SumVisibleChildrenWidths($searchContainer) + 4);

        $searchContainer.keydown(function (e) {
            if (e.keyCode == KEYCODES.DOWN_ARROW) {
                e.preventDefault();
                // select next
                selectResult(1);
            }
            else if (e.keyCode == KEYCODES.UP_ARROW) {
                e.preventDefault();
                // select previous
                selectResult(-1);
            }
            else if (e.keyCode == KEYCODES.ESCAPE) {
                e.preventDefault();
                $searchContainer.blur();
            }
            else if (e.keyCode == KEYCODES.ENTER) {
                rememberSearchTerm();
            }
        });

        $searchButton.click(function (event) {
            event.stopPropagation();
            if ($searchContainer.hasClass('expanded') && $searchContainer.hasClass('hasSearchText')) {
                $.cookie(options.cookieKey, null);
                $searchInput.val("").change();
            }
            if (options.expandable) {
                $searchInput.select();
            }
        });

        $searchInput.attr("autocomplete", "off");

        $searchContainer.append("<div class=\"searchBoxResults\"><div class=\"scrollable\" /></div>");
        $searchResultsContainer = $searchContainer.children(".searchBoxResults");
        $searchResultsContainerScrollable = $searchResultsContainer.children(".scrollable");
        $searchResultsContainerScrollable.html(resultsTemplate);
        ko.applyBindings(viewModel, $searchResultsContainerScrollable.get(0));

        $searchInput.keydown(function (e) {
            if (e.keyCode == KEYCODES.ENTER) {
                e.preventDefault();
                // DO SEARCH
                window.location = viewModel.SearchUrl();
            }
        });

        $searchInput.keyup(function (e) {
            $searchInput.change();
        });

        $searchInput.keyup(
            $.debounce(100, function () {
                if (!resizeLock) {
                    search($searchInput.val());
                }
            })
        );

        $searchResultsContainerScrollable.scroll(function (event) {
            log('$searchResultsContainer.scrollable.scroll');
            preventFocusOut();
        });
    };

	function expandSearchBox_ContainerClick_IPad() {
		// Bug: iPad bug fix/workaround.
		// TODO: Still needs fixing properly.
		// This workaround defers the browser crash problem until after user has had a chance to search once.
		// Problem: setting the width of $searchInput causes the browser to crash next time the element is clicked! Yet oddly, unless width is set, the input field does not work properly e.g. characters typed are not displayed.
		// See expandSearchBox().

		if (!$searchContainer.hasClass('expanded')) {
			$searchInput.width(options.expandedWidth); // Unless width is set, characters within the field are not visible. Why???
		}

		search($searchInput.val());
		$searchInput.focus();
		expandComplete();		
	}

    function expandSearchBox() {

	    if (!resizeLock) {
            if (!$searchContainer.hasClass('expanded')) {
            	resizeLock = true;
            	// Bug: iPad bug fix/workaround.
            	if (VOGUE.isIpad == true) {
            		// On iPad, if width has been set in expandSearchBox() function on page load, selecting the search input crashes the browser. For reasons as yet unknown.
            		// On iPad the expandSearchBox() function is called when the page loads, and not when the search input is selected.
            		// On iPad the expandSearchBox() function is NOT called when the page loads, but is called when the search input is selected.
            		// See expandSearchBox_ContainerClick_IPad().
                } else {
	               	$searchInput.animate(
                        { width: options.expandedWidth },
                        {
                        	duration: (options.expandable ? options.expandDuration : 1),
                        	easing: 'swing',
                        	step: function () { $searchContainer.trigger('resized'); },
                        	complete: expandComplete
                        }
                    );
                }
            }
            else {
                search($searchInput.val());
            }
        }
    }

	function expandComplete() {
		$searchContainer.addClass('expanded');
		$searchContainer.trigger('resized');
		if (options.expandable) {
			search($searchInput.val());
			$searchInput.focus();
		}
		resizeLock = false;
	}

    function collapseSearchBox() {
        if (!resizeLock) {
            if (!focusFlag) {
                $searchResultsContainer.hide();
                if (options.expandable && $searchContainer.hasClass('expanded')) {
                    resizeLock = true;
                    $searchContainer.removeClass('expanded');
                    $searchInput.animate(
                        { width: 0 },
                        {
                            duration: options.collapseDuration,
                            easing: 'swing',
                            step: function () { $searchContainer.trigger('resized'); },
                            complete: function () {

                                $searchContainer.trigger('resized');
                                resizeLock = false;
                            }
                        }
                    );
                }
                focusFlag = false;
            }
        }
    }

    function preventFocusOut() {
        focusFlag = true;
        clearTimeout(focusOutTimeout);
        setTimeout(function () { focusFlag = true; }, 30);
    }

    function selectResult(shift) {
        var $resultLinks = $searchResultsContainer.find('a');
        var $focusedResult = $searchResultsContainer.find('a:focus');
        var focusedIndex = $resultLinks.index($focusedResult);

        focusedIndex = focusedIndex + shift;

        if (focusedIndex >= $resultLinks.length)
            focusedIndex = $resultLinks.length - 1;

        preventFocusOut();
        if (focusedIndex >= 0) {
            $($resultLinks.get(focusedIndex)).focus();
        }
        else {
            $searchInput.focus();
        }
        focusFlag = true;
    }

    function cleanSearchTerm(searchTerm) {
        searchTerm = $.trim(searchTerm);
        searchTerm = searchTerm.replace("   ", " ");
        searchTerm = searchTerm.replace("  ", " ");
        searchTerm = searchTerm.replace("<", " ");
        return searchTerm.toLowerCase();
    };

    this.resultsCount = 0; // Used only for tracking purposes.

    var resultsTemplate = '<div class="primarySearch"><a data-bind="attr: { href: SearchUrl}"><span class="label">Search for </span>\'<span data-bind="html: SearchTerm" />\'</a></div>'
                          + '<ul class="resultsList" data-bind="foreach: Groups">'
                          + '<li data-bind="if: Items.length > 0">'
                          + '<div class="categoryName" data-bind="html: CategoryName"></div>'
                          + '<ol class="topicList" data-bind="foreach: Items">'
                          + '<li>'
                          + '<a data-bind="attr: { href: Url, title: Subtitle}, html: Title"></a>'
                          + '</li>'
                          + '</ol>'
                          + '</div>'
                          + '</li>'
                          + '</ul>';

    var lastSearchTerm = '';

    function search(searchTerm) {
        if (initialised) {
            $searchResultsContainer.hide();
            searchTerm = cleanSearchTerm(searchTerm);

            if (isValidSearchTerm(searchTerm) && $searchContainer.hasClass('expanded')) {
                $searchResultsContainer.show();

                if (searchTerm != lastSearchTerm) {
                    rememberSearchTerm();
                    if (searchTerm.length > 1) {
                        lastSearchTerm = searchTerm;
                        viewModel.SearchTerm(searchTerm);
                        $searchResultsContainerScrollable.scrollTop(0);

                        $.ajaxSetup({ cache: true });
                        // TODO: Add a few millisecs of latency, to reduce unnecessary API calls while still typing.
                        $.getJSON("/content-searching/GetMatchingTopics?q=" + encodeURIComponent(searchTerm), function (data) {
                            if (data == null || data.length == 0) {
                                viewModel.SearchTerm(searchTerm);
                                viewModel.Groups('');
                                return;
                            }

                            // section level properties set on view model
                            //viewModel.SearchTerm(data.SearchTerm);
                            viewModel.Groups(data.CategoryMatches);

                            if (data.MatchesSingleTopic) {
                                preventFocusOut();
                                $searchResultsContainer.find("a:textEquals('" + data.SearchTerm + "')").focus();
                            }
                        });
                    }
                    else {
                        viewModel.SearchTerm(searchTerm);
                        viewModel.Groups(null);
                    }
                }
            }
        }
    }

    // Main public method, initialises site search.
    function init() {
        if (!$('body').hasClass('mobileSite')) {
            setupSearchBox();
            if (!options.expandable) {
                expandSearchBox();
            }
            initialised = true;
        }
    };

    init();

    function resize() {
        if (initialised) {
            // TODO: any resizing required
        }
    }

    function isFocused() {
        return focusFlag;
    }

    var pub = {
        resize: resize,
        isFocused: isFocused
    };

    return pub;
}

CONTENTNAVIGATION.TOPICBAR = function () {
    var $topicBar;
    var $related;
    var $relatedTopicList;
    var $relatedScrollable;
    var $relatedScrollContainer;
    var $relatedScrollLeft;
    var $relatedScrollRight;
    var relatedTopicListWidth = 0;
    var $searchContainer;
    var $searchTextBox;

    function init() {
        $topicBar = $('#TopicBar');
        if (($topicBar).length==0) return;
        $related = $topicBar.find('.related');
        $relatedScrollable = $related.find('.scrollable');
        $relatedTopicList = $relatedScrollable.find('.topicList');
        $searchContainer = $topicBar.find('.searchBoxContainer');
        $searchTextBox = $searchContainer.find('.searchBoxInput');

        $related.append('<div class="scrollContainer"><div class="scrollLeft" /><div class="scrollRight" /></div>');
        $relatedScrollContainer = $related.find('.scrollContainer');
        $relatedScrollLeft = $relatedScrollContainer.find('.scrollLeft');
        $relatedScrollRight = $relatedScrollContainer.find('.scrollRight');

        setButtonsState();

        $relatedScrollLeft.click(function () {
            var leftPos = $relatedScrollable.scrollLeft();
            $relatedScrollable.animate({ scrollLeft: leftPos - 150 }, 250, 'swing', setButtonsState);
        });
        $relatedScrollRight.click(function () {
            var leftPos = $relatedScrollable.scrollLeft();
            $relatedScrollable.animate({ scrollLeft: leftPos + 150 }, 250, 'swing', setButtonsState);
        });

        relatedTopicListWidth = $relatedTopicList.outerWidth(true);

        $searchContainer.bind('resized', function (event, ui) {
            //  log('search container resized');
            resize();
        });
        $(window).resize(function () {
            resize();
        });

        var searchBoxWidth = 225;
        var windowWidth = $(window).width();
        if (windowWidth / 5 < searchBoxWidth) {
            searchBoxWidth = Math.floor(windowWidth / 5);
            $searchContainer.css('margin-right', Math.floor(parseInt($searchContainer.css('margin-right')) / 2));
        }
        CONTENTNAVIGATION.TOPICBAR.SEARCHBOX = new SearchBox($searchTextBox, { expandedWidth: searchBoxWidth });

        $relatedTopicList.width(SumVisibleChildrenWidths($relatedTopicList) + 4);

        resize();
    }

    function resize() {
        if (CONTENTNAVIGATION.TOPICBAR.SearchBox != null)
            CONTENTNAVIGATION.TOPICBAR.SearchBox.resize();

        if ($related == null) return;
        //  log('resize topic bar');
        
        $relatedTopicList.width(SumVisibleChildrenWidths($relatedTopicList) + 4);
        // Set max-width of relatedScrollable content to fit space provide
        $related.css('width', $topicBar.width() - $searchContainer.outerWidth(true) - 20);

        $relatedScrollContainer.show();

        FitToWidth($relatedScrollable);

        if ($relatedTopicList.outerWidth(true) < $relatedScrollable.width()) {
            $relatedScrollContainer.hide();
        }
        else {
            $relatedScrollable.width($relatedScrollable.width() + 20);
        }
    }

    function setButtonsState() {
        $relatedScrollLeft.removeClass('disabled');
        $relatedScrollRight.removeClass('disabled');
        var leftPos = $relatedScrollable.scrollLeft();

        if (leftPos <= 0) {
            $relatedScrollLeft.addClass('disabled');
        }
        else if (leftPos + $relatedScrollable.width() >= $relatedTopicList.width()) {
            $relatedScrollRight.addClass('disabled');
        }
    }

    $(function () {
        init();
    });

    var pub = {
        resize: resize
    };

    return pub;
} ();

var TOPICS = {};
TOPICS.NAVLIST = function () {
    var $topicsNavList;
    var $topicsNavListItems;
    var initialised = false;

    function init() {
        $topicsNavList = $('#Content div.topicsContainer > .topicsNavList');
        if ($topicsNavList.length > 0) {
            $topicsNavListItems = $topicsNavList.children('li');
            initialised = true;
            resize();
        }
    }

    function resize() {
        if (initialised) {
            // TODO: try inline-block... if not, work on resizing the ol based on how many could fit within the parent width
            var availableWidth = $topicsNavList.parent().width();
            // Reset widths and styles
            $topicsNavListItems.width('auto');
            $topicsNavList.width('auto').removeClass('lineupleft');
            
            if ($topicsNavListItems.length > 0 && $topicsNavList.height() >= 2 * $topicsNavListItems.first().outerHeight()) {
                $topicsNavList.addClass('lineupleft');
                UTILITIES.setEqualWidth($topicsNavListItems);
                var itemWidth = $topicsNavListItems.first().outerWidth();
                var maxItemColumnCount = Math.floor(availableWidth / itemWidth);
                var itemColumnCount = Math.ceil($topicsNavListItems.length / Math.ceil($topicsNavListItems.length / maxItemColumnCount));
                $topicsNavList.width(itemColumnCount * itemWidth);
            } else {
                var width = 0;
                $topicsNavListItems.each(function () {
                    width += $(this).outerWidth(true);
                });
                width += 2; // cause IE fails
                $topicsNavList.width(width);
            }
        }
    }

    $(function () {
        init();
    });

    var pub = {
        resize: resize
    };

    return pub;

} ();

function SumVisibleChildrenWidths($el) {
    var width = 0;
    $el.children().each(function () {
        var $this = $(this);
        if ($this.is(':visible'))
            width += $this.outerWidth(true);
    });

    return width;
}

function SumVisibleChildrenHeights($el) {
    var height = 0;
    $el.children().each(function () {
        var $this = $(this);
        if ($this.is(':visible'))
            height += $this.outerHeight(true);
    });

    return height;
}

function FitToWidth($el) {
    var $parent = $el.parent();
    //var parentWidth = $parent.width();
    var siblingWidths = SumVisibleChildrenWidths($parent);
    var elWidth = $el.innerWidth();
    var elSpacing = $el.outerWidth(true) - elWidth;
    $el.width($parent.width() - siblingWidths + elWidth - elSpacing);
}

function FitToHeight($el) {
    var $parent = $el.parent();
    //var parentHeight = $parent.height();
    var siblingHeights = SumVisibleChildrenHeights($parent);
    var elHeight = $el.innerHeight();
    var elSpacing = $el.outerHeight(true) - elHeight;
    $el.height($parent.height() - siblingHeights + elHeight - elSpacing);
}

$(function () {
    var topBar = $('#TopicBar');
    var leftBar1 = $('#NavigationBar');
    var leftBar2 = $('#ContentNavigation');
    window.TOP_FIXED_ELEMENT_HEIGHT = function () {
        return topBar.outerHeight(true);
    };
    window.LEFT_FIXED_ELEMENT_WIDTH = function () {
        return leftBar1.outerWidth(true) + (parseInt(leftBar2.css('left')) < 0 ? 0 : leftBar2.outerWidth(true));
    };
});

/* BEGIN: Breadcrumbs v2 */

$(function () {
    var $breadcrumbs = $(".breadcrumb2");
    if ($breadcrumbs.length == 0) {
        return;
    }
    var $currentPage = $(".breadcrumb2CurrentPage", $breadcrumbs);
    var $siblingPages = $(".breadcrumb2Siblings", $breadcrumbs);
    // if there is a current page and some sibling pages
    if ($currentPage.length > 0 && $siblingPages.length > 0 && $siblingPages.children().length > 0) {
        // if the browser doesn't support generated content, add a "button"
        if (Modernizr.generatedcontent === false) {
            $currentPage.append("<span class=\"breadcrumb2Control\"></span>");
        }
        // help with positioning the drop-down
        $breadcrumbs.addClass("cf").children().wrapAll("<div class=\"breadcrumb2PositionHelper\" />");
        var $positionHelper = $(".breadcrumb2PositionHelper", $breadcrumbs);
        $siblingPages.css("top", $positionHelper.outerHeight(true));
        // display drop-down controls
        $currentPage.addClass("hasDropDownList");
        // enable display of drop-down
        $currentPage.click(function (e) {
            var $this = $(this);

            var hider = function () {
                $siblingPages.removeClass("visible");
                $this.removeClass("open");
                if (typeof ensureDropDownContracted != "undefined" && $.isFunction(ensureDropDownContracted)) {
                    ensureDropDownContracted();
                }
            };

            if ($this.hasClass("open")) {
                hider();
            } else {
                $siblingPages.addClass("visible");
                $this.addClass("open");
            }

            e.stopPropagation();
            $("body").one("click", hider);
        });
        $siblingPages.click(function (e) {
            e.stopPropagation();
        });

        // check for "roll up"
        var maxDisplayedItemCount = 10;
        if ($siblingPages.children().length > maxDisplayedItemCount) {
            var moreText = "More";
            var lessText = "Less";
            $($siblingPages.children().get(maxDisplayedItemCount - 1)).after("<li class=\"breadcrumb2SiblingMore\">" + moreText + "</li>");
            var $moreButton = $(".breadcrumb2SiblingMore", $breadcrumbs);
            var originalHeight = $siblingPages.height();
            var closedHeight = $moreButton.getHiddenDimensions(true).outerHeight;
            for (var i = 0; i < maxDisplayedItemCount; i++) {
                closedHeight += $($siblingPages.children().get(i)).getHiddenDimensions(true).outerHeight;
            }
            $siblingPages.height(closedHeight);
            $moreButton.click(function () {
                if ($moreButton.text() == moreText) {
                    $moreButton.detach();
                    $siblingPages.animate({ height: originalHeight }, function () {
                        $siblingPages.append($moreButton);
                    });
                    $moreButton.text(lessText);
                    $moreButton.addClass("open");
                } else {
                    $siblingPages.animate({ height: closedHeight }, function () {
                        $($siblingPages.children().get(maxDisplayedItemCount - 1)).after($moreButton);
                    });
                    $moreButton.text(moreText);
                    $moreButton.removeClass("open");
                }
            });
            function ensureDropDownContracted() {
                if ($moreButton.text() == lessText) {
                    $moreButton.click();
                }
            };
        }
    }
});

/* END: Breadcrumbs v2 */

/* BEGIN: Carousel v2 */

$(function () {
    function initHighlightsCarousel($carouselElements, centerImagesOnPage) {
        $carouselElements.each(function (index, carouselElement) {
            function centreCarouselOnElement($element, scrollCompleteCallback) {
                getCentreItem().removeClass("centreItem");
                if (!$element || $element.length == 0) {
                    return;
                }
                var halfViewportWidth = parseInt(getViewportWidth() / 2);
                var wrapperLeftPadding = parseInt($carouselViewport.css("padding-left"));
                var newCarouselOffset = halfViewportWidth - parseInt($element.outerWidth(true) / 2) - $element.offset().left + $element.parent().offset().left + parseInt($element.css("margin-left"));
                setCarouselOffset(newCarouselOffset, scrollCompleteCallback);
                setCentreItem($element);
            };
            // centre the carousel on the centre image on the first page
            function centreCentreItemOnFirstPage(scrollCompleteCallback) {
                var halfViewportWidth = parseInt(getViewportWidth() / 2);
                // find the centre item
                var $centreItem = null;
                var wrapperLeftPadding = parseInt($carouselViewport.css("padding-left"));
                $carouselItems.each(function (itemIndex) {
                    var $carouselItem = $(this);
                    var carouselItemOffset = $carouselItem.offset().left - $carouselItem.offsetParent().offset().left - wrapperLeftPadding - parseInt($carouselItem.css("margin-left"));
                    var halfWidthOfNextCarouselItem = parseInt($carouselItem.next().outerWidth(true) / 2);
                    if (carouselItemOffset + $carouselItem.outerWidth(true) + halfWidthOfNextCarouselItem > halfViewportWidth) {
                        $centreItem = $carouselItem;
                        return false;
                    }
                });
                if (!$centreItem) {
                    return;
                }
                // centre carousel around the new item
                centreCarouselOnElement($centreItem, scrollCompleteCallback);
            };
            function getCarouselOffset() {
                var offsetAsInt = parseInt($carouselElement.css("left"));
                return isNaN(offsetAsInt) ? 0 : offsetAsInt;
            };
            function getCentreItem() {
                return $carouselItems.filter(".centreItem");
            };
            function getElementOffsetInCarousel($element) {
                var offset = 0;
                $element.prevAll().each(function () {
                    offset += $(this).outerWidth(true);
                });
                return offset;
            };
            function getViewportWidth() {
                return parseInt($carouselViewport.width());
            };
            function isCarouselItemVisible($element) {
                var elementX1 = getElementOffsetInCarousel($element);
                var elementX2 = elementX1 + $element.outerWidth(true);
                var viewportX1 = parseInt($carouselElement.css("left")) * -1;
                var viewportX2 = viewportX1 + getViewportWidth();
                return elementX1 > viewportX1 && elementX1 < viewportX2 && elementX2 > viewportX1 && elementX2 < viewportX2;
            };
            function pageWidth() {
                return parseInt(getViewportWidth() * .8);
            };
            // set direction to (N)ext or (P)revious
            function scrollToAdjacentPage(direction) {
                // check a valid direction was sent
                if (scrollingDisabled || (direction != "N" && direction != "P")) {
                    return;
                }
                // check if the first or last element is already displayed and if we are still trying to scroll in that direction
                if ((direction == "P" && parseInt($carouselElement.css("left")) > 0) || (direction == "N" && (parseInt($carouselElement.css("left")) * -1) + getViewportWidth() > carouselWidth)) {
                    return;
                }

                if (centerImagesOnPage) {
                    var itemsInViewport = new Array();
                    var viewportLeftPos = $carouselViewport.offset().left;
                    var viewportRightPos = viewportLeftPos + $carouselViewport.width();
                    $carouselItems.each(function (index, element) {
                        var $element = $(element);
                        var elementLeftPos = $element.offset().left;
                        if (elementLeftPos > viewportLeftPos && elementLeftPos + $element.outerWidth(true) < viewportRightPos) {
                            itemsInViewport.push($element);
                        } else if (itemsInViewport.length > 0) {
                            return false;
                        }
                    });

                    var itemsInViewportCount = itemsInViewport.length;
                    var $newCentreItem = getCentreItem();
                    for (var i = 0; i < itemsInViewportCount; i++) {
                        if ((direction == "N" && $carouselItems.index($newCentreItem) + itemsInViewportCount > $carouselItems.length) || (direction == "P" && $carouselItems.index($newCentreItem) - itemsInViewportCount < -1)) {
                            break;
                        }
                        $newCentreItem = direction == "N" ? $newCentreItem.next() : $newCentreItem.prev();
                    }
                    if ($newCentreItem.length != 0) {
                        centreCarouselOnElement($newCentreItem);
                    }
                } else {
                    var scrollDistance = parseInt(getViewportWidth() * .8);
                    var newOffset = 0;
                    // check we aren't trying to scroll past the end of the carousel
                    if (direction == "N" && (getCarouselOffset() - scrollDistance - getViewportWidth()) * -1 > carouselWidth) {
                        newOffset = (carouselWidth - getViewportWidth()) * -1;
                    } else if (direction == "P" && getCarouselOffset() + scrollDistance > 0) {
                        newOffset = 0;
                    } else {
                        newOffset = direction == "N" ? getCarouselOffset() - scrollDistance : getCarouselOffset() + scrollDistance;
                    }
                    setCarouselOffset(newOffset);
                }
            }
            function scrollToNextPage() {
                scrollToAdjacentPage("N");
            };
            function scrollToPreviousPage() {
                scrollToAdjacentPage("P");
            };
            function setCarouselOffset(offset, scrollCompleteCallback) {
                if (!scrollingDisabled) {
                    scrollingDisabled = true;
                    $carouselElement.animate({ left: offset }, 200, "swing", function () {
                        if ($.isFunction(scrollCompleteCallback)) {
                            scrollCompleteCallback();
                        }
                        scrollingDisabled = false;
                    });
                }
            };
            function setCentreItem($element) {
                $element.addClass("centreItem");
            };

            var scrollingDisabled = false;
            // save carousel jQuery object in local variable
            var $carouselElement = $(carouselElement);
            // save carousel items jQuery object in local variable
            var $carouselItems = $carouselElement.children();
            // set carousel width
            var carouselWidth = 0;
            $carouselItems.each(function () {
                carouselWidth += $(this).outerWidth(true);
            });
            
            $carouselElement.width(carouselWidth + 5); // added 5px buffer to try to fix a non-reproduceable wrapping issue
            // wrap in a "viewport" element
            $carouselElement.wrap("<div class=\"carousel2Viewport\" />");
            // save viewport jQuery object in local variable
            var $carouselViewport = $carouselElement.parent();
            // set the height of the viewport
            $carouselViewport.animate({ height: $carouselElement.outerHeight(true) }, 400);
            // add paging controls
            $carouselViewport.append("<div class=\"paging previous\" /><div class=\"paging next\" />");
            // save paging controls jQuery objects in local variables
            var $pagingNext = $carouselViewport.children(".paging.next");
            var $pagingPrevious = $carouselViewport.children(".paging.previous");
            // centre on load
            if (centerImagesOnPage) {
                centreCentreItemOnFirstPage(function () {
                    // wire up the paging controls
                    $pagingNext.click(scrollToNextPage);
                    $pagingPrevious.click(scrollToPreviousPage);
                });
            } else {
                // wire up the paging controls
                $pagingNext.click(scrollToNextPage);
                $pagingPrevious.click(scrollToPreviousPage);
            }
            // re-centre on orientation change
            $(window).bind("orientationchange", function () { setTimeout(function () { centreCarouselOnElement(getCentreItem()); }, 200) });
        });

    };
    initHighlightsCarousel($(".carousel2"), false);
});

/* END: Carousel v2 */

function IsGalleryOpen() {
    return $('body.galleryActive').length > 0;
}

var scrollBarWidth;
$.scrollbarWidth = function () {
    if (scrollBarWidth === undefined) {
        var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
        var child = parent.children();
        scrollBarWidth = child.innerWidth() - child.height(99).innerWidth();
        parent.remove();
    }
    return scrollBarWidth;
};

(function ($) {
    $.fn.textLineHeight = function () {
        var sample = $('<span style="width:9999px;position:absolute;"></span').appendTo(this);
        sample.text('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
        var lineHeight = sample.height();
        sample.remove();
        return lineHeight;
    };
})(jQuery);


/* START: Footer expansion */
$(function () {
    $(".legal .lastChild").css("cursor", "pointer").click(function (e) {
        e.preventDefault();
        var item = $(this);
        if (item.hasClass("closed")) {
            item.removeClass("closed").addClass("opened");
            // can't use a simple slideDown, because we also need to scroll the page.
            var $footerLinks = $(".siteFooterWrapper .footerLinks");
            $footerLinks.show().css("height", "");
            var fullHeight = $footerLinks.height()
            $footerLinks.css("height", "0").stop(true, true).animate(
                {
                    height: fullHeight
                },
                {
                    step: function () { $(window).scrollTop($("body").height()); }
                }
            );
        } else {
            item.removeClass("opened").addClass("closed");
            $(".siteFooterWrapper .footerLinks").stop(true, true).slideUp();
        }
    });
});
/* END: Footer expansion*/

var $subscriptionAd;
var $subscriptionAdImgContainer;
var $subscriptionAdImg;
var $topLevelNavigation;

$(function () {
    $subscriptionAd = $('#ContentNavigation .subscribe-header-panel');
    $subscriptionAdImgContainer = $subscriptionAd.find('.image-container');
    $subscriptionAdImg = $subscriptionAdImgContainer.find('img');
    $topLevelNavigation = $('#ContentNavigation .topLevelNavigation');

    $subscriptionAdImg.load(function () {
        setSubscriptionAdImageContainerInitialHeight();
    });

    //var subscriptionAdImgInitialHeight
    $subscriptionAd.hoverIntent(
        function () {
            $subscriptionAdImgContainer.animate({ height: $subscriptionAdImg.height() * .6 }, 200, 'swing');
        }
        ,
        function () {
            $subscriptionAdImgContainer.animate({ height: $subscriptionAdImgContainer.data('initialHeight') }, 200, 'swing');
        }
    );

    $(window).resize(function () {
        setSubscriptionAdImageContainerInitialHeight();
    });

    function setSubscriptionAdImageContainerInitialHeight() {
        var subscriptionAdImgContainerInitialHeight = $subscriptionAdImg.height() * .4;
        $subscriptionAdImgContainer.height(subscriptionAdImgContainerInitialHeight);
        $subscriptionAdImgContainer.data('initialHeight', subscriptionAdImgContainerInitialHeight);
        $topLevelNavigation.css('padding-bottom', $subscriptionAd.height() + 20);
    };

});
/* BEGIN: Promotion Buttons */

VOGUE.promButtons = function () {
    var data = [];
    var indexRendered = -1;

    function hasData() {
        return data.length > 0;
    };

    function insertPromotionsIntoContentNavigation() {
        if (data.length <= indexRendered + 1) {
            return;
        }
        // see if we can find the current article within the navigation
        var $currentArticleNavigationItem = CONTENTNAVIGATION.SECTIONNAVIGATION.getCurrentNavigationItemDomElement();
        if ($currentArticleNavigationItem.length === 0) {
            // current article not found in nav so don't do anything
            return;
        }
        // get the navigation items that come after the current navigation item in the section navigation
        var $allNavigationItems = CONTENTNAVIGATION.SECTIONNAVIGATION.getAllNavigationItems().not('.DateSubgroup');
        var $navigationItemsAfterCurrentNavigationItem = $allNavigationItems.filter(':gt(' + $allNavigationItems.index($currentArticleNavigationItem) + ')');
        if ($navigationItemsAfterCurrentNavigationItem.length === 0) {
            // there are no navigation items after the current one, so do nothing
            return;
        }
        // insertion point configuration
        var baseInsertionIndex = 2;
        var insertionIndexIncrement = 10;

        // figure out if we need to insert each promotion button or if it already exists, etc.
        var promotionButtonBaseCssClass = 'promotion';
        var promotionButtonCssClass;
        var $promotionButton;
        var currentInsertionIndex;
        $.each(data, function (idx, dataItem) {
            if (idx <= indexRendered) {
                return;
            }
            currentInsertionIndex = baseInsertionIndex + insertionIndexIncrement * idx;
            // check if we have run out of space in the section navigation for more promotion buttons
            if (currentInsertionIndex > $navigationItemsAfterCurrentNavigationItem.length) {
                // we have, so stop processing more data items
                return false;
            }
            promotionButtonCssClass = promotionButtonBaseCssClass + idx;
            // check if the button already exists
            if ($('.' + promotionButtonCssClass, CONTENTNAVIGATION.SECTIONNAVIGATION.$contentNavigation).length === 0) {
                // it doesn't, so let's create it an get it in there
                $promotionButton = $('<li class="' + promotionButtonBaseCssClass + ' ' + promotionButtonCssClass + '"><p>Vogue Promotions</p><h3 class="title"><a href="' + dataItem.LinkUrl + '">' + dataItem.Title + '</a></h3><a href="' + dataItem.LinkUrl + '"><img src="' + dataItem.ImgSrc + '" /></a></li>');
                $($navigationItemsAfterCurrentNavigationItem.get(currentInsertionIndex)).after($promotionButton);
            }

            if (idx > indexRendered) {
                indexRendered = idx;
            }
        });
    };
    
    // initialise
    $(function() {
        update();
    });
    
    function update() {
        // if there is some data to work with
        if (hasData() && CONTENTNAVIGATION.SECTIONNAVIGATION) {
            // add promotions to the content navigation
            if (typeof VOGUE.promButtons.isContentNavigationInsertionDisabled === 'undefined' || VOGUE.promButtons.isContentNavigationInsertionDisabled !== true) {
                CONTENTNAVIGATION.SECTIONNAVIGATION.registerOnLoad(insertPromotionsIntoContentNavigation);
            }
            CONTENTNAVIGATION.SECTIONNAVIGATION.registerOnPageLoad(insertPromotionsIntoContentNavigation);
        }
    };
    
    function add(json) {
        data.push(json);
        update();
    };

    var pub = {
        data: data,
        hasData: hasData,
        add: add,
        update: update
    };
    return pub;
} ();

/* END: Promotion Buttons */

/* Tooltips */

$(function () {
    LoadToolTips($('.hasToolTip'));
});

function LoadToolTips(elems) {
    elems.simpletip({
        fixed: true,
        position: 'right'
    });
}

/* BEGIN: link list to drop-down */

$(function () {
	$(".linkListToDropDown").each(
		function(index, element) {
			var dropdownList = document.createElement("select");
			var className = $.trim($(element).attr("class").replace("linkListToDropDown", ""));
			if (className.length) {
				$(dropdownList).attr("class", className);
			}

			$(element).css("display", "none");

			// We need to not do 1000 items all in one shot. Do some setTimeout craziness to give the page
			// a chance to respond.
			var children = $(element).children();
			var doWorkForChild = function(children, index, workCount) {
				var itemsDone = 0;
				for (var i = index; i < children.length; i++) {
					var item = children[i];
					var option = document.createElement("option");
					if ($(item).children("a").length != 0) {
						option.setAttribute("value", $($(item).children("a")[0]).attr("href"));
						if ($(item).hasClass("selected")) {
							option.setAttribute("selected", "selected");
						}
						option.appendChild(document.createTextNode($($(item).children("a")[0]).text()));
					} else if ($(item).children("h1,h2,h3,h4,h5,h6").length != 0) {
						option.setAttribute("value", "");
						option.appendChild(document.createTextNode($($(item).children("h1,h2,h3,h4,h5,h6")[0]).text()));
					}
					dropdownList.appendChild(option);

					itemsDone++;
					if (itemsDone > workCount) {
						setTimeout(function() { doWorkForChild(children, i + 1, workCount); }, 1);
						return;
					}
				}
				$(element).parent()[0].insertBefore(dropdownList, element);
				$(element).remove();
			};

			doWorkForChild(children, 0, 100);

			var elementId = $(element).attr("id");
			if (elementId && elementId.length > 0) {
				$(dropdownList).attr("id", elementId);
			}
			if (!$(element).hasClass("hasButton")) {
				$(dropdownList).change(function() { if ($(this).val().length > 0) document.location = $(this).val(); });
			}

		}
	);
});

/* END: link list to drop-down */

/* BEGIN: track plain HTML links to social sites */

$(function () {
    var trackLink = function (e, link, channel) {
        if ('AnalyticsUtils' in window) {
            e.preventDefault();
            window.AnalyticsUtils.trackLinkEvent(link, "Social", "Follow", channel);
        } else if (link && link.href) {
            // proceed straight to link
            document.location = link.href;
        }
    };

    var trackLinkTargetBlank = function (channel) {
        if ('AnalyticsUtils' in window) {
            window.AnalyticsUtils.trackEvent("Social", "Follow", channel);
        }
    };

    /* Track links inside .social-media-list

     * Currently these are used in:
     * \Vogue\Website\Views\Templates\ArticleListing2012\Intro.cshtml
     * \Vogue\Website\Views\Templates\MissVogue\SocialMediaLinkList.cshtml
     * \Vogue\Website\_marketResources\UserControls\Mobile\JavaScriptTemplates\ArticleListing.ascx

     * None of them have target=_blank. If switching to target=_blank, use trackLinkTargetBlank as for Vogue Videos below.
     */

    var $socialMediaList = $('.social-media-list');
    
    $socialMediaList.find('a.icon-twitter').click(function (e) {
        trackLink(e, this, "Twitter");
    });
    $socialMediaList.find('a.icon-facebook').click(function (e) {
        trackLink(e, this, "Facebook");
    });
    $socialMediaList.find('a.icon-instagram').click(function (e) {
        trackLink(e, this, "Instagram");
    });
    $socialMediaList.find('a.icon-pinterest').click(function (e) {
        trackLink(e, this, "Pinterest");
    });
    $socialMediaList.find('a.icon-tumblr').click(function (e) {
        trackLink(e, this, "Tumblr");
    });

    /* Track links for Vogue Videos

     * Used in \Vogue\Website\Views\Templates\VogueVideos\Navigation.cshtml
     
     * They have target=_blank. If switching to same window, use trackLink as for .social-media-list above.
     */

    var $videosNav = $('.nav-vogue-videos');

    $videosNav.find('a.social-link-facebook').click(function () {
        trackLinkTargetBlank('Facebook');
    });
    $videosNav.find('a.social-link-twitter').click(function () {
        trackLinkTargetBlank('Twitter');
    });
    $videosNav.find('a.social-link-pinterest').click(function () {
        trackLinkTargetBlank('Pinterest');
    });
});

/* END: track plain HTML links to social sites */
;
/* -----------------------------*/
$(function () {
    $(".sharePopupButton.noShareButton").each(function () {
        var $mainContainer = $(this);
        var $shareButtonsHolder = $mainContainer.find(".shareButtonsHolder");
        createShareButtons($mainContainer, $shareButtonsHolder);
    });

    $(".sharePopupButton .shareText").click(function (e) {
        var $elem = $(this);
        var $mainContainer = $elem.closest(".sharePopupButton");
        var $shareButtonsHolder = $mainContainer.find(".shareButtonsHolder");
        //var forceVertical = $mainContainer.attr("data-force-vertical") == "true";

        var callback = $mainContainer.attr("data-urls-update-callback");
        if (callback != null) {
            window[callback]($mainContainer);
        }

        /*var buttonTextWidth = $elem.outerWidth(true);
        var mainContainerWidth = $mainContainer.width();
        var remainingWidth = mainContainerWidth - buttonTextWidth;
        var cssWidth = (remainingWidth < (120 * 3) || forceVertical) ? 120 : "auto";*/

        //        var offset = $elem.offset();

        if ($("#sharePopup").length > 0)
            $("#sharePopup").remove();

        $mainContainer.toggleClass("buttonsVisible");

        if ($mainContainer.is(".buttonsVisible")) {
            createShareButtons($mainContainer, $shareButtonsHolder);
        }
    });

    window.VogueShareButton = {};

    // creates a very simple VogueShareButton element, as would have been created by the Razor helper. This must be appened to
    // the page immediately after, so that FBML.parse works correctly
    window.VogueShareButton.createElement = function (urlToShare, pinterestImageToShare, showPinterest) {
        var $holder;
        var $shareButtonContainer = $("<div/>").
            addClass("sharePopupButton").
            addClass("noShareButton").
            append($holder = $("<div/>").
                addClass("shareButtonsHolder")
            );
        
        $shareButtonContainer.attr("data-href", urlToShare);
        if (pinterestImageToShare) $shareButtonContainer.attr("data-media", pinterestImageToShare);
        $shareButtonContainer.attr("data-show-pinterest", showPinterest ? "true" : "false")
        createShareButtons($shareButtonContainer, $holder);
        return $shareButtonContainer;
    }
});

function createShareButtons($mainContainer, $shareButtonsHolder) {
    var href = $mainContainer.attr("data-href");
    var media = $mainContainer.attr("data-media");
    var lastHref = $shareButtonsHolder.data("lastHref");
    var lastMedia = $shareButtonsHolder.data("lastMedia");
    var showPinterest = $mainContainer.attr("data-show-pinterest") == "true";

    if (lastHref != href || lastMedia != media) {
        $shareButtonsHolder.
                    empty().
                    append((SocialHelpers.createFacebookLikeButton(href))).
                    append((SocialHelpers.createTwitterTweetButton(href))).
                    append((SocialHelpers.createGooglePlusPlusOneButton(href))).
                    append(showPinterest
                        ? (SocialHelpers.createPinterestPinButton(href, media))
                        : ""
                    );
    }
    $shareButtonsHolder.data("lastHref", href);
    $shareButtonsHolder.data("lastMedia", media);
};
/* -----------------------------*/
/*!
* ClickTaleHelper 1.0.
* A wrapper around the ClickTale API, providing convenient helper methods for tracking on Conde Nast UK websites.
* - Requires JQuery.
*/
function ClickTaleHelper() {

	var _clickTaleHelper = this;

	this.clickTaleEvent = function (eventName) {
		if (typeof ClickTaleEvent == "function") {
			ClickTaleEvent(eventName);
		}
		//console.log("ClickTaleEvent: " + eventName);
	};

	this.clickTaleStop = function () {
		if (typeof ClickTaleStop == "function") {
			ClickTaleStop();
		}
		//console.log("ClickTaleStop");
	};

	/* Track all ads on page. 
	* - Ads must provide metadata by having class attribute in correct format: adLabel_{AdSize}_{AdPosition}. E.g. adLabel_1520x300-970x250_1.
	* - Ads must declare that they are displayed (i.e. not empty) by having .cnAdIsNotEmpty class attribute.
	*/
	this.clickTaleTrackAdsOnPage = function () {
		//console.log("clickTaleTrackAdsOnPage");
		if (typeof jQuery == "undefined") {
			return;
		}

		$(".cnAd").each(function () {
			var isAdEmpty = true;
			if ($(this).attr("class").indexOf("cnAdIsNotEmpty") != -1) {
				isAdEmpty = false;
			}
			_clickTaleHelper.clickTaleTrackAd(this, isAdEmpty);
		});
	};

	this.clickTaleTrackAd = function (adDivElement, isAdEmpty) {
		var emptyAdFlag = "";
		if (isAdEmpty == true) {
			emptyAdFlag = "_Empty";
		}
		$($(adDivElement).attr("class").split(" ")).each(function () {
			if (_clickTaleHelper.isTrackableAd(this) == true) {
				_clickTaleHelper.clickTaleEvent(this + emptyAdFlag);
			}
		});
	};

	this.isTrackableAd = function (adLabel) {
		if (adLabel !== "") {
			// NOTE: To distinguish homepage incontent ads from those on other pages, hompepage ads now also have an extra class: cnAdLabel-homePageSponsorship.
			if (adLabel.indexOf("adLabel") != -1 ||
				adLabel.indexOf("cnAdLabel-incontentAd") != -1) {
				return true;
			}
		}
		return false;
	};
}

var clickTaleHelper = new ClickTaleHelper();

//function ClickTaleOnRecording() {
	//console.log("ClickTaleOnRecording");
//};
/* -----------------------------*/

