
/*
* Typing component Props
* https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/
*/

interface ButtonProps {
    handleKeyboard: () => void;
    children: React.ReactNode;
    props: [];
}

const Button: React.FC<ButtonProps>= ({ handleKeyboard, children, ...props}) => {
    return(
    <button
        onKeyDown={({code})=> {
            if (code === 'Enter') {
                handleKeyboard();
            }
        }}
        {...props}
    >
        {children}
    </button>)
}

export default Button;