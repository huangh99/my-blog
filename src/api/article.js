import request from '@/utils/request'
const API = {
  article_page: '/article/page',
  article_add: '/article/add',
}

// 查询
export const getArticlePage = (data) => request.get(API.article_page, data)
// 新增
export const addArticleInfo = (data) => request.post(API.article_add, data)