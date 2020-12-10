import {SELECT_PRODUCT_DETAILS, SELECT_PRODUCT_COMPARE, SELECT_PRODUCT_CART, CLOSE_PRODUCT_DETAILS, OPEN_COMPARE, CLOSE_COMPARE, OPEN_CART, CLOSE_CART} from 'c/productConstant';

let initialState = {

    products:[
        {id: '1', name: 'Product 1', description: 'sample product descitpion', image: 'https://via.placeholder.com/150', price: 100, color: 'blue', dimension: '100x100', rating: 4.5, size: 'XL', selectedForCompare: false},
        {id: '2', name: 'Product 2', description: 'sample product descitpion', image: 'https://via.placeholder.com/150', price: 150, color: 'blue', dimension: '100x100', rating: 4.5, size: 'XL',  selectedForCompare: false},
        {id: '3', name: 'Product 3', description: 'sample product descitpion', image: 'https://via.placeholder.com/150', price: 125, color: 'blue', dimension: '100x100', rating: 4.5, size: 'XL',  selectedForCompare: false},
        {id: '4', name: 'Product 4', description: 'sample product descitpion', image: 'https://via.placeholder.com/150', price: 990, color: 'blue', dimension: '100x100', rating: 4.5, size: 'XL',  selectedForCompare: false}
    ],
    selectedProduct:{},
    selectedCart:[],
    selectedCompare:[],
    showDetails: false,
    showCompare: false,
    showCart: false
}

const productReducer = (state = initialState, action) => {
    console.log('action ' + JSON.stringify(action));
    console.log('action ' + JSON.stringify(action.payload));
    console.log('state ' + JSON.stringify(state));
    switch (action.type) {
       case SELECT_PRODUCT_DETAILS: {
            //const { productDetails } = action.payload;
            return {
                ...state,
                selectedProduct: action.payload,
                showDetails: true
            };
        }
        case SELECT_PRODUCT_COMPARE: {
            const productId = action.payload.id;
            state.products.find(x => x.id === productId).selectedForCompare = !state.products.find(x => x.id === productId).selectedForCompare;
            return {
                ...state,
                products: [...state.products]
            };
        }
        case SELECT_PRODUCT_CART: {
            return {
                ...state,
                selectedCart: [
                    ...state.selectedCart, action.payload
                ]
            };
        }
        case CLOSE_PRODUCT_DETAILS: {
            return {
                ...state,
                selectedProduct: {},
                showDetails: false
            };
        }
        case OPEN_COMPARE: {
            return {
                ...state,
                showCompare: true
            };
        }
        case CLOSE_COMPARE: {
            return {
                ...state,
                showCompare: false
            };
        }
        case OPEN_CART: {
            return {
                ...state,
                showCart: true
            };
        }
        case CLOSE_CART: {
            return {
                ...state,
                showCart: false
            };
        }
        
       default: return state;
    }
}
export default {
    productsWrap: productReducer
}