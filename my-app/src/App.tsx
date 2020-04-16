import React from "react";
import { useImageHook } from "./useUrlLoader";

interface IShowResultProps {
  message: string;
  status: string;
}

function App() {
  const [show, setShow] = React.useState(true);
  const [data, loading] = useImageHook(
    'https://dog.ceo/api/breeds/image/random',
    )
  const dogData  = data as IShowResultProps

  return (
    <div>
        
       {loading ? 'is loading' : 'finished'}

       {
         !loading && <img src={dogData.message}/>
       }
    </div>
  );
}

export default App;
