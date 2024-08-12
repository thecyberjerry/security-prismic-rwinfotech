import React from "react";
import Heroheading from "./minicomponents/Heroheading";
import Button from "./minicomponents/Button";

export default function Contact({ contactData }) {

  return (
    <div className="container-fluid contact">
      {contactData && (
        <div className="contact__form container">
          <div className="contact__heading">
            {contactData?.heading && (
              <Heroheading
                content={{
                  first: contactData?.heading[0]?.first,
                  second: contactData?.heading[0]?.second,
                }}
                reverse={contactData?.heading[0]?.reverse}
              />
            )}
          </div>
          <div className="contact__inputs">
            <form>
              <div className="contact__names">
                <input
                  name="firstname"
                  type="text"
                  placeholder={contactData?.plcholder_first}
                />
                <input
                  name="secondname"
                  type="text"
                  placeholder={contactData?.plcholder_second}
                />
              </div>
              <input
                name="Email"
                type="email"
                placeholder={contactData?.plcholder_email}
              />
              <input
                name="Phone Number"
                type="tel"
                placeholder={contactData?.plcholder_phone}
              />
              <textarea
                name="message"
                type="text"
                placeholder={contactData?.plcholder_msg}
                rows={5}
              />
              <div>{contactData?.btn && <Button btn={contactData?.btn[0]} />}</div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
