import {useState} from 'react'
import {supabase}from '../lib/supabase.js'

import '../compcss/contacts.css'





function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from('contacts')
            .insert([formData]);
        if (error) {
            console.error('Error:', error.message);
            return;
        }
        alert('Message sent successfully!');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }



    return (
        <>
    <div className="contactsection" >
        <h3 className="contactheading" id="contact">Contact me</h3>
        <div className="contactinfo">
            <p className="contacttext">Email: <a href="mailto:pratikshaa2008@gmail.com">pratikshaa2008@gmail.com</a></p>
            <p className="contacttext">Instagram: <a href="https://www.instagram.com/thepratiksha.page" target="_blank">@thepratiksha.page</a></p>
        </div>
        <form onSubmit={handleSubmit} className="contactform">
            <p className="contactinstruction">Send a message:</p>
            <input type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contactinput"/><br/>
            <input type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contactinput"/><br/>
            <input type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="contactinput"/><br/>
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="contactinput"
            ></textarea><br/>
            <button type="submit" className="sendbutton">
                Send
            </button>
        </form>
    </div>
    </>
    )
}
export default Contact;