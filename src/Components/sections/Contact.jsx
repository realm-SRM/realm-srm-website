import { useState } from "react";

export default function Contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'phone') setPhone(value);
        if (name === 'message') setMessage(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!name || !email || !phone || !message) {
          setResponseMessage("Please fill in all fields.");
          return;
        }
    
        const formData = {
          name: name,
          mail_id: email,
          phone_no: phone,
          text: message,
        };
    
        try {
          setIsSubmitting(true);
    
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
          
          setResponseMessage(data.message)
        } catch (error) {
          setResponseMessage('Error submitting form: ' + error.message);
        } finally {
          setIsSubmitting(false);
        }
      }

    

    return(
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
}