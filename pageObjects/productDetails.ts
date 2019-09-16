import { Header } from './components/header';
import { Footer } from './components/footer';

export class ProductDetails {

    header = new Header();
    footer = new Footer();

    open(productPath){
        browser.url(productPath);
    }

    addToCart(){
        $('button[name="add_cart_product"]').click();
        browser.pause(3500);
    }
    
    getProductPrice() {
        return parseFloat($('#box-product').getAttribute('data-price'));
    }
    
    getProductName() {
        return $('h1.title').getText();
    }

}