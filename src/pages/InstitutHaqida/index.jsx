import React from 'react'
import Navbar from "../../components/Navbar"
import InstitutHaqidaCom from '../../components/InstitutHaqidaCom'
import InstitutMalumotlariCom from '../../components/InstitutMalumotlariCom'
import Footer from '../../components/Footer'

const InstitutHaqida = () => {
  return (
    <div>
        <Navbar />
        <InstitutHaqidaCom />
        <InstitutMalumotlariCom/>
        <Footer />
    </div>
  )
}

export default InstitutHaqida;