import{ useState} from 'react';
import Input from '../Input/Input';
import Add from '../Add/Add';
import Subtract from '../Subtract/Subtract';
const Main = ()=>{

    const[inputVal, setInputVal] = useState(' ')
    //const[add,setAdd] = useState([])

    return (
        <>
        <Input
        value ={inputVal}
        onChangeHandler = {(event) =>{
        const value =event.target.value;
        setInputVal(value);
        }}/>

        <Add
        onClickHandler= {(add)=>{
          function add (a,b) {
            let add = (a+b);
            return add;

          }
          
        }}/>
        <Subtract
           onClickHandler= {(sub)=>{
            function sub (a,b) {
              let sub = (a-b);
              return sub;
            }
         }}/>
        </>
    );

};

export default Main;