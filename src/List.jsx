


function List(){
    let Students=["Utsav","Nisha","Ashifa","Swastika","Naman"]
    return(
        <>
         <ol>
            {
                Students.map((cur,index)=><li key={index}>{cur}</li>)
            }
         </ol>
        </>
    )
}
export default List;

//rfc