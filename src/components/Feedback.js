import React from 'react'
import { FaUsers} from 'react-icons/fa';
import { MdVerified} from 'react-icons/md';
import { AiFillSetting} from 'react-icons/ai';
import "./Feedback.css"
const Feedback = () => {
  return (
    <div className="Feedback-container">
        
        <div className="f-content">
            <div className="f-card ">
                <div className="f-card-icon ic1">
                <FaUsers/>
                </div>
                
                <div className="f-card-content">
                    <h3>500+</h3>
                    <p>Happy customers</p>
                    
                </div>
            </div>
            <div className="f-card ">
                <div className="f-card-icon ic2">
                <MdVerified/>
                </div>
                
                <div className="f-card-content">
                    <h3>5+</h3>
                    <p>Years of experience</p>
                    
                </div>
            </div>
            <div className="f-card">
                <div className="f-card-icon ic3">
                <AiFillSetting/>
                </div>
                
                <div className="f-card-content">
                    <h3>100%</h3>
                    <p>Quality Assurance</p>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Feedback