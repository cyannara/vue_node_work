<script>
export default {
      data() {   //바인딩
        return {
          products: [],
          cart: []
        }
      },
      mounted() {     //dom객체 생성 후호출
        console.log("mount 됨");
        fetch("product.json")
        .then(res=>res.json())
        .then(res=>this.products = res);

        
        store.commit('increment')
        console.log("$store count", this.$store.state.count)
        console.log("store count ", store.state.count)
      },
      methods: {    //이벤트 핸들러
        addCart(name) {
            this.cart.push(name);
            alert("장바구니")
        },
      }
    }
</script>

<template>
  <div>
    <div v-for="product in products" v-bind:key="product.id" class="card" style="width: 18rem;">
      <img :src="product.img" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title" v-text="product.name"></h5>
        <p class="card-text" v-html="product.desc"></p>
        
        <a href="#" v-show="product.cnt>0" @click.prevent="addCart(product.name)"
          class="btn btn-primary">장바구니담기</a>
        </div>
      </div>
    </div>
</template>