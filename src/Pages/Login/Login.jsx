
import './Login.css'

export default function Login() {

    return (

        <div id='Components'>
            <div id='form-box'>

                <form action="">

                    <div class="Header">

                        <h1>Login</h1>

                    </div>

                    <div id="Inputs">

                        <div id="Email">

                            {/*<label htmlFor="">Email</label><br />*/}
                            <input type="email" placeholder='Email'/>

                        </div>  
                    </div>
                    <div id="Inputs">
                        
                        
                        <div id="Password">

                            {/*<label htmlFor="">Password</label><br />*/}
                            <input type="password" placeholder='Password' />

                        </div>


                    </div>

                    <div id="remember-forgot">

                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password</a>

                    </div>


                    <button type="submit">Login</button>

                </form>
            </div>
        </div>



    )


}

