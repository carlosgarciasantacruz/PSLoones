/**
* WhatsApp Chat - Live chat
*
* NOTICE OF LICENSE
*
* This product is licensed for one customer to use on one installation (test stores and multishop included).
* Site developer has the right to modify this module to suit their needs, but can not redistribute the module in
* whole or in part. Any other use of this module constitues a violation of the user agreement.
*
* DISCLAIMER
*
* NO WARRANTIES OF DATA SAFETY OR MODULE SECURITY
* ARE EXPRESSED OR IMPLIED. USE THIS MODULE IN ACCORDANCE
* WITH YOUR MERCHANT AGREEMENT, KNOWING THAT VIOLATIONS OF
* PCI COMPLIANCY OR A DATA BREACH CAN COST THOUSANDS OF DOLLARS
* IN FINES AND DAMAGE A STORES REPUTATION. USE AT YOUR OWN RISK.
*
*  @author    idnovate.com <info@idnovate.com>
*  @copyright 2017 idnovate.com
*  @license   See above
*/

!function(t,i){"function"==typeof define&&define.amd?define(["jquery"],function(s){return t.jBox=i(s)}):"object"==typeof module&&module.exports?module.exports=t.jBox=i(require("jquery")):t.jBox=i(t.jQuery)}(this,function(t){var i=function i(s,o){return this.options={id:null,width:"auto",height:"auto",minWidth:null,minHeight:null,maxWidth:null,maxHeight:null,responsiveWidth:!0,responsiveHeight:!0,responsiveMinWidth:100,responsiveMinHeight:100,attach:null,trigger:"click",preventDefault:!1,content:null,getContent:null,title:null,getTitle:null,footer:null,isolateScroll:!0,ajax:{url:null,data:"",reload:!1,getURL:"data-url",getData:"data-ajax",setContent:!0,spinner:!0,spinnerDelay:300,spinnerReposition:!0},target:null,position:{x:"center",y:"center"},outside:null,offset:0,attributes:{x:"left",y:"top"},fixed:!1,adjustPosition:!0,adjustTracker:!1,adjustDistance:5,reposition:!0,repositionOnOpen:!0,repositionOnContent:!0,pointer:!1,pointTo:"target",fade:180,animation:null,theme:"Default",addClass:null,overlay:!1,zIndex:1e4,delayOpen:0,delayClose:0,closeOnEsc:!1,closeOnClick:!1,closeOnMouseleave:!1,closeButton:!1,appendTo:t("body"),createOnInit:!1,blockScroll:!1,draggable:!1,dragOver:!0,autoClose:!1,preloadAudio:!0,audio:null,volume:100,onInit:null,onAttach:null,onPosition:null,onCreated:null,onOpen:null,onClose:null,onCloseComplete:null},this._pluginOptions={Tooltip:{getContent:"title",trigger:"mouseenter",position:{x:"center",y:"top"},outside:"y",pointer:!0},Mouse:{responsiveWidth:!1,responsiveHeight:!1,adjustPosition:"flip",target:"mouse",trigger:"mouseenter",position:{x:"right",y:"bottom"},outside:"xy",offset:5},Modal:{target:t(window),fixed:!0,blockScroll:!0,closeOnEsc:!0,closeOnClick:"overlay",closeButton:!0,overlay:!0,animation:"zoomIn"}},this.options=t.extend(!0,this.options,this._pluginOptions[s]?this._pluginOptions[s]:i._pluginOptions[s],o),"string"==t.type(s)&&(this.type=s),this._fireEvent=function(t,i){this.options["_"+t]&&this.options["_"+t].bind(this)(i),this.options[t]&&this.options[t].bind(this)(i)},null===this.options.id&&(this.options.id="jBox"+i._getUniqueID()),this.id=this.options.id,("center"==this.options.position.x&&"x"==this.options.outside||"center"==this.options.position.y&&"y"==this.options.outside)&&(this.options.outside=null),"target"==this.options.pointTo&&(!this.options.outside||"xy"==this.options.outside)&&(this.options.pointer=!1),"object"!=t.type(this.options.offset)?this.options.offset={x:this.options.offset,y:this.options.offset}:this.options.offset=t.extend({x:0,y:0},this.options.offset),"object"!=t.type(this.options.adjustDistance)?this.options.adjustDistance={top:this.options.adjustDistance,right:this.options.adjustDistance,bottom:this.options.adjustDistance,left:this.options.adjustDistance}:this.options.adjustDistance=t.extend({top:5,left:5,right:5,bottom:5},this.options.adjustDistance),this.outside=!(!this.options.outside||"xy"==this.options.outside)&&this.options.position[this.options.outside],this.align=this.outside?this.outside:"center"!=this.options.position.y&&"number"!=t.type(this.options.position.y)?this.options.position.x:"center"!=this.options.position.x&&"number"!=t.type(this.options.position.x)?this.options.position.y:this.options.attributes.x,this._getOpp=function(t){return{left:"right",right:"left",top:"bottom",bottom:"top",x:"y",y:"x"}[t]},this._getXY=function(t){return{left:"x",right:"x",top:"y",bottom:"y",center:"x"}[t]},this._getTL=function(t){return{left:"left",right:"left",top:"top",bottom:"top",center:"left",x:"left",y:"top"}[t]},this._getInt=function(i,s){return"auto"==i?"auto":i&&"string"==t.type(i)&&"%"==i.slice(-1)?t(window)["height"==s?"innerHeight":"innerWidth"]()*parseInt(i.replace("%",""))/100:i},this._createSVG=function(i,s){var o=document.createElementNS("http://www.w3.org/2000/svg",i);return t.each(s,function(t,i){o.setAttribute(i[0],i[1]||"")}),o},this._isolateScroll=function(t){t&&t.length&&t.on("DOMMouseScroll.jBoxIsolateScroll mousewheel.jBoxIsolateScroll",function(i){var s=i.wheelDelta||i.originalEvent&&i.originalEvent.wheelDelta||-i.detail,o=this.scrollTop+t.outerHeight()-this.scrollHeight>=0,e=this.scrollTop<=0;(s<0&&o||s>0&&e)&&i.preventDefault()})},this._setTitleWidth=function(){if(!this.titleContainer||"auto"==this.content[0].style.width&&!this.content[0].style.maxWidth)return null;if("none"==this.wrapper.css("display")){this.wrapper.css("display","block");var t=this.content.outerWidth();this.wrapper.css("display","none")}else var t=this.content.outerWidth();this.titleContainer.css({maxWidth:Math.max(t,parseInt(this.content[0].style.maxWidth))||null})},this._draggable=function(){if(!this.options.draggable)return!1;var s="title"==this.options.draggable?this.titleContainer:this.options.draggable instanceof t?this.options.draggable:"string"==t.type(this.options.draggable)?t(this.options.draggable):this.wrapper;return!(!(s&&s instanceof t&&s.length)||s.data("jBox-draggable"))&&(s.addClass("jBox-draggable").data("jBox-draggable",!0).on("mousedown",function(s){if(2!=s.button&&!t(s.target).hasClass("jBox-noDrag")&&!t(s.target).parents(".jBox-noDrag").length){this.options.dragOver&&this.wrapper.css("zIndex")<=i.zIndexMax&&(i.zIndexMax+=1,this.wrapper.css("zIndex",i.zIndexMax));var o=this.wrapper.outerHeight(),e=this.wrapper.outerWidth(),n=this.wrapper.offset().top+o-s.pageY,a=this.wrapper.offset().left+e-s.pageX;t(document).on("mousemove.jBox-draggable-"+this.id,function(t){this.wrapper.offset({top:t.pageY+n-o,left:t.pageX+a-e})}.bind(this)),s.preventDefault()}}.bind(this)).on("mouseup",function(){t(document).off("mousemove.jBox-draggable-"+this.id)}.bind(this)),i.zIndexMax=i.zIndexMax?Math.max(i.zIndexMax,this.options.zIndex):this.options.zIndex,this)},this._create=function(){if(!this.wrapper){if(this.wrapper=t("<div/>",{id:this.id,class:"jBox-wrapper"+(this.type?" jBox-"+this.type:"")+(this.options.theme?" jBox-"+this.options.theme:"")+(this.options.addClass?" "+this.options.addClass:"")}).css({position:this.options.fixed?"fixed":"absolute",display:"none",opacity:0,zIndex:this.options.zIndex}).data("jBox",this),this.options.closeOnMouseleave&&this.wrapper.on("mouseleave",function(i){!this.source||!(i.relatedTarget==this.source[0]||t.inArray(this.source[0],t(i.relatedTarget).parents("*"))!==-1)&&this.close()}.bind(this)),"box"==this.options.closeOnClick&&this.wrapper.on("touchend click",function(){this.close({ignoreDelay:!0})}.bind(this)),this.container=t('<div class="jBox-container"/>').appendTo(this.wrapper),this.content=t('<div class="jBox-content"/>').appendTo(this.container),this.options.footer&&(this.footer=t('<div class="jBox-footer"/>').append(this.options.footer).appendTo(this.container)),this.options.isolateScroll&&this._isolateScroll(this.content),this.options.closeButton){var i=this._createSVG("svg",[["viewBox","0 0 24 24"]]);i.appendChild(this._createSVG("path",[["d","M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"]])),this.closeButton=t('<div class="jBox-closeButton jBox-noDrag"/>').on("touchend click",function(t){this.close({ignoreDelay:!0})}.bind(this)).append(i),"box"!=this.options.closeButton&&(this.options.closeButton!==!0||this.options.overlay||this.options.title)||(this.wrapper.addClass("jBox-closeButton-box"),this.closeButton.appendTo(this.container))}if(this.wrapper.appendTo(this.options.appendTo),this.wrapper.find(".jBox-closeButton").length&&t.each(["top","right","bottom","left"],function(t,i){this.wrapper.find(".jBox-closeButton").css(i)&&"auto"!=this.wrapper.find(".jBox-closeButton").css(i)&&(this.options.adjustDistance[i]=Math.max(this.options.adjustDistance[i],this.options.adjustDistance[i]+((parseInt(this.wrapper.find(".jBox-closeButton").css(i))||0)+(parseInt(this.container.css("border-"+i+"-width"))||0))*-1))}.bind(this)),this.options.pointer){if(this.pointer={position:"target"!=this.options.pointTo?this.options.pointTo:this._getOpp(this.outside),xy:"target"!=this.options.pointTo?this._getXY(this.options.pointTo):this._getXY(this.outside),align:"center",offset:0},this.pointer.element=t('<div class="jBox-pointer jBox-pointer-'+this.pointer.position+'"/>').appendTo(this.wrapper),this.pointer.dimensions={x:this.pointer.element.outerWidth(),y:this.pointer.element.outerHeight()},"string"==t.type(this.options.pointer)){var s=this.options.pointer.split(":");s[0]&&(this.pointer.align=s[0]),s[1]&&(this.pointer.offset=parseInt(s[1]))}this.pointer.alignAttribute="x"==this.pointer.xy?"bottom"==this.pointer.align?"bottom":"top":"right"==this.pointer.align?"right":"left",this.wrapper.css("padding-"+this.pointer.position,this.pointer.dimensions[this.pointer.xy]),this.pointer.element.css(this.pointer.alignAttribute,"center"==this.pointer.align?"50%":0).css("margin-"+this.pointer.alignAttribute,this.pointer.offset),this.pointer.margin={},this.pointer.margin["margin-"+this.pointer.alignAttribute]=this.pointer.offset,"center"==this.pointer.align&&this.pointer.element.css("transform","translate("+("y"==this.pointer.xy?this.pointer.dimensions.x*-.5+"px":0)+", "+("x"==this.pointer.xy?this.pointer.dimensions.y*-.5+"px":0)+")"),this.pointer.element.css("x"==this.pointer.xy?"width":"height",parseInt(this.pointer.dimensions[this.pointer.xy])+parseInt(this.container.css("border-"+this.pointer.alignAttribute+"-width"))),this.wrapper.addClass("jBox-pointerPosition-"+this.pointer.position)}this.setContent(this.options.content,!0),this.setTitle(this.options.title,!0),this.options.draggable&&this._draggable(),this._fireEvent("onCreated")}},this.options.createOnInit&&this._create(),this.options.attach&&this.attach(),this._attachEvents=function(){this.options.closeOnEsc&&t(document).on("keyup.jBox-"+this.id,function(t){27==t.keyCode&&this.close({ignoreDelay:!0})}.bind(this)),this.options.closeOnClick!==!0&&"body"!=this.options.closeOnClick||t(document).on("touchend.jBox-"+this.id+" click.jBox-"+this.id,function(t){this.blockBodyClick||"body"==this.options.closeOnClick&&(t.target==this.wrapper[0]||this.wrapper.has(t.target).length)||this.close({ignoreDelay:!0})}.bind(this)),(this.options.adjustPosition||this.options.reposition)&&!this.fixed&&this.outside&&(this.options.adjustTracker&&t(window).on("scroll.jBox-"+this.id,function(t){this.position()}.bind(this)),(this.options.adjustPosition||this.options.reposition)&&t(window).on("resize.jBox-"+this.id,function(t){this.position()}.bind(this))),"mouse"==this.options.target&&t("body").on("mousemove.jBox-"+this.id,function(t){this.position({mouseTarget:{top:t.pageY,left:t.pageX}})}.bind(this))},this._detachEvents=function(){this.options.closeOnEsc&&t(document).off("keyup.jBox-"+this.id),(this.options.closeOnClick===!0||"body"==this.options.closeOnClick)&&t(document).off("touchend.jBox-"+this.id+" click.jBox-"+this.id),this.options.adjustTracker&&t(window).off("scroll.jBox-"+this.id),(this.options.adjustPosition||this.options.reposition)&&t(window).off("resize.jBox-"+this.id),"mouse"==this.options.target&&t("body").off("mousemove.jBox-"+this.id)},this._showOverlay=function(){this.overlay||(this.overlay=t('<div id="'+this.id+'-overlay"/>').addClass("jBox-overlay"+(this.type?" jBox-overlay-"+this.type:"")).css({display:"none",opacity:0,zIndex:this.options.zIndex-1}).appendTo(this.options.appendTo),("overlay"==this.options.closeButton||this.options.closeButton===!0&&!this.titleContainer)&&this.overlay.append(this.closeButton),"overlay"==this.options.closeOnClick&&this.overlay.on("touchend click",function(){this.close({ignoreDelay:!0})}.bind(this)),t("#"+this.id+"-overlay .jBox-closeButton").length&&(this.options.adjustDistance.top=Math.max(t("#"+this.id+"-overlay .jBox-closeButton").outerHeight(),this.options.adjustDistance.top))),"block"!=this.overlay.css("display")&&(this.options.fade?this.overlay.stop()&&this.overlay.animate({opacity:1},{queue:!1,duration:this.options.fade,start:function(){this.overlay.css({display:"block"})}.bind(this)}):this.overlay.css({display:"block",opacity:1}))},this._hideOverlay=function(){this.overlay&&(this.options.fade?this.overlay.stop()&&this.overlay.animate({opacity:0},{queue:!1,duration:this.options.fade,complete:function(){this.overlay.css({display:"none"})}.bind(this)}):this.overlay.css({display:"none",opacity:0}))},this._exposeDimensions=function(){this.wrapper.css({top:-1e4,left:-1e4,right:"auto",bottom:"auto"});var t={x:this.wrapper.outerWidth(),y:this.wrapper.outerHeight()};return this.wrapper.css({top:"auto",left:"auto"}),t},this._generateAnimationCSS=function(){if("object"!=t.type(this.options.animation)&&(this.options.animation={pulse:{open:"pulse",close:"zoomOut"},zoomIn:{open:"zoomIn",close:"zoomIn"},zoomOut:{open:"zoomOut",close:"zoomOut"},move:{open:"move",close:"move"},slide:{open:"slide",close:"slide"},flip:{open:"flip",close:"flip"},tada:{open:"tada",close:"zoomOut"}}[this.options.animation]),!this.options.animation)return null;this.options.animation.open&&(this.options.animation.open=this.options.animation.open.split(":")),this.options.animation.close&&(this.options.animation.close=this.options.animation.close.split(":")),this.options.animation.openDirection=this.options.animation.open[1]?this.options.animation.open[1]:null,this.options.animation.closeDirection=this.options.animation.close[1]?this.options.animation.close[1]:null,this.options.animation.open&&(this.options.animation.open=this.options.animation.open[0]),this.options.animation.close&&(this.options.animation.close=this.options.animation.close[0]),this.options.animation.open&&(this.options.animation.open+="Open"),this.options.animation.close&&(this.options.animation.close+="Close");var i={pulse:{duration:350,css:[["0%","scale(1)"],["50%","scale(1.1)"],["100%","scale(1)"]]},zoomInOpen:{duration:this.options.fade||180,css:[["0%","scale(0.9)"],["100%","scale(1)"]]},zoomInClose:{duration:this.options.fade||180,css:[["0%","scale(1)"],["100%","scale(0.9)"]]},zoomOutOpen:{duration:this.options.fade||180,css:[["0%","scale(1.1)"],["100%","scale(1)"]]},zoomOutClose:{duration:this.options.fade||180,css:[["0%","scale(1)"],["100%","scale(1.1)"]]},moveOpen:{duration:this.options.fade||180,positions:{top:{"0%":-12},right:{"0%":12},bottom:{"0%":12},left:{"0%":-12}},css:[["0%","translate%XY(%Vpx)"],["100%","translate%XY(0px)"]]},moveClose:{duration:this.options.fade||180,timing:"ease-in",positions:{top:{"100%":-12},right:{"100%":12},bottom:{"100%":12},left:{"100%":-12}},css:[["0%","translate%XY(0px)"],["100%","translate%XY(%Vpx)"]]},slideOpen:{duration:400,positions:{top:{"0%":-400},right:{"0%":400},bottom:{"0%":400},left:{"0%":-400}},css:[["0%","translate%XY(%Vpx)"],["100%","translate%XY(0px)"]]},slideClose:{duration:400,timing:"ease-in",positions:{top:{"100%":-400},right:{"100%":400},bottom:{"100%":400},left:{"100%":-400}},css:[["0%","translate%XY(0px)"],["100%","translate%XY(%Vpx)"]]},flipOpen:{duration:600,css:[["0%","perspective(400px) rotateX(90deg)"],["40%","perspective(400px) rotateX(-15deg)"],["70%","perspective(400px) rotateX(15deg)"],["100%","perspective(400px) rotateX(0deg)"]]},flipClose:{duration:this.options.fade||300,css:[["0%","perspective(400px) rotateX(0deg)"],["100%","perspective(400px) rotateX(90deg)"]]},tada:{duration:800,css:[["0%","scale(1)"],["10%, 20%","scale(0.9) rotate(-3deg)"],["30%, 50%, 70%, 90%","scale(1.1) rotate(3deg)"],["40%, 60%, 80%","scale(1.1) rotate(-3deg)"],["100%","scale(1) rotate(0)"]]}};t.each(["pulse","tada"],function(t,s){i[s+"Open"]=i[s+"Close"]=i[s]});var s=function(s,o){return keyframe_css="@keyframes jBox-"+this.id+"-animation-"+this.options.animation[s]+"-"+s+(o?"-"+o:"")+" {",t.each(i[this.options.animation[s]].css,function(t,e){var n=o?e[1].replace("%XY",this._getXY(o).toUpperCase()):e[1];i[this.options.animation[s]].positions&&(n=n.replace("%V",i[this.options.animation[s]].positions[o][e[0]])),keyframe_css+=e[0]+" {transform:"+n+";}"}.bind(this)),keyframe_css+="}",keyframe_css+=".jBox-"+this.id+"-animation-"+this.options.animation[s]+"-"+s+(o?"-"+o:"")+" {",keyframe_css+="animation-duration: "+i[this.options.animation[s]].duration+"ms;",keyframe_css+="animation-name: jBox-"+this.id+"-animation-"+this.options.animation[s]+"-"+s+(o?"-"+o:"")+";",keyframe_css+=i[this.options.animation[s]].timing?"animation-timing-function: "+i[this.options.animation[s]].timing+";":"",keyframe_css+="}",keyframe_css}.bind(this);this._animationCSS="",t.each(["open","close"],function(o,e){return this.options.animation[e]&&i[this.options.animation[e]]&&("close"!=e||this.options.fade)?void(i[this.options.animation[e]].positions?t.each(["top","right","bottom","left"],function(t,i){this._animationCSS+=s(e,i)}.bind(this)):this._animationCSS+=s(e)):""}.bind(this))},this.options.animation&&this._generateAnimationCSS(),this._blockBodyClick=function(){this.blockBodyClick=!0,setTimeout(function(){this.blockBodyClick=!1}.bind(this),10)},this._animate=function(t){if(!t&&(t=this.isOpen?"open":"close"),!this.options.fade&&"close"==t)return null;var i=this.options.animation[t+"Direction"]||("center"!=this.align?this.align:this.options.attributes.x);this.flipped&&this._getXY(i)==this._getXY(this.align)&&(i=this._getOpp(i));var s="jBox-"+this.id+"-animation-"+this.options.animation[t]+"-"+t+" jBox-"+this.id+"-animation-"+this.options.animation[t]+"-"+t+"-"+i;this.wrapper.addClass(s);var o=1e3*parseFloat(this.wrapper.css("animation-duration"));"close"==t&&(o=Math.min(o,this.options.fade)),setTimeout(function(){this.wrapper.removeClass(s)}.bind(this),o)},this._abortAnimation=function(){var t=this.wrapper.attr("class").split(" ").filter(function(t){return 0!==t.lastIndexOf("jBox-"+this.id+"-animation",0)}.bind(this));this.wrapper.attr("class",t.join(" "))},(this.options.responsiveWidth||this.options.responsiveHeight)&&t(window).on("resize.responsivejBox-"+this.id,function(t){this.isOpen&&this.position()}.bind(this)),"string"===t.type(this.options.preloadAudio)&&(this.options.preloadAudio=[this.options.preloadAudio]),"string"===t.type(this.options.audio)&&(this.options.audio={open:this.options.audio}),"number"===t.type(this.options.volume)&&(this.options.volume={open:this.options.volume,close:this.options.volume}),this.options.preloadAudio===!0&&this.options.audio&&(this.options.preloadAudio=[],t.each(this.options.audio,function(t,i){this.options.preloadAudio.push(i+".mp3"),this.options.preloadAudio.push(i+".ogg")}.bind(this))),this.options.preloadAudio.length&&t.each(this.options.preloadAudio,function(t,i){var s=new Audio;s.src=i,s.preload="auto"}),this._fireEvent("onInit"),this};return i.prototype.attach=function(i,s){return!i&&(i=this.options.attach),"string"==t.type(i)&&(i=t(i)),!s&&(s=this.options.trigger),i&&i.length&&t.each(i,function(i,o){o=t(o),o.data("jBox-attached-"+this.id)||("title"==this.options.getContent&&void 0!=o.attr("title")&&o.data("jBox-getContent",o.attr("title")).removeAttr("title"),this.attachedElements||(this.attachedElements=[]),this.attachedElements.push(o[0]),o.on(s+".jBox-attach-"+this.id,function(t){if(this.timer&&clearTimeout(this.timer),"mouseenter"!=s||!this.isOpen||this.source[0]!=o[0]){if(this.isOpen&&this.source&&this.source[0]!=o[0])var i=!0;this.source=o,!this.options.target&&(this.target=o),"click"==s&&this.options.preventDefault&&t.preventDefault(),this["click"!=s||i?"open":"toggle"]()}}.bind(this)),"mouseenter"==this.options.trigger&&o.on("mouseleave",function(i){return this.wrapper?void(this.options.closeOnMouseleave&&(i.relatedTarget==this.wrapper[0]||t(i.relatedTarget).parents("#"+this.id).length)||this.close()):null}.bind(this)),o.data("jBox-attached-"+this.id,s),this._fireEvent("onAttach",o))}.bind(this)),this},i.prototype.detach=function(i){return!i&&(i=this.attachedElements||[]),i&&i.length&&t.each(i,function(i,s){s=t(s),s.data("jBox-attached-"+this.id)&&(s.off(s.data("jBox-attached-"+this.id)+".jBox-attach-"+this.id),s.data("jBox-attached-"+this.id,null)),this.attachedElements=t.grep(this.attachedElements,function(t){return t!=s[0]})}.bind(this)),this},i.prototype.setTitle=function(i,s){if(null==i||void 0==i)return this;!this.wrapper&&this._create();var o=this.wrapper.outerHeight(),e=this.wrapper.outerWidth();return this.title||(this.titleContainer=t('<div class="jBox-title"/>'),this.title=t("<div/>").appendTo(this.titleContainer),this.wrapper.addClass("jBox-hasTitle"),("title"==this.options.closeButton||this.options.closeButton===!0&&!this.options.overlay)&&(this.wrapper.addClass("jBox-closeButton-title"),this.closeButton.appendTo(this.titleContainer)),this.titleContainer.insertBefore(this.content),this._setTitleWidth()),this.title.html(i),e!=this.wrapper.outerWidth()&&this._setTitleWidth(),this.options.draggable&&this._draggable(),!s&&this.options.repositionOnContent&&(o!=this.wrapper.outerHeight()||e!=this.wrapper.outerWidth())&&this.position(),this},i.prototype.setContent=function(i,s){if(null==i||void 0==i)return this;!this.wrapper&&this._create();var o=this.wrapper.outerHeight(),e=this.wrapper.outerWidth();switch(this.content.children("[data-jbox-content-appended]").appendTo("body").css({display:"none"}),t.type(i)){case"string":this.content.html(i);break;case"object":this.content.html(""),i.attr("data-jbox-content-appended",1).appendTo(this.content).css({display:"block"})}return e!=this.wrapper.outerWidth()&&this._setTitleWidth(),this.options.draggable&&this._draggable(),!s&&this.options.repositionOnContent&&(o!=this.wrapper.outerHeight()||e!=this.wrapper.outerWidth())&&this.position(),this},i.prototype.setDimensions=function(t,i,s){!this.wrapper&&this._create(),void 0==i&&(i="auto"),this.content.css(t,this._getInt(i)),"width"==t&&this._setTitleWidth(),(void 0==s||s)&&this.position()},i.prototype.setWidth=function(t,i){this.setDimensions("width",t,i)},i.prototype.setHeight=function(t,i){this.setDimensions("height",t,i)},i.prototype.position=function(i){if(!i&&(i={}),i=t.extend(!0,this.options,i),this.target=i.target||this.target||t(window),!(this.target instanceof t||"mouse"==this.target)&&(this.target=t(this.target)),!this.target.length)return this;this.content.css({width:this._getInt(i.width,"width"),height:this._getInt(i.height,"height"),minWidth:this._getInt(i.minWidth,"width"),minHeight:this._getInt(i.minHeight,"height"),maxWidth:this._getInt(i.maxWidth,"width"),maxHeight:this._getInt(i.maxHeight,"height")}),this._setTitleWidth();var s=this._exposeDimensions();"mouse"!=this.target&&!this.target.data("jBox-"+this.id+"-fixed")&&this.target.data("jBox-"+this.id+"-fixed",this.target[0]!=t(window)[0]&&("fixed"==this.target.css("position")||this.target.parents().filter(function(){return"fixed"==t(this).css("position")}).length>0)?"fixed":"static");var o={x:t(window).outerWidth(),y:t(window).outerHeight(),top:i.fixed&&this.target.data("jBox-"+this.id+"-fixed")?0:t(window).scrollTop(),left:i.fixed&&this.target.data("jBox-"+this.id+"-fixed")?0:t(window).scrollLeft()};o.bottom=o.top+o.y,o.right=o.left+o.x;try{var e=this.target.offset()}catch(t){var e={top:0,left:0}}"mouse"!=this.target&&"fixed"==this.target.data("jBox-"+this.id+"-fixed")&&i.fixed&&(e.top=e.top-t(window).scrollTop(),e.left=e.left-t(window).scrollLeft());var n={x:"mouse"==this.target?12:this.target.outerWidth(),y:"mouse"==this.target?20:this.target.outerHeight(),top:"mouse"==this.target&&i.mouseTarget?i.mouseTarget.top:e?e.top:0,left:"mouse"==this.target&&i.mouseTarget?i.mouseTarget.left:e?e.left:0},a=i.outside&&!("center"==i.position.x&&"center"==i.position.y),h={x:o.x-i.adjustDistance.left-i.adjustDistance.right,y:o.y-i.adjustDistance.top-i.adjustDistance.bottom,left:a?n.left-t(window).scrollLeft()-i.adjustDistance.left:0,right:a?o.x-n.left+t(window).scrollLeft()-n.x-i.adjustDistance.right:0,top:a?n.top-t(window).scrollTop()-this.options.adjustDistance.top:0,bottom:a?o.y-n.top+t(window).scrollTop()-n.y-i.adjustDistance.bottom:0},p={x:"x"!=i.outside&&"xy"!=i.outside||"number"==t.type(i.position.x)?null:i.position.x,y:"y"!=i.outside&&"xy"!=i.outside||"number"==t.type(i.position.y)?null:i.position.y},r={x:!1,y:!1};if(p.x&&s.x>h[p.x]&&h[this._getOpp(p.x)]>h[p.x]&&(p.x=this._getOpp(p.x))&&(r.x=!0),p.y&&s.y>h[p.y]&&h[this._getOpp(p.y)]>h[p.y]&&(p.y=this._getOpp(p.y))&&(r.y=!0),i.responsiveWidth||i.responsiveHeight){var l=function(){if(i.responsiveWidth&&s.x>h[p.x||"x"]){var t=h[p.x||"x"]-(this.pointer&&a&&"x"==i.outside?this.pointer.dimensions.x:0)-parseInt(this.container.css("border-left-width"))-parseInt(this.container.css("border-right-width"));this.content.css({width:t>this.options.responsiveMinWidth?t:null,minWidth:t<parseInt(this.content.css("minWidth"))?0:null}),this._setTitleWidth()}s=this._exposeDimensions()}.bind(this);i.responsiveWidth&&l(),i.responsiveWidth&&!r.y&&p.y&&s.y>h[p.y]&&h[this._getOpp(p.y)]>h[p.y]&&(p.y=this._getOpp(p.y))&&(r.y=!0);var d=function(){if(i.responsiveHeight&&s.y>h[p.y||"y"]){var t=function(){if(!this.titleContainer&&!this.footer)return 0;if("none"==this.wrapper.css("display")){this.wrapper.css("display","block");var t=(this.titleContainer?this.titleContainer.outerHeight():0)+(this.footer?this.footer.outerHeight():0);this.wrapper.css("display","none")}else var t=(this.titleContainer?this.titleContainer.outerHeight():0)+(this.footer?this.footer.outerHeight():0);return t||0}.bind(this),o=h[p.y||"y"]-(this.pointer&&a&&"y"==i.outside?this.pointer.dimensions.y:0)-t()-parseInt(this.container.css("border-top-width"))-parseInt(this.container.css("border-bottom-width"));this.content.css({height:o>this.options.responsiveMinHeight?o:null}),this._setTitleWidth()}s=this._exposeDimensions()}.bind(this);i.responsiveHeight&&d(),i.responsiveHeight&&!r.x&&p.x&&s.x>h[p.x]&&h[this._getOpp(p.x)]>h[p.x]&&(p.x=this._getOpp(p.x))&&(r.x=!0),i.adjustPosition&&"move"!=i.adjustPosition&&(r.x&&l(),r.y&&d())}var c={},u=function(o){if("number"==t.type(i.position[o]))return void(c[i.attributes[o]]=i.position[o]);var e=i.attributes[o]="x"==o?"left":"top";return c[e]=n[e],"center"==i.position[o]?(c[e]+=Math.ceil((n[o]-s[o])/2),void("mouse"!=this.target&&this.target[0]&&this.target[0]==t(window)[0]&&(c[e]+=.5*(i.adjustDistance[e]-i.adjustDistance[this._getOpp(e)])))):(e!=i.position[o]&&(c[e]+=n[o]-s[o]),void((i.outside==o||"xy"==i.outside)&&(c[e]+=s[o]*(e!=i.position[o]?1:-1))))}.bind(this);if(u("x"),u("y"),this.pointer&&"target"==i.pointTo&&"number"!=t.type(i.position.x)&&"number"!=t.type(i.position.y)){var g=0;switch(this.pointer.align){case"center":"center"!=i.position[this._getOpp(i.outside)]&&(g+=s[this._getOpp(i.outside)]/2);break;default:switch(i.position[this._getOpp(i.outside)]){case"center":g+=(s[this._getOpp(i.outside)]/2-this.pointer.dimensions[this._getOpp(i.outside)]/2)*(this.pointer.align==this._getTL(this.pointer.align)?1:-1);break;default:g+=this.pointer.align!=i.position[this._getOpp(i.outside)]?this.dimensions[this._getOpp(i.outside)]*(t.inArray(this.pointer.align,["top","left"])!==-1?1:-1)+this.pointer.dimensions[this._getOpp(i.outside)]/2*(t.inArray(this.pointer.align,["top","left"])!==-1?-1:1):this.pointer.dimensions[this._getOpp(i.outside)]/2*(t.inArray(this.pointer.align,["top","left"])!==-1?1:-1)}}g*=i.position[this._getOpp(i.outside)]==this.pointer.alignAttribute?-1:1,g+=this.pointer.offset*(this.pointer.align==this._getOpp(this._getTL(this.pointer.align))?1:-1),c[this._getTL(this._getOpp(this.pointer.xy))]+=g}if(c[i.attributes.x]+=i.offset.x,c[i.attributes.y]+=i.offset.y,this.wrapper.css(c),i.adjustPosition){this.positionAdjusted&&(this.pointer&&this.wrapper.css("padding",0).css("padding-"+this._getOpp(this.outside),this.pointer.dimensions[this._getXY(this.outside)]).removeClass("jBox-pointerPosition-"+this._getOpp(this.pointer.position)).addClass("jBox-pointerPosition-"+this.pointer.position),this.pointer&&this.pointer.element.attr("class","jBox-pointer jBox-pointer-"+this._getOpp(this.outside)).css(this.pointer.margin),this.positionAdjusted=!1,this.flipped=!1);var f=o.top>c.top-(i.adjustDistance.top||0),m=o.right<c.left+s.x+(i.adjustDistance.right||0),x=o.bottom<c.top+s.y+(i.adjustDistance.bottom||0),y=o.left>c.left-(i.adjustDistance.left||0),j=y?"left":m?"right":null,b=f?"top":x?"bottom":null,v=j||b;if(v){var _=function(t){this.wrapper.css(this._getTL(t),c[this._getTL(t)]+(s[this._getXY(t)]+i.offset[this._getXY(t)]*("top"==t||"left"==t?-2:2)+n[this._getXY(t)])*("top"==t||"left"==t?1:-1)),this.pointer&&this.wrapper.removeClass("jBox-pointerPosition-"+this.pointer.position).addClass("jBox-pointerPosition-"+this._getOpp(this.pointer.position)).css("padding",0).css("padding-"+t,this.pointer.dimensions[this._getXY(t)]),this.pointer&&this.pointer.element.attr("class","jBox-pointer jBox-pointer-"+t),this.positionAdjusted=!0,this.flipped=!0}.bind(this);r.x&&_(this.options.position.x),r.y&&_(this.options.position.y);var w="x"==this._getXY(this.outside)?b:j;if(this.pointer&&"target"==i.pointTo&&"flip"!=i.adjustPosition&&this._getXY(w)==this._getOpp(this._getXY(this.outside))){if("center"==this.pointer.align)var B=s[this._getXY(w)]/2-this.pointer.dimensions[this._getOpp(this.pointer.xy)]/2-parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))*(w!=this._getTL(w)?-1:1);else var B=w==this.pointer.alignAttribute?parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute)):s[this._getXY(w)]-parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))-this.pointer.dimensions[this._getXY(w)];spaceDiff=w==this._getTL(w)?o[this._getTL(w)]-c[this._getTL(w)]+i.adjustDistance[w]:(o[this._getOpp(this._getTL(w))]-c[this._getTL(w)]-i.adjustDistance[w]-s[this._getXY(w)])*-1,w==this._getOpp(this._getTL(w))&&c[this._getTL(w)]-spaceDiff<o[this._getTL(w)]+i.adjustDistance[this._getTL(w)]&&(spaceDiff-=o[this._getTL(w)]+i.adjustDistance[this._getTL(w)]-(this.pos[this._getTL(w)]-spaceDiff)),spaceDiff=Math.min(spaceDiff,B),spaceDiff<=B&&spaceDiff>0&&(this.pointer.element.css("margin-"+this.pointer.alignAttribute,parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))-spaceDiff*(w!=this.pointer.alignAttribute?-1:1)),this.wrapper.css(this._getTL(w),c[this._getTL(w)]+spaceDiff*(w!=this._getTL(w)?-1:1)),this.positionAdjusted=!0)}}}return this._fireEvent("onPosition"),this},i.prototype.open=function(i){if(!i&&(i={}),this.isDestroyed)return!1;if(!this.wrapper&&this._create(),!this._styles&&(this._styles=t("<style/>").append(this._animationCSS).appendTo(t("head"))),this.timer&&clearTimeout(this.timer),this._blockBodyClick(),this.isDisabled)return this;var s=function(){this.source&&this.options.getTitle&&(this.source.attr(this.options.getTitle)&&this.setTitle(this.source.attr(this.options.getTitle)),!0),this.source&&this.options.getContent&&(this.source.data("jBox-getContent")?this.setContent(this.source.data("jBox-getContent"),!0):this.source.attr(this.options.getContent)?this.setContent(this.source.attr(this.options.getContent),!0):"html"==this.options.getContent?this.setContent(this.source.html(),!0):null),this._fireEvent("onOpen"),(this.options.ajax&&(this.options.ajax.url||this.source&&this.source.attr(this.options.ajax.getURL))&&(!this.ajaxLoaded||this.options.ajax.reload)||i.ajax&&(i.ajax.url||i.ajax.data))&&("strict"==this.options.ajax.reload||!this.source||!this.source.data("jBox-ajax-data")||i.ajax&&(i.ajax.url||i.ajax.data)?this.ajax(i.ajax||null,!0):this.setContent(this.source.data("jBox-ajax-data"))),(!this.positionedOnOpen||this.options.repositionOnOpen)&&this.position(i)&&(this.positionedOnOpen=!0),this.isClosing&&this._abortAnimation(),this.isOpen||(this.isOpen=!0,this.options.autoClose&&(this.options.delayClose=this.options.autoClose)&&this.close(),this._attachEvents(),this.options.blockScroll&&t("body").addClass("jBox-blockScroll-"+this.id),this.options.overlay&&this._showOverlay(),this.options.animation&&!this.isClosing&&this._animate("open"),this.options.audio&&this.options.audio.open&&this.audio(this.options.audio.open,this.options.volume.open),this.options.fade?this.wrapper.stop().animate({
opacity:1},{queue:!1,duration:this.options.fade,start:function(){this.isOpening=!0,this.wrapper.css({display:"block"})}.bind(this),always:function(){this.isOpening=!1,setTimeout(function(){this.positionOnFadeComplete&&this.position()&&(this.positionOnFadeComplete=!1)}.bind(this),10)}.bind(this)}):(this.wrapper.css({display:"block",opacity:1}),this.positionOnFadeComplete&&this.position()&&(this.positionOnFadeComplete=!1)))}.bind(this);return!this.options.delayOpen||this.isOpen||this.isClosing||i.ignoreDelay?s():this.timer=setTimeout(s,this.options.delayOpen),this},i.prototype.close=function(i){if(i||(i={}),this.isDestroyed||this.isClosing)return!1;if(this.timer&&clearTimeout(this.timer),this._blockBodyClick(),this.isDisabled)return this;var s=function(){this._fireEvent("onClose"),this.isOpen&&(this.isOpen=!1,this._detachEvents(),this.options.blockScroll&&t("body").removeClass("jBox-blockScroll-"+this.id),this.options.overlay&&this._hideOverlay(),this.options.animation&&!this.isOpening&&this._animate("close"),this.options.audio&&this.options.audio.close&&this.audio(this.options.audio.close,this.options.volume.close),this.options.fade?this.wrapper.stop().animate({opacity:0},{queue:!1,duration:this.options.fade,start:function(){this.isClosing=!0}.bind(this),complete:function(){this.wrapper.css({display:"none"}),this._fireEvent("onCloseComplete")}.bind(this),always:function(){this.isClosing=!1}.bind(this)}):(this.wrapper.css({display:"none",opacity:0}),this._fireEvent("onCloseComplete")))}.bind(this);return i.ignoreDelay?s():this.timer=setTimeout(s,Math.max(this.options.delayClose,10)),this},i.prototype.toggle=function(t){return this[this.isOpen?"close":"open"](t),this},i.prototype.disable=function(){return this.isDisabled=!0,this},i.prototype.enable=function(){return this.isDisabled=!1,this},i.prototype.hide=function(){return this.disable(),this.wrapper&&this.wrapper.css({display:"none"}),this},i.prototype.show=function(){return this.enable(),this.wrapper&&this.wrapper.css({display:"block"}),this},i.prototype.ajax=function(i,s){i||(i={}),t.each([["getData","data"],["getURL","url"]],function(t,s){this.options.ajax[s[0]]&&!i[s[1]]&&this.source&&void 0!=this.source.attr(this.options.ajax[s[0]])&&(i[s[1]]=this.source.attr(this.options.ajax[s[0]])||"")}.bind(this));var o=t.extend(!0,{},this.options.ajax);this.ajaxRequest&&this.ajaxRequest.abort();var e=i.beforeSend||o.beforeSend||function(){},n=i.complete||o.complete||function(){},a=i.success||o.success||function(){},h=i.error||o.error||function(){},p=t.extend(!0,o,i);return p.beforeSend=function(){this.wrapper.addClass("jBox-loading"),p.spinner&&(this.spinnerDelay=setTimeout(function(){this.wrapper.addClass("jBox-loading-spinner"),p.spinnerReposition&&(s?this.positionOnFadeComplete=!0:this.position()),this.spinner=t(p.spinner!==!0?p.spinner:'<div class="jBox-spinner"></div>').appendTo(this.container),this.titleContainer&&"absolute"==this.spinner.css("position")&&this.spinner.css({transform:"translateY("+.5*this.titleContainer.outerHeight()+"px)"})}.bind(this),""==this.content.html()?0:p.spinnerDelay||0)),e.bind(this)()}.bind(this),p.complete=function(t){this.spinnerDelay&&clearTimeout(this.spinnerDelay),this.wrapper.removeClass("jBox-loading jBox-loading-spinner jBox-loading-spinner-delay"),this.spinner&&this.spinner.length&&this.spinner.remove()&&p.spinnerReposition&&(s?this.positionOnFadeComplete=!0:this.position()),this.ajaxLoaded=!0,n.bind(this)(t)}.bind(this),p.success=function(t){p.setContent&&this.setContent(t,!0)&&(s?this.positionOnFadeComplete=!0:this.position()),p.setContent&&this.source&&this.source.data("jBox-ajax-data",t),a.bind(this)(t)}.bind(this),p.error=function(t){h.bind(this)(t)}.bind(this),this.ajaxRequest=t.ajax(p),this},i.prototype.audio=function(s,o){if(!s)return this;if(!i._audio&&(i._audio={}),!i._audio[s]){var e=t("<audio/>");t("<source/>",{src:s+".mp3"}).appendTo(e),t("<source/>",{src:s+".ogg"}).appendTo(e),i._audio[s]=e[0]}i._audio[s].volume=Math.min((void 0!=o?o:100)/100,1);try{i._audio[s].pause(),i._audio[s].currentTime=0}catch(t){}return i._audio[s].play(),this},i._animationSpeeds={tada:1e3,tadaSmall:1e3,flash:500,shake:400,pulseUp:250,pulseDown:250,popIn:250,popOut:250,fadeIn:200,fadeOut:200,slideUp:400,slideRight:400,slideLeft:400,slideDown:400},i.prototype.animate=function(t,s){!s&&(s={}),!this.animationTimeout&&(this.animationTimeout={}),!s.element&&(s.element=this.wrapper),!s.element.data("jBox-animating-id")&&s.element.data("jBox-animating-id",i._getUniqueElementID()),s.element.data("jBox-animating")&&(s.element.removeClass(s.element.data("jBox-animating")).data("jBox-animating",null),this.animationTimeout[s.element.data("jBox-animating-id")]&&clearTimeout(this.animationTimeout[s.element.data("jBox-animating-id")])),s.element.addClass("jBox-animated-"+t).data("jBox-animating","jBox-animated-"+t),this.animationTimeout[s.element.data("jBox-animating-id")]=setTimeout(function(){s.element.removeClass(s.element.data("jBox-animating")).data("jBox-animating",null),s.complete&&s.complete()},i._animationSpeeds[t])},i.prototype.destroy=function(){return this.detach(),this.isOpen&&this.close({ignoreDelay:!0}),this.wrapper&&this.wrapper.remove(),this.overlay&&this.overlay.remove(),this._styles&&this._styles.remove(),this.isDestroyed=!0,this},i._getUniqueID=function(){var t=1;return function(){return t++}}(),i._getUniqueElementID=function(){var t=1;return function(){return t++}}(),i._pluginOptions={},i.plugin=function(t,s){i._pluginOptions[t]=s},t.fn.jBox=function(s,o){return!s&&(s={}),!o&&(o={}),new i(s,t.extend(o,{attach:this}))},i});