import "../../style/links/ResearchLink.css";

const ResearchLink = ({ children, href }) => {
    return (
        <a className="research__link" href={href}>
            [[<span className="link">{children}</span>]]
        </a>
    );
}

export default ResearchLink;