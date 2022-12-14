import { defineStore } from "pinia";
import _, { map } from 'underscore';
import { auth, db } from '../firebase/config';
import { doc, getDoc, setDoc, getDocs, collection, updateDoc, increment, runTransaction } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const useWinesStore = defineStore("wines", {
    state: () => ({

        wines: [],
        id: null,
        firebaseWines: [],
        cartData: null,
        shoppingCart: [],
        db:db,
    }),

    getters: {
        getWines: (state) => [...state.wines],
        getShoppingCart: (state) => [...state.shoppingCart],
    },

    actions: {

        async defineDocs(){
            const querySnapshot = await getDocs(collection(db, "wine"));
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
    
            const wine = {
                "id": doc.id,
                "name": doc.data().wineName,
                "country": doc.data().wineCountry,
                "price": doc.data().winePrice,
                "description": doc.data().wineDescription,
                "type": doc.data().wineType,
                "image": doc.data().image,                
               "rating": doc.data().wineRating,

            }
    
            this.wines.push(wine);
            console.log("hola");
            });
    
          },

          /*async getWines() {
            const collectionRef = collection(db, "wine");
            try {
                const { docs } = await getDocs(collectionRef);
                const wines = docs.map((doc) => {
                    return {
                        ...doc.data(),
                    };
                });
                return wines;
            } catch (error) {
                console.log(error);
            }
        },*/

        async displayWine(){
    
          this.list = [];
          this.wines = [];
          this.defineDocs();
    
          console.log(this.wines);
          
          let wineValue;
          let wine;
    
          let wineArr = [];
    
          for(let i = 0; i < localStorage.length; i++){
              wineValue = localStorage.getItem(localStorage.key(i));
              wine = JSON.parse(wineValue);
              console.log(this.wines);
              
              this.wines.push(wine);
           
              
          }
    
          for(let i = 0; i < wineArr.length; i++){
    
              this.wine = wineArr[i];
              this.list.push(this.wine);
          }
    
      },
    
      async uploadProduct(wine){

        let wineId = String(Math.floor(Math.random() *(999999-100000)+100000));

        this.id = wineId;

        let newWine = wine;
        wine.id = wineId;

        try {

            await setDoc(doc(db, "wine", wineId),  newWine);
              
            alert("Product added baby :3");
        } catch (error) {
            console.log(error);
        }

        
        

              
      },
        getWineById(id) {
            const filteredWines = this.wines.filter((wine) => id === wine.id);
            return filteredWines ? { ...filteredWines[0] } : null
        },

        sortWine(order) {
            switch (order) {
                case "0":
                    this.wines = _.sortBy(this.wines, "name");
                    break;
                case "1":
                    this.wines = _.sortBy(this.wines, "name").reverse();
                    break;
                case "2":
                    this.wines = _.sortBy(this.wines, "price");
                    break;
                case "3":
                    this.wines = _.sortBy(this.wines, "price").reverse();
                    break;
                case "4":
                    this.wines = _.sortBy(this.wines, "type");
                    break;

            }
        },

        filterWine(key, filterDo) {

            if (filterDo == "A") {
                switch (key) {
                    case "noFilter":
                        this.displayWine();
                        break;
                    case "0":
                        this.displayWine();
                        this.wines = this.wine.filter((wine) => wine.type === "red");
                        break;
                    case "1":
                        this.displayWine();
                        this.wines = this.wine.filter((wine) => wine.type === "white");
                        break;
                    case "2":
                        this.displayWine();
                        this.wines = this.wine.filter((wine) => wine.type === "dessert");
                        break;
                    case "3":
                        this.displayWine();
                        this.wines = this.wine.filter((wine) => wine.type === "sparkling");
                        break;
                    case "4":
                        this.displayWine();
                        this.wines = this.wine.filter((wine) => wine.type === "miscellaneous");
                        break;
                }
            }

            if (filterDo == "B") {
                switch (key) {
                    case "noFilter":
                        this.displayWine();
                        break;
                    case "0":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.price < 50);
                        break;
                    case "1":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.price < 90);
                        break;
                    case "2":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.price < 100);
                        break;
                }
            }

            if (filterDo == "C") {
                switch (key) {
                    case "noFilter":
                        this.displayWine();
                        break;
                    case "0":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.country === "Spain");
                        break;
                    case "1":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.country === "France");
                        break;
                    case "2":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.country === "Chile");
                        break;
                    case "3":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.country === "Australia");
                        break;

                    case "4":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.country === "Germany");
                        break;

                    case "5":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.country === "EE.UU");
                        break;

                    case "6":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.country === "Argentina");
                        break;

                    case "7":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.country === "South Africa");
                        break;

                    case "8":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.country === "Portugal");
                        break;

                    case "9":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) => wine.country === "New Zealand");
                        break;

                    case "10":
                        this.displayWine();
                        this.wines = this.wines.filter((wine) =>wine.country === "Italy");
                        break;

                }
            }
        },


            async addProductToCart(userId, wineInfo){

                console.log("SHOWING", userId, wineInfo.id);
            
                try{
                    if(userId != null){
                        await setDoc(doc(db, "users", userId, "cart", wineInfo.id), wineInfo);
                        alert("Product added to cart");
                    }
                    else{
                        alert("Please log in before adding products to cart");
                    }
                  }
            
                  catch(error){
                    console.log(error);
                  }
              },
            
              async assingValuesToCart(data){
                this.cartData = data;
                this.shoppingCart.push(this.cartData);
              },
            
              async getCart(userId){
                this.shoppingCart = [];
                const querySnapshot = await getDocs(collection(db, "users", userId, "cart"));
                querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            
                this.assingValuesToCart(doc.data())
            
                });
              },
            
              async uploadPicture(file){
                const storage = getStorage();
                const storageRef = ref(storage, 'imgs')
            
                uploadBytes(storageRef, file).then((snapshot) => {
                    console.log('Uploaded file');
                })
              },

              
            
              async changeRating(wineInfo, newValue){

            
                   const wineRef = doc(db, "wine", wineInfo.id);
            
                    await updateDoc(wineRef, {
                        totalRatings: increment(1)
                    });
            
                    await updateDoc(wineRef, {
                        allRatings: increment(newValue)
                    });
                    
                    const wineDocRef = doc(db, "wine", wineInfo.id);
            
                    try {
                
                        await runTransaction(db, async (transaction) => {
                          const wineDoc = await transaction.get(wineDocRef);
                          if (!wineDoc.exists()) {
                            throw "Document does not exist!";
                          }
                      
                          console.log(wineDoc.data().wineRating + newValue);
            
                          const newRating = (wineDoc.data().wineRating + newValue);
                          transaction.update(wineDocRef, { wineRating: newRating });
                        });
                        console.log("Rating successfully committed!");
                      } catch (e) {
                        console.log("Rating failed: ", e);
                      }
            
              }
       
        
    }
});