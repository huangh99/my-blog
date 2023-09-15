import request from '@/utils/request'
const API = {
  add_article: '/user/login',
  userinfo_url: '/user/info',
}

export const addArticle = (data) => request.post(API.add_article, data)