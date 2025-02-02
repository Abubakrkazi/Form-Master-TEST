import {useState} from "react"


const useInputState =(defaultValue =null)  =>{

    const [ Value,setValue]=useState(defaultValue);

    const onChange = e =>{
        setValue(e.target.Value);
    }
    //return [Value, handleChange];
    return {
         value,
       onChange,
    }

}
export default useInputState ;