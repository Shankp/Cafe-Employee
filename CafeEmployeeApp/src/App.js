import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CafeTable from './Components/cafe/CafeOverview'
import EmployeeTable from './Components/Employee/EmployeeDetails'

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ backgroundColor: "grey" }}><h1>Cafe Manager</h1></Header>
      <Content>
        <Router>
          <Routes >

            <Route path="/cafe" element={<CafeTable />} />
            <Route path="/employees" element={<EmployeeTable />} />
            <Route path="/" element={<CafeTable />} />

          </Routes >
        </Router>
      </Content>
      <Footer></Footer>
    </Layout>

  );
}



export default App;
