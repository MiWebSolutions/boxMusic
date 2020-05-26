export interface Roles {
    admin?: boolean;
    publisher?: boolean;
}

export interface UserInterface {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    cellPhone?: string;
    roles: Roles;

}