import { Route, Routes } from "react-router-dom"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"

function App() {

  return (
    <>
      <Routes>
        <Route path="signin"  element={<SignIn />}/>
        <Route path="signup"  element={<SignUp />}/>
      </Routes>
    </>
  )
}

export default App
