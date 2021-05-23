import {combineReducers} from 'redux';

const INITIAL_STATE = {
    current: [],
    all_subjects: [
        'Literature',
        'Speech',
        'Writing',
        'Algebra',
        'Geometry',
        'Statistics',
        'Chemistry',
        'Biology',
        'Physics',
        'Economics',
        'Geography',
        'History'
    ],

};




const subjectsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_SUBJECT':
            const newState = {
                ...state
            }
            newState.current.push(action.payload);

            return newState;
        case "CLEAR_SUBJECTS":
                const emptyState = {
                    ...state
                }
                emptyState.current = [];

                return newState;
        default:
            return state
    }
}

export default combineReducers({
    subjects: subjectsReducer
});