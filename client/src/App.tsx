import { BrowserRouter } from 'react-router-dom';
import AuthenticatedRoutes from './routes/AuthenticatedRoutes';
import SharedRoutes from './routes/SharedRoutes';
import UnauthenticatedRoutes from './routes/UnauthenticatedRoutes';

function App() {
  const authenticated = false;
  // const { state } = AuthContext.useLogin();
  // const authenticated = state.accessToken && true;

  return (
    <BrowserRouter>
     {/* {authenticated && <ResponsiveAppBar />} */}
      {authenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      <SharedRoutes />
    </BrowserRouter>
  )
}

export default App
