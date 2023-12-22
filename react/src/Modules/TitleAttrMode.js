const TitleAttrMode = (docs) => {
	docs.forEach((title) => {
		const content = [];
		title.addEventListener('mouseenter', (e) => {
			if (e.currentTarget.title !== '') {
				content.push(e.currentTarget.title);
				e.currentTarget.title = '';
			}
		});
		title.addEventListener('mouseleave', (e) => {
			if (e.currentTarget.title === '') {
				e.currentTarget.title = content.shift();
			}
		});
	});
}

export default TitleAttrMode;