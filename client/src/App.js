import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Nav from "./components/nav/Nav"
import Signin from "./components/Signin";
import Signup from './components/Signup';
import Signout from './components/Signout'
import { UserContext } from './UserContext'

function App() {
  const [user, setUser] = useState(null)

  async function currentUser() {
    const user = await axios.get('api/users/currentuser')
    setUser(user.data.currentUser)
  }

  useEffect(() => {
    currentUser()
  }, [])

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/signout' element={<Signout />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
