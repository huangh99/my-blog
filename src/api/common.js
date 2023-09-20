import request from '@/utils/request'
const API = {
  file_upload: '/file/upload'
}

// 新增
export const uploadFile = (file) => request.post(API.file_upload, file)