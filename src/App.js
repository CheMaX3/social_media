import React, {Component} from "react";
import {connect} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {compose} from "redux";
import "./App.css";
import Preloader from "./components/common/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import Features from "./components/Features/Features";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import withRouter from "./hoc/withRouter";
import {initialize} from "./redux/appReducer";

class App extends Component {

    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/features" element={<Features/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path={"/users"} element={<UsersContainer/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initialize}),
    withRouter)(App);