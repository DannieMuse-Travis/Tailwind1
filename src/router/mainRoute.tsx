import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/common/LayOut"
import HomeScreen from "../pages/Screen/HomeScreen"

export const MainRouter = createBrowserRouter([
    {
        path:"/",
        element:<LayOut/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
            }

        ]
    }
])