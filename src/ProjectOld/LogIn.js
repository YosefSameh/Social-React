import "./LogIn.css"
export default function LogIn() {

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"590px"}}>
            <div class="wrapper">
        <header>Login </header>
        <form action="#">
            <div class="field email">
                <div class="input-area">
                    <input type="text" placeholder="Email Address"/>
                    <i class="icon fas fa-envelope"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Email can't be blank</div>
            </div>
            <div class="field password">
                <div class="input-area">
                    <input type="password" placeholder="Password"/>
                    <i class="icon fas fa-lock"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Password can't be blank</div>
            </div>
            <input type="submit" value="Login"/>
        </form>
        
    </div>
        </div>
    )
}