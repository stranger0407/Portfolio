import { FormStyled } from "./FormStyled"


import { useState, type FormEvent } from "react";

export default function Form() {
   const [result, setResult] = useState("");
 
   const onSubmit = async (event:FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     setResult("Sending....");
     const formData = new FormData(event.target as HTMLFormElement);
 
     formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");
 
     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       body: formData
     });
 
     const data = await response.json();
 
     if (data.success) {
       setResult("Form Submitted Successfully");
       (event.target as HTMLFormElement).reset();
       setTimeout(() => setResult(""), 3000);
     } else {
       console.log("Error", data);
       setResult(data.message);
     }
   };
 
   return (
     <FormStyled>
       <form onSubmit={onSubmit} id="form">
         <input id="name" type="text" name="name" placeholder="Name"  required/>
         <input type="email" id="email" name="email" placeholder="Email"  required/>
         <textarea name="message" id ="messege" placeholder="Write Your Messege"  required></textarea>
 
         <button type="submit">Submit Form</button>
 
       </form>
       <span>{result}</span>
 
     </FormStyled>
   );
 }