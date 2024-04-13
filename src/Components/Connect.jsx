import React, { useState } from "react";
import style from "../style/Connect.module.css";
import "../style/common.css";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });


  const connectMainClassName = style.connectmain;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your actual EmailJS service details
    const serviceId = 'service_lyy49tv';
    const templateId = 'template_ip9ls99';
    const userId = 'ax2_dvSSmETUsS5BE';

    emailjs.send(serviceId, templateId, formData, userId)
        .then((response) => {
            console.log('Email sent successfully:', response);
            toast.success('Message sent successfully!');
            setFormData({
            name: '',
            contact: '',
            message: '',
            });
        })
        .catch((error) => {
            console.error('Email failed to send:', error);
            toast.error('Failed to send message. Please try again.');
        });
    };

    return (
        <div id="connect" className={connectMainClassName}>
            <div className="connect-form-outer-box">
            <p className="heading-common-txt">Lets Connect</p>
                <form className="form-main" onSubmit={handleSubmit}>
                    <ToastContainer />
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-txt"
                    placeholder="Name"
                    required
                    />
                    <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="form-txt"
                    placeholder="Email/Phone"
                    required
                    />
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-txtarea"
                    placeholder="Message"
                    required
                    />
                    <input type="submit" value="Send" className="submit-btn" />
                </form>
            </div>
        </div>
    );
};

export default Connect;
