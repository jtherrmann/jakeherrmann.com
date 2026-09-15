// Encodes or decodes an email link by splitting it into two halves
// and then shifting the characters in each half by a random value.

// Basic idea of link conversion explained here:
// https://spencermortensen.com/articles/email-obfuscation/#link-conversion
// https://spencermortensen.com/articles/email-obfuscation/files/link-conversion.js

'use strict';

// The two shift values are random numbers between 1 and 255 (inclusive)
const SHIFT1 = 224;
const SHIFT2 = 148;

function hex(str) {
    // https://stackoverflow.com/a/60435654
    return str.split('').map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
}

function unhex(str) {
    const pairs = [];
    for (let i = 0; i < str.length; i += 2) {
        pairs.push(str.slice(i, i + 2));
    }
    return pairs.map(pair => String.fromCharCode(parseInt(pair, 16))).join('');
}

function getChars(str) {
    return str.split('').map(c => c.charCodeAt(0));
}

function getStr(chars) {
    return chars.map(c => String.fromCharCode(c)).join('');
}

function shiftChar(c, val) {
    return (c + val) % 256;
}

function shiftChars(chars, val) {
    return chars.map(c => shiftChar(c, val));
}

function shiftHalves(chars, shift1, shift2) {
    const midpoint = Math.ceil(chars.length / 2);

    const firstHalf = chars.slice(0, midpoint);
    const secondHalf = chars.slice(midpoint);

    return shiftChars(firstHalf, shift1)
        .concat(shiftChars(secondHalf, shift2));
}

function encode(str) {
    const chars = getChars(str);
    const encodedChars = shiftHalves(chars, SHIFT1, SHIFT2);
    return hex(getStr(encodedChars));
}

function decode(str) {
    const encodedChars = getChars(unhex(str));
    const chars = shiftHalves(encodedChars, 256 - SHIFT1, 256 - SHIFT2);
    return getStr(chars);
}

document.addEventListener('DOMContentLoaded', function ()
{
    const a = document.querySelectorAll('[aria-label="Email"]')[0];
    if (a) {
        a.setAttribute('href', decode(a.getAttribute('href')));

        // To encode a new email address, uncomment and edit the following line,
        // refresh the homepage, open the JavaScript Console, and copy the logged string:
        // console.log(encode('mailto:example@example.com'));
    }
});
