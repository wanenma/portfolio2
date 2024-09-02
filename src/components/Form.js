import "./Form.css";
import React from "react";
const Form = () => {
    return (
    <div className="form">
        <form>
            <label>Name</label>
            <input type="text" required />
            <label>Email</label>
            <input type="email" required />
            <label>Message</label>
            <textarea rows="6" placeholder="t7ib twasil misaj iktbi hna" required></textarea>
            <button className="btn">Submit</button>
        </form>    
    </div>
    
)}

export default Form