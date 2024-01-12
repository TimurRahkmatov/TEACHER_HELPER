import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Verification from "./Pages/Verification";
import Calendar from "./Pages/Calendar";
import TematicPlans from "./Pages/TematicPlans";
import Resources from "./Pages/Resources";
import Private from "./Layout/Private";

function App() {
  return (
    <>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="verification" element={<Verification />} />
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Calendar />} />
          <Route path="/tematicplans" element={<TematicPlans />}/>
          <Route path="/recources" element={<Resources />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
