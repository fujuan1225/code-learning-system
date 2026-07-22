// ===== Course Data =====
// Will be assembled from base + weekly content files
// This file contains: JOKES, ACHIEVEMENTS, and COURSE_DATA placeholder

const JOKES = [
    { q: '程序员为什么分不清万圣节和圣诞节？', a: '因为 Oct 31 == Dec 25（八进制31 = 十进制25）🎃🎄' },
    { q: '世界上最长的英文单词是什么？', a: 'smiles —— 因为首字母和末字母之间隔了一英里（mile）📏' },
    { q: '为什么程序员总是把房间搞得很冷？', a: '因为他们到处放"风扇"（fan）❄️🤓' },
    { q: 'HTML 对 CSS 说了什么？', a: '"你真是太有型了！" 💅✨' },
    { q: '一个 div 标签走进酒吧，酒保问：你想坐哪？', a: 'div 说：随便，我自带盒子（box）📦' },
    { q: '为什么网页设计师从来不觉得孤独？', a: '因为他们身边总有一堆"元素"（elements）🫂' },
    { q: '0 对 8 说了什么？', a: '"你系腰带干嘛？"（0看8像是系了腰带的0）👖' },
    { q: '为什么 <img> 标签没有朋友？', a: '因为它从来不会主动"链接"别人，只会静静待着 🖼' },
    { q: '两个程序员吵架了，最后怎么和好的？', a: '其中一个说了句"对不起，是我bug了"，另一个回了句"没事，我accept" 🤝' },
    { q: 'JavaScript 为什么不喜欢和 CSS 一起玩？', a: '因为 CSS 总是觉得自己更有"样式"（style）💁' },
    { q: '什么动物最会编程？', a: '蜘蛛——它们最会写"网"页（web）🕷️🌐' },
    { q: '为什么电脑从来不觉得饿？', a: '因为它们有很多"字节"（bytes/bites）🍪' },
    { q: '一个 <a> 标签对 <img> 标签说了什么？', a: '"跟我走吧，我带你去更好的地方！"（href）🚪' },
    { q: '程序员最怕什么季节？', a: '秋天——因为到处都是 bug（虫子）🍂🐛' },
    { q: '为什么程序员总是把代码写到半夜？', a: '因为白天总有太多"弹窗"打扰他们（alert）⏰' },
    { q: '两个网站吵架，谁赢了？', a: '谁也没赢，因为它们"404"了（not found）🤷' },
    { q: '一个按钮对一个输入框说了什么？', a: '"别紧张，我会替你提交（submit）的！" 📝' },
    { q: '为什么程序员不喜欢坐电梯？', a: '因为电梯太像一个"循环"（loop）了，进去出来还在原地 🔄' },
    { q: '一个标签对它的 class 属性说了什么？', a: '"你今天穿的什么名牌？" 👗' },
    { q: '浏览器对服务器说了什么？', a: '"你好，请给我一个响应（response）！" 服务器："200 OK ✅"' },
];

const ACHIEVEMENTS = [
    { id: 'first_day', icon: '🌱', name: '迈出第一步', desc: '完成第一天的学习' },
    { id: 'first_week', icon: '📗', name: '第一周达成', desc: '完成一整周的学习' },
    { id: 'perfect_quiz', icon: '💯', name: '满分测验', desc: '获得一次测验满分' },
    { id: 'streak_3', icon: '🔥', name: '三天打鱼', desc: '连续学习3天' },
    { id: 'streak_7', icon: '⚡', name: '一周坚持', desc: '连续学习7天' },
    { id: 'half_way', icon: '🏔', name: '半途而废？不！', desc: '完成20天学习（一半了！）' },
    { id: 'all_done', icon: '👑', name: '毕业典礼', desc: '完成全部8周课程' },
    { id: 'ten_correct', icon: '⭐', name: '十题全对', desc: '累计答对10道题' },
    { id: 'thirty_correct', icon: '🌟', name: '三十而立', desc: '累计答对30道题' },
    { id: 'hundred_correct', icon: '💎', name: '百分学霸', desc: '累计答对100道题' },
];

// Course data - will be filled by weekly content
const COURSE_DATA = { weeks: [] };
