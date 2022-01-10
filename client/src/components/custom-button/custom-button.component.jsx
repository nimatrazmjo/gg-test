import React from "react";

const CustomButton = ({children,disable, ...otherProps}) => (
<input className="block bg-teal-600 text-white rounded-full cursor-pointer hover:bg-teal-700 duration-200 transition-all disabled:bg-teal-100 disabled:cursor-not-allowed" {...otherProps} />
)
export default CustomButton