var toggle_Tests = new YAHOO.tool.TestCase({

    name: "toggle",
    
    setUp : function () {
		this.div = document.createElement("div");
		this.divId = 'myDiv';
        this.divClass = "myClass";
		this.div.setAttribute('id', this.divId);
		this.div.setAttribute('style', "display:none;");
		document.body.appendChild(this.div);
    },

    tearDown : function () {
		document.body.removeChild(this.div);
    },

    testToggle: function () {
		$('#'+this.divId).toggle();
        YAHOO.util.Assert.isTrue( this.div.style.display == 'block' ); 
    },
    
    testToggleAgain: function () {
		$('#'+this.divId).toggle();
		$('#'+this.divId).toggle();
        YAHOO.util.Assert.isTrue( this.div.style.display == 'none' ); 
    }
    
});
