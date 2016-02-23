// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {
	$('.sidebar-toggle .fa-comment').click(function(event) {
		if ( $('.main-content').hasClass('merge-left') ) {
			$('.right-sidebar').toggleClass('open');
			$('.main-content').toggleClass('shift-left');
			$('.main-content').toggleClass('merge-left');
			// $('.left-sidebar').toggleClass('hide-left');
		}
		else {
			$('.left-sidebar').toggleClass('hide-left');
			$('.main-content').toggleClass('shift-left');
			$('.right-sidebar').toggleClass('open');
		}
	});
	$('.sidebar-toggle .fa-bars').click(function(event) {
		if ( $('.right-sidebar').hasClass('open') ) {
			$('.right-sidebar').removeClass('open');
			$('.left-sidebar').toggleClass('hide-left');
			$('.main-content').toggleClass('shift-left');
		}
		else {
			$('.left-sidebar').toggleClass('hide-left');
			$('.main-content').toggleClass('merge-left');
		}
	});
	$('.main-content').click(function(event) {
		if ( $('.right-sidebar').hasClass('open') ) {
		     $('.right-sidebar').removeClass('open');
		     $('.left-sidebar').removeClass('hide-left');
		     $('.main-content').removeClass('shift-left');
		}
	});
})

