import React from 'react';


const Form = ({ children, width, ...props }) => {
    return (
        <form noValidate {...props} autoComplete='off'>
            {children}
        </form>
    )
}

export default Form