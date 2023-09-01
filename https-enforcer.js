// ==UserScript==
// @name         HTTPS Enforcer
// @namespace    WebfrontMedia
// @version      1.0
// @description  Enforces ssl connection on websites
// @author       Henrik<webfrontmedia@outlook.com>
// @match        http://*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.location.href = window.location.href.replace(/^http/g, 'https');
})();
