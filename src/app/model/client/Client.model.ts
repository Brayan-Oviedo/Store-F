
export class Client {

    name?: string;
	identification?: string;
	phoneNumber?: number;

    constructor(name?: string, identification?: string, phoneNumber?: number) {
        this.name = name;
        this.identification = identification;
        this.phoneNumber = phoneNumber;
    }

}