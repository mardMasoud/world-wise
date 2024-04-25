import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import City from "./components/City";
import CityList from "./components/CityList";
export default function App() {
    const [cities,setCities]=useState([])
    useEffect(function(){
        async function fetchcity(){
            const res = await fetch('http://localhost:8000/cities')
            const data =await res.json()
     
            setCities(data)
        }
        fetchcity()
    },[])
    return (
      
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="product" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="app" element={<AppLayout/>}>
                        <Route index  element={<CityList/>} cities={cities}/>
                        <Route path="cities" element={<CityList cities={cities}/>}/>
                        <Route path="countries" element={<p>List Of countries</p>}/>
                        <Route path="form" element={<p>form</p>}/>
                      <Route path="cities/:id" element={<City cities={cities}/>}/>
                        <Route path="login" element={<Login/>}/>
                    </Route>
                    <Route path="login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
      
    );
}
