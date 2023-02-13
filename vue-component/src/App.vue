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
    </div>
</template>

<script>
import ItemComponent from './components/ItemComponent';

export default {
    name: "App",
    components: { ItemComponent },
    data() {
        return {
            items: ['아이템1','아이템2','아이템3','아이템4','아이템5']
        }
    }
};
</script>

<style>
</style>
