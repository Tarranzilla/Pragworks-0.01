/* Exemplos de Variáveis interessantes de se trabalhar e coletar em cookies */

/* Session Cookies */
let session_id = "AAAA0000";
let session_date = "5 de fevereiro de 2023, 04:50:00 UTC";
let session_date_last_visit = "3 de fevereiro de 2023, 09:00:00 UTC";
let session_geolocation =
    "Curitiba, Paraná, Brasil | Latitude: -25.4284 | Longitude: -49.2733";
let session_lgpd_consent = "true";
let session_darkmode = "true";
let session_layoutMode = "simple";

/* User Cookies */
let user_id = "00000000";
let user_name = "Tarran";
let user_password = "123456789";
let user_password_hash = "123456789";
let user_email = "joaotarran@gmail.com";
let user_cookie_preferences =
    "all"; /* all, none, marketing, analytics, social, functional */

/* Cookie Presets */
let cookie01_name = "general_config";
let cookie01_value = "test123";

/* ----------------------------------------------------------------------------------- */

/* Três Funções Utilitárias / Set, Get e Delete (Testar) */

/* Domain, Path, Expires/Max-age, Secure, SameSite, SameParty */
/* Atualizar para Max-age */
function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
        cname +
        "=" +
        cvalue +
        ";" +
        expires +
        ";path=/; samesite=strict; secure";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";"); /* Decoded Cookies Array */
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/* Expires está depreciado, usar Max-age = segundos */
function eraseCookie(cname) {
    document.cookie =
        cname + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

/*

Funções de Hash e Salt para Criptografia de Dados (Testar)
Funções de Data e Hora para Coleta de Dados (Testar)
Funções de geração de ID para Coleta de Dados (Testar)

import random
import string
import datetime
import hashlib

 */

function makeSalt(length) {
    let result = "";
    let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    console.log(result + " is the random salt");
    return result;
}

function makeID(length) {
    let result = "";
    let characters = "0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    console.log(result + " is the random ID");
    return result;
}

/* new Date().toGMTString() */
function getCurrentDate() {
    let currentDate = new Date().toGMTString();
    console.log(currentDate);
    return currentDate;
}

function makeHash(username, password, salt = null) {
    if (!salt) {
        makeSalt();
    }

    let string = username + password + salt;
    let hash = hashlib.sha256(string).hexdigest();
    console.log(hash + " | " + salt);
    return hash + " | " + salt;
}

makeHash("Tarran", "123456789");

function verifyHash(username, password, hash) {
    let salt = hash.split(" | ")[1];
    let newHash = makeHash(username, password, salt);
    if (newHash == hash) {
        console.log("Hashes are equal");
        return true;
    } else {
        console.log("Hashes are not equal");
        return false;
    }
}
