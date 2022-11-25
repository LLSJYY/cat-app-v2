
const url = 'https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/'

export const API = {
  cats: (data) => fetch(
    `${url}${data ? data : ''}`, {
    method: 'GET',
  }
  ).then(res => res.json()),
}

