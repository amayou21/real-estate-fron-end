import React, { useState } from 'react'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img3house.jpg'
import img3 from '../../images/img4.jpg'
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';

const images = [
    {
        label: 'img1',
        imgPath: img1,
        description: "description 1",
    },
    {
        label: 'img2',
        imgPath: img2,
        description: "description 2",
    },
    {
        label: 'img3',
        imgPath: img3,
        description: "description 3",
    },
];

const HSlide = () => {
    const theme = useTheme()


    return (

        <Box sx={{ width: "100%" }}>
            <div style={{ width: '100%' }} className={`${theme.palette.slidBackgroundColor}`}>
             <img src={img2} width="100%" className='xl:h-[400px]'/>
            </div>
        </Box>

    );
}

export default HSlide;
