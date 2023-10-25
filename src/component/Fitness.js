import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { NavLink } from "react-router-dom";


function FitNess(){
    const [fitdata]=useContext(Store)

    return(

        <>
         <h1 className="fitheading">Fitness</h1>
            <div className="fittop">
                {fitdata.filter((item) => item.id >=32 && item.id < 35).map((item, index) => {
                    return (
                        <div className="fitdata" key={index}>
                            <h1 className="headingfit">{item.name}</h1>
                            <NavLink className='navlinktwo' to={`/details/${item.id}` }><img src={item.image}  className="imagefittop" alt="Not Found"/></NavLink>
                            <p className="fitpara">{item.para.slice(0, 190)}...</p>
                        </div>
                    )
                })}
            </div>




        

            <div className="fitone">

                <div>
                    <h2 className="fitdtopstories">Top Stories</h2>

                    {fitdata.filter((item) => item.category==='Fitness').map((item, index) => {
                        return (
                            <div key={index} className="fitunderdiv">
                                <h1 className="underdivheadingfit">{item.name.slice(0,10)}</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>   <img src={item.image} className="underdivimagefit" alt="Not Found" /></NavLink>
                                <p className="underdivparafit">{item.para.slice(0, 400)}</p>
                            </div>
                        )
                    })}
                </div>


                <div>
                    <h2 className="fitdtoppost">Top Postes</h2>
                    {fitdata.filter((item) => item.id >=31 && item.id < 46).map((item, index) => {
                        return (
                            <div key={index} className="underdivtwofit">
                                <h1 className="underdivheadingtwofit">{item.name.slice(0,10)}...</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>    <img className="underdivimagetwofit" src={item.image} alt="Not Found"/></NavLink>
                                <p className="underdivparatwofit" >{item.para.slice(0, 105)}... <span>{index +1}</span></p>


                            </div>
                        )

                    })}
                    <div className="advissmentfit">Advertisement</div>
                </div>


            </div>



            
            <div className="footerfit">

<div className="logosfit">
<img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="Not Found"/>
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="Not Found"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="error"/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="Not Found"/>

</div>
<div className="location">  <img className="logoonefit" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="Not Found"/></div> <span className="locfit">Gurgaon Haryana</span>




<img className="logoonephonefit" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="Not Found"/><span className="phofit">123467890</span>


<img className="logoonemailfit" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="Not Found"/><span className="emailfit">balambisht467@gmail.com</span>


<div className="gotonavfit">
    <p style={{color:'white', fontSize:'1.1em'}}>Click On This Link</p>

<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})}  to='/'>Home</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})}  to='/holly'>Hollywood</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})}  to='/bolly'>Bollywood</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})}  to='/fitness'>Fitness</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})}  to='/food'>Food</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'black':'lightblue'})} to='/tech'>Technology</NavLink>
</div>

</div>

        </>
    )
}
export default FitNess;