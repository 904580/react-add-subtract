const Input = (props)=>{
    return(

        <div style ={{paddingLeft: '30px'}}>
        <input type = "text"
        value={props.value}
        onChange = {props.onChangeHandler}/>
        </div>
    );
};

export default Input;