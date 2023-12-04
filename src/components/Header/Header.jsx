import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.logo}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcATIgVW60r63qzulnBM2A-yug3GS6OdYIPg&usqp=CAU"
                 alt="Some logo"/>
            <div className={classes.login_block}>{
                // <NavLink to={"/login"}>Login</NavLink>
                props.isAuthorized === false
                    ? <NavLink to={"/login"}>Login</NavLink>
                    : <div>{props.data.login}</div>
            }
            </div>
        </header>
    )
}

export default Header;