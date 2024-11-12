import { RouterProvider } from "react-router-dom";
import { router } from "./Router.tsx";
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
  )
}

export default App
