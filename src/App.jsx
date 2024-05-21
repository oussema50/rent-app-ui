
import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/HomePage";
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import LoginPage from "./routes/loginPage/LoginPage"
import RegisterPage from "./routes/registerPage/RegisterPage";
import OwnerDashbord from "./routes/ownerDashbord/OwnerDashbord";
import UserDashbord from "./routes/userDashbord/UserDashbord";
import Reservation from "./routes/reservationPage/Reservation"
import ProtectedRoute from './components/ProtectedRoute';
import CreateAppartment from "./routes/createAppartmentPage/CreateAppartment";
import UpdateAppartment from "./routes/updateAppartmentPage/UpdateAppartment";
import{isAuthenticated} from'./helpers/isAuth';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider ,
} from "react-router-dom";
const token = localStorage.getItem('token')
const user = JSON.parse(localStorage.getItem('user'));
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}> 
        <Route path="" element={<HomePage />} />
        
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
          {user && user.role=="owner"?(
          
          <>
            <Route path="/ownerDashbord" element={<OwnerDashbord />} />
            <Route path="/create/appartement" element={<CreateAppartment />}/>
            <Route path="/update/appartement/:id" element={<UpdateAppartment />}/>
          </>
          ):<Route path="*" element={<HomePage />} />}
          <Route path="/userDashbord" element={<UserDashbord />} />
          <Route path="list" element={<ListPage />} />
          <Route path="rent/:id" element={<SinglePage />} />
          <Route path="/reserve/appartement/:id" element={<Reservation />}/>
          
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