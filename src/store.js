import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    activityProgress: [],
    currentActivity: {},
    activityResponse: {
        selectedResponse: null,
        correctResponse: null
    },
    lessonStatus: "loading"
}

const mutations = {
    SET_LESSON_STATUS(state, status) {
        state.lessonStatus = status
    },
    SET_SELECTED_ACTIVITY_RESPONSE(state, selectedActivityResponse) {
        state.activityResponse.selectedResponse = selectedActivityResponse;
    },
    SET_ACTIVITY_PROGRESS(state, activityProgress) {
        state.activityProgress = activityProgress;
    },
    SET_CURRENT_ACTIVITY(state, currentActivity) {
        state.currentActivity = currentActivity
    },
    SUBMIT_ACTIVITY_RESPONSE (state, activityResponse) {
        let i = state.activityProgress.findIndex( activity => activity.activityId === activityResponse.activityId)
        console.log(activityResponse)
        state.activityProgress[i].submittedResponse = activityResponse.selectedResponse;
    }
}

const actions = {
    setLesson(context, lesson) {
        context.commit("SET_LESSON_STATUS", "loading");
        let activityProgress = lesson.ActivitySequence.map(activity => {
            return {
                "activityId": activity.activityId,
                "activityAttempts": 0,
                "correctResponseId": activity.question.correctResponseId,
                "submittedResponse": null,
                "responseResult": null
            }
        })
        context.commit("SET_ACTIVITY_PROGRESS", activityProgress)
        context.commit("SET_LESSON_STATUS", "introduction")
        context.commit("SET_CURRENT_ACTIVITY", lesson.ActivitySequence[0])
    },
    setActiveLessonStatus (context) {
        context.commit("SET_LESSON_STATUS", "active")
    },
    setLoadingLessonStatus (context) {
        context.commit("SET_LESSON_STATUS", "loading")
    },
    selectActivityResponse (context, selectedActivityResponse) {
        console.log("set selected response", selectedActivityResponse)
        context.commit("SET_SELECTED_ACTIVITY_RESPONSE", selectedActivityResponse)
    },
    checkActivityResponse ({commit, state}) {
        commit("SET_LESSON_STATUS", "loading")
        let activityReponse = {
            activityId: state.currentActivity.activityId,
            selectedResponse: state.activityResponse.selectedResponse
        }
        commit("SUBMIT_ACTIVITY_RESPONSE", activityReponse);
    }

}

const getters = {
    lessonStatus(state) {
        return state.lessonStatus
    },
    activityProgress(state) {
        return state.activityProgress
    },
    currentActivity(state) {
        return state.currentActivity
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})