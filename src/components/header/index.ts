import template from "./template";
import "./style.css";
import {IState} from "../../interfaces";
import {IMain} from "../../interfaces";

class Header {
    protected props: IState;
    constructor(props: IState) {
        this.props = props;
    }

    render() {
        const header = document.createElement("header");
        header.innerHTML = template(this.props.section);

        return header;
    }
}

export default Header;
