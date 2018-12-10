export class Admin {
    id: number;
    user: string;
    pwd: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(values: Object = {}) {
         Object.assign(this, values);
    }
}