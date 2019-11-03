import React,{Component} from 'react';
import Chart from "react-apexcharts";
class ChartEx extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar",
            tools:{
                download: false,
                
            }
          },
          xaxis: {
            categories: ['โจทย์ยาก', 'โจทย์ง่าย', 'โจทย์ปานกลาง', 'ลำดับ', 'อนุกรม']
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49]
          }
        ]
      };
    }
  
    render() {
      return (
        <div className="app">
          <div className="row">
            <div id='radarChart' className="mixed-chart col-lg-6 col-sm-12">
              <Chart id='chartObj'
                options={this.state.options}
                series={this.state.series}
                type="radar"
                width='500'
              />
            </div>
            <div id='annuExamDetail' class='col-lg-5 col-sm-12'>
                <h1>การวิเคราะห์ผลอย่างละเอียด</h1>
                <lead>ทมีการวิเคราะห์ผลอย่างละเอียดทุกๆข้อเพื่อให้น้องๆ สามารถนำผลที่วิเคราะห์ได้นำไปใช้งานต่อได้ ทำให้น้องๆรู้จุดบอดและสามารถปรับแก้ไขได้ก่อนลงสนามจริง</lead>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default ChartEx;