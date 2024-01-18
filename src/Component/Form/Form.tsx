
import { TextField, Button } from "@mui/material"
import './Form.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type initValue={
    name : string,
    phoneNumber : number,
    email : string,
}

const initValue ={
    name : "",
    phoneNumber : "",
    email : ""
}

const Form = () => {

    const navigate = useNavigate();

    const [value, setValue] = useState(initValue);

   

    const {name, phoneNumber, email} = value;

    const handlechange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue({
            ...value, [e.target.id] : e.target.value,
        })

    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValue(initValue);
        console.log(value);
        if(value.name === "" || value.phoneNumber === "" || value.email === ""){
            alert('please fill the form');
        }else{
            navigate('/detail');
        }
        localStorage.setItem("user", JSON.stringify({...value}));
    }

  return (
    <form className="react-form" onSubmit={handleSubmit}>
        <h1>Form</h1>
        <TextField
           id="name"
           label="Name" 
           required
           type="text"
           size="small"
           value={name} 
           onChange={handlechange}
           style={{margin : "10px", width : "350px"}} 
             /> <br />

        <TextField 
           id="phoneNumber" 
           label="Phone Number"
           required
           type="text" 
           variant="outlined" 
           value={phoneNumber} 
           onChange={handlechange}
           size="small" 
           style={{margin : "10px", width : "350px"}} 
           /><br />

        <TextField 
            id="email"
            label="Email" 
            required
            type="text"
            variant="outlined" 
            size="small"
            value={email} 
            onChange={ handlechange}
            style={{margin : "10px", width : "350px"}}  
            /> <br />

        <Button type="submit" variant="contained" style={{margin : "20px", border : "none", outline : "none"}}>Submit</Button>
    </form>
  )
}

export default Form
