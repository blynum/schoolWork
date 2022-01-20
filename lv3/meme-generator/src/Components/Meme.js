import React from "react"
import memesData from "../memeData"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

        // const url = 
        // console.log(url)
    }


    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="form--input" />

                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input" />

                <button
                    onClick={getMemeImage}
                    className="form--button">Get a new meme image 🖼 </button>
                <img src={meme.randomImage} className="meme--image" />
            </div>


        </main>
    )
}

export default Meme