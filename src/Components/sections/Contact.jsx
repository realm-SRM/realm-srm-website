import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contact(){

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'firstname') setFirstName(value);
        if (name === 'lastname') setLastName(value);
        if (name === 'email') setEmail(value);
        if (name === 'phone') setPhone(value);
        if (name === 'message') setMessage(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!firstname || !lastname || !email || !phone || !message) {
          setResponseMessage("Please fill in all fields.");
          return;
        }
    
        const formData = {
          firstname: firstname,
          lastname:lastname,
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
        <div className="contact-form overflow-x-hidden bg-[#141930] pb-10">

        <p className="text-6xl font-bold py-10 text-[#FFDCC1] flex justify-center mb-6 ">Contact Us</p>
            
        <div className="h-1 border-t-0 border-b-[1px] border-red-400 w-10/12 ml-32 "></div>
        
        <div className="flex flex-row justify-end gap-16 py-10">
            <div>
            <div className="mapouter" style={{ position: 'relative', textAlign: 'right', width: '100%', height: '325px' }}>
      <div className="gmap_canvas" style={{ overflow: 'hidden', background: 'none', width: '100%', height: '325px' }}>
        <iframe
          className="gmap_iframe"
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=300&amp;height=325&amp;hl=en&amp;q=UB%20building%20srm%20university&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ height: '325px' }}
          title="Google Map Embed"
        />
        <a href="https://sprunkiplay.com/" rel="nofollow">Sprunki Game</a>
      </div>
      <style>
        {`
          .mapouter {
            position: relative;
            text-align: right;
            width: 100%;
            height: 325px;
          }

          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            width: 100%;
            height: 325px;
          }

          .gmap_iframe {
            height: 325px !important;
          }
        `}
      </style>
    </div>
                <div className="flex flex-row justify-center gap-5 my-8">
                    <a href="http://github.com/realm-SRM" target="_blank"><button><GitHubIcon style={{'color': '#9A50A5', fontSize: 30}} /></button></a>
                    <a href="http://github.com/realm-SRM" target="_blank"><button><XIcon style={{'color': '#9A50A5', fontSize: 30}} /></button></a>
                    <a href="http://github.com/realm-SRM" target="_blank"><button><FacebookOutlinedIcon style={{'color': '#9A50A5', fontSize: 30}} /></button></a>
                    <a href="http://github.com/realm-SRM" target="_blank"><button><InstagramIcon style={{'color': '#9A50A5', fontSize: 30}} /></button></a>
                </div>
            </div>

            <div className="w-1 h-auto border-l-0 border-r-[1px] border-red-400 "></div>

            <div className="pr-20">
                <form onSubmit={handleSubmit}>
                    <p className="text-[#FFDCC1] w-full font-bold text-3xl text-left mb-6">Leave Us a Message</p>
                    <div className="flex flex-row gap-16 mb-6">
                        <div>
                        <input
                            className="bg-[#141930] border border-[#59569E] text-xl font-bold rounded-md px-3 py-1 w-80 text-gray-300 placeholder-slate-700 "
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="First Name"
                            value={firstname}
                            onChange={handleInputChange}
                            required
                        />
                        </div>

                        <div>
                        <input
                            className="bg-[#141930] border border-[#59569E] text-xl font-bold rounded-md px-3 py-1 w-80 text-gray-300 placeholder-slate-700 "
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={handleInputChange}
                            required
                        />
                        </div>
                    </div>

                    <div className="flex flex-row gap-16 mb-6">
                        <div>
                        <input
                            className="bg-[#141930] border border-[#59569E] text-xl font-bold rounded-md px-3 py-1 w-80 text-gray-300 placeholder-slate-700 "
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleInputChange}
                            required
                        />
                        </div>

                        <div>
                        <input
                            className="bg-[#141930] border border-[#59569E] text-xl font-bold rounded-md px-3 py-1 w-80 text-gray-300 placeholder-slate-700 "
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Mobile Number"
                            value={phone}
                            onChange={handleInputChange}
                            required
                        />
                        </div>
                    </div>

                    <div className="mb-6">
                    <textarea
                        className="bg-[#141930] border border-[#59569E] text-xl font-bold rounded-md px-3 py-1 w-full min-h-40 text-gray-300 placeholder-slate-700 "
                        id="message"
                        name="message"
                        value={message}
                        placeholder="Tell us what's up"
                        onChange={handleInputChange}
                        required
                    />
                    </div>

                    <div className="flex justify-center">
                    <button className="bg-[#F15191] hover:brightness-110 transition text-[#FFDCC1] text-3xl font-bold rounded-full px-20 pb-2 pt-1" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    </div>
                </form>

                {responseMessage && <p className="text-xl text-[#FFDCC1] flex justify-center ">{responseMessage}</p>}

            </div>

        </div>

        <div className="h-1 border-t-0 border-b-[1px] border-red-400 w-10/12 ml-32 "></div>

        </div>
    );
}