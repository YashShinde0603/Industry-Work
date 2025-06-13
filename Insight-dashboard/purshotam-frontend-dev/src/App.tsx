import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import Sidebar from './Components/Layout/Sidebar';
import Header from './Components/Layout/Header';
import InventoryPage from './Pages/inventory/Index';
import PlantsPage from './Pages/plantsPage/Index';
import ReportPage from './Pages/reportPage/Index';
import SalesPage from './Pages/SalesPage/Index';
import ProductionPage from './Pages/ProductionPage/Index';
import ManPowerChartPage from './Pages/ManPowerPage/ManPowerChartPage';
import Profile from './Pages/Profile/Index';
import ChartViewChartPage from './Pages/chartViewChartPage/Index';
import ManPowerPage from './Pages/ManPowerPage/Index';
import ProductionChartViewPage from './Pages/ProductionPage/ProductionChartViewPage';
import SalesChartViewPage from './Pages/SalesPage/SalesChartViewPage';
import ManPowerWisePlant from './Pages/ManPowerWisePlant/ManPowerWisePlant';
import InventoryPlantWisePage from './Pages/inventory/InventoryPlantWisePage';
import SalesPlantWisePage from './Pages/SalesPage/SalesPlantWisePage';
import InwardOutWardPage from './Pages/inward-outward/Index';
import InwardOutWardChartPage from './Pages/inward-outward/InwardOutWardChartPage';
import PlantWisePage from './Pages/plantWise/Index';
import PlantWiseChartPage from './Pages/plantWise/PlantWiseChartPage';
import PlantWiseSummary from './Pages/plantWise/PlantWiseSummary';

const MainLayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar className="h-full" />
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col ml-2 md:ml-16  sm:ml-4 lg:ml-[5.8rem] overflow-x-hidden">
          <Header label="inventory" />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

const AuthLayout: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-xs px-8 pt-6 pb-8 m-auto mb-4 sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Outlet />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  // Router configuration
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/home', element: <HomePage /> },
        // inventory
        { path: '/inventory', element: <InventoryPage /> },
        { path: '/inventory/:plantName', element: <InventoryPlantWisePage /> },
        {
          path: '/chart-view',
          element: <ChartViewChartPage />,
        },
        // plant
        { path: '/inventory/plant/:plantName', element: <PlantsPage /> },
        // report
        { path: '/MIS', element: <ReportPage /> },
        // sales
        { path: '/sales', element: <SalesPage /> },
        { path: '/sales-chart-view', element: <SalesChartViewPage /> },
        { path: '/sales-plant-wise', element: <SalesPlantWisePage /> },
        // production
        { path: '/production', element: <ProductionPage /> },
        { path: '/production-chart-view', element: <ProductionChartViewPage /> },
        // manpower
        { path: '/man-power', element: <ManPowerPage /> },
        { path: '/man-power-chart', element: <ManPowerChartPage /> },
        { path: '/man-power-plant-wise', element: <ManPowerWisePlant /> },
        // profile
        { path: '/profile', element: <Profile /> },
        // inward-outward
        { path: '/inward-outward-page', element: <InwardOutWardPage /> },
        { path: '/inward-outward-chart', element: <InwardOutWardChartPage /> },
        // plant wise
        { path: '/plant-wise', element: <PlantWisePage /> },
        { path: '/plant-wise-chart', element: <PlantWiseChartPage /> },
        { path: '/plant-wise-summary', element: <PlantWiseSummary /> },
      ],
    },
    {
      path: '/login',
      element: <AuthLayout />,
      children: [{ path: '/login', element: <LoginPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
