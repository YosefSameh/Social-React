import { useSelector } from "react-redux"

export default function Nav() {
    const stateAdd = useSelector(state => state.add) 

    let loop = stateAdd.value.map((ele)=>{
        return(
            <div key={ele.id}>{ele.Titel}</div>
        )
    })
    return(
        <div className="d-flex justify-content-evenly">
            <h1>yosef sameh</h1>
            <h1>Hello {loop}</h1>
        </div>
    )
}