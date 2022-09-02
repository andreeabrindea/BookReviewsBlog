import "../post/post.css"
import photo from "../post/bookpost.jpg";
console.log(photo)

export default function Post(){
    return(
        <div className="post">
            <span className="postTitle">Title</span>
            <hr></hr>
            <img className="imgPost" src={photo} alt="p from post">
            </img>
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Review </span>
                    <span className="postCategory">Classics </span>
                    <span className="postCategory">Random </span>
                </div>
                <span className="postDate">22 February 2022</span>
            </div>
            <p className ="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ex blanditiis non similique? Reprehenderit excepturi cupiditate, voluptatibus sit quae suscipit perspiciatis vitae autem nobis alias velit ea delectus? Commodi, officia.</p>
        </div>
    )
}