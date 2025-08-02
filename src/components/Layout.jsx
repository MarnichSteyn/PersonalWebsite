import React from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";

function Layout({ children }) {
    return (
        <div className="layout">
            <Navigation />
            <div className="content-container">
                <Profile />
                <div className="main-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;