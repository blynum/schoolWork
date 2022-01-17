import React from "react"
import memesData from "../memeData"

function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
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
                <img src={memeImage} className="meme--image" />
            </div>


        </main>
    )
}

export default Meme