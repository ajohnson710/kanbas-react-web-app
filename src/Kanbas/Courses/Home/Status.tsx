import { FaCheckCircle, FaBan, FaHome } from "react-icons/fa";
import { CgImport } from "react-icons/cg"
import { LiaFileImportSolid } from "react-icons/lia";
import { SiGoogleanalytics } from "react-icons/si";
import { BiSolidMegaphone } from "react-icons/bi"
import { FaBell } from "react-icons/fa6";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "300px" }}>
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <button id="wd-unpublish-button" className="btn btn-lg btn-secondary  mt-1 w-100 text-nowrap">
                        <FaBan className="me-2" />
                        Unpublish</button>
                </div>
                <div className="w-50 pe-1">
                    <button id="wd-publish-button" className="btn btn-lg btn-secondary publish-btn text-white mt-1 w-100 text-nowrap">
                        <FaCheckCircle className="me-2 " />
                        Publish</button>
                </div>
            </div>
            <br></br>
            <button id="wd-import-button" className="btn btn-lg btn-secondary mt-1 w-100 text-start">
                <CgImport className="me-2" />
                Import Existing Content
            </button>
            <br></br>
            <button id="wd-import-button" className="btn btn-lg btn-secondary  mt-1 w-100 text-start" >
                <LiaFileImportSolid className="me-2" />
                Import From Commons</button>
            <br></br>
            <button id="wd-homepage-button" className="btn btn-lg btn-secondary mt-1 w-100 text-start" >
                <FaHome className="me-2" />
                Choose Home Page</button>
            <br></br>
            <button id="wd-announcement-button" className="btn btn-lg btn-secondary mt-1 w-100 text-start" >
                <SiGoogleanalytics className="me-2" />View Course Stream</button>
            <br></br>
            <button id="wd-announcement-button" className="btn btn-lg btn-secondary  mt-1 w-100 text-start" >
                <BiSolidMegaphone className="me-2" />New Announcement</button>
            <br></br>
            <button id="wd-analytics-button" className="btn btn-lg btn-secondary mt-1 w-100 text-start" >
                <SiGoogleanalytics className="me-2" />New Analytics</button>
            <br></br>
            <button id="wd-analytics-button" className="btn btn-lg btn-secondary mt-1 w-100 text-start" >
                <FaBell className="me-2" />View Course Notifications</button>
        </div>
    );
}

