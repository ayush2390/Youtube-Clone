import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import {Box} from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id}  = useParams()
  useEffect(() =>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
     <div
  style={{
    background: 'linear-gradient(90deg, rgba(36,2,0,1) 0%, rgba(246,0,92,1) 59%, rgba(0,212,255,1) 100%)',
    zIndex: 10,
    height: '300px',
    borderRadius: '20px', // Adding rounded corners for a smoother look
    padding: '20px', // Add padding to the inside of the div
    boxSizing: 'border-box', // Ensure padding doesn't affect overall height or width
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
    display: 'flex', // Center content vertically and horizontally if needed
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      transform: 'scale(1.05)', // Slight zoom effect on hover
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)', // Darker shadow on hover
    },
  }}
>
        <ChannelCard channelDetail={channelDetail}  marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '100px'}}}/>
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
