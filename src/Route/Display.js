import BollyWood from "../component/Bollywood";
import HollyWood from "../component/Hollywood";
import HomeCompo from "../component/Home";
import FitNess from "../component/Fitness";
import Food from "../component/Food";
import TechCompo from "../component/Technologogy";
import ContextStore from "../Store/Data";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import './style.css'
import DetailCompo from "../component/Details";
import NewDetails from "../component/AddnewDetails";
import { useState } from "react";




function Display() {

    const [count, setCount] = useState(false)

    return (
        <>
            <div className="navbar">
              <div className="navtwo">
                <span className="route">The</span><span className="siren">Siren</span>
                </div>




                <div
                    onClick={() => setCount(!count)}
                    className="display"
                   >
                    <i className={`fa-solid ${count ? 'fa-close' : 'fa-bars'}`}></i>
                </div>

            </div>

            <BrowserRouter>
                <div className="box">
                    <NavLink style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} className="navlink" to='/'>Home</NavLink>
                    <NavLink style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} className="navlink" to='/holly'>Hollywood</NavLink>
                    <NavLink style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} className="navlink" to='/bolly'>Bollywood</NavLink>
                    <NavLink style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} className="navlink" to='/fitness'>Fitness</NavLink>
                    <NavLink style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} className="navlink" to='/food'>Food</NavLink>
                    <NavLink style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} className="navlink" to='/tech'>Technology</NavLink>
                </div>


                


              
            
            <div className={count ? 'hambergerlinksShows' : 'hambergerlinksHide'}>
              <ul className="navbar-listResponsive">
                <li className="listresponsive">
                  <NavLink onClick={() => setCount(!count)} to="/" className="navlinkResponsive">
                    Home
                  </NavLink>
                </li>
                <li className="listresponsive">
                  <NavLink onClick={() => setCount(!count)} to="/bolly" className="navlinkResponsive">
                    Bollywood
                  </NavLink>
                </li>
                <li className="listresponsive">
                  <NavLink onClick={() => setCount(!count)} to="/holly" className="navlinkResponsive">
                    Hollywood
                  </NavLink>
                </li>
                <li className="listresponsive">
                  <NavLink onClick={() => setCount(!count)} to="/tech" className="navlinkResponsive">
                    Technology
                  </NavLink>
                </li>
                <li className="listresponsive">
                  <NavLink onClick={() => setCount(!count)} to="/fitness" className="navlinkResponsive">
                    Fitness
                  </NavLink>
                </li>
                <li className="listresponsive">
                    
                  <NavLink onClick={() => setCount(!count)} to="/food" className="navlinkResponsive">
                    Food
                  </NavLink>
                </li>
              </ul>
              </div>













                <ContextStore>
                    <Routes>
                        <Route path="/" element={<HomeCompo />}></Route>
                        <Route path="/holly" element={<HollyWood />}></Route>

                        <Route path="/bolly" element={<BollyWood />}></Route>

                        <Route path="/fitness" element={<FitNess />}></Route>
                        <Route path="/food" element={<Food />}></Route>

                        <Route path="tech" element={<TechCompo />}></Route>
                        <Route path='/details/:id' element={<DetailCompo />}></Route>
                        <Route path='/newdetails/:id' element={<NewDetails />}></Route>

                    </Routes>
                </ContextStore>
            </BrowserRouter>
        </>



    )
}
export default Display;
