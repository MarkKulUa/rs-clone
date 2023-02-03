import Header from "./header/index";
import Main from "./main/index";

import fetchData from "../helpers/fetchData";
import generateRandomCar from "../helpers/helpers";
import {IState} from "../interfaces";
import {RestApiTypes} from "../enums";


class App {

    protected state: IState;

    constructor() {
        this.state = {
            section: "section1",
            page: 1,
            perPage: 4,
            sortBy: "id",
        };

    }

    async initState() {
        const { page, perPage } = this.state;

    }

    handleSection(target: HTMLButtonElement) {
        if (target.dataset.page === "section1") {
            this.setState({ ...this.state, section: "section1", page: 1 });
        } else {
            this.setState({
                ...this.state,
                section: "section2",
                page: 1,
            });
        }
        this.updateRootElement();
    }

    handleNextPage() {
        this.setState({
            ...this.state,
            page: this.state.page + 1,
        });
        this.updateRootElement();
    }

    handlePrevPage() {
        this.setState({
            ...this.state,
            page: this.state.page - 1,
        });
        this.updateRootElement();
    }


    async render() {
        await this.initState();
        // const header = new Header({
        //     section: this.state.section,
        //     handleSection: this.handleSection,
        // });
        //
        // const main = new Main({
        //     ...this.state,
        // });

        const appHtml = new DocumentFragment();

        // appHtml.appendChild(header.render());
        // appHtml.appendChild(await main.render());

        return appHtml;
    }

    setState(state:IState) {
        this.state = state;
    }

    async updateRootElement() {
        const root = document.getElementById("app") as Element;
        root.innerHTML = '';
        return root.appendChild(await this.render());
    }
}

export default App;