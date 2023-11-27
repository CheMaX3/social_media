import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, updatePost, addMessage, updateMessage} from "./redux/state"


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updatePost={updatePost}
                     addMessage={addMessage}
                     updateMessage={updateMessage}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

reportWebVitals();