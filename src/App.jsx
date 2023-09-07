import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/layout";

export default function App() {
	return (
		<ChakraProvider>
			<Layout />
		</ChakraProvider>
	);
}
