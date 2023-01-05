import Button from "../components/Button";
import CounterInput from "../components/CharactersCounterInput/CharactersCounterInput";
import EmailSignup from "./EmailSignUp";
import "./Home.css";

const Home = () => {
    let defaultMoods: Array<string> = ["Great", "Okay", "Bad"]
    const maxLength: number = 100
    
    return(<>
        <section>
            <h1>Buttons</h1>
            <Button
                onClick={() =>(console.log('I was clicked'))}
                handleKeyboard={() => (console.log('do something'))}
            >
                + Add
            </Button>
        </section>
        <section>
            <h1>TextAreas</h1>
            <CounterInput 
                text="How was your day"
                maxLength={maxLength}
                defaults={defaultMoods}
            />
        </section>
        <section>
            <h2>Email Signup UseRef</h2>
            <EmailSignup />
        </section>
    </>);
}

export default Home;