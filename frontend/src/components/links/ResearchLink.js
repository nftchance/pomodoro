import { Link } from 'react-router-dom';

import "../../style/links/ResearchLink.css";

const ResearchLinkWrapped = ({children}) => { 
    return (
        <>
            <span>[[</span>
            <span className="link">{children}</span>
            <span>]]</span>
        </>
    )
}

const ResearchLink = ({ children, href, internal }) => {
    return (
        <>
            {internal === true ? 
                <Link 
                    to={href} 
                    className="research__link"
                >
                    <ResearchLinkWrapped>{children}</ResearchLinkWrapped>
                </Link>
            : 
                <a 
                    className="research__link"
                    href={href} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <ResearchLinkWrapped>{children}</ResearchLinkWrapped>
                </a>
            }
        </>
    );
}

export default ResearchLink;