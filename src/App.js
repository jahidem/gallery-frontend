import { Image, Box } from '@chakra-ui/react'
import { useState } from 'react';
import ExpandView from './components/ExpandView';
import Header from './components/Header';
import ImageContainer from './components/ImageConainer';
const App = () => {

  const [loading,setLoading] = useState(true);
  const [changed,setChanged] = useState(false);
  const [expandView,setExpand] = useState(false);

  return (<>
    <Box width="100vw" height="100vh"
        display="flex"
        alignItems="center"
        flexDirection="column">
        <Header loading={loading} setLoading={setLoading} setChanged={setChanged} changed={changed}/>
        {expandView && <ExpandView/>}
        <ImageContainer setChanged={setChanged} loading = {loading} setLoading={setLoading} changed={changed}/>
      
</Box>
  </>);
}

export default App;