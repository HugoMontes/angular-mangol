import { Component, OnInit } from '@angular/core';

import View from 'ol/View';
import { fromLonLat } from 'ol/proj.js';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { MangolConfig, MangolLayer } from 'mangol';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'angular-mangol';
  // Notice the MangolConfig type, this  is a helper interface to easily fill out the required and
  // optional parameters for your Mangol configuration.
  mangolConfig = {} as MangolConfig;

  ngOnInit() {
    this.mangolConfig = {
      map: {
        renderer: 'canvas',
        target: 'mangol-demo-controllers',
        view: new View({
          projection: 'EPSG:3857',
          // center: fromLonLat([19.3956393810065, 47.168464955013], 'EPSG:3857'),
          center: fromLonLat([-65.066962, -17.501319], 'EPSG:3857'),
          zoom: 6,
          enableRotation: true
        }),
        controllers: {
          zoom: {
            show: true
          },
          position: {
            show: true,
            precision: 2,
            dictionary: {
              copyCoordinates: 'Copy coordinates',
              textCopied: 'Copied',
              closeSnackbar: 'Close'
            }
          },
        }
      }
    } as MangolConfig;
  }
}
