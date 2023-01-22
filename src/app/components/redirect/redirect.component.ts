import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(`EL PARAM ID ES: ${ this.id }`);
    this.reduceService.getOriginalURL(this.id)
      .pipe(delay(2000))
      .subscribe( resp => {
        console.log(resp.ok)
        if(resp.ok) {
          this.redirectUrl(resp.originalUrl!);
        }
      })
  }

  redirectUrl(url: string) {
    console.log(url);
    window.location.href = url;
  }

}
