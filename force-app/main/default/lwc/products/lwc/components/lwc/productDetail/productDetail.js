import { LightningElement, api } from 'lwc';
import { Redux } from 'c/lwcRedux';
import { selectProduct } from 'c/productActions';
import {SELECT_PRODUCT_DETAILS, SELECT_PRODUCT_COMPARE, SELECT_PRODUCT_CART} from 'c/productConstant';

export default class ProductDetail extends Redux(LightningElement) {
    @api product={}
    
    mapStateToProps(state){
        return {selectedProduct: state.selectedProduct};
    }

    mapDispatchToProps(){
        return {selectProduct};
    }
    
    handleClick(event){
        //console.log('this.product ' + JSON.stringify(event.target.dataset.id));
        if(event.target.dataset.id === 'details'){
            this.props.selectProduct(this.product, SELECT_PRODUCT_DETAILS);
        }else if(event.target.dataset.id === 'compare'){
            this.props.selectProduct(this.product, SELECT_PRODUCT_COMPARE);
        }else if(event.target.dataset.id === 'cart'){
            this.props.selectProduct(this.product, SELECT_PRODUCT_CART);
        }
    } 

}