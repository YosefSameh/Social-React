import { useSelector } from "react-redux"

export default function Sidebar() {
    
    const stateAdd = useSelector(state => state.add) 

    let loop = stateAdd.value.map((ele)=>{
        return(
            <div key={ele.id}>{ele.Titel}</div>
        )
    })

    return(
        <div className="mt-5">
            <p>Home</p>
            <p>About</p>
            <p>ContactMe</p>
            <p>Blog</p>
            <p>{loop}</p>
        </div>
    )
}