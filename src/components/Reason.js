import React from 'react'
import { FaUserAlt} from 'react-icons/fa';
import { GiWallet} from 'react-icons/gi';
import { CgSandClock} from 'react-icons/cg';
import "./Reason.css"
const Reason = () => {
  return (
    <div className="reason-container">
        <div className="r-header">
            <h2>Why Choose Us?</h2>
            <p>Choose us and have the best car service</p>
        </div>
        <div className="r-content">
            <div className="r-card ">
                <div className="r-card-icon ic1">
                <FaUserAlt/>
                </div>
                
                <div className="r-card-content">
                    <h3>Customer Satisfaction</h3>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting. </p>
                    <p></p>
                </div>
            </div>
            <div className="r-card ">
                <div className="r-card-icon ic2">
                <GiWallet/>
                </div>
                
                <div className="r-card-content">
                    <h3>Great value for money</h3>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting. </p>
                    <p></p>
                </div>
            </div>
            <div className="r-card">
                <div className="r-card-icon ic3">
                <CgSandClock/>
                </div>
                
                <div className="r-card-content">
                    <h3>Timely service and delivery</h3>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting. </p>
                    <p></p>
                </div>
            </div>
        </div>
        <button className="explore">Explore our offerings</button>
    </div>
  )
}

export default Reason