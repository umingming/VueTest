<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.todoItems" v-bind:key="index" class="shadow"> 
            <!-- v-bind:key; index 접근하는 키값으로 보통 인덱스 사용 -->
                <i class="checkBtn fas fa-check" 
                    v-bind:class="{checkBtnCompleted: todoItem.completed}"
                    v-on:click="toggleComplete({todoItem, index})"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">
                    {{ todoItem.item }} 
                </span>
                <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            removeTodo: 'removeOneItem', 
            toggleComplete: 'toggleOneItem'
        }),
    },
    computed: {
        ...mapGetters({
            todoItems: 'storedTodoItems'
        })
    }
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
    cursor: pointer;
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
    cursor: pointer;
}
.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>