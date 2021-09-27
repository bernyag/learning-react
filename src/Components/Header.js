import React from "react";
import Navigation from "./Navigation";

function Header(){
    return(
        <header className="border-b flex justify-between items-centered p-3">
            <span className="font-bold">
                MatchBall
            </span>
            <Navigation></Navigation>
        </header>
    )
}

export default Header;