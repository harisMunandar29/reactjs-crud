import React,{ useState } from 'react'
import {useForm} from 'react-hook-form'
import {
  FormLabel,
  Input,
  Heading,
  Button,
  Center
} from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddProvence() {
    //navigate
    const navigate = useNavigate()  
    
    //back
    const back = () =>{
        navigate(-1)
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    //const handle delete
    const handleAdd = (data) =>{
        axios.post('http://34.101.172.140:3005/api/propinsi/add', {
            id: data.id,
            name: data.provinsi
    })
        .then(()=>{
            back()
        })
        .catch(err=>{console.error(err)})
    }

  return (
    <>
      <Center
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
      width={'1200px'}
      marginX={'auto'}
      >   
        <form
        onSubmit={handleSubmit(handleAdd)}
        >
            <Heading>Tambah Provinsi</Heading>
            <FormLabel><h4>ID : </h4></FormLabel>
                
                <Input id='id' type={'number'} autoComplete={'off'}
                {...register('id',{
                    pattern : {
                        value : true,
                        message : 'Hanya nomor saja!'
                    }
                })}
                />
                {errors.id && (<small>{errors.id.message}</small>)}
            
            <FormLabel><h4>Nama Provinsi : </h4></FormLabel>
                
                <Input autoComplete={'off'} id='provinsi'
                {...register('provinsi',{
                    pattern : {
                        value : true,
                        message : 'Tidak boleh ada angka'
                    }
                })}
                />
                {errors.provinsi && (<small>{errors.provinsi.message}</small>)}
            
            <div style={{
                marginTop:50
            }}>
                <Button type='submit' marginRight={50}>Tambah +</Button>
                <Button bgColor={'red'} type='click' onClick={back}> Cancel </Button>
            </div>
        </form>
       </Center>     
    </>
  )
}
