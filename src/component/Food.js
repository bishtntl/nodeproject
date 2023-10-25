import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { NavLink } from "react-router-dom";

function Food() {
    const [fooddata] = useContext(Store)
    return (

        <>
            <h1 className="foodheading">Food</h1>
            <div className="foodtop">
                {fooddata.filter((item) => item.id > 48 && item.id <= 51).map((item, index) => {
                    return (
                        <div className="fooddata" key={index} >
                            <h1 className="headingfood">{item.name}</h1>
                            <NavLink className='navlinktwo' to={`/details/${item.id}` }>     <img src={item.image} className="imagefoodtop" alt="error"/></NavLink>
                            <p className="foodpara">{item.para.slice(0, 190)}...</p>
                        </div>
                    )
                })}
            </div>
            <div className="foodone">

                <div>
                    <h2 className="foodtopstories">Top Stories</h2>

                    {fooddata.filter((item) => item.category === 'Food').map((item, index) => {
                        return (
                            <div key={index} className="foodunderdiv">
                                <h1 className="underdivheadingfood">{item.name}</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>  <img src={item.image} className="underdivimagefood"alt="error" /></NavLink>
                                <p className="underdivparafood">{item.para}</p>
                            </div>
                        )
                    })}
                </div>


                <div>
                    <h2 className="foodtoppost"> Top Postes</h2>
                    {fooddata.filter((item) => item.id >=46 && item.id < 61).map((item, index) => {
                        return (
                            <div key={index} className="underdivtwofood">
                                <h1 className="underdivheadingtwofood">{item.name}</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>   <img className="underdivimagetwofood" src={item.image} alt="error"/></NavLink>
                                <p className="underdivparatwofood" >{item.para.slice(0, 105)}... <span>{index +1}</span></p>


                            </div>
                        )

                    })}
                    <div className="advissmentfood">Advertisement</div>
                </div>


            </div>






            <div className="footerfood">

<div className="logosfood">
<img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="Not Found"/>
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg"alt="Not Found"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="error"/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="Not Found"/>


</div>

<div className="location">  <img className="logoonefood" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="Not Found"/></div> <span className="locfood">Gurgaon Haryana</span>




<img className="logoonephonefood" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="Not Found"/><span className="phofood">123467890</span>


<img className="logoonemailfood" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="Not Found"/><span className="emailfood">balambisht467@gmail.com</span>


<div className="gotonavfood">
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
export default Food;