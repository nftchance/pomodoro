import ResearchLink from "../links/ResearchLink";

const Navbar = () => { 
    return (
        <div className="container">
            <h3><ResearchLink internal={true} href={"/"}>Hyper Pomodoro</ResearchLink></h3>
        </div>
    )
}

export default Navbar;