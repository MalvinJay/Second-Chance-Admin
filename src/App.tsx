import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ProSidebarProvider } from "react-pro-sidebar";
import Routes from "./Routes";

import store, { persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 500,
      refetchOnWindowFocus: true,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ProSidebarProvider>
              <Routes />
            </ProSidebarProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
