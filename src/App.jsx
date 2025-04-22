
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import DisplayCounter from './components/DisplayCounter'
import Buttons from './components/Buttons'
import { useSelector } from 'react-redux'
import HideButtonMessage from './components/HideButtonMessage'

function App() {

 const privacy= useSelector(store=>store.privacy)

  return (
    <>
<div className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <Header/>
      <div className="col-lg-6 mx-auto">
        {privacy ? <HideButtonMessage/> : <DisplayCounter/>}

        <Buttons/>
      </div>
    </div>
  </div>    </>
  )
}

export default App
