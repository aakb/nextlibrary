// $Id: nodepicker.js,v 1.6 2010/01/20 07:48:31 blixxxa Exp $

Drupal.wysiwyg.plugins["nodepicker"] = {    
  /**
   * Execute the button.
   */
  invoke: function(data, settings, instanceId) {  	
  	// Options to pass to the dialog.
		var options = { id: instanceId, content: data.content };
 
    // Open dialogue.
    Drupal.wysiwyg.instances[instanceId].openDialog(settings.dialog, options);
  }
};