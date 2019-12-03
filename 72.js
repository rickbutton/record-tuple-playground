(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js ***!
  \************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n// Allow for running under nodejs/requirejs in tests\nvar _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);\nvar EMPTY_ELEMENTS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\$\\^\\&\\*\\(\\)\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\s]+)/g,\n    comments: {\n        blockComment: ['{{!--', '--}}']\n    },\n    brackets: [\n        ['<!--', '-->'],\n        ['<', '>'],\n        ['{{', '}}'],\n        ['{', '}'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' }\n    ],\n    surroundingPairs: [\n        { open: '<', close: '>' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' }\n    ],\n    onEnterRules: [\n        {\n            beforeText: new RegExp(\"<(?!(?:\" + EMPTY_ELEMENTS.join('|') + \"))(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            afterText: /^<\\/(\\w[\\w\\d]*)\\s*>$/i,\n            action: { indentAction: _monaco.languages.IndentAction.IndentOutdent }\n        },\n        {\n            beforeText: new RegExp(\"<(?!(?:\" + EMPTY_ELEMENTS.join('|') + \"))(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            action: { indentAction: _monaco.languages.IndentAction.Indent }\n        }\n    ],\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '',\n    // ignoreCase: true,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.root' }],\n            [/<!DOCTYPE/, 'metatag.html', '@doctype'],\n            [/<!--/, 'comment.html', '@comment'],\n            [/(<)(\\w+)(\\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],\n            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],\n            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],\n            [/(<)([:\\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\n            [/(<\\/)(\\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\n            [/</, 'delimiter.html'],\n            [/\\{/, 'delimiter.html'],\n            [/[^<{]+/] // text\n        ],\n        doctype: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.comment' }],\n            [/[^>]+/, 'metatag.content.html'],\n            [/>/, 'metatag.html', '@pop'],\n        ],\n        comment: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.comment' }],\n            [/-->/, 'comment.html', '@pop'],\n            [/[^-]+/, 'comment.content.html'],\n            [/./, 'comment.content.html']\n        ],\n        otherTag: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.otherTag' }],\n            [/\\/?>/, 'delimiter.html', '@pop'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/],\n        ],\n        // -- BEGIN <script> tags handling\n        // After <script\n        script: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.script' }],\n            [/type/, 'attribute.name', '@scriptAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/(<\\/)(script\\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]\n        ],\n        // After <script ... type\n        scriptAfterType: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.scriptAfterType' }],\n            [/=/, 'delimiter', '@scriptAfterTypeEquals'],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type =\n        scriptAfterTypeEquals: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.scriptAfterTypeEquals' }],\n            [/\"([^\"]*)\"/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],\n            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type = $S2\n        scriptWithCustomType: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.scriptWithCustomType.$S2' }],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.$S2', nextEmbedded: '$S2' }],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        scriptEmbedded: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInEmbeddedState.scriptEmbedded.$S2', nextEmbedded: '@pop' }],\n            [/<\\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]\n        ],\n        // -- END <script> tags handling\n        // -- BEGIN <style> tags handling\n        // After <style\n        style: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.style' }],\n            [/type/, 'attribute.name', '@styleAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/(<\\/)(style\\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]\n        ],\n        // After <style ... type\n        styleAfterType: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.styleAfterType' }],\n            [/=/, 'delimiter', '@styleAfterTypeEquals'],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type =\n        styleAfterTypeEquals: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.styleAfterTypeEquals' }],\n            [/\"([^\"]*)\"/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],\n            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type = $S2\n        styleWithCustomType: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.styleWithCustomType.$S2' }],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.$S2', nextEmbedded: '$S2' }],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        styleEmbedded: [\n            [/\\{\\{/, { token: '@rematch', switchTo: '@handlebarsInEmbeddedState.styleEmbedded.$S2', nextEmbedded: '@pop' }],\n            [/<\\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]\n        ],\n        // -- END <style> tags handling\n        handlebarsInSimpleState: [\n            [/\\{\\{\\{?/, 'delimiter.handlebars'],\n            [/\\}\\}\\}?/, { token: 'delimiter.handlebars', switchTo: '@$S2.$S3' }],\n            { include: 'handlebarsRoot' }\n        ],\n        handlebarsInEmbeddedState: [\n            [/\\{\\{\\{?/, 'delimiter.handlebars'],\n            [/\\}\\}\\}?/, { token: 'delimiter.handlebars', switchTo: '@$S2.$S3', nextEmbedded: '$S3' }],\n            { include: 'handlebarsRoot' }\n        ],\n        handlebarsRoot: [\n            [/[#/][^\\s}]+/, 'keyword.helper.handlebars'],\n            [/else\\b/, 'keyword.helper.handlebars'],\n            [/[\\s]+/],\n            [/[^}]/, 'variable.parameter.handlebars'],\n        ],\n    },\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js?");

/***/ })

}]);