import { Home, Products, Users } from "@/pages";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Menu, Navbar } from "@/components";
import "@/styles/global.scss";
import { ThemeProvider, bgResolver } from "@/contexts/themeContext";

function App() {
	const Layout = () => (
		<div className={`main ${bgResolver("bgLight", "bgDark")}`}>
			<Navbar />
			<div className="container">
				<div className="menuContainer">
					<Menu />
				</div>
				<div className="contentContainer">
					<Outlet />
				</div>
			</div>
		</div>
	);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "users",
					element: <Users />,
				},
				{
					path: "products",
					element: <Products />,
				},
			],
		},
	]);

	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
