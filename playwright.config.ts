import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';


const config: PlaywrightTestConfig = {
     
     testDir: './tests',
//      testMatch: //["tests/pomtest/addToCart.test.ts"],  ["pomtest/ex.test.ts"], 
//   ["tests/selector.test.ts"],

 use: { 
      // baseURL: "https://ecommerce-playground.lambdatest.io/index.php?" ,
      headless: true,
      browserName: "chromium",
       screenshot: "on",
       video: "on"} ,
       retries: 2,

reporter: [ ["list"], ["line"], ["dot"], ["json", {outputFile: "jsonReports/jsonReports.json" }],
             ["html", {  open: "never"  }]] 
 
};

export default config;
