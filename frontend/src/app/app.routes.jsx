import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Register from "../features/auth/ui/pages/Register.jsx";
import Login from "../features/auth/ui/pages/Login.jsx";





const router = createBrowserRouter([
    {
        path: '/',
        element : <App/>,
       children : [
           {
             path: "/register", 
            element : <Register/>
           }, 
           {
             path: "/login", 
            element : <Login/>
           }, 

           
       ]
    },
   
])

export default router;