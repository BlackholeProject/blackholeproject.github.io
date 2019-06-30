const myTheme = {
	render(state, instance) {
		const container = document.createElement('div');
		container.lang = "zh-CN";
		container.className = 'gitment-container gitment-root-container';
		container.appendChild(instance.renderHeader(state, instance));
		container.appendChild(instance.renderEditor(state, instance));
		container.appendChild(instance.renderComments(state, instance));
		container.appendChild(instance.renderFooter(state, instance));
		return container;
	}
}

function showGitment() {
	$("#gitment_title").attr("style", "display:none");
	$("#container").attr("style", "").addClass("gitment_container");
	var gitment = new Gitment({
		id: decodeURI(window.location.pathname),
			theme: myTheme,
			owner: 'DepletedPrism',
			repo: 'depletedprism.github.io',
			oauth: {
				client_id: '00b7d951cbba0567e3b7',
				client_secret: '3fbec031599fde5ee314c81869eae7fa55d88c86'
			}
	});
	gitment.render('container');
}

showGitment();