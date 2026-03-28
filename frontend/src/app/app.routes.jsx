import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Register from "../features/auth/ui/pages/Register.jsx";





const router = createBrowserRouter([
    {
        path: '/',
        element : <App/>,
       children : [
           {
             path: "/register", 
            element : <Register/>
           }, 
           
       ]
    },
   
])

export default router;