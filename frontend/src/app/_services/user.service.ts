import { Injectable, DebugElement } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, TempUser } from '../_models';
import { Match, Games, GameResponse, NewParticipant, ParticipantsResponse, FinalMatchResponse, UpdateFinalMatch } from '../_models/team';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Injectable({ providedIn: 'root' })

/* 
* @description
* This services handles the HTTP Request routes to the API
* Currently, the routes are static and should be changed to relative paths in the future.
*/
export class UserService {
    constructor(private http: HttpClient) { }

    deploy_url : string = "https://limitless-fjord-64117.herokuapp.com";
    local_url : string = "http://127.0.0.1:5002"

    getAll() {
        return this.http.get<User[]>(`https://limitless-fjord-64117.herokuapp.com/users/users`);
    }

    addToLobby(tempUser: TempUser) {
        return this.http.post(`https://limitless-fjord-64117.herokuapp.com/lobby`, tempUser)
    }

    getLobby() {
        return this.http.get(`https://limitless-fjord-64117.herokuapp.com/lobby`);
    }

    register(user: User) {
        return this.http.post(this.deploy_url + '/users', user);
    }

    delete(id: number) {
        return this.http.delete(`https://limitless-fjord-64117.herokuapp.com/users/${id}`);
    }

    login(username: string) {
        return this.http.get(`https://limitless-fjord-64117.herokuapp.com/users/${username}`);
    }

    createMatch(game: Games) {
        return this.http.post('https://limitless-fjord-64117.herokuapp.com/create', game);
    }
    
    getMatch(matchId: string) {
        return this.http.get<GameResponse>(`https://limitless-fjord-64117.herokuapp.com/getmatch/${matchId}`);
    }

    addPlayerToMatch(user: NewParticipant) {
        return this.http.post(this.deploy_url +`/addtomatch`, user);
    }

    getParticipants(matchId: string) {
        return this.http.get<ParticipantsResponse>(`https://limitless-fjord-64117.herokuapp.com/getparticipants/${matchId}`);
    }

    getMM(matchId: string) {
        return this.http.get<FinalMatchResponse>(`https://limitless-fjord-64117.herokuapp.com/mm/${matchId}`);
    }

    getParticipantCount(matchId: string) {
        return this.http.get(`https://limitless-fjord-64117.herokuapp.com/getparticipantcount/${matchId}`);
    }

    getAdmin(matchId: string) {
        return this.http.get<string>(`https://limitless-fjord-64117.herokuapp.com/admin/${matchId}`);
    }

    getUpcomingGames(username: string) {
        return this.http.get<any>(`https://limitless-fjord-64117.herokuapp.com/mygames/${username}`)
    }

    updateFinalMatch(fmatch: UpdateFinalMatch) {
        return this.http.post('https://limitless-fjord-64117.herokuapp.com/finalmatch', fmatch);
    }

    getMatchStatus(matchId: string) {
        return this.http.get<string>(`https://limitless-fjord-64117.herokuapp.com/matchstatus/${matchId}`);
    }

}