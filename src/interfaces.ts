//Стейт как пропсы всего приложения
export interface IState {
    perPage?: number;
    sortBy?: string;
    page?: number;
    section?: string;
    handleSection?: (target: HTMLButtonElement) => void;
}

export interface IMain {
    render?: () => void,
    handleSection?: (target: HTMLButtonElement) => void;
}
