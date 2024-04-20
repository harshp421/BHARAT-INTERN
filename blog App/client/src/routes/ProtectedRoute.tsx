import useGetCurrentUser from "@/hooks/useGetCurrentUser"
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}:any) => {
  
 
   const navigate = useNavigate();
   
   
    const currentUser =useGetCurrentUser();
    console.log(currentUser,"current user protected") 
   
    if(currentUser===null)
    {
      navigate("/auth/login");
    }
    return (
    <>
       {children}
    </>
  )
}

export default ProtectedRoute