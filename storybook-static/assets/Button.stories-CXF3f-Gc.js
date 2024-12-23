import{j as f}from"./jsx-runtime-BjgbQsUx.js";import"./index-D2MAbzvX.js";const p=({label:y,onClick:g,variant:b="primary",disabled:o=!1})=>{const v=`py-2 px-4 font-semibold rounded-lg focus:outline-none 
    ${b==="primary"?"bg-primary text-white hover:bg-opacity-80":"bg-secondary text-gray-800 hover:bg-opacity-80"}
    ${o?"opacity-50 cursor-not-allowed":""} 
    transition-colors duration-200`;return f.jsx("button",{className:v,onClick:g,disabled:o,children:y})};p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const k={component:p},e={args:{label:"Primary Button",variant:"primary",onClick:()=>console.log("Primary Button Clicked")}},r={args:{label:"Secondary Button",variant:"secondary",onClick:()=>console.log("Secondary Button Clicked")}},a={args:{label:"Disabled Button",variant:"primary",disabled:!0,onClick:()=>console.log("Disabled Button Clicked")}};var n,t,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Primary Button",
    variant: "primary",
    onClick: () => console.log("Primary Button Clicked")
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Secondary Button",
    variant: "secondary",
    onClick: () => console.log("Secondary Button Clicked")
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Disabled Button",
    variant: "primary",
    disabled: true,
    onClick: () => console.log("Disabled Button Clicked")
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const S=["Primary","Secondary","Disabled"];export{a as Disabled,e as Primary,r as Secondary,S as __namedExportsOrder,k as default};
