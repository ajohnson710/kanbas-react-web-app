import { useLocation } from "react-router";

export default function TOC() {
    const { pathname } = useLocation();
    let labs = ["Lab1", "Lab2", "Lab3", "Lab4", "Lab5"];
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a id="wd-a" href="#/Labs" className="nav-link">
                    Labs
                </a>
            </li>
            {labs.map((lab) => (
                <li className="nav-item">
                    <a id="wd-a1" href={`#/Labs/${lab}`}
                        className={`nav-link ${pathname.includes(lab) ? "active" : ""}`}>
                        {lab}
                    </a>
                </li>
            ))}
            <li className="nav-item">
                <a id="wd-k" href="#/Kanbas" className="nav-link">
                    Kanbas
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-k" href="https://github.com/ajohnson710/kanbas-react-web-app" className="nav-link">
                    My GitHub
                </a>
            </li>
        </ul>

    );
}
