import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  const inputFunction = useState(() =>{
    console.log("hui there");

  },[])
 
  return <div>
    <ButtonComponent inputFunction={inputFunction} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const ButtonComponent = memo(({inputFunction}) => {
   console.log("child render")
    return <div>
       <button>Button clicked</button>
  </div>
})
export default App;
