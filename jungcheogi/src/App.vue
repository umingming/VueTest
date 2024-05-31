<template>
    <div class="subject-group">
        <button
            v-for="key in 7"
            :key="key"
            :class="{ on: selectedSubject === key }"
            @click="selectSubject(key)"
        >
            {{ key }}
        </button>
        <button
            v-for="key in subjects"
            :key="key"
            :class="{ on: selectedSubject === key }"
            @click="selectSubject(key)"
        >
            {{ key }}
        </button>
    </div>
    <div
        v-if="currentQuestion"
        :class="{ correct: currentQuestion.IS_CORRECT }"
    >
        <span id="question-mark">
            {{ questionMark }}
            <button @click="shuffleQuestionList">Shuffle</button>
        </span>
        <div class="question-box">
            <span>[ {{ currentQuestion.TITLE }} ]</span>
            {{ currentQuestion.QUESTION }}
        </div>
        <span id="serial">
            {{ currentQuestion.ITERATION }},
            {{ currentQuestion.NO }}
        </span>
        <div class="answer-box">
            <input ref="answerRef" @keyup.enter="checkAnswer" />
            <button v-if="!isAnswerEntered" @click="checkAnswer">Enter</button>
            <button v-else @click="passAnswer">Next</button>
        </div>
        <div class="info-box" v-if="isAnswerEntered">
            <div v-if="currentQuestion.IS_CORRECT">맞았다! 잘했다!</div>
            <div v-else>틀렸다.</div>
            <div>
                정답:
                <span>{{ currentQuestion.ANSWER }}</span>
            </div>
        </div>
    </div>
    <div v-else class="success">{{ selectedSubject }} 과목 완료!🎉</div>
</template>

<script>
import { computed, nextTick, onMounted, ref } from "vue";

import { QUESTIONS } from "./plugin/algorithm";

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
            questionList.value.find(question => !question.IS_ENTERED)
        );
        const questionMark = computed(() => {
            const { length: total } = questionList.value;
            const { length: index } = questionList.value.filter(
                question => question.IS_CORRECT
            );
            return `${index}/${total}`;
        });

        function changeQuestionList() {
            questionList.value = QUESTIONS.filter(
                ({ SUBJECT }) => SUBJECT === selectedSubject.value
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
        const isAnswerEntered = ref(false);
        const enteredTime = ref(0);

        function initAnswer() {
            answerRef.value.value = "";
            answerRef.value.focus();
            isAnswerEntered.value = false;
        }

        function checkAnswer({ timeStamp }) {
            if (isAnswerEntered.value) {
                return timeStamp - enteredTime.value > 500
                    ? passAnswer()
                    : null;
            }
            const { value } = answerRef.value;
            currentQuestion.value.IS_CORRECT =
                validateAnswer(currentAnswer.value) === validateAnswer(value);

            isAnswerEntered.value = true;
            enteredTime.value = timeStamp;
        }

        function passAnswer() {
            if (currentQuestion.value.IS_CORRECT) {
                currentQuestion.value.IS_ENTERED = true;
            } else {
                const index = questionList.value.findIndex(
                    question => question === currentQuestion.value
                );
                const [question] = questionList.value.splice(index, 1);
                questionList.value.push(question);
            }
            initAnswer();
        }

        function validateAnswer(value) {
            return String(value).toUpperCase().replace(/ |,/g, "");
        }

        return {
            // Subject
            subjects: ["보안", "유비"],
            selectedSubject,
            selectSubject,

            // Question
            currentQuestion,
            questionMark,
            changeQuestionList,
            shuffleQuestionList,

            // Answer
            answerRef,
            isAnswerEntered,
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
    max-width: 800px;
    margin: auto;
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
    margin: 0px 30px 10px;
}

#serial {
    display: block;
    text-align: right;
    margin: 0px 30px;
}

.question-box span {
    display: block;
    font-weight: 600;
    font-size: large;
    margin-bottom: 5px;
}

.answer-box input {
    margin-right: 10px;
    width: calc(80% - 100px);
    height: 20px;
}

.success {
    margin-top: 10px;
    font-weight: bold;
}

.info-box {
    margin-top: 10px;
    color: red;
}

.info-box span {
    font-weight: 600;
}

.correct .info-box {
    color: blue;
}
</style>
