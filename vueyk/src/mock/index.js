import Mock from 'mockjs'
import banner from './banner.json'
import data from './data.json'
import userData from './user.json'

Mock.mock('/api/banner', banner);

Mock.mock('/api/data', data);

Mock.mock('/api/login', ({ body }) => {
    let { name, password } = JSON.parse(body);
    let opt = {};
    userData.some(item => {
        if (item.name == name && item.password == password) {
            opt = {
                code: 0,
                msg: '登录成功'
            }
        } else {
            opt = {
                code: 1,
                msg: '登录失败'
            }
        }
    })
    return opt;
})