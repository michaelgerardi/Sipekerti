export class User{
    public id!: number;
    public email!: string;
    public pass!: string;

    constructor(
        id: number, email: string, pass:string
    ){
        this.id = id;
        this.email = email;
        this.pass = pass;
    }
}