function Welcome({name,email}){
    // const{name,email}=props
    console.log(name)
    // {name:"Amit" ,email:"amitkjdj"}
    return(
        <>
           <h1>Hi..{name}</h1>
           <h2>Email:{email}</h2>
        </>
    )
}
export default Welcome