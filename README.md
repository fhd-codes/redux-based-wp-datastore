# redux-based-wp-datastore
This repo is a boilerplate for redux based custom wordpress datastores

- To add a new custom datastore to your wordpress project, create a block using

```
npx @wordpress/create-block <block_name>
```

- Delete all things from the src folder except index.js and also delete all lines from index.js
- Change the block.php mail file like this:

```php
function plugin_enqueue_assets() {
	$asset_file = include(plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
    wp_enqueue_script( 'plugin-script', plugins_url('build/index.js', __FILE__), $asset_file['dependencies'], $asset_file['version']);
}

add_action( 'enqueue_block_editor_assets', 'plugin_enqueue_assets' );
```

- In the src folder, clone this repo.

- In the src/index.js file, import the index.js file from the clonned repo. (Just this one line of code)

- Update the clonned repo files to match it with your datastore logic.

- Open your browser console and write the following lines:
```
wp.data.select('<your-store-name>')
```
You will get to see the available selectors of your store

```
wp.data.dispatch('<your-store-name>')
```
You will get to see the available dispatch actions of your store
