<template>
    <div>
        <input v-model="book">
        <input v-model="review">
        <button @click="create">Add post</button>
    </div>

</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                book : " ",
                review : " ",
            }
        },
        methods: {
            create() {
                let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbIiBKTkhFSktGS0giLCJDVkJOTSwgIiwiQyBWQk5NICJdLCJpYXQiOjE1Nzc5MDM2MTN9.ZGa8L3PP2HFhdQEBsFbeDxFRd8knMwfr-OXdGjuUJEQ";
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
