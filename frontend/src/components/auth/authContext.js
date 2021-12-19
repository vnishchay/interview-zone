const { createContext } = require("react")


const AuthContext = createContext() ; 

const AppContextProvider = (props)=>{
    const auth = Auth() ; 
    return (
        <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
    )
}

const useAuth = useContext(AuthContext) ; 


const getUser = ( user ) =>{
    const {email, displayName, photoURL } = user ; 
    return { email, name: username, photo: photoURL } ; 
}

const Auth = ()=>{
    const [user, setuser] = useState() ; 
    
    const signIn =(username, password) => {
        try {
              await axios
                .post(url, {
                  username: username.current.value,
                  password: password.current.value,
                })
                .then((response) => {
                  console.log(response.data.jwt);
                  if (response.data.successfulLogin) {
                    localStorage.setItem("jwt", response.data.jwt);
                    const obj =       username.current.value;
                    // localStorage.setItem("appContextdata", obj)   
                    // updateAppContext(obj); 
                    history.push('/home');
                  }
                });
            } catch (e) {
              alert(e.message);
        }
    }


}