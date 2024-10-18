export default function BootstrapNavigation() {
    return (
        <div>
            <div id="wd-css-navigating-with-tabs">
                <h2>Tabs</h2>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#/" >Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#/">Disabled</a>
                    </li>
                </ul>
            </div>
            <div id="wd-css-navigating-with-cards">
                <h2>
                    Cards
                </h2>
                <div className="card"
                    style={{ width: "18rem" }}>
                    <img src="images/moodeng.jpg"
                        className="card-img-top"
                        alt="nada" />
                    <div className="card-body">
                        <h5 className="card-title">
                            Moodeng the Hippo
                        </h5>
                        <p className="card-text">
                            Multinational sensation by day, destroyer of worlds by night.
                        </p>
                        <a href="#/" className="btn btn-primary">
                            Boldly Go
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}