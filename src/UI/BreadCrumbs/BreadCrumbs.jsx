import { Link, useMatches } from "react-router-dom";

export const BreadCrumbs = () => {
    const matches = useMatches();

    const breadcrumbs = matches
        .filter((match) => match.handle?.breadcrumb)
        .map((match) => ({
            path: match.pathname,
            breadcrumb: match.handle.breadcrumb,
        }));

    if (breadcrumbs.length === 1 && breadcrumbs[0].path === "/") {
        return null;
    }

    return (
        <nav aria-label="breadcrumbs">
            <ul className="breadcrumbs">
                {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.path}>
                        <Link to={crumb.path}>
                            {crumb.breadcrumb}
                        </Link>
                        {index < breadcrumbs.length - 1 && " / "}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

