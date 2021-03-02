import Mock from 'mockjs'

// Mock.mock('/api/login',{
//   "code":0,
//   "data":{
//     "id | 66-88": 6,
//     "name": "wuzhi",
//     "email": "ninhao@qq.com"
//   }
// })

Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|10001-11000": 0,
    "username": "@cname",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
});

let data = Mock.mock({
  "data|1-16":0
})

console.log(data)