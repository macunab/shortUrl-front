import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReduceService } from 'src/app/services/reduce.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  id: string = '';

  constructor(private reduceService: ReduceService,
      private router: Router,
      private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.reduceService.getOriginalURL(this.id)
      .pipe(delay(1000))
      .subscribe( resp => {
        if(resp.ok) {
          this.redirectUrl(resp.originalUrl!);
        } else {
          console.info('The url dont exist in db');
          this.router.navigateByUrl('home');
        }
      })
  }

  redirectUrl(url: string) {
    console.log(url);
    window.location.href = url;
  }

}
