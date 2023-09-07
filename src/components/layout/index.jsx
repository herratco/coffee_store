import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

export default function Layout() {
	return (
		<Box
			display="flex"
			flexDirection="column"
			padding="min(50px, 2vw)"
			height="100vh"
			width="100vw"
			mb="100px"
		>
			<NavBar>
				<CartWidget />
			</NavBar>
			<Box as="div">{<Outlet />}</Box>
		</Box>
	);
}
