import React from "react";

const ArmyItems = ({item, value}) =>  <img src={`/images/${item}.svg`} key={item} height={240}/>

export default ArmyItems;