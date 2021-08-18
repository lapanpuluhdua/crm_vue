const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .version();

/*
 | Dashforge template
 */
// mix.styles([
// 	'public/template/dashforge/assets/css/dashforge.css',
// 	'public/template/dashforge/assets/css/dashforge.dashboard.css',
// 	'public/template/dashforge/assets/css/dashforge.demo.css',
// 	'public/template/dashforge/assets/css/own.css'
// ], 'public/css/template.css')
// .version();

/*
 | Cork template
 */
// mix.js([
// 	'public/template/cork/assets/js/app.js',
// 	'public/template/cork/assets/js/custom.js',
// 	'public/template/cork/plugins/apex/apexcharts.min.js',
// 	'public/template/cork/assets/js/widgets/modules-widgets.js',
// 	'public/template/cork/plugins/table/datatable/datatables.js',
// 	'public/template/cork/assets/js/scrollspyNav.js',
// 	'public/template/cork/plugins/counter/jquery.countTo.js',
// 	'public/template/cork/assets/js/components/custom-counter.js',
// ], 'public/js/template.js');
// mix.styles([
// 	'public/template/cork/assets/css/main.css',
// 	'public/template/cork/assets/css/structure.css',
// 	'public/template/cork/plugins/apex/apexcharts.css',
// 	'public/template/cork/assets/css/widgets/modules-widgets.css',
// 	'public/template/cork/plugins/table/datatable/datatables.css',
// 	'public/template/cork/plugins/table/datatable/dt-global_style.css',
// 	'public/template/cork/assets/css/scrollspyNav.css',
// 	'public/template/cork/assets/css/components/custom-counter.css',
// 	'public/template/cork/assets/css/elements/miscellaneous.css',
// 	'public/template/cork/assets/css/elements/breadcrumb.css',
// ], 'public/css/template.css')
// .version();
mix.styles([
    'resources/css/app.css',
], 'public/css/uniproApp.css')
.version();

// mix.browserSync('localhost:9001');