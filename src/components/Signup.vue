<template>
<v-container fluid tag="section">
    <v-row justify="center">
        <v-col cols="12" md="6" sm="8">
            <div class=" v-card--material pa-5 my-md-16 elevation-10 v-card v-sheet v-card--material--has-heading">
                <div class="d-flex grow flex-wrap">
                    <div class="v-card--material__heading mb-n5 elevation-6 success pa-5 rounded-lg" style="width: 100%">
                        <div class="text-h3 text-center white--text font-weight-light">
                            Sign Up
                        </div>
                    </div>
                </div>
                <v-card-text class="mt-5">
                    <ValidationObserver ref="observer" v-slot="{ invalid }">
                        <v-form @submit.prevent="onSubmit">

                            <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
                                <v-text-field v-model="name" :error-messages="errors" label="Name" type="text" prepend-icon="mdi-account-reactivate" required></v-text-field>
                            </ValidationProvider>

                            <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
                                <v-text-field v-model="email" :error-messages="errors" label="Email" type="email" prepend-icon="mdi-account-circle" required></v-text-field>
                            </ValidationProvider>

                            <ValidationProvider v-slot="{ errors }" name="Password" :rules="{ required: true, min: 8, regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,}">
                                <v-text-field v-model="password" :error-messages="errors" label="Password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword">
                                </v-text-field>
                            </ValidationProvider>

                            <v-card-actions class="ml-5 mt-2 mb-n2">
                                <v-btn class="success" @click="onSubmit" :disabled="invalid">Sign Up</v-btn>
                            </v-card-actions>

                        </v-form>
                    </ValidationObserver>
                </v-card-text>
            </div>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import axios from 'axios';
import { required, email, min, regex } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from "vee-validate";

setInteractionMode("eager");

extend("required", {
    ...required,
    message: "{_field_} can not be empty",
});

extend("min", {
    ...min,
    message: "{_field_} must be {length} characters",
});

extend("regex", {
    ...regex,
    message: "Password is invalid",
});

extend("email", {
    ...email,
    message: "Email must be valid",
});

export default {
    components: { ValidationProvider, ValidationObserver },
    data: () => ({
        showPassword: false,
        name: "",
        email: "",
        password: null,
    }),

    methods: {
        async onSubmit() {
            this.$refs.observer.validate();
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });

            if (result.status == 201) {
                alert("Sign up succesfully.");
            }

            localStorage.setItem("user-info", JSON.stringify(result.data))

            this.clear();
        },
        clear() {
            this.name = "",
                this.email = "",
                this.password = ""
            this.$refs.observer.reset();
        },
    },
};
</script>
