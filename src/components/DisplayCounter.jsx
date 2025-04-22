import { useSelector } from "react-redux"

const DisplayCounter = ()=>{

  const {counterVal}=useSelector(store=>store.counter) //counter here is the name defined within slice in index.js

  return(
    <p className="fs-5 mb-4">Counter current value is : {counterVal}</p>
  )
}
export default DisplayCounter