import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "tns-core-modules/application-settings";
import { map } from "rxjs/operators";
import { GlobalVariables } from "../global.variables"

@Injectable()
export class TokenService {
    
    constructor(private http: HttpClient,
                private GlobalVariables: GlobalVariables) { }

    validate_token(){
        let url = this.GlobalVariables.API_URL + "/auth/validate_token?" + this.get_stringified_access_tokens();
        return this.http.get(url,{observe: "response"})
            .pipe(
                map(res =>{
                    console.log(res.body["data"]);
                    setNumber('user_id',res.body["data"]["id"]);
                    setString('user_name',res.body["data"]["firstname"] + " " + res.body["data"]["surname"]);
                    this.updateToken(res.headers);
                })
            )
    }

    // Use NativeScript appplication-settings to save token
    save_token(key, value){
        setString(key, value)
    }

    get_tokens(){
        let token = {}
        token['access'] = getString('accessToken', "No access value")
        token['client'] = getString('clientToken', "No client value")
        token['uid']    = getString('uidToken', "No uid value")
        return token;
    }

    get_stringified_access_tokens() {
        let token = this.get_tokens()
        let stringifiedAccessTokens = "uid="+token['uid']+"&client="+token['client']+"&access-token="+token['access'];
        // ask backend if token is valid if valid then go straight to home page otherwise show login
        return stringifiedAccessTokens;
    }

    updateToken(headers) {
        let hash=this.buildTokenHash(headers);
        
        if (hash['access'] == ""){
            console.log("OLD access-token");
        }else{
            console.log("NEW access-token: ", hash['access']);
            this.save_token('accessToken', hash['access'])
        }
    }

    buildTokenHash(headers) {
        let uid = headers['uid'];
        let client = headers['client'];
        let access = headers['access-token'];

        if (uid == undefined){
            uid = headers.get('uid');
            client = headers.get('client');
            access = headers.get('access-token');
        }

        return {uid: uid, client: client, access: access};
    }

    destroy_tokens() {
        this.save_token("accessToken", '')
        this.save_token("clientToken", '')
        this.save_token("uidToken", '')
    }
    
}
