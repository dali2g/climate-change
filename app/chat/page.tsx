"use client"
import NextCors from 'nextjs-cors';
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import React,{useState} from 'react'
import Loader from "@/public/loader.gif"
import Image from 'next/image'


interface ChatProps {
  climateData: string

}

//==================================================

const  GetSaticProps = async (input:string) =>{
  const url="https://api.chatclimate.ai/chat/"
 
  var data ={
    content:input,
    completionModel:"gpt-3.5-turbo",
    mode:"Hybrid"}
  console.log(data)
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key":"dfe20b1a046a4b27a35b0de7e3937af5",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  const res=await response.json();
  console.log(res)
  var abc = res.response?res.response:res.detail

  return(
      {props:{climateData:abc}}
  )
}


//================================================
//@ts-ignore
const Chat:React.FC<ChatProps> = ({climateData}) => {
  const [output, setoutput] = useState('')
  const [input, setinput] = useState('')
  const [loading, setloading] = useState(false)
  return (
   <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <h1 className='text-xl font-bold font-serif'>
        Ask a Question About Climate Change !!
      </h1>
      <div className='bg-primary-background'>
        <Textarea className='rounded-3xl font-semibold' placeholder='Ask a question' onChange={(e)=> setinput(e.target.value)  }/>
        <Button className='mt-6 rounded-3xl w-[150px] h-[50px] hover:bg-primary-foreground text-foreground font-semibold'
          onClick={ 
            async () => { 

              setoutput("Loading...")
              
            var a = await GetSaticProps(input)
            setoutput(a.props.climateData)
           } } 
          >
          Submit Question</Button>

    </div>

    <div className='text-md font-semibold flex flex-col items-center justify-center text-foreground'>
        {output ? output : null}
        {output === "Loading..." ? <Image src={Loader} alt="Loading..." width={50} height={50} /> : output}


      </div>

        

    </section>
  )
}

export default Chat