import React from 'react'
import {Card,CardBody,Text,ButtonGroup,Button} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CardModal({closeModal,kompor}) {
  //navigate
  const navigate = useNavigate()
  const back = () =>{
    navigate(-1)
  }

  const handleDelete = (id) =>{
        axios.post(`http://34.101.172.140:3005/api/propinsi/delete/`,{
            id_prov : id
        })
        .then(() => back())
        .catch(err => {console.error(err)})
    }
  return (
    <div
    style={{
      width:'100vw',
      height:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'rgba(0, 0, 0, 0.41)',
      zIndex:100,
      position:'fixed',
      left:0,
      top:0
    }}
    >
        <Card 
        height={200}
        width={500}
        backgroundColor={'white'}
        >
          <CardBody
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <div
            style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'space-between'
            }}
            >
            <Text>Apakah anda yakin akan menghapus ?</Text>
            <CloseIcon
            cursor={'pointer'}
            onClick={()=> closeModal(false)}
            />
            </div>
            <ButtonGroup
            display={'flex'}
            alignItems={'center'}
            gap={10}
            >
              <Button 
              onClick={()=>{handleDelete(kompor)}}
              color={'red'}
              >Delete</Button>
              <Button
              cursor={'pointer'}
              onClick={()=> closeModal(false)}
              >Cancel</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
    </div>
  )
}

