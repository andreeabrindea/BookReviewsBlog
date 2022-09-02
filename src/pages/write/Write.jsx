import "./write.css";
import photo from "../write/download.jpg";
console.log(photo)
export default function Write(){
    return(
<div className="write">
    <img src={photo} alt="entered" className="writeImg" />
    <form className="writeForm">
        <div className="writeFormGroup">
        
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                {/* <label htmlFor="fileInput">
                <i className="plusButton fa-solid fa-plus"></i>
                </label> */}
                <button className="Submit">Publish</button>

            <input type="file"  id="fileInput" style={{display: "none"}} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Scrie aici:" type="text" className="writeInputText">

            </textarea>
        </div>
    
    </form>
</div>
    )
}