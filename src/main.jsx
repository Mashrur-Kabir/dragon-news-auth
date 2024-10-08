import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './index.css'
import router from './routes/Routes';
import AuthProvider from './providers/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} /> {/* route setup */}
    </AuthProvider>
  </StrictMode>,
)
