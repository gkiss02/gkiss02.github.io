import RootLayout from './Components/RootLayout';
import Weather from './Pages/Weather';
import Settings from './Pages/Settings';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FavoriteCities from './Context/FavoriteCities'
import WeatherData from './Context/WeatherData'
import SettingsProvider from './Context/SettingProvider';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [
        { path: '/', element: <Weather></Weather> },
        { path: '/settings', element: <Settings></Settings> }
      ]
    }
  ]);
  
  return (
    <SettingsProvider>
      <WeatherData>
        <FavoriteCities>
          <RouterProvider router={router}></RouterProvider>
        </FavoriteCities>
      </WeatherData>
    </SettingsProvider>
  );
}

export default App;