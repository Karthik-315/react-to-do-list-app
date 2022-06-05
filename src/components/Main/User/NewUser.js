import React from "react";

const NewUser = function (props) {
    const [currentUserFormData, setCurrentUserFormData] = React.useState("");

    const processUserFormData = function (e) {
        e.preventDefault();
        e.target.blur();

        props.handleHeaderText(currentUserFormData);
        props.registerUser(currentUserFormData);
        setCurrentUserFormData("");
    };

    const listenUserFormData = function (e) {
        setCurrentUserFormData(e.target.value);
    };

    props.handleCurrentHeaderText(currentUserFormData);

    return (
        <section className="absolute top-[20%] right-2 bottom-[20%] left-2 py-20 px-4 bg-gradient-to-r from-black/40 via-black/10 to-black/60 rounded lg:top-[20%] lg:right-[10%] lg:bottom-[10%] lg:left-[10%] lg:py-0 lg:px-20">
            <h2 className="text-3xl my-5 font-medium uppercase text-white text-center">
                Welcome To My To-Do List App!
            </h2>
            <form
                onSubmit={processUserFormData}
                className="w-full flex flex-col items-center"
            >
                <article className="relative flex flex-col items-center w-full mt-20">
                    <input
                        type="text"
                        name="task-name"
                        required
                        className="form-user-input peer"
                        autoComplete="off"
                        onChange={listenUserFormData}
                        value={currentUserFormData}
                    />

                    <label htmlFor="task-name" className="input-label">
                        Tell Us Your Name
                    </label>
                </article>

                <button
                    type="submit"
                    className="w-2/3 mt-20 p-5 rounded text-slate-200 bg-indigo-500 font-medium text-3xl tracking-widest uppercase ring-4 ring-indigo-500 hover:bg-slate-200 hover:text-indigo-500 transition-colors lg:w-1/3 group"
                >
                    Lets{" "}
                    <span className="inline-block group-hover:rotate-[360deg] transition-transform duration-700">
                        G
                    </span>
                    o!
                </button>
            </form>
        </section>
    );
};

export default NewUser;
