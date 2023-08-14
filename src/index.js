import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataDisplay from './DataDisp';
import ByPriority from './ByPriority';
import ByUser from './ByUser';
import Sort_ByPriority from './Sort_ByPriority';
import Sort_ByTitle from './Sort_ByTitle';
import useFetch from './useFetch';
import reportWebVitals from './reportWebVitals';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DataDisplay />} />
          <Route path="ByPriority" element={<ByPriority />} />
          <Route path="ByUser" element={<ByUser />} />
          <Route path="Sort_ByPriority" element={<Sort_ByPriority />} />
          <Route path="Sort_ByTitle" element={<Sort_ByTitle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
