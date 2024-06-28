
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
 
  const dispatch = useAppDispatch() ;
  const {count} = useAppSelector((state)=> state.counter)

  return (
   <div className="flex justify-center items-center h-screen w-full">
    <div className="flex gap-4 border border-sky-400 p-16">
      <button onClick={()=>dispatch(increment())} className="bg-green-400 text-white px-3 py-2 rounded-md ">Increment</button>
      <button onClick={()=>dispatch(incrementByValue(5))} className="bg-sky-400 text-white px-3 py-2 rounded-md ">Increment by 5</button>
      <h2 className="text-2xl">{count}</h2>
      <button onClick={()=>dispatch(decrement())} className="bg-red-400 text-white px-3 py-2 rounded-md ">Decrement</button>
    </div>
   </div>
  )
}

export default App
