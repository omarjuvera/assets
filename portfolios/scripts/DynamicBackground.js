// DynamicBackground.js
//getRepoUrl('repoUrl'); // Check is repoUrl is defined
//typeof window.repoUrl === 'undefined' && (window.repoUrl = 'https://omarjuvera.github.io/Portfolios/');
const portfolioUrl = getPortfolioUrl(repoUrl); // Get the portfolio URL based on the current location

// Check if repoUrl exsists OR Define the repository URL
function getRepoUrl(repoUrl) {
	// If repoUrl is already declared and has a value, nothing happens. Try/catch extists
	let defaultValue = 'https://omarjuvera.github.io/Portfolios/';
	try {
		// If repoUrl is not declared or has a falsy value, it defaults to 'https://omarjuvera.github.io/Portfolios/'
		if (typeof window[repoUrl] === 'undefined') {
			console.log('repoUrl is undefined');
			window[repoUrl] = defaultValue;
			console.log('repoUrl value:', repoUrl);
		} else {
			// Handle the case when repoUrl IS defined
			console.log('repoUrl is defined with a value:', repoUrl);
		}
	// Handle the error (if any) and set repoUrl to the default value
	} catch (error) {
		const repoUrl = defaultValue;
		console.log('Using default repo:', repoUrl);
	}
}


// Function to get the portfolio URL from the current location
function getPortfolioUrl(repoUrl) {
	try {
		// Sanitize the URL by removing repoUrl from the URL
		const sanitizedUrl = window.location.href.replace(repoUrl, '');
		// Split the sanitized URL to extract the first directory as the portfolio URL
		return (sanitizedUrl === repoUrl || sanitizedUrl.startsWith(repoUrl)) ? '' : sanitizedUrl.split('/')[0];
	} catch (error) {
		// The default is portfolio: 'Portfolios'
		console.log('Using default portfolio:', error.message);
		return ''; // Set to default (empty string) in case of an issue
	}
}

// Function to set the background based on the determined portfolioUrl
function setNewBackground() {
	try {
		// Find the background object corresponding to portfolioUrl
		const backgroundUrl = BackgroundModule.getBackgroundUrl(portfolioUrl);
		// Apply the background image to the document body
		document.body.style.backgroundImage = backgroundUrl;
		console.log(`Background changed to ${portfolioUrl}`);
	} catch (error) {
		console.log('Using default background:', error.message);
		const defaultBackgroundUrl = BackgroundModule.getBackgroundUrl('Portfolios');
		document.body.style.backgroundImage = defaultBackgroundUrl; // Set to default in case of an issue
	}
}

setNewBackground();