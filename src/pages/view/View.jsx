import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'


export default function View() {
    const {id} = useParams()
    const [provence,setProvence] = useState('')
 
    useEffect(()=>{
        axios.get(`http://34.101.172.140:3005/api/propinsi/viewedit/?id_prov=${id}`)
        .then(res => {
           setProvence(res.data.data[0].name)
        })
        .catch(err => {
            console.error(err)
        })
    },[])
  return (
    <div style={{
        width:'100vw',
        height:'100vh',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap:20
    }}>
        <Heading>{id}.</Heading>
        <Heading>{provence}</Heading>
    </div>
  )
}
