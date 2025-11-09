import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-api-view',
  templateUrl: './api-view.page.html',
  styleUrls: ['./api-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule, RouterLink]
})
export class ApiViewPage implements OnInit {
  type: string = '';
  data: any = {
    jokes: [],
    cats: [],
    dogs: [],
    joke: '',
    cat: '',
    dog: ''
  };
  loading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('id') || '';
    this.loadApiData();
  }

  async loadApiData() {
    this.loading = true;

    try {
      if (this.type === 'joke') {
        const promises = Array(10).fill(null).map(() => 
          this.http.get('https://v2.jokeapi.dev/joke/Any?lang=es&type=single').toPromise()
        );
        const results: any[] = await Promise.all(promises);
        this.data.jokes = results.map(r => r.joke);

      } else if (this.type === 'cat') {
        const res: any = await this.http.get('https://api.thecatapi.com/v1/images/search?limit=10').toPromise();
        this.data.cats = res.map((cat: any) => cat.url);

      } else if (this.type === 'dog') {
        const promises = Array(10).fill(null).map(() => 
          this.http.get('https://dog.ceo/api/breeds/image/random').toPromise()
        );
        const results: any[] = await Promise.all(promises);
        this.data.dogs = results.map(r => r.message);

      } else if (this.type === 'mix') {
        const [joke, cat, dog] = await Promise.all([
          this.http.get('https://v2.jokeapi.dev/joke/Any?lang=es&type=single').toPromise(),
          this.http.get('https://api.thecatapi.com/v1/images/search').toPromise(),
          this.http.get('https://dog.ceo/api/breeds/image/random').toPromise()
        ]);
        this.data.joke = (joke as any).joke;
        this.data.cat = (cat as any)[0].url;
        this.data.dog = (dog as any).message;
      }
    } catch (err) {
      console.error('Error al cargar APIs:', err);
      this.data = { jokes: ['Error al obtener datos 😢'] };
    }

    this.loading = false;
  }
  
}