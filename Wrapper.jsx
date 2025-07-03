function Wrapper({children,color="green"}){
    return(
        <div style={{color:color,border:"5px solid blue",width:"300px",margin:"40px"}}>
            {children}
        </div>
    )
}
export default Wrapper;