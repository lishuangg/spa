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
      'dist/css/baidu.min.css':'css/baidu.css'
    },
    uglify:{
      'dist/js/baidu.min.js':'js/baidu.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['htmlmin','cssmin','uglify']); 
};
