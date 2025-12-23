<template>
    <div class="row">
        <div class="col" v-for="appObject in applications_data" :key="appObject.no">
            <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body text-primary">
                <h5 class="card-title">{{appObject.title}}</h5>
                <p class="card-text">{{appObject.text}}</p>
            </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    setup() {
        const applications_data = [
            {no:1, title:'java', text:'java contents'}, 
            {no:2, title:'spring', text:'spring contents'},
            {no:3, title:'vue', text:'vue contents'} 
        ]
        return {applications_data}
    },
}
</script>