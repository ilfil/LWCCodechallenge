import { LightningElement, api, track } from 'lwc';
import { Redux } from 'c/lwcRedux';

import { selectProduct } from 'c/productActions';
import { CLOSE_COMPARE } from 'c/productConstant';

export default class CompareModal extends Redux(LightningElement) {


    mapStateToProps = state => {
        return {
            selectedProducts: state.productsWrap.products.filter(function(product){ 
                return product.selectedForCompare === true
            }),
            showCompare: state.productsWrap.showCompare
        };
    };

    /*heroes.filter(function(hero) {
        return hero.franchise == “Marvel”;
    });*/ 

    mapDispatchToProps(){
        return {selectProduct};
    }
    

    handleClick(){
        this.props.selectProduct(null, CLOSE_COMPARE);
    } 

}