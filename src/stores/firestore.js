import { defineStore } from "pinia";
import { db } from "../firebase/firebase"

import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

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

        addBookRatingList(id, ratingValue){
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

        changeBookRating(book) {
            let sum = 0;
            let list = book.ratingList;
            list.push(book.rating);

            list.forEach(function(num) { sum += num });

            let average = sum/list.length;
            
            const bookRef = doc(db, 'books', book.id);
            setDoc(bookRef, { rating: average }, {merge: true});
        }
    }
});