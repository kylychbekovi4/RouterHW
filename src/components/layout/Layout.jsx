import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Asia from "../pages/Asia";
import Europe from "../pages/Europe";
import America from "../pages/America";

const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/asia" element={<Asia />} />
					<Route path="/europe" element={<Europe />} />
					<Route path="/america" element={<America />} />

				</Routes>
			</main>
		</div>
	);
};

export default Layout;
