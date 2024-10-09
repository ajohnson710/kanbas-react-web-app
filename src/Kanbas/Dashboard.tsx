import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden text-decoration-none text-dark">
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width="100%" height={160} alt="Nothing" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btnPrimary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden text-decoration-none text-dark">
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/moodeng.jpg" width="100%" height={160} alt="Nothing" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1110
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Moo Deng Rhetorical Analysis
                                    </p>
                                    <button className="btn btnPrimary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden text-decoration-none text-dark">
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/handshake.jpg" width="100%" height={160} alt="Nothing" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1200
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CO-OP Introduction
                                    </p>
                                    <button className="btn btnPrimary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden text-decoration-none text-dark">
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/pottery.jpg" width="100%" height={160} alt="Nothing" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2430
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Pottery 101
                                    </p>
                                    <button className="btn btnPrimary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden text-decoration-none text-dark">
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/juggling.jpg" width="100%" height={160} alt="Nothing" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4200
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Juggling In The Technical Profession
                                    </p>
                                    <button className="btn btnPrimary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden text-decoration-none text-dark">
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/bird.jpg" width="100%" height={160} alt="Nothing" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS3340
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Bird Migration Pattern Analysis
                                    </p>
                                    <button className="btn btnPrimary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden text-decoration-none text-dark">
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/vroom.jpg" width="100%" height={160} alt="Nothing" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4490
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        F1 Driver Case Study
                                    </p>
                                    <button className="btn btnPrimary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

