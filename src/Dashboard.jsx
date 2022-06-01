import React, { useEffect, useState } from 'react'
import './dashboard.css'
import {
  Table,
  Thead,
  Tbody,

  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
  Button,
  Flex,
  Container,

  Text,
} from '@chakra-ui/react'
import CreateModel from './CreateModel';
import axios from 'axios';
import dateFormat from "dateformat";
import {  CheckIcon, ChevronLeftIcon, ChevronRightIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react'




const Dashboard = () => {

  const [data ,setdata] = useState(null);
  
  


    const fetchdata = async()=>{
      const {data} = await axios.get("/api/get")
      console.log(data)
      setdata(data)
    }

    useEffect(()=>{
      fetchdata()
    },[])

    const CircleIcon = (props) => (
      <Icon viewBox='0 0 200 200' {...props}>
        <path
          fill='currentColor'
          d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
      </Icon>
    )


  return (
    <>
      <Box display={{base:"",md:"flex"}} 
       alignItems="center" w="100%" m="auto">
        <Box 
        m="auto" p="3%">
          <div style={{ overflowY: "hidden", height: "100vh" }}><Flex justifyContent="space-between">
            <Heading>Dashbord</Heading>
            <CreateModel>
              <Button bg="btn">+ New Upload</Button>
            </CreateModel>
          </Flex>
          <Flex flexDir="column">
            <br />
            <Flex overflow="auto">
              <TableContainer bg="primary" borderRadius={4}>
                <Table variant="simple">
                  <TableCaption >
                    <ChevronLeftIcon mr='1rem'  />
                    <span> 1  </span>
                    <span> 2  </span>
                    <span> 3 </span>
                    <ChevronRightIcon ml='1rem'/>
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Patient ID</Th>
                      <Th>Patient</Th>
                      <Th>Date of Uploaded</Th>
                      <Th>File uploaded</Th>
                      <Th>Processing Status</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.map((data) => {
                      const date = dateFormat(data.createdAt, "mmmm dS, yyyy");
                      const time = dateFormat(data.createdAt, "h:MM TT");

                      let color = "yellow.500";
                      let btn = "btn";
                      let btncolor = 'white'
                      if (data.status === "pending") {
                        color = "yellow.500";
                        btn = "primary";
                        btncolor = 'primary'
                      }
                      if (data.status === "done") {
                        color = "green.600";
                      }
                      if (data.status === "ongoing") {
                        color = "orange.600";
                        btn = "primary";
                        btncolor = 'primary'
                      }
                      return (
                        <Tr key={data._id}>
                          <Td justifyContent="center">{data.pid}</Td>
                          <Td>
                            <h5> {data.name}</h5>
                            <span>{data.age},</span>
                            <span>{data.gender}</span>
                          </Td>
                          <Td>
                            <h5>{date}</h5>
                            <h5>{time}</h5>
                          </Td>
                          <Td>
                            <span style={{ margin: "atuo" }}>
                              {data.file1 != ""? (
                                <>
                                  <CheckIcon color="btn" />
                                </>
                              ) : (
                                <>
                                  <SmallCloseIcon color="btn" />
                                </>
                              )}
                              rs-fMRI
                            </span>
                            <span>
                              {data.file2 != ""? (
                                <>
                                  <CheckIcon color="btn" />
                                </>
                              ) : (
                                <>
                                  <SmallCloseIcon color="btn" />
                                </>
                              )}
                              t1w
                            </span>
                          </Td>
                          <Td>
                            <span>
                              <CircleIcon boxSize={4} color={color} />
                              {data.status}
                            </span>
                          </Td>
                          <Td>
                            <Button border="2px" borderColor={btn} color={btncolor}>
                              View result
                            </Button>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
          </Flex></div>

          
        </Box>

        <Container position="relative" top={1} >
          <Box
            w="24rem"
            h="14rem"
            bg="primary"
            borderRadius={12}
            m="auto"
            border="2px"
            borderColor="btn"
          >
            <Text color="btn" p={2} fontWeight='bold'>
              KNOWLEDGE BASE
            </Text>
          </Box>
          <br />
          <Box
            w="24rem"
            h="14rem"
            borderRadius={12}
            bg="primary"
            m="auto"
            border="2px"
            borderColor="btn"
          >
            <Text color="btn" p={2} fontWeight='bold'>
              RESEARCH PAPERS
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Dashboard