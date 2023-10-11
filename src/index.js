import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import './assets/css/fontawesome-free/css/all.css';
import './assets/css/bootstrap/css/bootstrap.css';
import './assets/css/ruang-admin.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);