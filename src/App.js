import RootLayout from './Components/RootLayout';
import Weather from './Pages/Weather';
import Settings from './Pages/Settings';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FavoriteCities from './Context/FavoriteCities'

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
    <FavoriteCities>
      <RouterProvider router={router}></RouterProvider>
    </FavoriteCities>
  );
}

export default App;