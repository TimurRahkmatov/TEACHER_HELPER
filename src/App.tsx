import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Verification from "./Pages/Verification";
import Calendar from "./Pages/Calendar";
import TematicPlans from "./Pages/TematicPlans";
import Resources from "./Pages/Resources";
import Private from "./Layout/Private";
import ResourcesScience from "./Pages/Resources/ResourcesScience";
import ResourcesModerator from "./Pages/Resources/ResourcesModerator";
import CreateResources from "./Pages/Resources/CreateResources";
import ModeratorResources from "./Pages/Resources/ModeratorResources";
import ModeratorById from "./Pages/Resources/ModeratorById";

function App() {
  return (
    <>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="verification" element={<Verification />} />
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Calendar />} />
          <Route path="/tematicplans" element={<TematicPlans />} />
          <Route path="/recources" element={<Resources />} />
          <Route path="/recources/science/1" element={<ResourcesScience />} />
          <Route
            path="/recources/science/class/1"
            element={<ResourcesModerator />}
          />
          <Route path="/recources/science/class/moderator/1" element={<ModeratorById />}/>
          <Route path="/create/resources" element={<CreateResources />} />
          <Route path="/moderator/resources" element={<ModeratorResources />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
