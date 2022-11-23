import React, {useState,useEffect} from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Heading,
  Center
} from '@chakra-ui/react'
import { useApi } from '../../hooks/useApi'
import { Link } from 'react-router-dom'
import axios from 'axios';
import CardModal from '../../components/card/CardModal';

export default function Home() {
    const { fetchData,fetchLoading, fetchUlang } = useApi();

    useEffect(() => {
        fetchUlang()
    }, []);

    const [modal,setModal] = useState(false)
    const [selectedID,setSelectedID] = useState(1)
    const handleModal = (id) =>{
        setSelectedID(id)
        setModal(!modal)
    }
  return (
    <div>
        {modal && <CardModal closeModal={handleModal} kompor={selectedID}/>}
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            marginBottom: 50,
            marginTop: 50,
        }}>
            <Heading>Daftar Provinsi di Indonesia</Heading>
            <Link to={'/add'}><Button>Tambah Provinsi :</Button></Link>
        </div>
        
        <Center 
        display={'flex'}
        width={'1200px'}
        marginX={'auto'}
        >
            <Table>
            <Thead>
                <Tr>
                    <Th>NO</Th>
                    <Th>Provinsi</Th>
                    <Th>Action</Th>
                </Tr>
            </Thead>
            <Tbody>
                {fetchData?.data.data.map((e,i)=>(
                    <Tr key={e.id}>
                    <Td>{i + 1}</Td>
                    <Td>{e.name}</Td>
                    <Td 
                    display={'flex'}
                    gap={10}
                    >
                        <Link to={`/view/${e.id}`}><Button bgColor={'blue'} color={'white'}>View</Button></Link>
                        <Link to={`/edit/${e.id}`}><Button bgColor={'green'} color={'white'}>Edit</Button></Link>
                        <Button onClick={()=>{handleModal(e.id)}}>Delete</Button>
                        
                    </Td>
                </Tr>
                ))}
            </Tbody>
        </Table>
        </Center>

    </div>
  )
}

                        //<Button onClick={()=>{handleDelete(e.id)}} bgColor={'red'} color={'white'}>Delete</Button>
//
