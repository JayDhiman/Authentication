
import './App.css'
import Form from './components/Form'
import Imagesection from './components/Imagesection'

function App() {


  return (
   <>
   <div className='container mx-auto shadow-2xl border-collapse  h-fit w-fit rounded-2xl'>
    <div className='flex'>
 <div className='w-fit'>
   {/* image */}
   <Imagesection />
 </div>

 <div className='shadow-xl bg-neutral-900 w-fit'>

   <Form/>
 </div>
    </div>
    
   </div>
   </>
  )
}

export default App
