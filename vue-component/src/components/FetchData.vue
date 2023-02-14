<script>
import axios from 'axios';
export default {
    props: ['url'],
    data() {
        return {
            response: null,
            loading: true,
        }
    },
    created() {
        axios.get(this.url)
            .then(response => {
                this.response = response.data;
                this.loading = false;
            })
            .catch(error => {
                console.log(error);
            });
    },
    render() {
        /*
            render: 컴포넌트를 그림.
            scopedSlot: 등록하는 곳에 데이터만 노출
        */
        return this.$scopedSlots.default({
            response: this.response,
            loading: this.loading,
        });
    },
}
/*
    reduner: function(createElement) {
        return createElement('태그 이름', '태그 속성', '하위 태그 내용');
        return createElement('p', 'Hello World');
    }
    reduner: function(h) {
        return h('p', 'Hello World');
    }
    render: h => h(App);
*/
</script>

