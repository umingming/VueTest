<template>
    <div>
        <user-profile :info="userInfo">
            <span slot="karma">
                {{ userInfo.karma }}
            </span>
        </user-profile>
    </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
    components: {
        UserProfile,
    },
    computed: {
        userInfo() {
            return this.$store.state.user;
        },
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch("FETCH_USER", userName);
    },
};
</script>

<style>
</style>