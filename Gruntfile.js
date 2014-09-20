module.exports = function(grunt) {
  grunt.initConfig({

    assetBase: './www/assets',
    assetDir: "<%= assetBase %>",

    clean: {
      assets: {
        src:['<%= assetBase %>'],
      },
    },

    concat: {
      options: {
        separator: ';',
      },
      js_htba: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js'
        ],
        dest: '<%= assetDir %>/js/htba.min.js',
      },
    },

    less: {
      development: {
        options: {
          compress: true
        },
        files: {
          "<%= assetDir %>/stylesheets/htba.min.css": "./src/less/htba.less"
        },
      },
    },

    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['./bower_components/font-awesome/fonts/*'], dest: '<%= assetDir %>/fonts', filter: 'isFile'},
          {expand: true, cwd: './src/images/', src: ['**'], dest: '<%= assetDir %>/images'}
        ]
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      htba: {
        files: {
          '<%= assetDir %>/js/htba.min.js': '<%= assetDir %>/js/htba.min.js'
        },
      },
    },

    watch: {
      js_htba: {
        files: [
          './bower_components/jquery/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js'
        ],
        tasks: ['concat:js_htba', 'uglify:htba']
      },
      less: {
        files: [
          './src/less/*.less',
          './bower_components/bootstrap/less/*.less',
          './bower_components/font-awesome/less/*.less'
        ],
        tasks: ['less']
      },
      copy: {
        files: [
          './bower_components/font-awesome/fonts/*'
        ],
        tasks: ['copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('all', ['less', 'concat', 'uglify', 'copy']);
};
