import React from "react";
import checkIcon from "../../../assets/images/icons/check.png";
import deleteIcon from "../../../assets/images/icons/delete.png";

const TemporaryTask = function (props) {
    const textStyle = `text-content ${props.isActive ? "" : "line-through opacity-50"}`;

    return (
        <article className="grid grid-cols-[10fr_1fr] my-4 px-2 lg:my-4">
            <div className="task-container">
                <p className="task--text">
                    <span className={textStyle}>{props.taskContent}</span>
                    {/* <span className="absolute top-1 right-4 opacity-75 text-xs font-bold uppercase">
                        {props.taskDate}
                    </span> */}
                </p>
            </div>

            <div className="task--buttons task--buttons-full">
                <button className="task--check-button" onClick={props.handleTaskComplete}>
                    <img
                        src={checkIcon}
                        alt="Mark Complete"
                        className="h-3/4 w-3/4 p-2"
                    />
                </button>
                <button className="task--delete-button" onClick={props.handleTaskDelete}>
                    <img src={deleteIcon} alt="Delete Task" className="h-3/4 w-3/4 p-2" />
                </button>
            </div>
        </article>
    );
};

export default TemporaryTask;
