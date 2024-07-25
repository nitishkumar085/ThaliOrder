import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Start from './components/Start'
import ContentList from './components/ContentList'
import Checkout from './components/Checkout'


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
            }
        ]
    }
])

export default router