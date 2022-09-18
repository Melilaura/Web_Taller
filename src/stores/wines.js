import { defineStore } from "pinia";

export const useWineStore = defineStore("wines", {
    state: () => ({
        wines: [],

    }),

    getters: {
        getWines: (state) => [...state.wines]
    },

    actions: {
        newWine(wine) {
            
            this.wines.push(wine);
        },

    }
});