<template>
<div class="text-center">
    <v-dialog v-model="dialog" persistent width="1000">
        <v-card flat>
            <!-- <v-card-title class="text-h5 white--text primary">
                Added Items
            </v-card-title> -->

            <v-toolbar dark color="primary">
                <v-toolbar-title>Cart Items </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="$store.state.dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <v-card-text class="my-5">
                <v-row class="black--text">

                    <v-col cols="2">
                        <div class="body-1 font-weight-medium">Product</div>
                    </v-col>

                    <v-col cols="4">
                        <div class="body-1 font-weight-medium">
                            Title
                        </div>
                    </v-col>

                    <v-col cols="2">
                        <div class="body-1 font-weight-medium">
                            Price
                        </div>
                    </v-col>
                    <v-col cols="2">
                        <div class="body-1 font-weight-medium">
                            Quantity
                        </div>
                    </v-col>
                    <v-col cols="2">
                        <div class="body-1 font-weight-medium">
                            Total
                        </div>
                    </v-col>
                </v-row>

                <v-divider class="mt-3"></v-divider>

                <v-row class="black--text mt-3" v-for="cartItem in cartItems" :key="cartItem.id">
                    <v-col cols="2">
                        <v-avatar tile>
                            <v-img :src="cartItem.productImg"></v-img>
                        </v-avatar>
                    </v-col>

                    <v-col cols="4">
                        <div class="word-wrap-1 body-1 font-weight-medium">
                            {{ cartItem.productTitle }}
                        </div>
                    </v-col>

                    <v-col cols="2">
                        <div class="body-1 font-weight-medium">
                            ${{ cartItem.rate }}
                        </div>
                    </v-col>

                    <v-col cols="2">
                        <div class=" body-1 font-weight-medium">
                            5
                        </div>
                    </v-col>
                    <v-col cols="2">
                        <div class="body-1 font-weight-medium">
                            ${{ cartItem.rate }}
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-actions>
                <v-btn outlined @click="$store.state.dialog = false">
                    close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    computed: {
        dialog() {
            return this.$store.state.dialog;
        },
        cartItems() {
            return this.$store.state.cartItems;
        },
    },
    // created() {
    //     if (this.$store.state.cartItems != undefined) {
    //         localStorage.setItem("cartItems", JSON.stringify(this.$store.state.cartItems))
    //     }
    // },
    // mounted() {
    //     this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    // }
}
</script>
