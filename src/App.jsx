

import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/HomePage";
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider ,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}> 
        <Route path="" element={<HomePage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="rent/:id" element={<SinglePage />} />

        
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App