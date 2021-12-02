import React from "react"
import Jokes from "./Components/jokes"
import jokesData from "./Components/jokesData"

export default function App() {
    const jokeElements = jokesData.map(function (joke) {
        return (
            <Jokes
                setup={joke.setup}
                punchline={joke.punchline} />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>


    )
}
/* <Jokes
    setup="I got my daughter a fridge for her birthday."
    punchline="I can't wait to see her face light up when she opens it."
    isPun={true}
    upvotes={10}

/>
<Jokes
    setup="How did the hacker escape the police?"
    punchline="He just ransomware!"
    isPun={true}
    upvotes={10}
/>

<Jokes
    setup="Why don't pirates travel on mountain roads?"
    punchline="Scurvy."
    isPun={true}
    upvotes={10}
/>

<Jokes
    setup="Why do bees stay in the hive in the winter?"
    punchline="Swarm."
    isPun={false}
    upvotes={10}
/>

<Jokes
    punchline="It’s hard to explain puns to kleptomaniacs because
    they always take things literally."
    isPun={true}
    upvotes={10}

/> */