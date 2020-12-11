import { LightningElement, track } from 'lwc';

export default class ContainerComponent extends LightningElement {

    @track currentProduct;
    @track compareProducts = [];
    @track buyProducts = [];
    @track total;

    handleProductClicked(event){
        this.currentProduct = event.detail;
    }

    handleCompareSelected(event){
        try{
            var productClicked = event.detail;

            if(this.compareProducts.length == 3){
                this.compareProducts.pop();
                this.compareProducts.unshift(productClicked);
            }
            else{
                this.compareProducts.unshift(productClicked);
            }
        } catch (e){console.error(e);}
    }

    handleProductBuyClicked(event){
        try{

            var productClicked = event.detail;
            this.buyProducts.unshift(productClicked);
            this.total =0;
            for(let i=0; i< this.buyProducts.length; i++){
                this.total += this.buyProducts[i].price;
            }
        } catch (e){console.error(e);}
    }

}