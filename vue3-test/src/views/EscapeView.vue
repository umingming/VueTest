<template>
	<div>
		<div v-for="(info, index) of infos" :key="index">
			<h1>{{ info.name }}</h1>
			{{ info.cost }}
			{{ info.difficulty }}
			{{ info.play }}
			{{ info.rating }}
			{{ info.site }}
		</div>
	</div>
</template>

<script>
import infos from "@/assets/data/escapeInfo.json";

export default {
	name: "EscapleView",
	setup() {
		return {
			infos,
		};
	},
};
</script>
