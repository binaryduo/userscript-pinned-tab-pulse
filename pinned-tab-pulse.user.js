// ==UserScript==
// @name          Pinned Tab Pulse
// @namespace     http://www.binaryduo.com/userscripts
// @description	  Pulses a pinned tab in Chrome if the title contains a number in parentheses {ex: (3)} by appending then removing an asterisk on a timer.
// @version       1.0
// @license       Creative Commons Attribution 3.0 Unported License http://creativecommons.org/licenses/by/3.0/
// @include       *
// ==/UserScript==
var doCheck = function() {
	var starMatches = document.title.match(/\(\d+\)\*/);
	var normMatches = document.title.match(/\(\d+\)/);
	if (starMatches !== null) {
		document.title = document.title.replace(/(\(\d+\))\*/, "$1");
	}
	else if (normMatches !== null) {
		document.title = document.title.replace(/(\(\d+\))/, "$1*");
	}
};

setInterval(doCheck, 4000);
