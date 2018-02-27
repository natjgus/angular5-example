import {Component, OnInit} from "@angular/core";
import {User} from "../classes/user";
import {UserService} from "../services/user.service";

@Component({
	templateUrl: "./templates/splash.html"
})

export class SplashComponent implements OnInit {
	//state variable which we assign to empty array
	users: User[] = [];

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.userService.getAllUsers()
			.subscribe(users => this.users = users);
		//code above is saying that we need to grab data from the class users and store them in our empty user array
	}
}
