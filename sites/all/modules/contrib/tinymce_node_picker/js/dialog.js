// $Id: dialog.js,v 1.14 2010/01/25 06:49:49 blixxxa Exp $

Drupal.behaviors.tinyMCENodePicker = function (context) {
  var parentWindow = (window.opener) ? window.opener : window.parent;
  if (parentWindow && parentWindow.Drupal) {
    var instanceId = parentWindow.Drupal.wysiwyg.activeId;
    var editor = parentWindow.Drupal.wysiwyg.instances[instanceId].editor;
    var content = '';
    var selection;

    // Fetch text selection, different for different editors.
    switch(editor) {
      case "tinymce":
        content = parentWindow.tinyMCE.activeEditor.selection.getContent();
        selection = parentWindow.tinyMCE.activeEditor.selection;
      break;
    }
    
    // Strip anchors from content.
    content = content.replace(/<[//]{0,1}(A|a)[^><]*>/g, "");

    // Capture click on "Insert link".
    $(".views-field a, ul.menu a").click(function() {
      // Insert content.
      if (parentWindow && parentWindow.Drupal) {
        var title = $(this).parent().parent().children("td:eq(0)").text().replace(/^\s+|\s+$/g, "");
        var link = "<a href=\""+ $(this).attr("href") +"\" title=\""+ title +"\">"+ ((content == '') ? title : content) +"</a>";
        
        // If cursor/selection is located inside anchor tag, update link.
        if(editor == 'tinymce' && parentWindow.tinyMCE.activeEditor.dom.getParent(selection.getNode(), 'A')) {
          parentWindow.tinyMCE.activeEditor.execCommand('mceInsertLink', false, $(this).attr("href"));
        }
        else {
          parentWindow.Drupal.wysiwyg.instances[instanceId].insert(link)
        }

        parentWindow.Drupal.wysiwyg.instances[instanceId].closeDialog(window);
      }
      else {
        alert(Drupal.t("The link cannot be inserted because the parent window cannot be found."));
      }
      return false;
    });
  }
};