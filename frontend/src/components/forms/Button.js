import "../../style/forms/Button.css"

const Button = ({ children, ...props }) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
}

export default Button;