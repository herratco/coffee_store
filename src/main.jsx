import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import util from "./components/util/data.json";
import { json } from "react-router-dom";
import { LessThan, GreaterThan } from "./components/helper";
import "./App.css";

import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}
		>
			<Route
				index
				loader={dataLoader}
				element={<ItemListContainer />}
			/>

			<Route
				path="detail/:id"
				loader={dataLoader}
				element={<ItemDetail />}
			/>
			<Route
				path="lessthan2000"
				loader={dataLoader}
				element={<LessThan />}
			/>
			<Route
				path="greaterthan2000"
				loader={dataLoader}
				element={<GreaterThan />}
			/>
		</Route>
	)
);

function dataLoader() {
	return json(util);
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
