import "./Footer.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";








function Footer() {
    return (
        <>
            <div className="main-footer">
                <div className="company">
                    <h2 className="company-name">Company</h2>
                    <div className="company-box">
                        <a href="" className="about-foo">About-Us</a>
                        <a href="" className="contact-foo">Contact Us</a>
                        <a href="" className="reservartion">Resevartion</a>

                        <a href="" className="pravicy1">Pravicy Policy</a>
                        <a href="" className="term">Terms & Condition</a>
                    </div>


                </div>

                <div className="contact-detail2">
                    <div className="contact-box">
                        <h2 className="contact2">Contact</h2>
                        {/* <div className="cont-div"> */}
                        <div className="location-foo">
                            <div><FaLocationDot className="loc" /></div>
                            <div className="addres">123streat,New Delhi,India</div>
                        </div>

                        <div className="office-number">
                            <div ><IoCall className="num-logo" />
                            </div>
                            <div className="num">+91 987456321</div>
                        </div>

                        <div className="office-mail">
                            <div ><MdEmail className="logo-mail" />
                            </div>
                            <div className="mail1">Restorn@gmail.com</div>
                        </div>
                        {/* </div> */}

                        <a href=""> <div className="social-media">
                            <div className="social-box">  <FaTwitter className="logoo" /></div>

                            <div className="social-box">     <FaFacebook className="logoo" /></div>
                            <div className="social-box">      <FaYoutube className="logoo" /></div>
                            <div className="social-box">      <FaLinkedin className="logoo" /></div>



                        </div></a>




                    </div>











                </div>

                <div className="opening">

                    <div className="opening-box">
                        <h2 className="opening1">Opening</h2>
                        <div className="monday">Monday - saturday</div>
                        <div className="time">09AM - 09PM</div>
                        <div className="sunday">Sunday</div>
                        <div className="sunday-time">10AM - 10PM</div>




                    </div>


                </div>






                <div className="news">
                    <div className="news-box">
                        <h2 className="newsletter">Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nisi.</p>
                        <input type="text" placeholder="Your Email" className="input-box" />
                        <button className="sign-up">Sign Up</button>

                    </div>
                </div>


            </div>
        </>
    )
}


export default Footer