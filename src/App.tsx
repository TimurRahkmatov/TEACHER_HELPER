import { Route, Routes } from "react-router-dom"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Verification from "./Pages/Verification"

function App() {

  return (
    <>
      <Routes>
        <Route path="signin"  element={<SignIn />}/>
        <Route path="signup"  element={<SignUp />}/>
        <Route path="verification" element={<Verification />}/>
      </Routes>
    </>
  )
}

export default App
