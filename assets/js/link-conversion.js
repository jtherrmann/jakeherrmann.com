// Adapted from:
// https://spencermortensen.com/articles/email-obfuscation/#link-conversion
// https://spencermortensen.com/articles/email-obfuscation/files/link-conversion.js

// TODO: use more methods? e.g. https://spencermortensen.com/articles/email-obfuscation/#link-interaction

'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
    const a = document.querySelectorAll('[aria-label="Email"]')[0];
    if (a) {
        const oldchars = a.getAttribute('href').split('').map(char => char.charCodeAt(0));
        // TODO: better obfuscation function
        const newchars = oldchars.map(code => code - 1);
        const newtext = newchars.map(code => String.fromCharCode(code)).join('');
        a.setAttribute('href', newtext);
    }
});
