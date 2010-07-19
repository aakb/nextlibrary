// $Id: tree.js,v 1.4 2010/01/15 08:31:58 blixxxa Exp $
Drupal.behaviors.tinyMCENodePickerMenu = function (context) {
	$("ul.menu ul").css("display", "none");
	$("ul.menu li.expanded").removeClass("expanded").addClass("collapsed");
	$("ul.menu li").click(function(){
		if($(this).hasClass("collapsed")) {
			$(this).removeClass("collapsed").addClass("expanded").children("ul").css("display", "block");
			return false;
		}
		if($(this).hasClass("expanded")) {
			$(this).removeClass("expanded").addClass("collapsed").children("ul").css("display", "none");
			return false;
		}
	});
}