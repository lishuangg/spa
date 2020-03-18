module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files:{
        src:'./baidu.html',
        dest:'dist/baidu.html'    
      } 
    },
    cssmin:{
      files:{
        src:'css/*.css',
        dest:'dist/css/baidu.min.css'
      }
    },
    uglify:{
      files:{
        src:'js/baidu.js',
        dest:'dist/js/baidu.min.js'
      } 
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['htmlmin','cssmin','uglify']); 
};
