import Button from "../components/Button";
import CounterInput from "../components/CharactersCounterInput/CharactersCounterInput";
import "./Home.css";

const Home = () => {

    let defaultMoods = ["Great", "Okay", "Bad"]
    const maxLength = 100;

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
    </>);
}

export default Home;