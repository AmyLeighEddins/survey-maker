import { AuthProvider } from './context/AuthContext';
import RootRouter from './routes';

function App() {
  return (
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
  );
}

export default App
