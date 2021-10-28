import Main from '../components/Main/Main';
import styles from '../components/Add/Add.css';
import style from '../components/Subtract/Subtract.css';

const Home = (props)=>{
    return (
        
        <div>
        <h3>Enter a Value to Add/Subtract</h3>
        <Main/>
        <h4 style ={{marginLeft:"65px"}}>
             {props.onChangeHandler} Result : <span>  </span></h4>
        </div> 
      
    );
    
};

export default Home;