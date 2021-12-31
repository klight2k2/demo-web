import html from "../core.js";
import Header from "./header.js";
import todoList from "./todoList.js"
import Footer from "./footer.js"

import {connect} from "../store.js";

function App({todos}){
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length>0 && todoList({todos})}
            ${todos.length>0 && Footer()}
        </section>
    `
}

export default connect()(App);