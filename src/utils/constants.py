import json

"""
Deployment Database Credentials
"""
DATABASE = "d34bp9cpp983nn"
USER =  "cfrqbgcghvvkyw"
DB_PASSWORD = "553a3ddb1f43deb191cf1001d58ba5ce319d55f24e83ebad7c91f03fab8d90dd"
HOST = "ec2-35-168-54-239.compute-1.amazonaws.com"
PORT = "5432"

RIOT_API_KEY = 'RGAPI-6e63a0aa-3424-485f-95b0-c0bef8f46027'

API_KEY = 'select api_key from key'
ADMIN_QUERY = 'select admin from matches where match_uuid=%s'
GET_SUMMONER_NAME = 'select summoner_name from users where user_name=%s'
UPDATE_SUMMOMER = 'Update users set account_id=%s, rank=%s, mmr=%s, player_icon=%s, total_games=%s where user_name=%s'
MMR_QUERY = "select mmr from ranks where rank=%s"
GET_TEAM = 'SELECT team1, team2, winning_team, losing_team FROM final_match WHERE match_uuid=%s'
UPDATE_TEAM = 'UPDATE final_match SET winning_team=%s, losing_team=%s where match_uuid=%s'
GET_LOSING_TEAM = ' team1 FROM final_match WHERE match_uuid=%s'
GET_MATCH_IDS = 'select match_uuid from participants where username=%s'
GET_MATCH = 'Select match_uuid, match_name, match_type, date, time, admin, outcome from matches where match_uuid=%s'
UPDATE_OUTCOME = 'UPDATE participants SET outcome=%s WHERE summoner_name=%s AND match_uuid=%s'
WINNING_TEAM = 'SELECT * from final_match WHERE match_uuid=%s'
CLOSE_MATCH = 'update matches set outcome=%s where match_uuid =%s';
MATCH_STATUS = 'select count(*) from matches where outcome=%s and match_uuid=%s';
GET_MATCH_STATUS = 'select outcome from matches where match_uuid=%s'
SUCCESS = json.dumps({'success':True}), 200, {'ContentType':'application/json'}