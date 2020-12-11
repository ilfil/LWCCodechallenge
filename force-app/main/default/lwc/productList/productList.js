import { LightningElement,wire,track } from 'lwc';
import getProducts from '@salesforce/apex/ProductListController.getProductsApex';


export default class ProductList extends LightningElement {

    @track products

    @wire(getProducts)
    assignProducts({ error, data }) {
        if (data) {
            this.products = data;
        }
    }

    handleProductClicked(event){
        try{
            var productId = event.currentTarget.dataset.record;
            for(let i =0; i< this.products.length; i++){
                if(this.products[i].Id == productId){
                    const productclickedEvent = new CustomEvent('productclicked',{detail: this.products[i]});
                    this.dispatchEvent(productclickedEvent);
                }
            }
        }
        catch(err){
            console.error(err);
        }
    }

    handleCompareClick(event){
        try{
            var productId = event.currentTarget.dataset.record;
            for(let i =0; i< this.products.length; i++){
                if(this.products[i].Id == productId){
                    const productCompareclickedEvent = new CustomEvent('productcompareclicked',{detail: this.products[i]});
                    this.dispatchEvent(productCompareclickedEvent);
                }
            }
        }
        catch(err){
            console.error(err);
        }
    }

    handleBuyClick(event){
        try{
            var productId = event.currentTarget.dataset.record;
            for(let i =0; i< this.products.length; i++){
                if(this.products[i].Id == productId){
                    const productBuyclickedEvent = new CustomEvent('productbuyclicked',{detail: this.products[i]});
                    this.dispatchEvent(productBuyclickedEvent);
                }
            }
            
        }
        catch(err){
            console.error(err);
        }
    }
}