export interface IUser{
    email: string;
    id: number;
    name: string;
    phone: string;
    username:string;
    website:string;
}

export interface ITodos{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}