(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"3ADR":function(e,t,n){"use strict";var a=n("Lffp");n.d(t,"a",(function(){return a.a}))},"4OD5":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var a=n("LuW/"),o=n("rlB+"),r=n("+gWF"),c={plain:{backgroundColor:"transparent",color:a.a.teal[500],margin:0,fontFamily:r.a.mono,fontSize:14,lineHeight:1.5},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:o.a.darkGray}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:a.a.teal[200]}},{types:["property","function"],style:{color:o.a.white}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:a.a.teal[200]}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={plain:{backgroundColor:"transparent",color:a.a.teal[500],margin:0,fontFamily:r.a.mono,fontSize:14,lineHeight:1.5},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:a.a.grey[500]}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:a.a.grey[500]}},{types:["number"],style:{color:a.a.pink[400]}},{types:["property","function"],style:{color:a.a.grey[500]}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:a.a.teal[600]}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]}},Lffp:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return j}));var a=n("jg1C"),o=n("ERkP"),r=n.n(o),c=n("wHK/"),i=n("LHL8"),l=n("mstN"),s=n("xCUj"),u=n("twku"),d=n("O94r"),b=n.n(d),p=n("mkj/"),y=n("uF0p"),g=n("i7XI"),_=n.n(g),f=n("4OD5"),m=n("Q4uc");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}("undefined"!==typeof e?e:window).Prism=y.a,n("PWz3");var h=["string","variable"],j=function(e){var t=e.code,n=e.onCodeUpdate,d=e.language,y=e.displayLineNumbers,g=e.expandable,k=void 0!==g&&g,j=e.isLight,x=void 0!==j&&j,O=r.a.useState(t),w=Object(l.a)(O,1)[0],S=Object(s.a)(),C=S.codeVariableMap,N=S.setCodeVariableMap,E=r.a.useState(k),P=Object(l.a)(E,2),D=P[0],B=P[1];return r.a.useEffect((function(){var e=Object.keys(C).reduce((function(e,t){return e.split(t).join(C[t])}),t);n&&n(e)}),[C,t,n]),t?Object(a.jsx)(p.a,v(v({},p.b),{},{theme:x?f.b:f.a,code:n?w:t,language:d||"markdown",children:function(e){var t=e.className,n=e.style,r=e.tokens,l=e.getLineProps,s=e.getTokenProps,p=D&&r.length>25,g=p?v(v({},n),{},{margin:"0 0 18px 0",backgroundColor:"inherit"}):n;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("pre",{className:b()(t,_.a["code-block"],p&&_.a["code-block--collapse"]),style:g,children:r.map((function(e,t){var n=t+1;return Object(o.createElement)("div",v(v({},l({line:e})),{},{key:t}),y&&Object(a.jsx)("div",{className:_.a["code-block__line-number"],"data-line-number":n}),e.map((function(e,n){var o=s({token:e,key:n}),r=o.children,l=o.className,u=Object(c.a)(o,["children","className"]),p=e.types.length===h.length&&e.types.every((function(e,t){return e===h[t]}))||"javascript"===d&&e.types.includes("constant")||"python"===d&&e.content.startsWith("$")||"ruby"===d&&function(e){return e.types.includes("variable")&&e.content.startsWith("$")}(e);if(N&&p){return Object(a.jsx)(m.a,{variableKey:"".concat(t).concat(n),value:C[e.content]||e.content,tokenClassName:l,onVariableUpdate:function(t){N(Object.assign({},C,Object(i.a)({},e.content,t)))}},"".concat(t).concat(n))}return Object(a.jsx)("span",v(v({},u),{},{className:b()(l,_.a["code-block__line-code"]),children:r}),"".concat(t).concat(n))})))}))}),k&&r.length>25&&Object(a.jsxs)("button",{className:_.a["code-block__expand-button"],onClick:function(){return B(!D)},children:[Object(a.jsx)(u.a,{className:_.a["code-block__expand-button__indicator"],type:"label",children:"..."}),Object(a.jsxs)(u.a,{color:"grey-500",type:"label",children:[D?"View":"Hide"," full sample"]})]})]})}})):null}}).call(this,n("GfI+"))},PWz3:function(e,t){!function(e){e.languages.ruby=e.languages.extend("clike",{comment:{pattern:/#.*|^=begin\s[\s\S]*?^=end/m,greedy:!0},"class-name":{pattern:/(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,operator:/\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,punctuation:/[(){}[\].,;]/}),e.languages.insertBefore("ruby","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}});var t={pattern:/((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,lookbehind:!0,inside:{content:{pattern:/^(#\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:e.languages.ruby},delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"}}};delete e.languages.ruby.function;var n="(?:"+[/([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,/\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,/\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,/\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,/<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source].join("|")+")",a=/(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;e.languages.insertBefore("ruby","keyword",{"regex-literal":[{pattern:RegExp(/%r/.source+n+/[egimnosux]{0,6}/.source),greedy:!0,inside:{interpolation:t,regex:/[\s\S]+/}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,lookbehind:!0,greedy:!0,inside:{interpolation:t,regex:/[\s\S]+/}}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:[{pattern:RegExp(/(^|[^:]):/.source+a),lookbehind:!0,greedy:!0},{pattern:RegExp(/([\r\n{(,][ \t]*)/.source+a+/(?=:(?!:))/.source),lookbehind:!0,greedy:!0}],"method-definition":{pattern:/(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,lookbehind:!0,inside:{function:/\b\w+$/,keyword:/^self\b/,"class-name":/^\w+/,punctuation:/\./}}}),e.languages.insertBefore("ruby","string",{"string-literal":[{pattern:RegExp(/%[qQiIwWs]?/.source+n),greedy:!0,inside:{interpolation:t,string:/[\s\S]+/}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:t,string:/[\s\S]+/}},{pattern:/<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?/}},interpolation:t,string:/[\s\S]+/}},{pattern:/<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?'|'$/}},string:/[\s\S]+/}}],"command-literal":[{pattern:RegExp(/%x/.source+n),greedy:!0,inside:{interpolation:t,command:{pattern:/[\s\S]+/,alias:"string"}}},{pattern:/`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,greedy:!0,inside:{interpolation:t,command:{pattern:/[\s\S]+/,alias:"string"}}}]}),delete e.languages.ruby.string,e.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,constant:/\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/}),e.languages.rb=e.languages.ruby}(Prism)},Q4uc:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n("jg1C"),o=n("mstN"),r=n("ERkP"),c=n.n(r),i=n("tcKs"),l=n("i7XI"),s=n.n(l),u=n("D4bG"),d=n("O94r"),b=n.n(d),p=n("rxq4"),y=function(e){var t=e.variableKey,n=e.value,r=e.tokenClassName,l=e.onVariableUpdate,d=c.a.useState(!1),y=Object(o.a)(d,2),g=y[0],_=y[1],f=c.a.useState(n.length),m=Object(o.a)(f,2),k=m[0],v=m[1],h=function(e){v(e.currentTarget.value.length)},j=g?Object(a.jsx)("input",{autoFocus:!0,style:{width:"".concat(k,"ch")},className:b()(r,s.a["code-block__variable-input"]),onInput:h,onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),e.currentTarget.blur())},onPaste:function(e){!function(e){e.preventDefault(),e.currentTarget.value=e.clipboardData.getData("Text").split(/\r\n|\n|\r/g).join(" ").trim()}(e),h(e)},onFocus:function(e){Object(p.a)("hq_docs_guides_code_block_variable_focused",{event_type:"interaction",value:e.currentTarget.value}),e.currentTarget.select()},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(e){return t=n,a=e.currentTarget.value,Object(p.a)("hq_docs_guides_code_block_variable_blurred",{event_type:"interaction",old_variable:t,new_variable:a}),l(a),void(g&&_(!1));var t,a},defaultValue:n,type:"textarea"},"".concat(t,"-input")):Object(a.jsx)("span",{style:{width:"".concat(k,"ch")},className:b()(r,s.a["code-block__variable-input"]),onClick:function(){return _(!0)},children:n},"".concat(t,"-span"));return Object(a.jsxs)(i.a,{space:"sm",className:g?s.a["code-block__variable-focused"]:s.a["code-block__variable"],alignCenter:!0,children:[j,Object(a.jsx)("div",{onClick:function(){return _(!g)},className:s.a["code-block__variable-icon"],children:Object(a.jsx)(u.a,{name:g?"close":"edit",size:12})})]},n)}},i7XI:function(e,t,n){e.exports={"code-block":"CodeBlock_code-block__1F8dv","code-block__variable":"CodeBlock_code-block__variable__2iSHu","code-block__variable-focused":"CodeBlock_code-block__variable-focused__slvet","code-block__variable-input":"CodeBlock_code-block__variable-input__27Pj5","code-block__variable-icon":"CodeBlock_code-block__variable-icon__1ScDb","code-block__line-number":"CodeBlock_code-block__line-number__2mv-k","code-block__line-code":"CodeBlock_code-block__line-code__RypGy","code-block__expand-button":"CodeBlock_code-block__expand-button__EZN3N","code-block__expand-button__indicator":"CodeBlock_code-block__expand-button__indicator__11Lvk","code-block--collapse":"CodeBlock_code-block--collapse__2l02t"}},xCUj:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("jg1C"),n("mstN");var a=n("ERkP"),o=n.n(a),r=o.a.createContext({codeVariableMap:{},setCodeVariableMap:null}),c=function(){return o.a.useContext(r)}}}]);
//# sourceMappingURL=f57b8909005f49cea7d88de3097f82075131aa81.da7023727e8e58074e5e.js.map