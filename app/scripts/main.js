'use strict';

var conjugationEx = conjugationEx;
var translationEx = translationEx;

document.addEventListener('DOMContentLoaded', function () {

	function attach()
	{
		conjugationEx.elems.button.addEventListener('touchend', conjugationEx.check, false);
		translationEx.elems.list.addEventListener('touchend', translationEx.check, false);
	}

	attach();

	conjugationEx.initialize();
	translationEx.initialize();

}, false);
