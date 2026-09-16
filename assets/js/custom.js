// Adapted from:
// https://spencermortensen.com/articles/email-obfuscation/#link-conversion
// https://spencermortensen.com/articles/email-obfuscation/files/link-conversion.js

'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
    const a = document.querySelector('a[aria-label="Contact"]');
    if (a) {
        // Note: This does not fool an LLM, it's only meant to defeat basic pattern-matching.
        // TODO: use real email
        a.setAttribute('href', a.getAttribute('href')
            .replace('co', 'lto:')
            .replace('ct', 'ple@exa')
            .replace('/', 'mai')
            .replace('nta', 'exam')
            + 'mple.com'
        );
    }
});
