import { useRef, useEffect } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus(); // Automatically focus on name input when component mounts
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", nameRef.current.value);
        console.log("Email:", emailRef.current.value);
        console.log("Password:", passwordRef.current.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="Enter your name" />
                <br />
                <input ref={emailRef} type="email" name="email" placeholder="Enter your email" />
                <br />
                <input ref={passwordRef} type="password" name="password" placeholder="Enter your password" />
                <br />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default RefForm;
