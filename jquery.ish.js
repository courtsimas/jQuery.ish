var $ = function(id) {
    var o = new $.fn.init(id).elm,
        i;
    for (i in $.fn) {
        if (i != 'init' || i != 'elm') {
            o[i] = ($.fn[i]);
        }
    }
    return o;
};
$.trim = function(s){
	return s.replace(/^\s+|\s+$/g,'');
};
$.fn = {
    init: function(el) {
        if (typeof el == 'string') {
            $.fn.elm = document.querySelectorAll(el);
        } else if (el.length) {
            $.fn.elm = el;
        } else {
            $.fn.elm = [el];
        }
    },
    hasClass: function(cl) {
        var i,
	    regex = new RegExp('(\\s|^)' + cl + '(\\s|$)');
	for (i = 0; i < this.length; i++) {			
		if(this[i].className.match(regex)) {
			return true;
		}
	}
        return false;
    },
    addClass: function(cl) {
        var i,
	    regex = new RegExp('(\\s|^)' + cl + '(\\s|$)');
        for (i = 0; i < this.length; i++) {
            if (!this[i].className.match(regex)) {
            	this[i].className = $.trim(this[i].className + " " + cl);
            }
        }
        return this;
    },
    toggleClass: function(cl) {
        if (this.hasClass(cl)) {
            this.removeClass(cl);
        } else {
            this.addClass(cl);
        }
        return this;
    },
    removeClass: function(cl) {
        var i,
	    regex = new RegExp('(\\s|^)' + cl + '(\\s|$)');
        for (i = 0; i < this.length; i++) {
		this[i].className = $.trim(this[i].className.replace(regex,' '));
        }
        return this;
    },
    toggle: function() {
    	var i;
        for (i = 0; i < this.length; i++) {
        	if(window.getComputedStyle(this[i]).display == 'none'){
			this[i].style.display = 'block';
		} else {
			this[i].style.display = 'none';
		}  
        }
        return this;
    },
    hide: function() {
	var i;
        for (i = 0; i < this.length; i++) {
        	this[i].style.display = 'none'; 
        }
        return this;
    },
    show: function() {
	var i;
        for (i = 0; i < this.length; i++) {
	       	this[i].style.display = 'block'; 
        }
        return this;
    }
};
$.fn.init.prototype = $.fn;