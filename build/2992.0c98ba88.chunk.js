"use strict";(self.webpackChunkdemo_1=self.webpackChunkdemo_1||[]).push([[2992],{2992:(K,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var o=_(92132),a=_(86),n=_(26345),T=_(21272),C=_(2129),R=_(5409),i=_(77043),U=_(15126),v=_(63299),W=_(67014),t=_(59080),l=_(79275),L=_(14718),I=_(82437),d=_(61535),O=_(5790),A=_(12083),M=_(35223),E=_(74930),D=_(2600),B=_(48940),P=_(41286),h=_(56336),r=_(13426),f=_(84624),g=_(77965),S=_(54257),y=_(71210),N=_(51187),j=_(39404),V=_(58692),F=_(501),X=_(57646),x=_(23120),H=_(44414),$=_(25962),c=_(14664),G=_(42588),z=_(90325),J=_(62785),Y=_(87443),Q=_(41032),Z=_(22957),e=_(93179),u=_(73055),p=_(15747),k=_(85306),w=_(26509),b=_(32058),q=_(81185),__=_(82261),E_=_(62482),t_=_(20489),s_=_(39235),O_=_(21587),M_=_(72810),D_=_(18022),P_=_(67031);const m=()=>((0,n.u)(),(0,o.jsx)(a.e,{}))},26345:(K,s,_)=>{_.d(s,{u:()=>W});var o=_(21272),a=_(2129),n=_(67031),T=_(54894),C=_(17703),R=_(77043);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",W=()=>{const{formatMessage:t}=(0,T.A)(),{license:l,isError:L,isLoading:I}=(0,R.m)(),d=(0,a.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:A,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=l??{};o.useEffect(()=>{if(L||I)return;const B=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),B&&d({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:A,permittedSeats:M}),link:{url:D?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,I,M,E,A,D,L])}}}]);
