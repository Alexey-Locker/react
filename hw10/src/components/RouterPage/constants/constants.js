import { Redirect } from "react-router";
import FormsRoute from "../../Forms/FormsRoute";
import Todos from "../../Todos/Todos";

export const ROUTS = [{
    link: "/forms",
    component: <FormsRoute />
},
{
    link: "/todos",
    component: <Todos />
},
{
    link: "*",
    component: <Redirect to="/todos" />
}
]
