const url = require('url');
function resolveAbsoluteURL(baseURL, relativePath) {
 const absoluteURL = url.resolve(baseURL, relativePath);
 console.log('Absolute URL:', absoluteURL);
}
// Example usage:
const baseURL = 'https://classroom.google.com/u/0/h';
const relativePath = 'path/to/resource';
resolveAbsoluteURL(baseURL, relativePath);