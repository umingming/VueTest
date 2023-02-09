<template>
    <div>
        <section>
            <div class="user-container">
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="user-description">
                    <slot name="username">
                        {{ info.id }}
                    </slot>
                    <div class="time">
                        <slot name="time"> Joined {{ info.created }}, </slot>
                        <slot name="karma"> </slot>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        info: Object,
    },
};
/*
    1. computed로 접근

    2. props 전달
*/
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 6.7px;
}
</style>

