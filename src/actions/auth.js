import {firebase,googleAuthProvider,githubAuthProvider} from '../firebase/firebase'

export const login = (uid)=>({
    type:'LOGIN',
    uid
})

export const startLogin= () =>{
    return()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}
export const startLogin2= () =>{
    return()=>{
        return firebase.auth().signInWithPopup(githubAuthProvider).then(function(result) {
            
            var token = result.credential.accessToken;
            
            var user = result.user;
          })
    }
}
export const logout = ()=>({
    type:'LOGOUT'
})

export const startLogout =  ()=>{
    return ()=>{
        return firebase.auth().signOut()
    }
}