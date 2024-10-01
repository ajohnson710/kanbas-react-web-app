import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} alt="Nothing" />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1110/Home">
                        <img src="/images/moodeng.jpg" width={200} alt="Nothing" />
                        <div>
                            <h5>
                                CS1110
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Moo Deng Rhetorical Analysis
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1200/Home">
                        <img src="/images/handshake.jpg" width={200} alt="Nothing" />
                        <div>
                            <h5>
                                CS1200
                            </h5>
                            <p className="wd-dashboard-course-title">
                                CO-OP Introduction
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/2430/Home">
                        <img src="/images/pottery.jpg" width={200} alt="Nothing" />
                        <div>
                            <h5>
                                CS2430
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Pottery 101
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/4200/Home">
                        <img src="/images/juggling.jpg" width={200} alt="Nothing" />
                        <div>
                            <h5>
                                CS4200
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Juggling In The Technical Profession
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/3340/Home">
                        <img src="/images/bird.jpg" width={200} alt="Nothing" />
                        <div>
                            <h5>
                                CS3340
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Bird Migration Pattern Analysis
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/4990/Home">
                        <img src="/images/vroom.jpg" width={200} alt="Nothing" />
                        <div>
                            <h5>
                                CS4990
                            </h5>
                            <p className="wd-dashboard-course-title">
                                F1 Driver Case Study
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

