import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './routes';
import {RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import thaliStore from "./store/thaliStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Provider store={thaliStore}>
      <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>
);


