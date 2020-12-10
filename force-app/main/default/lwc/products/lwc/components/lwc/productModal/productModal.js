import { LightningElement, api, track } from 'lwc';
import { Redux } from 'c/lwcRedux';

import { selectProduct } from 'c/productActions';
import { CLOSE_PRODUCT_DETAILS } from 'c/productConstant';

export default class ProductModal extends Redux(LightningElement) {


    mapStateToProps = state => {
        return {
            selectedProduct: state.productsWrap.selectedProduct,
            showDetails: state.productsWrap.showDetails
        };
    };


    mapDispatchToProps(){
        return {selectProduct};
    }
    

    handleClick(){
        this.props.selectProduct(null, CLOSE_PRODUCT_DETAILS);
    } 

}