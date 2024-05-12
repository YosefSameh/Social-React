import "./posts.css"

export default function Posts ({body}){
    return(
        <div className="posts">
            <h4>{body}</h4>
            
                <hr/>
            <h4>This is the Post Body</h4>
        </div>
    )
}