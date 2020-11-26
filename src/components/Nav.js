import React from 'react'
import { Button, Box } from '@chakra-ui/core'
import { Grid, GridItem, Divider, Image } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

function Nav() {

  return (
    <>
      <Box py={3} px={150} fontFamily="Montserrat">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>

            <Link to="/">
              <Image boxSize="100px" objectFit="cover" src={Logo} />
            </Link>

          </GridItem>
          <GridItem ml='auto' >
            <Button colorScheme="teal" textTransform='uppercase' mr={5} variant="outline">
              <Link to="/particulier">espace particulier</Link>

            </Button>

            <Button colorScheme="teal" textTransform='uppercase' variant="outline">
              <Link to="/veterinaire">espace vétérinaire</Link>
            </Button>

          </GridItem>
        </Grid>
      </Box>
      <Divider borderWidth="1px" />
    </>
  )
}

export default Nav
