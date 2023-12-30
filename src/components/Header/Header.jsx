import {NavLink} from "react-router-dom";
import logo from "./../../assets/images/logo.png"
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.logo}
                 src={logo}
                 alt="Some logo"/>
            <div className={classes.login_block}>{
                props.isAuthorized === false
                    ? <NavLink to={"/login"}>Login</NavLink>
                    : <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
            }
            </div>
        </header>
    )
}

export default Header;