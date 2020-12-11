import { LightningElement,api } from 'lwc';

export default class ProductDetail extends LightningElement {

    @api product;

    handleCompareClick(){
        const compareClickedEvent = new CustomEvent('compareselected',{detail: this.product});
        this.dispatchEvent(compareClickedEvent);
    }

    handleBuyClick(){
        const compareClickedEvent = new CustomEvent('buyselected',{detail: this.product});
        this.dispatchEvent(compareClickedEvent);
    }
}