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
  baseUrl: string = 'http://localhost:4200/';
  shortUrl: string = '';

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
    this.reduceService.generateShortUrl(this.originalUrl)
      .subscribe( resp => {
        if(resp.ok) {
          this.shortUrl = `${this.baseUrl}${resp.originalUrl}`;
        } else {
          Swal.fire({
            title: 'An unexpected error occurred, wait a moment and try again',
            icon: 'error'
          })
        }
      });
  }

}
