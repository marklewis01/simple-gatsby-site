webpackJsonp([0xc1d74b0851a0],{40:function(e,t,a){"use strict";function l(e){var t=e.classes,a=e.className,l=e.component,r=e.square,o=e.elevation,s=(0,d.default)(e,["classes","className","component","square","elevation"]),i=(0,f.default)(t.root,t["elevation".concat(o)],(0,u.default)({},t.rounded,!r),a);return c.default.createElement(l,(0,n.default)({className:i},s))}var r=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=r(a(5)),u=r(a(10)),d=r(a(4)),o=r(a(16)),c=r(a(2)),f=(r(a(3)),r(a(6))),s=(r(a(9)),r(a(7))),i=function(e){var t={};return e.shadows.forEach(function(e,a){t["elevation".concat(a)]={boxShadow:e}}),(0,o.default)({root:{backgroundColor:e.palette.background.paper},rounded:{borderRadius:2}},t)};t.styles=i,l.propTypes={},l.defaultProps={component:"div",elevation:2,square:!1};var m=(0,s.default)(i,{name:"MuiPaper"})(l);t.default=m},30:function(e,t,a){"use strict";var l=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=l(a(40))},387:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.postQuery=void 0;var r=a(2),n=l(r),u=a(44),d=l(u),o=a(29),c=l(o),f=a(30),s=l(f),i=a(31),m=l(i),p=a(32),v=a(48),E=l(v),b=function(e){return{sidebarBlog:{padding:"1rem",backgroundColor:e.palette.grey[100]},blogHomeLink:{marginTop:"2rem"}}},g=function(e){var t=e.classes,a=e.data,l=a.markdownRemark;return n.default.createElement(c.default,{container:!0},n.default.createElement(c.default,{item:!0,xs:12},n.default.createElement(E.default,{flex:!0},n.default.createElement(c.default,{item:!0,xs:8},n.default.createElement("h1",null,l.frontmatter.title),n.default.createElement("div",{dangerouslySetInnerHTML:{__html:l.html}})),n.default.createElement(c.default,{item:!0,xs:4},n.default.createElement(s.default,{className:t.sidebarBlog},n.default.createElement(m.default,{variant:"title"},"Recent Articles"),n.default.createElement("ul",null,a.allMarkdownRemark.edges.map(function(e){var t=e.node;return n.default.createElement(d.default,{key:t.id,to:t.frontmatter.path},n.default.createElement("li",null,t.frontmatter.title))})))),n.default.createElement(c.default,{container:!0,className:t.blogHomeLink},n.default.createElement(c.default,{item:!0,xs:12},n.default.createElement("hr",null),n.default.createElement(m.default,{variant:"body1"},n.default.createElement(d.default,{to:"/blog"},"Go back to articles main page")))))))};t.default=(0,p.withStyles)(b)(g);t.postQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-jsx-73c33fc7945380045ad5.js.map