<template>
    <div>
        <input v-model="firstname">
        <input v-model="lastname">
        <input v-model="password">
        <button @click="create">Add post</button>
    </div>

</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                firstname : " ",
                lastname : " ",
                password: " ",
            }
        },
        methods: {
            create() {
                axios
                    .post('http://localhost:4000/sign/signup',[this.firstname,this.lastname,this.password])
                    .then(response => {
                        var code = response.status;
                        console.log(code);
                        if(code === 200)
                        {
                            this.$notify({
                                group: 'foo',
                                title: 'Success',
                                text: 'Posting of data was successful'
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
