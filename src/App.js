import  React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Content />
      <Footer />
    </div>
  )
}

export default App
