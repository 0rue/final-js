import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchform from "../Searchform/Searchform";
import "./Header.css"

const Header = () => {
    return (
        <div className="holder">
            <header className="header">
                <Navbar />
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">find your book of chois. </h2><br/>
                    <p className='header-text fs-18 fw-3'>
                     We strive to make your book search as convenient and efficient as possible. Our users are people who value knowledge, art and inspiration, who seek books to immerse themselves in fascinating worlds, enrich their experiences and broaden their horizons.</p>
                    <Searchform />
                </div>
            </header>
        </div>
    )
}
export default Header