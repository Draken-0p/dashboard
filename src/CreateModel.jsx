import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import DropboxChooser from 'react-dropbox-chooser'

const CreateModel = ({children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name,setname] = useState()
  const [age,setage] = useState()
  const [gender,setgender] = useState()
  const [pid,setpid] = useState("DE-67429")
  const [file1,setfile1] = useState()
  const [file2,setfile2] = useState()
  const [status,setstatus] = useState("pending")
  const toast = useToast();
  const [Upload,setupload] = useState("Choose a File ")

  const APP_KEY = 'xkrb8rbksq7pgom'

  const  handleSuccess = (files) =>{
    console.log(files[0].link.toString())
    setfile1(files[0].link)
    setupload("uploaded")
    
  }
  const  handleSuccess2 = (files) =>{
    console.log(files)
    setfile2(files[0].link.toString())
    
  }
  const handlesubmit = async() =>{

    if(name == ""){
      setname("-")
    }
    if(age == " "){
      setage("-")
    }
    if(gender == ""){
      setgender("-")
    }

    try{
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/post",
        {
          name,
          age,
          gender,
          status,
          file1,
          file2,
          pid,
        },
        config
      ).then(()=>{
        console.log(data);

      });
    
        
    } catch (error){
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  
  }



  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Application</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="name"
                onChange={(e) => setname(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>age</FormLabel>
              <Input
                placeholder="age"
                onChange={(e) => setage(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>gender</FormLabel>
              <Input
                placeholder="gender"
                onChange={(e) => setgender(e.target.value)}
              />
            </FormControl>

            <FormControl id="pic">
              <FormLabel>Upload your 1st File</FormLabel>
              <DropboxChooser
                appKey={APP_KEY}
                success={handleSuccess}
                cancel={() => console.log("closed")}
                multiselect={true}
              >
                <Button>{Upload}</Button>
              </DropboxChooser>
            </FormControl>
            <FormControl id="pic">
              <FormLabel>Upload your 2nd File</FormLabel>
              <DropboxChooser
                appKey={APP_KEY}
                success={handleSuccess2}
                cancel={() => console.log("closed")}
                multiselect={true}
              >
                <Button>Choose a File</Button>
              </DropboxChooser>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={()=>{
              handlesubmit()
              onClose()
            }}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateModel