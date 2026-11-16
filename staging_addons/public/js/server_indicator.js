(function () {
	const titleSelector = ".page-head .title-area .title-text";
	const indicatorClass = "tpl-server-indicator";

	function add_indicator() {
		document.querySelectorAll(titleSelector).forEach((title) => {
			if (title.nextElementSibling?.classList.contains(indicatorClass)) return;

			const indicator = document.createElement("span");
			indicator.className = indicatorClass;
			indicator.textContent = "Testing Server";
			indicator.setAttribute("aria-label", "Environment: Testing Server");
			indicator.style.cssText =
				"display:inline-block;margin-left:12px;padding:2px 8px;border-radius:3px;background:#fff0d6;color:#8a4b08;font-size:12px;font-weight:600;line-height:1.6;vertical-align:middle";
			title.insertAdjacentElement("afterend", indicator);
		});
	}

	if (!document.body) return;
	new MutationObserver(add_indicator).observe(document.body, {
		childList: true,
		subtree: true,
	});
	add_indicator();
})();
