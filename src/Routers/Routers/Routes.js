import Home from "../../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";

const routers = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element:<Home></Home>
			},
			{
				path: "/home",
				element:<Home></Home>
			}
		]
	}
])
export default routers;