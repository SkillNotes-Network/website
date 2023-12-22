import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.scss';
import "typeface-roboto";
import "typeface-open-sans";
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import { ContextProvider } from './Contexts/ContextProvider.jsx';
import './../node_modules/detect-autofill/dist/detect-autofill.js';

ReactDOM.createRoot(document.getElementById('React')).render(
  <React.StrictMode>
		<ContextProvider>
	    <RouterProvider router={ router } />
		</ContextProvider>
  </React.StrictMode>
)