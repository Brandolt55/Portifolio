import styles from './Navbar.module.css'
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
import Presentation from './Presentation';
function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li>
                <a href='https://www.instagram.com/gabrielbrandolthz/' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram size={30} />
                </a>
                </li>
                <li>
                <a href='https://www.linkedin.com/in/gabriel-brandolt-417554279/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={30} />
                </a>
                </li>
                <li>
                <a href='https://github.com/Brandolt55' target='_blank' rel='noopener noreferrer'>
                    <FaGithub size={30} />
                </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar