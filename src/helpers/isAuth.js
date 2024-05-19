import { redirect } from "react-router-dom";

export const isAuthenticated = async () => {
  const token = localStorage.getItem("token");
  if (token) throw redirect("/");
  return null;
};

export const isAuthorized = async()=>{
  const user = JSON.parse(localStorage.getItem(user))
  const token = localStorage.getItem("token");

  if(token && user.role == 'owner' ){
    
  }
}