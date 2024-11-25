import{r as s,a as b,j as e}from"./index-Cd-j0Ewk.js";import{u as y}from"./components-J4jkiaDK.js";function v(){y();const[n,u]=s.useState([]),[l,d]=s.useState(!1),[r,p]=s.useState({title:"",description:""}),x=a=>{a.target.files&&u([...n,...Array.from(a.target.files)])},c=a=>{const{name:t,value:m}=a.target;p(i=>({...i,[t]:m}))},[f,h]=s.useState(!1);s.useEffect(()=>{h(!0)},[]);const o=b(),g=async a=>{a.preventDefault(),d(!0);try{const t=new FormData;if(t.append("title",r.title),t.append("description",r.description),n.forEach(i=>t.append("file",i)),!(await fetch("",{method:"POST",body:t})).ok)throw new Error("Failed to upload file or save metadata");alert("File uploaded and metadata saved successfully!"),o("/dash/{$id}/community-operated")}catch(t){console.error("Error:",t),alert("Failed to upload file or save metadata."),o("/404")}finally{d(!1)}};return e.jsx("div",{className:`flex flex-col gap-4 bg-gray-100 bg-opacity-75 rounded-3xl shadow-lg p-6 w-full transition-opacity duration-1000 ${f?"opacity-100":"opacity-0"}`,children:e.jsxs("div",{className:"p-4 bg-white shadow-md rounded-md",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Study Material"}),e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-medium",children:"Title"}),e.jsx("input",{type:"text",name:"title",value:r.title,onChange:c,required:!0,className:"block w-full text-sm text-gray-500 border border-gray-300 bg-gray-50 focus:outline-none"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-medium",children:"Description"}),e.jsx("textarea",{name:"description",value:r.description,onChange:c,className:"block w-full text-sm text-gray-500 border border-gray-300 bg-gray-50 focus:outline-none"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-medium",children:"Upload Files"}),e.jsx("input",{type:"file",multiple:!0,accept:"image/*,.pdf",onChange:x,required:!0,className:"block w-full text-sm text-gray-500 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"})]}),e.jsx("button",{type:"submit",disabled:l,className:`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md font-medium transition-all duration-200 
            ${l?"bg-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 active:bg-blue-800"} text-white shadow-sm`,children:l?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{className:"animate-spin h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),e.jsx("span",{children:"Uploading..."})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})}),e.jsx("span",{children:"Upload"})]})})]})]})})}export{v as default};
