import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Features from "./components/Features/Features";
import Settings from "./components/Settings/Settings";
import {Routes, Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                               messages={props.state.dialogsPage.messages}
                                                               addMessage={props.addMessage}
                                                               updateMessage={props.updateMessage}/>}/>
                    <Route path="/profile/*" element={<Profile posts={props.state.profilePage.posts}
                                                               tempTextPost={props.state.tempTextPost}
                                                               addPost={props.addPost}
                                                               updatePost={props.updatePost}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/features" element={<Features/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
