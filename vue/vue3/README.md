### pinia

pinia의 역할은 단순 상태 저장소가 아니라 서비스 로직을 포함한다  
|역할|설명|
|:--|:--|
|State| 화면에서 쓰이는 데이터 원천|
|Getter|파생상태|
|Action|비즈니스로직 + 서버통신계층|

```
View(컴포넌트)
   ↓
Pinia Action (서비스 계층)
   ↓
API 모듈 (axios)
   ↓
Backend

```

API 계층 분리

```
import axios from 'axios'

export const userApi = {
  list: () => axios.get('/users'),
  get: id => axios.get(`/users/${id}`),
  create: data => axios.post('/users', data),
  update: data => axios.put(`/users/${data.id}`, data),
  remove: id => axios.delete(`/users/${id}`)
}
```
