(this["webpackJsonpyoutube-playlist"]=this["webpackJsonpyoutube-playlist"]||[]).push([[5],{176:function(e,t,a){"use strict";a.r(t);var n=a(61),r=a.n(n),c=a(73),i=a(62),l=a(69),o=a(0),u=a.n(o),s=a(108),p=a(85),d=a(147),m=a(179),f=a(149),b=a(150),v=a(151),h=a(152);function g(e){var t=u.a.useState(!1),a=Object(l.a)(t,2),n=a[0],r=a[1];function c(){r(!1)}return u.a.createElement("div",null,u.a.createElement(d.a,{onClick:function(){r(!0)},variant:"contained",color:"secondary"},"clear playlist"),u.a.createElement(m.a,{open:n,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},u.a.createElement(f.a,{id:"alert-dialog-title"},"Clear the entire playlist ?"),u.a.createElement(b.a,null,u.a.createElement(v.a,{id:"alert-dialog-description"},"This will result in the deletion of all videos you have added manually. Starting all over again can be quite long and frustrating.")),u.a.createElement(h.a,null,u.a.createElement(d.a,{onClick:c,color:"primary"},"no !"),u.a.createElement(d.a,{onClick:e.clear,color:"secondary",autoFocus:!0},"clear"))))}var y=a(174),E=a(155),x=a(156),w=a(157);function j(e){var t=e.handleChange,a=e.handleSubmit,n=e.loading,r=e.urlInputValue;return u.a.createElement("form",{onSubmit:a},u.a.createElement(p.a,{container:!0,alignItems:"center",spacing:2},u.a.createElement(p.a,{item:!0},u.a.createElement(y.a,{variant:"outlined",label:"Youtube video link",placeholder:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",value:r,onChange:t})),u.a.createElement(p.a,{item:!0},n?u.a.createElement(E.a,{size:30}):u.a.createElement(x.a,{type:"submit",color:"primary","aria-label":"add",size:"small"},u.a.createElement(w.a,null)))))}var O=a(66);function k(e){var t=u.a.useState(!1),a=Object(l.a)(t,2),n=a[0],r=a[1],c=u.a.useState(""),i=Object(l.a)(c,2),o=i[0],s=i[1],p=u.a.useState(!1),g=Object(l.a)(p,2),x=g[0],w=g[1],j=u.a.useState(!1),k=Object(l.a)(j,2),C=k[0],I=k[1];function S(){r(!1),I(!1)}return u.a.createElement("div",null,u.a.createElement(d.a,{onClick:function(){r(!0)},variant:"contained",color:"primary"},"import playlist"),u.a.createElement(m.a,{open:n,onClose:S,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},u.a.createElement(f.a,{id:"alert-dialog-title"},"Import playlist"),u.a.createElement(b.a,null,u.a.createElement(v.a,{id:"alert-dialog-description"},"Import an existing playlist on youtube. You can then modify it to create a new playlist."),u.a.createElement(y.a,{error:x,helperText:x?"Invalid url":null,autoFocus:!0,margin:"dense",id:"url",label:"Youtube playlist url",type:"text",fullWidth:!0,value:o,onChange:function(e){return s(e.target.value)}})),u.a.createElement(h.a,null,u.a.createElement(d.a,{onClick:S,color:"primary",disabled:C},"cancel"),u.a.createElement(d.a,{onClick:function(){return e.import(function(e){I(!0);var t=Object(O.d)(e);if(t)return t;I(!1),w(!0)}(o))},color:"primary",autoFocus:!0,disabled:C},"import"),C&&u.a.createElement(E.a,{size:30}))))}var C=a(68);function I(e){var t=u.a.useState({}),a=Object(l.a)(t,2),n=a[0],r=a[1],c=u.a.useState(!1),i=Object(l.a)(c,2),o=i[0],s=i[1];function m(e){navigator.clipboard.writeText(e),r(Object(O.a)("Copied!","success")),s(!0)}var f=function(e){var t="http://www.youtube.com/watch_videos?video_ids=";return e.forEach((function(e){t+="".concat(e.id,",")})),t}(e.playlist);return u.a.createElement(p.a,{container:!0,direction:"row",alignItems:"center",spacing:2},u.a.createElement(p.a,{item:!0},u.a.createElement(y.a,{label:"Your playlist URL",defaultValue:f,InputProps:{readOnly:!0},variant:"outlined",className:"url"})),u.a.createElement(p.a,{item:!0},u.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){return m(f)}},"Copy")),u.a.createElement(p.a,{item:!0},u.a.createElement(C.a,{notification:n,open:o,handleClose:function(){s(!1)}})))}var S=a(80),N=a(65);a.d(t,"default",(function(){return z}));var V=Object(s.a)((function(e){return{playlistContainer:{padding:"15px"}}}));function z(e){var t=V(),a=Object(o.useState)(""),n=Object(l.a)(a,2),s=n[0],d=n[1],m=Object(o.useState)([]),f=Object(l.a)(m,2),b=f[0],v=f[1],h=Object(o.useState)({}),y=Object(l.a)(h,2),E=y[0],x=y[1],w=Object(o.useState)(!1),C=Object(l.a)(w,2),z=C[0],T=C[1],Y=Object(o.useState)(!1),A=Object(l.a)(Y,2),D=A[0],P=A[1];function R(){return(R=Object(i.a)(r.a.mark((function e(t){var a,n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(!0),t.preventDefault(),!(a=Object(O.f)(s))){e.next=23;break}if(W(a)){e.next=20;break}return e.next=8,Object(N.b)(a);case 8:if(!((n=e.sent).length>0)){e.next=17;break}return e.next=12,Object(O.c)(n);case 12:i=e.sent,v((function(e){return[].concat(Object(c.a)(e),[i[0]])})),x(Object(O.a)("Video added !","success")),e.next=18;break;case 17:x(Object(O.a)("Video does not exist","error"));case 18:e.next=21;break;case 20:x(Object(O.a)("Video already added !","error"));case 21:e.next=24;break;case 23:x(Object(O.a)("Not a valid url !","error"));case 24:d(""),P(!1),_();case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){for(var t=0;t<b.length;t++)if(b[t].id===e)return!0}function _(){T(!0)}function F(){T(!1)}function H(){return(H=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.b)(t);case 2:(a=e.sent).length>=0?(v(a),x(Object(O.a)("Playlist was imported !","success"))):(v([]),x(Object(O.a)("Error when importing!","error"))),_();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return u.a.createElement(p.a,{container:!0,className:t.playlistContainer},u.a.createElement(p.a,{item:!0},u.a.createElement(p.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",spacing:2},u.a.createElement(p.a,{item:!0},u.a.createElement(S.a,{title:"Youtube-playlist",subtitle:"Create youtube playlist without google account"})),u.a.createElement(p.a,{item:!0},u.a.createElement(j,{urlInputValue:s,handleChange:function(e){d(e.target.value)},handleSubmit:function(e){return R.apply(this,arguments)},loading:D})),u.a.createElement(p.a,{item:!0},b.length>0?u.a.createElement(g,{clear:function(){v([]),x(Object(O.a)("Playlist cleared !","success")),_()}}):u.a.createElement(k,{import:function(e){return H.apply(this,arguments)}})),u.a.createElement(p.a,{item:!0},b.length>0&&u.a.createElement(S.b,{playlist:b,handleDeleteVideo:function(e){for(var t=0;t<b.length;t++)if(b[t].id===e){var a=t,n=Object(c.a)(b);n.splice(a,1),v(n),x(Object(O.a)("Video deleted !","success")),_();break}}})),u.a.createElement(p.a,{item:!0},b.length>0&&u.a.createElement(I,{playlist:b,handleCloseNotification:F})),u.a.createElement(p.a,{item:!0},u.a.createElement(S.c,{notification:E,open:z,handleClose:F})))))}},65:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return d}));var n=a(61),r=a.n(n),c=a(62),i=a(91),l=a.n(i),o="AIzaSyAePIr4ac4uXTAtZaSCt-kKX7nv5o87p7o",u=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://www.googleapis.com/youtube/v3/videos",{params:{part:"snippet",id:t,key:o}});case 2:return a=e.sent,e.abrupt("return",a.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://www.googleapis.com/youtube/v3/channels",{params:{part:"snippet",id:t,key:o}});case 2:return a=e.sent,e.abrupt("return",a.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://www.googleapis.com/youtube/v3/playlistItems",{params:{part:"snippet",playlistId:t,maxResults:50,key:o}});case 2:return a=e.sent,e.abrupt("return",a.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://www.googleapis.com/youtube/v3/search",{params:{part:"snippet",q:t,maxResults:50,type:"video",key:o}});case 2:return a=e.sent,e.abrupt("return",a.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},66:function(e,t,a){"use strict";var n=function(e,t){return{color:t,message:e}},r=a(61),c=a.n(r),i=a(62),l=a(65),o=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n,r,i,o,s,p,d,m,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.d)(t);case 2:a=e.sent,n=[],r=!0,i=!1,o=void 0,e.prev=7,s=a[Symbol.iterator]();case 9:if(r=(p=s.next()).done){e.next=18;break}return d=p.value,e.next=13,Object(l.b)(d.snippet.resourceId.videoId);case 13:m=e.sent,n.push(m[0]);case 15:r=!0,e.next=9;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(7),i=!0,o=e.t0;case 24:e.prev=24,e.prev=25,r||null==s.return||s.return();case 27:if(e.prev=27,!i){e.next=30;break}throw o;case 30:return e.finish(27);case 31:return e.finish(24);case 32:return e.next=34,u(n);case 34:return f=e.sent,e.abrupt("return",f);case 36:case"end":return e.stop()}}),e,null,[[7,20,24,32],[25,,27,31]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n,r,i,o,u,s,p,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n=!0,r=!1,i=void 0,e.prev=4,o=t[Symbol.iterator]();case 6:if(n=(u=o.next()).done){e.next=16;break}return s=u.value,e.next=10,Object(l.a)(s.snippet.channelId);case 10:p=e.sent,d=m(s,p),a.push(d);case 13:n=!0,e.next=6;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),r=!0,i=e.t0;case 22:e.prev=22,e.prev=23,n||null==o.return||o.return();case 25:if(e.prev=25,!r){e.next=28;break}throw i;case 28:return e.finish(25);case 29:return e.finish(22);case 30:return e.abrupt("return",a);case 31:case"end":return e.stop()}}),e,null,[[4,18,22,30],[23,,25,29]])})));return function(t){return e.apply(this,arguments)}}(),s=function(e){var t=/[&|?]list=([a-zA-Z0-9_-]+)/gi.exec(e);return!!(t&&t.length>0)&&t[1]},p=function(e){return e&&e.id?"string"===typeof e.id?e.id:e.id.videoId?e.id.videoId:"":""},d=function(e){return void 0!==(e=e.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]&&e[2].split(/[^0-9a-z_-]/i)[0]},m=function(e,t){return e.snippet.channelInfos=t[0],e};a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return p})),a.d(t,"f",(function(){return d})),a.d(t,"g",(function(){return m}))},68:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(2),r=a(0),c=a.n(r),i=a(13),l=a(108),o=a(181),u=a(164),s=a(165),p=a(158),d=a(159),m=a(160),f=a(161),b=a(166),v=a(162),h=a(163),g={success:p.a,warning:d.a,error:m.a,info:f.a},y=Object(l.a)((function(e){return{success:{backgroundColor:v.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:h.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function E(e){var t=e.notification,a=t.color,n=t.message,r=e.handleClose,i=e.open;return c.a.createElement(o.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:i,autoHideDuration:2500,onClose:r},c.a.createElement(x,{onClose:r,variant:a,message:n}))}function x(e){var t=y(),a=e.className,r=e.message,l=e.onClose,o=e.variant,p=Object(n.a)(e,["className","message","onClose","variant"]),d=g[o];return c.a.createElement(u.a,Object.assign({className:Object(i.a)(t[o],a),"aria-describedby":"client-snackbar",message:c.a.createElement("span",{id:"client-snackbar",className:t.message},c.a.createElement(d,{className:Object(i.a)(t.icon,t.iconVariant)}),r),action:[c.a.createElement(s.a,{key:"close","aria-label":"close",color:"inherit",onClick:l},c.a.createElement(b.a,{className:t.icon}))]},p))}},80:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(107);function i(e){var t=e.title,a=e.subtitle;return r.a.createElement("div",null,r.a.createElement(c.a,{variant:"h2"},t),r.a.createElement(c.a,null,a))}var l=a(85),o=a(108),u=a(167),s=a(168),p=a(169),d=a(156),m=a(171),f=a(172),b=a(173),v=a(170),h=Object(o.a)((function(e){return{videoCard:{width:"320px",height:"340px","&:hover":{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}},videoThumbnail:{maxWidth:"320px",maxHeight:"180px"},avatar:{maxWidth:"30px",maxHeight:"30px"}}}));function g(e){var t=h(),a=e.channelInfos,n=e.deleteVideo,c=e.videoInfos,i=e.videoId;return r.a.createElement(u.a,{className:t.videoCard},r.a.createElement(s.a,{avatar:r.a.createElement(p.a,{className:t.avatar,"aria-label":"channel",src:a&&a.snippet.thumbnails&&a.snippet.thumbnails.default.url},c.channelTitle[0]),action:n&&r.a.createElement(d.a,{onClick:function(){return n(i)},color:"secondary","aria-label":"delete",size:"small"},r.a.createElement(v.a,null)),title:c.channelTitle}),r.a.createElement(m.a,{onClick:function(){return window.location="/player/".concat(i)}},r.a.createElement(f.a,{component:"img",image:c.thumbnails.medium.url,className:t.videoThumbnail})),r.a.createElement(b.a,null,c.title))}var y=a(66);function E(e){var t=e.justify,a=e.handleDeleteVideo,n=e.playlist;return r.a.createElement(l.a,{container:!0,direction:"column"},r.a.createElement(l.a,{item:!0},r.a.createElement(l.a,{container:!0,direction:"row",justify:t||"flex-start",alignItems:"flex-start",spacing:2},n.map((function(e,t){return r.a.createElement(l.a,{item:!0,key:t},r.a.createElement(g,{videoId:Object(y.e)(e),videoInfos:e.snippet,channelInfos:e.snippet.channelInfos,deleteVideo:a&&a}))})))))}var x=a(68);a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return E})),a.d(t,"c",(function(){return x.a}))}}]);
//# sourceMappingURL=5.716d9285.chunk.js.map