import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <label className="border border-light rounded-3 p-1 " id="wd-assignments-title">
                40% of Total
            </label>
            <BsPlus className="fs-2 ms-0" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}

