import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Register from "../features/auth/ui/pages/Register.jsx";
import Login from "../features/auth/ui/pages/Login.jsx";
import Public from "./Public.jsx";
import Private from "./Private.jsx";
import Feed from "../components/Feed/Feed.jsx";





const router = createBrowserRouter([
    {
        path: '/',
        element : <App/>,
       children : [
           {
             path: "/register", 
            element :<Public><Register/></Public> 
           }, 
           {
             path: "/login", 
            element :<Public> <Login/></Public> 
           }, 
           {
            path : "/feed", 
            element : <Private><Feed/></Private>
           }

           
       ]
    },
   
])

export default router;