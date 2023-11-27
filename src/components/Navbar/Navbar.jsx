import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item}`}>
                <NavLink to="/profile" className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
            </div>
            <div className={`${classes.item}`}>
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/features">Features</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;