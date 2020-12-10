import { LightningElement, wire } from 'lwc';
import getProducts from '@salesforce/apex/ProductController.getProducts';

export default class CongaApp extends LightningElement {

    selectedProductId;
    boughtProducts=[];

    @wire(getProducts)
    products;

    handleTileClicked(event){
        this.selectedProductId = event.detail;
    }

    handleBuy(event){
        const productId = event.detail;
        this.products.data.forEach(prod => {
            if(prod.Id == productId){
                this.boughtProducts.push(prod);
            }
        });
        this.template.querySelector('c-conga-buy').setProducts(this.boughtProducts);
    }

    handleCompare(event){
        const productId = event.detail;
        this.template.querySelector('c-conga-compare').setProductId(productId);
    }
}