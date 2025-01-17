import axios from "axios";
// import store from "@/store";


function try_post(body, url) {
    
    fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(() => {
            alert('Успешно')
        })
}

function try_delete(url){
    fetch(url, {
      method: 'DELETE'
    }).then(() => {
       alert('успешно удалили деку');
    }).catch(err => {
        alert(err)
    });
}


async function get(url) {
    let response = await axios.get(url)
    return response.data
}


async function post(url, body) {
    let response = await axios.post(url, body)
    return response.data
}

async function axios_delete(url) {
    let response = await axios.delete(url)
    return response.data
}


export { try_post, try_delete, get, post, axios_delete}
