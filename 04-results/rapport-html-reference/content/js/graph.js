/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 307.0, "minX": 0.0, "maxY": 3961.0, "series": [{"data": [[0.0, 307.0], [0.1, 307.0], [0.2, 307.0], [0.3, 307.0], [0.4, 307.0], [0.5, 307.0], [0.6, 307.0], [0.7, 307.0], [0.8, 307.0], [0.9, 307.0], [1.0, 311.0], [1.1, 311.0], [1.2, 311.0], [1.3, 311.0], [1.4, 311.0], [1.5, 311.0], [1.6, 311.0], [1.7, 311.0], [1.8, 311.0], [1.9, 311.0], [2.0, 320.0], [2.1, 320.0], [2.2, 320.0], [2.3, 320.0], [2.4, 320.0], [2.5, 320.0], [2.6, 320.0], [2.7, 320.0], [2.8, 320.0], [2.9, 320.0], [3.0, 320.0], [3.1, 320.0], [3.2, 320.0], [3.3, 320.0], [3.4, 320.0], [3.5, 320.0], [3.6, 320.0], [3.7, 320.0], [3.8, 320.0], [3.9, 320.0], [4.0, 322.0], [4.1, 322.0], [4.2, 322.0], [4.3, 322.0], [4.4, 322.0], [4.5, 322.0], [4.6, 322.0], [4.7, 322.0], [4.8, 322.0], [4.9, 322.0], [5.0, 326.0], [5.1, 326.0], [5.2, 326.0], [5.3, 326.0], [5.4, 326.0], [5.5, 326.0], [5.6, 326.0], [5.7, 326.0], [5.8, 326.0], [5.9, 326.0], [6.0, 334.0], [6.1, 334.0], [6.2, 334.0], [6.3, 334.0], [6.4, 334.0], [6.5, 334.0], [6.6, 334.0], [6.7, 334.0], [6.8, 334.0], [6.9, 334.0], [7.0, 340.0], [7.1, 340.0], [7.2, 340.0], [7.3, 340.0], [7.4, 340.0], [7.5, 340.0], [7.6, 340.0], [7.7, 340.0], [7.8, 340.0], [7.9, 340.0], [8.0, 342.0], [8.1, 342.0], [8.2, 342.0], [8.3, 342.0], [8.4, 342.0], [8.5, 342.0], [8.6, 342.0], [8.7, 342.0], [8.8, 342.0], [8.9, 342.0], [9.0, 343.0], [9.1, 343.0], [9.2, 343.0], [9.3, 343.0], [9.4, 343.0], [9.5, 343.0], [9.6, 343.0], [9.7, 343.0], [9.8, 343.0], [9.9, 343.0], [10.0, 345.0], [10.1, 345.0], [10.2, 345.0], [10.3, 345.0], [10.4, 345.0], [10.5, 345.0], [10.6, 345.0], [10.7, 345.0], [10.8, 345.0], [10.9, 345.0], [11.0, 345.0], [11.1, 345.0], [11.2, 345.0], [11.3, 345.0], [11.4, 345.0], [11.5, 345.0], [11.6, 345.0], [11.7, 345.0], [11.8, 345.0], [11.9, 345.0], [12.0, 346.0], [12.1, 346.0], [12.2, 346.0], [12.3, 346.0], [12.4, 346.0], [12.5, 346.0], [12.6, 346.0], [12.7, 346.0], [12.8, 346.0], [12.9, 346.0], [13.0, 346.0], [13.1, 346.0], [13.2, 346.0], [13.3, 346.0], [13.4, 346.0], [13.5, 346.0], [13.6, 346.0], [13.7, 346.0], [13.8, 346.0], [13.9, 346.0], [14.0, 349.0], [14.1, 349.0], [14.2, 349.0], [14.3, 349.0], [14.4, 349.0], [14.5, 349.0], [14.6, 349.0], [14.7, 349.0], [14.8, 349.0], [14.9, 349.0], [15.0, 349.0], [15.1, 349.0], [15.2, 349.0], [15.3, 349.0], [15.4, 349.0], [15.5, 349.0], [15.6, 349.0], [15.7, 349.0], [15.8, 349.0], [15.9, 349.0], [16.0, 355.0], [16.1, 355.0], [16.2, 355.0], [16.3, 355.0], [16.4, 355.0], [16.5, 355.0], [16.6, 355.0], [16.7, 355.0], [16.8, 355.0], [16.9, 355.0], [17.0, 361.0], [17.1, 361.0], [17.2, 361.0], [17.3, 361.0], [17.4, 361.0], [17.5, 361.0], [17.6, 361.0], [17.7, 361.0], [17.8, 361.0], [17.9, 361.0], [18.0, 362.0], [18.1, 362.0], [18.2, 362.0], [18.3, 362.0], [18.4, 362.0], [18.5, 362.0], [18.6, 362.0], [18.7, 362.0], [18.8, 362.0], [18.9, 362.0], [19.0, 365.0], [19.1, 365.0], [19.2, 365.0], [19.3, 365.0], [19.4, 365.0], [19.5, 365.0], [19.6, 365.0], [19.7, 365.0], [19.8, 365.0], [19.9, 365.0], [20.0, 365.0], [20.1, 365.0], [20.2, 365.0], [20.3, 365.0], [20.4, 365.0], [20.5, 365.0], [20.6, 365.0], [20.7, 365.0], [20.8, 365.0], [20.9, 365.0], [21.0, 367.0], [21.1, 367.0], [21.2, 367.0], [21.3, 367.0], [21.4, 367.0], [21.5, 367.0], [21.6, 367.0], [21.7, 367.0], [21.8, 367.0], [21.9, 367.0], [22.0, 368.0], [22.1, 368.0], [22.2, 368.0], [22.3, 368.0], [22.4, 368.0], [22.5, 368.0], [22.6, 368.0], [22.7, 368.0], [22.8, 368.0], [22.9, 368.0], [23.0, 370.0], [23.1, 370.0], [23.2, 370.0], [23.3, 370.0], [23.4, 370.0], [23.5, 370.0], [23.6, 370.0], [23.7, 370.0], [23.8, 370.0], [23.9, 370.0], [24.0, 370.0], [24.1, 370.0], [24.2, 370.0], [24.3, 370.0], [24.4, 370.0], [24.5, 370.0], [24.6, 370.0], [24.7, 370.0], [24.8, 370.0], [24.9, 370.0], [25.0, 372.0], [25.1, 372.0], [25.2, 372.0], [25.3, 372.0], [25.4, 372.0], [25.5, 372.0], [25.6, 372.0], [25.7, 372.0], [25.8, 372.0], [25.9, 372.0], [26.0, 379.0], [26.1, 379.0], [26.2, 379.0], [26.3, 379.0], [26.4, 379.0], [26.5, 379.0], [26.6, 379.0], [26.7, 379.0], [26.8, 379.0], [26.9, 379.0], [27.0, 381.0], [27.1, 381.0], [27.2, 381.0], [27.3, 381.0], [27.4, 381.0], [27.5, 381.0], [27.6, 381.0], [27.7, 381.0], [27.8, 381.0], [27.9, 381.0], [28.0, 383.0], [28.1, 383.0], [28.2, 383.0], [28.3, 383.0], [28.4, 383.0], [28.5, 383.0], [28.6, 383.0], [28.7, 383.0], [28.8, 383.0], [28.9, 383.0], [29.0, 386.0], [29.1, 386.0], [29.2, 386.0], [29.3, 386.0], [29.4, 386.0], [29.5, 386.0], [29.6, 386.0], [29.7, 386.0], [29.8, 386.0], [29.9, 386.0], [30.0, 388.0], [30.1, 388.0], [30.2, 388.0], [30.3, 388.0], [30.4, 388.0], [30.5, 388.0], [30.6, 388.0], [30.7, 388.0], [30.8, 388.0], [30.9, 388.0], [31.0, 392.0], [31.1, 392.0], [31.2, 392.0], [31.3, 392.0], [31.4, 392.0], [31.5, 392.0], [31.6, 392.0], [31.7, 392.0], [31.8, 392.0], [31.9, 392.0], [32.0, 395.0], [32.1, 395.0], [32.2, 395.0], [32.3, 395.0], [32.4, 395.0], [32.5, 395.0], [32.6, 395.0], [32.7, 395.0], [32.8, 395.0], [32.9, 395.0], [33.0, 396.0], [33.1, 396.0], [33.2, 396.0], [33.3, 396.0], [33.4, 396.0], [33.5, 396.0], [33.6, 396.0], [33.7, 396.0], [33.8, 396.0], [33.9, 396.0], [34.0, 398.0], [34.1, 398.0], [34.2, 398.0], [34.3, 398.0], [34.4, 398.0], [34.5, 398.0], [34.6, 398.0], [34.7, 398.0], [34.8, 398.0], [34.9, 398.0], [35.0, 401.0], [35.1, 401.0], [35.2, 401.0], [35.3, 401.0], [35.4, 401.0], [35.5, 401.0], [35.6, 401.0], [35.7, 401.0], [35.8, 401.0], [35.9, 401.0], [36.0, 404.0], [36.1, 404.0], [36.2, 404.0], [36.3, 404.0], [36.4, 404.0], [36.5, 404.0], [36.6, 404.0], [36.7, 404.0], [36.8, 404.0], [36.9, 404.0], [37.0, 405.0], [37.1, 405.0], [37.2, 405.0], [37.3, 405.0], [37.4, 405.0], [37.5, 405.0], [37.6, 405.0], [37.7, 405.0], [37.8, 405.0], [37.9, 405.0], [38.0, 418.0], [38.1, 418.0], [38.2, 418.0], [38.3, 418.0], [38.4, 418.0], [38.5, 418.0], [38.6, 418.0], [38.7, 418.0], [38.8, 418.0], [38.9, 418.0], [39.0, 419.0], [39.1, 419.0], [39.2, 419.0], [39.3, 419.0], [39.4, 419.0], [39.5, 419.0], [39.6, 419.0], [39.7, 419.0], [39.8, 419.0], [39.9, 419.0], [40.0, 420.0], [40.1, 420.0], [40.2, 420.0], [40.3, 420.0], [40.4, 420.0], [40.5, 420.0], [40.6, 420.0], [40.7, 420.0], [40.8, 420.0], [40.9, 420.0], [41.0, 424.0], [41.1, 424.0], [41.2, 424.0], [41.3, 424.0], [41.4, 424.0], [41.5, 424.0], [41.6, 424.0], [41.7, 424.0], [41.8, 424.0], [41.9, 424.0], [42.0, 426.0], [42.1, 426.0], [42.2, 426.0], [42.3, 426.0], [42.4, 426.0], [42.5, 426.0], [42.6, 426.0], [42.7, 426.0], [42.8, 426.0], [42.9, 426.0], [43.0, 433.0], [43.1, 433.0], [43.2, 433.0], [43.3, 433.0], [43.4, 433.0], [43.5, 433.0], [43.6, 433.0], [43.7, 433.0], [43.8, 433.0], [43.9, 433.0], [44.0, 439.0], [44.1, 439.0], [44.2, 439.0], [44.3, 439.0], [44.4, 439.0], [44.5, 439.0], [44.6, 439.0], [44.7, 439.0], [44.8, 439.0], [44.9, 439.0], [45.0, 442.0], [45.1, 442.0], [45.2, 442.0], [45.3, 442.0], [45.4, 442.0], [45.5, 442.0], [45.6, 442.0], [45.7, 442.0], [45.8, 442.0], [45.9, 442.0], [46.0, 446.0], [46.1, 446.0], [46.2, 446.0], [46.3, 446.0], [46.4, 446.0], [46.5, 446.0], [46.6, 446.0], [46.7, 446.0], [46.8, 446.0], [46.9, 446.0], [47.0, 453.0], [47.1, 453.0], [47.2, 453.0], [47.3, 453.0], [47.4, 453.0], [47.5, 453.0], [47.6, 453.0], [47.7, 453.0], [47.8, 453.0], [47.9, 453.0], [48.0, 455.0], [48.1, 455.0], [48.2, 455.0], [48.3, 455.0], [48.4, 455.0], [48.5, 455.0], [48.6, 455.0], [48.7, 455.0], [48.8, 455.0], [48.9, 455.0], [49.0, 458.0], [49.1, 458.0], [49.2, 458.0], [49.3, 458.0], [49.4, 458.0], [49.5, 458.0], [49.6, 458.0], [49.7, 458.0], [49.8, 458.0], [49.9, 458.0], [50.0, 460.0], [50.1, 460.0], [50.2, 460.0], [50.3, 460.0], [50.4, 460.0], [50.5, 460.0], [50.6, 460.0], [50.7, 460.0], [50.8, 460.0], [50.9, 460.0], [51.0, 461.0], [51.1, 461.0], [51.2, 461.0], [51.3, 461.0], [51.4, 461.0], [51.5, 461.0], [51.6, 461.0], [51.7, 461.0], [51.8, 461.0], [51.9, 461.0], [52.0, 462.0], [52.1, 462.0], [52.2, 462.0], [52.3, 462.0], [52.4, 462.0], [52.5, 462.0], [52.6, 462.0], [52.7, 462.0], [52.8, 462.0], [52.9, 462.0], [53.0, 466.0], [53.1, 466.0], [53.2, 466.0], [53.3, 466.0], [53.4, 466.0], [53.5, 466.0], [53.6, 466.0], [53.7, 466.0], [53.8, 466.0], [53.9, 466.0], [54.0, 472.0], [54.1, 472.0], [54.2, 472.0], [54.3, 472.0], [54.4, 472.0], [54.5, 472.0], [54.6, 472.0], [54.7, 472.0], [54.8, 472.0], [54.9, 472.0], [55.0, 477.0], [55.1, 477.0], [55.2, 477.0], [55.3, 477.0], [55.4, 477.0], [55.5, 477.0], [55.6, 477.0], [55.7, 477.0], [55.8, 477.0], [55.9, 477.0], [56.0, 487.0], [56.1, 487.0], [56.2, 487.0], [56.3, 487.0], [56.4, 487.0], [56.5, 487.0], [56.6, 487.0], [56.7, 487.0], [56.8, 487.0], [56.9, 487.0], [57.0, 498.0], [57.1, 498.0], [57.2, 498.0], [57.3, 498.0], [57.4, 498.0], [57.5, 498.0], [57.6, 498.0], [57.7, 498.0], [57.8, 498.0], [57.9, 498.0], [58.0, 504.0], [58.1, 504.0], [58.2, 504.0], [58.3, 504.0], [58.4, 504.0], [58.5, 504.0], [58.6, 504.0], [58.7, 504.0], [58.8, 504.0], [58.9, 504.0], [59.0, 505.0], [59.1, 505.0], [59.2, 505.0], [59.3, 505.0], [59.4, 505.0], [59.5, 505.0], [59.6, 505.0], [59.7, 505.0], [59.8, 505.0], [59.9, 505.0], [60.0, 508.0], [60.1, 508.0], [60.2, 508.0], [60.3, 508.0], [60.4, 508.0], [60.5, 508.0], [60.6, 508.0], [60.7, 508.0], [60.8, 508.0], [60.9, 508.0], [61.0, 510.0], [61.1, 510.0], [61.2, 510.0], [61.3, 510.0], [61.4, 510.0], [61.5, 510.0], [61.6, 510.0], [61.7, 510.0], [61.8, 510.0], [61.9, 510.0], [62.0, 512.0], [62.1, 512.0], [62.2, 512.0], [62.3, 512.0], [62.4, 512.0], [62.5, 512.0], [62.6, 512.0], [62.7, 512.0], [62.8, 512.0], [62.9, 512.0], [63.0, 513.0], [63.1, 513.0], [63.2, 513.0], [63.3, 513.0], [63.4, 513.0], [63.5, 513.0], [63.6, 513.0], [63.7, 513.0], [63.8, 513.0], [63.9, 513.0], [64.0, 555.0], [64.1, 555.0], [64.2, 555.0], [64.3, 555.0], [64.4, 555.0], [64.5, 555.0], [64.6, 555.0], [64.7, 555.0], [64.8, 555.0], [64.9, 555.0], [65.0, 562.0], [65.1, 562.0], [65.2, 562.0], [65.3, 562.0], [65.4, 562.0], [65.5, 562.0], [65.6, 562.0], [65.7, 562.0], [65.8, 562.0], [65.9, 562.0], [66.0, 563.0], [66.1, 563.0], [66.2, 563.0], [66.3, 563.0], [66.4, 563.0], [66.5, 563.0], [66.6, 563.0], [66.7, 563.0], [66.8, 563.0], [66.9, 563.0], [67.0, 588.0], [67.1, 588.0], [67.2, 588.0], [67.3, 588.0], [67.4, 588.0], [67.5, 588.0], [67.6, 588.0], [67.7, 588.0], [67.8, 588.0], [67.9, 588.0], [68.0, 593.0], [68.1, 593.0], [68.2, 593.0], [68.3, 593.0], [68.4, 593.0], [68.5, 593.0], [68.6, 593.0], [68.7, 593.0], [68.8, 593.0], [68.9, 593.0], [69.0, 625.0], [69.1, 625.0], [69.2, 625.0], [69.3, 625.0], [69.4, 625.0], [69.5, 625.0], [69.6, 625.0], [69.7, 625.0], [69.8, 625.0], [69.9, 625.0], [70.0, 630.0], [70.1, 630.0], [70.2, 630.0], [70.3, 630.0], [70.4, 630.0], [70.5, 630.0], [70.6, 630.0], [70.7, 630.0], [70.8, 630.0], [70.9, 630.0], [71.0, 631.0], [71.1, 631.0], [71.2, 631.0], [71.3, 631.0], [71.4, 631.0], [71.5, 631.0], [71.6, 631.0], [71.7, 631.0], [71.8, 631.0], [71.9, 631.0], [72.0, 633.0], [72.1, 633.0], [72.2, 633.0], [72.3, 633.0], [72.4, 633.0], [72.5, 633.0], [72.6, 633.0], [72.7, 633.0], [72.8, 633.0], [72.9, 633.0], [73.0, 636.0], [73.1, 636.0], [73.2, 636.0], [73.3, 636.0], [73.4, 636.0], [73.5, 636.0], [73.6, 636.0], [73.7, 636.0], [73.8, 636.0], [73.9, 636.0], [74.0, 637.0], [74.1, 637.0], [74.2, 637.0], [74.3, 637.0], [74.4, 637.0], [74.5, 637.0], [74.6, 637.0], [74.7, 637.0], [74.8, 637.0], [74.9, 637.0], [75.0, 640.0], [75.1, 640.0], [75.2, 640.0], [75.3, 640.0], [75.4, 640.0], [75.5, 640.0], [75.6, 640.0], [75.7, 640.0], [75.8, 640.0], [75.9, 640.0], [76.0, 653.0], [76.1, 653.0], [76.2, 653.0], [76.3, 653.0], [76.4, 653.0], [76.5, 653.0], [76.6, 653.0], [76.7, 653.0], [76.8, 653.0], [76.9, 653.0], [77.0, 665.0], [77.1, 665.0], [77.2, 665.0], [77.3, 665.0], [77.4, 665.0], [77.5, 665.0], [77.6, 665.0], [77.7, 665.0], [77.8, 665.0], [77.9, 665.0], [78.0, 690.0], [78.1, 690.0], [78.2, 690.0], [78.3, 690.0], [78.4, 690.0], [78.5, 690.0], [78.6, 690.0], [78.7, 690.0], [78.8, 690.0], [78.9, 690.0], [79.0, 692.0], [79.1, 692.0], [79.2, 692.0], [79.3, 692.0], [79.4, 692.0], [79.5, 692.0], [79.6, 692.0], [79.7, 692.0], [79.8, 692.0], [79.9, 692.0], [80.0, 730.0], [80.1, 730.0], [80.2, 730.0], [80.3, 730.0], [80.4, 730.0], [80.5, 730.0], [80.6, 730.0], [80.7, 730.0], [80.8, 730.0], [80.9, 730.0], [81.0, 749.0], [81.1, 749.0], [81.2, 749.0], [81.3, 749.0], [81.4, 749.0], [81.5, 749.0], [81.6, 749.0], [81.7, 749.0], [81.8, 749.0], [81.9, 749.0], [82.0, 749.0], [82.1, 749.0], [82.2, 749.0], [82.3, 749.0], [82.4, 749.0], [82.5, 749.0], [82.6, 749.0], [82.7, 749.0], [82.8, 749.0], [82.9, 749.0], [83.0, 768.0], [83.1, 768.0], [83.2, 768.0], [83.3, 768.0], [83.4, 768.0], [83.5, 768.0], [83.6, 768.0], [83.7, 768.0], [83.8, 768.0], [83.9, 768.0], [84.0, 769.0], [84.1, 769.0], [84.2, 769.0], [84.3, 769.0], [84.4, 769.0], [84.5, 769.0], [84.6, 769.0], [84.7, 769.0], [84.8, 769.0], [84.9, 769.0], [85.0, 784.0], [85.1, 784.0], [85.2, 784.0], [85.3, 784.0], [85.4, 784.0], [85.5, 784.0], [85.6, 784.0], [85.7, 784.0], [85.8, 784.0], [85.9, 784.0], [86.0, 802.0], [86.1, 802.0], [86.2, 802.0], [86.3, 802.0], [86.4, 802.0], [86.5, 802.0], [86.6, 802.0], [86.7, 802.0], [86.8, 802.0], [86.9, 802.0], [87.0, 857.0], [87.1, 857.0], [87.2, 857.0], [87.3, 857.0], [87.4, 857.0], [87.5, 857.0], [87.6, 857.0], [87.7, 857.0], [87.8, 857.0], [87.9, 857.0], [88.0, 869.0], [88.1, 869.0], [88.2, 869.0], [88.3, 869.0], [88.4, 869.0], [88.5, 869.0], [88.6, 869.0], [88.7, 869.0], [88.8, 869.0], [88.9, 869.0], [89.0, 897.0], [89.1, 897.0], [89.2, 897.0], [89.3, 897.0], [89.4, 897.0], [89.5, 897.0], [89.6, 897.0], [89.7, 897.0], [89.8, 897.0], [89.9, 897.0], [90.0, 920.0], [90.1, 920.0], [90.2, 920.0], [90.3, 920.0], [90.4, 920.0], [90.5, 920.0], [90.6, 920.0], [90.7, 920.0], [90.8, 920.0], [90.9, 920.0], [91.0, 945.0], [91.1, 945.0], [91.2, 945.0], [91.3, 945.0], [91.4, 945.0], [91.5, 945.0], [91.6, 945.0], [91.7, 945.0], [91.8, 945.0], [91.9, 945.0], [92.0, 988.0], [92.1, 988.0], [92.2, 988.0], [92.3, 988.0], [92.4, 988.0], [92.5, 988.0], [92.6, 988.0], [92.7, 988.0], [92.8, 988.0], [92.9, 988.0], [93.0, 1346.0], [93.1, 1346.0], [93.2, 1346.0], [93.3, 1346.0], [93.4, 1346.0], [93.5, 1346.0], [93.6, 1346.0], [93.7, 1346.0], [93.8, 1346.0], [93.9, 1346.0], [94.0, 1752.0], [94.1, 1752.0], [94.2, 1752.0], [94.3, 1752.0], [94.4, 1752.0], [94.5, 1752.0], [94.6, 1752.0], [94.7, 1752.0], [94.8, 1752.0], [94.9, 1752.0], [95.0, 2436.0], [95.1, 2436.0], [95.2, 2436.0], [95.3, 2436.0], [95.4, 2436.0], [95.5, 2436.0], [95.6, 2436.0], [95.7, 2436.0], [95.8, 2436.0], [95.9, 2436.0], [96.0, 2558.0], [96.1, 2558.0], [96.2, 2558.0], [96.3, 2558.0], [96.4, 2558.0], [96.5, 2558.0], [96.6, 2558.0], [96.7, 2558.0], [96.8, 2558.0], [96.9, 2558.0], [97.0, 3462.0], [97.1, 3462.0], [97.2, 3462.0], [97.3, 3462.0], [97.4, 3462.0], [97.5, 3462.0], [97.6, 3462.0], [97.7, 3462.0], [97.8, 3462.0], [97.9, 3462.0], [98.0, 3937.0], [98.1, 3937.0], [98.2, 3937.0], [98.3, 3937.0], [98.4, 3937.0], [98.5, 3937.0], [98.6, 3937.0], [98.7, 3937.0], [98.8, 3937.0], [98.9, 3937.0], [99.0, 3961.0], [99.1, 3961.0], [99.2, 3961.0], [99.3, 3961.0], [99.4, 3961.0], [99.5, 3961.0], [99.6, 3961.0], [99.7, 3961.0], [99.8, 3961.0], [99.9, 3961.0]], "isOverall": false, "label": "01-Accueil", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 35.0, "series": [{"data": [[600.0, 11.0], [2400.0, 1.0], [2500.0, 1.0], [700.0, 6.0], [800.0, 4.0], [3400.0, 1.0], [900.0, 3.0], [3900.0, 2.0], [300.0, 35.0], [1300.0, 1.0], [400.0, 23.0], [1700.0, 1.0], [500.0, 11.0]], "isOverall": false, "label": "01-Accueil", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 58.0, "series": [{"data": [[0.0, 58.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 36.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.1299999999999994, "minX": 1.792197E12, "maxY": 3.1299999999999994, "series": [{"data": [[1.792197E12, 3.1299999999999994]], "isOverall": false, "label": "Utilisateurs - Parcours reservation", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.792197E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 12600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 488.1851851851852, "minX": 1.0, "maxY": 852.25, "series": [{"data": [[1.0, 852.25], [2.0, 727.5833333333331], [4.0, 488.1851851851852], [5.0, 814.2222222222222], [3.0, 685.2222222222222]], "isOverall": false, "label": "01-Accueil", "isController": false}, {"data": [[3.1299999999999994, 660.4799999999999]], "isOverall": false, "label": "01-Accueil-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 195.0, "minX": 1.792197E12, "maxY": 7928.333333333333, "series": [{"data": [[1.792197E12, 7928.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.792197E12, 195.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.792197E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 12600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 660.4799999999999, "minX": 1.792197E12, "maxY": 660.4799999999999, "series": [{"data": [[1.792197E12, 660.4799999999999]], "isOverall": false, "label": "01-Accueil", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.792197E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 12600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 653.19, "minX": 1.792197E12, "maxY": 653.19, "series": [{"data": [[1.792197E12, 653.19]], "isOverall": false, "label": "01-Accueil", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.792197E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 12600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 37.589999999999996, "minX": 1.792197E12, "maxY": 37.589999999999996, "series": [{"data": [[1.792197E12, 37.589999999999996]], "isOverall": false, "label": "01-Accueil", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.792197E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 12600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 307.0, "minX": 1.792197E12, "maxY": 3961.0, "series": [{"data": [[1.792197E12, 3961.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.792197E12, 307.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.792197E12, 917.7000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.792197E12, 3960.7599999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.792197E12, 459.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.792197E12, 2401.799999999992]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.792197E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 12600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 396.0, "minX": 1.0, "maxY": 681.0, "series": [{"data": [[2.0, 681.0], [4.0, 521.0], [8.0, 534.0], [1.0, 476.5], [9.0, 396.0], [5.0, 396.5], [3.0, 466.0], [6.0, 501.0], [7.0, 411.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 387.0, "minX": 1.0, "maxY": 680.5, "series": [{"data": [[2.0, 680.5], [4.0, 517.0], [8.0, 527.0], [1.0, 472.5], [9.0, 387.0], [5.0, 394.5], [3.0, 465.0], [6.0, 498.0], [7.0, 401.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.792197E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.792197E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.792197E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 12600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.792197E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.792197E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.792197E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 12600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.792197E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.792197E12, 1.6666666666666667]], "isOverall": false, "label": "01-Accueil-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.792197E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 12600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.792197E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.792197E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.792197E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 12600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

