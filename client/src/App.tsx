import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import RootRouter from './routes';

function App() {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {/* TODO: add navbar here */}
        <RootRouter />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App
