var $ = require('jquery');
var test = require('./testModule.js');
var gui = require('nw.gui');


$(function(){
	$('button.test_module')
		.click(function(){
			console.log('clicked');
			test.go();
		});
	$('button.open_win')
		.click(function(){
			gui.Window.open('page.html', {
				'new-instance':false
			});
		});
	$('button.iframe')
		.click(function(){
			$('<iframe>')
				.appendTo('body')
				.remove();
		});
	$('button.connect')
		.click(function(){
			test.connect(function(){
				console.log('connection made');
				$('body').append('<p>Successful connection</p>');
			});
		});


});