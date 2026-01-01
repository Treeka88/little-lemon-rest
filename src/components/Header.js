function Header(props){
    return(
        <>
            <h1>{props.name}</h1>
            <h2>{props.state}</h2>
        </>
    )
}
export default Header