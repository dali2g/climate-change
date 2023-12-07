import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const Chat = () => {
  return (
   <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <h1 className='text-xl font-bold font-serif'>
        ASK A QUESTION ABOUT CLIMATE CHANGE:
      </h1>
      <div className='bg-primary-background'>
        <Textarea className='rounded-3xl' />
        <Button className='mt-6 rounded-3xl w-[150px] h-[50px] hover:bg-primary-foreground text-foreground font-semibold'
/*           onClick={() => {} } 
 */          >
          Submit Question</Button>

    </div>


    
    <div className='text-md font-normal flex flex-col items-center justify-center text-foreground'>
        <p>Backend logic here !</p>
        <p>Backend logic here !</p>
        <p>Backend logic here !</p>
        <p>Backend logic here !</p>
        <p>Backend logic here !</p>
        <p>Backend logic here !</p>
        <p>Backend logic here !</p>
        <p>Backend logic here !</p>


      </div>

        

    </section>
  )
}

export default Chat