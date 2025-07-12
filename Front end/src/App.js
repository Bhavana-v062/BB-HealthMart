import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Correct environment variable name
        const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`);

        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const resData = await res.json();
        dispatch(setDataProduct(resData));

      } catch (error) {
        console.error("Failed to fetch products:", error);
        toast.error("Failed to fetch products. Please try again.");
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;

