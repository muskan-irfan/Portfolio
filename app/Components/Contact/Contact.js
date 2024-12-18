'use client';
import React from 'react'
import './Contact.css'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5d4355e0-e76f-4f70-88c5-3cc8a1b8ca7e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <>
    <div id='contact' className='contact-section'>
      <h1>Get in touch</h1>
      <div className='contact-row'></div>
      <div className='contact-row1'></div>
      <div className='contact-info'>
                        {/* Contact Left Info Start */}
         <div className='contact-info-left'>
          <h3>Let's Talk </h3><br/>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime. </p>
          <p><span>Email:</span> muskanirfan1374@gmail.com</p>
          <p><span>Phone:</span> 0316-0957417</p>
          <p><span>Location:</span> Peshawar</p>
         </div>
                        {/* Contact Left Info Ends   */}
                        {/* Contact Right Info Start */}
         
         <form onSubmit={onSubmit} className='contact-info-right'>
          <label htmlFor=''> Your Name</label>
          <input type='text' placeholder='Enter your Name ' name='name'></input>
          <label htmlFor='text'> Your Email</label>
          <input type='email' placeholder='Enter your Email ' name='email'></input>
          <label htmlFor='email'> Your Message </label>
          <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className='submit-btn'>Submit</button>
         </form>
                        {/* Contact Right Info Ends  */}
      </div>
    </div>
    </>
  )
}

export default Contact
