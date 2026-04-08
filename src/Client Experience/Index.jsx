import React from 'react'
import Dashboard from "./Dashboard"
import Price from "./Price"
import Header from "./header"
import Footer from "../Home/Footer"
import PositioningSection from "./PositioningSection"
import CoreValues from "./CoreValues"
import HighTouchExperience from "./HighTouchExperience"
import TargetAudience from './TargetAudience'
import ProofMetrics from './ProofMetrics'
import ConsultationPoints from './Consultation'
import ExperienceFlow from './ExperienceFlow'
import TrustSection from './TrustSection'
import FinalCTA from './FinalCTA'

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Price/>
    <PositioningSection/>
    <CoreValues/>
    <HighTouchExperience/>
    <TargetAudience/>
    <ProofMetrics/>
    <ConsultationPoints/>
    <ExperienceFlow/>
    <TrustSection/>
    <FinalCTA/>
    <Footer/>
    </>
  )
}
