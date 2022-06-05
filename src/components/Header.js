import React from "react";
import githubIcon from "../assets/images/icons/github.png";

const Header = function (props) {
    return (
        <header className="header">
            <h2 className="text-3xl font-medium text-white uppercase">
                {props.headerText === "" || `${props.headerText}'s`} To Do List
            </h2>

            <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="h-14 w-14 flex lg:h-20 lg:w-20"
            >
                <img
                    src={githubIcon}
                    alt="Github"
                    className="m-0 p-0 hover:scale-105 transition-transform duration-300"
                />
            </a>
        </header>
    );
};

export default Header;
