'use strict';

var _require = require('./../common/helper.js'),
    extractComponentId = _require.extractComponentId;

module.exports = {
  _handleZanFieldChange: function _handleZanFieldChange(event) {
    var componentId = extractComponentId(event);
    event.componentId = componentId;

    console.info('[zan:field:change]', event);

    if (this.handleZanFieldChange) {
      return this.handleZanFieldChange(event);
    }

    console.warn('页面缺少 handleZanFieldChange 回调函数');
  },
  _handleZanFieldFocus: function _handleZanFieldFocus(event) {
    var componentId = extractComponentId(event);
    event.componentId = componentId;

    console.info('[zan:field:focus]', event);

    if (this.handleZanFieldFocus) {
      return this.handleZanFieldFocus(event);
    }

    console.warn('页面缺少 handleZanFieldFocus 回调函数');
  },
  _handleZanFieldBlur: function _handleZanFieldBlur(event) {
    var componentId = extractComponentId(event);
    event.componentId = componentId;

    console.info('[zan:field:blur]', event);

    if (this.handleZanFieldBlur) {
      return this.handleZanFieldBlur(event);
    }

    console.warn('页面缺少 handleZanFieldBlur 回调函数');
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJleHRyYWN0Q29tcG9uZW50SWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX2hhbmRsZVphbkZpZWxkQ2hhbmdlIiwiZXZlbnQiLCJjb21wb25lbnRJZCIsImNvbnNvbGUiLCJpbmZvIiwiaGFuZGxlWmFuRmllbGRDaGFuZ2UiLCJ3YXJuIiwiX2hhbmRsZVphbkZpZWxkRm9jdXMiLCJoYW5kbGVaYW5GaWVsZEZvY3VzIiwiX2hhbmRsZVphbkZpZWxkQmx1ciIsImhhbmRsZVphbkZpZWxkQmx1ciJdLCJtYXBwaW5ncyI6Ijs7ZUFBK0JBLFFBQVEsa0JBQVIsQztJQUF2QkMsa0IsWUFBQUEsa0I7O0FBRVJDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsdUJBRGUsaUNBQ09DLEtBRFAsRUFDYztBQUMzQixRQUFNQyxjQUFjTCxtQkFBbUJJLEtBQW5CLENBQXBCO0FBQ0FBLFVBQU1DLFdBQU4sR0FBb0JBLFdBQXBCOztBQUVBQyxZQUFRQyxJQUFSLENBQWEsb0JBQWIsRUFBbUNILEtBQW5DOztBQUVBLFFBQUksS0FBS0ksb0JBQVQsRUFBK0I7QUFDN0IsYUFBTyxLQUFLQSxvQkFBTCxDQUEwQkosS0FBMUIsQ0FBUDtBQUNEOztBQUVERSxZQUFRRyxJQUFSLENBQWEsZ0NBQWI7QUFDRCxHQVpjO0FBY2ZDLHNCQWRlLGdDQWNNTixLQWROLEVBY2E7QUFDMUIsUUFBTUMsY0FBY0wsbUJBQW1CSSxLQUFuQixDQUFwQjtBQUNBQSxVQUFNQyxXQUFOLEdBQW9CQSxXQUFwQjs7QUFFQUMsWUFBUUMsSUFBUixDQUFhLG1CQUFiLEVBQWtDSCxLQUFsQzs7QUFFQSxRQUFJLEtBQUtPLG1CQUFULEVBQThCO0FBQzVCLGFBQU8sS0FBS0EsbUJBQUwsQ0FBeUJQLEtBQXpCLENBQVA7QUFDRDs7QUFFREUsWUFBUUcsSUFBUixDQUFhLCtCQUFiO0FBQ0QsR0F6QmM7QUEyQmZHLHFCQTNCZSwrQkEyQktSLEtBM0JMLEVBMkJZO0FBQ3pCLFFBQU1DLGNBQWNMLG1CQUFtQkksS0FBbkIsQ0FBcEI7QUFDQUEsVUFBTUMsV0FBTixHQUFvQkEsV0FBcEI7O0FBRUFDLFlBQVFDLElBQVIsQ0FBYSxrQkFBYixFQUFpQ0gsS0FBakM7O0FBRUEsUUFBSSxLQUFLUyxrQkFBVCxFQUE2QjtBQUMzQixhQUFPLEtBQUtBLGtCQUFMLENBQXdCVCxLQUF4QixDQUFQO0FBQ0Q7O0FBRURFLFlBQVFHLElBQVIsQ0FBYSw4QkFBYjtBQUNEO0FBdENjLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBleHRyYWN0Q29tcG9uZW50SWQgfSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9oZWxwZXInKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIF9oYW5kbGVaYW5GaWVsZENoYW5nZShldmVudCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50SWQgPSBleHRyYWN0Q29tcG9uZW50SWQoZXZlbnQpO1xyXG4gICAgZXZlbnQuY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcclxuXHJcbiAgICBjb25zb2xlLmluZm8oJ1t6YW46ZmllbGQ6Y2hhbmdlXScsIGV2ZW50KTtcclxuXHJcbiAgICBpZiAodGhpcy5oYW5kbGVaYW5GaWVsZENoYW5nZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVaYW5GaWVsZENoYW5nZShldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS53YXJuKCfpobXpnaLnvLrlsJEgaGFuZGxlWmFuRmllbGRDaGFuZ2Ug5Zue6LCD5Ye95pWwJyk7XHJcbiAgfSxcclxuXHJcbiAgX2hhbmRsZVphbkZpZWxkRm9jdXMoZXZlbnQpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudElkID0gZXh0cmFjdENvbXBvbmVudElkKGV2ZW50KTtcclxuICAgIGV2ZW50LmNvbXBvbmVudElkID0gY29tcG9uZW50SWQ7XHJcblxyXG4gICAgY29uc29sZS5pbmZvKCdbemFuOmZpZWxkOmZvY3VzXScsIGV2ZW50KTtcclxuXHJcbiAgICBpZiAodGhpcy5oYW5kbGVaYW5GaWVsZEZvY3VzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVphbkZpZWxkRm9jdXMoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUud2Fybign6aG16Z2i57y65bCRIGhhbmRsZVphbkZpZWxkRm9jdXMg5Zue6LCD5Ye95pWwJyk7XHJcbiAgfSxcclxuXHJcbiAgX2hhbmRsZVphbkZpZWxkQmx1cihldmVudCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50SWQgPSBleHRyYWN0Q29tcG9uZW50SWQoZXZlbnQpO1xyXG4gICAgZXZlbnQuY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcclxuXHJcbiAgICBjb25zb2xlLmluZm8oJ1t6YW46ZmllbGQ6Ymx1cl0nLCBldmVudCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFuZGxlWmFuRmllbGRCbHVyKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVphbkZpZWxkQmx1cihldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS53YXJuKCfpobXpnaLnvLrlsJEgaGFuZGxlWmFuRmllbGRCbHVyIOWbnuiwg+WHveaVsCcpO1xyXG4gIH1cclxufTtcclxuIl19