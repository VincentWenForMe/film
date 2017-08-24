import axios from 'axios';

const url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';

export default {
  getBannerList: function (cb) {
    axios.get(url + 'billboard/home?t=' + new Date() * 1 + '&callback=?').then(function (res) {
      if (res.status >= 200 && res.status < 300) {
        cb(res.data);
      }
    }).catch((error) => {
      return Promise.reject(error);
    })
  },
  getNowPlaying: (cb) => {
    axios.get(url + 'film/now-playing?_t=' + new Date() + '&page=1&count=5').then(
      (res) => {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data);
        }
      }
    ).catch((error) => {
      return Promise.reject(error);
    })
  },

  getComing: (cb) => {
    axios.get(url + 'film/coming-soon?_t=' + new Date() + '&page=1&count=3').then(
      (res) => {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data);
        }
      }
    ).catch((error) => {
      return Promise.reject(error);
    })
  },

  getFilmDetail: (id, cb) => {
    axios.get(url + 'film/' + id + '?__t' + new Date()).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        cb(res.data);
        console.log(res.data);
      }
    }).catch((error) => {
      return Promise.reject(error);
    })
  },

  getComingList: (page, cb) => {
    axios.get(url + 'film/coming-soon?_t=' + new Date() + '&count=7&page=' + page).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        cb(res.data);
      }
    }).catch((error) => {
      return Promise.reject(error);
    })
  },

  getNowPlayingList: (page, cb) => {
    axios.get(url + 'film/now-playing?page=' + page + '&count=7').then((res) => {
      if (res.status >= 200 && res.status < 300) {
        cb(res.data);
      }
    }).catch((error) => {
      return Promise.reject(error);
    })
  }
}
