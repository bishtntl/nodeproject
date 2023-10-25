import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import './style.css'


function DetailCompo() {
    //    const id=useParams()
    //    const [ContextDta]= useContext(Store)
    const Navi = useNavigate()
    //    console.log(id)




    const [contextdata] = useContext(Store);

    const { id } = useParams();
    const dynamicImg = contextdata[id].category;
    console.log(dynamicImg)

    const selectedItem = contextdata.find((item) => item.id === parseInt(id));
    console.log(selectedItem.image)


    return (
        <>
       <div className="parent">
        
        <div className="innerman">
        <img src="https://tse3.mm.bing.net/th?id=OIP.Kf-A4bhyw6NFAggbsk3cdwHaIU&pid=Api&P=0&h=180" alt="Not Found" className="men"/><span className="balam"> Balam Bisht</span>
        <h4 className="time">Sep 21,2023 Read 5 Min</h4>
        </div>
        <div className="outerlogo">
            <img className="logodtl" src="https://www.verfvanniveau.nl/wp-content/uploads/2019/08/logo-social-fb-facebook-icon.png"  alt="Not Found"/>
            <img className="logodtl" src="https://tse2.mm.bing.net/th?id=OIP.A_QLZ7Y9nBwaWnkhCbvGmQHaHZ&pid=Api&P=0&h=180" alt="Not Found"/>
            <img className="logodtl" src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png" alt="Not Found"/>
            <img className="logodtl" src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" alt="Not Found"/>
        </div>
       

       </div>






        <div className="main">
            <div className="dtl">
                <img src={selectedItem.image} alt='Not Found' className="dtlimage" />
                <h1 className="detailheading">{selectedItem.name}</h1>
                <p className="detailpara">{selectedItem.para}</p>
            </div>
            </div>




            <div className="detailsthree">
                {contextdata.filter((item) => (item.category === dynamicImg) && (item.id % 5 === 1 || item.id % 3 === 2 || item.id % 3 === 0)).slice(0, 3).map((element, index) => {
                    return (
                        <div key={index}>
                            <div className="dtltwo" >
                            <NavLink className='navlinktwo' to={`/details/${element.id}` }>
                                    <img src={element.image} alt="Not Found" className="detailsimage" />
                                </NavLink>
                                <h1 className="detaisheadingone">{element.name}</h1>
                                <p className="detailsparaone" >{element.para.slice(0,150)}</p>
                            </div>
                        </div>
                    )
                })}
            </div>


            <button className="btngoback" onClick={() => Navi('/')}>Go To Home Page</button>


            <div className="footermain">

            <div className="logosdtl">
                <img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="Not Found" />
                <img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="Not Found" />
                <img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="Not Found" />
                <img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="Not Found" />


                </div>
                <div className="location">  <img className="logoonedtl" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="Not Found" /></div> <span className="locdtl">Gurgaon Haryana</span>




                <img className="logoonephonedtl" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="Not Found" /><span className="phodtl">123467890</span>


                <img className="logoonemaildtl" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="Not Found" /><span className="emaildtl">balambisht467@gmail.com</span>


                <div className="gotonavdtl">
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
export default DetailCompo