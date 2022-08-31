import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import {SearchFeed, Feed, VideoDetail, ChannelDetail, Navbar} from './components'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' exact element={<VideoDetail />} />
        <Route path='/channel/:id' exact element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
      </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
