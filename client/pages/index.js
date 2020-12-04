import { withRouter } from "next/router";
import routerQueryFix from "../src/routerQueryFix";
import HomePage from "../src/pages/Home";

export default withRouter(routerQueryFix(HomePage));
