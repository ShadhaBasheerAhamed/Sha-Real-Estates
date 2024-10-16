import { useState } from "react";
import './Contact.css'; // Add this to import the CSS for animations

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false); // For controlling modal visibility

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                setIsSubmitted(true); // Show the pop-up
                setTimeout(() => {
                    setIsSubmitted(false); // Hide after 3 seconds
                }, 3000);
            } else {
                alert(data.error || 'Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending your message. Please try again later.');
        }
    };

    return (
        <section className="contact">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Contact Us</h1>
                            <h2 className="page-description">Get in Touch for Your Real Estate Needs</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Name</label>
                                        <input 
                                            type="text" 
                                            className="inp-contact" 
                                            name="name" 
                                            value={formData.name} 
                                            onChange={handleChange} 
                                            placeholder="Enter your full name" 
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Phone</label>
                                        <input 
                                            type="text" 
                                            className="inp-contact" 
                                            name="phone" 
                                            value={formData.phone} 
                                            onChange={handleChange} 
                                            placeholder="Enter your phone number" 
                                        />
                                    </div>
                                    <div className="col-lg-12">
                                        <label>Subject</label>
                                        <input 
                                            type="text" 
                                            className="inp-contact" 
                                            name="subject" 
                                            value={formData.subject} 
                                            onChange={handleChange} 
                                            placeholder="Property Inquiry / Consultation Request" 
                                        />
                                    </div>
                                    <div className="col-lg-12">
                                        <label>Message</label>
                                        <textarea 
                                            className="ta-contact" 
                                            rows="4" 
                                            name="message" 
                                            value={formData.message} 
                                            onChange={handleChange} 
                                            placeholder="Describe your needs or questions about real estate" 
                                        ></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="btn-contact" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {isSubmitted && (
                <div className="modal animate">
                    <div className="modal-content">
                        <h2>Message Sent Successfully!</h2>
                        <p>Thank you for reaching out. We will get back to you shortly regarding your real estate inquiry.</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
