<template>
    <div>
        <input v-model="firstname">
        <input v-model="lastname">
        <input v-model="password">
        <button @click="create">Add post</button>


        <p>This is the computed value :: {{name}}</p>
        <p>This is the computed value :: {{currentuser}}</p>
    </div>

</template>

<script>
    import axios from "axios";
    import  {mapState} from 'vuex'
    export default {
        data() {
            return {
                firstname : " ",
                lastname : " ",
                password: " ",
            }
        },
        computed : mapState(["name"]),
        methods: {
            create() {
                axios
                    .post('http://localhost:4000/signup',[this.firstname,this.lastname,this.password])
                    .then(response => {
                        var code = response.status;
                        console.log(response.data.token);
                        this.$store.dispatch('perfomchanhing',response.data.token);
                        if(code === 200)
                        {
                            console.log(response);
                            this.$notify({
                                group: 'foo',
                                title: 'Success',
                                text: 'successful login'
                            });
                        }
                        else
                        {
                            this.$notify({
                                group: 'foo',
                                title: 'Failure',
                                text: 'Error occured when posting data : error code : ' + code
                            });
                        }
                    })
                    .catch(error => {
                        this.$notify({
                            group: 'foo',
                            title: 'Failure',
                            text: error
                        });
                    })
                    .finally(() => this.loading = false)
            },
        }
    }
</script>

<style scoped>

</style>
