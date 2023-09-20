import request from '@/utils/request'
const API = {
  article_page: '/article/page',
  article_detail: '/article/detail',
  article_add: '/article/add',
  article_update: '/article/update',
  article_delete: '/article/delete',
  article_restore: '/article/restore',
  article_destroy: '/article/destroy',
}

// 查询
export const getArticlePage = (params) => request.get(API.article_page, {params})
// 详情
export const getArticleDetail = (params) => request.get(API.article_detail,{params})
// 新增
export const addArticle = (data) => request.post(API.article_add, data)
// 修改
export const updateArticle = (data) => request.post(API.article_update, data)
// 放入回收站
export const deleteArticle = (data) => request.post(API.article_delete, data)
// 移出回收站
export const restoreArticle = (data) => request.post(API.article_restore, data)
// 永久删除
export const destroyArticle = (data) => request.post(API.article_destroy, data)