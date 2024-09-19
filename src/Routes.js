import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom"
import Login from "../Login/Login"
import App from "./App"

export const Routes = () => {

return (

<BrowserRouter>
<Router>

<Route index element={<Home/>}/>
<Route path="/Login" element={<Login/>}/>

</Router>
</BrowserRouter>

)


}