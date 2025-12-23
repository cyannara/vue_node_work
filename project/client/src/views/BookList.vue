<template>
    <div class="container">
        <p>도서정보~~~</p>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>도서명</th>
                    <th>저자</th>
                    <th>출판사</th>
                    <th>출판일수</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="book.no" v-for="book in bookList" 
                                    @click="goToDetail(book.no)">
                    <td>{{ book.no }}</td>
                    <td>{{ book.name }}</td>
                    <td>{{ book.writer }}</td>
                    <td>{{ book.publisher }}</td>
                    <td>{{ dateFormat(book.publication_date, 'yyyy-MM-dd') }}</td>                    
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import userDateUtils from '@/utils/useDates.js';
import axios from 'axios';

export default {
    data() {
        return {
            bookList: []
        };
    },
    created() {
        // 서버와 통신(=> axios), 값 초기화
        this.getBookList();
    },
    methods: {
        async getBookList() {            
            let result = await axios.get('/api/books')
                                    .catch(err => console.log(err));
            this.bookList = result.data; // 서버가 실제로 보낸 데이터
        },
        goToDetail(bookNo) {
            // 선택한 게시글의 상세정보 페이지를 요청 => this.$router / router 폴더 밑에 검색
            this.$router.push({ name : 'bookInfo', params : { bno : bookNo }});

        },
        dateFormat(value, format) {
            return userDateUtils.dateFormat(value, format);
        }
    }
}
</script>
<style scoped>
table * {
    text-align: center;
}
</style>
