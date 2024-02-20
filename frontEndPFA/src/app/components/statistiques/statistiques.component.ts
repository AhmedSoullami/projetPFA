import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { TapisService } from 'src/app/services/tapis.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit{
  numberOfUsers!:any;
  numberOfProducts!: any ;
  tapisTypeCounts!: any[];
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  myChart: any;

  constructor(private clientService:ClientService,private tapisService:TapisService){

  }
  ngOnInit(): void {
    this.loadUserCount()
    this.loadTapisCount()
    this.loadTapisTypeCounts();
  }
  ngAfterViewInit() {
    this.renderChart();
  }
  loadTapisTypeCounts(){
    this.tapisService.getTapisTypeCounts().subscribe(
      data => {
        this.tapisTypeCounts = Object.entries(data).map(([type, count]) => ({ type, count }));
        this.renderChart();
      },
      error => {
        console.error('Error loading tapis type counts:', error);
      }
    );
  }
  renderChart() {
    if (this.myChart) {
      this.myChart.destroy();
    }
  
    const canvas: HTMLCanvasElement | null = this.chartCanvas.nativeElement;
    if (!canvas) {
      console.error('Canvas not found.');
      return;
    }
  
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found.');
      return;
    }
  
    const labels = this.tapisTypeCounts.map(entry => entry.type);
    const data = this.tapisTypeCounts.map(entry => entry.count);
  
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Number of Tapis per Type',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          barPercentage: 0.3 // Adjust the bar width as needed
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  
  
  loadUserCount() {
    this.clientService.clients().subscribe(
      (data: any) => {
        this.numberOfUsers = data.length;
      },
      error => {
        console.error('Error loading user count:', error);
      }
    );
  }
  loadTapisCount() {
    this.tapisService.getAlltapis().subscribe(
      (data: any) => {
        this.numberOfProducts = data.length;
      },
      error => {
        console.error('Error loading user count:', error);
      }
    );
  }
  
}
