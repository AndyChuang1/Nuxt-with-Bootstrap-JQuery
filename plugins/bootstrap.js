//BROWSER_BUILD has been deprecated,need to use process.browser to get bootstrap.js
if (process.browser) {
	require("bootstrap");
}