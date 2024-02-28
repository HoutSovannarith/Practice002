'use strict';

import { cardProduct } from "../components/cardProduct.js";
import {getData} from "../store/fetchApi.js";
import {cardUser} from "../components/cardUser.js";

const renderProduct = document.querySelector('#render-product');
const renderUser = document.querySelector('#render-user');

const product = await getData("product.json")
const user = await getData("user.json")

product.map((product) =>{
    console.log(cardProduct(product));
    renderProduct.innerHTML += cardProduct(product);
})

user.map((user) =>{
    console.log(cardUser(user));
    renderUser.innerHTML += cardUser(user);
})