const myTheme = {
	render(state, instance) {
		const container = document.createElement('div');
		container.lang = "zh-CN";
		container.className = 'gitment-container gitment-root-container';
		container.appendChild(instance.renderHeader(state, instance));
		container.appendChild(instance.renderComments(state, instance));
		container.appendChild(instance.renderEditor(state, instance));
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
			owner: 'DePrism',
			repo: 'deprism.github.io',
			oauth: {
				client_id: 'b3ea4fecb63727152102',
				client_secret: '5879d4df4b5b5aa1a95a91de6d7236819fb86650'
			}
	});
	gitment.render('container');
}

showGitment();