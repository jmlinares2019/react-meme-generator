import { useState, Fragment, useEffect } from 'react'
import Preview from './Preview'

function Form(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
        altText: ""
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(function(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getRandomImg(){
        let randomMemeId = Math.floor(allMemes.length * Math.random());
        let randomMeme = allMemes[randomMemeId].url;
        let randomMemeAlt = allMemes[randomMemeId].name;
        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: randomMeme,
                altText: randomMemeAlt
            })
        )
    }

    function handleText(e){
        const { name, value } = e.target
        setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            })
        )
    }

    return(
        <Fragment>
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
                        <button className="btn form-button" onClick={getRandomImg}>Get a new meme image</button>
                    </div>
                </div>
            </div>
            <Preview meme={meme} />
        </Fragment>
        
    )
}

export default Form