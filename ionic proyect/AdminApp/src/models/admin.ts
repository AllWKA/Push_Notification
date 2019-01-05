export class Admin {
    id: number;
    user: string;
    pwd: string;
    createdAt: Date;
    updatedAt: Date;
    apps: number[];
    constructor(values: Object = {}) {
         Object.assign(this, values);
    }
}