<template>
    <div>
        <transition-group name="list" tag="ul">
            <!-- vs코드라서 바인딩해야 되는 것, 자체에서 오류내는 거임. -->
            <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
                v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">
                    {{ todoItem.item }} 
                </span>
                <!-- 속성으로 접근할 수 있음. -->
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
                <!-- <button v-on:click>delete</button> -->
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            todoItems: []
        }
    }, 
    props: ['propsdata'],
    methods: {
        removeTodo: function(todoItem, index) {
            // this.$emit('removeItem', todoItem, index);
            this.$store.commit('removeOneItem', todoItem, index);
            console.log(todoItem, index);
            //localStorage.removeItem(todoItem.item); //브라우저 저장소 영역이라 화면에선 안 지워짐.
            //this.todoItems.splice(index, 1) //js 배열 이벤트로 특정 인덱스에서 하나 지울 수 있음.
        },
        toggleComplete: function(todoItem, index) {
            //this.$emit('toggleItem', todoItem, index);
            this.$store.commit('toggleOneItem', todoItem, index);
        }
    },
    // created: function() {
    //     if (localStorage.length > 0) {
    //         for (var i = 0; i < localStorage.length; i++) {
//                this.todoItems.push(localStorage.key(i));
//                console.log(typeof localStorage.getItem(localStorage.key(i))); //문자열
                //console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))); //String 값을 json으로 변환
    //             this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    //         }
    //     }
    // }

}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem, 0;
    margin-top: 0.2rem;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.checkBtn {
    line-height: 45px;
    color: #62ACDE;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #B3ADAD;
}
.textCompleted {
    text-decoration: line-through;
    color: #B3ADAD
}
.removeBtn {
    margin-left: auto;
    color: #DE4343;
}

/* 리스트 아이템 트랜지션 효과 */
/* .list-item {
    display: inline-block;
    margin-right: 10px;
} */
.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>