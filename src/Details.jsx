import React, { useEffect, useState } from 'react'
import './dashboard.css'
import axios from 'axios'
import { Badge, Button, Divider } from '@chakra-ui/react'

const Details = () => {
    const [data ,setdata] = useState(null);
    const [d ,setd] = useState(null);
    const fetchdata = async() =>{
      const {data} = await axios.get("/api")
   
      setdata(data)
    }
   
    useEffect(() =>{
         fetchdata()
    }, [])
  return (
      <div >
          {data?.map((data)=>{
              console.log(data)
              return (
                <div className="box">
                  <div className="box1">
                    <h2 className="box1-head">{data.tittle}</h2>
                    <div className="box1-end">
                        <Badge variant='solid' colorScheme={data.color} size=''>
                      {data.progress}
                    </Badge>
                    <Button colorScheme='gray' size='sm'>View</Button>
                    </div>
                  </div>
                  <Divider />
                  <p className="box1-status">{data.status}</p>
                </div>
              );
          })}
      </div>
 
  )
}

export default Details