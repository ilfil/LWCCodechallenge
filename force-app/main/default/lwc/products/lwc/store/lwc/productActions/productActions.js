//import {SELECT_PRODUCT_ACTION} from 'c/productConstant';
export const selectProduct = (product, selType) =>{
    return {
        type: selType,
        payload: product
    }
}