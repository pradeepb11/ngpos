import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError, map, retry} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, Subject, throwError } from 'rxjs';

// enviroment
import { environment } from 'src/environments/environment';
const bearer = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzdkZmY1NmFkZDEyMjhiYTY2ZDlmYTlkNzgxMzJmMjAxMDU1ZjlmMDRmMWE3NjRmZWE0ZWQzMDg5NTExODQ1NDc5ZjUzOGQ4OTgzOGI3MWYiLCJpYXQiOiIxNjY3ODI0OTUzLjI4NTg2NCIsIm5iZiI6IjE2Njc4MjQ5NTMuMjg1ODY4IiwiZXhwIjoiMTY5OTM2MDk1My4yNzE4NDgiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Oft_3wK2jQgxtnkNPSDQ2oMvbVOACPGdoox-DWnoM9omqtay7zpCcSQRZrPJCPXSFXy-fu5bFpZnYF3BBxlitKwBQTJ8jfsdLGRzRy5_bL0lQZhKaOlm5-tIGZy_RCECNhslPFdLoJ5uxav6IrCmw21UJo9sfCTXvk07BFTp5JItDd5hHO-S_cn_3MbnU_hBZG18ReWkNlT19khCtMjLhhwglJdmUSgyhebJzB2vA9mMqs4VA7Lg0sGgnb_CpvsBYtQ9te0qox7ko0mLU2cUSOCHcH0ciI5yMFrrjMfvy8E_rdIA6JtPQxtVS4pFsWbIBS5lVuA11iLw473BO16NiZCMxajTtSEmtI0ZmoBRB1XiIdFhVGSDO8F_sobB_cXDhg93oqwS4nAJlOPq-YkNkuqWUukT7_tp31CJlxkeTz-xRJdGe4eDS2JIdNPYT5UfuEjK4QvwPwfunDCgqxzD3W2qaisxoduUm_O6zqAFMFKlUNQnWdCdjfYgWRA1qmkjwzOd40VFN1kntcXNR7BBKt1DWzRs0taJcvJAmUjycz04qNmxgfWiNUNHAjWoMysonO91P1P5aaffplgxOYpCpsjS8qeXaMwGgMp3_kgVoGzs5PfpMtoTrpUbfmYHTmuSOnCh5G80zUEYE2-xuKG5CLsfuG2VHWZJLAiwOZyj0qg';


// const httpOptions = {
//   headers: new HttpHeaders({ 
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${bearer}` 
//   })
// };





@Injectable({
  providedIn: 'root'
})
export class StoreposService {


  constructor(
    private http: HttpClient,
  ) { }

    url = "https://testing.paynet.co.in/pos-api/public/index.php/api/v1/";
   

  getProductsCategory(): Observable<any>{
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearer}`
    })
    return this.http.get<any>(this.url+'product_category')
    .pipe(map(res => res))
  }



}
