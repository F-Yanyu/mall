import axios from './axios'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeMultidata() {
  return axios({
    url: '/home/multidata'
  })
}

export function getHomeData(type, page) {
  return axios({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

// 示例：将数组中的数据添加进别的数组中
// let totalNums = []
// const num1 = [1, 2, 12, 1212, 2]
// const num2 = [22222, 2, 2, 2, 2, , 23]


// 方法一：遍历
// for (let n of num1) {
//   totalNums.push(n)
// }


// 方法二：...的形式push
// totalNums.push(...num1)//将数组中的每一项解析出来，一项一项提出来，加进目标数组
