export default function Bttton({props,children }){
    console.log(children);
    return(
        <div>
            <button>
                {props}
                {children}
            
            </button>
            
        </div>
    )
}