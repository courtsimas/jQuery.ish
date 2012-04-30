var toggleClass_Tests = new YAHOO.tool.TestCase({

    name: "toggleClass",
    
    setUp : function () {
		this.div = document.createElement("div");
		this.divId = 'myDiv';
        this.divClass = "myClass";
		this.div.setAttribute('id', this.divId);
		this.div.setAttribute('class', "myClass");
		document.body.appendChild(this.div);
    },

    tearDown : function () {
		document.body.removeChild(this.div);
    },

    testToggle: function () {
		$('#'+this.divId).toggleClass('myClass');
        YAHOO.util.Assert.isFalse( $('#'+this.divId).hasClass('myClass') );
    },
    testToggleAgain: function () {
		$('#'+this.divId).toggleClass('myClass-2');
        YAHOO.util.Assert.isTrue( $('#'+this.divId).hasClass('myClass-2') );
    }
    
    
});
