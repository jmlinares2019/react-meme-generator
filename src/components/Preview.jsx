import placeholder from "../assets/img/preview-placeholder.png";

function Preview(){
    return(
        <div className="row img-wrapper">
            <img src={placeholder} alt="Meme preview" />
        </div> 
    )
}

export default Preview