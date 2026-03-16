import { createBrowserRouter } from "react-router";
import App from "./src/App.jsx"
import Register from "./src/features/auth/ui/pages/Register.jsx";




const router = createBrowserRouter([
    {
        path: '/',
        element : <App/>

    },
    {
      path: "/register", 
      element : <Register/>
    }
])

export default router;