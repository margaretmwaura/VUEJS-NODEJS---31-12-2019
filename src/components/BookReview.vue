<template>
    <div>
        <input v-model="book">
        <input v-model="review">
        <button @click="create">Add post</button>

        <p v-model="Bearer">Bearer to be using {{name}}</p>
    </div>

</template>

<script>
    import axios from "axios";
    import  {mapState} from 'vuex'
    export default {
        data() {
            return {
                book : " ",
                review : " ",
                Bearer : " "
            }
        },
        computed : mapState(["name"]),
        methods: {
            create() {
                let token = this.name;
                axios
                    .post('http://localhost:4000/bookreview',[this.body,this.review],{
                    headers: {
                        'Authorization': 'Bearer '+ token
                    }
                }).then(response => {
                        var code = response.status;
                        console.log(response.data.token);
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
