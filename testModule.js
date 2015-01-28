var $ = require('jquery');
var indexedDB = window.indexedDB;
var test = {
	go: function(){
		console.log('test run');
		$('body').append('<p>'+new Date().getTime()+'</p>');
	},
	connect: function(cb){
		console.log('connecting local database');
		var request = indexedDB.open("demo");
		request.onupgradeneeded = function(){
			console.log('upgrade needed');
			db = request.result;
			db.createObjectStore('demo', {keyPath:'id', autoIncrement: true});
	};
	request.onsuccess = function(){
		console.log('success');
		db = request.result;
		cb();
	};
	request.onerror = function(){
		console.log('error');
		console.log(request.error);
		cb();
	};
}
};
module.exports = test;