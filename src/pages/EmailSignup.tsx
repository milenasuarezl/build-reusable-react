import { forwardRef, useRef, useState } from "react";

const EmailSignup = () => {
const [name, setName] = useState<string>('')
const [email, setEmail] = useState<string>('')
let focusRef = useRef<HTMLButtonElement>(null); 

    return <>
        <input 
            type="text" 
            value={name} 
            placeholder="Name"
            onChange={(e) => { 
                setName(e.target.value)
                if (name.length >= 10) {
                    focusRef.current?.focus()
                }
            }}
        />
        <input 
            type="email" 
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
        />
        <SubmitButton ref={focusRef}>Submit</SubmitButton>
    </>
}
export default EmailSignup

interface SubmitButtonProps {
    children: React.ReactNode;
}

const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(({children}, ref) => {
    return <button ref={ref}>{children}</button>
})