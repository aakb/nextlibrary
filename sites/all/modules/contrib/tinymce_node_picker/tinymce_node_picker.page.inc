<?php
// $Id: tinymce_node_picker.page.inc,v 1.8 2010/01/14 13:09:47 blixxxa Exp $

/**
 * @file
 * Page functions for module TinyMCE Node Picker.
 */

/**
 * Module settings page.
 */
function tinymce_node_picker_settings() {
	$form = array();
	 
	$form['tinymce_node_picker_tabs'] = array(
	  '#type' => 'checkboxes',
	  '#title' => t('Enabled tabs'),
	  '#default_value' => variable_get('tinymce_node_picker_tabs', array('menu', 'taxonomy')),
	  '#options' => array(
	    'menu' => t('Menu'),
	    'taxonomy' => t('Taxonomy'),
	  ),
	  '#description' => t('Select which tabs should be visible in the Node picker dialog.'),
	);

  return system_settings_form($form);
}

/**
 * Display Node picker page, nodes task.
 */
function tinymce_node_picker_page_nodes() {
	module_invoke('admin_menu', 'suppress');
	
	// Add JavaScript.
  drupal_add_js(drupal_get_path('module', 'tinymce_node_picker') . '/js/dialog.js');

  // Add CSS.
 	drupal_add_css(drupal_get_path('module', 'tinymce_node_picker') . '/css/dialog.css');
 	
 	// Get contents.
 	$content = views_embed_view('nodepicker_nodes', 'default');
 	
	echo theme('tinymce_node_picker_page', $content);
}

/**
 * Display Node picker page, menu task.
 */
function tinymce_node_picker_page_menu() {
	module_invoke('admin_menu', 'suppress');
	
	// Add JavaScript.
  drupal_add_js(drupal_get_path('module', 'tinymce_node_picker') . '/js/dialog.js');
  drupal_add_js(drupal_get_path('module', 'tinymce_node_picker') . '/js/tree.js');

	// Add CSS.
 	drupal_add_css(drupal_get_path('module', 'tinymce_node_picker') . '/css/dialog.css');

	// Get contents.
 	$content = tinymce_node_picker_tree_output(menu_tree_all_data('primary-links'));
 	
	echo theme('tinymce_node_picker_page', $content);
}

/**
 * Display Node picker page, taxonomy task.
 */
function tinymce_node_picker_page_taxonomy() {
	module_invoke('admin_menu', 'suppress');
	
	// Add JavaScript.
  drupal_add_js(drupal_get_path('module', 'tinymce_node_picker') . '/js/dialog.js');
  
	// Add CSS.
 	drupal_add_css(drupal_get_path('module', 'tinymce_node_picker') . '/css/dialog.css');
 	
 	// Get contents.
 	$content = views_embed_view('nodepicker_taxonomy', 'default');
 	
	echo theme('tinymce_node_picker_page', $content);
}

/**
 * Render complete tree, all levels expanded. Code copied from
 * the function menu_block_tree_output from module menu_block.
 */
function tinymce_node_picker_tree_output(&$tree) {
  $output = '';
  $items = array();

  // Pull out just the menu items we are going to render so that we
  // get an accurate count for the first/last classes.
  foreach (array_keys($tree) as $key) {
    if (!$tree[$key]['link']['hidden']) {
      $items[$key] = array(
        'link' => $tree[$key]['link'],
        // To prevent copying the entire child array, we render it first.
        'below' => !empty($tree[$key]['below']) ?tinymce_node_picker_tree_output($tree[$key]['below']) : '',
      );
    }
  }

  $num_items = count($items);
  $i = 1;
  foreach (array_keys($items) as $key) {
    // Render the link.
    $link_class = array();
    if (!empty($items[$key]['link']['localized_options']['attributes']['class'])) {
      $link_class[] = $items[$key]['link']['localized_options']['attributes']['class'];
    }
    if ($items[$key]['link']['in_active_trail']) {
      $link_class[] = 'active-trail';
    }
    if (!empty($link_class)) {
      $items[$key]['link']['localized_options']['attributes']['class'] = implode(' ', $link_class);
    }
    $link = theme('menu_item_link', $items[$key]['link']);
    // Render the menu item.
    $extra_class = array();
    if ($i == 1) {
      $extra_class[] = 'first';
    }
    if ($i == $num_items) {
      $extra_class[] = 'last';
    }
    $extra_class[] = 'menu-mlid-' . $items[$key]['link']['mlid'];
    if (!empty($items[$key]['link']['leaf_has_children'])) {
      $extra_class[] = 'has-children';
    }
    if ($items[$key]['link']['href'] == $_GET['q'] || ($items[$key]['link']['href'] == '<front>' && drupal_is_front_page())) {
      $extra_class[] = 'active';
    }
    $extra_class = !empty($extra_class) ? implode(' ', $extra_class) : NULL;
    $output .= theme('menu_item', $link, $items[$key]['link']['has_children'], $items[$key]['below'], $items[$key]['link']['in_active_trail'], $extra_class);
    $i++;
  }
  return $output ? theme('menu_tree', $output) : '';
}