import React from "react";
import NewUser from "./User/NewUser";
import InputForm from "./Form/InputForm";
import TaskList from "./Task/TaskList";
// import PlaceholderTask from "./PlaceholderTask";

const Main = function (props) {
    console.log(`RENDERING MAIN`);
    const username = window.localStorage.getItem("username") || "";
    const tasksFromStorage = JSON.parse(window.localStorage.getItem("tasks")) || [];

    const [user, setUser] = React.useState(username);
    const [taskList, setTaskList] = React.useState(tasksFromStorage);
    const [placeholderTask, setPlaceholderTask] = React.useState("");

    const registerUser = function (username) {
        window.localStorage.setItem("username", username);
        setUser(username);
    };

    const addInProgressNewTask = function (taskText) {
        setPlaceholderTask(taskText);
    };

    const addCompletedTask = function (task) {
        setTaskList((prevTasks) => {
            return [...prevTasks, { ...task, user: user }];
        });
    };

    const markTaskComplete = function (id) {
        console.log(`Task ${id} marked complete`);

        console.log(tasksFromStorage);
        const taskToBeModified = tasksFromStorage.filter((taskObj) => taskObj.id === id);

        console.log(taskToBeModified);
    };

    const deleteTaskComplete = function (id) {
        setTaskList((prevTasks) => {
            return prevTasks.filter((task) => task.id !== id);
        });
    };

    return (
        <main className="grow h-[calc(100vh-9.75rem)] p-3 mt-14 lg:p-10 lg:mt-5">
            {user === "" ? (
                <NewUser
                    handleCurrentHeaderText={props.handleCurrentHeaderText}
                    handleHeaderText={props.handleHeaderText}
                    registerUser={registerUser}
                />
            ) : (
                <>
                    <InputForm
                        allTasks={taskList}
                        handleOnTaskSubmit={addCompletedTask}
                        handleInProgressTask={addInProgressNewTask}
                    />
                    <TaskList
                        taskList={taskList}
                        handleTaskComplete={markTaskComplete}
                        handleTaskDelete={deleteTaskComplete}
                        isTaskSubmitted={placeholderTask.length > 0 ? false : true}
                    />

                    {/* {placeholderTask.length > 0 && (
                        <placeholderTask
                        taskContent={placeholderTask}
                        isActive={true}
                        handleTaskComplete={markTaskComplete}
                                handleTaskDelete={deleteTaskComplete}
                            />
                    )} */}
                </>
            )}
        </main>
    );
};

export default Main;
