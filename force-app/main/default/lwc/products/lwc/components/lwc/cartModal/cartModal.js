import { LightningElement, api, track } from 'lwc';
import { Redux } from 'c/lwcRedux';

import { selectProduct } from 'c/productActions';
import { CLOSE_CART } from 'c/productConstant';

export default class CartModal extends Redux(LightningElement) {

    mapStateToProps = state => {
        return {
            selectedProducts: state.productsWrap.selectedCart,
            showCart: state.productsWrap.showCart,
            total: state.productsWrap.selectedCart.reduce((total, obj) => obj.price + total,0)
        };
    };

    mapDispatchToProps(){
        return {selectProduct};
    }

    handleClick(){
        this.props.selectProduct(null, CLOSE_CART);
    } 

}