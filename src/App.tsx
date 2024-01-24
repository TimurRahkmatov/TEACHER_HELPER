import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Verification from "./Pages/Verification";
import Calendar from "./Pages/Calendar";
import TematicPlans from "./Pages/TematicPlans";
import Resources from "./Pages/Resources";
import Private from "./Layout/Private";
import ResourcesModerator from "./Pages/Resources/ResourcesModerator";
import CreateResources from "./Pages/Resources/CreateResources";
import ModeratorResources from "./Pages/Resources/ModeratorResources";
import ModeratorById from "./Pages/Resources/ModeratorById";
import ScienceById from "./Pages/Resources/ScienceById/ScienceById";
import Applications from "./Pages/Applications";
import PasswordChange from "./Pages/PasswordChange";
import ModeratorByIdResource from "./Pages/Resources/ModeratorByIdResource";
import Moderator from "./Layout/Moderator";
import ResourceById from "./Pages/Resources/ResourceById";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/passwordchange" element={<PasswordChange />} />
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Calendar />} />
          <Route path="/tematicplans" element={<TematicPlans />} />
          <Route path="/recources" element={<Resources />} />
          <Route path="/resource/:id" element={<ResourceById />}/>
          <Route
            path="/recources/science/class/1"
            element={<ResourcesModerator />}
          />
          <Route
            path="/recources/science/class/moderator/science/:id"
            element={<ScienceById />}
          />
          <Route
            path="/recources/science/class/moderator/:id"
            element={<ModeratorById />}
          />

          <Route path="/application" element={<Applications />} />
        </Route>
        <Route path="/" element={<Moderator />}>
          <Route path="/create/resources" element={<CreateResources />} />
          <Route path="/moderator/resources" element={<ModeratorResources />} />
          <Route
            path="/moderator/resource/:id"
            element={<ModeratorByIdResource />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
