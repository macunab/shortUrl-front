import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReduceService } from 'src/app/services/reduce.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private reduceService: ReduceService, private router: Router) { }

  ngOnInit(): void {
    this.reduceService.getOriginalURL('')
      .subscribe( resp => {
        console.log(resp.ok)
        if(resp.ok) {
          this.redirectUrl(resp.originalUrl!);
        }
      })
  }

  redirectUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
