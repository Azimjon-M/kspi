import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import TalabalarTurarJoyiCom from '../../../components/TTJBackground'
import TTJRaxbarCom from '../../../components/TTJRaxbarCom'
import TTJStatistikaCom from '../../../components/TTJStatistikaCom'
import TTJCompusCom from '../../../components/TTJCompusCom'
import TTJBottomImage from '../../../components/TTJBottomImage'
import TTJArizaCom from '../../../components/TTJArizaCom'

function TalabalarTurarJoyi() {
    return (
        <div>
            <Navbar/>
            <TalabalarTurarJoyiCom/>
            <TTJRaxbarCom/>
            <TTJStatistikaCom/>
            <TTJCompusCom/>
            <TTJBottomImage/>
            <TTJArizaCom/>
            <Footer/>
        </div>
    )
}

export default TalabalarTurarJoyi