(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{260:function(e,t,n){e.exports=n(490)},265:function(e,t,n){},424:function(e,t){},432:function(e,t){},434:function(e,t){},490:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n(17),r=n(12),c=n(550),u=n(533),m=n(534),o=n(94),s=n(530),E=n(535),i=n(532),h=n(544),p=n(549),f=n(546),d=n(233),v=(n(265),n(515));var b=function(e){return a.createElement(a.Fragment,null,function(e){var t=e.address,n=e.balance,l=e.txCount,r=e.code;return a.createElement("div",null,a.createElement("div",null,"Balance: ",n),a.createElement("div",null,"Tx count: ",l),a.createElement("div",null,t),a.createElement("div",null,"Code"),a.createElement("div",null,a.createElement("textarea",{value:r})))}(e))},g=n(113),k=function(e){var t=a.useState(),n=Object(r.a)(t,2),l=n[0],c=n[1];return e&&e.eth_blockNumber().then(function(e){c(parseInt(e,16))}),Object(g.a)(function(){e&&e.eth_blockNumber().then(function(e){c(parseInt(e,16))})},7e3),[l]},x=function(e,t,n){for(var a=[],l=e;l<t;l++)a.push(n.eth_getBlockByNumber("0x".concat(l.toString(16)),!0));return Promise.all(a)},y=a.createContext(void 0),I=n(164);function C(e){var t=e.match.params.address,n=a.useContext(y),l=k(n),c=Object(r.a)(l,1)[0],u=a.useState(),m=Object(r.a)(u,2),o=m[0],s=m[1],E=a.useState(),i=Object(r.a)(E,2),h=i[0],p=i[1],f=a.useState(),d=Object(r.a)(f,2),g=d[0],x=d[1];return a.useEffect(function(){if(void 0!==c&&n){var e="0x".concat(c.toString(16));n.eth_getTransactionCount(t,e).then(s),n.eth_getBalance(t,e).then(p),n.eth_getCode(t,e).then(x)}},[c,t,n]),void 0===o||void 0===h||void 0===g?a.createElement(v.a,null):a.createElement(a.Fragment,null,a.createElement(b,{address:t,txCount:o?parseInt(o,10):0,balance:I.fromWei(h||0,"ether"),code:g}))}var N=n(519),O=n(518),j=n(516),w=n(517),S=n(520),B=n(521),R=n(522);function T(e){var t=e.tx;return a.createElement(j.a,null,a.createElement(w.a,null,a.createElement(O.a,{component:function(e){var n=e.className,l=e.children;return a.createElement(N.a,{className:n,to:"/tx/".concat(t.hash)},l)}},t.hash)),a.createElement(w.a,null,a.createElement(O.a,{component:function(e){var n=e.className,l=e.children;return a.createElement(N.a,{className:n,to:"/address/".concat(t.from)},l)}},t.from)),a.createElement(w.a,null,null!==t.to?a.createElement(O.a,{component:function(e){var n=e.className,l=e.children;return a.createElement(N.a,{className:n,to:"/address/".concat(t.to)},l)}},t.to):null),a.createElement(w.a,null,parseInt(t.transactionIndex,16)))}var H=function(e){return a.createElement(S.a,null,a.createElement(B.a,null,a.createElement(j.a,null,a.createElement(w.a,null,"Hash"),a.createElement(w.a,null,"From"),a.createElement(w.a,null,"To"),a.createElement(w.a,null,"Index"))),a.createElement(R.a,null,e.transactions.map(function(e){return a.createElement(T,{key:e.hash,tx:e})})))};var P=function(e){var t=e.block;if(!t)return a.createElement("div",null,"Loading...");var n=t.timestamp,l=t.hash,r=t.parentHash,c=t.miner,u=t.nonce,m=t.difficulty,o=t.extraData,s=t.stateRoot,E=t.transactionsRoot,i=t.receiptsRoot,h=t.transactions;return a.createElement("div",null,a.createElement(S.a,null,a.createElement(R.a,null,a.createElement(j.a,null,a.createElement(w.a,null,"Number"),a.createElement(w.a,null,parseInt(t.number,16))),a.createElement(j.a,null,a.createElement(w.a,null,"Timestamp"),a.createElement(w.a,null,new Date(1e3*parseInt(n,16)).toString())),a.createElement(j.a,null,a.createElement(w.a,null,"Hash"),a.createElement(w.a,null,l)),a.createElement(j.a,null,a.createElement(w.a,null,"ParentHash"),a.createElement(w.a,null,a.createElement(O.a,{component:function(e){var t=e.className,n=e.children;return a.createElement(N.a,{className:t,to:"/block/".concat(r)},n)}},r))),a.createElement(j.a,null,a.createElement(w.a,null,"Miner"),a.createElement(w.a,null,c)),a.createElement(j.a,null,a.createElement(w.a,null,"Nonce"),a.createElement(w.a,null,u)),a.createElement(j.a,null,a.createElement(w.a,null,"Difficulty"),a.createElement(w.a,null,m.toString())),a.createElement(j.a,null,a.createElement(w.a,null,"Extra Data"),a.createElement(w.a,null,o)),a.createElement(j.a,null,a.createElement(w.a,null,"State Root"),a.createElement(w.a,null,s)),a.createElement(j.a,null,a.createElement(w.a,null,"Transaction Root"),a.createElement(w.a,null,E)),a.createElement(j.a,null,a.createElement(w.a,null,"Receipts Root"),a.createElement(w.a,null,i)))),a.createElement(H,{transactions:h}))};function _(e){var t=e.match.params.hash,n=a.useContext(y),l=a.useState(),c=Object(r.a)(l,2),u=c[0],m=c[1];return a.useEffect(function(){n&&n.eth_getBlockByHash(t,!0).then(m)},[t,n]),u?a.createElement(P,{block:u}):a.createElement(v.a,null)}var G=n(523),U=n(524),F=n(92),M=n.n(F),L=n(538),A=n(542),D=n(541);function W(e){return parseInt(e.dividedBy(1e9).toNumber().toFixed(2),10)}var J=n(539);var V=function(e){var t=e.title,n=e.data,l=e.width,r=e.height;return a.createElement(L.a,{name:t,height:r,width:l},a.createElement(A.a,{x:25,y:24,text:t}),a.createElement(J.a,{data:n,height:r,width:l}))};var z=function(e){var t=e.block,n=e.blockTime;return e.children(W(new M.a(t.difficulty,16).dividedBy(n)))},q={paddingRight:"24px"};var K=function(e){var t=e.blocks;if(!t)return null;var n=t.sort(function(e,t){return t.number-e.number});return a.createElement(S.a,null,a.createElement(B.a,null,a.createElement(j.a,null,a.createElement(w.a,null,a.createElement(o.a,null,"#")),a.createElement(w.a,null,a.createElement(o.a,null,"Hash")),a.createElement(w.a,null,a.createElement(o.a,null,"Timestamp")),a.createElement(w.a,null,a.createElement(o.a,null,"Txs")))),a.createElement(R.a,null,n.map(function(e){return a.createElement(j.a,{key:e.number},a.createElement(w.a,{component:"th",scope:"row"},a.createElement(o.a,null,parseInt(e.number,16))),a.createElement(w.a,{style:q},a.createElement(O.a,{component:function(t){var n=t.className,l=t.children;return a.createElement(N.a,{className:n,to:"/block/".concat(e.hash)},l)}},e.hash)),a.createElement(w.a,{style:q},a.createElement(o.a,null,new Date(1e3*parseInt(e.timestamp,16)).toISOString())),a.createElement(w.a,{style:q},a.createElement(o.a,null,e.transactions.length)))})))};function Q(e){var t=e.from,n=e.to,l=a.useContext(y),c=a.useState(),u=Object(r.a)(c,2),m=u[0],o=u[1];return a.useEffect(function(){l&&x(t,n,l).then(o)},[t,n,l]),m?a.createElement("div",null,"Blocks from ",t," to ",n,a.createElement(K,{blocks:m})):a.createElement(v.a,null)}var X=a.useState,Y=15,Z=100,$=200,ee=400,te=function(e){return{x:parseInt(e.number,16),y:new M.a(e.gasUsed).dividedBy(1e6)}},ne=function(e){return{x:parseInt(e.number,16),y:e.uncles.length}},ae=function(e){return{x:parseInt(e.number,16),y:W(new M.a(e.difficulty,16).dividedBy(Y))}},le=function(e){return{x:parseInt(e.number,16),y:e.transactions.length}},re=function(e){var t,n={topItems:{display:"flex",justifyContent:"space-between",alignItems:"center"}},l=a.useContext(y),c=k(l),u=Object(r.a)(c,1)[0],m=X(),s=Object(r.a)(m,2),E=s[0],i=s[1],h=X(),p=Object(r.a)(h,2),f=p[0],d=p[1],b=X(),I=Object(r.a)(b,2),C=I[0],N=I[1],O=X(),j=Object(r.a)(O,2),w=j[0],S=j[1],B=X(),R=Object(r.a)(B,2),T=R[0],H=R[1],P=X(),_=Object(r.a)(P,2),F=_[0],M=_[1];return a.useEffect(function(){l&&l.eth_chainId().then(i)},[E,l]),a.useEffect(function(){l&&void 0!==u&&l.eth_getBlockByNumber("0x".concat(u.toString(16)),!0).then(d)},[u,l]),a.useEffect(function(){l&&null!==u&&x(Math.max(u-Z+1,0),u,l).then(function(e){N(e)})},[u,l]),Object(g.a)(function(){l&&l.eth_syncing().then(H)},1e4,!0),a.useEffect(function(){l&&l.net_peerCount().then(M)},[l]),a.useEffect(function(){l&&l.eth_gasPrice().then(S)},[l]),C?a.createElement("div",null,a.createElement(G.a,{container:!0,spacing:3},a.createElement(G.a,{style:n.topItems,item:!0,xs:12},a.createElement("div",{key:"blockHeight"},a.createElement(o.a,{variant:"h6"},"Block Height"),a.createElement(o.a,null,u)),a.createElement("div",{key:"chainId"},a.createElement(o.a,{variant:"h6"},"Chain ID"),a.createElement(o.a,null,parseInt(E,16))),a.createElement("div",{key:"syncing"},a.createElement(o.a,{variant:"h6"},"Syncing"),"object"===typeof T&&T.currentBlock&&a.createElement(o.a,{variant:"h6"},parseInt(T.currentBlock,16)," / ",parseInt(T.highestBlock||"0x0",16)),!T&&a.createElement(o.a,null,"No")),a.createElement("div",{key:"gasPrice"},a.createElement(o.a,{variant:"h6"},"Gas Price"),a.createElement(o.a,null,0===(t=parseInt(w,16))?t:t/1e9," Gwei")),a.createElement("div",{key:"hRate"},a.createElement(o.a,{variant:"h6"},"Network Hash Rate"),f&&a.createElement(z,{block:f,blockTime:Y},function(e){return a.createElement(o.a,null,e," GH/s")})),a.createElement("div",null,a.createElement(o.a,{variant:"h6"},"Peers"),a.createElement(o.a,null,parseInt(F,16)))),a.createElement(G.a,{key:"hashChart",item:!0,xs:12,sm:6,lg:3},a.createElement(V,{height:$,title:"Hash Rate Last ".concat(C.length," blocks"),data:C.map(ae)})),a.createElement(G.a,{key:"txChart",item:!0,xs:12,sm:6,lg:3},a.createElement(L.a,{height:$,width:ee},a.createElement(A.a,{x:25,y:24,text:"Transaction count last ".concat(C.length," blocks")}),a.createElement(D.a,{data:C.map(le)}))),a.createElement(G.a,{key:"gasUsed",item:!0,xs:12,sm:6,lg:3},a.createElement(L.a,{height:$,width:ee},a.createElement(A.a,{x:25,y:24,text:"Gas Used Last ".concat(C.length," blocks")}),a.createElement(D.a,{data:C.map(te)}))),a.createElement(G.a,{key:"uncles",item:!0,xs:12,sm:6,lg:3},a.createElement(L.a,{height:$,width:ee},a.createElement(A.a,{x:25,y:24,text:"Uncles Last ".concat(C.length," blocks")}),a.createElement(D.a,{data:C.map(ne)}))),a.createElement(G.a,{item:!0,key:"blocks"},a.createElement(U.a,{href:"/blocks"},"View All Blocks"),a.createElement(Q,{from:Math.max(u-11,0),to:u})))):a.createElement(v.a,null)};function ce(e){var t=a.useContext(y),n=k(t),l=Object(r.a)(n,1)[0];return l?a.createElement(Q,{from:Math.max(l-15,0),to:l}):a.createElement(v.a,null)}var ue=n(164);var me=function(e){var t=e.tx,n=e.receipt;return t?function(e,t){return a.createElement("div",null,a.createElement("div",null,"General"),a.createElement(S.a,null,a.createElement(R.a,null,a.createElement(j.a,null,a.createElement(w.a,null,"Hash"),a.createElement(w.a,null,e.hash)),a.createElement(j.a,null,a.createElement(w.a,null,"Block"),a.createElement(w.a,null,a.createElement(O.a,{component:function(t){var n=t.className,l=t.children;return a.createElement(N.a,{className:n,to:"/block/".concat(e.blockHash)},l)}},e.blockHash))),a.createElement(j.a,null,a.createElement(w.a,null,"Block number"),a.createElement(w.a,null,parseInt(e.blockNumber,16))),a.createElement(j.a,null,a.createElement(w.a,null,"Gas"),a.createElement(w.a,null,ue.fromWei(e.gas,"ether"))),a.createElement(j.a,null,a.createElement(w.a,null,"Gas Price"),a.createElement(w.a,null,parseInt(e.gasPrice,10))),a.createElement(j.a,null,a.createElement(w.a,null,"Value"),a.createElement(w.a,null,ue.fromWei(e.value,"ether"))),a.createElement(j.a,null,a.createElement(w.a,null,"From"),a.createElement(w.a,null,a.createElement(O.a,{component:function(t){var n=t.className,l=t.children;return a.createElement(N.a,{className:n,to:"/address/".concat(e.from)},l)}},e.from))),a.createElement(j.a,null,a.createElement(w.a,null,"To"),a.createElement(w.a,null,null!==e.to?a.createElement(O.a,{component:function(t){var n=t.className,l=t.children;return a.createElement(N.a,{className:n,to:"/address/".concat(e.to)},l)}},e.to):null)),a.createElement(j.a,null,a.createElement(w.a,null,"Nonce"),a.createElement(w.a,null,parseInt(e.nonce,16))),a.createElement(j.a,null,a.createElement(w.a,null,"Transaction Index"),a.createElement(w.a,null,parseInt(e.transactionIndex,16))),a.createElement(j.a,null,a.createElement(w.a,null,"Input"),a.createElement(w.a,null,e.input)),a.createElement(j.a,null,a.createElement(w.a,null,"ReplayProtected"),a.createElement(w.a,null,e.replayProtected&&e.replayProtected.toString())),a.createElement(j.a,null,a.createElement(w.a,null,"v"),a.createElement(w.a,null,e.v)),a.createElement(j.a,null,a.createElement(w.a,null,"r"),a.createElement(w.a,null,e.r)),a.createElement(j.a,null,a.createElement(w.a,null,"s"),a.createElement(w.a,null,e.s)))),a.createElement("div",null,"Receipt"),t&&a.createElement(S.a,null,a.createElement(R.a,null,a.createElement(j.a,null,a.createElement(w.a,null,"Hash"),a.createElement(w.a,null,t.transactionHash)),a.createElement(j.a,null,a.createElement(w.a,null,"Block"),a.createElement(w.a,null,a.createElement(O.a,{component:function(e){var n=e.className,l=e.children;return a.createElement(N.a,{className:n,to:"/block/".concat(t.blockHash)},l)}},t.blockHash))),a.createElement(j.a,null,a.createElement(w.a,null,"Block number"),a.createElement(w.a,null,parseInt(t.blockNumber,16))),a.createElement(j.a,null,a.createElement(w.a,null,"Gas Used"),a.createElement(w.a,null,parseInt(t.gasUsed,16))),a.createElement(j.a,null,a.createElement(w.a,null,"Cumulative Gas Used"),a.createElement(w.a,null,parseInt(t.cumulativeGasUsed,16))),a.createElement(j.a,null,a.createElement(w.a,null,"Value"),a.createElement(w.a,null,ue.fromWei(e.value,"ether"))),a.createElement(j.a,null,a.createElement(w.a,null,"From"),a.createElement(w.a,null,a.createElement(O.a,{component:function(e){var n=e.className,l=e.children;return a.createElement(N.a,{className:n,to:"/address/".concat(t.from)},l)}},t.from))),a.createElement(j.a,null,a.createElement(w.a,null,"To"),a.createElement(w.a,null,a.createElement(O.a,{component:function(e){var n=e.className,l=e.children;return a.createElement(N.a,{className:n,to:"/address/".concat(t.to)},l)}},t.to))),a.createElement(j.a,null,a.createElement(w.a,null,"Contract Address"),a.createElement(w.a,null,t.contractAddress)),a.createElement(j.a,null,a.createElement(w.a,null,"Transaction Index"),a.createElement(w.a,null,parseInt(t.transactionIndex,16))),a.createElement(j.a,null,a.createElement(w.a,null,"Status"),a.createElement(w.a,null,t.status)),a.createElement(j.a,null,a.createElement(w.a,null,"Logs"),a.createElement(w.a,null,t.logs.length)))))}(t,n):null};function oe(e){var t=e.match.params.hash,n=a.useContext(y),l=a.useState(),c=Object(r.a)(l,2),u=c[0],m=c[1],o=a.useState(),s=Object(r.a)(o,2),E=s[0],i=s[1];return a.useEffect(function(){n&&n.eth_getTransactionByHash(t).then(m)},[t,n]),a.useEffect(function(){n&&n.eth_getTransactionReceipt(t).then(i)},[t,n]),u&&E?a.createElement(me,{tx:u,receipt:E}):a.createElement(v.a,null)}var se=n(547),Ee=n(525),ie=n(527),he=n(540),pe=n(528),fe=n(536),de=n(526),ve=n(529),be=n(531),ge=function(e){var t=a.useState(null),n=Object(r.a)(t,2),l=n[0],c=n[1];return l?a.createElement(a.Fragment,null,a.createElement(se.a,{onClick:function(){return c(null)}},a.createElement(Ee.a,null,a.createElement(de.a,null)),a.createElement(ie.a,null,"Back")),a.createElement(he.a,{onChange:function(t){return e.onChange(l,t.currentTarget.value)},placeholder:"".concat({"service-runner":"Service Runner RPC","ethereum-rpc":"Ethereum RPC"}[l]," Url"),fullWidth:!0})):a.createElement(a.Fragment,null,a.createElement(se.a,{onClick:function(){return c("service-runner")}},a.createElement(ie.a,null,"Service Runner RPC"),a.createElement(pe.a,null,a.createElement(ve.a,null))),a.createElement(se.a,{onClick:function(){return c("ethereum-rpc")}},a.createElement(ie.a,null,"Ethereum RPC"),a.createElement(pe.a,null,a.createElement(ve.a,null))))},ke=function(e){var t=a.useState(null),n=Object(r.a)(t,2),l=n[0],c=n[1],u=!!l;return a.createElement(a.Fragment,null,a.createElement(s.a,{"aria-label":"Account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit"},a.createElement(be.a,null)),a.createElement(fe.a,{id:"menu-appbar",getContentAnchorEl:null,anchorEl:l,keepMounted:!0,open:u,PaperProps:{style:{width:"250px"}},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},onClose:function(){c(null)}},a.createElement(ge,{onChange:e.onChange})))},xe=n(254),ye=Object(xe.a)({overrides:{MuiAppBar:{root:{background:"#fff !important"}}},palette:{background:{default:"#fff"}}}),Ie=Object(xe.a)({palette:{type:"dark",background:{default:"#212121",paper:"black"}},overrides:{MuiTable:{root:{background:"transparent !important"}},MuiTypography:{root:{color:"#fff"}}}}),Ce=n(251),Ne=n.n(Ce),Oe=n(252),je=n.n(Oe),we=n(72),Se=n.n(we),Be=n(248),Re=n(249),Te=n.n(Re),He="multi-geth";var Pe=function(e,t,n){var l=a.useState(),c=Object(r.a)(l,2),u=c[0],m=c[1],o=a.useState(),s=Object(r.a)(o,2),E=s[0],i=s[1];return a.useEffect(function(){e&&function(){var a=Object(Be.a)(Se.a.mark(function a(){var l,r,c,u,o,s;return Se.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.installService(He,t);case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:return a.next=7,e.startService(He,t,n);case 7:l=a.sent,a.prev=8,r=new URL(E||"http://localhost:".concat(l.rpcPort)),a.next=15;break;case 12:return a.prev=12,a.t0=a.catch(8),a.abrupt("return");case 15:a.prev=15,u=r.protocol.split(":")[0],o="http"===u?80:443,s=parseInt(r.port,10),c=new Te.a({transport:{host:r.hostname,port:s||o,type:u}}),a.next=25;break;case 22:return a.prev=22,a.t1=a.catch(15),a.abrupt("return");case 25:c&&m(c);case 26:case"end":return a.stop()}},a,null,[[8,12],[15,22]])}));return function(){return a.apply(this,arguments)}}()()},[e,E,t,n]),[u,i]},_e=n(250),Ge=n.n(_e);var Ue=function(){var e=a.useState("http://localhost:8002"),t=Object(r.a)(e,2),n=t[0],l=t[1],c=a.useState(),u=Object(r.a)(c,2),m=u[0],o=u[1];return a.useEffect(function(){if(n){var e,t;try{e=new URL(n)}catch(c){return}try{var a=e.protocol.split(":")[0],l="http"===a?80:443,r=parseInt(e.port,10);t=new Ge.a({transport:{host:e.hostname,port:r||l,type:a}})}catch(c){return}t&&o(t)}},[n]),[m,l]},Fe=Object(E.a)(function(e){return{title:{flexGrow:1}}});var Me=function(e){var t=Object(d.a)(),n=Ue(),l=Object(r.a)(n,2),E=l[0],v=l[1],b=Pe(E,"1.9.0","mainnet"),g=Object(r.a)(b,2),k=g[0],x=g[1],I=t.value?Ie:ye,N=Fe(I);return a.createElement(y.Provider,{value:k},a.createElement(i.a,{theme:I},a.createElement(c.a,null),a.createElement(u.a,{position:"static",color:"default",elevation:0},a.createElement(m.a,null,a.createElement(o.a,{className:N.title},"Jade Block Explorer"),a.createElement(s.a,{onClick:t.toggle},t.value?a.createElement(Ne.a,null):a.createElement(je.a,null)),a.createElement(ke,{onChange:function(e,t){"service-runner"===e?v(t):"ethereum-rpc"===e&&x(t)}}))),a.createElement(h.a,null,a.createElement(p.a,null,a.createElement(f.a,{path:"/",component:re,exact:!0}),a.createElement(f.a,{path:"/block/:hash",component:_}),a.createElement(f.a,{path:"/blocks",component:ce}),a.createElement(f.a,{path:"/tx/:hash",component:oe}),a.createElement(f.a,{path:"/address/:address",component:C})))))};l.render(a.createElement(Me,null),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.d01b53c2.chunk.js.map