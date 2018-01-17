'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'features/init/grade', 'features/init/workbook', 'workbook/want'],
      // tabBar: {
      //   color: "#7A7E83",
      //   selectedColor: "#3cc51f",
      //   borderStyle: "black",
      //   backgroundColor: "#ffffff",
      //   list: [{
      //     pagePath: "page/component/index",
      //     iconPath: "./common/resources/workbook.png",
      //     selectedIconPath: "./common/resources/workbook_select.png",
      //     text: "记错题"
      //   }, {
      //     pagePath: "page/API/index",
      //     iconPath: "./common/resources/statistics.png",
      //     selectedIconPath: "./common/resources/statistics_select.png",
      //     text: "错题本"
      //   }, {
      //     pagePath: "page/API/index",
      //     iconPath: "./common/resources/user.png",
      //     selectedIconPath: "./common/resources/user_select.png",
      //     text: "我的"
      //   }]
      // },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#FBFBFB',
        navigationBarTitleText: '错题归纳本小学数学',
        navigationBarTextStyle: 'black'
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
    // this.testAsync()


    // sleep (s) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve('promise resolved')
    //     }, s * 1000)
    //   })
    // }

    // async testAsync () {
    //   const data = await this.sleep(3)
    //   console.log(data)
    // }

  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUE2Q0Usc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQTFDZkEsTUEwQ2UsR0ExQ047QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxxQkFGSyxFQUdMLHdCQUhLLEVBS0wsZUFMSyxDQURBO0FBUVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFdBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQTlCRCxLQTBDTTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOzs7OytCQUVVLENBRVY7QUFEQzs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Z0NBRVlDLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS0osVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtJLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pILGVBQUtKLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCTSxJQUFJTixRQUEvQjtBQUNBRSxnQkFBTUEsR0FBR0ksSUFBSU4sUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBNUUwQixlQUFLTyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICdmZWF0dXJlcy9pbml0L2dyYWRlJyxcbiAgICAgICdmZWF0dXJlcy9pbml0L3dvcmtib29rJyxcblxuICAgICAgJ3dvcmtib29rL3dhbnQnXG4gICAgXSxcbiAgICAvLyB0YWJCYXI6IHtcbiAgICAvLyAgIGNvbG9yOiBcIiM3QTdFODNcIixcbiAgICAvLyAgIHNlbGVjdGVkQ29sb3I6IFwiIzNjYzUxZlwiLFxuICAgIC8vICAgYm9yZGVyU3R5bGU6IFwiYmxhY2tcIixcbiAgICAvLyAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy8gICBsaXN0OiBbe1xuICAgIC8vICAgICBwYWdlUGF0aDogXCJwYWdlL2NvbXBvbmVudC9pbmRleFwiLFxuICAgIC8vICAgICBpY29uUGF0aDogXCIuL2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2sucG5nXCIsXG4gICAgLy8gICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiLi9jb21tb24vcmVzb3VyY2VzL3dvcmtib29rX3NlbGVjdC5wbmdcIixcbiAgICAvLyAgICAgdGV4dDogXCLorrDplJnpophcIlxuICAgIC8vICAgfSwge1xuICAgIC8vICAgICBwYWdlUGF0aDogXCJwYWdlL0FQSS9pbmRleFwiLFxuICAgIC8vICAgICBpY29uUGF0aDogXCIuL2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljcy5wbmdcIixcbiAgICAvLyAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIuL2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljc19zZWxlY3QucG5nXCIsXG4gICAgLy8gICAgIHRleHQ6IFwi6ZSZ6aKY5pysXCJcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgcGFnZVBhdGg6IFwicGFnZS9BUEkvaW5kZXhcIixcbiAgICAvLyAgICAgaWNvblBhdGg6IFwiLi9jb21tb24vcmVzb3VyY2VzL3VzZXIucG5nXCIsXG4gICAgLy8gICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiLi9jb21tb24vcmVzb3VyY2VzL3VzZXJfc2VsZWN0LnBuZ1wiLFxuICAgIC8vICAgICB0ZXh0OiBcIuaIkeeahFwiXG4gICAgLy8gICB9XVxuICAgIC8vIH0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGQkZCRkInLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrOWwj+WtpuaVsOWtpicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyB0aGlzLnRlc3RBc3luYygpXG4gIH1cblxuICAvLyBzbGVlcCAocykge1xuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gIC8vICAgICB9LCBzICogMTAwMClcbiAgLy8gICB9KVxuICAvLyB9XG5cbiAgLy8gYXN5bmMgdGVzdEFzeW5jICgpIHtcbiAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIC8vIH1cblxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgIH1cbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==