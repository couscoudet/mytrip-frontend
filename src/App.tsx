import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Authentification/Login";
import PasswordInitialisation from "./pages/Authentification/PasswordInitialisation";
import Signup from "./pages/Authentification/Signup";
import TripListPage from "./pages/Trip/TripListPage";
import TripManager from "./pages/Trip/TripManager";
import TripNextStepPage from "./pages/Trip/TripNextStepPage";
import { Flowbite } from "flowbite-react";
import TripDetailsPage from "./pages/Trip/TripDetailsPage";
import FormExample from "./pages/FormExample";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Flowbite>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/password-init" element={<PasswordInitialisation />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/trips" element={<TripListPage />} />
          <Route path="/add-trip" element={<TripManager />} />
          <Route path="/start-trip" element={<TripNextStepPage />} />
          <Route path="/trip/:id" element={<TripDetailsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormExample />} />
        </Routes>
      </Flowbite>
    </div>
  );
}

export default App;
