import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Root/Main.jsx'
import Home from './Pages/Home/Home.jsx'
import Error from './Pages/Error/Error.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import AddCraftItem from './Pages/AddCraft/AddCraftItem.jsx'
import SameCategories from './Pages/Category/SameCategories.jsx'
import MyArtAndCraft from './Pages/MyArt&Craft/MyArtAndCraft.jsx'
import AllArtAndCraft from './Pages/AllArtAndCraft/AllArtAndCraft.jsx'
import Update from './Pages/Update/Update.jsx'
import Details from './Pages/Details/Details.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addCraft',
        element:<AddCraftItem></AddCraftItem>
      },
      {
        path:'/sameCategory',
        element:<SameCategories></SameCategories>
      },
      {
        path:'/myList',
        element:<MyArtAndCraft></MyArtAndCraft>
      },
      {
        path:'/allItem',
        element:<AllArtAndCraft></AllArtAndCraft>
      },
      {
        path:'/updateCraft/:id',
        element:<Update></Update>,
        loader:({params})=> fetch(`http://localhost:5000/craft/update/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:({params})=> fetch(`http://localhost:5000/craft/idx/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
