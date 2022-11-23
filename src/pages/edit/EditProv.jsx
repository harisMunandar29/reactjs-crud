import React,{  useEffect } from 'react'
import {useForm} from 'react-hook-form'
import {
  FormLabel,
  Input,
  Heading,
  Button,
  Center
} from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate , useParams } from 'react-router-dom'

export default function EditProv() {
  //navigate
    const navigate = useNavigate()  
    
    //back
    const back = () =>{
        navigate(-1)
    }

  //react hook form
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm()

  //use params
  const {id} = useParams()

  const handleLogin = (data) =>{
    axios.post(`http://34.101.172.140:3005/api/propinsi/update?id_prov=${id}`,{
      name : data.provinsi
    })
    .then(()=>{
      back()
    })
    .catch((err)=>{
      console.info(err)
    })
    
  }

  useEffect(() => {
    getCurrentProvince()
  }, []);

    const getCurrentProvince = ()=>{
        axios.get(`http://34.101.172.140:3005/api/propinsi/viewedit/?id_prov=${id}`)
        .then((res)=>{
          setValue('provinsi', res.data.data[0].name)
        })
        .catch((err)=>{
          console.error(err)
        })
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
        onSubmit={handleSubmit(handleLogin)}
        >
            <Heading>Edit Provinsi</Heading>
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
                <Button type='submit' marginRight={50}>Edit</Button>
                <Button bgColor={'red'} type='click' onClick={back}> Cancel </Button>
            </div>
        </form>
      </Center>
    </>
  )
}
