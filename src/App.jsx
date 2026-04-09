import { useState } from 'react'
import './App.css'
import OrderPage from './assets/pages/OrderPage'
import SuccessPage from './assets/pages/SuccessPage';
import HomePage from "./assets/pages/HomePage";

function App() {
  const [page, setPage] = useState("home");
  const [orderData, setOrderData] = useState(null);

  if (page === "home") {
    return <HomePage setPage={setPage} />;
  }

  if (page === "order") {
    return (
      <OrderPage
        setOrderData={(data) => {
          setOrderData(data);
          setPage("success");
        }}
      />
    );
  }

  if (page === "success") {
    return <SuccessPage orderData={orderData} />;
  }
}
export default App;
