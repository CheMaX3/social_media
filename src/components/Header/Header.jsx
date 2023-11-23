import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcATIgVW60r63qzulnBM2A-yug3GS6OdYIPg&usqp=CAU"
                 alt="Some logo"/>
        </header>
    );
}

export default Header;