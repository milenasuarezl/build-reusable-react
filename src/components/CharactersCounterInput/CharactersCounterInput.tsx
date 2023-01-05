import React, { useState } from "react";
import "./CharactersCounterInput.css"

interface CounterInputProps {
    text: string;
    maxLength: number;
    defaults: Array<string>;
}

const CounterInput: React.FC<CounterInputProps> = ({text, defaults, maxLength}) => {

    const [message, setMessage ] = useState<string>('');

    const handleTexArea = (event: React.BaseSyntheticEvent) => {
        setMessage(event.target.value)
    }
    
    return(<div className={`counterInput ${message.length > maxLength ? 'tooLong' : ''}`}>
        <div>
            {defaults.map((text: string) =>
                <button
                    key={text}
                    onClick={() => setMessage(text)}
                >{text}
                </button>)}
        </div>
        <textarea
            placeholder={text}
            value={message}
            onChange={handleTexArea} 
        />
        <p>{message.length} / {maxLength}</p>
    </div>)
}

export default CounterInput;