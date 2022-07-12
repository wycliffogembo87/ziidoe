import { Text, Container, Box, VStack } from "@chakra-ui/react"

function Slogan() {
  return (
    <Box alignItems="center" w="full" h="full" p={5} boxShadow="2xl">
      <VStack w='100%' h="100%">
        <Text fontSize={50} textAlign="center" textColor="black">Welcome to Ziidoh</Text>
        <Text fontSize={25} textColor="blue.500">The friendly teams network</Text>
      </VStack>
    </Box>
  )
}

export default function Index() {
  return (
    <Container w="screen" h="screen" padding={5} centerContent>
      <Slogan />
    </Container>
  );
}
  //   <Center bg='tomato' h='100px' color='white'>
  //     <h1>Welcome to Remix</h1>
  //     <ul>
  //       <li>
  //         <a
  //           target="_blank"
  //           href="https://remix.run/tutorials/blog"
  //           rel="noreferrer"
  //         >
  //           15m Quickstart Blog Tutorial
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           target="_blank"
  //           href="https://remix.run/tutorials/jokes"
  //           rel="noreferrer"
  //         >
  //           Deep Dive Jokes App Tutorial
  //         </a>
  //       </li>
  //       <li>
  //         <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
  //           Remix Docs
  //         </a>
  //       </li>
  //     </ul>
  //   </Center>
  // );
