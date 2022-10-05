import ResearchLink from "../links/ResearchLink";

import "../../style/navbar/Navbar.css"

const Navbar = () => { 
    return (
        <div className="navbar container">
            <h3><ResearchLink internal={true} href={"/"}>Hyper Pomodoro</ResearchLink></h3>
        </div>
    )
}

export default Navbar;