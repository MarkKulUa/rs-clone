import "./style.css";
import {IMain} from "../../interfaces";
import {IState} from "../../interfaces";

class Main {
    protected props: IMain & IState;
    constructor(props: IMain & IState) {
        this.props = props;
    }

    async render() {
        const main = document.createElement("main");

        if (this.props.section === "route1") {
            // const module = new Module1(this.props);
            // main.appendChild(module.render());
        } else {
            // const module = new Module2(this.props);
            // main.appendChild(module.render());
        }

        return main;
    }
}

export default Main;
