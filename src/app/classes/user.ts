//These classes will be a direct reflection of the classes you write in php.
//This is why angular is cool... you just tell it what you need and feed in an empty constructor. Angular grabs all that data for you
export class User {
	constructor(public id: number, public email: string, public phone: string, public name: string) {}
}