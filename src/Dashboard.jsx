import React from 'react'
import './dashboard.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Flex,
    Avatar,
    Box,
    Text,
    Badge,
  } from '@chakra-ui/react'
import Details from './Details'

const Dashboard = () => {
  return (
    <section className="sec">
      <div className="sec-left"></div>
      <div className="sec-center">
        <Flex>
          <Avatar src="https://bit.ly/sage-adebayo" />
          <Box ml="4">
            <Text fontWeight="bold">
              User1
            </Text>
            <Text fontSize="sm">user1@gmail.com</Text>
          </Box>
        </Flex>
        <hr />
        <br />
        <Details />
        <br />
        <br />
      </div>
      <div className="sec-right"></div>
    </section>
  );
}

export default Dashboard