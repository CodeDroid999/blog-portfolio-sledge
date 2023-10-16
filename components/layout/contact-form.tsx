import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="contact_section layout_padding">
      <div className="contact_bg_box">
        <div className="img-box">
          <img src="images/contact-bg.jpg" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Get In touch
          </h2>
        </div>
        <div className="">
          <div className="row">
            <div className="col-md-7 mx-auto">
              <form
                id="fs-frm"
                name="simple-contact-form"
                accept-charset="utf-8"
                action="https://formspree.io/f/xwkdbwbw"
                method="post"
              >
                <div className="contact_form-container">
                  <fieldset id="fs-frm-inputs">
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" name="name" id="full-name" placeholder="Enter your full name" required />
                    <label htmlFor="email-address">Email Address</label>
                    <input
                      type="email"
                      name="_replyto"
                      id="email-address"
                      placeholder="enter your email 'example@gmail.com'"
                      required
                    />
                    <label htmlFor="email-subject">Subject</label>
                    <input type="text" name="_subject" id="email-subject" placeholder="Subject:" />
                    <label htmlFor="message">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      id="message"
                      placeholder="Message"
                      style={{ backgroundColor: '#d5d2d25e' }}
                      className="message_input w-100"
                      required
                    ></textarea>
                  </fieldset>
                  <input type="submit" value="Submit" style={{ backgroundColor: '#dd750d' }} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
