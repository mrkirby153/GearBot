export interface GearState {
	rotation: number;
	spinning: boolean;
}

export interface DashboardState {
	currentUrl: string;
}

export interface HeaderState {

}

export interface GuildListNavState {
	guilds: GuildListObject[];
	guildsLoaded: boolean;
}

export interface GuildListObject {
	name: string;
	icon: string;
	authorized: boolean;
}

export interface DocState {
	markdown: string;
	link: string;
}

export interface AuthObject {
	client_id: string;
	timestamp: string;
	client_token?: string;
	errorValue?: number;
	user_auth_token?: string // This is for the Discord OAuth verification or whatnot
}

export interface InitalAuthObject extends AuthObject {
	status: string;
}
