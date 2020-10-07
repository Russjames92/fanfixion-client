import config from '../config'
import TokenService from './token-service'

const EpisodeApiService = {
    getEpisodes() {
        return fetch(`${config.API_ENDPOINT}/episodes`, {
            headers: {},
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
                )
    },
    getEpisode(episodeId) {
        return fetch(`${config.API_ENDPOINT}/episodes/${episodeId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
                )
    },
}

export default EpisodeApiService