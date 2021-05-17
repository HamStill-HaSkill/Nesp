import axios from 'axios';
import React from 'react';
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
    let getRSS = (from) => {
        let target = "Tut.by"
        axios.post(url + "/rss", {target}).then(result => console.log(result));
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
    getRSS()
    return (
        <BrowserRouter basename={baseUrl}>
            <Layout />
            <News />
            <Route exact path="/login" component={() => <Login login={signIn} />} />
            <Route exact path="/register" component={() => <Register register={register} />} />
        </BrowserRouter>
    )
}

export default HTTP;