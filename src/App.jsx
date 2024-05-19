
import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/HomePage";
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import LoginPage from "./routes/loginPage/LoginPage"
import RegisterPage from "./routes/registerPage/RegisterPage";
import UserDashbord from "./routes/userDashbord/UserDashbord";
import Reservation from "./routes/reservationPage/Reservation"
import ProtectedRoute from './components/ProtectedRoute';
import CreateAppartment from "./routes/createAppartmentPage/CreateAppartment";
import { AuthProvider } from './components/AuthContext';
import{isAuthenticated} from'./helpers/isAuth';
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
        <Route 
          path="signin" 
          element={<LoginPage />} 
          loader={async () => await isAuthenticated()}
        />
        <Route 
          path="signup" 
          element={<RegisterPage />} 
          loader={async () => await isAuthenticated()}
        />
        <Route element={<ProtectedRoute />}>
          <Route path="userDashbord" element={<UserDashbord />} />
          <Route path="/reserve/appartement/:id" element={<Reservation />}/>
          <Route path="/create/appartement" element={<CreateAppartment />}/>
        </Route>
      </Route>
  )
)
function App() {
  return (
      <RouterProvider router={router} />
  )
}
export default App