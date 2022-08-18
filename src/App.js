import  React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import routes from './routes'
import { Container } from 'react-bootstrap';
import { useAppContext } from "./containers/Context/Context";
import { useContext } from "react";


function App() {
  
  // const [path, setPath] = useState("#homepage");
  // const onNavigate = (_path) => {
  //   console.log(_path);
  //   setPath(_path);
  // };

  const { path } = useAppContext();
  debugger
  return (
    <Container className="app-layout">
      <Navbar />
      <Content>{routes[path]}</Content>
      <Footer />
    </Container>
  );
}

export default App;