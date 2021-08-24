<template>
<div>
    <v-container fluid>
        <v-row>
            <v-spacer></v-spacer>

            <v-btn outlined class="mt-10 mx-6" @click="dialogShow">
                <v-badge color="primary lighten-1" :content="count" v-if="count > 0">
                    <v-icon color="black">
                        mdi-cart-arrow-down
                    </v-icon>
                </v-badge>

                <v-icon color="black" v-else>
                    mdi-cart-arrow-down
                </v-icon>
            </v-btn>

            <v-col>
                <VueSlickCarousel v-bind="settings">
                    <div v-for="product in products" :key="product.id">
                        <v-card flat color="#fafafa" class="mx-3 mb-5" max-width="374">
                            <template slot="progress">
                                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                            </template>
                            <v-img :src="product.productImg"></v-img>

                            <v-card-title class="pb-1 subtitle-2 word-wrap-1">
                                <!-- The Super Pack -->
                                {{ product.productTitle }}
                            </v-card-title>

                            <v-card-text>
                                <div class=" text-subtitle-2 word-wrap-1">
                                    <!-- all three serums -->
                                    {{ product.productSubtitle }}
                                </div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn outlined block @click="increment(product.id)">
                                    <v-spacer></v-spacer>
                                    Add to cart
                                    <v-spacer></v-spacer>
                                    <span class="ml-1">
                                        <!-- $65 -->
                                        ${{ product.discountRate }}
                                    </span>
                                    <span class="ml-1 text-decoration-line-through" v-if=" product.rate != product.discountRate ">
                                        <!-- $70 -->
                                        ${{ product.rate }}
                                    </span>
                                    <v-spacer></v-spacer>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </div>
                </VueSlickCarousel>
            </v-col>
        </v-row>

        <Model />
    </v-container>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Model from './Model.vue'

export default {
    components: {
        VueSlickCarousel,
        Model
    },
    data() {
        return {
            selection: 1,
            settings: {
                "dots": false,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 5,
                "slidesToScroll": 1,
                "initialSlide": 0,
                "responsive": [

                    {
                        "breakpoint": 1080,
                        "settings": {
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false
                        }
                    },
                    {
                        "breakpoint": 925,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false
                        }
                    },
                    {
                        "breakpoint": 690,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }
        }
    },
    computed: {
        ...mapGetters(["products"]),
        count() {
            return this.$store.state.cartItemCount;
        }
    },
    methods: {
        increment(Id) {
            let cartItemsArray = [];
            let cartItems = cartItemsArray.push(this.products[Id]);
            this.$store.dispatch("increment", cartItems)
        },
        dialogShow() {
            this.$store.dispatch("dialogShow")
        }
    }
}
</script>

<style>
.word-wrap-1 {
    display: -webkit-box !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    -webkit-line-clamp: 1 !important;
}

.word-wrap-2 {
    display: -webkit-box !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    -webkit-line-clamp: 2 !important;
}
</style>
