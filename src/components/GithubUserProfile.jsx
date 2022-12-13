import React, { useState, useEffect } from "react";

import { Button, Card, Form, Image, Icon } from 'semantic-ui-react';

import '../App.css'

// const GetUser = ({ username }) => {
//     useEffect(() => {

//     }, [username])

//     return (
//         <div></div>
//     )
// }

const GithubUserProfile = () => {
    const [name, setName] = useState('');
    const [userName, setUsername] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('')
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState(null)

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userInput, setUserinput] = useState('');
    // const [data, setData] = useState('');

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/example`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data);
    //         });
    // }, [])

    const setData = ({
        name,
        login,
        followers,
        following,
        public_repos,
        avatar_url
    }) => {
        setName(name);
        setUsername(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url)
    }


    const handleSearch = (e) => {
        setUserinput(e.target.value);
    }
    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }
    // const searchUser = () => {
    //     setLoading(true);
    //     // const url = 'https://api.github.com/users/';

    //     fetch (`https://api.github.com/users/${user}`)
    //     .then((res) => res.json())
    //     .then((res) => setUser(res))
    //     .catch((e) => console.log(e))
    //     .finally(() => setLoading(false))

    // }

    return (
        <div>
            {/* <h1>Search Any Github user</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Github.." onChange={handleSearch}/>
            </form>
            {loading ? <h1>Loading....</h1>: null}
            {user && <div>
                <h1>{user.name}</h1>
                <h1>{user.location}</h1>
            </div>}
            <button >Search</button> */}
            <div className="navbar">
                <div className="search">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Input placeholder="Github Username" onChange={handleSearch} />
                            <Form.Button content='Search' />
                        </Form.Group>
                    </Form>
                </div>
                <div className="card">
                    <Card>
                        <Image width="50%" src={avatar} wrapped ui-={false} />
                        <Card.Content>
                        <Card.Header>Name: {name}</Card.Header>
                            <Card.Header>Github Id : @{userName}</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                {followers} Followers
                            </a>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                {repos} Repos
                            </a>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                {following} Following
                            </a>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        </div>
    )

}

export default GithubUserProfile;