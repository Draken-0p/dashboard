
import React, { useEffect } from 'react'
import './App.css'
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from './logo.png'


const Nav = () => {
  

  const { colorMode, toggleColorMode } = useColorMode()
  useEffect(()=>{
    if(colorMode === 'light'){
      toggleColorMode()
    }
  
  },[colorMode])
  
  return (
    <>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} >
      <Flex h={16} alignItems={'center'}  justifyContent={'space-between'}>
        <Box><img src={logo} alt="logo" /></Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
          
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                  <Flex gap={2}><Avatar
                  size={'sm'}
                  src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
                <Text alignItems={'center'}>My Account</Text></Flex>
                
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem >Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  </>
   
  )
}

export default Nav