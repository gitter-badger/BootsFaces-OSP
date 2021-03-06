module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	concat: {
		options: {
		  separator: ';',
		},
		dist: {
		  src: ['js/alert.js',
		        'js/bootstrap-switch.js',
		        'js/bootstrap-multiselect.js',
		        'js/bootstrap-multiselect-collapsible-groups.js',
		        'js/collapse.js',
		        'js/dropdown.js',
		        'js/modal.js',
		        'js/tab.js',
		        'js/tooltip.js',
		        'js/bsf.js'],
		  // dest: 'temp/allinone.js',
		  dest: '../BootsFaces/min/js/BootsFaces.js',
		},
	},
	concat_css: {
                option: {},
		dist: {
			src: [
 			        'css/core.css',			
			        'css/jq.ui.slider.css',
			        'css/jq.ui.theme.css',
			        'css/jq.ui.core.css',			
			        'css/jq.ui.datepicker.css',		
					'css/alerts.css',			
					'css/badges.css',		
					'css/bootstrap-multiselect.css',	
					'css/jumbotron.css',
					'css/bootstrap-switch.css',		
					'css/labels.css',
					'css/modals.css',
					'css/navbar.css',
					'css/dropdown-submenu.css',		
					'css/panels.css',
					'css/dropdowns.css',			
					'css/thumbnails.css',
					'css/tooltip.css',
					'css/wells.css',
					'css/bsf.css'],				
		  dest: '../BootsFaces/min/BootsFaces.css',
		},
	},
	
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        compress: false,
        mangle: false
      },
      build: {
        src:  '../BootsFaces/min/js/BootsFaces.js',
        dest: '../BootsFaces/min/js/BootsFaces.min.js'
      }
    },
    cssmin:{
      target: {
        files: [{
          expand: true,
          cwd: '../BootsFaces/min',
          src: ['BootsFaces.css'],
          dest: '../BootsFaces/min/css',
          ext: '.min.css'
        }]
      }    
    },
    mavenPrepare: {
      options: {
        resources: ['css/**', 'js/**', 'jq/**']
      },
      prepare: {}
    }, 
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-maven');
  // grunt.loadNpmTasks('grunt-contrib-less');
  
  // Default task(s).
  grunt.registerTask('default', ['mavenPrepare', 'concat', 'uglify', 'concat_css','cssmin']);

};