import {action, makeObservable, observable} from 'mobx';
import productsList from '../data/productsList';

class Products {
  list = productsList;

  constructor() {
    makeObservable(this, {
      list: observable,
      addProduct: action,
      removeProduct: action,
    });
  }

  addProduct(id, cnt) {
    this.list.find(el => el.id === id).count = cnt;
    this.list.find(el => el.id === id).added = true;
  }

  removeProduct(id) {
    this.list.find(el => el.id === id).added = false;
  }
}

const products = new Products();

export default products;
