import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BootService {
  // 2019년에는 없어지기 때문에 , 이번 프로젝트가 지난후에는 v2 를 사용하도록 합니다.
  // 밑에 코드들은 기본적으로 Dialogflow 에서 제공해주는 것들 입니다.
  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = 'df6c8999495344d487ab4f11d33b2395'
  constructor(private http: HttpClient) { }
  public getResponse(query: string) {
    let data = {
      query: query,
      lang: 'en',
      sessionId: '12345'
    }
    console.log(query);
    console.log(data);
    return this.http.post(`${this.baseURL}`, data, { headers: this.getHeaders() }
    )

    

  }
  // 암호화 방식중에서 token 을 Bearer 토큰이라고 명칭합니다.
  public getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
