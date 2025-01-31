import React, { useState } from 'react';

const StatefulForm = () => {
    const [name,setName]=useState(" kazi ");
    const [email,setEmail] =useState( null);
    const [password,setPassword]= useState(null);
    const [error,setError] = useState('');

    const handleSubmit = e => {
       e.preventDefault();
     if( password.length <5){
        setError('Password must be 5 characters.')
     }

     else{
        setError('');
        console.log(name, email ,password);
     }
       
    }
    const handleEmailchange =e =>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        
        setPassword(e.target.value)
    }

    const onChangeName = e=> {
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
           value ={name} onChange={  onChangeName }
            
            type="text" name = "name" />
            <br />
            <input
              onChange={handleEmailchange}
            type="email" name="email" id ="" />
            <br />
           <input 
             onChange={handlePasswordChange}
           type="password" name="password"  required />
            <br />
             <input type="submit" value="SUBMIT" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefulForm;