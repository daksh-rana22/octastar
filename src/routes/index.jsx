import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Staffing from '../pages/services/Staffing';
import ManagedServices from '../pages/services/ManagedServices';
import DigitalTransformation from '../pages/services/DigitalTransformation';
import CloudService from '../pages/services/Cloud';
import DataAnalytics from '../pages/services/DataAnalytics';
import AIML from '../pages/services/AIML';
import Cybersecurity from '../pages/services/Cybersecurity';
import DevOps from '../pages/services/DevOps';
import Solutions from '../pages/Solutions';
import RPA from '../pages/solutions/RPA';
import Industries from '../pages/Industries';
import IndustryDetail from '../pages/IndustryDetail';
import Careers from '../pages/Careers';
import Resources from '../pages/Resources';
import Contact from '../pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'services/staffing', element: <Staffing /> },
      { path: 'services/managed-services', element: <ManagedServices /> },
      { path: 'services/digital-transformation', element: <DigitalTransformation /> },
      { path: 'services/cloud', element: <CloudService /> },
      { path: 'services/data-analytics', element: <DataAnalytics /> },
      { path: 'services/ai-ml', element: <AIML /> },
      { path: 'services/cybersecurity', element: <Cybersecurity /> },
      { path: 'services/devops', element: <DevOps /> },
      { path: 'solutions', element: <Solutions /> },
      { path: 'solutions/rpa', element: <RPA /> },
      { path: 'industries', element: <Industries /> },
      { path: 'industries/:industryId', element: <IndustryDetail /> },
      { path: 'careers', element: <Careers /> },
      { path: 'resources', element: <Resources /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);
