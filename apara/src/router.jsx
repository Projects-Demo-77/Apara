import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Projects from './components/Projects/Projects.jsx'
import Destinations from './components/Destinations/Destinations.jsx'
import Team from './components/Team/Team.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about-us' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='projects' element={<Projects />} />
      <Route path='destinations' element={<Destinations />} />
      <Route path='our-team' element={<Team />} />
      <Route path='contact-us' element={<Contact />} />
    </Route>
  )
)

export default router