import Bttton from "./button"
export default function Foter(){

    let arrayofbutton = [
        {id:1,props:"btn1"},
        {id:2,props:"btn2"},
        {id:3,props:"btn3👍👍"},
        {id:3,props:"btn4👍👍" ,jsx:(<div>
            <img style={{width:"100px"}} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW193CV?ver=18b1"/>
            </div>)},
    ]
    let loopOnButton = arrayofbutton.map((ele)=>{
        return( <div key={ele.id}>
            <Bttton props={ele.props}>
            {ele.jsx}
            </Bttton>
        </div>)
    })
    return(
        <div className="footer">
            
            {loopOnButton}
            </div>
    )
}