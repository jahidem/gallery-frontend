
import { Image } from "@chakra-ui/react";
const GetImage = ({imageUUID})=>{
  return(<Image 
  src={'https://ucarecdn.com/'+imageUUID+'/'}
  h="30vh" 
  p="5px  5px"
  objectFit='center' />)
}

export default GetImage;