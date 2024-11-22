import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });

    const [module, setModule] = useState({
        id: 1, name: "NodeJS", description: "NodeJS Module", course: "CS572"
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div>
            <div id="wd-working-with-objects">
                <h3>Working With Objects</h3>
                <h4>Modifying Properties</h4>
                <a id="wd-update-assignment-title"
                    className="btn btn-primary float-end"
                    href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                    Update Title
                </a>
                <input className="form-control w-75" id="wd-assignment-title"
                    defaultValue={assignment.title} onChange={(e) =>
                        setAssignment({ ...assignment, title: e.target.value })} />
                <hr />
                <a id="wd-update-assignment-score"
                    className="btn btn-primary float-end"
                    href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                    Update Score
                </a>
                <input className="form-control w-75" type="number" id="wd-assignment-score"
                    defaultValue={assignment.score} onChange={(e) =>
                        setAssignment({ ...assignment, score: Number(e.target.value) })} />
                <hr />
                <hr />
                <a id="wd-update-assignment-score"
                    className="btn btn-primary float-end"
                    href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                    Update completed
                </a>
                <h4 className="float-start me-2">Completed?</h4>
                <input className="form-check-input w-20" type="checkbox" id="wd-assignment-score"
                    defaultChecked={assignment.completed} onChange={(e) =>
                        setAssignment({ ...assignment, completed: e.target.checked })} />
                <hr />
                <h4>Retrieving Objects</h4>
                <a id="wd-retrieve-assignments" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/assignment`}>
                    Get Assignment
                </a><hr />
                <h4>Retrieving Properties</h4>
                <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                    Get Title
                </a><br /><br />
                <a id="wd-retrieve-assignment-score" className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/assignment/score`}>
                    Get Score
                </a><hr />
            </div>
            <div id="wd-working-with-modules">
                <h3>Working With Modules</h3>
                <h4>Modifying Properties</h4>
                <a id="wd-update-module-name"
                    className="btn btn-primary float-end"
                    href={`${MODULE_API_URL}/name/${module.name}`}>
                    Update Name
                </a>
                <input className="form-control w-75" id="wd-module-name"
                    defaultValue={module.name} onChange={(e) =>
                        setModule({ ...module, name: e.target.value })} />
                <hr />
                <h4>Retrieving Modules</h4>
                <a id="wd-retrieve-modules" className="btn btn-primary"
                    href={`${MODULE_API_URL}`}>
                    Get Modules
                </a>
                <hr />
                <h4>Retrieving Module Name</h4>
                <a id="wd-retrieve-module-name" className="btn btn-primary"
                    href={`${MODULE_API_URL}/name`}>
                    Get Module Name
                </a>

            </div>
        </div>

    );
}

