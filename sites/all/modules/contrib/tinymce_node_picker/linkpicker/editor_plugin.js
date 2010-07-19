// $id$

(function() {
	// Load plugin specific language pack
  tinymce.PluginManager.requireLangPack('linkpicker');

  tinymce.create('tinymce.plugins.LinkpickerPlugin', {
    /**
     * Initializes the plugin, this will be executed after the plugin has been created.
     * This call is done before the editor instance has finished it's initialization so use the onInit event
     * of the editor instance to intercept that event.
     *
     * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
     * @param {string} url Absolute URL to where the plugin is located.
     */
     init : function(ed, url) {
        // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
        ed.addCommand('mceOpenLinkpicker', linkpicker_open);

    		function linkpicker_open(field_name, url, type, win) {
      		ed.windowManager.open({
      			file : ed.documentBaseURI.getURI() + 'tinymce_linkpicker',
      			width : 400,
      			height : 550,
      			inline : 1
    			},{
      			window : tinyMCE.selectedInstance,
      			input : tinyMCE.selectedInstance.editorId,
      			plugin_url : url
      		});
    		};

				// Register example button
				ed.addButton('linkpicker', {
	  			title : 'linkpicker.desc',
	  			cmd : 'mceOpenLinkpicker',
	  			image : url + '/img/linkpicker.gif'
				});

		},
		
		createControl : function(n, cm) {
			return null;
  	},

  	/**
   	 * Returns information about the plugin as a name/value array.
   	 * The current keys are longname, author, authorurl, infourl and version.
   	 *
   	 * @return {Object} Name/value array containing information about the plugin.
   	 */
		getInfo : function() {
			return {
				longname : 'Drupal Link Picker Plugin',
        author : 'Jonathan Yankovich',
        authorurl : 'http://bucketworks.org',
        infourl : 'http://bucketworks.org',
        version : "0.1"
      };
    }
  });

  // Register plugin
  tinymce.PluginManager.add('linkpicker', tinymce.plugins.LinkpickerPlugin);
})();
