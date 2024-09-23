export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
            <br></br>
            <br></br>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" rows={10} cols={40}>
                The assignment is available online Submit a link to the landing page of your web applicattion running on Netlify. The landing page should include the following: Your full name and the section Links to each of the lab assignments Link to
                the kanbas application Links to all relevant source code repositiories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option>ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option>PERCENTAGE</option>
                            <option>DECIMAL</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option>Online</option>
                            <option>In-Person</option>
                        </select>
                        <h5>Online Entry Options</h5>
                        <input type="checkbox" name="check-genre" id="wd-text-entry" />
                        <label htmlFor="wd-entry">Text Entry</label><br />
                        <input type="checkbox" name="check-genre" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />
                        <input type="checkbox" name="check-genre" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                        <input type="checkbox" name="check-genre" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                        <input type="checkbox" name="check-genre" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to"> Assign To</label>  <br />
                        <textarea id="wd-assign-to">Everyone</textarea> <br /> <br />
                        <label htmlFor="wd-due-date"> Due Date </label> <br />
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" /><br /><br />
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="wd-available-from"> Available From</label> <br />
                                    <input type="date"
                                        id="wd-available-from"
                                        value="2024-05-06" /><br />
                                </td>
                                <td>
                                    <label htmlFor="wd-available-to"> Available To</label> <br />
                                    <input type="date"
                                        id="wd-available-to"
                                        value="2024-05-20" /><br />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr></hr>
            <table>
                <tr>
                    <td>
                    </td>
                    <td align="right" valign="top">
                        <button>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

