import React, { useContext } from "react";
import { Store } from '../Store/Data'
import { NavLink } from "react-router-dom";

const BollyWood = () => {
    const [bollydata] = useContext(Store)


    return (

        <>
            <h1 className="bollyheading">Bollywood</h1>
            <div className="bollytop">
                {bollydata.filter((item) => item.id >= 0 && item.id < 4).map((item, index) => {
                    return (
                        <div className="bollydata" key={index} >
                            <h1 className="headingbolly">{item.name}</h1>
                            <NavLink className='navlinktwo' to={`/details/${item.id}` }><img src={item.image} className="imagebollytop" alt={item.error}/></NavLink>
                            <p className="bollypara">{item.para.slice(0, 190)}...</p>
                        </div>
                    )
                })}
            </div>



            <div className="bollyone">

                <div className="stories">
                    <h2 className="bollytopstories">Top Stories</h2>

                    {bollydata.filter((item) => item.category==='BollyWood').map((item, index) => {
                        return (
                         <div key={index} className="bollyunderdiv">
                                <h1 className="underdivheadingbolly">{item.name}</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }><img src={item.image} className="underdivimagebolly" alt={item.error}/></NavLink>
                                <p className="underdivparabolly">{item.para.slice(0, 300)}</p>
                            </div> 
                        )
                    })}
                </div>


                <div className="bollybolly">
                    <h2 className="bollytoppost">Top Postes</h2>
                    {bollydata.filter((item) => item.id >=1 && item.id < 15).map((item, index) => {
                        return (
                            <div key={index} className="underdivtwobolly">


                                <h1 className="underdivheadingtwobolly">{item.name}</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>  <img className="underdivimagetwobolly" src={item.image} alt={item.error}/></NavLink>
                                <p className="underdivparatwobolly" >{item.para.slice(0, 105)}...
                                <span>{index +1}</span></p>


                            </div>
                        )

                    })}
                    <div className="Advertisementbolly">Advertisementbolly</div>
                </div>


            </div>
            
            <div className="footertwo">

<div className="logosbolly">
<img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="Not Found"/>
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="Not Found"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="error"/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="Not Found"/>

</div>
<div className="location">  <img className="logoonebolly" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="Not Found"/></div> <span className="locbolly" >Gurgaon Haryana</span>




<img className="logoonephonebolly" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="Not Found"/><span className="phobolly">123467890</span>


<img className="logoonemailbolly" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="Not Found"/><span className="emailbolly">balambisht467@gmail.com</span>


<div className="gotonavbolly">
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
export default BollyWood;