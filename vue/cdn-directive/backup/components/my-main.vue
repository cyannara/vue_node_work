<script>
export default {
    data() {
        return {
            who: 'world!!!'
        }
    }
}
</script>

<template>
    <div class="hello">
        Hello {{who}}   
        <p v-html="who"></p>
    </div>
</template>

<style>
.hello {
    background-color: #ffe;
}
</style>