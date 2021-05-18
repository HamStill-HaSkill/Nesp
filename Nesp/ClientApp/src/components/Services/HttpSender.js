import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import News from '../News/News';
import Login from '../Auth/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from '../Auth/Register';

const url = "/api/subs";
const userUrl = "/api/users";
const authUrl = "/api/users/token";
const outUrl = "/api/users/logout";
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

const HTTP = () => {
    let [news, setNews] = useState([]);
    let [subs, setSubs] = useState([]);
    let getRSS = (target) => {
        axios.post(url + "/rss", {name: target}).then(result => {
            console.log(result);
            let newsNotes = [];
            result.data.forEach(e => {
                newsNotes.push({
                    description: e.summary.text,
                    title: e.title.text,
                    link: e.id,
                })
            });
            setNews(newsNotes);
        });
    }

    let addRSS = (name, link) => {
        let username = localStorage.getItem("username");
        axios.post(url + "/addrss", {name, url: link, username});
        getAllSub();
        getAllSub();
    }

    let getAllSub = () => {
        let username = localStorage.getItem("username");
        axios.post(url + "/all", {username}).then(result => {
            setSubs(result.data);
            console.log(result.data);
        });
    }

    let signIn = (username, password, setSignIn) => {   
        let body = { username: username, password: password };
        axios.post(authUrl, body, {
            withCredentials: true
        }).then(response => {
            response && localStorage.setItem("username", username);
        }).catch(reason => {
            if (reason.response.status === 401) {
                console.log(reason.message);
            } else {
                console.log(reason.message);
            }
          })
        getAllSub();
    }

    let unSub = (name) => {
        let username = localStorage.getItem("username");
        axios.post(url + "/delrss", {name, username});
        getAllSub();
        getAllSub();
    }
    let check = (setSignIn) => {
        axios.post(url + "/all", {username: ""}).then(response => {
            response && setSignIn(true, localStorage.getItem("username"));
        });
    }
    let logout = (setSignIn) => {
        axios.get(outUrl);
        setSignIn(false, "")
    }
    let register = (username, password) => {
        let data = {username: username, password: password}
        axios.post(userUrl + "/register", data);
    }

    useEffect(() => {
        getAllSub();
    }, [])
    return (
        <BrowserRouter basename={baseUrl}>
            <Layout addRSS={addRSS} getRSS={getRSS} unSub={unSub} subs={subs} />
            <News news={news}/>
            <Route exact path="/login" component={() => <Login login={signIn} />} />
            <Route exact path="/register" component={() => <Register register={register} />} />
        </BrowserRouter>
    )
}

export default HTTP;