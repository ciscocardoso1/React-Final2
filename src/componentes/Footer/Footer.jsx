import React from "react";
import face from "./iconos/facebook.svg"
import insta from "./iconos/instagram.svg"
import whatsapp from "./iconos/whatsapp.svg"
import "./Footer.css";

const Footer = () => {
    return (
        <div className="contenedorFooter">
            <section className="sectionFooter">



                <a className="" href="https://www.facebook.com/%E1%B4%AC%E1%B5%81%E1%B4%BF%E1%B4%AC-101952221596856/" role="button">
                    <i className="btn btn-outline-light btn-floating m-1">
                        <img src={face} alt="" /></i>
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/design.aura.mdp/" role="button">
                    <i className="fab fa-instagram">
                        <img src={insta} alt="" /></i>
                </a>
            </section>


            <div className="whatsapp">
                <a className="whatsappButton" href="https://api.whatsapp.com/send?phone=2235399975" role="button"><i
                    className="whatsapp"><img src={whatsapp} alt="" /></i>
                </a>
            </div>
        </div>

    );
}

export default Footer; 