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
        // productImg: 'SuperPack_ShopGrid_1_main__1_.webp',
        productImg: firstImage,
        productTitle: 'The Super Pack',
        productSubtitle: 'all three serums',
        discountRate: '65',
        rate: '70'
      },
      {
        id: 2,
        // productImg: 'WeddingMakeup_01.webp',
        productImg: secondImage,
        productTitle: 'Makeup Edit',
        productSubtitle: 'limited edition',
        discountRate: '16',
        rate: '16'
      },
      {
        id: 3,
        // productImg: 'BoyBrow_0_1.webp',
        productImg: thirdImage,
        productTitle: 'Boy Brow',
        productSubtitle: 'grooming pomade',
        discountRate: '24',
        rate: '24'
      },
      {
        id: 4,
        // productImg: 'Cleanser_Concentrare_-_1.webp',
        productImg: fourthImage,
        productTitle: 'Cleanser Concentrate',
        productSubtitle: 'clarifying face wash',
        discountRate: '18',
        rate: '18'
      },
      {
        id: 5,
        // productImg: 'CloudPaint.webp',
        productImg: fifthImage,
        productTitle: 'Cloud Paint',
        productSubtitle: 'seamless cheek color',
        discountRate: '20',
        rate: '20'
      },
      {
        id: 6,
        // productImg: 'Glossier_MAKEUP-SET-PDP.webp',
        productImg: sixthImage,
        productTitle: 'The Makeup Set',
        productSubtitle: 'daily makeup staples',
        discountRate: '90',
        rate: '120'
      },
      {
        id: 7,
        // productImg: 'InvisibleShield.webp',
        productImg: sevenImage,
        productTitle: 'Invisible Shield',
        productSubtitle: 'daily sunscreen +',
        discountRate: '25',
        rate: '40'
      },
      {
        id: 8,
        // productImg: 'Solution.webp',
        productImg: eightImage,
        productTitle: 'Solution',
        productSubtitle: 'exfoliating skin perfector',
        discountRate: '50',
        rate: '50'
      },
      {
        id: 9,
        // productImg: 'SP_Global_-_1.webp',
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
    increment(state, payload) {
      state.cartItemCount++;
      state.cartItems.push(state.products[payload]);
    },
    dialogShow(state) {
      state.dialog = !state.dialog;
    }
  },
  actions: {
    increment: (context, payload) => {
      context.commit("increment", payload);
    },
    dialogShow: (context) => {
      context.commit("dialogShow");
    }
  },
  getters: {
    products: (state) => state.products,
  }
})
