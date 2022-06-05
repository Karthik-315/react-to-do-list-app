import React from "react";

const Footer = function () {
    const year = new Date().getFullYear();
    // console.log(document.querySelector(".copyright-year"));
    // document.querySelector(".copyright-year").innerText = year;

    return (
        <footer className="footer">
            <span className="w-full text-white flex justify-center">
                Designed by&nbsp;
                <strong>
                    <a
                        href="https://github.com/Karthik-315"
                        target="_blank"
                        rel="noreferrer"
                        className="no-underline text-white visited:text-white"
                    >
                        Karthik S Kumar
                    </a>
                </strong>
                &nbsp;&copy;&nbsp;
                <strong className="copyright-year text-white">2022</strong>
            </span>
        </footer>
    );
};

export default Footer;
