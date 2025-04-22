import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return <Container maxW={"1440px"} px={4}>
    <Flex
      h={16}
      justifyContent={"space-between"}
      flexDir={{
          base:"column",
          sm:"row"
        }}
    >

      <Text></Text>

    </Flex>
  </Container>
}

export default Navbar