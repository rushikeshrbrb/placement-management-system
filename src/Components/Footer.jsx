import './Footer.css';

import logoicon1 from '../Images/linkedin.jpg';
import logoicon2 from '../Images/Youtube.jpg';
import logoicon3 from '../Images/twitter.png';
import logoicon4 from '../Images/insta.jpeg';
import logoicon5 from '../Images/whatsapp.jpeg';
export default function Footer() {
  return (
    <div className="footer" style={{ verticalAlign: 'baseline' }}>
        
        <div className="social-media" id="social" style={{ textAlign: "center" }}>
            <img width="30px" height="30px" src={logoicon1} alt="Social Media 1" />&emsp;&emsp;
            <img width="30px" height="30px" src={logoicon2} alt="Social Media 2" />&emsp;&emsp;
            <img width="30px" height="30px" src={logoicon3} alt="Social Media 3" />&emsp;&emsp;
            <img width="30px" height="30px" src={logoicon4} alt="Social Media 4" />&emsp;&emsp;
            <img width="30px" height="30px" src={logoicon5} alt="Social Media 4" />&emsp;&emsp;
        </div>
        <p>&copy; 2023 PMS Training and Placement Cell, CDAC Mumbai CDAC Mumbai | All rights are reserved.</p>
       
    </div>
  );
}