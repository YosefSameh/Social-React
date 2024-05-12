import AddPost from "./AddPost";
import Posts from "./Posts";
import SectionLeft from "./SectionLeft";
import "./AllConponates.css"

export default function AllComd() {
    return(
        
            <div className='container' >
                <div  className="response">
                    <SectionLeft/>
                    <div  className='d-flex flex-column response2'>
                        <AddPost/>
                        <Posts flex="center"/>  
                    </div>
                </div>
            </div>
        
    )
}