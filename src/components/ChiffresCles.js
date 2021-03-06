import React from 'react'
import { Heading, Text, Box, SimpleGrid, VStack } from '@chakra-ui/core'


function ChiffreCles() {

  return (
    <Box fontFamily="Montserrat, sans-serif">
      <SimpleGrid columns={[1, 1, 4]} spacing="40px" p={20} bg="beige.100">
        <Heading textAlign='center' fontFamily="Montserrat, sans-serif" as="h2">Chiffres-clés</Heading>
        <Box >
          <VStack>
            <Text fontWeight="bold" fontSize="3xl">5000</Text>
            <Text textAlign="center">Animaux sont répertoriés</Text>
          </VStack>
        </Box>
        <Box>
          <VStack>
            <Text fontWeight="bold" fontSize="3xl">437</Text>
            <Text textAlign="center">Particuliers nous ont fait confiance</Text>
          </VStack>
        </Box>
        <Box >
          <VStack>
            <Text fontWeight="bold" fontSize="3xl">1850</Text>
            <Text textAlign="center">Animaux retrouvés grâce à notre plateforme</Text>
          </VStack>
        </Box>
      </SimpleGrid >
    </Box>
  )
}

export default ChiffreCles
