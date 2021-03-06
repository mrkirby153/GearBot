import {Component, h} from "preact";
import GuildNav from "../components/guildnav";

import {DashboardProps} from "../components/props";
import config from "../config";

export default class Dashboard extends Component<DashboardProps, {}> {
    render() {
        return <div class="dashboard">
            <a href={"http://"+config.apiUrl+"/discord/login"} class="discordSignIn">
                Sign In
            </a>
            <GuildNav SocketAuthObject={this.props.SocketAuthObject}/>
            <div class="dash-content">
                <h1>Dashboard</h1>
            </div>
        </div>;
    }
}
