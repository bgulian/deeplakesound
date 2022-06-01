import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import  '../eightst_styles.css';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'

const itemData = [
{
	"img": '../images/gearshot.jpg',
	"title": "somegear"
},
{
	"img": './gearshot.jpg',
	"title": "somegear"
},
{
	"img": '../images/gearshot.jpg',
	"title": "somegear"
},
{
	"img": '../images/gearshot.jpg',
	"title": "somegear"
},
{
	"img": '../images/gearshot.jpg',
	"title": "somegear"
},
{
	"img": '../images/gearshot.jpg',
	"title": "somegear"
}
]
const TheBuild = () => {


	

return (
	<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
	</ImageList>
	);
}

export default TheBuild;