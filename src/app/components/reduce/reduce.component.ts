import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ReduceService } from '../../services/reduce.service';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.css']
})
export class ReduceComponent implements OnInit {

  originalUrl: string = '';

  constructor(private reduceService: ReduceService) { }

  ngOnInit(): void {
  }

  reduceUrl() {
    if(!this.originalUrl) {
      Swal.fire({
        title: 'Ingrese una URL',
        icon: 'info'
      })
    }
    console.log(`La URL ha reducir es: ${ this.originalUrl }`);
    //here make the reduce for the url with the reduce service...
  }

}
