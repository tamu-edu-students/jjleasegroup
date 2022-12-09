import cookie from "react-cookies";

export type UserInfo = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};

//保存
function saveUser(userInfo: UserInfo) {
  cookie.save("userInfo", userInfo, { path: "/" });
}

//读取
function getUser(): UserInfo | undefined {
  return cookie.load("userInfo");
}

//删除
function deleteUser() {
  cookie.remove("userInfo");
}

export { saveUser, getUser, deleteUser };
