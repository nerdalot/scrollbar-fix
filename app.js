/*
* Description goes here
*/
(function(){
	'use strict';

	const scrollBarCSS = 'https://cdn.jsdelivr.net/npm/simplebar@5.2.1/dist/simplebar.css';
	const scrollBarJS = 'https://cdn.jsdelivr.net/npm/simplebar@5.2.1/dist/simplebar.js';

	const scriptEl = document.createElement('script');
	const linkEl = document.createElement('link');

	linkEl.href = scrollBarCSS;
	scriptEl.src = scrollBarJS;

	linkEl.rel = 'stylesheet';
	scriptEl.type = 'text/javascript';

	document.body.appendChild(linkEl);
	document.body.appendChild(scriptEl);

})();