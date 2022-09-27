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
            this.wines = [{
                'name': 'Brunello di Montalcino Lé Lucére',
                'country': 'Italy',
                'price': '150',
                'description': 'This wine, which occupies the third place in the ranking, is produced by the La Toscana winery in San Filippo, Italy. It has a ruby ​​red color, its perfume is intense and it has concentrated cherry notes.',
                'type': 'red',
                'image': '/wine.png',
            },
    
            {
                'name': 'Aubert Pinot Noir Sonoma Coast',
                'country': 'EE.UU',
                'price': '150',
                'description': 'Occupying fourth place, this wine produced by the firm Mayacamas in California, United States is fermented in cement vats and stainless steel tanks. Its natural flavor is acid.',
                'type': 'red',
                'image': '/wine.png',
            },
    
            {
                'name': 'Cabernet Sauvignon Mount Veeder',
                'country': 'EE.UU',
                'price': '150',
                'description': 'This American liquor ranks second in the top 100. It is produced by the Aubert Wines Winery located in the city of Calistoga in California. It has perfumed aromas and a voluptuous texture.',
                'type': 'red',
                'image': '/wine.png',
            },
    
            {
                'name': 'Châteauneuf-du-Pape Les Trois S.',
                'country': 'France',
                'price': '120',
                'description': 'The grapes for this wine of French origin come from a gentle hillside terroir. It is produced under a mosaic of sand, pebbles and red clay, to achieve a balance of power and delicacy.',
                'type': 'red',
                'image': '/wine.png',
            },
    
            {
                'name': 'Piedra Negra Chacayes Los Chacayes',
                'country': 'Argentina',
                'price': '150',
                'description': 'It comes from the best quarters of the Chacayes farm located in Argentina, with a very high density. This wine produced by Piedra Negra combines the density of ancient malbec plants.',
                'type': 'red',
                'image': '/wine.png',
            },
    
            {
                'name': 'Massolino Barolo-bodega italiana',
                'country': 'EE.UU',
                'price': '150',
                'description': 'It stands out for being a garnet red wine with variable intensity. Its grapes come from sub-areas of the Italian town Serralunga, giving this wine a variable state of perfumes.',
                'type': 'white',
                'image': '/wine.png',
            },
    
            {
                'name': 'Noir Sonoma Coast',
                'country': 'EE.UU',
                'price': '150',
                'description': 'This American liquor ranks second in the top 100. It is produced by the Aubert Wines Winery located in the city of Calistoga in California. It has perfumed aromas and a voluptuous texture.',
                'type': 'red',
                'image': '/wine.png',
            },
    
            {
                'name': 'Regina',
                'country': 'Chile',
                'price': '200',
                'description': 'Pearly pink color, with a very personal and seductive aroma of red berries, white wild rose petals, spices and slight notes of wood. Tasty, with structure, fresh and wide, it has a consistent finish.',
                'type': 'sparkling',
                'image': '/wine.png',
            },
    
            {
                'name': 'Chivite Collection 125 2016',
                'country': 'New Zealand',
                'price': '180',
                'description': 'Onion skin color, intense and fresh aroma of wild berries, citrus and slight floral perfumes, notes of toast and spices. Full-bodied, balanced, the right degree of sweetness and acidity for a persistent finish.',
                'type': 'sparkling',
                'image': '/wine.png',
            },
    
            {
                'name': 'Marqués de Murrieta First Rosé ',
                'country': 'Spain',
                'price': '180',
                'description': 'Salmon pink color, refined aroma of ripe black fruit, in harmony with the opportune citrus vivacity, and floral notes. Fullness, body, but also fresh structure and all the desirable persistence.',
                'type': 'sparkling',
                'image': '/wine.png',
            },];
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