import{j as L}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const x=({label:l,size:C="normal",color:g="text-primary",fontColor:h="black",allCaps:v=!1})=>L.jsx("span",{className:`${C}  ${g}`,style:{color:h},children:v?l.toUpperCase():l});x.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"The text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"The size of the text",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"All Caps text",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Custom color",defaultValue:{value:"'text-primary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Custom font color",defaultValue:{value:"'black'",computed:!1}}}};const q={title:"MyLabel",component:x,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:{type:"select",options:["normal","h1","h2","h3"]}},label:{control:{type:"text"}},color:{control:{type:"select",options:["text-primary","text-secondary","text-tertiary"]}}}},e={args:{label:"Hello, World!",size:"normal"}},a={args:{label:"All Caps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},t={args:{label:"Custom Color Label",fontColor:"blue"}};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Hello, World!',
    size: 'normal'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    allCaps: true
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,u,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,b,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: 'blue'
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const z=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,t as CustomColor,r as Secondary,z as __namedExportsOrder,q as default};
