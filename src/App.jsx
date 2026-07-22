import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive") // in array
  

  return (
    <>
    {/* <div className="min-h-screen bg-blue-500
     flex items-center justify-center">

     <h1 className="text-4xl font-bold text-white">
      Tailwind working!
     </h1>

     </div> */}

     <div className="w-full h-screen duration-900"
      style = { {backgroundColor: color}} //  style also inside div tag
      >
        <div className="fixed 
        flex flex-wrap justify-center bottom-12
        inset-x-0 px-2">
          <div className="flex flex-wrap justify-center
          gap-3 bg-white px-3 py-2 rounded-2xl"> 

          <button
          
          // onClick={setColor("Red")} It is wrong Onclick need function
          // it does not need what is returned from function 
          // also cannot pass "red" arguments in that way

          onClick= {() => setColor("Red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>  

          <button
          onClick= {() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button> 
          
          <button
          onClick= {() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button> 
          
          <button
          onClick= {() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}
          >Grey</button> 
          
          <button
          onClick= {() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button> 
         
          </div>
        </div> 
     </div>
     </>
  )
}

export default App
