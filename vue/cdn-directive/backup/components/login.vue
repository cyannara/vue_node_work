<template>
<div>
    <form>
        <input v-model="member.id">
        <input v-model="member.pw">
        <button type="button" @click="login">login</button>
        <button type="button" @click="gopage">회원가입</button>
    </form>
</div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            member: {id:'', pw:''}
        }
    },
    methods: {
        login: function(){
            console.table( this.member)
        },
        gopage : function(){
            this.$router.push('/signin')
        },
    }
}
</script>

<style>
.hello {
    background-color: #ffe;
}
</style>