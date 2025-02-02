import { useState } from "react";

// Corrected useInputState hook
const useInputState = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return { value, onChange: handleChange }; // Returning an object instead of an array
};

const HookForm = () => {
    // Correct usage of custom hook
    const emailState = useInputState("kaziabubakr87@gmail.com");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", emailState.value); // Now emailState has a 'value' property
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default HookForm;


