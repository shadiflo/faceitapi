const axios = require("axios");

class FaceitApi {
  constructor(apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxx") {
    this.apiHeader = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "Application/json",
    };
  }

  async getRequest(url) {
    try {
      const response = await axios.get(url, {
        headers: this.apiHeader,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  ChampionshipType = {
    ALL: "all",
    UPCOMING: "upcoming",
    ONGOING: "ongoing",
    PAST: "past",
  };

  Championships = class {
    constructor(client) {
      this.client = client;
    }

    async getChampionships(game, type = "all", limit = "10") {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/championships?game=${game}&type=${type}&offset=0&limit=${limit}`
      );
    }

    async getChampionship(championshipId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/championships/${championshipId}`
      );
    }

    async getChampionshipMatches(championshipId, type = "all") {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/championships/${championshipId}/matches?type=${type}`
      );
    }

    async getChampionshipResults(championshipId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/championships/${championshipId}/results`
      );
    }

    async getChampionshipSubscriptions(championshipId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/championships/${championshipId}/subscriptions`
      );
    }
  };

  GamesRegion = {
    ALL: "all",
    EU: "eu",
    NA: "na",
    AS: "as",
    KR: "kr",
    RU: "ru",
    JP: "jp",
    BR: "br",
    AU: "au",
    OCE: "oce",
    GLOBAL: "global",
  };

  Games = class {
    constructor(client) {
      this.client = client;
    }

    async getGames() {
      return await this.client.getRequest(
        "https://open.faceit.com/data/v4/games"
      );
    }

    async getGameDetails(gameId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/games/${gameId}`
      );
    }

    async getGameMatchmakings(gameId, region = "all") {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/games/${gameId}/matchmakings?region=${region}`
      );
    }

    async getGameParent(gameId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/games/${gameId}`
      );
    }

    async getGameQueues(gameId, entityType = "hub", entityId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/games/${gameId}/queues?entity_type=${entityType}&entity_id=${entityId}`
      );
    }

    async getGameQueueDetails(gameId, queueId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/games/${gameId}/queues/${queueId}`
      );
    }

    async getGameQueueBans(gameId, queueId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/games/${gameId}/queues/${queueId}/bans`
      );
    }

    async getGameRegionQueues(gameId, region = "all") {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/games/${gameId}/regions/${region}/queues`
      );
    }
  };

  MatchesType = {
    ALL: "all",
    UPCOMING: "upcoming",
    ONGOING: "ongoing",
    PAST: "past",
  };

  Hubs = class {
    constructor(client) {
      this.client = client;
    }

    async getHubDetails(hubId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/hubs/${hubId}`
      );
    }

    async getHubMatches(hubId, type = "all") {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/hubs/${hubId}/matches?type=${type}`
      );
    }

    async getHubMembers(hubId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/hubs/${hubId}/members`
      );
    }

    async getHubRoles(hubId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/hubs/${hubId}/roles`
      );
    }

    async getHubRules(hubId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/hubs/${hubId}/rules`
      );
    }
  };

  Leaderboards = class {
    constructor(client) {
      this.client = client;
    }

    async getChampionshipsLeaderboards(championshipId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/leaderboards/championships/${championshipId}`
      );
    }

    async getChampionshipsGroupRanking(championshipId, groupId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/leaderboards/championships/${championshipId}/groups/${groupId}`
      );
    }

    async getHubLeaderboards(hubId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/leaderboards/hubs/${hubId}`
      );
    }

    async getHubAlltimeRanking(hubId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/leaderboards/hubs/${hubId}/general`
      );
    }

    async getHubSeasonRanking(hubId, season) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/leaderboards/hubs/${hubId}/seasons/${season}`
      );
    }

    async getLeaderboard(leaderboardId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/leaderboards/${leaderboardId}`
      );
    }

    async getLeaderboardPlayers(leaderboardId, playerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/leaderboards/${leaderboardId}/players/${playerId}`
      );
    }
  };

  Leagues = class {
    constructor(client) {
      this.client = client;
    }

    async getLeagueDetails(leagueId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/leagues/${leagueId}`
      );
    }

    async getLeagueSeasonDetails(leagueId, seasonId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/leagues/${leagueId}/seasons/${seasonId}`
      );
    }

    async getLeagueSeasonPlayerDetails(leagueId, seasonId, playerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/leagues/${leagueId}/seasons/${seasonId}/players/${playerId}`
      );
    }
  };

  Matches = class {
    constructor(client) {
      this.client = client;
    }

    async getMatchDetails(matchId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/matches/${matchId}`
      );
    }

    async getMatchStats(matchId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/matches/${matchId}/stats`
      );
    }
  };

  MatchMakings = class {
    constructor(client) {
      this.client = client;
    }

    async getMatchMakingDetails(matchMakingId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/matchmakings/${matchMakingId}`
      );
    }
  };

  TournamentTypes = {
    UPCOMING: "upcoming",
    PAST: "past",
  };

  Organizers = class {
    constructor(client) {
      this.client = client;
    }

    async getOrganizers() {
      return await this.client.getRequest(
        "https://open.faceit.com/data/v4/organizers"
      );
    }

    async getOrganizerDetails(organizerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/organizers/${organizerId}`
      );
    }

    async getOrganizersChampionships(organizerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/organizers/${organizerId}/championships`
      );
    }

    async getOrganizersGames(organizerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/organizers/${organizerId}/games`
      );
    }

    async getOrganizersHubs(organizerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/organizers/${organizerId}/hubs`
      );
    }

    async getOrganizersTournaments(organizerId, type = "upcoming") {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/organizers/${organizerId}/tournaments?type=${type}`
      );
    }
  };

  Players = class {
    constructor(client) {
      this.client = client;
    }

    async getPlayerDetails(playerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/players/${playerId}`
      );
    }

    async getPlayerChampionships(playerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/players/${playerId}/championships`
      );
    }

    async getPlayerGameDetails(playerId, gameId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/players/${playerId}/games/${gameId}`
      );
    }

    async getPlayerGameHistory(playerId, gameId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/players/${playerId}/games/${gameId}/history`
      );
    }

    async getPlayerGameStats(playerId, gameId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/players/${playerId}/games/${gameId}/stats`
      );
    }

    async getPlayerHubs(playerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/players/${playerId}/hubs`
      );
    }

    async getPlayerMatches(playerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/players/${playerId}/matches`
      );
    }

    async getPlayerStats(playerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/players/${playerId}/stats`
      );
    }

    async getPlayerTournaments(playerId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/players/${playerId}/tournaments`
      );
    }
  };

  Rankings = class {
    constructor(client) {
      this.client = client;
    }

    async getGameRanking(gameId, region = "all") {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/rankings/games/${gameId}/regions/${region}`
      );
    }

    async getGlobalGameRanking(gameId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/rankings/games/${gameId}`
      );
    }

    async getCountryRanking(gameId, country) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/rankings/games/${gameId}/countries/${country}`
      );
    }

    async getHubRanking(hubId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/rankings/hubs/${hubId}`
      );
    }
  };

  SearchResultsType = {
    GAME: "game",
    PLAYER: "player",
    ORGANIZER: "organizer",
    CHAMPIONSHIP: "championship",
    HUB: "hub",
  };

  Search = class {
    constructor(client) {
      this.client = client;
    }

    async search(query, type = "game", limit = "10") {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/search?query=${query}&type=${type}&limit=${limit}`
      );
    }
  };

  TournamentsStatus = {
    IN_REGISTRATION: "inregistration",
    CHECK_IN: "checkin",
    READY: "ready",
    ONGOING: "ongoing",
    CANCELLED: "cancelled",
    FINISHED: "finished",
  };

  Tournaments = class {
    constructor(client) {
      this.client = client;
    }

    async getTournaments(
      gameId,
      status = "ongoing",
      region = "all",
      orderBy = "starting_at",
      offset = "0",
      limit = "10"
    ) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/tournaments?game=${gameId}&status=${status}&region=${region}&order_by=${orderBy}&offset=${offset}&limit=${limit}`
      );
    }

    async getTournamentDetails(tournamentId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/tournaments/${tournamentId}`
      );
    }

    async getTournamentBracket(tournamentId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/tournaments/${tournamentId}/bracket`
      );
    }

    async getTournamentMatches(tournamentId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/tournaments/${tournamentId}/matches`
      );
    }

    async getTournamentTeams(tournamentId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/tournaments/${tournamentId}/teams`
      );
    }

    async getTournamentVoting(tournamentId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/tournaments/${tournamentId}/voting`
      );
    }

    async getTournamentResults(tournamentId) {
      return await this.client.getRequest(
        `https://open.faceit.com/data/v4/tournaments/${tournamentId}/results`
      );
    }
  };
}

module.exports = FaceitApi;
