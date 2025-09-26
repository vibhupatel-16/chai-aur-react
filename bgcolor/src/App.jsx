import React from 'react'
import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("olive")
  return (
    <div className='h-screen w-full duration-200'
     style = {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className='flex flex-wrap text-black gap-3 shadow-lg bg-white rounded-2xl px-3 py-1'>
          <button onClick={()=>setcolor("red")} className='px-4 py-1 rounded-full shadow-2xl bg-white outline-none' style={{background: "red"}}>Red</button>
          <button onClick={()=>setcolor("pink")} className='px-4 py-1 rounded-full shadow-2xl bg-white outline-none'style={{backgroundColor:"pink"}}>Pink</button>
           <button onClick={()=>setcolor("blue")} className='px-4 py-1 rounded-full shadow-2xl bg-white outline-none'style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setcolor("yellow")} className='px-4 py-1 rounded-full shadow-2xl bg-white outline-none'style={{backgroundColor:"yellow"}}>Yellow</button>
             <button onClick={()=>{setcolor("brown")}} className='px-4 py-1 rounded-full shadow-2xl bg-white outline-none'style={{backgroundColor:"brown"}}>Brown</button>
              <button onClick={()=>{setcolor("green")}} className='px-4 py-1 rounded-full shadow-2xl bg-white outline-none'style={{backgroundColor:"green"}}>Green</button>
               <button onClick={()=>{setcolor("orange")}} className='px-4 py-1 rounded-full shadow-2xl bg-white outline-none'style={{backgroundColor:"orange"}}>Orange</button>
               <button onClick={()=>{setcolor("grey")}} className='px-4 py-1 rounded-full shadow-2xl bg-white outline-none'style={{backgroundColor:"grey"}}>Grey</button>
        </div>
      </div>
    </div>
  )
}

export default App