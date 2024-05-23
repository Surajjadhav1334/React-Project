import Login from "./components/login"
import './App.css'
import Profile from "./components/profile"
import Usercontextprovider from "./context/User context provider"

function App() {
  

  return (
    <Usercontextprovider>
     <h1>Chai & React</h1>
     <Login/>
     <Profile/>
    </Usercontextprovider>
  )
}

export default App
