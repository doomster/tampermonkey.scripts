// ==UserScript==
// @name         Google search add remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  When using Pihole on your network, the google search results that are adds(mostly first couple of links) are not working. This scripts just removes this block of links.
// @author       dvalilis
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     var badElements = [ "#tads", "#bottomads"]
     function removeIfExists (selector) {
     var x = document.querySelector(selector)
     if (x) x.remove()
     }
    badElements.forEach(removeIfExists)

}

)();
