export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name" ><strong>Assignment Name</strong></label>
            <br></br>
            <br></br>
            <input id="wd-name" className="form-control mb-2" value="A1" /><br /><br />
            <textarea id="wd-description" className="form-control mb-2" rows={10} cols={40}>
                The assignment is available online Submit a link to the landing page of your web applicattion running on Netlify. The landing page should include the following: Your full name and the section Links to each of the lab assignments Link to
                the kanbas application Links to all relevant source code repositiories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <div>
                <div className="row">
                    <div className="col-4 ">
                        <label htmlFor="wd-points" className="float-end ">Points</label>
                    </div>
                    <div className="col-8">
                        <input id="wd-points" className="form-control mb-2" value={100} />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-4 ">
                        <label htmlFor="wd-group" className="float-end">Assignment Group</label>
                    </div>
                    <div className="col-8">
                        <select id="wd-group" className="form-control mb-2">
                            <option>ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-4 ">
                        <label htmlFor="wd-display-grade-as" className="float-end">Display Grade As</label>
                    </div>
                    <div className="col-8">
                        <select id="wd-display-grade-as" className="form-select mb-2">
                            <option>PERCENTAGE</option>
                            <option>DECIMAL</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-4 ">
                        <label htmlFor="wd-submission-type" className="float-end">Submission Type</label>
                    </div>
                    <div className="col-7 border rounded p-3">
                        <select id="wd-submission-type" className="form-select mb-2">
                            <option>Online</option>
                            <option>In-Person</option>
                        </select>
                        <div>
                            <h5><b>Online Entry Options</b></h5>
                            <input type="checkbox" name="check-genre" className="me-1" id="wd-text-entry" />
                            <label htmlFor="wd-entry">Text Entry</label><br />
                            <input type="checkbox" name="check-genre" className="me-1" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label><br />
                            <input type="checkbox" name="check-genre" className="me-1" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                            <input type="checkbox" name="check-genre" className="me-1" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                            <input type="checkbox" name="check-genre" className="me-1" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label><br />
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-4 ">
                        <label htmlFor="wd-assign-to" className="float-end">Assign</label>
                    </div>
                    <div className="col-7 border rounded p-3">
                        <label htmlFor="wd-assign-to"> Assign To</label>  <br />
                        <textarea id="wd-assign-to" className="form-control mb-2">Everyone</textarea> <br /> <br />
                        <label htmlFor="wd-due-date"> Due Date </label> <br />
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" className="form-control mb-2" /><br /><br />
                        <label htmlFor="wd-available-from"> Available From</label> <br />
                        <input type="date"
                            id="wd-available-from"
                            value="2024-05-06" className="form-control mb-2" /><br />

                        <label htmlFor="wd-available-until"> Available To</label> <br />
                        <input type="date"
                            id="wd-available-until"
                            value="2024-05-20" className="form-control mb-2" /><br />
                    </div>
                </div>
                <hr />
                <div className="float-end ">
                    <button className="btn btn-sm btn-secondary me-2 mt-1  ">Cancel</button>
                    <button className="btn btn-sm signout-btn text-white me-2 mt-1 ">Save</button>
                </div>
            </div>











        </div >
    );
}

