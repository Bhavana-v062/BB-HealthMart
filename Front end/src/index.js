import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Contact from './Page/Contact';
import Home from './Page/Home';
import Menu from './Page/Menu';
import About from './Page/About';
import Login from './Page/login';
import NewProduct from './Page/NewProduct';
import SignUp from './Page/SignUp';
import {store} from './redux/index';
import {Provider} from 'react-redux';
import NotFound from './component/NotFound';
import ErrorBoundary from './component/ErrorBoundary';
import Cart from './Page/Cart';
import Success from './Page/Success';
import Cancel from './Page/Cancel';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={<ErrorBoundary />}>
        <Route index element={<Home/>}/>
        
        <Route path='menu/:filterby' element={<Menu/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='newproduct' element={<NewProduct/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success/>}/>
        <Route path="cancel" element={<Cancel/>}/>
        

      {/* ✅ Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
