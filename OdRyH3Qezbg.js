if (self.CavalryLogger) { CavalryLogger.start_js(["gFGG\/"]); }

__d("MFirefoxAppDetect",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b){__p&&__p();if(!navigator.mozApps){b();return}if(window.locationbar&&!window.locationbar.visible){a();return}if(navigator.mozApps.getSelf){var c=navigator.mozApps.getSelf();c.onsuccess=function(){c.result?a():b()};c.onerror=b}else b()}f.isFirefoxApp=a}),null);
__d("MPageHeaderLeft",["DOM","MFirefoxAppDetect","$"],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a){if(!g.back_button){var c=b("$")("page");g.back_button=b("DOM").find(c,"a","back-button");g.menu_button=b("DOM").find(c,"a","menu-link")}a.show_back_button?(b("DOM").hide(g.menu_button),b("DOM").show(g.back_button)):(b("DOM").hide(g.back_button),b("DOM").show(g.menu_button))}a=function a(c){var d=window.navigator;d.standalone||g.isMozApp?h(c):g.isMozApp===void 0&&(g.lastConfig=c,b("MFirefoxAppDetect").isFirefoxApp(function(){g.isMozApp=!0,c===g.lastConfig&&(a(c),delete g.lastConfig)},function(){g.isMozApp=!1}))};f.main=a}),null);
__d("MPageHeaderRight",["DOM","Stratcom"],(function(a,b,c,d,e,f){__p&&__p();function g(){return b("DOM").scry(document.body,"*","mChromeHeaderRight")[0]}f.setup=function(a){if(a){var c=g();c&&(b("DOM").setContent(c,a.node||""),b("Stratcom").listen("m:page:unload",null,function(a){b("Stratcom").removeCurrentListener(),b("DOM").setContent(c,"")}))}};f.getChromeHeaderRightContent=function(){var a=g();return a?Array.prototype.slice.call(a.childNodes):null}}),null);
__d("MHeadMeta",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={isExistsByName:function(a){return!!this.getByName(a)},getByName:function(a){__p&&__p();if(document.querySelector)return document.querySelector('head meta[name="'+a+'"]');var b=document.head||document.getElementsByTagName("head")[0];if(!b)return null;b=b.getElementsByTagName("meta");for(var c=0;c<b.length;c++){var d=b[c],e=d.getAttribute("name");if(e===a)return d}return null}};e.exports=a}),null);
__d("MBrowserTheme",["MHeadMeta"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h=!1,i=null;function j(){if(g)return g;g=b("MHeadMeta").getByName("theme-color");return g}a={set:function(a){var b=j();b&&(i===null&&!h&&(i=b.getAttribute("content")),i!==null&&(b.setAttribute("content",a),h=!0))},restore:function(){if(!h)return;var a=j();if(!a)return;i!==null&&(a.setAttribute("content",i),h=!1)}};e.exports=a}),null);
__d("RemoteDevice",["Banzai","Cookie","GeneratedLoggerUtils","MViewport","Run","isInIframe"],(function(a,b,c,d,e,f){__p&&__p();var g=!1,h={init:function(c){__p&&__p();if(!b("isInIframe")()&&!window.APP_ENABLED&&!window.FW_ENABLED){if(/\((?:iPad|iPhone|iPod(?: touch));/.test(navigator.userAgent)){var d=Math.min(screen.width,screen.height),e=Math.max(screen.width,screen.height);d&&e&&(b("Cookie").set("wd",d+"x"+e),b("Cookie").set("m_pixel_ratio",window.devicePixelRatio));c&&c.performHardwareDetection&&c.hashId!==null&&b("Run").onAfterLoad(function(){h.logHardwareInfo(c.hashId||"")});return}d=b("MViewport").getWidth();e=b("MViewport").getScreenHeight();if(!d||!e)return;a.DEFER_COOKIES||b("Cookie").set("wd",d+"x"+e)}},logHardwareInfo:function(a){__p&&__p();if(g)return;g=!0;var c=document.createElement("canvas");if(!c)return;c=c.getContext("webgl")||c.getContext("experimental-webgl");if(!c)return;var d=c.getExtension("WEBGL_debug_renderer_info");if(!d)return;var e="unknown",f="unknown";d!=null&&(e=c.getParameter(d.UNMASKED_RENDERER_WEBGL),f=c.getParameter(d.UNMASKED_VENDOR_WEBGL));c=0;window.navigator&&(c=window.navigator.hardwareConcurrency);d=window.screen.width;var h=window.screen.height,i=Math.min(d,h);d=Math.max(d,h);h={gpu_renderer:e,gpu_vendor:f,logical_cpu_count:c,screen_width_pixel:i,screen_height_pixel:d,device_pixel_ratio:window.devicePixelRatio,hashid:a};b("GeneratedLoggerUtils").log("logger:MHardwareDetectorLoggerConfig",h,b("Banzai").VITAL)}};e.exports=h}),null);
__d("XFeedNUXSaveSeenStateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/nux/seen/save/",{link_id:{type:"String"},key:{type:"String",required:!0},seen:{type:"Bool",defaultValue:!1},env:{type:"Enum",enumType:0}})}),null);
__d("MFeedNUXTooltip",["DOM","MRequest","MViewport","Stratcom","SubscriptionsHandler","XFeedNUXSaveSeenStateController","destroyOnUnload","mixInEventEmitter"],(function(a,b,c,d,e,f){__p&&__p();var g={},h,i={},j,k=0,l=100,m=1,n=0;function o(){h=b("Stratcom").listen("scroll",null,q),b("destroyOnUnload")(p)}function p(){h&&h.remove(),h=null,window.clearTimeout(j),j=null}function q(){__p&&__p();var a=b("MViewport").getHeight();j&&(window.clearTimeout(j),j=null);for(var c in g){var d=g[c],e=d.getNodes(),f=d.getHeadRoom();for(var h=0;h<e.length;h++){var i=e[h].getBoundingClientRect();if(i.top>=f&&i.bottom<=a){r(e[h],d);break}}}}function r(a,b){j=window.setTimeout(function(){b.getContext()!==a&&(b.setContext(a),b.show())},k)}a=function(){"use strict";__p&&__p();function a(a,c,d,e){__p&&__p();g.length||o();if(g[c]||i[c]){d.destroy();return}this.$1=c;this.$2=b("DOM").scry(document.getElementById("page"),"*",a);this.$3=a;this.$4=n;this.$5=d;this.$6=e===0?0:e||l;g[c]=this;var f=new(b("SubscriptionsHandler"))();f.addSubscriptions(this.$5.addListener("show",this.emit.bind(this,"show")),this.$5.addListener("hide",function(){this.emit("hide"),f.release()}.bind(this)));q()}var c=a.prototype;c.destroy=function(){delete g[this.$1],Object.keys(g).length||p()};c.getContext=function(){return this.$5.getContext()};c.getNodes=function(){return this.$2};c.getHeadRoom=function(){return this.$6};c.getIsUnseen=function(){return this.$4===n};c.setContext=function(a){this.$5&&this.$5.setContext(a)};c.show=function(){if(!this.$5||this.$4===m)return;i[this.$1]=!0;this.$4=m;this.$5.show();var a=b("XFeedNUXSaveSeenStateController").getURIBuilder().setString("key",this.$1).setBool("seen",!0);new(b("MRequest"))(a.getURI()).setMethod("POST").send();this.destroy()};c.hide=function(){this.$5&&this.$5.hide()};return a}();b("mixInEventEmitter")(a,{show:!0,hide:!0});e.exports=a}),null);
__d("MFeedReactionsNUX",["BanzaiLogger","MLegacyDataStore","MLiveData","Stratcom","SubscriptionsHandler","requestAnimationFrame"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=c&&c.isCommentNUX;if(a){var e=new(b("SubscriptionsHandler"))();e.addSubscriptions(b("Stratcom").listen("click","like-reaction-flyout",function(c){__p&&__p();var f=c.getNode("like-reaction-flyout"),h=c.getNode("feed-ufi-comments");if(!f||h)return;h=b("MLegacyDataStore").get(f);if(d&&!h.isComment||!d&&h.isComment)return;var i=h.feedback_target||h.feedbackTarget;if(i){var j=b("MLiveData").get(i);e.addSubscriptions(j.listen("change",function(){j.getData().has_viewer_liked&&b("requestAnimationFrame")(function(){a.setContext(c.getTarget()),a.show(),g(i)})}))}}),a.once("hide",function(){e.release()}));d||e.addSubscriptions(b("Stratcom").listen("click","reactions-bling-bar",function(c){var d=c.getNode("mufi-inline").querySelector('a[data-sigil*="like-reaction-flyout"]');if(d){var e=c.getNode("feed-ufi-metadata");e=b("MLegacyDataStore").get(e).feedback_target.toString();g(e);a.setContext(d);a.show();c.kill()}}));b("Stratcom").listen("m:page:unload",null,function(){b("Stratcom").removeCurrentListener(),e.release()})}}function g(a){b("BanzaiLogger").log("WebReactionsNuxLoggerConfig",{feedback_id:a,"interface":"mTouch"})}e.exports.init=a}),null);
__d("MViewportTracking",["invariant","DataAttributeUtils","DOM","FBJSON","MHome","MPopoverVisiblityTracker","MViewport","NavigationMetrics","Stratcom","Style","Vector","Visibility","VisibilityTrackingHelper","gkx","onAfterTTI","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=97,i=200,j=new Map();a=function(){__p&&__p();function a(){this.$2=[],this.debugConsole=!1,this.activeStories={},this.cachedViewportHeight=0,this.discardVPVDIntervalThreshold=9e4,this.vpvdMinDuration=250,this.isLoose=!1,this.isTimeTrackingEnabled=!1,this.latestTimeTrackingTimestamp=0,this.maxScrollPosition=0,this.minSizeToBeVisible=0,this.readStoryIDs={},this.relaxedMinSize=!1,this.trackingHooks=!1,this.vpvdDebug=!1,this.vpvDebug=!1,this.enableAdsAllocationIntegrityLogging=!1}var c=a.prototype;c.getDataFromConfig=function(a){g(0,2199)};c.getStoryID=function(a){g(0,2200)};c.getDataToLog=function(a){g(0,2201)};c.sendDataToLog=function(a){g(0,2202)};c.getTimeout=function(){g(0,2203)};c.getAllStories=function(){g(0,2204)};c.init=function(c){__p&&__p();var d=this;this.isLoose=!!c.is_loose;this.relaxedMinSize=!!c.relaxed_min_size;this.vpvDebug=!!c.vpv_debug;this.isTimeTrackingEnabled=b("gkx")("985697");this.vpvdMinDuration=c.vpvd_min_duration||250;var e=a.shouldRunTrackingAfterTTI();b("MPopoverVisiblityTracker").init();e||(this.cachedViewportHeight=b("MViewport").getHeight());this.getDataFromConfig(c);this.maxScrollPosition=0;this.readStoryIDs=this.getCachedReadStoryIDs()||{};this.$2=[b("Stratcom").listen("m:page:unload",null,this.onUnload.bind(this)),b("Stratcom").listen("m:viewport:update-complete",null,function(){d.cachedViewportHeight=b("MViewport").getHeight()})];c.triggerOverride?this.$2=this.$2.concat(c.triggerOverride.map(function(a){var c=a[0];a=a[1];return b("Stratcom").listen(c,a,d.queueLogAction.bind(d))})):this.$2.push(b("Stratcom").listen("scroll",null,this.queueLogAction.bind(this)));if(this.isTimeTrackingEnabled){this.$2.push((c=b("Visibility")).addListener(c.VISIBLE,function(){return d.startVpvTracking()}));this.$2.push(c.addListener(c.HIDDEN,function(){return d.stopVpvTracking()}))}this.$2.push(b("Stratcom").listen("m:newsfeed:popup-visible",null,function(){d.stopVpvTracking()}),b("Stratcom").listen("m:newsfeed:popup-hidden",null,function(){d.startVpvTracking()}));e?b("onAfterTTI")(function(){d.startVpvTracking()},!1):(this.startVpvTracking(),b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,function(a,c){a=c.event;a==="tti"&&(d.startVpvTracking(),b("NavigationMetrics").removeCurrentListener())}))};c.getFBFeedLocation=function(){return-1};c.unitTestOnlyGetListeners=function(){return[].concat(this.$2)};c.getCachedReadStoryIDs=function(){return null};c.getMinSizeToBeVisible=function(a){if(!this.relaxedMinSize)return i;a="getBoundingClientRect"in a?a.getBoundingClientRect().height:b("Vector").getDim(a).y;return Math.min(i,a*.5)};c.startVpvTracking=function(){this.isTimeTrackingEnabled?this.startRecordingTimeTrackingData():this.fireEvent()};c.stopVpvTracking=function(){this.isTimeTrackingEnabled?this.stopRecordingTimeTrackingData():this.fireEvent()};c.fireEvent=function(){__p&&__p();if(b("VisibilityTrackingHelper").isSnippetFlyoutVisible())return;var a=this.getAllStoriesInView();for(var c=0;c<a.length;c++){var d=a[c],e=this.getStoryID(d);if(!e||e in this.readStoryIDs)continue;this.readStoryIDs[e]=!0;this.sendDataToLog(this.getDataToLog(d));if(this.vpvDebug){e=b("DOM").scry(d,"div")[0];e&&b("Style").set(e,"background-color","#fffbe2")}this.markStoryRead(d);this.fireStoryVisibleHandlers(d)}};c.fireStoryVisibleHandlers=function(a){(j.get(a)||[]).forEach(function(a){return a()}),j["delete"](a)};c.markStoryRead=function(a){};c.queueLogAction=function(){var a=this;this.isLoose?this.$3||(this.$3=b("setTimeoutAcrossTransitions")(function(){a.maxScrollPosition=Math.max(a.maxScrollPosition,b("MViewport").getScrollTop()),a.startVpvTracking(),a.$3=null},100)):(window.clearTimeout(this.$1),this.$1=b("setTimeoutAcrossTransitions")(function(){a.startVpvTracking()},this.getTimeout()))};c.getTimetrackingDataToLog=function(c){var d=b("DOM").scry(c.story,"*","data-is-cta").map(function(a){a=b("DataAttributeUtils").getDataFt(a);a=a&&JSON.parse(a);return a&&a.cta_types}).filter(function(a){return!!a});this.cachedViewportHeight===0&&a.shouldRunTrackingAfterTTI()&&(this.cachedViewportHeight=b("MViewport").getHeight());return{evt:h,fbfeed_location:this.getFBFeedLocation(),story_height:c.story_height,viewport_height:this.cachedViewportHeight,vpvd_start_timestamp:c.evp_ts/1e3,vpvd_time_delta:Math.round(c.vpvd||0),cta_types:d}};c.recordTimeStoryWasInView=function(a){if(this.isTimeTrackingEnabled&&a.vpvd>=this.vpvdMinDuration){var c=this.getTimetrackingDataToLog(a);if(typeof c!=="string"){a=b("DataAttributeUtils").getDataFt(a.story);a&&(c=babelHelpers["extends"]({},c,b("FBJSON").parse(a,e.id)))}this.sendTimetrackingDataToLog(c)}};c.startRecordingTimeTrackingData=function(){this.$4(!1)};c.stopRecordingTimeTrackingData=function(){this.$4(!0)};c.$4=function(a){__p&&__p();this.activeStories||(this.activeStories={});var b=Date.now();this.latestTimeTrackingTimestamp||(this.latestTimeTrackingTimestamp=b);var c=this.getAllStoriesInViewVpvd();this.updateVPVDurations(b);if(this.debugConsole){var d=Object.values(this.activeStories);d.length&&(console.table&&console.table(d))}d=this.updateActiveStories(c,b);this.debugConsole&&(d.length&&(console.table&&console.table(d)));this.recordVPVDurations(c,a);this.latestTimeTrackingTimestamp=a?0:b};c.updateVPVDurations=function(a){var b=a-this.latestTimeTrackingTimestamp;if(b>this.discardVPVDIntervalThreshold)return;b=a-this.latestTimeTrackingTimestamp;for(var c in this.activeStories)Object.prototype.hasOwnProperty.call(this.activeStories,c)&&(this.activeStories[c].vpvd+=b)};c.isVisible=function(a,b){for(var c=0;c<b.length;c++)if(this.getStoryID(b[c])===a)return!0;return!1};c.recordVPVDurations=function(a,b){this.recordVPVDurationsInternal(a,b)};c.recordVPVDurationsInternal=function(a,b){for(var c in this.activeStories)Object.prototype.hasOwnProperty.call(this.activeStories,c)&&((b||!this.isVisible(c,a))&&(this.recordTimeStoryWasInView(this.activeStories[c]),delete this.activeStories[c]))};c.updateActiveStories=function(a,b){var c=[];for(var d=0;d<a.length;d++){var e=this.getStoryID(a[d]);if(!e)break;e in this.activeStories||(this.activeStories[e]={evp_ts:b,story:a[d],vpvd:0,story_height:a[d].offsetHeight},c.push(this.activeStories[e]));this.activeStories[e].ts=b}return c};c.getAllStoriesInView=function(a){a===void 0&&(a=!1);return this.getAllStoriesInViewInternal(a,this.isLoose)};c.getAllStoriesInViewVpvd=function(){return this.getAllStoriesInViewInternal(!1,!1)};c.getAllStoriesInViewInternal=function(a,c){__p&&__p();a===void 0&&(a=!1);c===void 0&&(c=!0);var d=[],e=this.getAllStories(),f=b("MViewport").getScrollTop(),g=b("MViewport").getHeight(),h=g+this.maxScrollPosition-f;for(var i=0;i<e.length;i++){var j=e[i],k=this.getStoryBounds(f,j),l=k.top;k=k.bottom;if(!l&&!k)continue;var m=this.getMinSizeToBeVisible(j);if(!c&&l>g-m)break;m=!c&&l<=g-m&&k>=m||c&&l<h;a&&(k<0||l>g)&&(m=!1);m&&d.push(j)}return d};c.getStoryBounds=function(a,c){if("getBoundingClientRect"in c){var d=c.getBoundingClientRect();return{bottom:d.bottom,top:d.top}}else{d=b("Vector").getPos(c).y-a;return{top:d,bottom:d+b("Vector").getDim(c).y}}};c.cleanup=function(){this.$2.forEach(function(a){return a.remove()}),this.$2=[],j.clear()};c.onUnload=function(){this.stopVpvTracking(),this.cleanup()};c.sendTimetrackingDataToLog=function(a){this.sendDataToLog(a)};a.shouldRunTrackingAfterTTI=function(){return b("MHome").isHome(location.href)&&b("gkx")("676812")};a.addStoryVisibleHandler=function(a,b){j.set(a,[].concat(j.get(a)||[],[b]));return{remove:function(){j.set(a,(j.get(a)||[]).filter(function(a){return a!==b}))}}};return a}();e.exports=a}),null);
__d("MCommentViewportTracking",["Banzai","DataStore","DOM","FBJSON","MParent","MViewportTracking","Stratcom","StratcomManager","compactArray","gkx","onAfterTTI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h={m_group_stories_container:"group",m_newsfeed_stream:"",m_story_permalink_view:"",structured_composer_async_container:"user",root:""};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.loadedReplies=function(){b("Stratcom").invoke("m:commentViewportTracking:loadedReplies")};c.loadedComments=function(){g&&g.isTimeTrackingEnabled&&g.startRecordingTimeTrackingData()};c.singleton=function(a){__p&&__p();if(!g){a={triggerOverride:[["scroll",null],["m:commentViewportTracking:loadedReplies",null],["m:feed-ufi-flyout:comments-displayed",null],["m:ufi:live-comments:render",null],["m:ufi:live-comments:new-comment",null],["m:feed-ufi-flyout:reset",null],["m:page:render:complete",null]]};b("StratcomManager").enableDispatch(document,"scroll");g=new c();g.init(a);g.debugConsole;g.isTimeTrackingEnabled&&(b("MViewportTracking").shouldRunTrackingAfterTTI()?b("onAfterTTI")(function(){g instanceof c&&g.startRecordingTimeTrackingData()},!1):g.startRecordingTimeTrackingData());b("Stratcom").listen("m:page:unload",null,function(){g=null,b("Stratcom").removeCurrentListener()})}};c.registerFlyout=function(a,b){var c;g&&(g.debugConsole,g.streamRoot=a);h=babelHelpers["extends"]((c={},c[a.id]=b||"",c),h)};var d=c.prototype;d.getDataFromConfig=function(){this.debugConsole=b("gkx")("676811"),this.isTimeTrackingEnabled=!0,this.idle_timeout=5e3,this.min_duration_to_log=100,this.min_visible_size=200,this.relaxedMinSize=!0};d.__getRootNode=function(){this.streamRoot||(this.streamRoot=b("compactArray")(Object.keys(h).map(function(a){return document.getElementById(a)}))[0]||null);return this.streamRoot};d.__getStaticTemplateRootNode=function(){this.staticElementRoot||(this.staticElementRoot=document.getElementById("static_templates"));return this.staticElementRoot};d.getAllStories=function(){var a=this.__getRootNode();if(!a)return[];a=b("DOM").scry(this.__getRootNode(),"div","comment-body");return this.__getStaticTemplateRootNode()?a.concat(b("DOM").scry(this.__getStaticTemplateRootNode(),"div","comment-body")):a};d.getTimeout=function(){return this.min_duration_to_log};d.getDataToLog=function(a){return{}};d.getStoryID=function(a){var c=a.getAttribute("data-commentid");return!c?String(b("DataStore").get(a,"token"))||null:c};d.getContainerModule=function(){var a=this.__getRootNode();return!a||!(a.id in h)?"other":h[a.id]};d.getTimetrackingDataToLog=function(a){var c=a.story,d;try{var f=b("MParent").bySigil(a.story,"story-div")||b("MParent").bySigil(a.story,"m-feed-single-story");f&&(d=b("FBJSON").parse(f.getAttribute("data-ft"),e.id))}catch(a){}return{comment_id:this.getStoryID(c),duration_ms:Math.round(a.vpvd),container_module:this.getContainerModule(),mf_story_key:d?d.mf_story_key||d.top_level_post_id:null}};d.sendDataToLog=function(a){if(a.comment_id){this.debugConsole;var c=b("Banzai").isEnabled("comment_vpv_vital")?b("Banzai").VITAL:void 0;b("Banzai").post("comment_vpvd",a,c)}};return c}(b("MViewportTracking"));e.exports=a}),null);
__d("AccessibilityWebAssistiveTechTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndicatedBrowsers=function(a){this.$1.indicated_browsers=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setIsVirtualCursorAction=function(a){this.$1.is_virtual_cursor_action=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={indicated_browsers:!0,is_virtual_cursor_action:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("MPageTitle",[],(function(a,b,c,d,e,f){f.setTitle=function(a){document.title=a}}),null);
__d("FRXFunnelLoggerUtil",["CurrentUser"],(function(a,b,c,d,e,f){a={getSessionKey:function(a){var c=b("CurrentUser").getAccountID();if(a==null)return c;else return c+"#"+a}};e.exports=a}),null);
__d("MFRXWebFunnelLogger",["Event","FRXFunnelLoggerUtil","Stratcom","WebFunnelLogger"],(function(a,b,c,d,e,f){__p&&__p();var g={startcomListeners:[],get:function(a,c){c=b("FRXFunnelLoggerUtil").getSessionKey(c);return new(b("WebFunnelLogger"))("FRXMSiteFunnelDefinition").setAction(a).setSessionKey(c)},createFunnelTagList:function(a,b,c){return["entry_point: "+a,"is_frx: true","object_id: "+b,"surface: "+c]},attachClickLogging:function(a,c,d,e,f){b("Event").listen(a,"click",function(a){a=g._getLoggerForXHP(c,d,e,f);a.log()})},removeStratcomListeners:function(){__p&&__p();for(var a=g.startcomListeners,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;d.remove()}g.startcomListeners=[]},attachStratcomClickLogging:function(a,c,d,e,f){a=b("Stratcom").listen("click",a,function(a){a=g._getLoggerForXHP(c,d,e,f);a.log();b("Stratcom").removeCurrentListener()});g.startcomListeners.push(a)},logEvent:function(a,b,c,d){a=g._getLoggerForXHP(a,b,c,d);a.log()},_getLoggerForXHP:function(a,b,c,d){__p&&__p();a=g.get(a,b);if(c!=null){b=Object.entries(c);for(var c=0;c<b.length;c++){var e=b[c],f=e[0];e=e[1];a.addActionPayload(f,e)}}d!=null&&a.setFunnelTags(d);return a}};e.exports=g}),null);
__d("VirtualCursorStatus",["Event","UserAgent","emptyFunction","setImmediate"],(function(a,b,c,d,e,f){__p&&__p();var g=null,h=null;function i(){h||(h=b("Event").listen(window,"blur",function(){g=null,j()}))}function j(){h&&(h.remove(),h=null)}function a(a){g=a.keyCode,i()}function c(){g=null,j()}if(typeof window!=="undefined"&&window.document&&window.document.createElement){d=document.documentElement;if(d)if(d.addEventListener)d.addEventListener("keydown",a,!0),d.addEventListener("keyup",c,!0);else if(d.attachEvent){f=d.attachEvent;f("onkeydown",a);f("onkeyup",c)}}var k={isKeyDown:function(){return!!g},getKeyDownCode:function(){return g}},l=!1,m=!1,n=null,o=!1;function p(a){__p&&__p();var c=new Set(),d=k.isKeyDown(),e=a.clientX,f=a.clientY,g=a.isPrimary,h=a.isTrusted,i=a.offsetX,j=a.offsetY,n=a.pointerType,o=a.mozInputSource,p=a.WEBKIT_FORCE_AT_MOUSE_DOWN,q=a.webkitForce;a=a.target;var r=a.clientWidth;a=a.clientHeight;e===0&&f===0&&i>=0&&j>=0&&m&&h&&o==null&&c.add("Chrome");l&&m&&!d&&q!=null&&q<p&&i===0&&j===0&&o==null&&c.add("Safari-edge");e===0&&f===0&&i<0&&j<0&&m&&o==null&&c.add("Safari-old");!l&&!m&&d&&g===!1&&h&&n===""&&e===0&&f===0&&i===0&&j===0&&o==null;!l&&!m&&!d&&h&&b("UserAgent").isBrowser("IE >= 10")&&o==null&&(e<0&&f<0?c.add("IE"):(i<0||i>r)&&(j<0||j>a)&&c.add("MSIE"));o===0&&h&&c.add("Firefox");return c}function q(){l=!0,b("setImmediate")(function(){l=!1})}function r(){m=!0,b("setImmediate")(function(){m=!1})}function s(a,c){n===null&&(n=p(a));o=n.size>0;a=a.target.getAttribute("data-accessibilityid")==="virtual_cursor_trigger";c(o,n,a);b("setImmediate")(function(){o=!1,n=null})}d={isVirtualCursorTriggered:function(){return o},add:function(a,c){c===void 0&&(c=b("emptyFunction"));var d=function(a){return s(a,c)};a.addEventListener("click",d);var e=b("Event").listen(a,"mousedown",q),f=b("Event").listen(a,"mouseup",r);return{remove:function(){a.removeEventListener("click",d),e.remove(),f.remove()}}}};e.exports=d}),null);
__d("AccessibilityWebVirtualCursorClickLogger",["AccessibilityWebAssistiveTechTypedLogger","VirtualCursorStatus"],(function(a,b,c,d,e,f){a={init:function(a){var c=this;a.forEach(function(a){b("VirtualCursorStatus").add(a,c._log)},this)},_log:function(a,c,d){d===void 0&&(d=!1),a&&new(b("AccessibilityWebAssistiveTechTypedLogger"))().setIndicatedBrowsers(c).setIsVirtualCursorAction(d).log()}};e.exports=a}),null);