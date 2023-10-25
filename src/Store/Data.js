import React, {createContext, useEffect, useState } from "react";

export const Store =createContext();

const ContextStore=(props)=>{
    const[data,setData]=useState([])  

    useEffect(()=>{
        async function fatchdata(){
            const datafetch= await fetch('https://react-project-one-link.onrender.com/api/dynamic/data')
            const res= await datafetch.json()
            setData(res)
            console.log("responce data",res)


        }
        fatchdata()
    })





return(
<Store.Provider value={[data,setData]}>

{props.children}

{/* <BollyWood/> */}
{/* <HollyWood/> */}


</Store.Provider>
)


}





export default ContextStore;