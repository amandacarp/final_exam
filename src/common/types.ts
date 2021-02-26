export interface IBook {
    map: any;
    id?: number,
    categoryid?: ICategory['id'],
    title?: string,
    author?: string,
    price?: number,
    _created?: Date,
    name?: ICategory['name']
}

export interface ICategory {
    id?: number,
    name?: string
}

export interface IUser {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    role?: string,
    _create?: Date
}

export interface MySQLResponse {
	fieldCount?: number;
	affectedRows?: number;
	insertId?: number;
	serverStatus?: number;
	warningCount?: number;
	message?: string;
	protocol41?: boolean;
	changedRows?: number;
}

export interface IPayload {
    userid?: number,
    email?: string
}