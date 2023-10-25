import React from "react";
import { useNavigate } from "react-router-dom";

function NewDetails(){
    const Navi=useNavigate()
    return(
        <>
        <button onClick={()=>Navi('/details')}>Go Back</button>
        <>this is new</>
        </>
    )
}
export default NewDetails;