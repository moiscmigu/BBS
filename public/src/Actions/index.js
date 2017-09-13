export const addToList = (task, dueDate) => {
    const action = {
        type: "ADD_TO_LIST",
        task,
        dueDate
    };//end of action

    return action;
};//end of assTOList
