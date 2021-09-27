import Swal from "sweetalert2";

export abstract class Message {

    static throwMessageSuccess(title: string, text: string): void {
        Swal.fire({
            title: title,
            text: text,
            icon: 'success',
            timer: 1500,
            timerProgressBar: false,
            position: 'bottom' ,
            showConfirmButton: false
        });
    }


    static throwMessageError(tittle: string, text: string): void {
        Swal.fire({
            title: tittle,
            text: text,
            icon: 'error',
            position: 'center',
            confirmButtonColor: '#ff00ff80'
        });
    }
}