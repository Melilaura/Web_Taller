import { defineStore } from "pinia";

export const useWinesStore = defineStore("wines", {
    state: () => ({
        wines: [],
        localStorageWines: []
    }),

    getters: {
        getWines: (state) => [...state.wines]
    },

    actions: {
        newWine(wine) {
            this.localStorageWines.push(wine);
            //Add to list
            this.wines.push(wine);
            localStorage.setItem('wines', JSON.stringify(this.localStorageWines));
        },

        loadProducts() {
            this.localStorageWines = JSON.parse(localStorage.getItem('wines'));
            this.wines = this.wines.concat([...this.localStorageWines]);
        }

    }
});