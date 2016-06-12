module.exports = function(grunt) {
  'use strict';
  var listJSFiles = [ '.build/start.js', '.build/widgets/**/*.js', '.build/pages/**/*.js'  ];
  var listDependencies = [ 'bower_components/handlebars/handlebars.js' ];

  // configure the tasks
  grunt.initConfig({
    watch: {
      less: {
        files: 'app/**/*.less',
        tasks: ['less']
      },
      javascript: {
        files: 'app/**/*.js',
        tasks: ['copy:javascript', 'jshint', 'handlebars', 'concat:dev']
      },
      templates: {
        files: 'app/**/*.hbs',
        tasks: ['copy:templates', 'handlebars', 'concat:dev']
      }
    },
    copy: {
      templates: {
        cwd: 'app',
        src: [ '**/*.hbs' ],
        dest: '.build',
        expand: true
      },
      javascript: {
        cwd: 'app',
        src: [ '**/*.js', '../bower_components/handlebars/handlebars.js'],
        dest: '.build',
        expand: true
      },
      files: {
        cwd: 'app',
        src: [ 'favicon.ico' ],
        dest: '.build',
        expand: true
      }
    },
    clean: {
      all: {
        src: [ '.build' ]
      },
      tempFilesProd: {
        src: ['.build/**/*.js', '.build/**/*.css', '!.build/application-min.js', '!.build/styles-min.css']
      }
    },
    less: {
      development: {
        options: {
          // Specifies directories to scan for @import directives when parsing.
          // Default value is the directory of the source, which is probably what you want.
          paths: ['app/genericStyle']
        },
        files: {
          '.build/styles.css': 'app/**/*.less'
        }
      }
    },
    cssmin: {
      build: {
        files: {
          '.build/styles-min.css': [ '.build/styles.css' ]
        }
      }
    },
    uglify: {
      prod: {
        options: {
          mangle: true
        },
        files: {
          '.build/application-min.js': listDependencies.concat(['.build/templates.js']).concat(listJSFiles)
        }
      }
    },
    concat: {
      dev: {
        options: {
          separator: ';\n\n'
        },
        files: {
          '.build/application.js': listDependencies.concat(['.build/templates.js']).concat(listJSFiles)
        }
      }
    },
    jshint: {
      files: listJSFiles
    },
      handlebars: {
          compile: {
              options: {
                  namespace: 'templates',
                  node: true,
                  processName: function(filePath) {
                      filePath = filePath.split('/').splice(1).join('_');
                      return filePath.substring(0, filePath.length - 4);
                  }
              },
              files: {
                  '.build/templates.js': [ '.build/**/*.hbs' ]
              }
          }
      }
  });

  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // define the tasks
  grunt.registerTask(
    'default',
    [ 'buildDev', 'watch']
  );
  grunt.registerTask(
    'buildDev',
    'Compiles all of the assets and copies the files to the build directory.',
    [ 'clean:all', 'copy', 'handlebars', 'jshint', 'less', 'concat:dev']
  );
  grunt.registerTask(
    'buildProd',
    'Compiles all of the assets and copies the files to the build directory.',
    [ 'clean:all', 'copy', 'handlebars', 'jshint', 'less', 'cssmin', 'uglify:prod', 'clean:tempFilesProd' ]
  );
};
