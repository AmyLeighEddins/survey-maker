import { BrowserRouter } from 'react-router-dom';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import SharedRoutes from './SharedRoutes';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';
import { useAuth } from '@/context/AuthContext';

function RootRouter() {
  // const { state } = AuthContext.useLogin();
  // const authenticated = state.accessToken && true;
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
     {/* {authenticated && <ResponsiveAppBar />} */}
      {isLoggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      <SharedRoutes />
    </BrowserRouter>
  )
}

export default RootRouter;
