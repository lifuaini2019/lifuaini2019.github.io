"use strict";
(function ($) {
// Write your custom JavaScript code here.


})(jQuery);

// 添加复制按钮
var copyButton = document.createElement('button');
copyButton.className = 'copy-button'; // 添加样式类，用于样式设置
copyButton.textContent = '一键复制代码'; // 设置按钮文本为中文

// 将按钮添加到代码块后面
codeBlock.parentNode.insertBefore(copyButton, codeBlock.nextSibling);
