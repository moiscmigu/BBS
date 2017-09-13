import dateDiff from 'date-diff';
import moment from 'moment';
import {bake_cookie, read_cookie} from 'sfcookies';


const calcDate = (date) => {
    let newDate = moment(new Date(date)).fromNow();
   return newDate;
};//end of calcDate

const removeByIndex = (state=[], index) => {
    let reminder = state.filter((_, i)=>i !== index);
    return state.filter((_, i) => i !== index);
};

const removeAllTask = (state=[], action) => {
    console.log('removing all task', action);
};//end of removeAllTask



const addToListReducer = (state=[], action) => {
    let reminders;
    state = read_cookie('reminders');
    
    switch (action.type) {
        case 'ADD_TO_LIST':
            reminders = [...state, {task: action.task, dueDate:calcDate(action.dueDate)}]
            bake_cookie('reminders', reminders);
            return reminders;
        case "REMOVE_FROM_LIST":
            console.log("Removing from the list", action.index)
            reminders = removeByIndex(state, action.index);
            bake_cookie('reminders', reminders)
            return reminders;
        case 'DELETE_ALL_TASK':
            reminders = [];
            return reminders;
        default:
            return state;

    } //end of switch statement
}

export default addToListReducer;