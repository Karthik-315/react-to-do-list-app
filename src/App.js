import "./App.css";
import React from "react";
import Overlay from "./components/Overlay";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

function App() {
    const [headerText, setHeaderText] = React.useState(
        window.localStorage.getItem("username") || ""
    );

    const setCurrentHeaderText = function (text) {
        setHeaderText(text);
    };

    const setFinalHeaderText = function (text) {};

    return (
        <React.Fragment>
            <Overlay />
            <Header headerText={headerText} />
            <Main
                handleHeaderText={setFinalHeaderText}
                handleCurrentHeaderText={setCurrentHeaderText}
            />
            <Footer />
        </React.Fragment>
    );
}

export default App;
