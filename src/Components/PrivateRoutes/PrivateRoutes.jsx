import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()
    console.log(location.pathname);

    if(loading){
       return <div className=" mx-auto my-48 w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    if(user){
        return children
    }

    return (
        <Navigate  state={location.pathname} to='/in'>
            
        </Navigate>
    );
};

export default PrivateRoutes;