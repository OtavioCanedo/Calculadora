import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../Login/Login';
import Calculator from '../Calculator/Calculator';

const Router = () => (
  <Routes>
    <Route path="/" exact element={<Login />} />
    <Route path="/home" element={<Calculator />} />
  </Routes>
)

export default Router;