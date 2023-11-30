import { useState } from "react";
import { UserProvider } from "./context/UserContext";
import "./App.css";

import AppRoutes from "./routes/AppRoutes";
// import NavBar from "./components/NavBar";
import NavBarMUI from "./components/NavBarMui";
import { SearchContext, SearchHolder } from "./context/SearchContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
        <SearchHolder>
          <NavBarMUI />
          <AppRoutes />
        </SearchHolder>
      </UserProvider>
    </>
  );
}

export default App;
