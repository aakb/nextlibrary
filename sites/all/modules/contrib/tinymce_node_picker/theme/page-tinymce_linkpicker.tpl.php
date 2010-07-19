<?php
// $Id: page-tinymce_linkpicker.tpl.php,v 1.2 2009/11/06 13:20:32 blixxxa Exp $
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="<?php print $language->language; ?>" xml:lang="<?php print $language->language; ?>">
<head>
	<title>Choose Content To Insert</title>
	<?php print $head; ?>
	<?php print $styles; ?>
	<?php print $scripts; ?>
	<script type="text/javascript" src="<?php echo wysiwyg_get_path('tinymce', $base_path); ?>/jscripts/tiny_mce/tiny_mce_popup.js"></script>

	<script type="text/javascript">
	$(document).ready(function() {
		$('a.tinymce_linkpicker').click(function(){
			var title = $(this).html();
			var href = tinyMCE.activeEditor.documentBaseURI.getURI() + 'node/' + $(this).attr('name');
			var insertText = ' <a href="' + href + '" title="' + title + '">' + title + '</a> ';
	
			tinyMCE.execCommand("mceInsertContent", false, insertText);
			tinyMCEPopup.close();
			return false;
		});
	});
	</script>
</head>
<body class="<?php print $body_classes; ?>">

  <div id="page" class="clearfix">
    <div id="main-wrapper">
      <div id="main" class="clearfix">
        <div id="content-wrapper">

          <?php if ($messages): ?>
            <?php print $messages; ?>
          <?php endif; ?>

          <div id="content">
            <?php if ($tabs): ?>
            <div id="content-tabs">
              <?php print $tabs; ?>
            </div>
            <?php endif; ?>

              <div id="content-content" class="tinymce_linkpicker">
                <?php print $content; ?>
              </div>
            </div><!-- /content-inner -->
          </div><!-- /content -->
      </div><!-- /main -->
    </div><!-- /main-wrapper -->
  </div><!-- /page -->
  
  <?php print $closure; ?>
  
</body>
</html>
