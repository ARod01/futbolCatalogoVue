const urlName = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t";

const urlId = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id";

function getAssetName(team) {
    return fetch(`${urlName}=${team}`)
      .then(res => res.json())
      .then(res => res.teams);
}

function getAssetId(team) {
  return fetch(`${urlId}=${team}`)
    .then(res => res.json())
    .then(res => res.teams);
}

export default{
    getAssetName,
    getAssetId,
}