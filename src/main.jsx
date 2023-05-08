import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { HashRouter } from "react-router-dom";
import App from './App';
import { ScrollToTop } from './components/ScrollTotop';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
