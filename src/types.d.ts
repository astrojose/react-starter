export interface IUser {
    firstName: string;
    surname: string;
    email: string;
    roles: IRole[];
}

export interface IRole {
    name: string;
    description: string;
    permissions: IPermission[];
}

export interface IPermission {
    id: number;
    name: string;
    displayName: string;
    description: string;
}

export type TQueryOptions = {
    onSuccess?: (data: any, reqObj?: any) => void;
    onError?: (error: any, variable?: any, context?: any) => void;
    enabled?: boolean;
};
