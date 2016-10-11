module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      less: {
        development: {
          files: {
            "dist/css/react-admin.css": "dist/css/less/app.less"
          }
        }
      },
      cssmin: {
        compress: {
          files: {
            'dist/css/react-admin.min.css': ['dist/css/react-admin.css']
          }
        }
      },
      watch: {
        styles: {
          files: ['dist/css/less/*.less'], // which files to watch
          tasks: ['less'],
          options: {
            nospawn: true
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('build', ['less', 'cssmin']);

};