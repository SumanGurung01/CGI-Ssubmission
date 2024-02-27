import React from "react";
import "./App.css";

function App() {
    return (
        <div>
            <header>
                <img alt="company logo" src={require("./assets/logo.png")} />
            </header>
            <main>
                <div className="main__container">
                    <div className="award__container">
                        <img
                            alt="award"
                            src={require("./assets/1.png")}
                            className="main__image1"
                        />
                    </div>
                    <div
                        className="main__content"
                        style={{
                            fontWeight: "600",
                            fontSize: "14px"
                        }}
                    >
                        <h3
                            style={{
                                fontWeight: "900",
                                fontSize: "14px"
                            }}
                            className="text"
                        >
                            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION
                            AWARD 2018 for the 4th time.
                        </h3>
                        <ul>
                            <li>
                                C.R.I.'s energy efficient products are well
                                recognized by various Government Institutions,
                                as trustworthy products for various projects
                                across the globe to save energy.
                            </li>
                            <li>
                                {" "}
                                C.R.I. is the highest contributor in the country
                                for the projects of EESL (Energy Efficiency
                                Services Limited) to replace the old inefficient
                                pumps with 5 Star rated energy efficient smart
                                pumps with IoT enabled control panel.{" "}
                            </li>
                        </ul>
                        <img
                            alt="award recieving"
                            src={require("./assets/2.png")}
                            className="main__image2"
                        />
                        <p>
                            Government of India has awarded the "National Energy
                            Conservation Award 2018". Mr. G. Selvaraj, Joint
                            Managing Director of C.R.I. Group received the award
                            from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
                            Shri. Raj Kumar Singh, Honorable Minister of State.
                        </p>
                    </div>
                </div>
            </main>
            <div className="secondary__container">
                <div
                    style={{
                        fontWeight: "600",
                        borderBottom: "2px solid rgb(215, 40, 40)",
                        fontSize: "14px"
                    }}
                >
                    <p>
                        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE
                        COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN
                        9,000 MILLION UNITS OF POWER FOR THE NATION.{" "}
                    </p>
                    <img
                        alt="equipments"
                        src={require("./assets/3.png")}
                        className="main__image3"
                    />
                    <p>
                        Valves - Pumps - Pipes - IoT Drives & Controllers -
                        Wires & Cables - Solar Systems - Motors{" "}
                    </p>
                </div>
                <div className="last__section">
                    <div>
                        <h3
                            style={{
                                fontWeight: "900",
                                fontSize: "16px"
                            }}
                            className="text"
                        >
                            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE
                            SEGMENTS
                        </h3>
                        <p
                            style={{
                                textAlign: "center",
                                margin: "5px 0px 30px 0px",
                                fontWeight: "600"
                            }}
                        >
                            CHEMICALS & PROCESS<span> | </span>POWER
                            <span> | </span>
                            WATER & WASTE WATER<span> | </span>OILS & GAS
                            <span> | </span>
                            PHARMA<span> | </span>SUGARS & DISTILLERIES
                            <span> | </span>
                            PAPER & PULP<span> | </span>MARINE & DEFENCE
                            <span> | </span>
                            METAL & MINING<span> | </span>FOOD & BEVERAGE
                            <span> | </span>PETROCHEMICAL & REFINERIES
                            <span> | </span>
                            SOLAR
                            <span> | </span>BUILDING<span> | </span>HVAC
                            <span> | </span>
                            FIRE FIGHTING
                            <span> | </span>AGRICULTURE & RESIDENTIAL
                        </p>
                    </div>
                </div>
            </div>
            <br></br>
            <footer>
                <div className="footer__container">
                    <div>
                        <img
                            alt="logo"
                            src={require("./assets/fb.png")}
                            className="logo__image"
                        />
                        <p>Toll free 1800 200 1234</p>
                    </div>
                    <div>
                        <img
                            alt="logo"
                            src={require("./assets/phone.jpg")}
                            className="logo__image"
                        />
                        <p>www.facebook.com/cripumps</p>
                    </div>
                    <div>
                        <img
                            alt="logo"
                            src={require("./assets/internet.jpg")}
                            className="logo__image"
                        />
                        <p>www.crigroups.com</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
