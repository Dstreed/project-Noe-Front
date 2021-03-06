import React from 'react'
import { Button, Box, Flex, Divider, Image, Spacer, useColorMode } from '@chakra-ui/core'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import Burger from '../../assets/menu.svg'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/core"
import SleepMode from '../../assets/sleep-mode.svg'

function NavParticulier() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { colorMode, toggleColorMode } = useColorMode()


  return (
    <>
      <Flex fontFamily="Montserrat, sans-serif">
        <Box py={3}>
          <Link to="/">
            <Image boxSize="100px" objectFit="cover" src={Logo} alt="logo" />
          </Link>
        </Box>
        <Spacer />
        <Button name="button" onClick={toggleColorMode} my={10} mr={10}>
          <Image width="100%"
            height="auto" boxSize="25px" src={SleepMode} alt="Mode" /></Button>
        <Button name="button" variant="link" ref={btnRef} onClick={onOpen} size="sm" py={10} mr={10} >
          <Image boxSize="25px" src={Burger} alt="menu" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Box py={10} fontFamily="Montserrat, sans-serif">
                  <Button name="button" mr={5} color="brand.900" textTransform='uppercase' variant="link">
                    <Link to="/profil_particulier">Mon espace</Link>
                  </Button>
                </Box>
                <Box fontFamily="Montserrat, sans-serif">
                  <Button name="button" mr={5} color="brand.900" textTransform='uppercase' variant="link">
                    <Link to="/">Deconnexion</Link>
                  </Button>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
      <Divider borderWidth="1px" />
    </>
  )
}

export default NavParticulier

