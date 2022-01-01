import React, {useState} from "react";

const App = () => {
    const [fullName, setFullName] = useState({
        fname:"", 
        lname:"", 
        email:"", 
        phone: "",
    });


    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const {name,value} = event.target;

        setFullName((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            }
            
        });
    };

    const onSubmit = (event) => {
        event.preventDefault(); 
        alert('Form submitted');
    
    }

    return(
        <>
        <form onSubmit={onSubmit}>
        <div className="main_div">
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <input type= 'text' 
            placeholder="Enter Your Firstame" 
            name= 'fname' 
            onChange={inputEvent} 
            value={fullName.fname}/>
            <br/>
            <input type= 'text' 
            placeholder="Enter Your Lastname" 
            name= 'lname' 
            onChange={inputEvent} 
            value={fullName.lname}/>
            <br/>
            <input type= 'email' 
            placeholder="Enter Your email" 
            name= 'email' 
            onChange={inputEvent} 
            value={fullName.email} 
            autoComplete="off"/>
            <br/>
            <input type= 'number' 
            placeholder="Enter Your phone number" 
            name= 'phone' 
            onChange={inputEvent} 
            value={fullName.phone}/>

            <button type="submit">Submit</button>
        </div>
        </form>
        </> 
    );
}

export default App;