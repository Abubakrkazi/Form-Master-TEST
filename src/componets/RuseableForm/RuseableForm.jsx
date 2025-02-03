const ReusableForm = ({ fromTitle,children,handleSubmit, submitBtnText = "SUBMIT" }) => {
    
    const handleLocalSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value, // Fixed typo
        };
        handleSubmit(data);
    };

    return (
        <div>
        {children}
            <form onSubmit={handleLocalSubmit}> {/* Fixed onSubmit handler */}
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" /> {/* Fixed input name */}
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;
