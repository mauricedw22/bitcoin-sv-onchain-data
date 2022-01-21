import { Component, OnInit } from '@angular/core';
import { ChartsApiService } from './services/charts-api.service';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

    title = 'bsvdashboard';

    basicData: any;
    basicData1: any;
    basicData2: any;
    basicData3: any;
    basicData4: any;
    basicData5: any;


    multiAxisData: any;

    multiAxisOptions: any;

    lineStylesData: any;

    basicOptions: any;

    data: any;
    blockdata: any;

    result: any;
    result1: any;

    // block_array: Array<any> = [];

    constructor(private chartsApiService: ChartsApiService) {}
    ngOnInit() {

      // let block_array: Array<any> = [];
      let totalFees_array: Array<any> = [];
      let size_array: Array<any> = [];
      let txcount_array: Array<any> = [];
      let time_array: Array<any> = [];
      let height_array: Array<any> = [];

      let txn_data: Object = {};

      async function prepare_array() {
        // let arr1 = [];

        const response = await fetch('https://api.whatsonchain.com/v1/bsv/main/chain/info');
        const body = await response.text();
        const info = JSON.parse(body);
        console.log(info.blocks)

        for(let i=info.blocks-100;i<info.blocks;i++){
          const block_response = await fetch('https://api.whatsonchain.com/v1/bsv/main/block/height/' + String(i));
          const resbody = await block_response.text();
          const resp = JSON.parse(resbody);

          let obj = {"height": resp.height, "size": resp.size, "time": resp.time, "totalFees": resp.totalFees, "txcount": resp.txcount}

          // console.log(resp);
          // block_array.push(obj);
          totalFees_array.push(obj.totalFees)
          size_array.push(obj.size)
          txcount_array.push(obj.txcount)
          time_array.push(obj.time)
          height_array.push(obj.height)

          // this.basicData1.labels = height_array;

        }

        console.log(height_array);
        console.log(totalFees_array);
        // return block_array;
      };

      prepare_array();

      this.chartsApiService.getChainData().subscribe((res)=>{
        this.result = JSON.stringify(res);
        this.data = JSON.parse(this.result);
        console.log(this.data);

        const blocks: Array<Number> = [];
        for(let i=this.data.blocks-100; i<this.data.blocks; i++){
            blocks.push(this.data[i].blocks);
        }

        this.chartsApiService.getBlockData(blocks[0]).subscribe((res)=>{
            this.result1 = JSON.stringify(res);
            this.blockdata = JSON.parse(this.result1);
            console.log(this.blockdata)
          }, (error) => {
            console.log("An error accessing Charts-Api Service");
          })

      }, (error) => {
        console.log("An error accessing Charts-Api Service");
      })

    // this.chartsApiService.getBlockData(this.data.blocks).subscribe((res)=>{
    //   this.result1 = JSON.stringify(res);
    //   this.blockdata = JSON.parse(this.result1);
    //   console.log(this.blockdata)
    // }, (error) => {
    //   console.log("An error accessing Charts-Api Service");
    // })

      this.basicData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: '#42A5F5',
                  tension: .4
              },
              // {
              //     label: 'Second Dataset',
              //     data: [28, 48, 40, 19, 86, 27, 90],
              //     fill: false,
              //     borderColor: '#FFA726',
              //     tension: .4
              // }
          ]
      };

    this.basicData1 = {
        labels: height_array, // ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Txn Fees Per Block',
                data: totalFees_array,
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            },
        ]
    };      

    this.basicData2 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Block Height',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
      ]
    };

    this.basicData3 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Block Height',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
      ]
    };

    this.basicData4 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Block Height',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
      ]
    };

    this.basicData5 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Block Height',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
      ]
    };

      this.multiAxisData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Dataset 1',
              fill: false,
              borderColor: '#42A5F5',
              yAxisID: 'y',
              tension: .4,
              data: [65, 59, 80, 81, 56, 55, 10]
          }, {
              label: 'Dataset 2',
              fill: false,
              borderColor: '#00bb7e',
              yAxisID: 'y1',
              tension: .4,
              data: [28, 48, 40, 19, 86, 27, 90]
          }]
      };

      this.multiAxisOptions = {
          stacked: false,
          plugins: {
              legend: {
                  labels: {
                      color: '#495057'
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              },
              y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              },
              y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      drawOnChartArea: false,
                      color: '#ebedef'
                  }
              }
          }
      };

      this.lineStylesData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  tension: .4,
                  borderColor: '#42A5F5'
              },
              {
                  label: 'Second Dataset',
                  data: [28, 48, 40, 19, 86, 27, 90],
                  fill: false,
                  borderDash: [5, 5],
                  tension: .4,
                  borderColor: '#66BB6A'
              },
              {
                  label: 'Third Dataset',
                  data: [12, 51, 62, 33, 21, 62, 45],
                  fill: true,
                  borderColor: '#FFA726',
                  tension: .4,
                  backgroundColor: 'rgba(255,167,38,0.2)'
              }
          ]
      };

      // this.config = this.configService.config;
      // this.updateChartOptions();
      // this.subscription = this.configService.configUpdate$.subscribe(config => {
      //     this.config = config;
      //     this.updateChartOptions();
      // });
  }

  updateChartOptions() {
      if (false) // (this.config.dark)
          this.applyDarkTheme();
      else
          this.applyLightTheme();
  }

  applyLightTheme() {
      this.basicOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: '#495057'
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              },
              y: {
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              }
          }
      };

      this.multiAxisOptions = {
          stacked: false,
          plugins: {
              legend: {
                  labels: {
                      color: '#495057'
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              },
              y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              },
              y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      drawOnChartArea: false,
                      color: '#ebedef'
                  }
              }
          }
      };
  }

  applyDarkTheme() {
      this.basicOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: '#ebedef'
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: '#ebedef'
                  },
                  grid: {
                      color: 'rgba(255,255,255,0.2)'
                  }
              },
              y: {
                  ticks: {
                      color: '#ebedef'
                  },
                  grid: {
                      color: 'rgba(255,255,255,0.2)'
                  }
              }
          }
      };

      this.multiAxisOptions = {
          stacked: false,
          plugins: {
              legend: {
                  labels: {
                      color: '#ebedef'
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: '#ebedef'
                  },
                  grid: {
                      color: 'rgba(255,255,255,0.2)'
                  }
              },
              y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  ticks: {
                      color: '#ebedef'
                  },
                  grid: {
                      color: 'rgba(255,255,255,0.2)'
                  }
              },
              y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  ticks: {
                      color: '#ebedef'
                  },
                  grid: {
                      drawOnChartArea: false,
                      color: 'rgba(255,255,255,0.2)'
                  }
              }
          }
      };
  }

}
