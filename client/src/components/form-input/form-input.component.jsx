import React from "react";

const FormInput = ({handleChange, hasError, ...otherProps}) => (
    <input onChange={handleChange} 
    placeholder="167" 
    {...otherProps} 
    className={` ${ hasError!== null ?'border-red-600 text-red-700': ' '} border border-gray-400 rounded-full px-6 py-3 w-full col-span-2`} 
    />
);
export default FormInput;