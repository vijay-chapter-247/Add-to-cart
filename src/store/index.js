import Vue from 'vue'
import Vuex from 'vuex'

import firstImage from '../assets/SuperPack_ShopGrid_1_main__1_.webp'
import secondImage from '../assets/WeddingMakeup_01.webp'
import thirdImage from '../assets/BoyBrow_0_1.webp'
import fourthImage from '../assets/Cleanser_Concentrare_-_1.webp'
import fifthImage from '../assets/CloudPaint.webp'
import sixthImage from '../assets/Glossier_MAKEUP-SET-PDP.webp'
import sevenImage from '../assets/InvisibleShield.webp'
import eightImage from '../assets/Solution.webp'
import nineImage from '../assets/SP_Global_-_1.webp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        quantity: 0,
        productImg: firstImage,
        productTitle: 'The Super Pack',
        productSubtitle: 'all three serums',
        discountRate: '65',
        rate: '70'
      },
      {
        id: 2,
        quantity: 0,
        productImg: secondImage,
        productTitle: 'Makeup Edit',
        productSubtitle: 'limited edition',
        discountRate: '16',
        rate: '16'
      },
      {
        id: 3,
        quantity: 0,
        productImg: thirdImage,
        productTitle: 'Boy Brow',
        productSubtitle: 'grooming pomade',
        discountRate: '24',
        rate: '24'
      },
      {
        id: 4,
        quantity: 0,
        productImg: fourthImage,
        productTitle: 'Cleanser Concentrate',
        productSubtitle: 'clarifying face wash',
        discountRate: '18',
        rate: '18'
      },
      {
        id: 5,
        quantity: 0,
        productImg: fifthImage,
        productTitle: 'Cloud Paint',
        productSubtitle: 'seamless cheek color',
        discountRate: '20',
        rate: '20'
      },
      {
        id: 6,
        quantity: 0,
        productImg: sixthImage,
        productTitle: 'The Makeup Set',
        productSubtitle: 'daily makeup staples',
        discountRate: '90',
        rate: '120'
      },
      {
        id: 7,
        quantity: 0,
        productImg: sevenImage,
        productTitle: 'Invisible Shield',
        productSubtitle: 'daily sunscreen +',
        discountRate: '25',
        rate: '40'
      },
      {
        id: 8,
        quantity: 0,
        productImg: eightImage,
        productTitle: 'Solution',
        productSubtitle: 'exfoliating skin perfector',
        discountRate: '50',
        rate: '50'
      },
      {
        id: 9,
        productImg: nineImage,
        productTitle: 'Solar Paint',
        productSubtitle: 'luminous bronzer crème',
        discountRate: '24',
        rate: '24'
      },
    ],
    dialog: false,
    cartItemCount: 0,
    cartItems: []
  },
  mutations: {

    addToCart(state, productId) {
      state.cartItemCount++;

      const product = state.products.find((prod) => prod.id === productId)

      const cartIndex = state.cartItems.findIndex((prod) => prod.id === productId)

      // if item is not in cart already
      if (cartIndex === -1) {
        product.quantity = 1;
        state.cartItems.push(product)
      } else {
        const updatedQuantity = state.cartItems[cartIndex].quantity + 1;
        state.cartItems[cartIndex].quantity = updatedQuantity
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },


    decreaseQuantity(state, productId) {
      state.cartItemCount--;
      const cartIndex = state.cartItems.findIndex((prod) => prod.id === productId)

      const updatedQuantity = state.cartItems[cartIndex].quantity - 1;
      if (updatedQuantity === 0) {
        state.cartItems.splice(cartIndex, 1)
      } else {
        state.cartItems[cartIndex].quantity = updatedQuantity
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    dialogShow(state) {
      state.dialog = !state.dialog;
    },
    setCartItemsFromLocalStorage(state) {
      let cartItems = []
      try {
        cartItems = JSON.parse(localStorage.getItem("cartItems"))
      } catch (error) {

      }
      let cartItemCount = 0;
      cartItems.forEach((cartitem) => {
        cartItemCount = cartItemCount + Number(cartitem.quantity)
      })
      state.cartItems = cartItems;
      state.cartItemCount = cartItemCount
    }
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload);
    },
    decreaseQuantity: (context, payload) => {
      context.commit("decreaseQuantity", payload);
    },
    dialogShow: (context) => {
      context.commit("dialogShow");
    },
    setCartItemsFromLocalStorage: (context) => {
      context.commit("setCartItemsFromLocalStorage");
    }
  },
  getters: {
    products: (state) => state.products,
  }
})