import  React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <Content />
      <Footer />
    </div>
  )
}

export default App
