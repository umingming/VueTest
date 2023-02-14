<template>
    <div id="app">
        <ul>
            <item-component 
                v-for="item in items" 
                :key="item" 
                :item="item" 
            >
            </item-component>
        </ul>
        <check-box 
            v-model="checked"
        >
        <!-- v-model은 input 이벤트와 value값으로 이뤄짐. -->
        </check-box>
        <fetch-data
            url="https://jsonplaceholder.typicode.com/users/1"
        >
            <div
                slot-scope="{ response, loading }"
            >
                <div v-if="!loading">
                    {{ response }}
                </div>
                <div v-if="loading">
                    Loading...
                </div>
            </div>
        </fetch-data>
    </div>
</template>

<script>
import ItemComponent from './components/ItemComponent';
import CheckBox from './components/CheckBox';
import FetchData from './components/FetchData';

export default {
    name: "App",
    components: { ItemComponent, CheckBox, FetchData },
    data() {
        return {
            items: ['아이템1','아이템2','아이템3','아이템4','아이템5'],
            checked: true,
        }
    }
};
</script>

<style>
</style>
