import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
<Box
  sx={{
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Adding a soft shadow for depth
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '356px', md: '320px' },
    height: '326px',
    margin: 'auto',
    marginTop: '20px', // Example marginTop, you can adjust this as needed
    backgroundColor: 'white', // Background color for the Box
    border: '1px solid #e0e0e0', // Light border for definition
    padding: '20px', // Adding padding inside the box
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
    '&:hover': {
      transform: 'scale(1.05)', // Slight zoom effect on hover
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)', // Darker shadow on hover
    },
    boxSizing: 'border-box', // Ensure padding doesn't affect overall dimensions
  }}
>

    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
