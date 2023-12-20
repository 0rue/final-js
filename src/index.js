import React from 'react';
import ReactDOM from 'react-dom/client';
import{
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Booklist from './components/Booklist/Booklist';
import BookDetails from './components/BookDetails/BookDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<Booklist />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

