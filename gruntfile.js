module.exports = function(grunt) {
    var serveStatic = require('serve-static');

    var appConfig = {
        app: '../FSSportsBackOffice',
        index: '../FSSportsBackOffice/app/view',
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

        // ngtemplates: {
        //     app:        {
        //         src:      ['../views/**/*.html', '../index.html'],
        //         dest:     '../scripts/js/template.js',
        //         options:  {
        //             htmlmin: {
        //                 collapseBooleanAttributes:      true,
        //                 collapseWhitespace:             true,
        //                 removeAttributeQuotes:          true,
        //                 removeComments:                 true, // Only if you don't use comment directives!
        //                 removeEmptyAttributes:          true,
        //                 removeRedundantAttributes:      true,
        //                 removeScriptTypeAttributes:     true,
        //                 removeStyleLinkTypeAttributes:  true,
        //                 keepClosingSlash:               true
        //             }
        //         }
        //     },
        //     login : {
        //         src:      ['../views/home/login/partner-login.html'],
        //         dest:     '../scripts/js/templateLogin.js',
        //         options:  {
        //             htmlmin: {
        //                 collapseBooleanAttributes:      true,
        //                 collapseWhitespace:             true,
        //                 removeAttributeQuotes:          true,
        //                 removeComments:                 true, // Only if you don't use comment directives!
        //                 removeEmptyAttributes:          true,
        //                 removeRedundantAttributes:      true,
        //                 removeScriptTypeAttributes:     true,
        //                 removeStyleLinkTypeAttributes:  true,
        //                 keepClosingSlash:               true
        //             }
        //         }
        //     }
        // },

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

        // ngAnnotate: {
        //     default: {
        //         files: {
        //             '../scripts/js/main.js': ['../scripts/js/main.js']
        //         }
        //     }
        // // },
        // uglify: {
        //     options: {
        //         compress: {
        //             drop_console: false
        //         }
        //     },
        //     dist: {
        //         files: {
        //             '../scripts/js/main.min.js': ['../scripts/js/main.js']
        //         }
        //     }
        // },
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
                // athletes module
                {
                    expand: true,
                    cwd: 'app/apps/athletes/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/athletes/assets/stylesheets/css/',
                    ext: '.css'
                },
                // bank module
                {
                    expand: true,
                    cwd: 'app/apps/bank/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/bank/assets/stylesheets/css/',
                    ext: '.css'
                },
                // bonus module
                {
                    expand: true,
                    cwd: 'app/apps/bonus/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/bonus/assets/stylesheets/css/',
                    ext: '.css'
                },
                // challanges module
                {
                    expand: true,
                    cwd: 'app/apps/challanges/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/challanges/assets/stylesheets/css/',
                    ext: '.css'
                },
                // cloud module
                {
                    expand: true,
                    cwd: 'app/apps/cloud/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/cloud/assets/stylesheets/css/',
                    ext: '.css'
                },
                // contestCreate module
                {
                    expand: true,
                    cwd: 'app/apps/contestCreate/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/contestCreate/assets/stylesheets/css/',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'app/apps/contestCreate/directives/imageUpload/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/contestCreate/directives/imageUpload/assets/stylesheets/css/',
                    ext: '.css'
                },
                // contests module
                {
                    expand: true,
                    cwd: 'app/apps/contests/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/contests/assets/stylesheets/css/',
                    ext: '.css'
                },
                // leagues module
                {
                    expand: true,
                    cwd: 'app/apps/leagues/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/leagues/assets/stylesheets/css/',
                    ext: '.css'
                },
                // login module
                {
                    expand: true,
                    cwd: 'app/apps/login/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/login/assets/stylesheets/css/',
                    ext: '.css'
                },
                // logs module
                {
                    expand: true,
                    cwd: 'app/apps/logs/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/logs/assets/stylesheets/css/',
                    ext: '.css'
                },
                // loyality module
                {
                    expand: true,
                    cwd: 'app/apps/loyality/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/loyality/assets/stylesheets/css/',
                    ext: '.css'
                },
                // missions module
                {
                    expand: true,
                    cwd: 'app/apps/missions/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/missions/assets/stylesheets/css/',
                    ext: '.css'
                },
                // users module
                {
                    expand: true,
                    cwd: 'app/apps/users/assets/stylesheets/sass/',
                    src: ['app.scss'],
                    dest: 'app/apps/users/assets/stylesheets/css/',
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
                ],
                tasks: [
                    //'ngtemplates',
                    // 'concat',
                    //'ngAnnotate',
                    //'uglify',
                    // 'sass',
                    // 'connect'
                  ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-sourcemap');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', [
        // 'ngtemplates',
        'concat',
        // 'ngAnnotate',
        // 'uglify',
        'sass',
        // 'concat_sourcemap',
        'connect',
        'watch'
    ]);

    grunt.registerTask('deploy', [
        'ngtemplates',
        'concat',
        'ngAnnotate',
        'uglify',
        'sass',
        'clean',
        'copy'
    ]);

};