(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:1,image:"https://pbs.twimg.com/media/Dos1BzKUcAArHK7.jpg",name:"Colby",clicked:!1},{id:2,image:"https://www.stutteringhelp.org/sites/default/files/pictures/NicoleKidman.jpg",name:"Nicole Kidman",clicked:!1},{id:3,image:"https://i.redd.it/rz89sfk1ax011.jpg",name:"Christina Hendricks",clicked:!1},{id:4,image:"https://cdn.newsapi.com.au/image/v1/5838671adeda6f39736fb3f00c8c8e10?width=650",name:"Isla Fisher",clicked:!1},{id:5,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/prince-harry-duke-of-sussex-visits-the-royal-marines-news-photo-1032872790-1538659640.jpg",name:"Prince Harry",clicked:!1},{id:6,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIya1Mua5PnNo8rqxJv3TVhYFujuhkrSOWJuB7iRPs0uBGgV3",name:"THe Little Mermaid",clicked:!1},{id:7,image:"http://www.imagesyoulike.com/images/c/32x24/c1556.jpg",name:"Jessica Rabbit",clicked:!1},{id:8,image:"https://vignette.wikia.nocookie.net/p__/images/1/11/Scully_%28X-files%29.jpg/revision/latest?cb=20150927122300&path-prefix=protagonist",name:"Dana Scully",clicked:!1},{id:9,image:"https://pbs.twimg.com/media/Dos1mAGUwAAG35l.jpg",name:"Benji",clicked:!1}]},function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(8),s=t.n(c),l=(t(15),t(1)),r=t(2),o=t(4),m=t(3),d=t(5),u=(t(17),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.shuffleAndPoint(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("h1",null,e.message),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Name:")," ",e.name))))}),g=(t(19),function(e){return i.a.createElement("h1",{className:"title"},e.children)}),p=(t(21),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),f=t(9),h=(t(23),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"nav"},i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item "},i.a.createElement("div",{className:"nav-link"},"Clicky Game ",i.a.createElement("span",{className:"sr-only"},"(current)"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("div",{className:"nav-link"},this.props.message)),i.a.createElement("li",{className:"nav-item"},i.a.createElement("div",{className:"nav-link"},"Your Score ",this.props.score))))))}}]),a}(n.Component)),v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={score:0,highscore:0,pics:f,message:""},t.shufflePic=function(e){console.log(e),t.setState({pics:t.shuffle(t.state.pics)})},t.shuffle=function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e},t.findPicById=function(e){return t.state.pics.find(function(a){if(a.id===e)return!0})},t.onClickIncrease=function(e){console.log("Image ID:",e);var a=t.findPicById(e);console.log("Clicked Pic:",a),a.clicked?(console.log("Has been clicked before"),t.setState({score:0,message:"game over"})):(t.setState({score:t.state.score+1,pics:t.state.pics}),console.log("Has not been clicked"),a.clicked=!0),console.log(a.clicked,"====="),console.log("=====",t.state.score)},t.shuffleAndPoint=function(e){t.shufflePic(e),t.onClickIncrease(e)},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(h,{score:this.state.score,message:this.state.message}),i.a.createElement(g,null,"Redhead Game "),this.state.pics.map(function(a){return i.a.createElement(u,{shufflePic:e.shufflePic,shuffleAndPoint:e.shuffleAndPoint,id:a.id,key:a.id,name:a.name,image:a.image,message:e.message})}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.b05c8630.chunk.js.map