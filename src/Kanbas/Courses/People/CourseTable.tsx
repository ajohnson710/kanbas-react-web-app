import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as client from "../client";

export default function CoursesTable({ users = [] }: { users?: any[] }) {
    const [people, setPeople] = useState([]);
    const { cid } = useParams<{ cid: string }>();

    const fetchPeople = async () => {
        const enrolled_people = await client.findUsersForCourse(cid as string);
        console.log(enrolled_people);
        const filtered_people = enrolled_people.filter((user: any) => user != null && user._id !== null);
        console.log(filtered_people);
        setPeople(filtered_people);
    };

    useEffect(() => {
        fetchPeople();
        // eslint-disable-next-line
    }, []);

    return (
        <div id="wd-people-table">
            <PeopleDetails />
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    {people.map((user: any) => (
                        <tr key={user._id}>
                            <td className="wd-full-name text-nowrap">
                                <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">

                                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                                    <span className="wd-first-name">{user.firstName}</span>{" "}
                                    <span className="wd-last-name">{user.lastName}</span>
                                </Link>
                            </td>
                            <td className="wd-login-id">{user.loginId}</td>
                            <td className="wd-section">{user.section}</td>
                            <td className="wd-role">{user.role}</td>
                            <td className="wd-last-activity">{user.lastActivity}</td>
                            <td className="wd-total-activity">{user.totalActivity}</td> </tr>
                    ))}
                </tbody>
            </table>
        </div>);
}

