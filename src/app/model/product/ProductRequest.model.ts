
export class ProductRequest {

    reference?: string;
    description?: string;
    units?: number;

    constructor(reference?: string, units?: number) {
        this.reference =  reference;
        this.units = units;
    }

}