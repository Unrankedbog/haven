import MainRoutes from "./routes/MainRoutes.jsx";
import Header from "./component/Header/Header.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";



const App = () => {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000,
                cacheTime: 10 * 60 * 1000,
                refetchOnWindowFocus: false,
                retry: 2,
                retryDelay: 1000,


            }
        }
    })

  return (
      <QueryClientProvider client={queryClient}>
          <Header />
          <MainRoutes />
      </QueryClientProvider>




  );
};

export default App;

