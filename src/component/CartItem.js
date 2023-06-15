import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddItem,DeleteItem,RemoveItem } from '../redux/actions/action'

const CartItem = () => {
  const [data,setData] = useState([]);

  // const {id} = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  
  const getdata = useSelector((state)=> state.addtocartReducer.cardData);
  // console.log(getdata);


  const compare = ()=>{
    console.log(getdata)
    // let comparedata = getdata.filter((e)=>{
    //   return e.id == id
    // });
    // console.log(comparedata)
    // setData(comparedata);
  }

  // add data
  

  const send = (e)=>{
    // console.log(e);
    dispatch(AddItem(e));
  }
  
  const dlt = (id)=>{
    dispatch(DeleteItem(id));
    history("/");
}

// remove one
const remove = (item)=>{
  dispatch(RemoveItem(item))
}

  useEffect(()=>{
    compare();
  // },[id])
},[])


  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Items Details Page
        </h2>

        <section className='container mt-3'>
          {
            getdata == []?<p>No item in cart</p>:
            getdata.map((ele)=>{
              return (
                <>
                <div className="iteamsdetails d-flex m-4">
                <div className="items_img me-4">
              <img src={ele.thumbnail} alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Device Name</strong>  : {ele.title}</p>
                    <p> <strong>Price</strong>  : ₹{ele.price}</p>
                    <p> <strong>Brand</strong>  : {ele.brand}</p>
                    {/* <p> <strong>Total</strong>  :₹  {ele.price * ele.qnty}</p> */}
                    <p> <strong>Total</strong>  :₹  {ele.price}</p>

                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                    <span style={{fontSize:22}}>1</span>
                    {/* <span style={{fontSize:22}}>1 {ele.qnty}</span> */}

                    <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★	</span></p>
                    <p><strong>Order Review :</strong> <span >Awesome {ele.category}	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={()=>dlt(ele.id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
          
                </>
              )
            })
          }
        </section>
      </div>
    </>
  )
}

export default CartItem