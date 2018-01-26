import request from '@/utils/request'

export function fetchNewsList(query) {
  return request({
    url: '/policydocument',
    method: 'get',
    params: query
  })
}

export function fetchNoticeList(query) {
  return request({
    url: '/policydocument',
    method: 'get',
    params: query
  })
}

export function fetchPolicyList(query) {
  return request({
    url: '/policydocument',
    method: 'get',
    params: query
  })
}
