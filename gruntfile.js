module.exports = function(grunt) {
    var serveStatic = require('serve-static');

    var appConfig = {
        app: '../AngularJs-RequireJs',
        index: '../AngularJs-RequireJs/app/view',
        dist: 'deploy'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),   

        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35744
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function(connect) {
                        return [
                            serveStatic(appConfig.app),
                            serveStatic(appConfig.index)
                        ]
                    }
                }
            }
        },
        concat: {
            js: {
                files: {
                    'app/assets/js/libs/require.js' : [
                        'bower_components/requirejs/require.js',
                    ]
                },
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            }
        },

        clean: {
            options: { force: true },
            folder: ['../deploy/']
        },
        sass: {
            dist: {
                files: [
                // app module
                {
                    expand: true,
                    cwd: 'app/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/directives/personalPart/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/directives/personalPart/assets/stylesheets/css/',
                    ext: '.css'
                },
                // accounts module
                {
                    expand: true,
                    cwd: 'app/apps/accounts/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/accounts/assets/stylesheets/css/',
                    ext: '.css'
                },
                // platform module
                {
                    expand: true,
                    cwd: 'app/apps/platform/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/platform/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/platform/directives/errorMessage/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/platform/directives/errorMessage/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/platform/directives/loader/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/platform/directives/loader/assets/stylesheets/css/',
                    ext: '.css'
                },
                // shared module
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/calendar/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/calendar/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/contestDrawTable/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/contestDrawTable/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/checkboxes/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/checkboxes/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/dropdown/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/dropdown/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/radiobuttons/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/radiobuttons/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/pagination/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/pagination/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/createNewLine/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/createNewLine/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/search/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/search/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/intervals/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/intervals/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/headersControl/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/headersControl/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/deleteLine/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/deleteLine/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/filters/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/filters/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/shared/directives/table/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/shared/directives/table/assets/stylesheets/css/',
                    ext: '.css'
                }
                ]
            },
            options: {
                style : 'compressed'
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: ['../index.html'], dest: '../deploy/index.html'}
                ]
            }
        },

        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'app/**/*',
                    '**/*/app.css',
                    'main.js',
                    'index.html'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'concat',
        'sass',
        'connect',
        'watch'
    ]);
};
