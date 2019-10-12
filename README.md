# XSS Autofill

Check it out: [https://xss-autofill.web.app](https://xss-autofill.web.app)

Or clone this repo and serve from the `/public` directory.

This should work with any password manager (tested with LastPass) or 
the native 'save password' functionality in some browsers:

- Chrome ✓
- Firefox ✓
- Safari ✗
- Edge ✗
 
'Log in' on the `index.html` page. When your browser or password manager asks to save your password, allow it.

The `logged-in.html` page has a mock reflected XSS vulnerability and loads a malicious script, `xss.js`.

This script adds a username and password field to the page, which your browser/password manager will kindly autofill.

We can't access the values in these fields without some sort of user interaction, 
so we listen for a click event on window, at which point the fields are filled and we can get the values from the inputs.

## Reflected XSS

Since the script is quite short, it could fit in a URL and do away with the need for a separate file. 
That isn't implemented in this page though, I'm only doing a rudimentary clone of jQuery's `.html()`.

The `xss.js` script assumes username/password input fields with specific names - it's targeted at this demo site.
In the real world, it could be targeted on a per-page basis to get the username and password input names right
or it could contain many variations of common username and password input names so the browser will autofill at least some of them.

## Fallback when the fields aren't autofilled

The script could be extended to display the login page of the site in an iframe, 
layered over the page where the XSS payload executes.
In this instance, a click event would be registered on the submit button that captures the 
username/password, stops propagation, then removes the iframe.
