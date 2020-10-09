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
    postEpisode(title, content, image) {
        return fetch(`${config.API_ENDPOINT}/episodes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                title,
                content,
                image,
                // user_id: userId,
            }),
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },

    deleteEpisode(episodeId, userId) {
        return fetch(`${config.API_ENDPOINT}/episodes/${episodeId}`, {
            method: 'DELETE',
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },

    updateEpisode(episodeId, userId, title, content, image) {
        return fetch(`${config.API_ENDPOINT}/episodes/${episodeId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                episode_id: episodeId,
                user_id: userId,
                title,
                content,
                image,
            }),
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
}

export default EpisodeApiService