import React from "react"
import Joke from "./Components/Joke.js"
import './App.css';

function App() {
  return (
    <div>
      <h1>Jokes</h1>
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        upvote={6}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        upvote={3}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        upvote={9}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        upvote={8}
      />
      <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because 
        they always take things literally."
        upvote={4}
      />

    </div>
  )
}

export default App;
