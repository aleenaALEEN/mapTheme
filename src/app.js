import React from "react";
import Navbar from "./components/Navbar";
import "./style.css";
import Header from "./components/header";
import About from "./components/about";
import Menu from "./components/menu";
import Contact from "./components/contact";
import Footer from "./components/footer";


export default class App extends React.Component {
    render(){
        return(
            <>
            <Navbar/>
            <Header/>
            <About/>
            <Menu/>
            <Contact/>
            <Footer/>
            </>
        )
    }
}