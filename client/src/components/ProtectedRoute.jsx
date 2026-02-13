
import React from 'react'
import useUserStore from '@/store/user';
import { Navigate, useLocation } from 'react-router-dom';


const ProtectedRoute = (props) => {
    const {children}= props;
    const {user}=useUserStore();
    const location=useLocation();
    if(!user){
        return <Navigate to={`/signin?redirect=${location.pathname}`}/>
    }
    
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute