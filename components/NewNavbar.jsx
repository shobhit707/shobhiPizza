import Image from "next/image";
import styles from "../styles/NewNavbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
const NewNavbar = () => {

  const quantity = useSelector(state=>state.cart.quantity);
  return (
    <div className={styles.body}>
    <nav className={styles.nav}>
        <input id={styles.navtoggle} type="checkbox"/>
        <Link href="/" passHref> 
          <div className={styles.logo}>Shobhi<strong>Pizza</strong></div>
         </Link>
       
        <ul className={styles.links}>
           <Link href="/" passHref> 
         <li className={styles.listItems}>Homepage</li>
         </Link>
            <li className={styles.listItems}><a href="#menu">Menu</a></li>
            <Link href="/Contacts" passHref>
            <li className={styles.listItems}>Contacts</li>
            </Link>
            
            <Link href="/admin/Index" passHref>
              <li className={styles.listItems}>Admin</li>
            </Link>
            
                  <Link href="/Cart" passHref>
              <div className={styles.item}>
              <div className={styles.cart}>
                <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                <div className={styles.counter}>{quantity}</div>
              </div>
            </div>
            </Link>
        </ul>
        
        <label  htmlFor={styles.navtoggle} className={styles.iconburger}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </label>
    </nav>

    </div>
        
  );
};

export default NewNavbar;
