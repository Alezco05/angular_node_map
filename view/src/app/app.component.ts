import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'view';
  mapa: Mapboxgl.Map;
  ngOnInit(){
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
    container: 'mapa', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.810913,10.985246], // LNG, LAT
    zoom: 14 // starting zoom
    });
     
    // Add zoom and rotation controls to the map.
    this.mapa.addControl(new Mapboxgl.NavigationControl());
    this.crearMarcador(-74.810913,10.985246);
  
  }
  crearMarcador(lng:number, lat:number){
    const marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
      marker.on('dragend', () => console.log(marker.getLngLat()));
  }
 
}
