Touchcast_Player_Tracker_Url = '//pa.touchcast.com/track.php';
if (typeof Touchcast_Player_Tracker_PaClient == 'undefined')
    Touchcast_Player_Tracker_PaClient = 'production';

Touchcast_Player_Tracker = function() {
    this.init();
}

Touchcast_Player_Tracker.prototype = {
    el_image: null,
    processing_call_queue: null,
    call_queue: null,
    performance_id: null,
    performance_user_id: null,
    vapps_number_clicks: null,
    vapps_number_clicks_hash: null,
    user_id: null,
    time_cache: null,
    time_slot: null,
    have_call_view: null,
    device_type: null,
    
    init: function() {
        var self = this;
        var callQueueNext = function() {
            self._processCallQueueNext();
        };
        
        this.el_image = new Image();
        this.el_image.onload = callQueueNext;
        this.el_image.onerror = callQueueNext;
        this.el_image.onabort = callQueueNext;
        
        this.device_type = 'web'; //default
        this.time_slot = 5;
        this.processing_call_queue = false;
        this.call_queue = [];
    },
    
    _getVappType: function(url) {
        var url = url.replace('http://', '').replace('https://', '').split('/');
        var domain = url[0];
        var path = '';
        if (url.length > 1)
            path = url[1];

        if (domain.indexOf('touchcast.com') > -1
            && path.substr(0,5) == 'vapps') {
            return url[2];
        }
        
        return 'web'; //external url
    },
    
    _serialize: function(data) {
        var str = [];
        for(var p in data){
            if (data.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
            }
        }
        return str.join("&");
    },
    
    _processCallQueue: function() {
        if (!this.processing_call_queue && this.call_queue.length > 0)
        {
            this.processing_call_queue = true; //wait until finished
            var params = this.call_queue.shift();
            params._t = (new Date()).getTime();
            params._mi = 1;
            if (Touchcast_Player_Tracker_PaClient)
                params._paclient = Touchcast_Player_Tracker_PaClient; 

            var url = Touchcast_Player_Tracker_Url+'?'+this._serialize(params);
            this.el_image.src = url;
        }
    },
    
    _processCallQueueNext: function() {
        this.processing_call_queue = false; //we have finished
        this._processCallQueue();
    },
    
    _callTracker: function(event, params) {
        params.type = event;
        this.call_queue.push(params);
        this._processCallQueue();
    },
    
    setDeviceType: function(type) {
        this.device_type = type;
    },
    
    setViewerId: function(user_id) {
        this.user_id = user_id
        if (!user_id)
            user_id = 0;
        
        this._callTracker('set-logged-user', {
            'uid': user_id
        });
        
    },
    
    setPerformanceId: function(performance_id, performance_user_id) {
        this.performance_id = performance_id;
        this.performance_user_id = performance_user_id;
        this.have_call_view = false;
        this.vapps_number_clicks = 0;
        this.vapps_number_clicks_hash = {};
        this.time_cache = {};
    },
    
    pingPlay: function(seconds)
    {
        if (!this.performance_id)
            return; //not inited
        
        seconds = parseFloat(seconds);
        if (!isNaN(seconds))
        {
            //check if slot hasn't been populated
            var slot = Math.floor(seconds / this.time_slot) * this.time_slot;
            if (typeof this.time_cache[slot] == 'undefined')
            {
                this.time_cache[slot] = slot;
                this._callTracker('watch-time', {
                    'pid': this.performance_id,
                    'time': seconds
                });
                
                if (!this.have_call_view) {
                    this.have_call_view = true;
                    this._callTracker('performance-view', {
                        'pid': this.performance_id,
                        'uid': this.performance_user_id,
                        'device': this.device_type
                    });
                }
            }
        }
    },
    
    /* this is internally called */
    _vappNumberClicks: function(vapp_url) {
        if (!this.performance_id)
            return; //not inited
        
        if (typeof this.vapps_number_clicks_hash[vapp_url] == 'undefined')
        {
            this.vapps_number_clicks_hash[vapp_url] = vapp_url;
            this.vapps_number_clicks++;
            
            this._callTracker('vapp-clicks', {
                'pid': this.performance_id,
                'times': this.vapps_number_clicks
            });
        }
    },

    clickVapp: function(x, y, time, vapp_id, vapp_type, vapp_url) {
        if (!this.performance_id)
            return; //not inited
        
        time = parseFloat(time);
        x = parseFloat(x);
        y = parseFloat(y);
        
        var vapp;
        if (vapp_type == 'html')
            vapp = this._getVappType(vapp_url);
        else
            vapp = vapp_type;
        
        if (!isNaN(time) 
            && !isNaN(x) 
            && !isNaN(y)) {
            this._callTracker('vapp-materialized', {
                'pid': this.performance_id,
                'device': this.device_type,
                'vapp': vapp,
                'vapp_id': vapp_id,
                'x': x,
                'y': y,
                'time': time
            });
            
            this._vappNumberClicks(vapp_url);
        }
    },
    
    clickFail: function(x, y, time) {
        if (!this.performance_id)
            return; //not inited
        
        time = parseFloat(time);
        x = parseFloat(x);
        y = parseFloat(y);
        if (!isNaN(time) 
            && !isNaN(x) 
            && !isNaN(y)) {
            this._callTracker('vapp-fail', {
                'pid': this.performance_id,
                'device': this.device_type,
                'x': x,
                'y': y,
                'time': time
            });
        }
    }
}

//notify any element listening
var event = null;
var eventName = 'TouchcastPlayerTracker_Ready';
if (typeof CustomEvent != 'undefined') {
    event = new CustomEvent(eventName);
    document.dispatchEvent(event);
} else if (document.createEvent) {
    event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
    document.dispatchEvent(event);
} else {
    if(document['onTouchcastPlayerTracker_Ready'])
        document['onTouchcastPlayerTracker_Ready']();
}