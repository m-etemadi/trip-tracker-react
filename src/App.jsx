import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRout from './Pages/ProtectedRout';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/PageNotFound';
import AppLayout from './Pages/AppLayout/AppLayout';
import CityList from './components/CityList/CityList';
import CountryList from './components/CountryList/CountryList';
import City from './components/City/City';
import Form from './components/Form/Form';

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRout>
                  <AppLayout />
                </ProtectedRout>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
