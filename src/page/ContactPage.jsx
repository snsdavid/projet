import React from "react";
import Header from './composant/Headercomposant';
import Footer from './composant/Footer';
import Contact from "./composant/NousContacter";
import Entreprise from "./composant/Entreprise";
import MapWithMarkers from "./composant/MapWithMarkers";

const ContactPage = ()=>{
    return (
        <>
            <Header></Header>
            <Entreprise title="Contact"></Entreprise>
            <Contact></Contact>
            <MapWithMarkers></MapWithMarkers>
            <Footer></Footer>
        </>
    )
}

export default ContactPage;
