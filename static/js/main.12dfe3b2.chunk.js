(this["webpackJsonpcan-fun"]=this["webpackJsonpcan-fun"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},25:function(e,n){},26:function(e,n){},27:function(e,n){},30:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t(1),c=t.n(i),s=t(3),a=t.n(s),r=(t(15),t(16),t(8)),l=t(4),u=t(5),h=t(9),g=t(7),f=(t(17),t(6)),d=t.n(f),p=["shape","crop","filter","flip","rotate","draw","icon","mask","text"];var b=function(e){Object(h.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(l.a)(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(e=n.call.apply(n,[this].concat(i))).ref=c.a.createRef(null),e.imageEditorOptions={cssMaxWidth:960,cssMaxHeight:800,selectionStyle:{cornerSize:20,rotatingPointOffset:70},usageStatistics:!1,includeUI:{menu:p,menuBarPosition:"bottom",uiSize:{width:"100%",height:"100vh"},loadImage:{path:"/can-fun/img/hill.jpg",name:"SampleImage"}},initMenu:"filter"},e.handleClickButton=function(n){var t=e.ref.current.getInstance();switch(console.log("button click with op ".concat(n)),n){case"x":t.flipX();break;case"y":t.flipY()}},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.bindWindowResize(),this.initState(),console.log(this.instance)}},{key:"shouldComponentUpdate",value:function(e,n){return console.groupCollapsed("instance sCU"),console.log(this.instance),console.log(e),console.log(n),console.log(this.props),console.groupEnd(),!0}},{key:"initState",value:function(){var e=window,n=e.innerHeight,t=.8*e.innerWidth,o=.8*n;console.log(this.state),this.setState({width:t,height:o})}},{key:"bindWindowResize",value:function(){var e=this;window.onresize=function(n){var t=e.ref.current.getInstance();e.initState(),console.groupCollapsed("resizing eI: ".concat(Object.keys(t))),console.log(t),console.log(e),console.log(n),console.groupEnd(),t.ui.resizeEditor()},console.log(this)}},{key:"render",value:function(){return null!==this.ref.current?(console.log("re-init-tui ref"),this.bindWindowResize()):console.log("no element"),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(d.a,Object(r.a)({ref:this.ref},this.imageEditorOptions))})}}]),t}(c.a.Component);var j=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("main",{children:Object(o.jsx)(b,{})})})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),o(e),i(e),c(e),s(e)}))};a.a.render(Object(o.jsxs)(c.a.StrictMode,{children:[Object(o.jsx)(c.a,{exact:!0,path:"/can-fun"}),Object(o.jsx)(j,{})]}),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.12dfe3b2.chunk.js.map