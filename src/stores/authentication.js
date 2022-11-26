import { defineStore } from "pinia";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, deleteUser } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { deleteDoc, doc} from "firebase/firestore";
///// OPTIONS STORE

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({

      auth: auth,
      userLogged: null,
      userId: null,
      isAdmin: false,
    }),

    actions: {

       signIn(email, password) {

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    console.log("Logged In")
            alert("Logged in Succesfully")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);

                     alert("Email or password are incorrect, please try again");
       
                });
        },

        async addUserToDatabase(db, userId, userInfo){
          try{
            await setDoc(doc(db, "users", userId), userInfo);
            alert("User created");
          }
    
          catch(error){
            console.log(error);
          }
        },

        signUp(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
            
                    const user = userCredential.user;
                    this.addUserToDatabase(db, user.uid, newUser)
                    console.log('usuario creado', user)
                    alert('usuario creado');
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },

        async newUserAwait(email, password) {
            try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log('usuario creado', userCredential.user)
        } catch(error) {
            alert(errorMessage);
        }
        },

      logOut(){
        signOut(auth).then(() => {
          console.log('Loged out')
        }).catch((error) => {
          alert(error);
        });
      },

      getUser() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                const user = auth.currentUser;
                this.userLogged = user;
              this.userId = user.uid;this.userLogged = user;

              if (user.uid == "kv7641m63mhFlFWiQPImCqMftCJ2") {
                  this.isAdmin = true;
                  alert("you are admin")
              } 

            } else {
              console.log("User is not signed in");
            }
        })
        return this.userLogged;
        },

    getIsAdmin() {
        return this.isAdmin;
    },

    async deleteAccount() {
      const user = auth.currentUser;
      await deleteDoc(doc(db, "users", user.uid));
      console.log(user);

      deleteUser(user).then(() => {
          alert("Your account has been deleted");
          location.reload();

      }).catch((error) => {
          console.log(error);
      });
  }
}
});