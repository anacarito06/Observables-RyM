import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RymService } from '../../services/rym.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
selector: 'app-lista',
standalone: true,
imports: [MaterialModule],
templateUrl: './lista.component.html',
styleUrl: './lista.component.scss',
providers: [RymService]
})
export class ListaComponent implements OnInit{

listaPersonaje: any[] = [];
personje: any;

constructor(private rymService: RymService,
    public dialog: MatDialog

){}

ngOnInit(): void {
this.rymService.getCharacters().subscribe( (data: any) => 
{
this.listaPersonaje = data['results'];
console.log(data);
})
}

openDialog(character: any) {
    this.dialog.open(DialogComponent,{
        data: character
    });

}
}
