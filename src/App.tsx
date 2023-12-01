import { ProSidebarProvider } from "react-pro-sidebar";
import Routes from "./Routes";

function App() {
  return (
    <ProSidebarProvider>
      <Routes />
    </ProSidebarProvider>
  );
}

export default App;
