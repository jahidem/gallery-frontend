import { Box,Image ,Button} from "@chakra-ui/react";
import { useState,useEffect } from "react";
import axios from "axios";

import GetImage from "./ViewImage";
const ImageContainer = ({setLoading,changed,loading}) =>{
  const [allImage,setAllImage] = useState([]);
  
  useEffect(()=>{
    const fetchImages= async()=>{
      axios.get('https://versity-db.herokuapp.com/gallery')
      .then(res=>{
        const data = res.data;
      setAllImage(data);
      setLoading(false);
      console.log(data);
      
    });
      
    }
    fetchImages();
   
    //
  },[changed]);
  return(<Box 
  id="style-7"
          border="1px solid #e8e7e6"
          borderRadius="5px"
          margin="14px 0"
          w="80vw"
         // h="calc( 100vh - 100px)"
         h="800px"
         p="10px"
          bgColor='white'
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          justifyItems="space-around"
          overflow="scroll"
          overflowX= 'hidden'
          >
         {allImage.map((img)=>
          <GetImage key={img.imageFileId} imageUUID={img.imageFileUUID}/>
         ) }
  
          {/* <GetImage imageUUID='c54e4ed2-30de-442d-ba6a-b8beda907407'/>
          
          <GetImage imageUUID='22be53a1-70a6-44c5-878e-a24226a776c8'/>
          
          <GetImage imageUUID='721a446f-f799-4f4d-be5e-95e085ac0124'/>
        
           <GetImage imageUUID='991aa1d3-7d16-4b9d-ad0c-d5b8548e1fa5'/>
       
          <GetImage imageUUID='460abd89-e333-4045-97af-38b54499e1fe'/>

          <GetImage imageUUID='5c8afd55-b4a5-4c08-b556-81f0cc31dc14'/>

          <GetImage imageUUID='9e09bc8a-893c-401e-803e-73029649f45c'/> 
          <GetImage imageUUID='c54e4ed2-30de-442d-ba6a-b8beda907407'/>
          
          <GetImage imageUUID='22be53a1-70a6-44c5-878e-a24226a776c8'/>
          
          <GetImage imageUUID='721a446f-f799-4f4d-be5e-95e085ac0124'/>
        
           <GetImage imageUUID='991aa1d3-7d16-4b9d-ad0c-d5b8548e1fa5'/>
       
          <GetImage imageUUID='460abd89-e333-4045-97af-38b54499e1fe'/>

          <GetImage imageUUID='5c8afd55-b4a5-4c08-b556-81f0cc31dc14'/>

          <GetImage imageUUID='9e09bc8a-893c-401e-803e-73029649f45c'/> */}
           
           </Box>
  );
}

export default ImageContainer;