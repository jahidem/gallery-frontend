import { Box, Button,Text } from "@chakra-ui/react";
import { Widget } from "@uploadcare/react-widget";
import axios from "axios";

const Header=({loading,setLoading,setChanged,changed})=>{
  const handleUpload = (fileInfo) => {
    
    console.log("Only this uuid goes to backend -->" + fileInfo.uuid);
    axios.post("https://versity-db.herokuapp.com/gallery/post",{
      imageFileUUID: fileInfo.uuid
    }).then(()=>{
      setChanged(!changed);
      setLoading(!loading);
    })
    
    //setImgUrl(fileInfo.cdnUrl + '-/scale_crop/280x280/center/');
  };

  return(<Box width="100%" 
  height="70px"
  bgColor="white"
  display="flex" 
  alignItems="center"
  justifyContent="center"
  boxShadow="1px 1px 1px #e8e7e6"
  >
  <Box w="1300px"
    display="flex"
    p="0 30px"
    justifyContent="space-between">
    <Box display="flex" alignItems='center'>
    <Text  fontSize='3xl'
      fontWeight={500}
      m='0 10px 0 0 '
     color='#505967' >Gallery</Text>
     <Button
    onClick={()=>{
      setLoading(true)
      setChanged(1-changed)
      }}
    isLoading ={loading}
    loadingText='Loading'
    colorScheme='blue'
    size='sm'
     variant='solid'
    spinnerPlacement='start'
  >reload</Button>
  </Box>
    <Widget onChange={(fileInfo) => handleUpload(fileInfo)}
      publicKey="6c3c08a73b43963de87b"
      clearable
      imagesOnly
       />
       </Box>
  </Box>)
}

export default Header;