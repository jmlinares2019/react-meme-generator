import { useState } from 'react'
import memes from "../assets/memesData"

function Form(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    function handleText(e){
        const { name, value } = e.target
        setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            })
        )
    }

    function getRandomMeme(){
        const allMemes = memes.data.memes;
        let randomMemeId = Math.floor(allMemes.length * Math.random());
        let randomMeme = allMemes[randomMemeId].url;
        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: randomMeme
            })
        )
    }

    return(
        <div className="meme-form">
            <div className="row inputs">
                <div className="col-6">
                    <label htmlFor="top-text" className="form-label">Top text</label>
                    <input 
                        type="text"
                        name="topText" 
                        className="form-control"
                        value={meme.topText}
                        onChange={handleText}   
                    />
                </div>  
                <div className="col-6">
                    <label htmlFor="bottom-text" className="form-label">Bottom text</label>
                    <input 
                        type="text" 
                        name="bottomText" 
                        className="form-control"
                        value={meme.bottomText}
                        onChange={handleText}  
                    />
                </div>
            </div>
            <div className="row image-button">
                <div className="col">
                    <button className="btn form-button" onClick={getRandomMeme}>Get a new meme image</button>
                </div>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
        
    )
}

export default Form