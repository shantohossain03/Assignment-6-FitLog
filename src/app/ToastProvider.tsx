'use client'

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function ToastProvider() {
  return (
    <ToastContainer
      position="top-center"
      toastStyle={{
        width: "75vw",
        maxWidth: "320px",
        margin: "0 auto",
      }}
    />
  );
}

export default ToastProvider;