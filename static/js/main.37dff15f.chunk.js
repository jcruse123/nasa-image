(this["webpackJsonpnasa-image"]=this["webpackJsonpnasa-image"]||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/nasa-logo.ae42d855.png"},45:function(e,t,a){e.exports=a(76)},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),o=a.n(c),s=a(42),i=a(17),l=a(41),h=(a(50),a(10)),p=a(11),m=a(13),d=a(12),u=a(14),f=a(18),g=a.n(f),b=a(40),E=a(7),v=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onPhotoClick=function(e){a.props.history.push("/photos/".concat(a.props.id))},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{onClick:this.onPhotoClick,className:"photo-card"},r.a.createElement(E.a.Img,{src:this.props.href}))}}]),t}(r.a.Component),y=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.photos.map((function(t,a){return r.a.createElement(v,Object.assign({},e.props,{key:t.id,id:t.id,title:t.title,description:t.description,photographer:t.photographer,href:t.href}))}));return r.a.createElement("div",{className:"card-columns mt-3 mb-3"},t)}}]),t}(r.a.Component),j=a(38),O=a(19),k=a(21),C=a(20),S=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerms:""},a.formHandler=function(e){e.preventDefault(),a.props.searchUpdate(a.state.searchTerms)},a.onSearchClick=function(e){e.preventDefault(),a.props.searchUpdate(a.state.searchTerms)},a.onSearchChange=function(e){a.setState({searchTerms:e.target.value})},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{className:"search-card"},r.a.createElement(E.a.Body,{className:"pb-0"},r.a.createElement(k.a,{onSubmit:this.formHandler},r.a.createElement(j.a,null,r.a.createElement(O.a,{xs:12,sm:9},r.a.createElement(k.a.Group,{controlId:"formBasicEmail"},r.a.createElement(k.a.Control,{type:"text",placeholder:"",value:this.state.searchTerms,onChange:this.onSearchChange}))),r.a.createElement(O.a,{xs:12,sm:3},r.a.createElement(C.a,{className:"mb-3",block:!0,variant:"primary",onClick:this.onSearchClick},"Search"))))))}}]),t}(r.a.Component),N=a(39),_=a.n(N),x=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={photos:[],search:""},a.searchUpdate=function(e){a.setState({search:e.toString()})},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://images-api.nasa.gov/search?q=".concat(this.state.search,"&media_type=image")).then((function(t){e.setState({photos:t.data.collection.items.map((function(e){return{id:e.data[0].nasa_id,date:e.data[0].date_created,title:e.data[0].title,description:e.data[0].description,photographer:e.data[0].photographer,href:e.links[0].href}}))})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.search!==t.search&&g.a.get("https://images-api.nasa.gov/search?q=".concat(this.state.search,"&media_type=image")).then((function(e){a.setState({photos:e.data.collection.items.map((function(e){return{id:e.data[0].nasa_id,date:e.data[0].date_created,title:e.data[0].title,description:e.data[0].description,photographer:e.data[0].photographer,href:e.links[0].href}}))})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{className:"text-center mt-3"},r.a.createElement("img",{src:_.a,alt:"nasa logo",className:"logo"}),r.a.createElement("h1",{className:"display-4"},"Image Library"),r.a.createElement("hr",null),r.a.createElement("p",null,"Search the NASA photo library. Click any photo for more information.")),r.a.createElement(S,Object.assign({searchUpdate:this.searchUpdate},this.props)),r.a.createElement(y,Object.assign({photos:this.state.photos},this.props)))}}]),t}(r.a.Component),w=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",date:"",title:"",description:"",photographer:"",href:""},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params.id),g.a.get("https://images-api.nasa.gov/search?nasa_id=".concat(this.props.match.params.id,"&media_type=image")).then((function(t){e.setState({id:t.data.collection.items[0].data[0].nasa_id,date:t.data.collection.items[0].data[0].date_created,title:t.data.collection.items[0].data[0].title,description:t.data.collection.items[0].data[0].description,photographer:t.data.collection.items[0].data[0].photographer,href:t.data.collection.items[0].links[0].href})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{className:"photo mt-3 mb-3"},r.a.createElement(E.a.Img,{src:this.state.href}),r.a.createElement("hr",{className:"card-hr"}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,this.state.title),r.a.createElement(E.a.Text,null,this.state.description),r.a.createElement("div",{className:"text-left"},r.a.createElement(C.a,{href:this.state.href,variant:"primary"},"Download Image")))))}}]),t}(r.a.Component);var T=function(){return r.a.createElement(l.a,null,r.a.createElement(s.a,{basename:"/nasa-image"},r.a.createElement(i.a,{exact:!0,path:"/",component:x}),r.a.createElement(i.a,{path:"/photos/:id",component:w})))};a(75);o.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.37dff15f.chunk.js.map