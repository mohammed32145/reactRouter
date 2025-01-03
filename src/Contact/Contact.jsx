import React from 'react';
import './Contact.css'

let Contact = () => {
    return (
        <div className="container Contact">
            <div className="row">
                <div className="col-md-12 text-center">
                    <form className="w-50 p-3 mx-auto mt-5">
                        <input id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative my-3" />
                        
                        <input id="userAge" type="text" placeholder="userAge" name="userAge" className="form-control border-0 border-bottom py-3 position-relative my-3"  />
                        
                        <input id="userEmail" type="text" placeholder="userEmail" name="userEmail" className="form-control border-0 border-bottom py-3 position-relative my-3" />
                        
                        <input id="userPassword" type="text" placeholder="userPassword" name="userPassword" className="form-control border-0 border-bottom py-3 position-relative my-3" />
                        
                        <button type="submit" className="btn mt-4 text-white" style={{ backgroundColor: '#1abc9c' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
