import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
//This is from dependency injection from Gang of 4
import {Observable} from "rxjs/Observable";
//Observable is a way of making a late if if the connection is slow in case angular id faster
import {User} from "../classes/user";
//user class is created, it is a generic container for the possible results

@Injectable()
export class UserService {

	constructor(protected http: HttpClient) {}

	private userUrl = "https://jsonplaceholder.typicode.com/users/";
	//jsonplaceholder is dev service with lots of classes we can use to develop applications

	getAllUsers() : Observable<User[]> {
		return(this.http.get<User[]>(this.userUrl));
	}
}