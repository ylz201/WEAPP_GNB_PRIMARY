'use strict';

var Switch = {
  _handleZanSwitchChange: function _handleZanSwitchChange(e) {
    var dataset = e.currentTarget.dataset;

    var checked = !dataset.checked;
    var loading = dataset.loading;
    var disabled = dataset.disabled;
    var componentId = dataset.componentId;

    if (loading || disabled) return;

    console.info('[zan:switch:change]', { checked: checked, componentId: componentId });

    if (this.handleZanSwitchChange) {
      this.handleZanSwitchChange({
        checked: checked,
        componentId: componentId
      });
    } else {
      console.warn('页面缺少 handleZanSwitchChange 回调函数');
    }
  }
};

module.exports = Switch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN3aXRjaCIsIl9oYW5kbGVaYW5Td2l0Y2hDaGFuZ2UiLCJlIiwiZGF0YXNldCIsImN1cnJlbnRUYXJnZXQiLCJjaGVja2VkIiwibG9hZGluZyIsImRpc2FibGVkIiwiY29tcG9uZW50SWQiLCJjb25zb2xlIiwiaW5mbyIsImhhbmRsZVphblN3aXRjaENoYW5nZSIsIndhcm4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVM7QUFDWEMsd0JBRFcsa0NBQ1lDLENBRFosRUFDZTtBQUN4QixRQUFJQyxVQUFVRCxFQUFFRSxhQUFGLENBQWdCRCxPQUE5Qjs7QUFFQSxRQUFJRSxVQUFVLENBQUNGLFFBQVFFLE9BQXZCO0FBQ0EsUUFBSUMsVUFBVUgsUUFBUUcsT0FBdEI7QUFDQSxRQUFJQyxXQUFXSixRQUFRSSxRQUF2QjtBQUNBLFFBQUlDLGNBQWNMLFFBQVFLLFdBQTFCOztBQUVBLFFBQUlGLFdBQVdDLFFBQWYsRUFBeUI7O0FBRXpCRSxZQUFRQyxJQUFSLENBQWEscUJBQWIsRUFBb0MsRUFBRUwsZ0JBQUYsRUFBV0csd0JBQVgsRUFBcEM7O0FBRUEsUUFBSSxLQUFLRyxxQkFBVCxFQUFnQztBQUM5QixXQUFLQSxxQkFBTCxDQUEyQjtBQUN6Qk4sd0JBRHlCO0FBRXpCRztBQUZ5QixPQUEzQjtBQUlELEtBTEQsTUFLTztBQUNMQyxjQUFRRyxJQUFSLENBQWEsaUNBQWI7QUFDRDtBQUNGO0FBckJVLENBQWI7O0FBd0JBQyxPQUFPQyxPQUFQLEdBQWlCZCxNQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTd2l0Y2ggPSB7XHJcbiAgX2hhbmRsZVphblN3aXRjaENoYW5nZShlKSB7XHJcbiAgICB2YXIgZGF0YXNldCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xyXG5cclxuICAgIHZhciBjaGVja2VkID0gIWRhdGFzZXQuY2hlY2tlZDtcclxuICAgIHZhciBsb2FkaW5nID0gZGF0YXNldC5sb2FkaW5nO1xyXG4gICAgdmFyIGRpc2FibGVkID0gZGF0YXNldC5kaXNhYmxlZDtcclxuICAgIHZhciBjb21wb25lbnRJZCA9IGRhdGFzZXQuY29tcG9uZW50SWQ7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcgfHwgZGlzYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zb2xlLmluZm8oJ1t6YW46c3dpdGNoOmNoYW5nZV0nLCB7IGNoZWNrZWQsIGNvbXBvbmVudElkIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmhhbmRsZVphblN3aXRjaENoYW5nZSkge1xyXG4gICAgICB0aGlzLmhhbmRsZVphblN3aXRjaENoYW5nZSh7XHJcbiAgICAgICAgY2hlY2tlZCxcclxuICAgICAgICBjb21wb25lbnRJZFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2Fybign6aG16Z2i57y65bCRIGhhbmRsZVphblN3aXRjaENoYW5nZSDlm57osIPlh73mlbAnKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN3aXRjaDtcclxuIl19