import { Injectable } from "@angular/core";

declare let global: any;

@Injectable()
export class GlobalVariables {
    // pick up API_URL from the following command line commands:
    //  tns run android --env.apiUrl='http://192.168.200.4:3000' --device emulator-4500
    //  or
    //  tns debug android --env.apiUrl='http://192.168.200.4:3000' --device emulator-4500
    //  env.apiUrl defined in webpack.conifg.js
    API_URL: string = global.API_URL; 
}
