const API_ENDPOINT = "http://localhost:3000"
const USERS_URL = `${API_ENDPOINT}/users?_embed=tweets`
const TWEETS_URL = `${API_ENDPOINT}/tweets?_expand=user&_embed=comments`

const getTweets = () => fetch(TWEETS_URL).then(res => res.json());




export const users = [];

const getUsers = async() => {
    const userObj = await fetch("http://localhost:3000/users").then((response) => response.json());
    const userNames = userObj.map(el => {
        return el.name;
    })
    userNames.forEach(el => users.push(el));

    return userNames;
}

getUsers();

export default {
    getTweets,

}