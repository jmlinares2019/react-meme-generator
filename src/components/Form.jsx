import { useState } from 'react'
import memes from "../assets/memesData"

function Form(){

    const [ memeImgUrl, setMemeImgUrl ] = useState("");

    function getRandomMeme(){
        const allMemes = memes.data.memes;
        const totalMemes = allMemes.length;
        let randomNumber = Math.random();
        let randomMemeId = Math.floor(totalMemes * randomNumber);
        let randomMeme = allMemes[randomMemeId].url;
        setMemeImgUrl(randomMeme);
    }

    return(
        <div className="meme-form">
            <div className="row inputs">
                <div className="col-6">
                    <label htmlFor="top-text" className="form-label">Top text</label>
                    <input 
                        type="text"
                        name="top-text" 
                        className="form-control"   
                    />
                </div>  
                <div className="col-6">
                    <label htmlFor="bottom-text" className="form-label">Bottom text</label>
                    <input 
                        type="text" 
                        name="bottom-text" 
                        className="form-control"  
                    />
                </div>
            </div>
            <div className="row image-button">
                <div className="col">
                    <button className="btn form-button" onClick={getRandomMeme}>Get a new meme image</button>
                </div>
            </div>
            <img src={memeImgUrl} alt="" />
        </div>
        
    )
}

export default Form