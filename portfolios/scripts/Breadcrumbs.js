// Breadcrumbs.js
	// rev. 2024-02-03
const baseUrl = `https://${username}.github.io/` || 'https://omarjuvera.github.io/Portfolios/';
const repoUrl = `${baseUrl}${repo}`;

const breadcrumbDiv = document.getElementById('breadcrumbs');
const breadcrumbSeparator = ' > ';
const breadcrumbPath = window.location.pathname.split('/').slice(2, -1);

const homeIcon = '🏠'; // You can replace this with an actual home icon

function createBreadcrumbLink(path, index) {
	const formattedPath = path.replace(/-/g, ' ').replace(/%20/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Convert to title case
	const pathUrl = `${repoUrl}/${breadcrumbPath.slice(0, index + 1).join('/')}/`;

	return `<a href="${pathUrl}">${formattedPath}</a>`;
}

const breadcrumbArray = [`<a href="${repoUrl}">${homeIcon} ${repo}</a>`];

breadcrumbPath.forEach((path, index) => {
	breadcrumbArray.push(createBreadcrumbLink(path, index));
});

const breadcrumbTrail = breadcrumbArray.join(breadcrumbSeparator);
breadcrumbDiv.innerHTML = breadcrumbTrail;
