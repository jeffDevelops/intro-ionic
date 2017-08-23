import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Form } from '@angular/forms';

import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Character } from '../../providers/data-service/character';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	name: string;
	results: Character[];

	findCharacter() {
		this.dataService.findCharacter(this.name)
			.subscribe( response => {
				let body = response.json(); //parse this only once
				this.results = body.results;
		});
	}

  constructor(
  	public navCtrl: NavController,
  	private dataService: DataServiceProvider
  ) {}

}
