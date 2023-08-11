import RootLayout from './Components/RootLayout';
import Weather from './Pages/Weather';
import Settings from './Pages/Settings';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FavoriteCities from './Context/FavoriteCities'
import WeatherData from './Context/WeatherData'

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
    <WeatherData>
      <FavoriteCities>
        <RouterProvider router={router}></RouterProvider>
      </FavoriteCities>
    </WeatherData>
  );
}

export default App;