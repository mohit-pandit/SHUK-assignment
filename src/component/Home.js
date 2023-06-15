import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from 'react'
import './css/Home.css';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux';
import {AddItem} from '../redux/actions/action'


export default function Home() {
  const [ProductData, setProductData] = useState([]);
  const [ProductLoaded, setProductLoaded] = useState(false);

  const fetchProduct = async () => {
    try {
      let response = await fetch('https://dummyjson.com/products');
      let Datajson = await response.json();
      return { success: true, data: Datajson.products };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  }


  useEffect(() => {

    (async () => {
      setProductLoaded(false);
      let res = await fetchProduct();
      if (res.success) {
        setProductData(res.data);
        setProductLoaded(true);
      }
    })();
  }, [])


  const dispatch = useDispatch();

  const Storeitem = (e)=>{
    dispatch(AddItem(e))
  }

  return (
    <>
      <h2 className='mt-3 mb-2' style={{'text-align':'center'}}>Welcome to Product Dashboard</h2>
      <div className="d-flex MainContainer">
        {
          ProductLoaded ? (
            ProductData.map((item,index) => {

              return (
                <Card className='mt-4 mb-2' sx={{ maxWidth: 345 , height: '432px',boxShadow:'0px 0px 6px 0px','position':'relative'}} key={index}>

                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        S
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={item.title}
                    subheader={item.brand}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.thumbnail}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                     {item.description}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                     <p className='mt-2' style={{'font-weight':'800'}}>Price :₹ {item.price}</p>
                    </Typography>
                  </CardContent>
               
                  <Button variant="contained" onClick={()=>Storeitem(item)}>Add To Cart</Button>

                </Card>)
            })
          ) : <p>No Product found, please try again</p>
        }
      </div>

    </>

  );
}