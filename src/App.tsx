import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AccountUsers from './views/AccountUsers/AccountUsers';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AccountUsers />
        </QueryClientProvider>
    );
}

export default App;
