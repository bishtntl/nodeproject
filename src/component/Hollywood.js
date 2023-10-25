import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { NavLink } from "react-router-dom";

function HollyWood() {
    const [hollydata] = useContext(Store)
    return (
        <>
            <h1 className="hollyheading">Hollywood</h1>
            <div className="hollytop">
                {hollydata.filter((item) => item.id > 26 && item.id <= 29).map((item, index) => {
                    return (
                        <div className="hollydata" key={index}>
                            <h1 className="headingholly">{item.name}</h1>
                            <NavLink className='navlinktwo' to={`/details/${item.id}` }><img src={item.image}  className="imagehollytop" alt="Not Found" /></NavLink>
                            <p className="hollypara">{item.para.slice(0, 190)}...</p>
                        </div>
                    )
                })}
            </div>





            <div className="hollyone">

                <div>
                    <h2 className="topss" >Top Stories</h2>

                    {hollydata.filter((item) => item.category === 'Hollywood').map((item, index) => {
                        return (
                            <div key={index} className="hollyunderdiv">
                               <h1 className="underdivheading">{item.name.slice(0,10)}</h1>  
                               <NavLink className='navlinktwo' to={`/details/${item.id}` }>       <img src={item.image} className="underdivimage" alt="Not Found"/></NavLink>
                                <p className="underdivpara">{item.para.slice(0,400)}</p>
                            </div>
                        )
                    })}
                </div>


                <div className="topone">
                    <h2 className="toppp">Top Postes</h2>
                    {hollydata.filter((item) => item.id >=15 && item.id <= 30).map((item, index) => {
                        return (
                            <div key={index} className="underdivtwo">
                                <h1 className="underdivheadingtwo">{item.name.slice(0,10)}</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>      <img className="underdivimagetwo" src={item.image} alt="Not Found"/></NavLink>
                                <p className="underdivparatwo" >{item.para.slice(0,105)}... <span>{index +1}</span></p>


                            </div>
                        )

                    })}
                      <div className="advissmentholly">Advertisement</div>
                </div>
               
              
            </div>




            
            <div className="footerthree">

<div className="logosholly">
<img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="Not Found"/>
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="Not Found"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="error"/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="Not Found"/>


</div>
<div className="location">  <img className="logooneholly" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="Not Found"/></div> <span className="locholly">Gurgaon Haryana</span>




<img className="logoonephoneholly" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="Not Found"/><span className="phoholly">123467890</span>


<img className="logoonemailholly" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="Not Found"/><span className="emailholly">balambisht467@gmail.com</span>


<div className="gotonavholly">
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
export default HollyWood;