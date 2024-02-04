// ConstModule.js

// Exporting a function to define a constant
export const defineConstant = (constantName, defaultValue) => {
    try {
        // Check if the constant is undefined
        if (typeof window[constantName] === 'undefined') {
            // If undefined, set the constant to the default value
            window[constantName] = defaultValue;
        }
    } catch (error) {
        // If an error occurs during constant definition, handle it
        handleError(`Error while defining constant ${constantName}:`, error);
    }
};

// Exporting a function to get or define the repository URL
export const getRepoUrl = (repoUrl) => {
    // Default value for the repository URL
    const defaultValue = 'https://omarjuvera.github.io/Portfolios/';

    try {
        // Check if the repository URL is undefined
        if (typeof window[repoUrl] === 'undefined') {
            // If undefined, set the repository URL to the default value
            window[repoUrl] = defaultValue;
            // Log the updated repository URL
            logMessage('repoUrl value:', window[repoUrl]);
        }
    } catch (error) {
        // If an error occurs during handling the repository URL, handle it
        handleError('Error while handling repoUrl:', error);
        // Set the repository URL to the default value
        setDefaultRepoUrl(repoUrl, defaultValue);
    }
};

// Internal function to set the repository URL to the default value
const setDefaultRepoUrl = (repoUrl, defaultValue) => {
    window[repoUrl] = defaultValue;
    // Log the usage of the default repository URL
    logMessage('Using default repo:', window[repoUrl]);
};

// Internal function to handle errors by logging them
const handleError = (message, error) => {
    console.error(message, error);
};

// Internal function to log messages
const logMessage = (...messages) => {
    console.log(...messages);
};

// Additional functions or logic can be added as needed

// Note: These functions are scoped to the module and can be used internally.
// They are not exported, meaning they are not accessible outside of this module.
