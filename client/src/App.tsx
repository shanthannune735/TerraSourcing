import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
// import Report from './pages/Report'
import ImporterVerification from './pages/Importer/ImporterVerification'
import Dashboard from './pages/Dashboard'
import ViewResponse from './pages/ViewResponse'
import Form from './pages/Form'
import ImporterRegistration from './pages/Importer/ImporterRegistration'
import Training from './pages/Training'
import Homepage from './pages/Homepage'
import LeadVerification from './pages/Exporter/LeadVerification'
import MarketResearchReport from './pages/Exporter/MarketResearchReport'
import ExporterRegistration from './pages/Exporter/ExporterRegistration'
import ImporterLogin from './pages/Importer/ImporterLogin'
import ExporterLogin from './pages/Exporter/ExporterLogin'
import StaticReportPage from './pages/StaticReportPage'
import ImporterLoginSuccess from './pages/Importer/ImporterLoginSuccess'
import ImporterRegistrationSuccess from './pages/Importer/ImporterRegistrationSuccess'
import ExporterLoginSuccess from './pages/Exporter/ExporterLoginSuccess'
import ExporterRegistrationSuccess from './pages/Exporter/ExporterRegistrationSuccess'
import ContactUs from './pages/ContactUs'
import Pricing from './pages/Pricing'
import Webinar from './pages/Webinar'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Homepage />} />

            {/* Importer */}
            <Route path='/importer/verification' element={<ImporterVerification />} />
            <Route path="/importer/login" element={<ImporterLogin />}></Route>

            {/* Exporter */}
            <Route path='/exporter/lead-verification' element={<LeadVerification />} />
            <Route path='/exporter/market-research-report' element={<MarketResearchReport />} />
            <Route path='/exporter/registration' element={<ExporterRegistration />} />
            <Route path='/exporter/login' element={<ExporterLogin />} />

            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/response/:id' element={<ViewResponse />} />
            <Route path='/training' element={<Training />} />

            <Route path='/importer/login-successful' element={<ImporterLoginSuccess />}></Route>
            <Route path='/importer/registration-successful' element={<ImporterRegistrationSuccess />}></Route>

            <Route path='/exporter/login-successful' element={<ExporterLoginSuccess />}></Route>
            <Route path='/exporter/registration-successful' element={<ExporterRegistrationSuccess />}></Route>

            <Route path='/sample-report' element={<StaticReportPage />}></Route>

            <Route path='/contact-us' element={<ContactUs />}></Route>

            <Route path="/pricing" element={<Pricing />}></Route>

            <Route path="/webinarAndEvents" element={<Webinar />}></Route>

          </Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path='/importer/registration' element={<ImporterRegistration />} />

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
