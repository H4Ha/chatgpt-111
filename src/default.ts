export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  systemRule: " (message) => {
    const keywords = ['你是谁', '谁发明了你'];
    if (message.toLowerCase().includes(keywords)) {
      return '我是ONEChatGPT，请问你需要什么帮助。';
    } else {
      return '';
    }
  }"
}

export const defaultMessage = `
- 由ONEChat提供支持。
- <kbd>Shift</kbd> + <kbd>Enter</kbd> 换行。开头输入 <kbd>/</kbd> 或者 <kbd>空格</kbd> 搜索 Prompt 预设。点击输入框滚动到底部。`
