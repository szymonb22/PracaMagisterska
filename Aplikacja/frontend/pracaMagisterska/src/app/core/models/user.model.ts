export class User {
    id?: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    password2?: string;
    token?: string;
    refreshToken?:string;
}
