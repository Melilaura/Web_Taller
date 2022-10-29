import { defineStore } from "pinia";
import _, { map } from 'underscore';
import { auth, db } from '../firebase/config';
import { doc, getDoc, setDoc, getDocs, collection, updateDoc } from "firebase/firestore";
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
        //getWines: (state) => [...state.wines],
        getShoppingCart: (state) => [...state.shoppingCart],
    },

    actions: {

        async defineDocs(){
            const querySnapshot = await getDocs(collection(db, "items"));
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
    
            const wine = {
                "id": doc.id,
                "Name": doc.data().wineName,
                "Country": doc.data().wineCountry,
                "Price": doc.data().winePrice,
                "Description": doc.data().wineDescription,
                "Type": doc.data().wineType,
                "image": doc.data().image,                
               //"Rating": doc.data().productRating,

            }
    
            this.wines.push(wine);
            console.log("hola");
            });
    
          },

          async getWines() {
            const collectionRef = collection(db, "wines");
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
        },

        async displayItem(){
    
          this.list = [];
          this.wines = [];
          this.defineDocs();
    
          console.log(this.wines);
          
        
          let itemValue;
          let wine;
    
          let itemArr = [];
    
          for(let i = 0; i < localStorage.length; i++){
              itemValue = localStorage.getItem(localStorage.key(i));
              wine = JSON.parse(itemValue);
    
              this.wines.push(wine);
              
          }
    
          for(let j = 0; j < itemArr.length; j++){
    
              this.item = itemArr[j];
              this.list.push(this.item);
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
                        this.displayItem();
                        break;
                    case "0":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.type === "red");
                        break;
                    case "1":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.type === "white");
                        break;
                    case "2":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.type === "dessert");
                        break;
                    case "3":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.type === "sparkling");
                        break;
                    case "4":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.type === "miscellaneous");
                        break;
                }
            }

            if (filterDo == "B") {
                switch (key) {
                    case "noFilter":
                        this.displayItem();
                        break;
                    case "0":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.price < 50);
                        break;
                    case "1":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.price < 90);
                        break;
                    case "2":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.price < 100);
                        break;
                }
            }

            if (filterDo == "C") {
                switch (key) {
                    case "noFilter":
                        this.displayItem();
                        break;
                    case "0":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.country === "Spain");
                        break;
                    case "1":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.country === "France");
                        break;
                    case "2":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.country === "Chile");
                        break;
                    case "3":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.country === "Australia");
                        break;

                    case "4":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.country === "Germany");
                        break;

                    case "5":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.country === "EE.UU");
                        break;

                    case "6":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.country === "Argentina");
                        break;

                    case "7":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.country === "South Africa");
                        break;

                    case "8":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.country === "Portugal");
                        break;

                    case "9":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.country === "New Zealand");
                        break;

                    case "10":
                        this.displayItem();
                        this.wines = this.wines.filter((item) => item.country === "Italy");
                        break;

                }
            }
        },

       
        
    }
});