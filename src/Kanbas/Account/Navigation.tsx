import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    return (
        currentUser ? (
            <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
                <Link className="list-group-item text-danger border border-0" to={`/Kanbas/Account/Profile`} > Profile </Link> <br />
            </div>
        ) : (
            <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
                <Link className="list-group-item list-group-item-action active border border-0" to={`/Kanbas/Account/Signin`}  > Signin  </Link> <br />
                <Link className="list-group-item list-group-item-action border border-0" to={`/Kanbas/Account/Signup`}  > Signup  </Link> <br />
            </div>
        )
    );
}

