import React from "react";
import face from "./iconos/facebook.svg"
import insta from "./iconos/instagram.svg"
import "./Footer.css";

const Footer = () => {
    return (
        <div className="contenedorFooter">
            <section className="sectionFooter">
                <a className="" href="" role="button">
                    <i className="btn btn-outline-light btn-floating m-1" href="!" role="button" >
                        <img src={face} alt="" /></i>
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-instagram">
                    </i>
                    <img src={insta} alt="" />
                </a>
            </section>
            </div>
        
    );
}

export default Footer; 