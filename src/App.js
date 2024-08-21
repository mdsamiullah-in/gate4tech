// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from "./School/Home"
// import Teachers from "./School/Teachers"
// import Holiday from "./School/Holiday"
// import Contact from "./School/Contact"

import userEvent from "@testing-library/user-event"
import { useState } from "react"

// function App(){
//   return(
//     <BrowserRouter>
//          <Routes>
//             <Route path="/" element={<Home></Home>}/>
//             <Route path="/home" element={<Home></Home>}/>
//             <Route path="/teachers" element={<Teachers></Teachers>}/>
//             <Route path="/holiday" element={<Holiday></Holiday>}/>
//             <Route path="contact-us" element={<Contact></Contact>}/>
//             <Route path="*" element={<h1>404 | Not Found</h1>}></Route>
//          </Routes>
//     </BrowserRouter>

//   )
// }    

// export default App




const App = ()=>{

  const [fontSize, setfontSize] = useState(40)

     

    return(

      <div>

        <h1 style={{
          fontSize: fontSize,
          color: fontSize == 40 ? 'dodgerblue': 'green'
        }}>Gate4Tech</h1>

        <button onClick={()=>{
            setfontSize(fontSize == 40 ? 100 : 40)
        }}>{fontSize == 40 ? 'convert font size to 80px' : 'convert fontsize to 40px'}</button>
      </div>

    )
}

export default App