import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from './modules/Shared/components/AuthLayout/AuthLayout';
import NotFound from './modules/Shared/components/NotFound/NotFound';
import Register from './modules/Authentication/components/Register/Register';
import ResetPass from './modules/Authentication/components/Resent-pass/ResetPass';
import Login from './modules/Authentication/components/Login/Login';
import ForgetPass from './modules/Authentication/components/Forget-pass/ForgetPass';
import MasterLayout from './modules/Shared/components/MasterLayout/MasterLayout';
import Dashboard from './modules/Dashboard/components/Dashboard/Dashboard';

function App() {
  
  const routes = createBrowserRouter([

    {path: '',
      element:<AuthLayout />,
      errorElement: <NotFound/>,
      children : [
              {index:true, 
              element:<Login /> 
              },

              {path :'login' , 
              element:<Login /> 
              },

              {path:'register' ,
                element:<Register/>
              }, 
               {path :'reset-pass' , 
              element:<ResetPass/> 
              },
              {path :'forget-pass' , 
              element:<ForgetPass/> 
              },
      ],
    },


    { path: '/dashboard',
      element :<MasterLayout/>,
      children: [
        { index: true, element: <Dashboard /> },
      ]

    }
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
