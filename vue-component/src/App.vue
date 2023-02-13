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
        <check-box :checked="checked"></check-box>
    </div>
</template>

<script>
import ItemComponent from './components/ItemComponent';
import CheckBox from './components/CheckBox';

export default {
    name: "App",
    components: { ItemComponent, CheckBox },
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
