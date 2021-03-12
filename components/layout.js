import { Container } from "@chakra-ui/react"
function Layout({ children }) {
  return <><Container mt={16} maxW="container.lg">{children}</Container></>
}
export default Layout