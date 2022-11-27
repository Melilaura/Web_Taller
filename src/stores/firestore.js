import { defineStore } from "pinia";
import { db } from "../firebase/config"

import { collection, doc, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";

export const useFirestoreStore = defineStore("firestore", {
    state: () => ({
        db: db,
    }),

    actions: {
        async getWines() {
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
        },

        async getWine(id) {
            const docRef = doc(db, "wine", id);
            try {
                const docSnap = await getDoc(docRef);
                const data = docSnap.data();
                return data;
            } catch (error) {
                console.log(error);
            }
        },

        async getUser(id) {
            const docRef = doc(db, "users", id);
            try {
                const docSnap = await getDoc(docRef);
                const data = docSnap.data();
                return data;
            } catch (error) {
                console.log(error);
            }
        },

        addUserRatingList(id, ratingValue) {
            const userRef = doc(db, 'users', id);
            setDoc(userRef, { rating: ratingValue }, {merge: true});
        },

        addWineRatingList(id, ratingValue){
            const bookRef = doc(db, 'books', id);
            setDoc(bookRef, { ratingList: ratingValue }, {merge: true});
        },

        async createCart(id, cartValue) {
            const userRef = doc(db, 'users', id);
            setDoc(userRef, { cart: cartValue }, {merge: true});
            console.log("added to cart")
        },

        async getCart(id) {
            const docRef = doc(db, "users", id);
            const docSnap = await getDoc(docRef);
            const result = docSnap.data();
            return result.cart;
        },

        async editWine(id, wine) {
            try {
                await setDoc(doc(db, "wine", id), wine);
                alert("The Wine has been edited successfully");
            } catch (error) {
                console.log(error);
            }
        },

        async deleteWine(id) {
            try {
                await deleteDoc(doc(db, "wine", id));
                alert("The wine has been deleted successfully");
                alert("Go back to the Wine Store");
            } catch (error) {
                console.log(error);
            }
        } 

       
    }
});