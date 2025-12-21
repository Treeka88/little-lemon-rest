function LogIn(){
    return(
        <>
        <form style={{display: 'grid', gap: '2px', maxWidth: 200, margin: 'auto'}}>
            <label>
                Username:
                <input type="text" name="name" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br />
        </form>
        <input type="submit" value="Log In" />
        <p><a href="/signup">Don't have an account!</a></p>
        <input type="submit" value="sign up"></input>
        </>
    )
}
export default LogIn