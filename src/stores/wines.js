import { defineStore } from "pinia";
import _, { map } from 'underscore';

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
            this.wines.push(wine);
            localStorage.setItem('wines', JSON.stringify(this.localStorageWines));
        },

        loadWines() {
            this.wines = [];
            this.localStorageWines = JSON.parse(localStorage.getItem('wines'));
            this.wines = this.wines.concat([...this.localStorageWines]);
        },
        getWineById(id) {
            const filteredWines = this.wines.filter((wine) => id.toLowerCase() === wine.name.toLowerCase());
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
                        this.loadWines();
                        break;
                    case "0":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.type === "red");
                        break;
                    case "1":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.type === "white");
                        break;
                    case "2":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.type === "dessert");
                        break;
                    case "3":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.type === "sparkling");
                        break;
                    case "4":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.type === "miscellaneous");
                        break;
                }
            }

            if (filterDo == "B") {
                switch (key) {
                    case "noFilter":
                        this.loadWines();
                        break;
                    case "0":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.price < 50);
                        break;
                    case "1":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.price < 90);
                        break;
                    case "2":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.price < 100);
                        break;
                }
            }

            if (filterDo == "C") {
                switch (key) {
                    case "noFilter":
                        this.loadWines();
                        break;
                    case "0":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Spain");
                        break;
                    case "1":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "France");
                        break;
                    case "2":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Chile");
                        break;
                    case "3":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Australia");
                        break;

                    case "4":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Germany");
                        break;

                    case "5":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "EE.UU");
                        break;

                    case "6":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Argentina");
                        break;

                    case "7":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "South Africa");
                        break;

                    case "8":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Portugal");
                        break;

                    case "9":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "New Zealand");
                        break;

                    case "10":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Italy");
                        break;

                }
            }
        }


    }
});