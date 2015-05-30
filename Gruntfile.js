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
        src: ['resources/js/lib/jquery.js','resources/js/lib/handlebars.js','resources/js/<%= pkg.name %>.js'],
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
          compress    : true,
          yuicompress : true
        },
        files   : {
          'resources/css/style.min.css' : 'resources/less/style.less',
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
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
    }
  });

  // These plugins provide necessary tasks.
  for (var key in grunt.file.readJSON('package.json').devDependencies) {
    if (key !== 'grunt' && key.indexOf('grunt') === 0) { grunt.loadNpmTasks(key); }
  }
  // Default task.
  grunt.registerTask('default', ['jshint']);
};
