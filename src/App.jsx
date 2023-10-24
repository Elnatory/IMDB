import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/footer/footer';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import NotFound from './Pages/notFound/notFound';
import Movies from './Pages/Movies/Movies';
// import List, { loader as moviesLoader } from './Pages/Movies/List';
import Update from './Pages/Movies/update';
import PageDetails from './Pages/Details/PageDetails';
import AppLayout from './components/AppLayout/AppLayout';
import { Provider } from 'react-redux';
import store from './store/slices/store';
import Favorites from './Pages/Movies/Favorites';
import List from './Pages/Movies/List';
import { LanguageProvider } from './contexts/language';



const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
      {
        path: '/movies',
        element: <Movies />,
        children: [
          { index: true, element: <List /> }, //,loader: moviesLoader 
          { path: '/movies/update', element: <Update /> }
        ]
      },
      { path: '/details/:id', element: <PageDetails /> },
      { path: 'favorites', element: <Favorites /> }
    ]
  }

])

function App() {
  const [language, setlanguage] = useState('en')
  return (
    <>
      <div className='row m-4 p-1'></div>
      <LanguageProvider value={{language,setlanguage}}>
        <Provider store={store}> <RouterProvider router={router} /></Provider>
      </LanguageProvider>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={
            <div>
              <Home />
            </div>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/movies' element={<Movies />}>
            <Route index element={<List />} />
            <Route path='/movies/update' element={<Update />} />
          </Route>
          <Route path='/details/:id' element={<PageDetails/>}/>
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </>
  )
}

export default App
