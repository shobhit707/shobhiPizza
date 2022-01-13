import { SocialIcon } from 'react-social-icons';
import React from 'react'
import styles from '../styles/Contact.module.css'
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contacts = () => {
  const handleClick =  () => {
    toast.success("Message submitted Succesfully");

  };
  return (
     <div className={styles.container}>
      <ToastContainer position="top-center" />
      <span className={styles.bigcircle}></span>
      <div className={styles.form}>
        <div className={styles.contactinfo}>
          <h3 className={styles.title}>{"Let's get in touch"}</h3>
          <p classNameName={styles.text}>
           {"Want to contact us? We would love to hear from you . Here's how to reach us"}</p>
          

          <div classNameName={styles.info}>
            <div className={styles.information}>
               <Image src="img/location.png" className={styles.icon} alt="" width="30px" height="30px" />
              <p>1654 R. Don Road #304. NewYork, 85022</p>
                   
            </div>
            <div className={styles.information}>
              <Image src="img/email.png" className={styles.icon} alt="" width="30px" height="30px" />
              <p>shobhipizza@gmail.com</p>
            </div>
            <div className={styles.information}>
            <Image src="img/phone.png" className={styles.icon} alt="" width="30px" height="30px" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className={styles.socialmedia}>
            <p>Connect with us :</p>
            <div className={styles.socialicons}>
              <a href="#">
               <SocialIcon url="https://twitter.com/jaketrent" />
              </a>
              <a href="#">
                <SocialIcon url="https://facebook.com/jaketrent" />
              </a>
              <a href="#">
                <SocialIcon url="https://instagram.com/jaketrent" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contactform}>
          <span className={styles.circleone}></span>
          <span className={styles.circletwo}></span>

          <form  className={styles.formm}>
            <h3 className={styles.title}>Contact us</h3>
            <div className={styles.inputcontainer}>
              <input type="text" placeholder='Username' name="name" className={styles.input} />
  
            </div>
            <div className={styles.inputcontainer}>
              <input type="email" placeholder='email' id="email" name="email" className={styles.input}/>
              
  
            </div>
            <div className={styles.inputcontainer}>
              <input type="tel" placeholder='phone' name="phone" className={styles.input} />
             
              
            </div>
            <div className={styles.inputcontainertextarea}>
              <textarea name="message" placeholder='message' className={styles.input}></textarea>
              
            </div>
            <button onClick={handleClick} className={styles.btn}>
               Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts
