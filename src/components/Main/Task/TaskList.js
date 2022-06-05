import React from "react";
import Task from "./Task";

const TaskList = function (props) {
    window.localStorage.setItem("tasks", JSON.stringify(props.taskList));

    return (
        <section className="h-5/6 max-h-full w-full mx-auto my-5 overflow-y-auto lg:w-11/12">
            {props.taskList.map((task, index) => (
                <Task
                    key={task.id}
                    taskText={task.content}
                    taskDate={task.taskDate}
                    isActive={task.isActive}
                    handleTaskComplete={() => {
                        props.handleTaskComplete(task.id);
                    }}
                    handleTaskDelete={() => {
                        props.handleTaskDelete(task.id);
                    }}
                    isTaskSubmitted={props.isTaskSubmitted}
                />
            ))}
        </section>
    );
};

export default TaskList;
