/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! Yo. */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['resources/js/ga.js',
            'resources/js/lib/jquery.js',
            'resources/js/lib/tooltip.js',
            'resources/js/lib/handlebars.js',
            'resources/js/<%= pkg.name %>.js'],
        dest: 'resources/js/<%= pkg.name %>.min.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: '<%= concat.dist.dest %>'
      }
    },
    less : {
      prod: {
        options : {
          paths       : ['resources/less'],
          compress    : false,
          yuicompress : false
        },
        files   : {
          'resources/css/style.min.css' : 'resources/less/style.less',
        }
      }
    },
    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['resources/js/<%= pkg.name %>.js']
      }
    },
    watch: {
      less: {
        files: ['resources/less/style.less'],
        tasks: ['less']
      },
      livereload : {
        options: {livereload: true},
        files: ['resources/css/style.min.css']
      }
    },
    sprite: {
      all: {
        src: 'resources/img/assets/*.png',
        retinaSrcFilter: 'resources/img/assets/*-2x.png',
        dest: 'resources/img/sprites.png',
        retinaDest : 'resources/img/sprites-2x.png',
        destCss: 'resources/less/sprites.less',
        cssSpritesheetName: 'sp',
        padding : 2,
        cssVarMap : function(sprite) {
          sprite.name = 'sp-' + sprite.name;
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'index.htm': ['index.html']
        }
      }
    },
  });

  // These plugins provide necessary tasks.
  for (var key in grunt.file.readJSON('package.json').devDependencies) {
    if (key !== 'grunt' && key.indexOf('grunt') === 0) { grunt.loadNpmTasks(key); }
  }
  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sprite', 'less', 'processhtml']);
};
