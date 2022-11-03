import cookie from 'react-cookies'

//保存
function saveUser(user) {
    cookie.save('userInfo', user, { path: '/' })
}

//读取
function getUser() {
    return cookie.load('userInfo')
}

//删除
function deleteUser() {
    cookie.remove('userInfo')
}

export {saveUser, getUser, deleteUser};
