## cdn 방식

[vue loader](https://github.com/FranckFreiburger/vue3-sfc-loader)  
[vue quick start](https://v3-docs.vuejs-korea.org/guide/quick-start.html)  

## json
json은 데이터 교환하기 위한 객체 표기법으로서 {}, [] 기호를 사용함
 - object : { } ,  {"필드명":값, ....   }  
 - array : [], [ 값, ... ]  
 - 값에는 number, string, object, array 등이 올 수 있다.

```javascript
let name="aaa"
let age=10
let obj1 = {"name":name, "age":Age} 
let obj2 = {name, age}    //축약형

let obj3 = {"name":name, "getName":function(){} }
let obj4 = {name, getName(){     } }    //축약형

//{ data(){}  }   =>   {data : function(){ }}
```

## instance (실습: 00instance.html)
- componentAPI
- optionsAPI
- ESM vs global 

## life cycle (실습: 01lift.html)
- created
- mounted
- updated

## data binding (실습 : 02binding.html)
Vue는 컴포넌트 인스턴스의 데이터를 서술적으로 렌더링된 DOM에 바인딩할 수 있는 HTML 기반 템플릿 문법을 사용합니다.
<pre>
태그내용  v-text  ==> innerText  
         v-html  ==> innerHTML  
    속성  v-bind
   input v-model  (양방향 바인딩)
</pre>

## event (실습: 03event.html, 04bindingEvent.html)
- @click.prevent ==> event.preventDefault()  
                     submit, a 태그에 사용 
- @click.stop    ==> event.stopPropagation()
  

## 제어문 (실습: 05controll.html)
- v-show
- v-if
- v-for

## fetch (실습: 06bindingFetch.html)
- axios

## component (실습: 10component.html)


## router (실습: 11router.html, 12router.html)
- this.$route.params.username
- this.$router.push('/login')

## vuex (실습: 13vuex.html)
- createStore
- state()
- mutations
