const fs = require('fs');
const gulp = require('gulp');
const glob = require('glob');
const pump = require('pump');
const del = require('del');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

// SRC Path
const srcPath = (file) => {
    var path = {
        dest: `vendors/${file}`
    };

   switch (file) {
       case 'images':
           path.src = './assets/images/**/*.{png,jpeg,jpg,svg,gif}';

           break;
       case 'styles':
           path.src = ['./assets/styles/**/*', '!assets/styles/components', '!assets/styles/mixins', '!assets/styles/utilities'];

           break;
       case 'scripts':
           path.src = './assets/scripts/*.js';

           break;
   }

   return path;
};

// Cleaning Task
const cleanTask = (file) => () => {
    return del([srcPath(file).dest, '!vendors']);
};

/**
 * Building Tasks
 */
// Build Images Task
const buildImages = (mode) => (done) => {
    pump([
        gulp.src(srcPath('images').src),
        gulp.dest(srcPath('images').dest)
    ], done);
}

// Build Styles Task
const buildStyles = (mode) => (done) => {
    let arrTask = [];

    sass.compiler = require('node-sass');

    if (mode === 'development') {
        arrTask = [
            sourcemaps.init({ loadMaps: true }),
            sass({outputStyle: 'nested'}),
            sourcemaps.write('./'),
        ]
    } else {
        arrTask = [
            sass({outputStyle: 'compressed'}),
        ];
    }

    pump([
        gulp.src(srcPath('styles').src),
        ...arrTask,
        gulp.dest(srcPath('styles').dest)
    ], done);
};

const revHTML = () => {
    var manifest = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
};

// Build Scripts Task
const buildScripts = (mode) => (done) => {
    const webpackConfig = require("./webpack.config.js");
    const eslint = {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {}
    };


    if (mode === 'development') {
        webpackConfig.mode = 'development';
        webpackConfig.devtool = 'inline-cheap-source-map';
    } else {
        webpackConfig.mode = 'production';
        webpackConfig.devtool = 'source-map';
        webpackConfig.module.rules.push(eslint);
    }

    function getEntried(){
        var files = glob.sync(srcPath('scripts').src);
        var newEntries = files.reduce(function(memo, file) {
            var arrFile = /.*\/(.*?)\/*\.js/.exec(file)[0];
            var name = /.*\/(.*?)\/*\.js/.exec(file)[1];

            memo[name] = file;
            return memo;
        }, {});
        webpackConfig.entry = newEntries;
    }

    getEntried();

    pump([
        gulp.src(srcPath('scripts').src),
        webpackStream(webpackConfig, webpack, (err, status) => {}),
        gulp.dest(srcPath('scripts').dest)
    ], done);
}

const genericTask = (mode, context = 'building') => {
    let modeName = mode === 'development' ? 'Development Mode' : 'Production Mode';

    const allBootingTasks = {
        images: [
            Object.assign(cleanTask('images'), { displayName: `Booting Images Task: Clean - ${modeName}` }),
            Object.assign(buildImages(mode), { displayName: `Booting Images Task: Build - ${modeName}` })
        ],
        styles: [
            Object.assign(cleanTask('styles'), { displayName: `Booting Styles Task: Clean - ${modeName}` }),
            Object.assign(buildStyles(mode), { displayName: `Booting Styles Task: Build - ${modeName}` })
        ],
        scripts: [
            Object.assign(cleanTask('scripts'), { displayName: `Booting Scripts Task: Clean - ${modeName}` }),
            Object.assign(buildScripts(mode), { displayName: `Booting Scripts Task: Build - ${modeName}` })
        ]
    };

    // Watching All Files
    const watchingAllFiles = (done) => {
        // Images
        gulp.watch(srcPath('images').src)
            .on('all', gulp.series(...allBootingTasks.images));

        // Styles
        gulp.watch(srcPath('styles').src)
            .on('all', gulp.series(...allBootingTasks.styles));

        // Scripts
        gulp.watch(srcPath('scripts').src)
            .on('all', gulp.series(...allBootingTasks.scripts));

    };

    let arr = [];

    switch (context) {
        case 'watching':
            arr = [
                Object.assign(watchingAllFiles, { displayName: `Watching All File Modify Task - ${modeName}` })
            ];

            break;
        case 'buildImages':
            arr = [...allBootingTasks.images,];

            break;
        case 'buildStyles':
            arr = [...allBootingTasks.styles,];

            break;
        case 'buildScripts':
            arr = [...allBootingTasks.scripts,];

            break;
        default:
            arr = [
                ...allBootingTasks.images,
                ...allBootingTasks.styles,
                ...allBootingTasks.scripts,
            ];

            break;
    }

    return arr;
};

gulp.task('watch', gulp.series(...genericTask('development', 'watching')));
gulp.task('default', gulp.series(...genericTask('production', 'building')));
gulp.task('dev', gulp.series(...genericTask('development', 'building')));
gulp.task('images', gulp.series(...genericTask('development', 'buildImages')));
gulp.task('styles', gulp.series(...genericTask('development', 'buildStyles')));
gulp.task('scripts', gulp.series(...genericTask('development', 'buildScripts')));
