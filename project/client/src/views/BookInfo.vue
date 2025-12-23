<template>
    <div class="container">
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" class="text-center table-primary">번호</th>
                        <td scope="col" class="text-center">{{ bookInfo.no  }}</td>
                        <th scope="col" class="text-center table-primary">도서명</th>
                        <td scope="col" class="text-center">{{ bookInfo.name }}</td>
                        <th scope="col" class="text-center table-primary">저자</th>
                        <td scope="col" class="text-center">{{ bookInfo.writer }}</td>
                    </tr>

                    <tr>                        
                        <th scope="col" class="text-center table-primary">출판사</th>
                        <td colspan="2" class="text-center">{{ bookInfo.publisher }}</td>
                        <th scope="col" class="text-center table-primary">출판일자</th>
                        <td colspan="2" class="text-center">{{ dateFormat(bookInfo.publication_date, 'yyyy-MM-dd') }}</td>
                    </tr>
                    <tr>                        
                        <td colspan="6" class="text-center table-primary">책 소개</td>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="6" class="text-left" valign="top" height="200">
                            <pre
                                style="white-space: pre-wrap;border:none;background-color: white;">{{ bookInfo.info }}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6" class="text-center">
                            <button class="btn btn-xs btn-info" @click="goToList()">목록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import userDateUtils from '@/utils/useDates.js';
import axios from 'axios';

export default {
    data() {
        return {
            bookInfo: {}
        };
    },
    created() {
        let searchNo = this.$route.params.bno;
        this.getBookInfo(searchNo);
    },
    methods: {
        async getBookInfo(searchNo) {
            // 서버에 데이터를 요청
            let result = await axios.get(`/api/books/${searchNo}`)
                                    .catch(err => console.log(err));
            this.bookInfo = result.data;
        },
        dateFormat(value, format) {
            return userDateUtils.dateFormat(value, format);
        },
        goToList() {
            this.$router.push({ name : 'bookList' });
        }
    }
}
</script>
