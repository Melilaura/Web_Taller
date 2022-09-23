import { defineStore } from "pinia";

export const useWinesStore = defineStore("wines", {
    state: () => ({
        wines: [{ name: "computador", country: 'pink', },
        { name: "fruta", country: 'red' },
        { name: "casa", country: 'blue' }],
        localStorageWines: []
    }),

    getters: {
        getWines: (state) => [...state.wines]
    },

    actions: {
        newWine(wine) {
            this.localStorageWines.push(wine);
            this.wines.push(wine);
            localStorage.setItem('wines', JSON.stringify(this.localStorageWines));
        },

        loadWines() {
            this.localStorageWines = JSON.parse(localStorage.getItem('wines'));
            this.wines = this.wines.concat([...this.localStorageWines]);
        },
        getWineById(id) {
            const filteredWines = this.wines.filter((wine) => id.toLowerCase() === wine.name.toLowerCase());
            return filteredWines ? {...filteredWines[0] } : null
        },

    }
});