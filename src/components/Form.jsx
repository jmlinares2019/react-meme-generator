function Form(){
    return(
        <form className="meme-form">
            <div className="row inputs">
                <div className="col-6">
                    <label htmlFor="top-text" className="form-label">Top text</label>
                    <input type="text" name="top-text" className="form-control"/>
                </div>  
                <div className="col-6">
                    <label htmlFor="bottom-text" className="form-label">Bottom text</label>
                    <input type="text" name="bottom-text" className="form-control" />
                </div>
            </div>
            <div className="row image-button">
                <div className="col">
                    <button type="submit" className="btn">Get a new meme image</button>
                </div>
            </div>
        </form>
    )
}

export default Form