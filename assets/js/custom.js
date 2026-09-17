// Adapted from:
// https://spencermortensen.com/articles/email-obfuscation/#link-conversion
// https://spencermortensen.com/articles/email-obfuscation/files/link-conversion.js

'use strict';

function substitute(str) {
    // Note: This does not fool an LLM, it's only meant to defeat basic pattern-matching.
    return str
        .replace('co', 'lto:')
        .replace('ct', 'ct@jak')
        .replace('/', 'mai')
        .replace('nta', 'conta')
        .replace('/', 'eherrm')
        + 'ann.com'
}

document.addEventListener('DOMContentLoaded', function ()
{
    const homepageLink = document.querySelector('a[aria-label="Email"]');
    if (homepageLink) {
        homepageLink.setAttribute('href', substitute(homepageLink.getAttribute('href')));
    }

    const contactArea = document.getElementById('contact-area');
    if (contactArea) {
        const contactLink = document.getElementById('contact-link');
        const linkText = substitute(contactLink.getAttribute('href'));
        contactLink.setAttribute('href', linkText);
        contactLink.innerHTML = linkText.slice(7);
        contactArea.style.display = 'inline';
    }
});
