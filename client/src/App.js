import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import { endpoints } from "./endpoints";
import { UserContext } from './UserContext'
import Nav from "./components/nav/Nav"
import Signin from "./components/Signin";
import Signup from './components/Signup';
import Signout from './components/Signout';
import { IndexProvider } from "./components/IndexProviders";
import { NewProduct } from './components/NewProduct'
import { IndexProviderProducts } from "./components/IndexProviderProducts"

function App() {
  const [user, setUser] = useState(null)

  async function currentUser() {
    const user = await axios.get(endpoints.get.users.currentUser)
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
          <Route exact path='/' element={<IndexProvider />} />
          <Route exact path='/users/signin' element={<Signin />} />
          <Route exact path='/users/signup' element={<Signup />} />
          <Route exact path='/users/signout' element={<Signout />} />
          <Route exact path='/products/new' element={<NewProduct />} />
          <Route exact path='/products/provider/:providerId' element={<IndexProviderProducts />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
