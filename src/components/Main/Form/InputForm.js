import React from "react";
import plusIcon from "../../../assets/images/icons/plus.png";
import { nanoid } from "nanoid";

const InputForm = function (props) {
    // prettier-ignore
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const [currentFormData, setCurrentFormData] = React.useState("");

    const getDate = () =>
        `${
            months[new Date().getMonth()]
        } ${new Date().getDate()}, ${new Date().getFullYear()}`;

    const processFormData = function (e) {
        e.preventDefault();

        const newTaskID = nanoid();

        //Pass data to parent to add to the task list.
        props.handleOnTaskSubmit({
            id: newTaskID,
            content: currentFormData,
            taskDate: getDate(),
            isActive: true,
        });

        e.target.blur();
        setCurrentFormData("");
    };

    const listenFormData = function (e) {
        setCurrentFormData(e.target.value);
    };

    props.handleInProgressTask(currentFormData);

    return (
        <section>
            <form onSubmit={processFormData}>
                <article className="relative h-full w-full">
                    <input
                        type="text"
                        name="task-name"
                        required
                        className="form-user-input peer"
                        autoComplete="off"
                        onChange={listenFormData}
                        value={currentFormData}
                    />

                    <label htmlFor="task-name" className="input-label">
                        Your Task Here
                    </label>

                    <button
                        type="submit"
                        className="absolute top-0 right-0 bottom-0 bg-indigo-500 rounded-r-md group"
                    >
                        <img
                            src={plusIcon}
                            alt="Add Task"
                            className="h-16 w-16 p-3 pointer-events-none group-hover:rotate-180 transition-transform duration-300"
                        />
                    </button>
                </article>
            </form>
        </section>
    );
};

export default InputForm;
