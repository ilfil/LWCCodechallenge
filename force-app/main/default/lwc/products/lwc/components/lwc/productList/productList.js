import { LightningElement} from 'lwc';
import { Redux } from 'c/lwcRedux';
import { selectProduct } from 'c/productActions';
import {OPEN_CART, OPEN_COMPARE} from 'c/productConstant';

export default class ProductList extends  Redux(LightningElement) {


    mapStateToProps = state => {
        return {
            products: state.productsWrap.products
        };
    };
    
    mapDispatchToProps(){
        return {selectProduct};
    }
    


    
    handleClick(event){
        //console.log('this.product ' + JSON.stringify(event.target.dataset.id));
        if(event.target.dataset.id === 'viewcart'){
            this.props.selectProduct({}, OPEN_CART);
        }else if(event.target.dataset.id === 'viewcompare'){
            this.props.selectProduct({}, OPEN_COMPARE);
        }
    } 

    /*
        mapStateToProps(state){
            return {products: state.productsWrap.products};
        }
    */
}