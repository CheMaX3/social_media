import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                Profile
            </div>
            <div className={classes.item}>
                News
            </div>
            <div className={classes.item}>
                Features
            </div>
            <div className={classes.item}>
                Settings
            </div>
        </nav>
    );
}

export default Navbar;