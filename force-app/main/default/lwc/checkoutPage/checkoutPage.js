import { LightningElement, api } from 'lwc';

export default class CheckoutPage extends LightningElement {

    @api buyproducts;
    @api total;
}