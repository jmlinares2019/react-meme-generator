function Preview(props){
    return(
        <div className="meme">
            <img 
                src={props.meme.randomImage}
                alt={props.meme.altText} 
                className="meme--image" />
            <h2 className="meme--text top">{props.meme.topText}</h2>
            <h2 className="meme--text bottom">{props.meme.bottomText}</h2>
        </div>
    )
}

export default Preview