import  React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import routes from './routes'
import { Container } from 'react-bootstrap';


const renderRoutes = (route) => {
  if (route === "/suppliers") {
    return { ...routes, "/suppliers": "No acces for you" };
  }

  return routes;
};

function App() {
  const [path, setPath] = useState("/dashboard");

  const onMenuClick = ({ item }) => {
    const _path = item.props?.path;
    console.log(_path);
    setPath(_path);
  };

  return (
    <Container className="app-layout">
      <Navbar />
      <Content>{renderRoutes(path)[path]}</Content>
      <Footer />
    </Container>
  );
}

export default App;