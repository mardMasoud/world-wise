import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from './Logo'
export default function PageNav() {
    return (
        <nav className={styles.nav}>
          <Logo/>
            <ul>
            <li>
                    <Link to="/product">PRODUCT</Link>
                </li>
                <li>
                    <Link to="/pricing">PRICING</Link>
                </li>
                
                <li>
                    <Link to="/login" className="cta">Login</Link>
                </li>
            </ul>
        </nav>
    );
}
