(function(t,f,g,h,D,o,e,a,s){"use strict";const{ScrollView:B}=s.General,{FormSection:R,FormRow:n}=s.Forms;function y(){return e.React.createElement(B,null,e.React.createElement(R,null,e.React.createElement(n,{label:"Discord Server",leading:e.React.createElement(n.Icon,{source:a.getAssetIDByName("Discord")}),trailing:n.Arrow,onPress:function(){return e.url.openDeeplink("https://discord.gg/TeRQEPb")}}),e.React.createElement(n,{label:"Reload DB",leading:e.React.createElement(n.Icon,{source:a.getAssetIDByName("ic_message_retry")}),onPress:async function(){return await c()?o.showToast("Reloaded DB",a.getAssetIDByName("check")):o.showToast("Failed to reload DB",a.getAssetIDByName("small"))}})))}const m=g.findByProps("default","getUserBannerURL");let r,l;const c=async function(){try{return r=await(await D.safeFetch("https://usrbg.is-hardly.online/users",{cache:"no-store"})).json(),r}catch(i){f.logger.error("Failed to fetch userBG data",i)}},v=async function(){if(await c(),!r)return o.showToast("Failed to load DB");l=h.after("getUserBannerURL",m,function(i){let[d]=i;const u=r?.find(function(F){return F.uid===d?.id});if(d?.banner===void 0&&u)return u.img})},w=function(){return l?.()},E=y;return t.fetchData=c,t.onLoad=v,t.onUnload=w,t.settings=E,t})({},vendetta,vendetta.metro,vendetta.patcher,vendetta.utils,vendetta.ui.toasts,vendetta.metro.common,vendetta.ui.assets,vendetta.ui.components);
