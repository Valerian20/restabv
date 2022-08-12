import React from 'react'
import Homepage from '../../containers/Homepage/Homepage'
import Reservation from '../../containers/Reservation/Reservation'
import MyAccount from '../../containers/myAccount/myAccount'
import {Container} from 'react-bootstrap'

const Content = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default Content

