import{r as d,j as e}from"./jsx-runtime-56DGgGmo.js";/* empty css                */import{k as c,F as x}from"./components-j7OKG51C.js";import"./index-qfmGOeiF.js";function b(){const a=c(),[l,s]=d.useState(null),i=t=>{const n=t.target.files?t.target.files[0]:null;if(n){const r=new FileReader;r.onloadend=()=>{s(r.result)},r.readAsDataURL(n)}},o=()=>{s(null)};return e.jsx("div",{className:"flex items-center justify-center min-h-screen backdrop-blur-3xl bg-gradient-animation",children:e.jsx("div",{className:"flex bg-gray-100 bg-opacity-80 rounded-3xl shadow-lg p-8 max-w-xl w-full",children:e.jsx("div",{className:"flex justify-center p-10",children:e.jsxs(x,{encType:"multipart/form-data",method:"post",className:"w-full max-w-lg font-sans",children:[e.jsxs("div",{className:"flex flex-wrap -mx-3 mb-6",children:[e.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"firstName",children:"First Name"}),e.jsx("input",{className:"text-sm w-full bg-gray-50 border-gray-200 border py-3 px-4 h-9 rounded-[10px] mb-3 focus:outline-none hover:bg-gray-100",name:"firstName",id:"first-name",type:"text",placeholder:"First Name"})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"lastName",children:"Last Name"}),e.jsx("input",{className:"text-sm w-full bg-gray-50 border-gray-200 border py-3 px-4 h-9 rounded-[10px] mb-3 focus:outline-none hover:bg-gray-100",name:"lastName",id:"last-name",type:"text",placeholder:"Last Name"})]})]}),e.jsx("div",{className:"flex flex-wrap -mx-3 mb-6",children:e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"instituteDetails",children:"Institute Details"}),e.jsx("input",{className:"text-sm w-full bg-gray-50 border-gray-200 border py-3 px-4 h-9 rounded-[10px] mb-3 focus:outline-none hover:bg-gray-100",name:"collegeName",id:"college-name",type:"text",placeholder:"Enter College Name"}),e.jsx("input",{className:"text-sm w-full bg-gray-50 border-gray-200 border py-3 px-4 h-9 rounded-[10px] mb-3 focus:outline-none hover:bg-gray-100",name:"universityName",id:"university-name",type:"text",placeholder:"Enter University Name"}),e.jsx("input",{className:"text-sm w-full bg-gray-50 border-gray-200 border py-3 px-4 h-9 rounded-[10px] mb-3 focus:outline-none hover:bg-gray-100",name:"universityEmail",id:"university-email",type:"text",placeholder:"Enter University Email ID"}),e.jsx("input",{className:"text-sm w-full bg-gray-50 border-gray-200 border py-3 px-4 h-9 rounded-[10px] mb-3 focus:outline-none hover:bg-gray-100",name:"enrollmentId",id:"enrollment-id",type:"text",placeholder:"Enter Enrollement ID"})]})}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"collegeId",children:"College ID"}),e.jsx("div",{className:"flex flex-col items-center justify-center w-full",children:e.jsxs("label",{htmlFor:"dropzone-file",className:"h-28 flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[e.jsx("svg",{className:"w-8 h-8 mb-4 text-gray-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),e.jsxs("p",{className:"mb-2 text-sm text-gray-500",children:[e.jsx("span",{className:"font-semibold",children:"Click to upload"})," or drag and drop"]}),e.jsx("p",{className:"text-xs text-gray-500",children:"SVG, PNG, JPG or GIF (MAX. 800x400px)"})]}),e.jsx("input",{id:"dropzone-file",name:"collegeId",type:"file",className:"hidden",accept:"image/*",onChange:i})]})}),e.jsx("div",{className:"flex justify-center",children:l&&e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:l,alt:"Uploaded Preview",className:"h-32 w-auto object-contain rounded-md border"})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"button",className:"mt-2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 my-3",onClick:o,children:"Remove File"})})]})})]}),e.jsxs("div",{className:"flex flex-wrap -mx-3 mb-2",children:[e.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"city",children:"City"}),e.jsx("input",{className:"text-sm w-full bg-gray-50 border-gray-200 border py-3 px-4 h-11 rounded-[10px] mb-3 focus:outline-none hover:bg-gray-100",name:"city",id:"city",type:"text",placeholder:"Your City"})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"state",children:"State"}),e.jsxs("div",{className:"relative",children:[e.jsxs("select",{className:"text-sm block appearance-none w-full bg-gray-50 border-gray-200 border py-3 px-4 h-11 rounded-[10px] mb-3 focus:outline-none hover:bg-gray-100",name:"state",id:"state",defaultValue:"",children:[e.jsx("option",{value:"",children:"Select Your State"}),e.jsx("option",{value:"Andhra Pradesh",children:"Andhra Pradesh"}),e.jsx("option",{value:"Arunachal Pradesh",children:"Arunachal Pradesh"}),e.jsx("option",{value:"Assam",children:"Assam"}),e.jsx("option",{value:"Bihar",children:"Bihar"}),e.jsx("option",{value:"Chhattisgarh",children:"Chhattisgarh"}),e.jsx("option",{value:"Goa",children:"Goa"}),e.jsx("option",{value:"Gujarat",children:"Gujarat"}),e.jsx("option",{value:"Haryana",children:"Haryana"}),e.jsx("option",{value:"Himachal Pradesh",children:"Himachal Pradesh"}),e.jsx("option",{value:"Jharkhand",children:"Jharkhand"}),e.jsx("option",{value:"Karnataka",children:"Karnataka"}),e.jsx("option",{value:"Kerala",children:"Kerala"}),e.jsx("option",{value:"Madhya Pradesh",children:"Madhya Pradesh"}),e.jsx("option",{value:"Maharashtra",children:"Maharashtra"}),e.jsx("option",{value:"Manipur",children:"Manipur"}),e.jsx("option",{value:"Meghalaya",children:"Meghalaya"}),e.jsx("option",{value:"Mizoram",children:"Mizoram"}),e.jsx("option",{value:"Nagaland",children:"Nagaland"}),e.jsx("option",{value:"Odisha",children:"Odisha"}),e.jsx("option",{value:"Punjab",children:"Punjab"}),e.jsx("option",{value:"Rajasthan",children:"Rajasthan"}),e.jsx("option",{value:"Sikkim",children:"Sikkim"}),e.jsx("option",{value:"Tamil Nadu",children:"Tamil Nadu"}),e.jsx("option",{value:"Telangana",children:"Telangana"}),e.jsx("option",{value:"Tripura",children:"Tripura"}),e.jsx("option",{value:"Uttar Pradesh",children:"Uttar Pradesh"}),e.jsx("option",{value:"Uttarakhand",children:"Uttarakhand"}),e.jsx("option",{value:"West Bengal",children:"West Bengal"}),e.jsx("option",{value:"Andaman and Nicobar Islands",children:"Andaman and Nicobar Islands"}),e.jsx("option",{value:"Chandigarh",children:"Chandigarh"}),e.jsx("option",{value:"Dadra and Nagar Haveli and Daman and Diu",children:"Dadra and Nagar Haveli and Daman and Diu"}),e.jsx("option",{value:"Lakshadweep",children:"Lakshadweep"}),e.jsx("option",{value:"Delhi",children:"Delhi"}),e.jsx("option",{value:"Puducherry",children:"Puducherry"}),e.jsx("option",{value:"Ladakh",children:"Ladakh"}),e.jsx("option",{value:"Jammu and Kashmir",children:"Jammu and Kashmir"})]}),e.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:e.jsx("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]})]}),e.jsx("div",{className:"flex flex-wrap -mx-3 mb-6",children:e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"password",children:"Password"}),e.jsx("input",{className:"text-sm w-full bg-gray-50 border-gray-200 border py-3 px-4 h-9 rounded-[10px] mb-3 focus:outline-none hover:bg-gray-100",name:"password",id:"password",type:"password",placeholder:"Enter Password"}),e.jsxs("p",{className:"text-gray-600 text-xs italic",children:["Make sure your password is:",e.jsx("br",{}),"- at least 8 characters long.",e.jsx("br",{}),"- at least 1 Uppercase letter along with Lowercase.",e.jsx("br",{}),"- contains a combination of alpha-numeric and special characters.",e.jsx("br",{})]})]})}),e.jsxs("div",{className:"flex justify-center",children:[e.jsx("button",{type:"submit",className:"bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-800 transition",children:"Submit & Sign In"}),(a==null?void 0:a.error)&&e.jsx("p",{className:"text-red-500 text-sm mt-2",children:a.error}),(a==null?void 0:a.success)&&e.jsx("p",{className:"text-green-500 text-sm mt-2",children:a.success})]})]})})})})}export{b as default};
