import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Start from './pages/home/Start'
import ContentList from './pages/menu/ContentList'
import Checkout from './components/Checkout'
import Login from './pages/login/Login'


const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Start/>
            },
            {
                path:"/menu",
                element:<ContentList/>,
            },
            {
                path:"/checkout",
                element:<Checkout/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
])

export default router