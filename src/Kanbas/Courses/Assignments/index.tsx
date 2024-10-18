import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io"
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdAssignment } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div className="float-end">
                <button id="wd-add-group" className="btn btn-secondary me-2">
                    <FaPlus className="p-0 mb-1 fs-9" />
                    Group</button>
                <button id="wd-add-assignment" className="btn btn-danger">
                    <FaPlus className="p-0 mb-1 fs-9" />
                    Assignment</button>
            </div>
            <div className="float-start d-flex" style={{ width: "300px" }}>
                <FaMagnifyingGlass className="p-0 mb-2 fs-5 mt-2 me-1 border-gray" />
                <div className="input-group mb-3 w-250" >
                    <input id="wd-search-assignment" className="form-control"
                        placeholder="search" />
                </div>
            </div>

            <br /><br /><br />

            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <IoMdArrowDropdown />
                        Assignments
                        <AssignmentControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div>
                                <BsGripVertical className="float-start mt-4 me-2 fs-2" />
                                <MdAssignment className="float-start mt-4 me-3 fs-2" />
                                <ul className="float-start list-unstyled fs-5">
                                    <li><h4><b> <a className="wd-assignment-link"
                                        href="#/Kanbas/Courses/1234/Assignments/123">
                                        A1 - ENV + HTML
                                    </a></b></h4></li>
                                    <li><span className="text-danger">Mutiple Modules</span> | <b>Not available until</b> May 6 at 12:00am</li>
                                    <li><b>Due</b> May 13 at 11:59pm | 100pts</li>
                                </ul>
                                <div className="float-end mt-4" >
                                    <GreenCheckmark />
                                    <IoEllipsisVertical className="fs-4" />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div>
                                <BsGripVertical className="float-start mt-4 me-2 fs-2" />
                                <MdAssignment className="float-start mt-4 me-3 fs-2" />
                                <ul className="float-start list-unstyled fs-5">
                                    <li><h4><b><a className="wd-assignment-link"
                                        href="#/Kanbas/Courses/1234/Assignments/123">
                                        A2 - CSS + BOOTSTRAP
                                    </a></b></h4></li>
                                    <li><span className="text-danger">Mutiple Modules</span> | <b>Not available until</b> May 6 at 12:00am</li>
                                    <li><b>Due</b> May 13 at 11:59pm | 100pts</li>
                                </ul>
                                <div className="float-end mt-4" >
                                    <GreenCheckmark />
                                    <IoEllipsisVertical className="fs-4" />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div>
                                <BsGripVertical className="float-start mt-4 me-2 fs-2" />
                                <MdAssignment className="float-start mt-4 me-3 fs-2" />
                                <ul className="float-start list-unstyled fs-5">
                                    <li><h4><b><a className="wd-assignment-link"
                                        href="#/Kanbas/Courses/1234/Assignments/123">
                                        A3 - JAVASCRIPT + REACT
                                    </a></b></h4></li>
                                    <li><span className="text-danger">Mutiple Modules</span> | <b>Not available until</b> May 6 at 12:00am</li>
                                    <li><b>Due</b> May 13 at 11:59pm | 100pts</li>
                                </ul>
                                <div className="float-end mt-4" >
                                    <GreenCheckmark />
                                    <IoEllipsisVertical className="fs-4" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>





        </div >
    );
}

