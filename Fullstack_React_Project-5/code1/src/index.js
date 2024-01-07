import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";

import store from "./Store/index.js";

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );