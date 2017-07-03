
(function(doc, win) {
		var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function() {
				var clientWidth = docEl.clientWidth;
				if (!clientWidth) return;
			    var myfontSize = 50 * (clientWidth/720);		
			    if (myfontSize > 44.4) {
					myfontSize = "44.4px";
				}
				if (myfontSize < 22.2) {
					myfontSize = "22.2px";
				}
				docEl.style.fontSize = myfontSize + 'px';
			};
		if (!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);
