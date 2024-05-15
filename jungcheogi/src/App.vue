<template>
	<div class="subject-group">
		<button
			v-for="key in 5"
			:key="key"
			:class="{ on: selectedSubject === key }"
			@click="selectSubject(key)"
		>
			{{ key }}
		</button>
	</div>
	<div v-if="currentQuestion">
		<span id="question-mark">
			{{ questionMark }}
			<button @click="shuffleQuestionList">Shuffle</button>
		</span>
		<div class="question-box">
			{{ currentQuestion.QUESTION }}
		</div>
		<span id="serial">
			{{ currentQuestion.ITERATION }},
			{{ currentQuestion.NO }}
		</span>
		<div class="answer-box">
			<input ref="answerRef" @keyup.enter="checkAnswer" />
			<button @click="checkAnswer">Enter</button>
		</div>
	</div>
	<div v-else class="success">{{ selectedSubject }} 과목 완료!🎉</div>
</template>

<script>
import { computed, nextTick, onMounted, ref } from "vue";

import { QUESTIONS } from "./plugin/constants";

export default {
	name: "App",
	components: {},
	setup() {
		//============================== Subject
		const selectedSubject = ref(0);

		function selectSubject(key) {
			selectedSubject.value = key;
			changeQuestionList();
		}

		onMounted(() => selectSubject(1));

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

		function changeQuestionList() {
			questionList.value = QUESTIONS.filter(
				({ SUBJECT }) => SUBJECT === selectedSubject.value,
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

		function checkAnswer() {
			const { value } = answerRef.value;
			if (validateAnswer(currentAnswer.value) !== validateAnswer(value)) {
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
			// Subject
			selectedSubject,
			selectSubject,

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
	line-height: 25px;
}
.subject-group button {
	width: 50px;
	margin: 10px;
}
.subject-group button.on {
	font-weight: bold;
}
#question-mark {
	display: block;
	text-align: right;
	margin: 0px 100px 10px;
}
#serial {
	display: block;
	text-align: right;
	margin: 0px 100px;
}
.answer-box {
	margin-top: 20px;
}
.answer-box input {
	margin-right: 10px;
}
.success {
	margin-top: 10px;
	font-weight: bold;
}
</style>
