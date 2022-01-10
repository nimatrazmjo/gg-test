import React from "react";

const ArmyItems = ({item, value}) =>  {
return( value > 0 ?new Array(value).fill("",0,value).map((p, i)=><img src={`/images/${item}.svg`} key={i} width={40}/>): '')
}

export default ArmyItems;