"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import React,{useState} from 'react'
import Loader from "@/public/loader.gif"
import Image from 'next/image'
import GetStaticProps from "@/app/api/index"



//==================================================


//================================================
//@ts-ignore
const Chat:React.FC<ChatProps> = ({climateData}) => {
  const [output, setoutput] = useState<string>('')
  const [input, setinput] = useState<string>('')
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
              
            var a = await GetStaticProps(input)
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