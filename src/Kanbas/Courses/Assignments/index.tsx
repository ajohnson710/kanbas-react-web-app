import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io"
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdAssignment } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import AssignmentEditor from "./Editor";

export default function Assignments() {
    const { cid } = useParams();

    const db_assignments = db.assignments;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);

    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div id="wd-assignments">
            {(currentUser.role === "FACULTY") && (
                <div className="float-end">
                    <button id="wd-add-group" className="btn btn-secondary me-2">
                        <FaPlus className="p-0 mb-1 fs-9" />
                        Group</button>
                    <button
                        id="wd-add-assignment"
                        className="btn btn-danger"
                        onClick={() => {
                            navigate(`/Kanbas/Courses/${cid}/Assignments/newAID`);
                        }}>

                        <FaPlus className="p-0 mb-1 fs-9" />
                        Assignment
                    </button>
                </div>
            )}
            <div className="float-start d-flex" style={{ width: "300px" }}>
                <FaMagnifyingGlass className="p-0 mb-2 fs-5 mt-2 me-1 border-gray" />
                <div className="input-group mb-3 w-250" >
                    <input id="wd-search-assignment" className="form-control"
                        placeholder="search" />
                </div>
            </div>

            <br /><br /><br />

            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="list-group-item p-0  fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <IoMdArrowDropdown />
                        Assignments
                        {(currentUser.role === "FACULTY") && (
                            <AssignmentControlButtons />
                        )}
                    </div>
                </li>
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any, index: any) => (
                        <li key={index} className="wd-lesson list-group-item p-3 ps-3">
                            <div>
                                <BsGripVertical className="float-start mt-4 me-2 fs-2" />
                                <MdAssignment className="float-start mt-4 me-3 fs-2" />
                                <ul className="float-start list-unstyled fs-5">
                                    {(currentUser.role === "FACULTY") && (
                                        <li><h4><b><a className="wd-assignment-link"
                                            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </a></b></h4></li>)}
                                    {(currentUser.role === "STUDENT") && (
                                        <li><h4>{assignment.title}</h4></li>)}
                                    <li><span className="text-danger"> Multiple Modules</span> | <b>Not available until</b> {assignment.availableDate}</li>
                                    <li><b>Due</b> {assignment.dueDate} | {assignment.points}pts</li>
                                </ul>
                                {(currentUser.role === "FACULTY") && (
                                    <div className="float-end mt-4" >
                                        <GreenCheckmark />
                                        <IoEllipsisVertical className="fs-4" />
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
            </ul>
        </div >
    );
}

