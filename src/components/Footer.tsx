import {Flex, Heading, Link} from "@chakra-ui/react";

export default function Footer () {
    
    return <Flex as = "footer" h = "10vh" bg = "purple.700" justifyContent = "center" alignItems = "center"> 
        <Heading as = "h1" size = "md">
            Developed by <Link href="https://github.com/BiaFonsecaCalepso">BiaDev</Link> 
        </Heading>
    </Flex>
}