import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    multOne: number = 10;
    multTwo: string = 'Teste';

    getServerStatus(){
        return (this.multOne * 2);
    }


}