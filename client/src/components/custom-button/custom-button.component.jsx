import React from "react";

const CustomButton = ({children, ...otherProps}) => (
<button  className="block bg-teal-600 text-white rounded-full cursor-pointer hover:bg-teal-700 duration-200 transition-all" {...otherProps}>{children}</button>
)
export default CustomButton