<template>
	<div>
		<button v-for="key in 5" :key="key" @click="changeQuestionList(key)">
			{{ key }}
		</button>
	</div>
	<div v-if="currentQuestion">
		<span>
			{{ questionMark }}
			<button @click="shuffleQuestionList">Shuffle</button>
		</span>
		<div class="question-box">
			{{ currentQuestion.QUESTION }}
		</div>
		<div>
			<input ref="answerRef" @keyup.enter="checkAnswer" />
			<button @click="checkAnswer">Enter</button>
		</div>
	</div>
</template>

<script>
import { computed, nextTick, ref } from "vue";

import { QUESTIONS } from "./plugin/constants";

export default {
	name: "App",
	components: {},
	setup() {
		//============================== Question
		const questionList = ref([]);
		const currentQuestion = computed(() =>
			questionList.value.find(question => !question.IS_CORRECT),
		);
		const questionMark = computed(() => {
			const { length: total } = questionList.value;
			const { length: index } = questionList.value.filter(
				question => question.IS_CORRECT,
			);
			return `${index}/${total}`;
		});

		function changeQuestionList(key) {
			questionList.value = QUESTIONS.filter(
				({ SUBJECT }) => SUBJECT === key,
			);

			if (currentQuestion.value) {
				nextTick(() => initAnswer());
			}
		}

		function shuffleQuestionList() {
			questionList.value.sort(() => Math.random() - Math.random());
			initAnswer();
		}

		//============================== Answer
		const answerRef = ref(null);
		const currentAnswer = computed(() => currentQuestion.value.ANSWER);

		function initAnswer() {
			answerRef.value.value = "";
			answerRef.value.focus();
		}

		function checkAnswer({ target: { value } }) {
			if (validateAnswer(currentAnswer.value) !== value) {
				passAnswer();
				return;
			}

			alert(
				`잘했다 정답이다!\r\n\r\n${currentQuestion.value.QUESTION} \r\n정답: ${currentAnswer.value}`,
			);
			currentQuestion.value.IS_CORRECT = true;

			initAnswer();
		}

		function passAnswer() {
			alert(
				`ㅠㅠ\r\n\r\n${currentQuestion.value.QUESTION} \r\n정답: ${currentAnswer.value}`,
			);

			const index = questionList.value.findIndex(
				question => question === currentQuestion.value,
			);
			const [question] = questionList.value.splice(index, 1);
			questionList.value.push(question);

			initAnswer();
		}

		function validateAnswer(value) {
			return String(value).toUpperCase().replace(/ |,/g, "");
		}

		return {
			// Question
			currentQuestion,
			questionMark,
			changeQuestionList,
			shuffleQuestionList,

			// Answer
			answerRef,
			checkAnswer,
			validateAnswer,
			passAnswer,
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	white-space: break-spaces;
}
</style>
