import React from 'react';
import style from "./Contact.module.css";
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <form className={style.form}>
          <h1>Contact <span className={style.color}>Us</span></h1><hr/>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Your email.." />

          <label htmlFor="subject">Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: '100px' }} // Corrected the inline style
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
