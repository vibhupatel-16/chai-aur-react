import React, { useCallback, useState } from 'react'

const App = () => {
  const[length, setlength] = useState(0);
  const[numberAllowed, setnumberAllowed] = useState(false)
  const[charAllowed, setcharAllowed] = useState(false)
  const[Password, setpassword] = useState("")

  const passwordgenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()~`/}]"
  },[length, numberAllowed, charAllowed, Password])
  return (
    <>
    <body className='bg-black'>
       <div className='text-center font-bold mt-5 text-4xl text-white'>
      Password Generator
    </div>
    </body>
   
    </>
    
  )
}

export default App
