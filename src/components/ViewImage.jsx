
import { Image, LinkBox } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { FaDownload, FaExpand, FaInfoCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import {
  Stack,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import axios from "axios";
const GetImage = ({ imageUUID, setLoading, setChanged, loading, changed }) => {
  const firstField = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovering, setIsHovering] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  useEffect(() => {
    const getImage = async () => {
      axios.get('https://ucarecdn.com/' + imageUUID + '/')
        .then(res => {
          const response = res;
          setImageFile(response);
        })
    }
    getImage();
  }, []);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const openDrawer = () => {

    onOpen();

  }
  const deleteImage = () => {
    setIsHovering(false);
    onClose();
    const deleteReq = async () => {
      await axios.delete('https://versity-db.herokuapp.com/gallery/delete/'
        + imageUUID);
      setLoading(!loading);
      setChanged(!changed);
    }
    deleteReq();
  }
  const closeDrawer = () => {
    setIsHovering(false);
    onClose();
  }
  return ((imageFile != null) && <Box
    onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
    alignContent="center"
    alignItems="center"
   border={isHovering? "5px solid #2B6CB0" : "none"}
   margin= {isHovering? "0px":"5px"}
   borderRadius="4px"
   onClick={openDrawer} 
  >
      <Image
        src={'https://ucarecdn.com/' + imageUUID + '/'}
        h="30vh"
        objectFit='center' />


    <Drawer
      isOpen={isOpen}
      placement='right'
      initialFocusRef={firstField}
      onClose={closeDrawer}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton m="0 10px" />
        <DrawerHeader m="8px 0"borderBottomWidth='1px'>

        </DrawerHeader>

        <DrawerBody>
          <Stack spacing='16px'>
            <Box >
              <FormLabel htmlFor='username'>Image Datails</FormLabel>
              <Image
                src={'https://ucarecdn.com/' + imageUUID + '/'}
                w="100%"
                p="5px  5px"
                objectFit='center' />
            </Box>

            <Box display="flex" justifyContent="space-evenly">
              <a href={'https://ucarecdn.com/' + imageUUID + '/'} download="sadfsd">
                <Button size='sm'>Download </Button>
              </a>
              <Button size='sm'>Expand</Button>
            </Box>
            <hr />
            <Box fontSize="14px" color="gray.500" >
              <Text color='black'>Image Format: </Text><Text>{imageFile.headers['content-type']}</Text>
              <Text color='black'>Upload Date: </Text><Text>{imageFile.headers['last-modified']}</Text>
            </Box>

          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth='1px'
          display="flex"
          justifyContent="space-evenly">
          <Button variant='outline' size='sm' mr={3} onClick={closeDrawer}>
            Cancel
          </Button>
          <Button colorScheme='blue' size='sm' onClick={deleteImage}>Delete</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </Box>)
}

export default GetImage;