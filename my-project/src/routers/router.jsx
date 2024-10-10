import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from '../home/Home.jsx';
import Shop from "../Shop/Shop"
import Blog from "../components/Blog";
import About from "../components/About";
import SingleBook from "../Shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import EditBooks from "../dashboard/EditBooks.jsx";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
     children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path:"/about",
        element:<About/>
      },
      
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/book/:id",
        element: <SingleBook/>,
        loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`),

      },
     ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard/>
        },
        {
          path: "upload",
          element: <UploadBook/>
        },
        
        {
          path: "edit-books/:id",
          element: <EditBooks/>,
          loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`),
        }
      ]
    }
  ]);
      
 export default router;