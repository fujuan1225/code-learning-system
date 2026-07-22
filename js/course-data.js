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
// ===== Assembled Course Data =====
const COURSE_DATA_WEEKS = [
  // Weeks 1-2: HTML
  ...[
  {
    topic: "HTML基础（上）",
    days: [
      // ==================== WEEK 1 - DAY 1 ====================
      {
        title: "Day 1：什么是HTML？",
        desc: "了解网页的基本结构和HTML的作用",
        cards: [
          {
            tag: "🏷 概念",
            title: "HTML 是网页的骨架",
            explain: "HTML 的全称是<strong>超文本标记语言</strong>（HyperText Markup Language）。<br>它是网页的「骨架」，告诉浏览器每个部分是什么——哪里是标题、哪里是正文、哪里是图片。<br>所有你在浏览器里看到的网页，底层都是 HTML。",

            code: '<span class="comment">&lt;!-- 这就是一个最简单的 HTML 页面 --&gt;</span><br><span class="tag">&lt;h1&gt;</span><span class="text">你好，世界！</span><span class="tag">&lt;/h1&gt;</span>',
            analogy: "就像建房子要先搭好钢筋骨架，再做装修一样，HTML 就是网页的钢筋骨架，浏览器根据骨架来「装修」显示效果。"

          },
          {
            tag: "🏷 概念",
            title: "标签（Tag）是什么？",
            explain: "HTML 用<strong>标签</strong>来标记内容。标签就像「三明治」：有开始标签（<strong>&lt;h1&gt;</strong>）、内容（<strong>文字</strong>）、结束标签（<strong>&lt;/h1&gt;</strong>）。<br>斜杠<strong>/</strong>表示「结束」，告诉浏览器到这里标签就关上了。<br>每个标签都有特定的含义，比如 &lt;h1&gt; 表示「最大标题」。",

            code: '<span class="tag">&lt;h1&gt;</span><span class="text">我是大标题</span><span class="tag">&lt;/h1&gt;</span><br><span class="tag">&lt;p&gt;</span><span class="text">我是一个段落</span><span class="tag">&lt;/p&gt;</span>',
            analogy: "想象你在整理衣柜：你会用不同的收纳盒来分类——衣服放一个盒子、袜子放一个盒子。HTML 标签就是这些「收纳盒」，每种类别对应一个标签，帮你把内容整理好。"

          },
          {
            tag: "💻 实战",
            title: "写你的第一个网页",
            explain: "现在我们来写第一个网页！新建一个文件叫<strong>index.html</strong>，把下面的代码粘贴进去，然后用<strong>浏览器打开</strong>（双击文件就行）。<br>你会看到「你好世界」以大字显示在页面顶部。<br>这就是你写的第一行代码！🎉",

            code: '<span class="tag">&lt;h1&gt;</span><span class="text">你好世界</span><span class="tag">&lt;/h1&gt;</span><br><span class="tag">&lt;p&gt;</span><span class="text">这是我的第一个网页！</span><span class="tag">&lt;/p&gt;</span>',
            tip: "小提示：文件后缀名必须是 <strong>.html</strong>，这样浏览器才知道这是个网页文件。就像照片文件后缀是 .jpg 一样！"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "HTML 的全称是什么？",
            options: ["Hyper Transfer Markup Language", "HyperText Markup Language", "High Tech Modern Language"],
            answer: "HyperText Markup Language",
            explanation: "HTML 全称是 HyperText Markup Language（超文本标记语言）。HyperText 表示可以互相链接的文本，Markup Language 表示用来标记内容的语言。"
          },
          {
            type: "选择题",
            question: "下面哪个是 HTML 标签的正确写法？",
            options: ["<h1 标题</h1>", "<h1>标题</h1>", "h1>标题</h1"],
            answer: "<h1>标题</h1>",
            explanation: "HTML 标签的正确格式是：开始标签 <h1> + 内容 + 结束标签 </h1>。开始和结束标签都要用尖括号完整包裹。"
          },
          {
            type: "找错题",
            question: "下面代码中 &lt;h2&gt; 标签有什么问题？",
            code: '<span class="tag">&lt;h1&gt;</span><span class="text">标题</span><span class="tag">&lt;/h1&gt;</span><br><span class="tag">&lt;h2&gt;</span><span class="text">小标题</span>',
            options: ["h2 标签不能用在 h1 后面", "h2 标签缺少结束标签 </h2>", "代码完全正确没有问题"],
            answer: "h2 标签缺少结束标签 </h2>",
            explanation: "每个 HTML 标签都需要有对应的结束标签（带 / 的那个）。这里的 <h2> 缺少 </h2> 来关闭它，浏览器会不知道到哪里结束。"
          }
        ]
      },

      // ==================== WEEK 1 - DAY 2 ====================
      {
        title: "Day 2：标题和段落",
        desc: "学习 h1-h6 标题、p 段落、br 换行、hr 分割线",
        cards: [
          {
            tag: "📝 标签",
            title: "标题标签 h1 ~ h6",
            explain: "HTML 提供了 <strong>6 级标题</strong>，从 h1（最大）到 h6（最小）。<br>h1 是页面的主标题，一个页面通常<strong>只有一个 h1</strong>。<br>h2-h6 用于子标题，层级越深数字越大，就像文章的一级标题、二级标题一样。",
            code: '<span class="tag">&lt;h1&gt;</span><span class="text">一级标题（最大）</span><span class="tag">&lt;/h1&gt;</span><br><span class="tag">&lt;h2&gt;</span><span class="text">二级标题</span><span class="tag">&lt;/h2&gt;</span><br><span class="tag">&lt;h3&gt;</span><span class="text">三级标题</span><span class="tag">&lt;/h3&gt;</span>',
            analogy: "就像你写报告时的标题层级：一级标题是大章节（如「市场分析」），二级标题是小节（如「用户画像」），三级标题是更细的分点。HTML 的 h1-h6 就是这种层级关系。",

            tip: "做数据看板时，看板的主名称用 h1，每个模块的标题用 h2 或 h3，这样结构清晰，也方便屏幕阅读器理解。"
          },
          {
            tag: "📝 标签",
            title: "段落 p 和换行 br",
            explain: "<strong>&lt;p&gt;</strong> 标签用来标记一个段落，浏览器会自动在段落之间留出间距。<br><strong>&lt;br&gt;</strong> 标签用来在段落内<strong>强制换行</strong>（它是自闭合标签，不需要结束标签）。<br>段落和换行的区别：段落是「另一个话题」，换行只是「另起一行」。",

            code: '<span class="tag">&lt;p&gt;</span><span class="text">这是第一段文字。</span><span class="tag">&lt;/p&gt;</span><br><span class="tag">&lt;p&gt;</span><span class="text">这是第二段文字，</span><span class="tag">&lt;br&gt;</span><span class="text">这里强制换了一行。</span><span class="tag">&lt;/p&gt;</span>',
            analogy: "想象你在写一封信：每换一个话题就另起一个段落（用 &lt;p&gt;），同一个话题内想换行就用 &lt;br&gt;。就像微信聊天中换行和发新消息的区别。"
          },
          {
            tag: "📝 标签",
            title: "分割线 hr",
            explain: "<strong>&lt;hr&gt;</strong> 标签在页面上画一条水平线，用来<strong>视觉上分隔</strong>不同部分的内容。<br>它也是<strong>自闭合标签</strong>，不需要结束标签。<br>常用于分隔文章的不同段落或页面中的不同区块。",
            code: '<span class="tag">&lt;p&gt;</span><span class="text">上半部分内容</span><span class="tag">&lt;/p&gt;</span><br><span class="tag">&lt;hr&gt;</span><br><span class="tag">&lt;p&gt;</span><span class="text">下半部分内容</span><span class="tag">&lt;/p&gt;</span>',
            analogy: "就像你在笔记本上画一条线，把左右两边的内容分开。或者像你刷短视频时，上下滑一下，就是换到了另一个内容——hr 就是那条分界线。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "一个网页中一般应该有几个 &lt;h1&gt; 标签？",
            options: ["可以有无限多个", "0 个", "1 个"],
            answer: "1 个",
            explanation: "按照网页最佳实践，一个页面应该只有一个 h1 标签，表示页面的主标题。多个 h1 会让搜索引擎和屏幕阅读器困惑，不知道哪个才是真正的页面主题。"
          },
          {
            type: "找错题",
            question: "下面代码有什么问题？",
            code: '<span class="tag">&lt;p&gt;</span><span class="text">第一段文字。</span><span class="text">第二段文字。</span><span class="tag">&lt;/p&gt;</span>',
            options: ["p 标签不能包含两个 span", "两段文字应该分成两个 p 标签", "代码完全正确"],
            answer: "两段文字应该分成两个 p 标签",
            explanation: "虽然浏览器不会报错，但从语义上来说，两段不同的文字应该用两个独立的 &lt;p&gt; 标签包裹。这样浏览器会自动添加段落间距，代码也更清晰易读。"
          },
          {
            type: "选择题",
            question: "下面哪个标签是自闭合的（不需要结束标签）？",
            options: ["&lt;p&gt;", "&lt;h2&gt;", "&lt;br&gt;"],
            answer: "&lt;br&gt;",
            explanation: "&lt;br&gt; 是自闭合标签，它只表示一个换行动作，不需要包裹内容，所以不需要结束标签。而 &lt;p&gt; 和 &lt;h2&gt; 都是成对出现的标签。"
          }
        ]
      },

      // ==================== WEEK 1 - DAY 3 ====================
      {
        title: "Day 3：图片和链接",
        desc: "学习 img 标签（src/alt）、a 标签（href）、图片与链接的组合",
        cards: [
          {
            tag: "🖼️ 标签",
            title: "图片标签 img",
            explain: "<strong>&lt;img&gt;</strong> 标签用来在网页中插入图片，它是<strong>自闭合标签</strong>。<br>它有两个重要属性：<strong>src</strong>（图片路径）和 <strong>alt</strong>（替代文字）。<br>alt 文字在图片加载失败时显示，对视障用户和搜索引擎都很重要。",
            code: '<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="val">"photo.jpg"</span> <span class="attr">alt</span>=<span class="val">"产品封面图"</span><span class="tag">&gt;</span>',
            analogy: "就像你在淘宝发商品图片——src 是「图片文件在哪里」，alt 是「如果图片加载不出来，告诉用户这是什么」。alt 就像商品的文字描述，图片坏了用户也能知道。",

            tip: "做数据看板时，图表的截图也要加 alt 描述，比如 alt=「2024年Q1各渠道投放ROI对比柱状图」，这样更专业！"

          },
          {
            tag: "🔗 标签",
            title: "链接标签 a",
            explain: "<strong>&lt;a&gt;</strong> 标签创建一个超链接，点击后可以跳转到另一个页面。<br><strong>href</strong> 属性指定跳转的目标地址。<br>链接文字写在开始和结束标签之间，用户看到的就是这段文字。",
            code: '<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="val">"https://example.com"</span><span class="tag">&gt;</span><span class="text">点击查看看板</span><span class="tag">&lt;/a&gt;</span>',
            analogy: "a 标签就像快递单上的收件地址——href 告诉浏览器「送到哪里去」，而标签中间的文字就是你看到的「快递单」上写的字。点一下就「发货」了！"

          },
          {
            tag: "💡 组合",
            title: "点击图片跳转",
            explain: "你可以把<strong>&lt;img&gt;</strong> 放在 <strong>&lt;a&gt;</strong> 标签里面，这样就变成了一个<strong>可点击的图片链接</strong>。<br>点击图片就会跳转到 href 指定的地址。<br>这在电商和看板中很常见：点击商品图片进入商品详情，点击图表进入详细数据页。",
            code: '<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="val">"https://example.com/product"</span><span class="tag">&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="val">"product.jpg"</span> <span class="attr">alt</span>=<span class="val">"商品图片"</span><span class="tag">&gt;</span><br><span class="tag">&lt;/a&gt;</span>',
            analogy: "就像在朋友圈里看到一张商品图，点一下就直接跳到购买页面——这就是图片链接的效果。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "img 标签中，哪个属性用来写图片的替代文字？",
            options: ["title", "alt", "src"],
            answer: "alt",
            explanation: "alt 属性（alternate text）提供图片的替代文字描述。当图片无法加载时，用户能看到这段文字。这对可访问性非常重要。src 是图片路径，title 是鼠标悬停时的提示文字。"
          },
          {
            type: "找错题",
            question: "下面代码有什么问题？",
            code: '<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="val">"banner.jpg"</span><span class="tag">&gt;&lt;/img&gt;</span>',
            options: ["src 的值应该用单引号", "img 是自闭合标签，不应该有 </img>", "banner.jpg 应该写成完整网址"],
            answer: "img 是自闭合标签，不应该有 </img>",
            explanation: "img 标签是自闭合的，写法是 &lt;img src=\「...\」 alt=\「...\」&gt; 即可，不需要也不应该有 </img> 结束标签。这是初学者最容易犯的错误之一。"

          },
          {
            type: "选择题",
            question: "想让链接在新窗口打开，需要添加哪个属性？",
            options: ["target=\"_blank\"", "new=\"true\"", "open=\"window\""],
            answer: "target=\「_blank\」",

            explanation: "target=\「_blank\」 告诉浏览器在新的标签页中打开链接。_blank 是一个特殊值，意思是「空白新页」。在做看板时，外部链接建议用这个属性，这样用户不会离开当前看板页面。"

          }
        ]
      },

      // ==================== WEEK 1 - DAY 4 ====================
      {
        title: "Day 4：列表",
        desc: "学习 ul 无序列表、ol 有序列表、li 列表项、列表嵌套",
        cards: [
          {
            tag: "📋 标签",
            title: "无序列表 ul + li",
            explain: "<strong>&lt;ul&gt;</strong>（unordered list）创建一个<strong>带圆点的项目列表</strong>。<br>列表中的每一项用 <strong>&lt;li&gt;</strong>（list item）包裹。<br>适用于没有顺序要求的内容，比如功能特点、产品卖点、看板指标清单。",
            code: '<span class="tag">&lt;ul&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;li&gt;</span><span class="text">播放量</span><span class="tag">&lt;/li&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;li&gt;</span><span class="text">点赞数</span><span class="tag">&lt;/li&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;li&gt;</span><span class="text">转发量</span><span class="tag">&lt;/li&gt;</span><br><span class="tag">&lt;/ul&gt;</span>',
            analogy: "就像你打开购物 APP 看到商品特性列表：带圆点的 bullet point 一条条列出来，没有先后顺序。ul 就是这个圆点列表的容器。"
          },
          {
            tag: "📋 标签",
            title: "有序列表 ol + li",
            explain: "<strong>&lt;ol&gt;</strong>（ordered list）创建一个<strong>带编号的有序列表</strong>。<br>每一项同样用 <strong>&lt;li&gt;</strong> 包裹。<br>适用于有先后顺序的内容：操作步骤、排行榜、流程说明。",
            code: '<span class="tag">&lt;ol&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;li&gt;</span><span class="text">打开飞书看板</span><span class="tag">&lt;/li&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;li&gt;</span><span class="text">选择数据源</span><span class="tag">&lt;/li&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;li&gt;</span><span class="text">点击生成报表</span><span class="tag">&lt;/li&gt;</span><br><span class="tag">&lt;/ol&gt;</span>',
            analogy: "就像菜谱上的步骤：第一步、第二步、第三步...顺序很重要，不能颠倒。ol 自动帮你加上编号，不用手动写 1. 2. 3.。"
          },
          {
            tag: "💡 进阶",
            title: "列表嵌套",
            explain: "列表可以<strong>嵌套</strong>：在一个 &lt;li&gt; 内部再放一个 &lt;ul&gt; 或 &lt;ol&gt;。<br>这样就形成了<strong>多级子列表</strong>，适合有层级关系的内容。<br>嵌套层数不要太深（建议最多 3 层），否则代码会变得混乱。",
            code: '<span class="tag">&lt;ul&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;li&gt;</span><span class="text">抖音</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;ul&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;li&gt;</span><span class="text">播放量</span><span class="tag">&lt;/li&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;li&gt;</span><span class="text">互动率</span><span class="tag">&lt;/li&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/ul&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;/li&gt;</span><br><span class="tag">&lt;/ul&gt;</span>',
            analogy: "就像整理文件夹：大文件夹（抖音）里面有子文件夹（播放量、互动率）。嵌套列表就是这种父子层级关系。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "ul 和 ol 的区别是什么？",
            options: ["ul 有编号，ol 是圆点", "ul 是圆点列表，ol 是编号列表", "它们完全一样，只是名字不同"],
            answer: "ul 是圆点列表，ol 是编号列表",
            explanation: "ul（unordered list）显示为圆点项目符号，适合无序内容；ol（ordered list）显示为数字编号 1. 2. 3.，适合有序内容。它们都用 li 来表示列表项。"
          },
          {
            type: "找错题",
            question: "下面代码有什么问题？",
            code: '<span class="tag">&lt;ul&gt;</span><br>&nbsp;&nbsp;<span class="text">苹果</span><br>&nbsp;&nbsp;<span class="text">香蕉</span><br>&nbsp;&nbsp;<span class="text">橘子</span><br><span class="tag">&lt;/ul&gt;</span>',
            options: ["ul 里面必须用 li 包裹每一项", "水果应该用 ol 而不是 ul", "ul 不能直接包含文字"],
            answer: "ul 里面必须用 li 包裹每一项",
            explanation: "ul（和 ol）的直接子元素必须是 li。文字不能直接放在 ul 里面，每条内容都要用 &lt;li&gt;...&lt;/li&gt; 包裹，这样浏览器才知道哪里是一列表项。"
          },
          {
            type: "选择题",
            question: "做一个「三步操作指南」应该用哪个标签？",

            options: ["&lt;ul&gt;（无序列表）", "&lt;ol&gt;（有序列表）", "&lt;p&gt;（段落）"],
            answer: "&lt;ol&gt;（有序列表）",
            explanation: "操作指南有明确的先后顺序（第一步、第二步、第三步），所以应该用 ol 有序列表。ol 会自动显示编号 1. 2. 3.，让读者清楚步骤的先后关系。"
          }
        ]
      },

      // ==================== WEEK 1 - DAY 5 ====================
      {
        title: "Day 5：表单入门",
        desc: "学习 input（text/password）、button、label、表单组合",
        cards: [
          {
            tag: "📝 标签",
            title: "输入框 input",
            explain: "<strong>&lt;input&gt;</strong> 是表单中最常用的标签，用来<strong>接收用户输入</strong>。<br>通过 <strong>type</strong> 属性可以切换不同类型：<strong>text</strong>（文字输入）、<strong>password</strong>（密码输入，内容会变圆点隐藏）。<br>它也是自闭合标签。",
            code: '<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"text"</span> <span class="attr">placeholder</span>=<span class="val">"请输入名字"</span><span class="tag">&gt;</span><br><span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"password"</span> <span class="attr">placeholder</span>=<span class="val">"请输入密码"</span><span class="tag">&gt;</span>',
            analogy: "input 就像表格里的填空栏——type=\「text\」 是普通填空，type=\「password\」 是密码填空（输入的字会变成 ****** 隐藏起来）。placeholder 是灰色的提示文字，像表格里预先印好的「请填写___」。",

            tip: "placeholder 是「占位文字」，用户输入后会自动消失。它的作用是提示用户这里应该填什么内容。"

          },
          {
            tag: "🔘 标签",
            title: "按钮 button",
            explain: "<strong>&lt;button&gt;</strong> 创建一个可点击的按钮。<br>按钮上显示的文字写在开始和结束标签之间。<br>按钮通常和表单配合使用：用户填完信息后点击按钮提交。",
            code: '<span class="tag">&lt;button&gt;</span><span class="text">提交</span><span class="tag">&lt;/button&gt;</span>',
            analogy: "就像微信发语音时那个「按住说话」的按钮——点一下就会触发一个动作。在网页里，button 通常用来提交表单、打开弹窗、加载更多内容。"

          },
          {
            tag: "🏷 标签",
            title: "标签 label",
            explain: "<strong>&lt;label&gt;</strong> 用来给表单元素添加<strong>文字说明</strong>。<br>当 label 的 <strong>for</strong> 属性和 input 的 <strong>id</strong> 相同时，点击文字也能聚焦到输入框。<br>这对用户体验和无障碍访问非常重要。",
            code: '<span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="val">"name"</span><span class="tag">&gt;</span><span class="text">姓名：</span><span class="tag">&lt;/label&gt;</span><br><span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"text"</span> <span class="attr">id</span>=<span class="val">"name"</span><span class="tag">&gt;</span>',
            analogy: "label 就像纸质表格上打印的「姓名：」「电话：」「这些提示文字——告诉你每一栏该填什么。而且用了 label 后，点击文字就能激活输入框，不用精确点那个小框框，更方便！"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "input 标签中，哪个属性让输入内容变成密码（显示为圆点）？",
            options: ["type=\"hidden\"", "type=\"password\"", "type=\"secret\""],
            answer: "type=\「password\」",

            explanation: "type=\「password\」 会让用户输入的内容显示为圆点或星号，保护隐私。type=\「hidden\」 是完全隐藏输入框（用户看不到），type=\「secret\」 不是有效的值。"

          },
          {
            type: "选择题",
            question: "label 的 for 属性应该和 input 的哪个属性值相同？",
            options: ["name", "id", "class"],
            answer: "id",
            explanation: "label 的 for 属性需要和对应 input 的 id 属性值完全一致，这样浏览器才知道哪个 label 对应哪个输入框。点击 label 文字时，对应的 input 就会获得焦点。"
          },
          {
            type: "找错题",
            question: "下面代码有什么问题？",
            code: '<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"text"</span><span class="tag">&gt;</span><span class="tag">&lt;/input&gt;</span>',
            options: ["input 不需要结束标签 </input>", "type 的值应该大写", "text 应该改成 textarea"],
            answer: "input 不需要结束标签 </input>",
            explanation: "input 是自闭合标签，就像 img 和 br 一样，不需要也不能有结束标签。正确的写法是 &lt;input type=\「text\」&gt; 或者 &lt;input type=\「text\」 /&gt;。"

          }
        ]
      }
    ]
  },

  // ==========================================
  // WEEK 2: HTML基础（下）
  // ==========================================
  {
    topic: "HTML基础（下）",
    days: [
      // ==================== WEEK 2 - DAY 1 ====================
      {
        title: "Day 1：div 和 span",
        desc: "学习 div 块级容器、span 行内容器、class 和 id 属性",
        cards: [
          {
            tag: "📦 标签",
            title: "div 块级容器",
            explain: "<strong>&lt;div&gt;</strong> 是一个<strong>块级容器</strong>，用来把一组相关内容「打包」在一起。<br>每个 div 默认会独占一行（像积木块一样堆叠）。<br>它是 HTML 中最常用的布局工具，本身没有语义，就是一个「盒子」。",

            code: '<span class="tag">&lt;div&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;h2&gt;</span><span class="text">投放数据概览</span><span class="tag">&lt;/h2&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;p&gt;</span><span class="text">今日总消耗：12,345 元</span><span class="tag">&lt;/p&gt;</span><br><span class="tag">&lt;/div&gt;</span>',
            analogy: "div 就像快递包装盒——你把相关的东西（标题、段落、图片）都放进一个盒子里，然后整体移动、整体加样式。在做看板时，每个数据卡片就是一个 div。"
          },
          {
            tag: "📦 标签",
            title: "span 行内容器",
            explain: "<strong>&lt;span&gt;</strong> 是一个<strong>行内容器</strong>，不会换行，只包裹一小段文字。<br>通常用来给文字中的某一部分<strong>单独加样式</strong>。<br>和 div 的区别：div 是一整块，span 是同一行里的某个片段。",
            code: '<span class="tag">&lt;p&gt;</span><span class="text">今日消耗：</span><span class="tag">&lt;span&gt;</span><span class="text">12,345</span><span class="tag">&lt;/span&gt;</span><span class="text"> 元</span><span class="tag">&lt;/p&gt;</span>',
            analogy: "span 就像荧光笔——在同一行文字中，用荧光笔标出重点部分，但不会换行。比如你在微信消息中想把价格标成红色，就在那个数字外面套一个 span。"
          },
          {
            tag: "🏷 属性",
            title: "class 和 id 属性",
            explain: "<strong>class</strong> 和 <strong>id</strong> 是给 HTML 元素起的「名字」。<br><strong>class</strong> 可以重复使用（多个元素用同一个 class），就像「VIP 会员」这个标签可以贴在多人身上。<br><strong>id</strong> 必须唯一（整个页面只有一个），就像身份证号，每人一个。",

            code: '<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"card highlight"</span><span class="tag">&gt;</span><span class="text">重点卡片</span><span class="tag">&lt;/div&gt;</span><br><span class="tag">&lt;div</span> <span class="attr">id</span>=<span class="val">"main-chart"</span><span class="tag">&gt;</span><span class="text">主图表</span><span class="tag">&lt;/div&gt;</span>',
            analogy: "class 就像标签贴纸——可以给多个东西贴同样的标签（比如「紧急」、「重要」）。id 就像快递单号——每个包裹的编号都是唯一的，不会重复。",

            tip: "class 可以有多个值，用空格分开，比如 class=\「card highlight\」 表示这个元素同时有两个 class。"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "div 和 span 最大的区别是什么？",
            options: ["div 可以加样式，span 不行", "div 是块级独占一行，span 是行内不换行", "div 只能装文字，span 只能装图片"],
            answer: "div 是块级独占一行，span 是行内不换行",
            explanation: "div 是块级元素，默认会独占一行并占据全部宽度；span 是行内元素，不会换行，只占据内容本身的宽度。这是两者最核心的区别。"
          },
          {
            type: "找错题",
            question: "下面代码有什么问题？",
            code: '<span class="tag">&lt;div</span> <span class="attr">id</span>=<span class="val">"header"</span><span class="tag">&gt;</span><span class="text">头部</span><span class="tag">&lt;/div&gt;</span><br><span class="tag">&lt;div</span> <span class="attr">id</span>=<span class="val">"header"</span><span class="tag">&gt;</span><span class="text">另一个头部</span><span class="tag">&lt;/div&gt;</span>',
            options: ["div 不能用 id 属性", "id 值在页面中不能重复", "header 这个名称是保留字"],
            answer: "id 值在页面中不能重复",
            explanation: "id 属性在整个 HTML 页面中必须是唯一的，不能有两个元素使用相同的 id。如果需要多个元素共享同一个「名字」，应该用 class 而不是 id。"

          },
          {
            type: "选择题",
            question: "想让多个卡片都有相同的红色边框样式，应该用什么？",
            options: ["给每个卡片设置不同的 id", "给所有卡片设置相同的 class", "用 span 包裹每个卡片"],
            answer: "给所有卡片设置相同的 class",
            explanation: "class 可以重复使用，多个元素共享同一个 class 后，就可以一次性给它们应用相同的样式。这是 class 最常见的使用场景。id 是唯一的，不适合这种「批量」场景。"

          }
        ]
      },

      // ==================== WEEK 2 - DAY 2 ====================
      {
        title: "Day 2：表格基础",
        desc: "学习 table/tr/td/th、表格结构、表格样式属性",
        cards: [
          {
            tag: "📊 标签",
            title: "表格基本结构",
            explain: "HTML 表格由三个核心标签组成：<strong>&lt;table&gt;</strong>（整个表格）、<strong>&lt;tr&gt;</strong>（table row，一行）、<strong>&lt;td&gt;</strong>（table data，一个单元格）。<br>表格按行来组织：先写一行 &lt;tr&gt;，再在行里写多个 &lt;td&gt;。<br>这是最基础的数据展示方式。",
            code: '<span class="tag">&lt;table&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;tr&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;td&gt;</span><span class="text">抖音</span><span class="tag">&lt;/td&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;td&gt;</span><span class="text">12,345</span><span class="tag">&lt;/td&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;/tr&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;tr&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;td&gt;</span><span class="text">视频号</span><span class="tag">&lt;/td&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;td&gt;</span><span class="text">8,901</span><span class="tag">&lt;/td&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;/tr&gt;</span><br><span class="tag">&lt;/table&gt;</span>',
            analogy: "HTML 表格就像 Excel 表格：table 是整个工作表，tr 是每一行，td 是每个格子。一行一行地填数据，和你在 Excel 里做数据表的感觉一样！"
          },
          {
            tag: "📊 标签",
            title: "表头 th",
            explain: "<strong>&lt;th&gt;</strong>（table header）用来标记<strong>表头单元格</strong>，浏览器默认会加粗居中显示。<br>它通常放在表格的第一行，表示每列的名称。<br>th 和 td 的结构一样，只是语义不同：th 是「标题」，td 是「数据」。",

            code: '<span class="tag">&lt;table&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;tr&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;th&gt;</span><span class="text">渠道</span><span class="tag">&lt;/th&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;th&gt;</span><span class="text">消耗（元）</span><span class="tag">&lt;/th&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;th&gt;</span><span class="text">转化数</span><span class="tag">&lt;/th&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;/tr&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;tr&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;td&gt;</span><span class="text">抖音</span><span class="tag">&lt;/td&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;td&gt;</span><span class="text">12,345</span><span class="tag">&lt;/td&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;td&gt;</span><span class="text">567</span><span class="tag">&lt;/td&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;/tr&gt;</span><br><span class="tag">&lt;/table&gt;</span>',
            analogy: "th 就像 Excel 表格的第一行标题栏——「渠道」「消耗」「转化数」——告诉读者每一列是什么意思。用 th 而不用 td，浏览器会自动加粗显示，屏幕阅读器也知道这是标题不是数据。"

          },
          {
            tag: "🏗 标签",
            title: "thead 和 tbody",
            explain: "<strong>&lt;thead&gt;</strong> 包裹表头行，<strong>&lt;tbody&gt;</strong> 包裹数据行。<br>这样把表格分成了<strong>两个逻辑部分</strong>，结构更清晰。<br>虽然不是必须的，但推荐使用，特别是数据较多时。",
            code: '<span class="tag">&lt;table&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;thead&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;tr&gt;</span><span class="tag">&lt;th&gt;</span><span class="text">渠道</span><span class="tag">&lt;/th&gt;</span><span class="tag">&lt;th&gt;</span><span class="text">消耗</span><span class="tag">&lt;/th&gt;</span><span class="tag">&lt;/tr&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;/thead&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;tbody&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;tr&gt;</span><span class="tag">&lt;td&gt;</span><span class="text">抖音</span><span class="tag">&lt;/td&gt;</span><span class="tag">&lt;td&gt;</span><span class="text">12,345</span><span class="tag">&lt;/td&gt;</span><span class="tag">&lt;/tr&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;/tbody&gt;</span><br><span class="tag">&lt;/table&gt;</span>',
            analogy: "就像 Excel 里冻结表头——thead 是固定不动的标题行，tbody 是可以滚动的数据区域。分开写后，浏览器和 CSS 可以分别处理它们，比如给 thead 加背景色区分。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "HTML 表格中，tr 标签代表什么？",
            options: ["表格的一个单元格", "表格的一行", "表格的标题"],
            answer: "表格的一行",
            explanation: "tr 是 table row 的缩写，表示表格中的一行。单元格用 td（table data）或 th（table header），整个表格用 table 包裹。"
          },
          {
            type: "找错题",
            question: "下面代码中 td 的放置有什么问题？",
            code: '<span class="tag">&lt;table&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;td&gt;</span><span class="text">抖音</span><span class="tag">&lt;/td&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;td&gt;</span><span class="text">12,345</span><span class="tag">&lt;/td&gt;</span><br><span class="tag">&lt;/table&gt;</span>',
            options: ["td 不能直接放在 table 里，必须放在 tr 里面", "应该用 th 而不是 td", "table 标签缺少 id 属性"],
            answer: "td 不能直接放在 table 里，必须放在 tr 里面",
            explanation: "表格的结构是嵌套的：table 里面放 tr（行），tr 里面放 td（单元格）。td 不能直接作为 table 的子元素，必须先有 tr 行容器。"
          },
          {
            type: "选择题",
            question: "想给表格加边框，最简单的方式是用哪个属性？",
            options: ["&lt;table border=\"1\"&gt;", "&lt;table edge=\"yes\"&gt;", "&lt;table frame=\"true\"&gt;"],
            answer: "&lt;table border=\「1\」&gt;",

            explanation: "border 是 table 标签的属性，border=\「1\」 会给表格及其单元格加上 1px 的边框。虽然现在更推荐用 CSS 来设置样式，但 border 属性是最快速的学习方式。"

          }
        ]
      },

      // ==================== WEEK 2 - DAY 3 ====================
      {
        title: "Day 3：语义化标签",
        desc: "学习 header/nav/main/footer/article/section 等语义化标签",
        cards: [
          {
            tag: "🏛 概念",
            title: "什么是语义化？",
            explain: "语义化就是<strong>用有意义的标签</strong>来描述内容「是什么」，而不是都用 div。<br>比如用 <strong>&lt;header&gt;</strong> 而不是 &lt;div class=\「header\」&gt;，用 <strong>&lt;footer&gt;</strong> 而不是 &lt;div class=\「footer\」&gt;。<br>好处：代码更可读、搜索引擎更理解、屏幕阅读器更友好。",

            code: '<span class="comment">&lt;!-- 不推荐：全是 div --&gt;</span><br><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="val">"header"</span><span class="tag">&gt;</span><span class="tag">&lt;/div&gt;</span><br><br><span class="comment">&lt;!-- 推荐：用语义化标签 --&gt;</span><br><span class="tag">&lt;header&gt;</span><span class="tag">&lt;/header&gt;</span>',
            analogy: "语义化就像收拾房间：与其所有东西都塞进「大箱子」（div），不如用不同的收纳盒——书放书架、衣服放衣柜、文件放文件夹。一看就知道每个盒子里装的是什么。"

          },
          {
            tag: "🏛 标签",
            title: "页面结构标签",
            explain: "<strong>&lt;header&gt;</strong>：页面或区块的头部（logo、导航、搜索框）。<br><strong>&lt;nav&gt;</strong>：导航链接区域（菜单栏）。<br><strong>&lt;main&gt;</strong>：页面的主要内容区，一个页面只有一个。<br><strong>&lt;footer&gt;</strong>：页面或区块的底部（版权信息、联系方式）。",
            code: '<span class="tag">&lt;header&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;nav&gt;</span><span class="text">导航链接</span><span class="tag">&lt;/nav&gt;</span><br><span class="tag">&lt;/header&gt;</span><br><span class="tag">&lt;main&gt;</span><br>&nbsp;&nbsp;<span class="text">主要内容</span><br><span class="tag">&lt;/main&gt;</span><br><span class="tag">&lt;footer&gt;</span><br>&nbsp;&nbsp;<span class="text">版权信息</span><br><span class="tag">&lt;/footer&gt;</span>',
            analogy: "就像一个人的身体结构：header 是头部（脸和大脑），nav 是脖子（连接和导向），main 是躯干（核心部分），footer 是脚部（底部支撑）。每个部分各司其职，结构一目了然。",
            tip: "做个人看板页面时：header 放看板标题和用户头像，main 放各种数据卡片，footer 放数据更新时间。"
          },
          {
            tag: "🏛 标签",
            title: "内容分区标签",
            explain: "<strong>&lt;section&gt;</strong>：页面中的一个<strong>主题区块</strong>，比如「投放概览」「达人排行」。<br><strong>&lt;article&gt;</strong>：一段<strong>独立完整的内容</strong>，比如一篇文章、一条产品评价。<br>它们比 div 更有意义，告诉浏览器「这里面是什么」。",

            code: '<span class="tag">&lt;section&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;h2&gt;</span><span class="text">投放数据概览</span><span class="tag">&lt;/h2&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;article&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;h3&gt;</span><span class="text">抖音渠道分析</span><span class="tag">&lt;/h3&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;p&gt;</span><span class="text">本周消耗增长 15%...</span><span class="tag">&lt;/p&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;/article&gt;</span><br><span class="tag">&lt;/section&gt;</span>',
            analogy: "section 就像报纸的一个版面（比如「财经版」「体育版」），article 就是版面上的一篇完整文章。section 按主题分区，article 是独立成篇的内容。"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "一个页面中应该有几个 &lt;main&gt; 标签？",
            options: ["可以有多个，每个区块一个", "只能有一个", "不需要用 main 标签"],
            answer: "只能有一个",
            explanation: "main 标签表示页面的主要、核心内容，一个页面只应该有一个 main。就像一篇文章只有一个正文主体部分。其他区块（侧栏、导航等）不属于 main 的内容。"
          },
          {
            type: "选择题",
            question: "nav 标签最适合用在什么地方？",
            options: ["放文章正文内容", "放导航菜单链接", "放图片轮播"],
            answer: "放导航菜单链接",
            explanation: "nav（navigation）专门用来包裹导航链接，比如顶部菜单栏、侧边导航栏、面包屑导航等。它告诉浏览器和屏幕阅读器：这是一组导航链接。"
          },
          {
            type: "找错题",
            question: "下面代码中 section 的使用有什么问题？",
            code: '<span class="tag">&lt;section&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;p&gt;</span><span class="text">这是一段没有标题的文字</span><span class="tag">&lt;/p&gt;</span><br><span class="tag">&lt;/section&gt;</span>',
            options: ["section 里必须放表格", "section 应该有标题（h2-h6）来说明主题", "section 不能直接放 p 标签"],
            answer: "section 应该有标题（h2-h6）来说明主题",
            explanation: "section 代表一个「主题区块」，按照最佳实践应该有一个标题（h2-h6）来表明这个区块的主题。如果只是一段文字没有明确的主题性，直接用 p 标签就好，不需要套 section。"

          }
        ]
      },

      // ==================== WEEK 2 - DAY 4 ====================
      {
        title: "Day 4：多媒体标签",
        desc: "学习 video/audio/source、iframe 嵌入",
        cards: [
          {
            tag: "🎬 标签",
            title: "视频 video",
            explain: "<strong>&lt;video&gt;</strong> 标签在网页中嵌入视频播放器。<br><strong>controls</strong> 属性显示播放/暂停/音量等控制按钮。<br><strong>width</strong> 和 <strong>height</strong> 设置播放器尺寸。<br>支持 mp4、webm 等常见格式。",
            code: '<span class="tag">&lt;video</span> <span class="attr">width</span>=<span class="val">"640"</span> <span class="attr">height</span>=<span class="val">"360"</span> <span class="attr">controls</span><span class="tag">&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;source</span> <span class="attr">src</span>=<span class="val">"intro.mp4"</span> <span class="attr">type</span>=<span class="val">"video/mp4"</span><span class="tag">&gt;</span><br>&nbsp;&nbsp;<span class="text">您的浏览器不支持视频播放</span><br><span class="tag">&lt;/video&gt;</span>',
            analogy: "video 标签就像你手机上的视频播放器——controls 就是那个播放条（进度条、音量、全屏按钮）。没有 controls 的话视频会显示但没法操作，就像一个没有按钮的播放器。",
            tip: "如果你在做达人内容投放看板，可以用 video 标签嵌入达人的视频素材，方便团队直接预览。"
          },
          {
            tag: "🎵 标签",
            title: "音频 audio",
            explain: "<strong>&lt;audio&gt;</strong> 标签在网页中嵌入音频播放器。<br>用法和 video 类似，<strong>controls</strong> 显示控制按钮。<br>支持 mp3、ogg、wav 等格式。<br>也可以加 <strong>autoplay</strong>（自动播放）和 <strong>loop</strong>（循环）。",
            code: '<span class="tag">&lt;audio</span> <span class="attr">controls</span><span class="tag">&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;source</span> <span class="attr">src</span>=<span class="val">"bgm.mp3"</span> <span class="attr">type</span>=<span class="val">"audio/mpeg"</span><span class="tag">&gt;</span><br>&nbsp;&nbsp;<span class="text">您的浏览器不支持音频播放</span><br><span class="tag">&lt;/audio&gt;</span>',
            analogy: "audio 就像网页上的一个小音箱。controls 就是音箱上的按钮（播放、暂停、音量）。和 video 的区别是它只有声音没有画面，适合放背景音乐、播客、语音讲解。"
          },
          {
            tag: "🪟 标签",
            title: "嵌入 iframe",
            explain: "<strong>&lt;iframe&gt;</strong> 在当前网页中<strong>嵌入另一个网页</strong>，像一个「画中画」窗口。<br>常用场景：嵌入 B站/YouTube 视频、Google 地图、在线文档。<br>它加载的是一个<strong>完整的网页</strong>，不是一个文件。",

            code: '<span class="tag">&lt;iframe</span><br>&nbsp;&nbsp;<span class="attr">src</span>=<span class="val">"https://www.bilibili.com/video/BVxxx"</span><br>&nbsp;&nbsp;<span class="attr">width</span>=<span class="val">"800"</span><br>&nbsp;&nbsp;<span class="attr">height</span>=<span class="val">"450"</span><br><span class="tag">&gt;&lt;/iframe&gt;</span>',
            analogy: "iframe 就像在你的手机上打开「小窗模式」——主页面是你的页面，小窗里是另一个网页。两个页面各自独立运行，互不影响。就像微信里打开一篇文章，文章里还能内嵌一个视频播放器。"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "video 标签中，哪个属性显示播放控制按钮？",
            options: ["buttons", "controls", "player"],
            answer: "controls",
            explanation: "controls 属性会在视频播放器上显示播放/暂停、进度条、音量等控制按钮。没有这个属性，视频会显示但用户无法操作（除非你用 JavaScript 自己写控制逻辑）。"
          },
          {
            type: "选择题",
            question: "iframe 标签的作用是什么？",
            options: ["在网页中插入图片", "在当前页面嵌入另一个网页", "创建一个新的浏览器标签页"],
            answer: "在当前页面嵌入另一个网页",
            explanation: "iframe（inline frame）在当前网页内部加载并显示另一个完整的网页。常用于嵌入第三方内容，比如视频平台、地图、在线表单等。它就像一个网页中的「窗口」。"

          },
          {
            type: "找错题",
            question: "下面代码中 video 标签有什么问题？",
            code: '<span class="tag">&lt;video</span> <span class="attr">src</span>=<span class="val">"demo.mp4"</span><span class="tag">&gt;</span><span class="tag">&lt;/video&gt;</span>',
            options: ["video 标签必须写 controls 属性", "没有 controls 用户无法控制播放，建议加上", "src 应该写在 source 标签里，不能直接写"],
            answer: "没有 controls 用户无法控制播放，建议加上",
            explanation: "虽然没有 controls 代码不会报错，但视频会显示为一个静态画面，用户无法播放、暂停或调节音量。实际使用中强烈建议加上 controls 属性。src 直接写在 video 上也是合法的写法（当然用 source 子标签也是可以的）。"
          }
        ]
      },

      // ==================== WEEK 2 - DAY 5 ====================
      {
        title: "Day 5：HTML 综合复习",
        desc: "所有标签回顾、常见错误排查、实战小项目",
        cards: [
          {
            tag: "📚 回顾",
            title: "两周学过的标签汇总",
            explain: "你已经学会了这些 HTML 标签：<br><strong>结构类</strong>：h1-h6、p、br、hr、div、span<br><strong>内容类</strong>：img、a、ul/ol/li、table/tr/td/th<br><strong>表单类</strong>：input、button、label<br><strong>语义类</strong>：header、nav、main、footer、section、article<br><strong>多媒体类</strong>：video、audio、iframe",
            code: '<span class="comment">&lt;!-- 一个完整页面的骨架 --&gt;</span><br><span class="tag">&lt;header&gt;</span><span class="tag">&lt;h1&gt;</span><span class="text">我的看板</span><span class="tag">&lt;/h1&gt;</span><span class="tag">&lt;/header&gt;</span><br><span class="tag">&lt;main&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;section&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;h2&gt;</span><span class="text">数据概览</span><span class="tag">&lt;/h2&gt;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;table&gt;</span><span class="tag">&lt;tr&gt;</span><span class="tag">&lt;th&gt;</span><span class="text">渠道</span><span class="tag">&lt;/th&gt;</span><span class="tag">&lt;th&gt;</span><span class="text">消耗</span><span class="tag">&lt;/th&gt;</span><span class="tag">&lt;/tr&gt;</span><span class="tag">&lt;/table&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;/section&gt;</span><br><span class="tag">&lt;/main&gt;</span><br><span class="tag">&lt;footer&gt;</span><span class="tag">&lt;p&gt;</span><span class="text">数据更新于 2024-07</span><span class="tag">&lt;/p&gt;</span><span class="tag">&lt;/footer&gt;</span>',
            analogy: "这两周你就像学了一套「HTML 工具包」——从最基础的砖块（标签）到搭建整面墙（页面结构），现在你已经能搭一个小房间了！接下来学 CSS 就是学「装修」。"

          },
          {
            tag: "⚠️ 避坑",
            title: "初学者常见错误 TOP 5",
            explain: "<strong>1. 忘记关闭标签</strong>：写了 &lt;p&gt; 忘了 &lt;/p&gt;<br><strong>2. 标签嵌套顺序错误</strong>：&lt;a&gt;&lt;p&gt;...&lt;/a&gt;&lt;/p&gt;（应该先开的后关）<br><strong>3. 自闭合标签加了结束标签</strong>：&lt;br&gt;&lt;/br&gt;、&lt;img&gt;&lt;/img&gt;<br><strong>4. 属性值没加引号</strong>：src=photo.jpg 应该写成 src=\「photo.jpg\」<br><strong>5. 用空格代替 class 的多值</strong>：class=\「card important\」 中间是空格不是逗号",

            code: '<span class="comment">&lt;!-- 错误示范 --&gt;</span><br><span class="tag">&lt;p&gt;</span><span class="text">忘记关闭的段落</span><br><br><span class="comment">&lt;!-- 正确示范 --&gt;</span><br><span class="tag">&lt;p&gt;</span><span class="text">正确关闭的段落</span><span class="tag">&lt;/p&gt;</span>',
            analogy: "这些错误就像做饭时的小失误：忘关火（忘关标签）、调料放错顺序（嵌套错误）、碗洗了还放回去（自闭合加结束标签）。刚开始都会犯，做多了就成习惯了！",
            tip: "写代码时可以用浏览器的「开发者工具」（F12）来检查——如果标签没关好，浏览器会用红色标记出来提醒你。"

          },
          {
            tag: "🎯 实战",
            title: "实战项目：制作你的数据看板页面",
            explain: "综合运用所有学过的标签，制作一个简单的<strong>投放数据看板页面</strong>！<br>要求包含：页面标题（h1）、数据表格（table）、操作按钮（button）、图片（img）、列表（ul）、页脚（footer）。<br>完成后用浏览器打开看看效果，这就是你第一个「作品」！",

            code: '<span class="tag">&lt;h1&gt;</span><span class="text">📊 投放数据看板</span><span class="tag">&lt;/h1&gt;</span><br><br><span class="tag">&lt;h2&gt;</span><span class="text">渠道数据</span><span class="tag">&lt;/h2&gt;</span><br><span class="tag">&lt;table</span> <span class="attr">border</span>=<span class="val">"1"</span><span class="tag">&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;tr&gt;</span><span class="tag">&lt;th&gt;</span><span class="text">渠道</span><span class="tag">&lt;/th&gt;</span><span class="tag">&lt;th&gt;</span><span class="text">消耗</span><span class="tag">&lt;/th&gt;</span><span class="tag">&lt;th&gt;</span><span class="text">转化</span><span class="tag">&lt;/th&gt;</span><span class="tag">&lt;/tr&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;tr&gt;</span><span class="tag">&lt;td&gt;</span><span class="text">抖音</span><span class="tag">&lt;/td&gt;</span><span class="tag">&lt;td&gt;</span><span class="text">12,345</span><span class="tag">&lt;/td&gt;</span><span class="tag">&lt;td&gt;</span><span class="text">567</span><span class="tag">&lt;/td&gt;</span><span class="tag">&lt;/tr&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;tr&gt;</span><span class="tag">&lt;td&gt;</span><span class="text">视频号</span><span class="tag">&lt;/td&gt;</span><span class="tag">&lt;td&gt;</span><span class="text">8,901</span><span class="tag">&lt;/td&gt;</span><span class="tag">&lt;td&gt;</span><span class="text">234</span><span class="tag">&lt;/td&gt;</span><span class="tag">&lt;/tr&gt;</span><br><span class="tag">&lt;/table&gt;</span><br><br><span class="tag">&lt;h2&gt;</span><span class="text">操作</span><span class="tag">&lt;/h2&gt;</span><br><span class="tag">&lt;button&gt;</span><span class="text">🔄 刷新数据</span><span class="tag">&lt;/button&gt;</span><br><span class="tag">&lt;button&gt;</span><span class="text">📤 导出报表</span><span class="tag">&lt;/button&gt;</span><br><br><span class="tag">&lt;h2&gt;</span><span class="text">注意事项</span><span class="tag">&lt;/h2&gt;</span><br><span class="tag">&lt;ul&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;li&gt;</span><span class="text">数据每日 9:00 更新</span><span class="tag">&lt;/li&gt;</span><br>&nbsp;&nbsp;<span class="tag">&lt;li&gt;</span><span class="text">消耗金额单位为元</span><span class="tag">&lt;/li&gt;</span><br><span class="tag">&lt;/ul&gt;</span><br><br><span class="tag">&lt;footer&gt;</span><span class="tag">&lt;p&gt;</span><span class="text">最后更新：2024年7月</span><span class="tag">&lt;/p&gt;</span><span class="tag">&lt;/footer&gt;</span>',
            tip: "完成这个项目后，你已经掌握了 HTML 的基础！接下来学习 CSS，你就能给这个看板加上颜色、排版、布局，让它变得真正好看。加油！🚀"
          }
        ],
        quiz: [
          {
            type: "找错题",
            question: "下面代码的标签嵌套有什么问题？",
            code: '<span class="tag">&lt;p&gt;</span><span class="text">点击</span> <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="val">"#"</span><span class="tag">&gt;</span><span class="text">这里</span><span class="tag">&lt;/p&gt;</span><span class="tag">&lt;/a&gt;</span>',
            options: ["a 标签不能放在 p 标签里面", "标签交叉嵌套了，应该先开的后关", "href 的值不能是 #"],
            answer: "标签交叉嵌套了，应该先开的后关",
            explanation: "正确的嵌套规则是「先开的后关」。这里先开了 &lt;p&gt;，再开了 &lt;a&gt;，所以应该先关 &lt;/a&gt; 再关 &lt;/p&gt;。交叉嵌套（&lt;p&gt;...&lt;/p&gt;...&lt;/a&gt;）会让浏览器困惑，可能导致显示异常。"

          },
          {
            type: "选择题",
            question: "下面哪个是语义化标签？",
            options: ["&lt;div&gt;", "&lt;span&gt;", "&lt;article&gt;"],
            answer: "&lt;article&gt;",
            explanation: "&lt;article&gt; 是语义化标签，表示一段独立完整的内容。&lt;div&gt; 和 &lt;span&gt; 是无语义的通用容器——它们只负责「装东西」，不表达内容的含义。语义化标签（如 header、nav、article、footer）告诉浏览器「这里面是什么」。"

          },
          {
            type: "选择题",
            question: "下面哪个属性写法是正确的？",
            options: ["src=image.jpg", "src='image.jpg'", "src=\"image.jpg\""],
            answer: "src=\「image.jpg\」",

            explanation: "HTML 属性值推荐使用双引号包裹，即 src=\「image.jpg\」。虽然单引号 src='image.jpg' 在某些情况下也能工作，但双引号是 HTML 标准推荐写法。不加引号虽然在简单情况下浏览器可能接受，但不符合规范，遇到含空格的路径时会出错。"

          }
        ]
      }
    ]
  }
],
  // Weeks 3-4: CSS
  ...[
    // ===================== WEEK 3: CSS入门（上）- 让网页变好看 =====================
    {
        topic: "CSS入门（上）——让网页变好看",
        days: [
            // ===== Day 1: 什么是CSS？ =====
            {
                title: "Day 1：什么是CSS？",
                desc: "了解CSS如何让网页变好看",
                cards: [
                    {
                        tag: "🎨 CSS基础",
                        title: "CSS 是网页的衣服",
                        explain: "HTML是网页的骨架，决定了内容的结构。<br><strong>CSS（层叠样式表）</strong>则是网页的衣服，决定了颜色、大小、间距等外观。<br>没有CSS的网页就像没穿衣服一样——能用，但不好看！",
                        code: "<span class=\「comment\」>&lt;style&gt;</span>\n  <span class=\「attr\」>h1</span> {\n    <span class=\「attr\」>color</span>: <span class=\「val\」>#e74c3c</span>;\n    <span class=\「attr\」>font-size</span>: <span class=\「val\」>32px</span>;\n  }\n<span class=\「comment\」>&lt;/style&gt;</span>",

                        analogy: "想象你在装修房子：HTML是墙壁和门窗（结构），CSS就是油漆、壁纸和家具（外观）。同一个房子，不同装修风格，感觉完全不同！"
                    },
                    {
                        tag: "📝 代码位置",
                        title: "CSS 写在 <style> 标签里",
                        explain: "在HTML文件的 <strong>&lt;head&gt;</strong> 区域里，用 <strong>&lt;style&gt;</strong> 标签包裹CSS代码。<br>浏览器读到这些代码时，就会按照你的指示来美化网页。<br>这是最基础的学习方式，后面会学到其他写法。",
                        code: "<span class=\「comment\」>&lt;!DOCTYPE html&gt;</span>\n<span class=\「tag\」>&lt;html&gt;</span>\n  <span class=\「tag\」>&lt;head&gt;</span>\n    <span class=\「comment\」>&lt;style&gt;</span>\n      <span class=\「attr\」>p</span> {\n        <span class=\「attr\」>color</span>: <span class=\「val\」>blue</span>;\n      }\n    <span class=\「comment\」>&lt;/style&gt;</span>\n  <span class=\「tag\」>&lt;/head&gt;</span>\n<span class=\「tag\」>&lt;/html&gt;</span>",

                        analogy: "就像你在画画前先准备好调色盘一样——在HTML的 <strong>&lt;head&gt;</strong> 里放 <strong>&lt;style&gt;</strong>，等于告诉浏览器：\「准备好！后面要用这些颜色来打扮网页啦！\」"

                    },
                    {
                        tag: "🎯 选择器",
                        title: "选择器：告诉CSS要改谁",
                        explain: "CSS由<strong>选择器</strong>和<strong>声明块</strong>组成。<br>选择器决定\「改哪个元素\」，声明块决定\「改成什么样\」。<br>最简单的选择器是<strong>标签选择器</strong>——直接用HTML标签名来选择。",

                        code: "<span class=\「attr\」>h1</span> {\n  <span class=\「attr\」>color</span>: <span class=\「val\」>green</span>;  <span class=\「comment\」>// 所有 h1 标题变绿色</span>\n}\n\n<span class=\「attr\」>p</span> {\n  <span class=\「attr\」>color</span>: <span class=\「val\」>gray</span>;  <span class=\「comment\」>// 所有 p 段落变灰色</span>\n}",

                        analogy: "选择器就像老师点名：叫「h1」的时候，所有h1元素都站起来听指令；叫「p」的时候，所有p元素都来排队。你喊谁，谁就换衣服！"

                    }
                ],
                quiz: [
                    {
                        type: "选择题",
                        question: "CSS的主要作用是什么？",
                        options: ["创建网页的内容结构", "控制网页的外观样式", "让网页和服务器通信"],
                        answer: "控制网页的外观样式",
                        explanation: "CSS负责外观（颜色、字体、间距等），HTML负责内容结构，它们分工明确！"
                    },
                    {
                        type: "选择题",
                        question: "CSS代码应该写在HTML文件的哪个标签里？",
                        options: ["&lt;script&gt;", "&lt;style&gt;", "&lt;body&gt;"],
                        answer: "&lt;style&gt;",
                        explanation: "&lt;style&gt; 标签专门用来存放CSS代码，一般放在 &lt;head&gt; 里面。"
                    },
                    {
                        type: "选择题",
                        question: "在CSS中，h1 { color: red; } 这行代码的意思是？",
                        options: ["把所有h1标题的字体大小改成红色", "把所有h1标题的文字颜色改成红色", "把红色背景的h1标题删除"],
                        answer: "把所有h1标题的文字颜色改成红色",
                        explanation: "color 属性控制文字颜色，red 是红色值。所以所有h1的文字会变成红色。"
                    }
                ]
            },

            // ===== Day 2: 字体和文字 =====
            {
                title: "Day 2：字体和文字——让文字更好看",
                desc: "学习控制字体大小、粗细、对齐和行高",
                cards: [
                    {
                        tag: "✍️ 字体大小",
                        title: "font-size：字要多大？",
                        explain: "<strong>font-size</strong> 用来控制文字的大小。<br>常用单位是 <strong>px（像素）</strong>，比如16px是浏览器默认大小。<br>标题可以设32px，正文用16px，小注释用12px。",
                        code: "<span class=\「attr\」>h1</span> {\n  <span class=\「attr\」>font-size</span>: <span class=\「val\」>32px</span>;  <span class=\「comment\」>// 大标题</span>\n}\n<span class=\「attr\」>p</span> {\n  <span class=\「attr\」>font-size</span>: <span class=\「val\」>16px</span>;  <span class=\「comment\」>// 正文默认大小</span>\n}\n<span class=\「attr\」>small</span> {\n  <span class=\「attr\」>font-size</span>: <span class=\「val\」>12px</span>;  <span class=\「comment\」>// 小字注释</span>\n}",

                        analogy: "就像你在Word里调字号一样——标题用二号字、正文用小四号、脚注用五号。只不过在CSS里，我们直接用像素数字来设定大小。"
                    },
                    {
                        tag: "💪 文字粗细",
                        title: "font-weight：加粗！bold！",
                        explain: "<strong>font-weight</strong> 控制文字的粗细。<br>设成 <strong>bold</strong> 就是加粗，<strong>normal</strong> 就是普通粗细。<br>标题经常需要加粗，这样更醒目！比如做看板的时候，指标名称通常会加粗显示。",
                        code: "<span class=\「attr\」>h1</span> {\n  <span class=\「attr\」>font-weight</span>: <span class=\「val\」>bold</span>;  <span class=\「comment\」>// 加粗！</span>\n}\n<span class=\「attr\」>p</span> {\n  <span class=\「attr\」>font-weight</span>: <span class=\「val\」>normal</span>;  <span class=\「comment\」>// 普通粗细</span>\n}",

                        analogy: "就像你用不同粗细的马克笔写字——粗笔写标题，细笔写正文。在数据看板上，「总收入：100万」用粗体，下面的说明文字用细体，层次一目了然！"

                    },
                    {
                        tag: "📐 对齐和行高",
                        title: "text-align 和 line-height",
                        explain: "<strong>text-align</strong> 控制文字的水平对齐方式：<strong>left</strong>（左）、<strong>center</strong>（中）、<strong>right</strong>（右）。<br><strong>line-height</strong> 控制行间距，设为1.5或2会让文字呼吸感更好，读起来不累。",
                        code: "<span class=\「attr\」>h1</span> {\n  <span class=\「attr\」>text-align</span>: <span class=\「val\」>center</span>;     <span class=\「comment\」>// 标题居中</span>\n  <span class=\「attr\」>line-height</span>: <span class=\「val\」>1.5</span>;        <span class=\「comment\」>// 行间距是字高的1.5倍</span>\n}\n<span class=\「attr\」>p</span> {\n  <span class=\「attr\」>text-align</span>: <span class=\「val\」>left</span>;       <span class=\「comment\」>// 正文左对齐（默认）</span>\n  <span class=\「attr\」>line-height</span>: <span class=\「val\」>1.8</span>;        <span class=\「comment\」>// 正文间距更宽松</span>\n}",

                        analogy: "text-align就像你把一排书本推到左边、中间或右边。line-height就像写字本的行距——行距太挤了看着头晕，宽一点才舒服！写长文案时，行高1.8读起来最轻松。"
                    }
                ],
                quiz: [
                    {
                        type: "选择题",
                        question: "哪个CSS属性用来设置文字大小？",
                        options: ["font-weight", "font-size", "text-size"],
                        answer: "font-size",
                        explanation: "font-size 控制文字大小，单位常用px。font-weight是粗细，text-size不是有效的CSS属性。"
                    },
                    {
                        type: "选择题",
                        question: "要让文字水平居中对齐，应该怎么写？",
                        options: ["text-align: middle;", "text-align: center;", "align: center;"],
                        answer: "text-align: center;",
                        explanation: "text-align 的居中式 center（不是middle）。align:center 不是有效的CSS写法。"
                    },
                    {
                        type: "选择题",
                        question: "line-height: 1.8 是什么意思？",
                        options: ["文字大小变成1.8px", "行间距是字体大小的1.8倍", "一行最多1.8个字"],
                        answer: "行间距是字体大小的1.8倍",
                        explanation: "line-height不带单位时是倍数。1.8表示行间距是字体大小的1.8倍，让文字读起来更舒服。"
                    }
                ]
            },

            // ===== Day 3: 盒子模型入门 =====
            {
                title: "Day 3：盒子模型——万物皆盒子",
                desc: "理解margin、padding，学会用盒子思维排布元素",
                cards: [
                    {
                        tag: "📦 核心概念",
                        title: "盒子的比喻：每个元素都是一个盒子",
                        explain: "在CSS中，<strong>每个HTML元素都是一个矩形盒子</strong>。<br>盒子里面是内容，内容外面依次包裹着 <strong>padding（内边距）</strong>、<strong>border（边框）</strong>、<strong>margin（外边距）</strong>。<br>理解盒子模型是学会CSS布局的第一步！",
                        code: "<span class=\「comment\」>/* 盒子从内到外： */</span>\n\n  <span class=\「comment\」>/* content → padding → border → margin */</span>\n\n<span class=\「attr\」>div</span> {\n  <span class=\「attr\」>padding</span>: <span class=\「val\」>20px</span>;  <span class=\「comment\」>// 内容和边框之间的距离</span>\n  <span class=\「attr\」>border</span>: <span class=\「val\」>2px</span> <span class=\「val\」>solid</span> <span class=\「val\」>#333</span>;  <span class=\「comment\」>// 边框</span>\n  <span class=\「attr\」>margin</span>: <span class=\「val\」>10px</span>;   <span class=\「comment\」>// 盒子和外面其他盒子的距离</span>\n}",

                        analogy: "想象你寄快递：盒子里的物品 = 内容，物品和盒子之间的泡沫纸 = padding，盒子本身 = border，盒子和旁边其他盒子的距离 = margin。快递站里每个包裹都是一个独立的盒子！"
                    },
                    {
                        tag: "🔲 内边距",
                        title: "padding：内容和边框之间的缓冲",
                        explain: "<strong>padding</strong> 是盒子的内边距，撑开了内容和边框之间的距离。<br>可以四个方向统一设：<strong>padding: 20px</strong>，也可以分别设。<br>padding越大，内容离边框越远，看起来越「透气」。",

                        code: "<span class=\「comment\」>/* 统一设置：四个方向都是20px */</span>\n<span class=\「attr\」>div</span> {\n  <span class=\「attr\」>padding</span>: <span class=\「val\」>20px</span>;\n}\n\n<span class=\「comment\」>/* 分别设置：上10 右20 下10 左20 */</span>\n<span class=\「attr\」>div</span> {\n  <span class=\「attr\」>padding</span>: <span class=\「val\」>10px</span> <span class=\「val\」>20px</span>;\n}",

                        analogy: "就像相框里的照片——照片（内容）和相框（border）之间有一圈白边（padding）。白边越宽，照片看起来越有高级感！做看板时，数据卡片加padding后就不会贴着边框，看起来更专业。"
                    },
                    {
                        tag: "📏 外边距",
                        title: "margin：盒子之间的距离",
                        explain: "<strong>margin</strong> 是盒子的外边距，控制当前元素和其他元素之间的距离。<br>用 <strong>margin-top / margin-bottom</strong> 可以单独设置某个方向。<br>margin 是「推」的力量——值越大，推得越远。",

                        code: "<span class=\「attr\」>h1</span> {\n  <span class=\「attr\」>margin-bottom</span>: <span class=\「val\」>20px</span>;  <span class=\「comment\」>// 标题下方推20px</span>\n}\n<span class=\「attr\」>p</span> {\n  <span class=\「attr\」>margin</span>: <span class=\「val\」>10px</span>;        <span class=\「comment\」>// 段落四周都有10px空隙</span>\n}",

                        analogy: "想象你在排队，你和前后人的间距就是margin。间距10cm太挤了（margin: 5px），间距1米刚好（margin: 20px）。元素之间也需要舒适的个人空间！"
                    }
                ],
                quiz: [
                    {
                        type: "选择题",
                        question: "CSS盒子模型从内到外的正确顺序是？",
                        options: ["margin → border → padding → content", "content → padding → border → margin", "content → border → padding → margin"],
                        answer: "content → padding → border → margin",
                        explanation: "盒子模型从内到外依次是：内容(content) → 内边距(padding) → 边框(border) → 外边距(margin)。"
                    },
                    {
                        type: "选择题",
                        question: "padding: 10px 20px 中，10px控制的是哪个方向？",
                        options: ["左边和右边", "上边和下边", "只有上边"],
                        answer: "上边和下边",
                        explanation: "padding: 10px 20px 是简写：第一个值10px控制上下，第二个值20px控制左右。"
                    },
                    {
                        type: "选择题",
                        question: "margin和padding的主要区别是什么？",
                        options: ["margin在边框外面，padding在边框里面", "margin改颜色，padding改大小", "没有区别，是一回事"],
                        answer: "margin在边框外面，padding在边框里面",
                        explanation: "padding是内容和边框之间的内部空间，margin是当前元素和其他元素之间的外部空间。两者位置不同！"
                    }
                ]
            },

            // ===== Day 4: 边框和圆角 =====
            {
                title: "Day 4：边框和圆角——让元素更精致",
                desc: "学习border、border-radius和box-shadow，美化按钮和卡片",
                cards: [
                    {
                        tag: "🖼️ 边框",
                        title: "border：给元素加上边框",
                        explain: "<strong>border</strong> 属性给元素添加边框，由<strong>宽度</strong>、<strong>样式</strong>和<strong>颜色</strong>三部分组成。<br>常用样式有 <strong>solid</strong>（实线）、<strong>dashed</strong>（虚线）、<strong>dotted</strong>（点线）。<br>比如看板中的数据卡片经常用细边框来分隔。",
                        code: "<span class=\「attr\」>.card</span> {\n  <span class=\「attr\」>border</span>: <span class=\「val\」>2px</span> <span class=\「val\」>solid</span> <span class=\「val\」>#3498db</span>;  <span class=\「comment\」>// 2px蓝色实线边框</span>\n}\n<span class=\「attr\」>.note</span> {\n  <span class=\「attr\」>border</span>: <span class=\「val\」>1px</span> <span class=\「val\」>dashed</span> <span class=\「val\」>#ccc</span>;  <span class=\「comment\」>// 1px灰色虚线边框</span>\n}",

                        analogy: "边框就像给照片加一个相框——实线相框正式，虚线相框轻盈。做数据看板时，每个数据卡片加一个淡淡的边框，就像把每张卡片装进透明相框，整整齐齐排好！"
                    },
                    {
                        tag: "⭕ 圆角",
                        title: "border-radius：方盒子变圆润",
                        explain: "<strong>border-radius</strong> 让元素的四个角变成圆角。<br>值越大，角越圆。<strong>border-radius: 50%</strong> 可以让正方形变成完美的圆形！<br>现代网页设计几乎处处用圆角——按钮、卡片、头像。",
                        code: "<span class=\「attr\」>.card</span> {\n  <span class=\「attr\」>border-radius</span>: <span class=\「val\」>8px</span>;    <span class=\「comment\」>// 微微圆润的卡片</span>\n}\n<span class=\「attr\」>.avatar</span> {\n  <span class=\「attr\」>border-radius</span>: <span class=\「val\」>50%</span>;   <span class=\「comment\」>// 完美圆形头像</span>\n}\n<span class=\「attr\」>.btn</span> {\n  <span class=\「attr\」>border-radius</span>: <span class=\「val\」>20px</span>;   <span class=\「comment\」>// 胶囊形按钮</span>\n}",

                        analogy: "圆角就像把锋利的桌角磨圆——摸起来不扎手，看着也舒服！方形按钮像砖头，圆角按钮像鹅卵石。现在所有APP的按钮和卡片都是圆角，因为圆角让人心情放松。"
                    },
                    {
                        tag: "✨ 阴影",
                        title: "box-shadow：给元素加立体感",
                        explain: "<strong>box-shadow</strong> 给元素添加阴影，产生浮在页面上的效果。<br>格式：<strong>水平偏移 垂直偏移 模糊半径 颜色</strong>。<br>微微的阴影让卡片看起来像是浮起来的，很有层次感！",
                        code: "<span class=\「attr\」>.card</span> {\n  <span class=\「attr\」>box-shadow</span>: <span class=\「val\」>0</span> <span class=\「val\」>4px</span> <span class=\「val\」>12px</span> <span class=\「val\」>rgba(0,0,0,0.1)</span>;\n  <span class=\「comment\」>// 水平偏移0 垂直偏移4px 模糊12px 淡黑阴影</span>\n}\n<span class=\「attr\」>.card:hover</span> {\n  <span class=\「attr\」>box-shadow</span>: <span class=\「val\」>0</span> <span class=\「val\」>8px</span> <span class=\「val\」>24px</span> <span class=\「val\」>rgba(0,0,0,0.15)</span>;\n  <span class=\「comment\」>// 鼠标悬停时阴影更大，像飘起来了！</span>\n}",

                        analogy: "阴影就像物体放在桌面上投下的影子——阴影越大，看起来离桌面越高。看板里的数据卡片加阴影，就像把卡片从纸面上「抬」起来一层，主次分明，高级感满满！"

                    }
                ],
                quiz: [
                    {
                        type: "选择题",
                        question: "border: 2px solid red 中的 solid 是什么意思？",
                        options: ["边框颜色是红色", "边框样式是实线", "边框宽度是solid"],
                        answer: "边框样式是实线",
                        explanation: "border的三个值依次是：宽度(2px)、样式(solid=实线)、颜色(red)。其他样式还有dashed(虚线)、dotted(点线)等。"
                    },
                    {
                        type: "选择题",
                        question: "要让一个正方形div变成圆形，border-radius应该设多少？",
                        options: ["border-radius: 10px;", "border-radius: 100px;", "border-radius: 50%;"],
                        answer: "border-radius: 50%;",
                        explanation: "border-radius: 50% 会让元素的四个角都变成半圆，正方形+50%圆角=完美圆形。"
                    },
                    {
                        type: "选择题",
                        question: "box-shadow: 0 4px 12px rgba(0,0,0,0.1) 中，4px控制什么？",
                        options: ["水平方向阴影偏移", "垂直方向阴影偏移", "阴影模糊程度"],
                        answer: "垂直方向阴影偏移",
                        explanation: "box-shadow的格式是：水平偏移 垂直偏移 模糊半径 颜色。4px是第二个值，所以是垂直偏移。"
                    }
                ]
            },

            // ===== Day 5: class选择器 =====
            {
                title: "Day 5：class选择器——给元素贴标签",
                desc: "学会用class批量控制样式，组合使用选择器",
                cards: [
                    {
                        tag: "🏷️ class基础",
                        title: "class：给元素贴标签",
                        explain: "<strong>class</strong> 是HTML元素的一个属性，用来给元素分类贴标签。<br>CSS中用 <strong>.类名</strong>（前面加一个点）来选择有对应class的元素。<br>class是CSS中最常用的选择器，灵活又强大！",
                        code: "<span class=\「comment\」>&lt;!-- HTML中给元素加class --&gt;</span>\n<span class=\「tag\」>&lt;p</span> <span class=\「attr\」>class</span>=<span class=\「val\」>\「highlight\」</span><span class=\「tag\」>&gt;</span>重要提示<span class=\「tag\」>&lt;/p&gt;</span>\n\n<span class=\「comment\」>/* CSS中用 . 来选择 */</span>\n<span class=\「attr\」>.highlight</span> {\n  <span class=\「attr\」>color</span>: <span class=\「val\」>red</span>;\n  <span class=\「attr\」>font-weight</span>: <span class=\「val\」>bold</span>;\n}",

                        analogy: "class就像给同学贴标签——贴「戴眼镜」标签的同学都戴眼镜，贴「穿红色衣服」标签的同学都穿红色。HTML中给元素加class，CSS中用这个class来统一指挥！"

                    },
                    {
                        tag: "🔄 批量控制",
                        title: "多个元素用同一个class",
                        explain: "同一个class可以给<strong>多个元素</strong>使用，它们会应用同样的样式。<br>这比标签选择器更精确——你可以只让特定的p段落变红，而不是所有p。<br>看板里每个数据卡片都用同一个 .card class，样式统一又方便管理。",
                        code: "<span class=\「comment\」>&lt;!-- 三个卡片用同一个class --&gt;</span>\n<span class=\「tag\」>&lt;div</span> <span class=\「attr\」>class</span>=<span class=\「val\」>\「card\」</span><span class=\「tag\」>&gt;</span>总收入<span class=\「tag\」>&lt;/div&gt;</span>\n<span class=\「tag\」>&lt;div</span> <span class=\「attr\」>class</span>=<span class=\「val\」>\「card\」</span><span class=\「tag\」>&gt;</span>总播放<span class=\「tag\」>&lt;/div&gt;</span>\n<span class=\「tag\」>&lt;div</span> <span class=\「attr\」>class</span>=<span class=\「val\」>\「card\」</span><span class=\「tag\」>&gt;</span>总点赞<span class=\「tag\」>&lt;/div&gt;</span>\n\n<span class=\「attr\」>.card</span> {\n  <span class=\「attr\」>border</span>: <span class=\「val\」>1px</span> <span class=\「val\」>solid</span> <span class=\「val\」>#ddd</span>;\n  <span class=\「attr\」>padding</span>: <span class=\「val\」>16px</span>;\n  <span class=\「attr\」>border-radius</span>: <span class=\「val\」>8px</span>;\n}",

                        analogy: "class就像学校发的统一校服——所有穿「三年级二班校服」的同学，穿的衣服都一样。你改一下校服样式，全班同学的外观都同步更新！"

                    },
                    {
                        tag: "🎯 组合选择器",
                        title: "标签选择器 + class选择器组合使用",
                        explain: "你可以把<strong>标签选择器</strong>和<strong>class选择器</strong>组合起来。<br>比如 <strong>p.highlight</strong> 选择「有highlight这个class的p元素」。<br>这样控制更精确，不会误伤其他标签。",

                        code: "<span class=\「comment\」>/* 标签选择器：所有p */</span>\n<span class=\「attr\」>p</span> {\n  <span class=\「attr\」>font-size</span>: <span class=\「val\」>16px</span>;\n}\n\n<span class=\「comment\」>/* 组合：只有带highlight的p才加粗变红 */</span>\n<span class=\「attr\」>p.highlight</span> {\n  <span class=\「attr\」>color</span>: <span class=\「val\」>red</span>;\n  <span class=\「attr\」>font-weight</span>: <span class=\「val\」>bold</span>;\n}",

                        analogy: "就像老师说「穿红色衣服的同学站起来」——先锁定「同学」（标签），再筛选「穿红色衣服」（class）。组合选择器就是两步筛选，更精确！"

                    }
                ],
                quiz: [
                    {
                        type: "选择题",
                        question: "CSS中，选择class为'box'的元素应该怎么写？",
                        options: ["#box", ".box", "box"],
                        answer: ".box",
                        explanation: "class选择器前面加一个点(.)，id选择器加井号(#)，标签选择器直接写名字。"
                    },
                    {
                        type: "选择题",
                        question: "一个HTML页面中可以有多个相同class的元素吗？",
                        options: ["不可以，class只能用一个元素", "可以，多个元素可以共用同一个class", "可以，但最多只能3个元素"],
                        answer: "可以，多个元素可以共用同一个class",
                        explanation: "class就是用来分类的，可以无限多个元素共用同一个class。这是class的核心优势！"
                    },
                    {
                        type: "选择题",
                        question: "p.warning 这个选择器会选择哪些元素？",
                        options: ["所有p元素和所有warning元素", "只有带class=\"warning\"的p元素", "所有带class=\"p\"的元素"],
                        answer: "只有带class=\「warning\」的p元素",

                        explanation: "p.warning是组合选择器，意思是「标签是p并且class是warning」的元素。"

                    }
                ]
            }
        ]
    },

    // ===================== WEEK 4: CSS入门（下）- 布局和进阶 =====================
    {
        topic: "CSS入门（下）——布局和进阶",
        days: [
            // ===== Day 1: Flex布局入门 =====
            {
                title: "Day 1：Flex布局入门——让元素排好队",
                desc: "学习display:flex、主轴/交叉轴、justify-content",
                cards: [
                    {
                        tag: "📐 核心概念",
                        title: "Flex布局是什么？",
                        explain: "<strong>Flex（弹性布局）</strong>是CSS最强大的布局工具之一。<br>给容器设 <strong>display: flex</strong>，它里面的子元素就会自动排成一行。<br>不用float、不用定位，Flex让布局变得简单又优雅！",
                        code: "<span class=\「comment\」>/* 给父容器加这一行，子元素就自动横排！ */</span>\n<span class=\「attr\」>.container</span> {\n  <span class=\「attr\」>display</span>: <span class=\「val\」>flex</span>;\n}\n\n<span class=\「comment\」>&lt;!-- 这三个div会自动排成一行 --&gt;</span>\n<span class=\「tag\」>&lt;div</span> <span class=\「attr\」>class</span>=<span class=\「val\」>\「container\」</span><span class=\「tag\」>&gt;</span>\n  <span class=\「tag\」>&lt;div&gt;</span>卡片1<span class=\「tag\」>&lt;/div&gt;</span>\n  <span class=\「tag\」>&lt;div&gt;</span>卡片2<span class=\「tag\」>&lt;/div&gt;</span>\n  <span class=\「tag\」>&lt;div&gt;</span>卡片3<span class=\「tag\」>&lt;/div&gt;</span>\n<span class=\「tag\」>&lt;/div&gt;</span>",

                        analogy: "Flex布局就像给小朋友排队——你只要说「站成一排」（display:flex），他们就自动横着排好了。不用一个一个去指定位置，容器就是老师，子元素就是小朋友！"

                    },
                    {
                        tag: "🧭 两根轴",
                        title: "主轴和交叉轴：Flex的方向感",
                        explain: "Flex布局有<strong>两根轴</strong>：主轴（默认水平向右）和交叉轴（默认垂直向下）。<br>默认情况下，子元素沿<strong>主轴</strong>排列（从左到右）。<br>理解两根轴是学会Flex的关键——所有对齐属性都是围绕轴工作的。",
                        code: "<span class=\「comment\」>/* 默认：主轴=水平，交叉轴=垂直 */</span>\n<span class=\「attr\」>.container</span> {\n  <span class=\「attr\」>display</span>: <span class=\「val\」>flex</span>;\n  <span class=\「comment\」>/*\n    主轴 ───────→ (从左到右)\n    交叉轴\n      ↓\n      (从上到下)\n  */</span>\n}",

                        analogy: "想象一条马路（主轴）和人行道（交叉轴）：汽车沿马路开（子元素沿主轴排），人行道和马路垂直。Flex就是让你搞清楚「沿着哪条路排」和「在哪条路上对齐」。"

                    },
                    {
                        tag: "↔️ 主轴对齐",
                        title: "justify-content：主轴上怎么排？",
                        explain: "<strong>justify-content</strong> 控制子元素在<strong>主轴</strong>上的对齐方式。<br><strong>flex-start</strong>（默认靠左）、<strong>center</strong>（居中）、<strong>space-between</strong>（两端对齐）、<strong>space-around</strong>（均匀分布）。<br>这是看板中最常用的属性之一！",
                        code: "<span class=\「attr\」>.container</span> {\n  <span class=\「attr\」>display</span>: <span class=\「val\」>flex</span>;\n  <span class=\「attr\」>justify-content</span>: <span class=\「val\」>center</span>;       <span class=\「comment\」>// 居中对齐</span>\n}\n<span class=\「attr\」>.nav-bar</span> {\n  <span class=\「attr\」>display</span>: <span class=\「val\」>flex</span>;\n  <span class=\「attr\」>justify-content</span>: <span class=\「val\」>space-between</span>;  <span class=\「comment\」>// 左右两端对齐</span>\n}",

                        analogy: "justify-content就像安排一群人在长廊里怎么站：flex-start=都靠左站，center=都站中间，space-between=最左最右各站一个，中间的均匀分布。看板顶部导航栏常用space-between，左边logo右边菜单，各居一端！"
                    }
                ],
                quiz: [
                    {
                        type: "选择题",
                        question: "要让一个容器的子元素使用Flex布局，应该设什么？",
                        options: ["position: flex;", "display: flex;", "layout: flex;"],
                        answer: "display: flex;",
                        explanation: "display: flex 是开启Flex布局的正确写法。position和layout都不是Flex的触发方式。"
                    },
                    {
                        type: "选择题",
                        question: "Flex布局默认的主轴方向是什么？",
                        options: ["从上到下", "从右到左", "从左到右"],
                        answer: "从左到右",
                        explanation: "Flex默认主轴是水平方向，从左到右排列子元素。交叉轴是垂直方向，从上到下。"
                    },
                    {
                        type: "选择题",
                        question: "justify-content: space-between 的效果是？",
                        options: ["所有子元素居中排列", "第一个靠左、最后一个靠右，中间均匀分布", "所有子元素均匀分布，两端也有间距"],
                        answer: "第一个靠左、最后一个靠右，中间均匀分布",
                        explanation: "space-between让第一个元素贴左、最后一个贴右，中间的均匀分布。space-around才是两端也有间距。"
                    }
                ]
            },

            // ===== Day 2: Flex进阶 =====
            {
                title: "Day 2：Flex进阶——灵活排列的秘密武器",
                desc: "学习align-items、flex-wrap、gap，完成实际案例",
                cards: [
                    {
                        tag: "↕️ 交叉轴对齐",
                        title: "align-items：交叉轴上对齐",
                        explain: "<strong>align-items</strong> 控制子元素在<strong>交叉轴</strong>上的对齐方式。<br><strong>center</strong>（垂直居中）、<strong>flex-start</strong>（靠上）、<strong>flex-end</strong>（靠下）、<strong>stretch</strong>（拉伸填满）。<br>和justify-content配合，就能实现水平和垂直都居中！",
                        code: "<span class=\「attr\」>.container</span> {\n  <span class=\「attr\」>display</span>: <span class=\「val\」>flex</span>;\n  <span class=\「attr\」>justify-content</span>: <span class=\「val\」>center</span>;   <span class=\「comment\」>// 主轴居中</span>\n  <span class=\「attr\」>align-items</span>: <span class=\「val\」>center</span>;     <span class=\「comment\」>// 交叉轴居中</span>\n  <span class=\「comment\」>/* 两行配合 = 水平垂直都居中！ */</span>\n}",

                        analogy: "如果justify-content是「左右怎么站」，那align-items就是「上下怎么站」。两者都设center，就像让人站到房间正中间——不偏左不偏右，不偏上不偏下，正中！看板里居中显示大数字KPI时超好用。"

                    },
                    {
                        tag: "📄 自动换行",
                        title: "flex-wrap：装不下就换行",
                        explain: "默认情况下，Flex子元素会<strong>挤在一行</strong>里，哪怕空间不够。<br>设 <strong>flex-wrap: wrap</strong>，子元素装不下时就会自动换到下一行。<br>做响应式看板时这个属性必不可少！",
                        code: "<span class=\「attr\」>.dashboard</span> {\n  <span class=\「attr\」>display</span>: <span class=\「val\」>flex</span>;\n  <span class=\「attr\」>flex-wrap</span>: <span class=\「val\」>wrap</span>;     <span class=\「comment\」>// 空间不够自动换行</span>\n  <span class=\「attr\」>gap</span>: <span class=\「val\」>16px</span>;          <span class=\「comment\」>// 卡片之间间距16px</span>\n}\n<span class=\「comment\」>/* 电脑上一行4个卡片，手机上自动变成每行1-2个 */</span>",

                        analogy: "就像停车场——默认所有车非要停一排（nowrap），停不下的就挤在一起。开了flex-wrap就像告诉保安：「一排停满了就去下一排」，整整齐齐！数据看板上，卡片多的时候自动换行，不用手动调整。"

                    },
                    {
                        tag: "💡 间距神器",
                        title: "gap：子元素之间的间距",
                        explain: "<strong>gap</strong> 是Flex容器里子元素之间的间距。<br>比给每个子元素加margin更简单——不用考虑「最后一个元素不需要右边距」的问题。<br>这是现代CSS的宝藏属性！",

                        code: "<span class=\「attr\」>.card-row</span> {\n  <span class=\「attr\」>display</span>: <span class=\「val\」>flex</span>;\n  <span class=\「attr\」>gap</span>: <span class=\「val\」>16px</span>;    <span class=\「comment\」>// 所有卡片之间间距16px</span>\n}\n\n<span class=\「comment\」>/* 以前需要用margin + :last-child去掉多余间距 */</span>\n<span class=\「comment\」>/* 现在一个gap就搞定！ */</span>",

                        analogy: "gap就像在卡片之间放统一厚度的小隔板——不用每个卡片单独算距离，容器自动在每张卡片之间塞入16px的隔板。以前写CSS要处理最后一个元素的margin-right，现在gap帮你全搞定！"
                    }
                ],
                quiz: [
                    {
                        type: "选择题",
                        question: "要让Flex容器里的子元素水平垂直都居中，需要怎么写？",
                        options: ["justify-content: center; + align-items: center;", "text-align: center; + vertical-align: center;", "align: center;"],
                        answer: "justify-content: center; + align-items: center;",
                        explanation: "justify-content控制主轴（水平），align-items控制交叉轴（垂直），两个都设center就实现了水平垂直居中。"
                    },
                    {
                        type: "选择题",
                        question: "flex-wrap: wrap 的作用是什么？",
                        options: ["让子元素旋转", "让子元素在空间不够时自动换行", "让子元素重叠在一起"],
                        answer: "让子元素在空间不够时自动换行",
                        explanation: "flex-wrap: wrap让Flex容器在子元素总宽度超过容器宽度时，自动换到下一行排列。"
                    },
                    {
                        type: "选择题",
                        question: "gap: 16px 在Flex容器中做了什么？",
                        options: ["给容器加16px的内边距", "在所有子元素之间创建16px的间距", "把每个子元素放大16px"],
                        answer: "在所有子元素之间创建16px的间距",
                        explanation: "gap在Flex子元素之间创建间距，不用手动处理margin，也不会有最后一个元素的多余间距问题。"
                    }
                ]
            },

            // ===== Day 3: 定位基础 =====
            {
                title: "Day 3：定位基础——精确控制元素位置",
                desc: "学习position属性：static、relative、absolute",
                cards: [
                    {
                        tag: "📌 定位概念",
                        title: "position：元素在哪里？",
                        explain: "<strong>position</strong> 属性控制元素的位置方式。<br><strong>static</strong>是默认值，元素按正常文档流排列。<br><strong>relative</strong>和<strong>absolute</strong>让你可以精确偏移元素的位置。",
                        code: "<span class=\「comment\」>/* 默认：static，正常排列 */</span>\n<span class=\「attr\」>.normal</span> {\n  <span class=\「attr\」>position</span>: <span class=\「val\」>static</span>;\n}\n\n<span class=\「comment\」>/* 相对定位：相对于自己原来的位置偏移 */</span>\n<span class=\「attr\」>.badge</span> {\n  <span class=\「attr\」>position</span>: <span class=\「val\」>relative</span>;\n  <span class=\「attr\」>top</span>: <span class=\「val\」>-10px</span>;    <span class=\「comment\」>// 向上移10px</span>\n  <span class=\「attr\」>left</span>: <span class=\「val\」>5px</span>;     <span class=\「comment\」>// 向右移5px</span>\n}",

                        analogy: "static就像你正常坐在椅子上（默认位置）。relative就像你从椅子上稍微往右挪了挪——但椅子还在原地，你只是相对于原来的位置动了。absolute则是完全离开椅子，飞到你指定的新位置！"
                    },
                    {
                        tag: "🎯 相对定位",
                        title: "relative：相对于自己偏移",
                        explain: "<strong>position: relative</strong> 让元素相对于<strong>自己原来的位置</strong>偏移。<br>配合 <strong>top / right / bottom / left</strong> 来控制偏移方向和距离。<br>它原本占的空间<strong>仍然保留</strong>，不会让其他元素挤进来。",
                        code: "<span class=\「attr\」>.box</span> {\n  <span class=\「attr\」>position</span>: <span class=\「val\」>relative</span>;\n  <span class=\「attr\」>top</span>: <span class=\「val\」>20px</span>;    <span class=\「comment\」>// 向下移20px（top是「顶部距离」）</span>\n  <span class=\「attr\」>left</span>: <span class=\「val\」>30px</span>;   <span class=\「comment\」>// 向右移30px</span>\n}\n<span class=\「comment\」>/* 注意：top: 20px = 让元素顶部距离原位置20px = 向下移动 */</span>",

                        analogy: "relative就像你在排队时，相对于自己的位置往前挪了两步——但你原来站的地方还「留着」，后面的人不会往前补。top/ left等就是「往哪个方向挪、挪多远」。"

                    },
                    {
                        tag: "🚀 绝对定位",
                        title: "absolute：精确到像素的定位",
                        explain: "<strong>position: absolute</strong> 让元素相对于<strong>最近的非static祖先</strong>定位。<br>它会<strong>脱离文档流</strong>——不再占据原来的空间，像浮在空中。<br>常用在角标、弹出框、悬浮按钮等场景。",
                        code: "<span class=\「comment\」>/* 父容器是relative，子元素absolute相对于父容器定位 */</span>\n<span class=\「attr\」>.card</span> {\n  <span class=\「attr\」>position</span>: <span class=\「val\」>relative</span>;  <span class=\「comment\」>// 父容器声明为相对定位</span>\n}\n<span class=\「attr\」>.badge</span> {\n  <span class=\「attr\」>position</span>: <span class=\「val\」>absolute</span>;  <span class=\「comment\」>// 相对于.card定位 */</span>\n  <span class=\「attr\」>top</span>: <span class=\「val\」>-8px</span>;\n  <span class=\「attr\」>right</span>: <span class=\「val\」>-8px</span>;\n  <span class=\「attr\」>background</span>: <span class=\「val\」>red</span>;\n  <span class=\「comment\」>// 红色角标出现在卡片右上角外面 */</span>\n}",

                        analogy: "absolute就像在墙上贴便利贴——便利贴的位置是相对于墙（最近的relative祖先）来定的，而且便利贴「浮」在墙上，不影响墙上其他东西的位置。数据看板上显示「新消息(3)」的红色角标就是absolute！"

                    }
                ],
                quiz: [
                    {
                        type: "选择题",
                        question: "position: relative 的元素是相对于什么定位的？",
                        options: ["相对于浏览器窗口", "相对于自己原来的位置", "相对于父元素"],
                        answer: "相对于自己原来的位置",
                        explanation: "relative是相对于元素自己正常排列时的位置进行偏移，原本占据的空间保留。"
                    },
                    {
                        type: "选择题",
                        question: "position: absolute 的元素脱离文档流意味着什么？",
                        options: ["元素会被删除", "元素不再占据原来的空间，像浮在上面", "元素会跑到页面最底部"],
                        answer: "元素不再占据原来的空间，像浮在上面",
                        explanation: "absolute元素脱离文档流后，不占据原来的空间，后面的元素会「无视」它直接补上来。它浮在页面上方。"

                    },
                    {
                        type: "选择题",
                        question: "absolute元素相对于哪个元素定位？",
                        options: ["总是相对于body", "相对于最近的非static祖先元素", "相对于浏览器窗口"],
                        answer: "相对于最近的非static祖先元素",
                        explanation: "absolute会向上找最近的position不是static的祖先元素，相对于它来定位。所以父元素常设relative来给子元素当参照。"
                    }
                ]
            },

            // ===== Day 4: 响应式入门 =====
            {
                title: "Day 4：响应式入门——手机电脑都好看",
                desc: "了解响应式设计和media query基础",
                cards: [
                    {
                        tag: "📱💻 响应式概念",
                        title: "什么是响应式设计？",
                        explain: "<strong>响应式设计</strong>让网页在不同屏幕尺寸上都能好看。<br>电脑宽屏上横排四个卡片，手机竖屏上自动变成一列。<br>不需要做两个网页——同一个网页，用CSS自动适应不同屏幕！",
                        code: "<span class=\「comment\」>/* 电脑：一行四列 */</span>\n<span class=\「attr\」>.dashboard</span> {\n  <span class=\「attr\」>display</span>: <span class=\「val\」>flex</span>;\n  <span class=\「attr\」>gap</span>: <span class=\「val\」>16px</span>;\n}\n\n<span class=\「comment\」>/* 手机：自动变成一列 */</span>\n<span class=\「comment\」>/* 用media query来针对不同屏幕写不同CSS */</span>",

                        analogy: "响应式设计就像变形金刚——同一个机器人，在宽阔的操场（电脑）上展开四肢，在狭窄的走廊（手机）上收起手臂变成紧凑形态。你不需要做两个机器人，一个就能适应不同空间！"
                    },
                    {
                        tag: "🔀 media query",
                        title: "@media：根据屏幕写不同CSS",
                        explain: "<strong>@media</strong> 是CSS的「如果」语句——如果屏幕宽度小于某个值，就用另一套样式。<br><strong>@media (max-width: 768px)</strong> 意思是「屏幕宽度≤768px（平板/手机）时」。<br>这是响应式设计的核心技术！",

                        code: "<span class=\「comment\」>/* 电脑默认：一行显示 */</span>\n<span class=\「attr\」>.card-row</span> {\n  <span class=\「attr\」>display</span>: <span class=\「val\」>flex</span>;\n  <span class=\「attr\」>gap</span>: <span class=\「val\」>16px</span>;\n}\n\n<span class=\「comment\」>/* 屏幕小于768px时（手机/平板） */</span>\n<span class=\「attr\」>@media</span> (<span class=\「attr\」>max-width</span>: <span class=\「val\」>768px</span>) {\n  <span class=\「attr\」>.card-row</span> {\n    <span class=\「attr\」>flex-direction</span>: <span class=\「val\」>column</span>;  <span class=\「comment\」>// 改成竖排 */</span>\n  }\n}",

                        analogy: "@media就像变色龙——看到绿色树叶就变绿色，看到棕色树干就变棕色。屏幕宽就用横排布局，屏幕窄就自动变成竖排。一个网页，多种形态！"
                    },
                    {
                        tag: "📐 常见断点",
                        title: "手机vs平板vs电脑：断点怎么选？",
                        explain: "<strong>断点（breakpoint）</strong>是media query的屏幕宽度阈值。<br>常用断点：<strong>768px</strong>（平板）、<strong>480px</strong>（手机）。<br>看板设计时，768px以下把横排改竖排，数据卡片就自动适配手机了。",
                        code: "<span class=\「comment\」>/* 手机（≤480px） */</span>\n<span class=\「attr\」>@media</span> (<span class=\「attr\」>max-width</span>: <span class=\「val\」>480px</span>) {\n  <span class=\「attr\」>h1</span> { <span class=\「attr\」>font-size</span>: <span class=\「val\」>24px</span>; }  <span class=\「comment\」>// 手机字小一点 */</span>\n}\n\n<span class=\「comment\」>/* 平板（≤768px） */</span>\n<span class=\「attr\」>@media</span> (<span class=\「attr\」>max-width</span>: <span class=\「val\」>768px</span>) {\n  <span class=\「attr\」>.dashboard</span> {\n    <span class=\「attr\」>flex-direction</span>: <span class=\「val\」>column</span>;  <span class=\「comment\」>// 卡片竖排 */</span>\n  }\n}",

                        analogy: "断点就像衣服尺码——S码（手机）对应小屏幕，M码（平板）对应中屏幕，L码（电脑）对应大屏幕。你用@media告诉CSS：「如果是S码屏幕，用这套样式；如果是L码屏幕，用那套样式。"

                    }
                ],
                quiz: [
                    {
                        type: "选择题",
                        question: "响应式设计的目的是什么？",
                        options: ["让网页能访问摄像头", "让网页在不同屏幕尺寸上都好看", "让网页加载速度更快"],
                        answer: "让网页在不同屏幕尺寸上都好看",
                        explanation: "响应式设计的核心就是让同一个网页自动适应手机、平板、电脑等不同屏幕尺寸。"
                    },
                    {
                        type: "选择题",
                        question: "@media (max-width: 768px) 是什么意思？",
                        options: ["屏幕宽度大于768px时", "屏幕宽度小于等于768px时", "屏幕宽度正好768px时"],
                        answer: "屏幕宽度小于等于768px时",
                        explanation: "max-width意思是「最大宽度」，max-width: 768px就是「宽度≤768px时生效」。这个宽度范围包括手机和平板。"

                    },
                    {
                        type: "选择题",
                        question: "在media query中，把flex-direction改成column会怎样？",
                        options: ["子元素从横排变成竖排", "子元素被隐藏", "子元素变成圆形"],
                        answer: "子元素从横排变成竖排",
                        explanation: "flex-direction: column让Flex主轴变成垂直方向，子元素从「从左到右」变成「从上到下」排列，就是竖排了。"

                    }
                ]
            },

            // ===== Day 5: CSS综合练习 =====
            {
                title: "Day 5：CSS综合练习——完成一个精美卡片",
                desc: "用所有学过的CSS知识，美化一个完整的数据卡片",
                cards: [
                    {
                        tag: "🏗️ 综合实战",
                        title: "从零开始：设计一个数据卡片",
                        explain: "这一课我们把前4天学到的<strong>所有CSS知识</strong>串起来！<br>从空白div开始，逐步添加字体、颜色、边框、圆角、阴影、Flex布局。<br>最终完成一个漂亮的数据看板卡片——这是你学CSS的第一个完整作品！",
                        code: "<span class=\「comment\」>&lt;!-- HTML结构 --&gt;</span>\n<span class=\「tag\」>&lt;div</span> <span class=\「attr\」>class</span>=<span class=\「val\」>\「data-card\」</span><span class=\「tag\」>&gt;</span>\n  <span class=\「tag\」>&lt;h3</span> <span class=\「attr\」>class</span>=<span class=\「val\」>\「card-title\」</span><span class=\「tag\」>&gt;</span>今日播放量<span class=\「tag\」>&lt;/h3&gt;</span>\n  <span class=\「tag\」>&lt;p</span> <span class=\「attr\」>class</span>=<span class=\「val\」>\「card-value\」</span><span class=\「tag\」>&gt;</span>128,432<span class=\「tag\」>&lt;/p&gt;</span>\n  <span class=\「tag\」>&lt;p</span> <span class=\「attr\」>class</span>=<span class=\「val\」>\「card-trend\」</span><span class=\「tag\」>&gt;</span>↑ 12% 较昨日<span class=\「tag\」>&lt;/p&gt;</span>\n<span class=\「tag\」>&lt;/div&gt;</span>",

                        analogy: "就像搭积木——先放底板（div），再放标题块（h3），再放数字块（p），最后放趋势标签（p）。CSS就是给每块积木涂颜色、调大小、摆位置。一块一块来，最后就是一个完整的精美卡片！"
                    },
                    {
                        tag: "✨ 逐步美化",
                        title: "用CSS逐步美化卡片",
                        explain: "一步一步来：<strong>第1步</strong>设容器样式，<strong>第2步</strong>调字体和颜色，<strong>第3步</strong>加边框和圆角，<strong>第4步</strong>加阴影。<br>每加一步都看看效果——就像化妆一样，一步步变美！<br>记住盒子模型：padding让内容不贴边，margin让卡片之间有间距。",
                        code: "<span class=\「attr\」>.data-card</span> {\n  <span class=\「comment\」>/* 第1步：容器 */</span>\n  <span class=\「attr\」>display</span>: <span class=\「val\」>flex</span>;\n  <span class=\「attr\」>flex-direction</span>: <span class=\「val\」>column</span>;\n  <span class=\「attr\」>padding</span>: <span class=\「val\」>24px</span>;\n  <span class=\「attr\」>margin</span>: <span class=\「val\」>12px</span>;\n\n  <span class=\「comment\」>/* 第2步：背景与边框 */</span>\n  <span class=\「attr\」>background</span>: <span class=\「val\」>#fff</span>;\n  <span class=\「attr\」>border</span>: <span class=\「val\」>1px</span> <span class=\「val\」>solid</span> <span class=\「val\」>#e0e0e0</span>;\n  <span class=\「attr\」>border-radius</span>: <span class=\「val\」>12px</span>;\n\n  <span class=\「comment\」>/* 第3步：阴影 */</span>\n  <span class=\「attr\」>box-shadow</span>: <span class=\「val\」>0</span> <span class=\「val\」>2px</span> <span class=\「val\」>8px</span> <span class=\「val\」>rgba(0,0,0,0.08)</span>;\n}\n\n<span class=\「attr\」>.card-value</span> {\n  <span class=\「attr\」>font-size</span>: <span class=\「val\」>36px</span>;\n  <span class=\「attr\」>font-weight</span>: <span class=\「val\」>bold</span>;\n  <span class=\「attr\」>color</span>: <span class=\「val\」>#2c3e50</span>;\n  <span class=\「attr\」>text-align</span>: <span class=\「val\」>center</span>;\n}",

                        analogy: "就像给照片做后期——第一步调亮度（背景色），第二步加边框（border），第三步加圆角滤镜（border-radius），第四步加阴影效果（box-shadow）。每一步都不难，但合在一起就效果惊人！"
                    },
                    {
                        tag: "⚠️ 常见坑",
                        title: "新手常见CSS坑及避坑指南",
                        explain: "<strong>坑1</strong>：忘了给父元素设relative，子元素absolute飞出去了。<br><strong>坑2</strong>：margin和padding搞混——margin是外间距，padding是内间距。<br><strong>坑3</strong>：media query放在默认样式前面——要把media query写在后面才能覆盖！",
                        code: "<span class=\「comment\」>/* 坑1：absolute的父必须是relative */</span>\n<span class=\「attr\」>.parent</span> {\n  <span class=\「attr\」>position</span>: <span class=\「val\」>relative</span>;  <span class=\「comment\」>// 别忘了这行！ */</span>\n}\n\n<span class=\「comment\」>/* 坑3：media query要写在后面 */</span>\n<span class=\「attr\」>.card</span> { <span class=\「attr\」>display</span>: <span class=\「val\」>flex</span>; }       <span class=\「comment\」>// 先写默认 */</span>\n<span class=\「attr\」>@media</span> (<span class=\「attr\」>max-width</span>: <span class=\「val\」>768px</span>) {\n  <span class=\「attr\」>.card</span> { <span class=\「attr\」>flex-direction</span>: <span class=\「val\」>column</span>; }  <span class=\「comment\」>// 后写覆盖 */</span>\n}",

                        analogy: "学CSS就像学骑车——刚上路一定会摔几次。但每次摔（出bug）都记住教训：父元素不穿relative外套，absolute子元素会迷路；media query写前面会被后面的默认样式盖掉。踩过的坑都是宝藏！"
                    }
                ],
                quiz: [
                    {
                        type: "选择题",
                        question: "一个完整的CSS数据卡片，通常不需要以下哪个属性？",
                        options: ["border-radius", "position: fixed", "padding"],
                        answer: "position: fixed",
                        explanation: "数据卡片一般用flex布局、padding、border-radius等。position: fixed是固定定位，通常用于导航栏或悬浮按钮，卡片一般用不到。"
                    },
                    {
                        type: "选择题",
                        question: "如果absolute子元素没有相对于父元素定位，最可能的原因是？",
                        options: ["父元素没有设display: flex", "父元素没有设position: relative", "子元素的颜色不对"],
                        answer: "父元素没有设position: relative",
                        explanation: "absolute会找最近的非static祖先来定位。如果父元素是默认static，子元素就会继续往上找，最终相对于body定位——这不是你想要的效果！"
                    },
                    {
                        type: "选择题",
                        question: "以下哪个CSS属性组合可以让一个Flex容器的子元素在屏幕变窄时自动换行？",
                        options: ["display: flex; + flex-wrap: wrap;", "display: flex; + overflow: auto;", "display: block; + word-wrap: break-word;"],
                        answer: "display: flex; + flex-wrap: wrap;",
                        explanation: "display: flex开启弹性布局，flex-wrap: wrap让子元素在空间不够时自动换行。这是响应式布局的经典组合！"
                    }
                ]
            }
        ]
    }
],
  // Weeks 5-6: JavaScript
  ...[
  // =====================
  // Week 5: JavaScript入门（上）—— 变量和数据
  // =====================
  {
    topic: "JavaScript入门（上）",
    subtitle: "变量和数据——让程序「记住」信息",

    intro: "欢迎来到JavaScript的世界！前四周你学了HTML和CSS，就像搭好了一间漂亮的房子。现在JavaScript来了——它是房子里的电灯和水管，让房子真正「活」起来。这一周我们学JS最基本的能力：存数据、用数据。",

    days: [
      // ---- Day 1: 什么是JavaScript？ ----
      {
        title: "Day 1：什么是JavaScript？",
        desc: "了解JS让网页动起来的能力，在浏览器控制台试代码",
        cards: [
          {
            tag: "⚡ JS基础",
            title: "JavaScript是什么？",
            explain:
              "JavaScript（简称JS）是一门<strong>编程语言</strong>，专门让网页变得「聪明」。<br>HTML是骨架，CSS是衣服，<strong>JS就是大脑</strong>——它能思考、能记住东西、能做决定。<br>你每天刷的抖音网页版、淘宝购物车、微信网页版，背后都是JS在干活。",

            code: "<span class=\「comment\」>// JS让网页能做三件事：</span><br><span class=\「comment\」>// 1. 记住数据（比如你的购物车）</span><br><span class=\「comment\」>// 2. 响应用户（比如点击按钮）</span><br><span class=\「comment\」>// 3. 动态更新（比如倒计时）</span>",

            analogy: "想象一个奶茶店：HTML是菜单板（展示内容），CSS是装修（好看），JS就是店员——能记住你要什么、给你算价格、还能跟你说「第二杯半价」。",

            tip: "JS的「Java」和Java语言没有半毛钱关系，就像「老婆饼」里没有老婆一样～"

          },
          {
            tag: "💻 实操",
            title: "打开浏览器控制台",
            explain:
              "你的浏览器里藏着一个<strong>JS游乐场</strong>，叫「开发者工具」。<br>按 <strong>F12</strong> 或右键点击「检查」，切换到 <strong>Console（控制台）</strong> 标签。<br>这里可以直接写JS代码并立刻看到结果，是学习JS最好的地方！",

            code: "<span class=\「comment\」>// 在控制台输入：</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「Hello, 小克！\」</span>);<br><span class=\「comment\」>// 你会看到输出：Hello, 小克！</span>",

            analogy: "控制台就像一个计算器——你输入算式，它给你答案。只不过JS计算器不仅能算数学，还能处理文字、做判断、甚至玩游戏。",
            tip: "按上箭头键可以快速找回上一条命令，不用重新打字哦！"
          },
          {
            tag: "🎯 核心命令",
            title: "console.log —— 你的第一个JS命令",
            explain:
              "<strong>console.log</strong> 是JS里最常用的命令，用来「打印」信息。<br>它就像你在本子上写笔记——把想看到的结果输出到控制台。<br>你可以打印<strong>文字</strong>、<strong>数字</strong>、甚至<strong>计算结果</strong>。",

            code:
              "<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「欢迎来到JS世界\」</span>);<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>100</span> + <span class=\「val\」>50</span>);<br><span class=\「comment\」>// 输出：150</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>3</span> * <span class=\「val\」>8</span>);<br><span class=\「comment\」>// 输出：24</span>",

            analogy: "就像你让同事帮忙「记一下」某个数据，console.log就是JS的记事本，帮你把结果「写」在控制台上，方便你查看。",

            tip: "console.log后面必须加括号 ()，就像打电话必须拨号一样——不能只写console.log就完事。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "在网页开发中，JavaScript的角色是什么？",
            options: [
              "A. 网页的骨架结构",
              "B. 网页的大脑，让网页能思考和互动",
              "C. 网页的美容师，让网页好看"
            ],
            answer: "B. 网页的大脑，让网页能思考和互动",
            explanation: "HTML是骨架（结构），CSS是美容师（样式），JS才是大脑（逻辑和互动）。记住这个三角色组合，以后就不会搞混啦！"
          },
          {
            type: "填空题",
            question: "在浏览器控制台中，用来输出信息的命令是 ______",
            options: ["A. print()", "B. console.log()", "C. output()"],
            answer: "B. console.log()",
            explanation: "console.log() 是JS最基础的输出命令。注意不要写成 print（那是Python的写法）或 output。"
          },
          {
            type: "选择题",
            question: "在浏览器中打开开发者工具控制台的快捷键是？",
            options: [
              "A. Ctrl + C",
              "B. F12",
              "C. Ctrl + S"
            ],
            answer: "B. F12",
            explanation: "F12 是打开浏览器开发者工具的通用快捷键。你也可以在网页上右键点击，选择「检查」来打开。控制台是你学习和调试JS代码最重要的工具！"
          }
        ]
      },
      // ---- Day 2: 变量和数据类型 ----
      {
        title: "Day 2：变量和数据类型",
        desc: "学会用let和const存数据，认识字符串、数字、布尔值",
        cards: [
          {
            tag: "📦 变量",
            title: "什么是变量？用let和const声明",
            explain:
              "变量就是一个<strong>贴了标签的盒子</strong>，里面可以装东西。<br>用 <strong>let</strong> 声明的变量以后可以换内容，用 <strong>const</strong> 声明的就固定不能变了。<br>声明变量的语法：<strong>let 名字 = 值</strong>。",
            code:
              "<span class=\「comment\」>// let = 可以改的盒子</span><br><span class=\「tag\」>let</span> <span class=\「text\」>name</span> = <span class=\「val\」>\「小克\」</span>;<br><span class=\「text\」>name</span> = <span class=\「val\」>\「小西瓜\」</span>; <span class=\「comment\」>// ✅ 可以改</span><br><br><span class=\「comment\」>// const = 不能改的盒子</span><br><span class=\「tag\」>const</span> <span class=\「text\」>age</span> = <span class=\「val\」>25</span>;<br><span class=\「text\」>age</span> = <span class=\「val\」>26</span>; <span class=\「comment\」>// ❌ 报错！const不能改</span>",

            analogy: "let就像一个便利贴盒子——你可以把盒子里的东西换掉，重新贴标签；const就像一个密封罐——装好就封死了，再也打不开。比如你的生日，就适合用const存，因为它不会变。",
            tip: "一般原则：如果这个值以后不会变，就用const；可能变就用let。能用const就用const，这是好习惯！"
          },
          {
            tag: "🔤 字符串",
            title: "字符串（String）——文字数据",
            explain:
              "字符串就是<strong>用引号包起来的文字</strong>，可以是中文、英文、数字都行。<br>单引号 <strong>' '</strong> 或双引号 <strong>\「 \」</strong> 都可以，但要配对使用。<br>字符串在JS里叫 <strong>string</strong>。",

            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>greeting</span> = <span class=\「val\」>\「你好，世界！\」</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>product</span> = <span class=\「val\」>'疏肝益阳胶囊'</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>emoji</span> = <span class=\「val\」>\「🍉\」</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>greeting</span>); <span class=\「comment\」>// 你好，世界！</span>",

            analogy: "字符串就像一条项链上的珠子——引号是项链两头的扣子，中间的文字就是珠子。不管多少个字，只要被引号包起来，JS就知道「这是一串文字」。",

            tip: "数字放在引号里就是字符串：\「100\」是文字，100是数字。JS会区别对待它们！"

          },
          {
            tag: "🔢 数字",
            title: "数字（Number）——数值数据",
            explain:
              "数字类型就是<strong>不用引号的纯数字</strong>，整数和小数都行。<br>数字可以做数学运算：加减乘除、取余数。<br>在JS里，整数和小数都叫 <strong>number</strong>，不像其他语言分那么细。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>price</span> = <span class=\「val\」>99.9</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>quantity</span> = <span class=\「val\」>3</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>total</span> = <span class=\「text\」>price</span> * <span class=\「text\」>quantity</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>total</span>); <span class=\「comment\」>// 299.7</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>10</span> % <span class=\「val\」>3</span>); <span class=\「comment\」>// 1（取余数）</span>",

            analogy: "数字就像计算器上的数字——可以直接做运算。比如你算达人刊例的总价：单价×数量=总价，这就是数字类型的典型用法。",
            tip: "小数运算有时会有精度问题（比如 0.1 + 0.2 = 0.30000000000000004），这是正常的，后面会学到怎么处理。"
          },
          {
            tag: "✅ 布尔值",
            title: "布尔值（Boolean）——是或不是",
            explain:
              "布尔值只有两个可能：<strong>true（是/真）</strong> 或 <strong>false（不是/假）</strong>。<br>注意：true和false<strong>不用引号</strong>，它们是JS的关键词。<br>布尔值通常用来做判断——「满足条件吗？」答：是或不是。",

            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>isVip</span> = <span class=\「val\」>true</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>hasPaid</span> = <span class=\「val\」>false</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>isAdult</span> = <span class=\「val\」>25</span> >= <span class=\「val\」>18</span>; <span class=\「comment\」>// true</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>isVip</span>); <span class=\「comment\」>// true</span>",

            analogy: "布尔值就像电灯开关——只有两个状态：开（true）和关（false）。比如判断「这个达人签约了吗？」答案只有「签了」或「没签」，这就是布尔值。",

            tip: "true/false千万不要加引号！\「true\」是字符串，true才是布尔值。就像「1」是文字1，1才是数字。"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "以下哪个声明的变量之后可以被修改？",
            options: [
              "A. const name = \「小克\」;",

              "B. let name = \「小克\」;",

              "C. var name = \「小克\」;"

            ],
            answer: "B. let name = \「小克\」;",

            explanation: "let声明的变量可以重新赋值，const声明的不能。var也能修改但它是老写法，现在不推荐用了。记住：优先用const，需要改时用let。"
          },
          {
            type: "选择题",
            question: "typeof \「42\」 的结果是什么？",

            options: [
              "A. \「number\」",

              "B. \「string\」",

              "C. \「boolean\」"

            ],
            answer: "B. \「string\」",

            explanation: "因为42被引号包起来了，JS认为它是文字（字符串），不是数字。typeof是一个命令，用来查看数据的类型。"
          },
          {
            type: "选择题",
            question: "let isActive = true; typeof isActive 的结果是？",
            options: [
              "A. \"string\"",
              "B. \"number\"",
              "C. \"boolean\""
            ],
            answer: "C. \"boolean\"",
            explanation: "true 是布尔值类型，所以 typeof 返回 \"boolean\"。记住：true/false 不加引号才是布尔值，加引号就变成字符串了。"
          }
        ]
      },
      // ---- Day 3: 字符串操作 ----
      {
        title: "Day 3：字符串操作",
        desc: "学会拼接字符串、模板字符串和常用方法",
        cards: [
          {
            tag: "🔗 拼接",
            title: "字符串拼接（+号连接）",
            explain:
              "在JS中，<strong>+</strong> 号遇到字符串时会变成<strong>连接符</strong>。<br>你可以用 + 把多个字符串拼在一起，也可以把字符串和数字拼起来。<br>数字遇到字符串会被<strong>自动转成文字</strong>。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>brand</span> = <span class=\「val\」>\「达人刊例\」</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>version</span> = <span class=\「val\」>3</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>title</span> = <span class=\「text\」>brand</span> + <span class=\「val\」>\「 v\」</span> + <span class=\「text\」>version</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>title</span>); <span class=\「comment\」>// 达人刊例 v3</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「10\」</span> + <span class=\「val\」>20\「</span>); <span class=\」comment\「>// \」1020\「（文字拼接）</span>",

            analogy: "字符串拼接就像穿糖葫芦——+号是竹签，把一颗颗山楂（字符串）串在一起。注意：\「10\」 + \「20\」 不是 30，而是 \「1020\」，因为是文字拼接不是数字相加。",

            tip: "注意看最后一个例子：\「10\」 + 20 结果是 \「1020\」 而不是 30。引号一出现，+号就变连接符了！"

          },
          {
            tag: "✨ 模板字符串",
            title: "模板字符串（`` 反引号）",
            explain:
              "模板字符串用<strong>反引号</strong>（键盘左上角~那个键）代替引号。<br>里面可以用 <strong>${变量}</strong> 直接嵌入变量，不用写一堆 + 号。<br>还能写<strong>多行文字</strong>，换行不会被截断。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>name</span> = <span class=\「val\」>\「小克\」</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>role</span> = <span class=\「val\」>\「运营\」</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>intro</span> = <span class=\「val\」>`我叫${<span class=\「text\」>name</span>}，岗位是${<span class=\「text\」>role</span>}`</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>intro</span>);<br><span class=\「comment\」>// 我叫小克，岗位是运营</span>",

            analogy: "模板字符串就像填表格——${}就是填空的位置，JS会自动把变量值填进去。比用+号拼接方便多了，就像填空题比写作文简单。",
            tip: "反引号不是单引号！它在键盘Esc键下面，数字1的左边。找不到可以看看键盘。"
          },
          {
            tag: "📏 常用方法",
            title: "字符串的length和常用方法",
            explain:
              "字符串自带很多实用<strong>方法</strong>，用来操作和处理文字。<br><strong>.length</strong> 获取文字长度，<strong>.toUpperCase()</strong> 转大写，<strong>.includes()</strong> 检查是否包含某段文字。<br>用法：<strong>变量名.方法()</strong>，像点菜一样。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>slogan</span> = <span class=\「val\」>\「药食同源\」</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>slogan</span>.<span class=\「text\」>length</span>); <span class=\「comment\」>// 4（4个字）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>slogan</span>.<span class=\「text\」>includes</span>(<span class=\「val\」>\「同源\」</span>)); <span class=\「comment\」>// true</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>slogan</span>.<span class=\「text\」>includes</span>(<span class=\「val\」>\「美食\」</span>)); <span class=\「comment\」>// false</span>",

            analogy: "字符串的方法就像多功能瑞士军刀——.length是尺子（量长度），.includes()是放大镜（找关键词），.toUpperCase()是加粗笔（转大写）。每个工具解决一个具体问题。",
            tip: "中文每个汉字算1个长度，emoji算2个（因为它是2个Unicode字符）。不过日常够用就行～"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "let a = \「你好\」; let b = \「世界\」; a + b 的结果是？",

            options: [
              "A. \「你好世界\」",

              "B. \「你好 世界\」",

              "C. 报错"
            ],
            answer: "A. \「你好世界\」",

            explanation: "+号连接两个字符串会直接拼起来，中间不会自动加空格。如果要加空格，需要自己写：a + \「 \」 + b。"

          },
          {
            type: "选择题",
            question: "\「hello\」.includes(\「ell\」) 的结果是？",

            options: [
              "A. true",
              "B. false",
              "C. \「ell\」"

            ],
            answer: "A. true",
            explanation: "includes()方法检查字符串中是否包含指定的子串。\「hello\」中确实包含\「ell\」，所以返回true。这个方法在搜索功能中很常用！"

          },
          {
            type: "找错题",
            question: "以下代码中哪一行有错误？",
            options: [
              "A. let intro = `我叫${name}`;",
              "B. console.log(\"hello\");",
              "C. let s = 'hello;"
            ],
            answer: "C. let s = 'hello;",
            explanation: "字符串的引号必须配对闭合。let s = 'hello; 只有开头的单引号，结尾缺少对应的单引号，会导致语法错误。正确的写法是 let s = 'hello';"
          }
        ]
      },
      // ---- Day 4: 数字和运算 ----
      {
        title: "Day 4：数字和运算",
        desc: "加减乘除、比较运算符和逻辑运算符",
        cards: [
          {
            tag: "🧮 算术运算",
            title: "加减乘除取余",
            explain:
              "JS支持基本的<strong>数学运算</strong>：+加、-减、*乘、/除、%取余。<br>取余运算 <strong>%</strong> 返回除法的余数，比如 10 % 3 = 1。<br>JS还支持 <strong>**</strong> 幂运算，比如 2 ** 3 = 8。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>price</span> = <span class=\「val\」>100</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>discount</span> = <span class=\「val\」>0.8</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>final</span> = <span class=\「text\」>price</span> * <span class=\「text\」>discount</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>final</span>); <span class=\「comment\」>// 80（打8折）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>17</span> % <span class=\「val\」>5</span>); <span class=\「comment\」>// 2（17除以5余2）</span>",

            analogy: "算术运算就像你用Excel算账：单价×折扣=实付，完全一样。取余运算就像分糖果——17个糖分给5个人，每人3个，还剩2个，这2个就是余数。",
            tip: "除法是 / 不是 ÷，乘法是 * 不是 ×。这是所有编程语言的统一写法。"
          },
          {
            tag: "⚖️ 比较运算",
            title: "比较运算符：> < === !==",
            explain:
              "比较运算符用来<strong>比较两个值</strong>，返回 true 或 false。<br><strong>===</strong> 是「严格等于」（值和类型都要相同），推荐用它代替 ==。<br>>大于、<小于、>=大于等于、<=小于等于、!==不等于。",

            code:
              "<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>5</span> > <span class=\「val\」>3</span>); <span class=\「comment\」>// true</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「5\」</span> === <span class=\「val\」>5</span>); <span class=\「comment\」>// false（类型不同）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>5</span> === <span class=\「val\」>5</span>); <span class=\「comment\」>// true（值和类型都相同）</span><br><span class=\「tag\」>let</span> <span class=\「text\」>score</span> = <span class=\「val\」>85</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>score</span> >= <span class=\「val\」>60</span>); <span class=\「comment\」>// true（及格了）</span>",

            analogy: "比较运算就像你检查KPI达标没有：销售额>=目标？达标就是true，没达标就是false。===之所以严格，是因为它还会检查「单位」对不对——100元和\「100元\」虽然意思一样，但一个是数字一个是文字。",

            tip: "永远用 === 而不是 == 。== 会偷偷帮你转换类型，容易产生奇怪的结果。===才是老实人，一是一二是二。"
          },
          {
            tag: "🔀 逻辑运算",
            title: "逻辑运算符：&& || !",
            explain:
              "<strong>&&</strong>（且/and）：两边都true才返回true。<br><strong>||</strong>（或/or）：只要一边true就返回true。<br><strong>!</strong>（非/not）：把true变false，false变true，就是「取反」。",

            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>hasBudget</span> = <span class=\「val\」>true</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>hasTime</span> = <span class=\「val\」>false</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>hasBudget</span> && <span class=\「text\」>hasTime</span>); <span class=\「comment\」>// false（缺一不可）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>hasBudget</span> || <span class=\「text\」>hasTime</span>); <span class=\「comment\」>// true（有预算就行）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(!<span class=\「text\」>hasTime</span>); <span class=\「comment\」>// true（「没时间」取反=有时间）</span>",

            analogy: "&&就像去旅行要同时满足「有钱」+「有假期」，缺一不可；||就像「打车去」或「地铁去」都行，有一个方案就OK；!就像开关——按一下就反转状态。",

            tip: "逻辑运算符的优先级：!最高，&&其次，||最低。不确定就加括号，括号永远最优先。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "5 === \「5\」 的结果是？",

            options: [
              "A. true",
              "B. false",
              "C. 报错"
            ],
            answer: "B. false",
            explanation: "===是严格等于，不仅比较值还比较类型。5是数字，\「5\」是字符串，类型不同所以是false。如果用==（不严格），结果会是true，因为JS会偷偷转换类型。"

          },
          {
            type: "选择题",
            question: "true && false || true 的结果是？",
            options: [
              "A. true",
              "B. false",
              "C. undefined"
            ],
            answer: "A. true",
            explanation: "&&优先级高于||，所以先算 true && false = false，再算 false || true = true。理解优先级很重要，不确定的时候加括号最安全。"
          },
          {
            type: "选择题",
            question: "17 % 5 的结果是？",
            options: [
              "A. 3.4",
              "B. 2",
              "C. 3"
            ],
            answer: "B. 2",
            explanation: "%是取余运算，返回除法的余数。17除以5等于3余2，所以17 % 5 = 2。注意取余返回的是余数（2），不是商（3.4）。这个运算在判断奇偶数、循环分组等场景很常用。"
          }
        ]
      },
      // ---- Day 5: 数组基础 ----
      {
        title: "Day 5：数组基础",
        desc: "学会创建数组、存取元素、常用方法和遍历",
        cards: [
          {
            tag: "📋 数组",
            title: "创建数组和存取元素",
            explain:
              "数组就是一个<strong>有序的列表</strong>，用方括号 <strong>[]</strong> 包裹。<br>每个元素有一个<strong>编号（索引）</strong>，从 <strong>0</strong> 开始数。<br>用 <strong>数组[编号]</strong> 来取值，比如 arr[0] 取第一个。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>fruits</span> = [<span class=\「val\」>\「西瓜\」</span>, <span class=\「val\」>\「芒果\」</span>, <span class=\「val\」>\「葡萄\」</span>];<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>fruits</span>[<span class=\「val\」>0</span>]); <span class=\「comment\」>// \「西瓜\」（第一个）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>fruits</span>[<span class=\「val\」>2</span>]); <span class=\「comment\」>// \「葡萄\」（第三个）</span><br><span class=\「text\」>fruits</span>[<span class=\「val\」>1</span>] = <span class=\「val\」>\「草莓\」</span>; <span class=\「comment\」>// 修改第二个元素</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>fruits</span>); <span class=\「comment\」>// [\「西瓜\」, \「草莓\」, \「葡萄\」]</span>",

            analogy: "数组就像一排储物柜，每个柜子有编号。但编号从0开始，不是从1！fruits[0]是第一个柜子，fruits[1]是第二个。就像电梯里的楼层按钮，B1是第一层但不是1楼。",
            tip: "数组索引从0开始是编程的「潜规则」，一开始不习惯很正常，多练几天就自然了。"

          },
          {
            tag: "➕ push/pop",
            title: "添加和删除元素",
            explain:
              "<strong>push()</strong> 在数组<strong>末尾添加</strong>一个元素。<br><strong>pop()</strong> 从数组<strong>末尾删除</strong>一个元素并返回它。<br>这两个方法最常用，就像排队——push是排到队尾，pop是最后一个人离开。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>tasks</span> = [<span class=\「val\」>\「写文案\」</span>, <span class=\「val\」>\「做数据\」</span>];<br><span class=\「text\」>tasks</span>.<span class=\「text\」>push</span>(<span class=\「val\」>\「开会\」</span>);<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>tasks</span>); <span class=\「comment\」>// [\「写文案\」, \「做数据\」, \「开会\」]</span><br><br><span class=\「tag\」>let</span> <span class=\「text\」>done</span> = <span class=\「text\」>tasks</span>.<span class=\「text\」>pop</span>();<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>done</span>); <span class=\「comment\」>// \「开会\」（被删除的）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>tasks</span>); <span class=\「comment\」>// [\「写文案\」, \「做数据\」]</span>",

            analogy: "push就像往一摞文件最上面放一份新的，pop就像把最上面那份拿掉。这叫「后进先出」，最后放上去的最先被拿走。",

            tip: "push可以一次加多个：tasks.push(\「开会\」, \「写报告\」)，会依次加到末尾。pop一次只能删一个。"

          },
          {
            tag: "🔄 遍历",
            title: "遍历数组——逐个处理元素",
            explain:
              "遍历就是<strong>把数组里每个元素都过一遍</strong>。<br>最简单的方法是用 <strong>for...of</strong> 循环，每次拿到一个元素。<br>也可以用<strong>索引</strong>配合 for 循环来遍历。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>products</span> = [<span class=\「val\」>\「胶囊A\」</span>, <span class=\「val\」>\「口服液B\」</span>, <span class=\「val\」>\「颗粒C\」</span>];<br><br><span class=\「comment\」>// 方法1：for...of（推荐）</span><br><span class=\「tag\」>for</span> (<span class=\「tag\」>let</span> <span class=\「text\」>p</span> <span class=\「tag\」>of</span> <span class=\「text\」>products</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>`产品：${<span class=\「text\」>p</span>}`</span>);<br>}<br><br><span class=\「comment\」>// 方法2：用索引</span><br><span class=\「tag\」>for</span> (<span class=\「tag\」>let</span> <span class=\「text\」>i</span> = <span class=\「val\」>0</span>; <span class=\「text\」>i</span> < <span class=\「text\」>products</span>.<span class=\「text\」>length</span>; <span class=\「text\」>i</span>++) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>products</span>[<span class=\「text\」>i</span>]);<br>}",

            analogy: "遍历就像点名——老师拿着花名册，一个一个名字念下去。for...of就是直接念名字，for(i)就是「第1号、第2号……」这样按编号点名。",

            tip: "初学者推荐用 for...of，写起来更简单。for(i)的写法后面学循环时会详细讲。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "let arr = [\「a\」, \「b\」, \「c\」]; arr[1] 的值是？",

            options: [
              "A. \「a\」",

              "B. \「b\」",

              "C. \「c\」"

            ],
            answer: "B. \「b\」",

            explanation: "数组索引从0开始，所以arr[0]是\「a\」，arr[1]是\「b\」，arr[2]是\「c\」。这是最容易出错的地方，牢记索引从0数起！"

          },
          {
            type: "选择题",
            question: "let arr = [1, 2]; arr.push(3); arr.pop(); arr.length 是？",
            options: [
              "A. 2",
              "B. 3",
              "C. 1"
            ],
            answer: "A. 2",
            explanation: "先push(3)后数组变成[1,2,3]，再pop()删除最后一个变成[1,2]，所以长度是2。push和pop是一对好搭档，一个加一个删。"
          },
          {
            type: "选择题",
            question: "let arr = [10, 20]; arr.push(30) 的返回值是？",
            options: [
              "A. [10, 20, 30]",
              "B. 3",
              "C. 30"
            ],
            answer: "B. 3",
            explanation: "push方法返回的是添加元素后数组的新长度，不是被添加的元素，也不是数组本身。[10,20].push(30)后数组长度变为3，所以返回3。记住push改变原数组，同时返回新长度。"
          }
        ]
      }
    ]
  },

  // =====================
  // Week 6: JavaScript入门（下）—— 逻辑和对象
  // =====================
  {
    topic: "JavaScript入门（下）",
    subtitle: "逻辑和对象——让程序会思考、能组织",
    intro: "上周学会了存数据，这周来学让程序「思考」和「组织数据」的能力！条件判断让程序会做选择，循环让程序能批量处理，函数让代码可复用，对象让数据有条理。最后一天的综合练习，把JS和HTML/CSS连起来，做一个真正的交互效果。",

    days: [
      // ---- Day 1: if条件判断 ----
      {
        title: "Day 1：if条件判断",
        desc: "学会让程序做决定：if/else和条件表达式",
        cards: [
          {
            tag: "🔀 条件判断",
            title: "if/else —— 如果……就……",
            explain:
              "if语句让程序<strong>根据不同条件做不同事情</strong>。<br>语法：<strong>if (条件) { ... } else { ... }</strong><br>条件为true时执行if里的代码，为false时执行else里的代码。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>score</span> = <span class=\「val\」>85</span>;<br><br><span class=\「tag\」>if</span> (<span class=\「text\」>score</span> >= <span class=\「val\」>90</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「优秀！🌟\」</span>);<br>} <span class=\「tag\」>else if</span> (<span class=\「text\」>score</span> >= <span class=\「val\」>60</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「及格了 👍\」</span>);<br>} <span class=\「tag\」>else</span> {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「加油哦 💪\」</span>);<br>}<br><span class=\「comment\」>// 输出：及格了 👍</span>",

            analogy: "if判断就像你做决策：\「如果今天下雨，就带伞；如果不下雨但太阳大，就带帽子；否则就空手出门。\」程序也是这样一步一步判断的。else if就是「再想想另一个可能」。",

            tip: "条件必须写在圆括号()里，执行的代码必须写在花括号{}里。花括号就像房间的门——进了门才能执行里面的内容。"
          },
          {
            tag: "📝 条件表达式",
            title: "三元运算符 —— 简短版if/else",
            explain:
              "三元运算符是if/else的<strong>简化写法</strong>，适合简单的二选一。<br>格式：<strong>条件 ? 真时的值 : 假时的值</strong><br>问号前面是条件，冒号两边分别是true和false的结果。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>age</span> = <span class=\「val\」>20</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>status</span> = <span class=\「text\」>age</span> >= <span class=\「val\」>18</span> ? <span class=\「val\」>\「成年\」</span> : <span class=\「val\」>\「未成年\」</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>status</span>); <span class=\「comment\」>// \「成年\」</span><br><br><span class=\「comment\」>// 等同于：</span><br><span class=\「tag\」>let</span> <span class=\「text\」>status2</span>;<br><span class=\「tag\」>if</span> (<span class=\「text\」>age</span> >= <span class=\「val\」>18</span>) { <span class=\「text\」>status2</span> = <span class=\「val\」>\「成年\」</span>; }<br><span class=\「tag\」>else</span> { <span class=\「text\」>status2</span> = <span class=\「val\」>\「未成年\」</span>; }",

            analogy: "三元运算符就像路口的指示牌：\「向左还是向右？\」——条件决定走哪条路。它适合简单的「选A还是选B」，复杂的情况还是用if/else更清楚。",

            tip: "三元运算符只适合简单场景。如果有3个以上的分支，或者逻辑复杂，老老实实用if/else，可读性更好。"
          },
          {
            tag: "💡 实战",
            title: "条件判断的实际例子",
            explain:
              "用条件判断来做一个<strong>达人合作状态检查</strong>。<br>根据达人的粉丝数和互动率，判断合作等级。<br>这就是你日常工作中会遇到的真实场景。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>fans</span> = <span class=\「val\」>50000</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>engagement</span> = <span class=\「val\」>0.05</span>; <span class=\「comment\」>// 5%互动率</span><br><br><span class=\「tag\」>if</span> (<span class=\「text\」>fans</span> >= <span class=\「val\」>100000</span> && <span class=\「text\」>engagement</span> >= <span class=\「val\」>0.03</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「S级达人 🔥\」</span>);<br>} <span class=\「tag\」>else if</span> (<span class=\「text\」>fans</span> >= <span class=\「val\」>10000</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「A级达人 ⭐\」</span>);<br>} <span class=\「tag\」>else</span> {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「潜力达人 🌱\」</span>);<br>}<br><span class=\「comment\」>// 输出：A级达人 ⭐</span>",

            analogy: "这就像你给达人分等级：粉丝多+互动好的是S级，粉丝中等的是A级，刚起步的是潜力股。你的大脑每天都在做这种判断，现在只是教JS也这么做。",
            tip: "条件判断可以嵌套（if里再套if），但不要嵌套太深，超过3层就该考虑重构代码了。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "if (false) { console.log(\「A\」); } else { console.log(\「B\」); } 输出什么？",

            options: [
              "A. A",
              "B. B",
              "C. 什么都不输出"
            ],
            answer: "B. B",
            explanation: "因为条件是false，所以if块里的代码不会执行，而是跳到else块执行，输出\「B\」。if/else就像岔路口，条件决定走哪条路。"

          },
          {
            type: "选择题",
            question: "let x = 10; x > 5 ? \「大\」 : \「小\」 的结果是？",

            options: [
              "A. \「大\」",

              "B. \「小\」",

              "C. true"
            ],
            answer: "A. \「大\」",

            explanation: "10 > 5是true，三元运算符选择问号后面的值\「大\」。三元运算符的格式是：条件 ? 真值 : 假值。"

          },
          {
            type: "填空题",
            question: "let score = 95; if (score >= 90) { console.log(\"优秀\"); } else if (score >= 60) { console.log(\"及格\"); } else { console.log(\"加油\"); } 输出结果是 ______",
            options: [
              "A. \"优秀\"",
              "B. \"及格\"",
              "C. \"加油\""
            ],
            answer: "A. \"优秀\"",
            explanation: "score = 95，满足第一个条件 score >= 90，所以输出\"优秀\"。if/else if/else 是顺序判断的，一旦某个条件满足，后面的分支就不再检查。"
          }
        ]
      },
      // ---- Day 2: 循环 ----
      {
        title: "Day 2：循环",
        desc: "学会for循环、while循环，让程序批量处理任务",
        cards: [
          {
            tag: "🔁 for循环",
            title: "for循环——重复做事",
            explain:
              "for循环让你<strong>重复执行一段代码指定次数</strong>。<br>格式：<strong>for (起点; 条件; 变化) { 重复做的事 }</strong><br>最常见的写法：从0数到某个数，逐个处理。",
            code:
              "<span class=\「comment\」>// 打印1到5</span><br><span class=\「tag\」>for</span> (<span class=\「tag\」>let</span> <span class=\「text\」>i</span> = <span class=\「val\」>1</span>; <span class=\「text\」>i</span> <= <span class=\「val\」>5</span>; <span class=\「text\」>i</span>++) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>`第${<span class=\「text\」>i</span>}次循环`</span>);<br>}<br><span class=\「comment\」>// 第1次循环</span><br><span class=\「comment\」>// 第2次循环</span><br><span class=\「comment\」>// ... 第5次循环</span>",

            analogy: "for循环就像你每天早上打卡——第1天、第2天……一直打到第N天。起点是第1天，条件是「还没到第N天」，变化是「每天+1\」。完全一样的逻辑。",

            tip: "小心别写死循环！如果条件永远为true，程序会一直跑下去。i++（每次加1）别忘了写，否则i永远不变，循环永远不停。"
          },
          {
            tag: "🔄 while循环",
            title: "while循环——满足条件就一直做",
            explain:
              "while循环是<strong>只要条件为true就一直执行</strong>。<br>适合<strong>不确定要循环多少次</strong>的场景。<br>格式：<strong>while (条件) { 做的事 }</strong>，和if有点像，但会反复执行。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>battery</span> = <span class=\「val\」>30</span>;<br><span class=\「tag\」>while</span> (<span class=\「text\」>battery</span> > <span class=\「val\」>0</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>`电量还剩${<span class=\「text\」>battery</span>}%`</span>);<br>&nbsp;&nbsp;<span class=\「text\」>battery</span> = <span class=\「text\」>battery</span> - <span class=\「val\」>10</span>;<br>}<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「没电了！🔋\」</span>);",

            analogy: "while循环就像手机电量提示——只要电量大于0就一直用，每次消耗10%。你不确定能用几次，但只要「电量>0\」这个条件成立就继续。",

            tip: "while循环最容易犯的错：忘记在循环里改变条件变量。如果battery不减，battery > 0永远是true，程序就卡死了。"
          },
          {
            tag: "📦 循环数组",
            title: "遍历数组的循环写法",
            explain:
              "用循环来<strong>逐个处理数组里的每个元素</strong>，这是最常见的用法。<br><strong>for (let i = 0; i < arr.length; i++)</strong> 用索引访问每个元素。<br><strong>for (let item of arr)</strong> 直接拿到每个元素的值。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>videos</span> = [<br>&nbsp;&nbsp;<span class=\「val\」>\「选题技巧\」</span>,<br>&nbsp;&nbsp;<span class=\「val\」>\「剪辑入门\」</span>,<br>&nbsp;&nbsp;<span class=\「val\」>\「运营策略\」</span><br>];<br><br><span class=\「tag\」>for</span> (<span class=\「tag\」>let</span> <span class=\「text\」>i</span> = <span class=\「val\」>0</span>; <span class=\「text\」>i</span> < <span class=\「text\」>videos</span>.<span class=\「text\」>length</span>; <span class=\「text\」>i</span>++) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>`第${<span class=\「text\」>i</span>+<span class=\「val\」>1</span>}个视频：${<span class=\「text\」>videos</span>[<span class=\「text\」>i</span>]}`</span>);<br>}",

            analogy: "遍历数组就像检查清单——你有一个待办列表，逐项检查完成。循环就是那个「下一项」的动作，直到所有项都处理完。",

            tip: "日常工作中，for...of 写法更简单。但 for(i) 写法更灵活，比如你需要知道当前是第几个，或者要跳过某些项。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "for (let i = 0; i < 3; i++) { console.log(i); } 会输出几个数字？",
            options: [
              "A. 2个：0, 1",
              "B. 3个：0, 1, 2",
              "C. 3个：1, 2, 3"
            ],
            answer: "B. 3个：0, 1, 2",
            explanation: "i从0开始，i<3时执行循环体，所以i的值依次是0、1、2，共3次。当i变成3时，3<3为false，循环停止。"
          },
          {
            type: "选择题",
            question: "let arr = [\「a\」,\「b\」]; for (let x of arr) { console.log(x); } 输出？",

            options: [
              "A. 0, 1",
              "B. a, b",
              "C. 1, 2"
            ],
            answer: "B. a, b",
            explanation: "for...of循环直接拿到数组中每个元素的值，不是索引。所以x依次是\「a\」和\「b\」，逐个打印。"

          },
          {
            type: "找错题",
            question: "以下while循环有什么问题？\nlet count = 0;\nwhile (count < 3) {\n  console.log(count);\n}",
            options: [
              "A. count初始值不对",
              "B. 循环体内没有改变count，会死循环",
              "C. 条件count < 3写法错误"
            ],
            answer: "B. 循环体内没有改变count，会死循环",
            explanation: "while循环必须在循环体内改变条件变量，否则条件永远为true，程序卡死。正确写法应在循环体内加上 count++ 或 count = count + 1。这是while循环最常见的错误！"
          }
        ]
      },
      // ---- Day 3: 函数基础 ----
      {
        title: "Day 3：函数基础",
        desc: "学会声明函数、传参数、返回值，让代码可复用",
        cards: [
          {
            tag: "📦 函数",
            title: "function声明——把代码打包",
            explain:
              "函数就是<strong>一段可以反复使用的代码包</strong>。<br>用 <strong>function</strong> 关键词声明，给它起个名字，写好参数。<br>以后只要写<strong>函数名()</strong>就能调用，不用重复写代码。",
            code:
              "<span class=\「tag\」>function</span> <span class=\「text\」>greet</span>() {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「你好呀！👋\」</span>);<br>}<br><br><span class=\「comment\」>// 调用函数</span><br><span class=\「text\」>greet</span>(); <span class=\「comment\」>// 你好呀！👋</span><br><span class=\「text\」>greet</span>(); <span class=\「comment\」>// 你好呀！👋（再说一遍）</span><br><span class=\「text\」>greet</span>(); <span class=\「comment\」>// 你好呀！👋（第三遍）</span>",

            analogy: "函数就像你手机里的快捷指令——你设置一次「早上好问候」的快捷指令，以后点一下就行，不用每次都说一遍同样的话。函数也是这个道理：写一次，用N次。",

            tip: "函数名要用动词开头，比如 greet()、calculate()、checkStatus()，一看就知道这个函数「做了什么\」。"

          },
          {
            tag: "📥 参数",
            title: "参数和返回值——给函数「喂」数据",

            explain:
              "<strong>参数</strong>是函数的「原料」——调用时传进去，函数用它干活。<br><strong>return</strong>是函数的「产出」——把结果送出来，外面的代码可以接着用。<br>没有return的函数返回 <strong>undefined</strong>（什么都没有）。",

            code:
              "<span class=\「tag\」>function</span> <span class=\「text\」>add</span>(<span class=\「text\」>a</span>, <span class=\「text\」>b</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>return</span> <span class=\「text\」>a</span> + <span class=\「text\」>b</span>;<br>}<br><br><span class=\「tag\」>let</span> <span class=\「text\」>result</span> = <span class=\「text\」>add</span>(<span class=\「val\」>3</span>, <span class=\「val\」>5</span>);<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>result</span>); <span class=\「comment\」>// 8</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>add</span>(<span class=\「val\」>10</span>, <span class=\「val\」>20</span>)); <span class=\「comment\」>// 30</span>",

            analogy: "参数就像你去奶茶店点的口味——「我要大杯、少冰、三分糖\」，这些是参数；返回值就是你拿到的那杯奶茶。你给什么参数，函数就返回对应的结果。",

            tip: "return有两个作用：一是返回结果，二是结束函数。return后面的代码不会被执行。"
          },
          {
            tag: "💡 实战",
            title: "函数的实际例子：计算达人佣金",
            explain:
              "用函数来计算达人的<strong>合作佣金</strong>，参数是基础费用和提成比例。<br>这就是你工作中会遇到的真实场景——把计算逻辑封装成函数，<br>以后换达人只需要改参数，不用改公式。",
            code:
              "<span class=\「tag\」>function</span> <span class=\「text\」>calcCommission</span>(<span class=\「text\」>baseFee</span>, <span class=\「text\」>sales</span>, <span class=\「text\」>rate</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>let</span> <span class=\「text\」>commission</span> = <span class=\「text\」>baseFee</span> + <span class=\「text\」>sales</span> * <span class=\「text\」>rate</span>;<br>&nbsp;&nbsp;<span class=\「tag\」>return</span> <span class=\「text\」>commission</span>;<br>}<br><br><span class=\「tag\」>let</span> <span class=\「text\」>fee</span> = <span class=\「text\」>calcCommission</span>(<span class=\「val\」>500</span>, <span class=\「val\」>10000</span>, <span class=\「val\」>0.1</span>);<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>`佣金：¥${<span class=\「text\」>fee</span>}`</span>);<br><span class=\「comment\」>// 佣金：¥1500</span><br><span class=\「comment\」>// 500 + 10000 * 0.1 = 1500</span>",

            analogy: "函数就像你的Excel公式——你在一个单元格里写了SUM(A1:A10)，以后不管A1到A10的数据怎么变，公式都不用改。函数就是这个道理：逻辑固定，数据可变。",
            tip: "函数里的变量名（a、b）和外面的变量名互不影响。就像两个不同房间里的人，各说各的，不会串。这叫「作用域\」。"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "function hello(name) { return \「Hi, \」 + name; } hello(\「小克\」) 返回什么？",

            options: [
              "A. \「Hi, 小克\」",

              "B. undefined",
              "C. \「小克\」"

            ],
            answer: "A. \「Hi, 小克\」",

            explanation: "调用hello(\「小克\」)时，参数name的值是\「小克\」，函数返回\「Hi, \」 + \「小克\」，结果是\「Hi, 小克\」。这就是参数传递的效果。"

          },
          {
            type: "选择题",
            question: "function test() { console.log(\「hello\」); } 调用 test() 后，它的返回值是？",

            options: [
              "A. \「hello\」",

              "B. undefined",
              "C. 0"
            ],
            answer: "B. undefined",
            explanation: "这个函数只有console.log（打印），没有return（返回）。console.log只是在控制台显示文字，并不是返回值。没有return的函数默认返回undefined。"
          },
          {
            type: "填空题",
            question: "function calc(base, rate) { return base * rate; } calc(1000, 0.1) 的返回值是 ______",
            options: [
              "A. 100",
              "B. 1000",
              "C. 0.1"
            ],
            answer: "A. 100",
            explanation: "调用calc(1000, 0.1)时，base = 1000，rate = 0.1。函数返回 base * rate = 1000 * 0.1 = 100。这就是函数接收参数并计算返回值的完整流程。"
          }
        ]
      },
      // ---- Day 4: 对象基础 ----
      {
        title: "Day 4：对象基础",
        desc: "学会创建对象、访问属性、调用方法，组织复杂数据",
        cards: [
          {
            tag: "🗂️ 对象",
            title: "创建对象——用{}组织数据",
            explain:
              "对象就是一组<strong>「键值对」</strong>（名字:值）的集合，用花括号 <strong>{}</strong> 包裹。<br>每个属性有<strong>名字</strong>和<strong>值</strong>，用冒号连接，逗号分隔。<br>对象比数组更灵活，因为每个值都有名字。",

            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>influencer</span> = {<br>&nbsp;&nbsp;<span class=\「text\」>name</span>: <span class=\「val\」>\「小西瓜\」</span>,<br>&nbsp;&nbsp;<span class=\「text\」>followers</span>: <span class=\「val\」>50000</span>,<br>&nbsp;&nbsp;<span class=\「text\」>category</span>: <span class=\「val\」>\「健康科普\」</span>,<br>&nbsp;&nbsp;<span class=\「text\」>isActive</span>: <span class=\「val\」>true</span><br>};<br><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>influencer</span>.<span class=\「text\」>name</span>); <span class=\「comment\」>// \「小西瓜\」</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>influencer</span>.<span class=\「text\」>followers</span>); <span class=\「comment\」>// 50000</span>",

            analogy: "对象就像一张员工信息卡——上面有姓名、工号、部门、在职状态。每条信息都有标签，你想找哪个信息就直接看那个标签。比数组（一串没有标签的数据）好查多了。",
            tip: "属性名如果包含特殊字符或空格，需要用引号包起来，比如 \「first name\」: \「小克\」。但一般推荐用简单的英文单词做属性名。"

          },
          {
            tag: "🔑 属性访问",
            title: "访问和修改对象的属性",
            explain:
              "用 <strong>对象名.属性名</strong> 读取属性值。<br>用 <strong>对象名.属性名 = 新值</strong> 修改属性值。<br>如果属性名存在变量里，可以用 <strong>对象名[变量名]</strong> 来访问。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>product</span> = {<br>&nbsp;&nbsp;<span class=\「text\」>name</span>: <span class=\「val\」>\「疏肝益阳胶囊\」</span>,<br>&nbsp;&nbsp;<span class=\「text\」>price</span>: <span class=\「val\」>128</span>,<br>&nbsp;&nbsp;<span class=\「text\」>stock</span>: <span class=\「val\」>500</span><br>};<br><br><span class=\「comment\」>// 读取</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>product</span>.<span class=\「text\」>name</span>); <span class=\「comment\」>// \「疏肝益阳胶囊\」</span><br><br><span class=\「comment\」>// 修改</span><br><span class=\「text\」>product</span>.<span class=\「text\」>price</span> = <span class=\「val\」>99</span>;<br><span class=\「text\」>product</span>.<span class=\「text\」>stock</span> = <span class=\「text\」>product</span>.<span class=\「text\」>stock</span> - <span class=\「val\」>10</span>;<br><br><span class=\「comment\」>// 动态属性名</span><br><span class=\「tag\」>let</span> <span class=\「text\」>key</span> = <span class=\「val\」>\「price\」</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>product</span>[<span class=\「text\」>key</span>]); <span class=\「comment\」>// 99</span>",

            analogy: "访问属性就像查通讯录——「张三.电话\」直接拿到手机号，\「张三.邮箱\」拿到邮箱。修改属性就像你更新通讯录里的信息：张三换号了，直接改就行。",

            tip: "obj.name 和 obj[\「name\」] 效果一样。但如果属性名存在变量里（比如 let key = \「name\」），只能用 obj[key]。"

          },
          {
            tag: "⚙️ 方法",
            title: "对象的方法——对象的「技能」",

            explain:
              "对象里的属性如果值是<strong>函数</strong>，就叫<strong>方法</strong>。<br>方法就是对象「自己能做的事」，比如达人对象的「自我介绍」方法。<br>调用方式：<strong>对象名.方法名()</strong>。",

            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>influencer</span> = {<br>&nbsp;&nbsp;<span class=\「text\」>name</span>: <span class=\「val\」>\「小西瓜\」</span>,<br>&nbsp;&nbsp;<span class=\「text\」>followers</span>: <span class=\「val\」>50000</span>,<br>&nbsp;&nbsp;<span class=\「text\」>intro</span>: <span class=\「tag\」>function</span>() {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\「tag\」>return</span> <span class=\「val\」>`我是${<span class=\「keyword\」>this</span>.<span class=\「text\」>name</span>}，有${<span class=\「keyword\」>this</span>.<span class=\「text\」>followers</span>}粉丝`</span>;<br>&nbsp;&nbsp;}<br>};<br><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>influencer</span>.<span class=\「text\」>intro</span>());<br><span class=\「comment\」>// 我是小西瓜，有50000粉丝</span>",

            analogy: "方法就像手机的内置App——「计算器\」App能做计算，\「天气\」App能查天气。对象的方法也一样：达人对象的intro()方法能做自我介绍。this关键词指的是「我自己\」。",

            tip: "this 关键字代表「当前对象自己\」。在influencer.intro()里，this就是influencer。初学者最容易搞混的就是this，记住：在对象的方法里，this就是这个对象。"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "let person = {name: \「小克\」, age: 25}; person.name 的值是？",

            options: [
              "A. \「name\」",

              "B. \「小克\」",

              "C. 25"
            ],
            answer: "B. \「小克\」",

            explanation: "person.name 访问的是name属性对应的值，也就是\「小克\」。点号后面的名字是「键\」，取到的是对应的「值\」。"

          },
          {
            type: "选择题",
            question: "对象的方法是什么类型的数据？",
            options: [
              "A. 字符串",
              "B. 数字",
              "C. 函数"
            ],
            answer: "C. 函数",
            explanation: "方法本质上就是存在对象属性里的函数。调用时用 对象.方法() 的格式，圆括号()表示「执行这个函数\」。"

          },
          {
            type: "选择题",
            question: "let obj = {name: \"小克\"}; let key = \"name\"; 如何正确访问name属性？",
            options: [
              "A. obj.key",
              "B. obj[key]",
              "C. obj(\"name\")"
            ],
            answer: "B. obj[key]",
            explanation: "当属性名存在变量中时，必须用方括号语法 obj[key]。obj.key 会去找一个叫\"key\"的属性（不存在），obj(\"name\") 是把obj当函数调用（会报错）。记住：变量做属性名时用方括号。"
          }
        ]
      },
      // ---- Day 5: JS综合练习 ----
      {
        title: "Day 5：JS综合练习",
        desc: "结合HTML+CSS+JS做一个交互效果，复习所有知识点",
        cards: [
          {
            tag: "🎯 事件",
            title: "点击事件 onclick —— 让按钮「活」起来",

            explain:
              "HTML元素可以绑定<strong>事件</strong>，比如点击时触发JS代码。<br>最简单的方式是用 <strong>onclick=\「函数名()\」</strong> 属性。<br>这是HTML和JS沟通的桥梁——用户点按钮，JS做出反应。",

            code:
              "<span class=\「comment\」>// HTML部分：</span><br><span class=\「tag\」>&lt;button</span> <span class=\「text\」>onclick</span>=<span class=\「val\」>\「sayHi()\」</span><span class=\「tag\」>&gt;</span>点我<span class=\「tag\」>&lt;/button&gt;</span><br><span class=\「tag\」>&lt;p</span> <span class=\「text\」>id</span>=<span class=\「val\」>\「msg\」</span><span class=\「tag\」>&gt;&lt;/p&gt;</span><br><br><span class=\「comment\」>// JS部分：</span><br><span class=\「tag\」>function</span> <span class=\「text\」>sayHi</span>() {<br>&nbsp;&nbsp;<span class=\「text\」>document</span>.<span class=\「text\」>getElementById</span>(<span class=\「val\」>\「msg\」</span>)<br>&nbsp;&nbsp;&nbsp;&nbsp;.<span class=\「text\」>textContent</span> = <span class=\「val\」>\「你好呀！\」</span>;<br>}",

            analogy: "onclick就像门铃——你按（点击）一下，屋里的人（JS）就做出反应（开门/打招呼）。按钮本身不会动，但你给它接上了「门铃线\」（onclick），它就能触发反应了。",

            tip: "getElementById是JS找HTML元素的方法——根据id找到对应的元素，然后修改它。就像根据工号找到同事一样。"
          },
          {
            tag: "🧩 综合",
            title: "综合小项目：达人合作计算器",
            explain:
              "把两周学的知识串起来：做一个<strong>达人合作费用计算器</strong>。<br>用户输入粉丝数和互动率，JS自动算出合作等级和预估费用。<br>涉及：变量、数组、对象、函数、条件判断、事件。",
            code:
              "<span class=\「comment\」>// 完整JS代码：</span><br><span class=\「tag\」>let</span> <span class=\「text\」>influencers</span> = [];<br><br><span class=\「tag\」>function</span> <span class=\「text\」>addInfluencer</span>(<span class=\「text\」>name</span>, <span class=\「text\」>fans</span>, <span class=\「text\」>rate</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>let</span> <span class=\「text\」>level</span> = <span class=\「text\」>fans</span> >= <span class=\「val\」>100000</span> ? <span class=\「val\」>\「S级\」</span> : <span class=\「val\」>\「A级\」</span>;<br>&nbsp;&nbsp;<span class=\「tag\」>let</span> <span class=\「text\」>fee</span> = <span class=\「text\」>fans</span> * <span class=\「text\」>rate</span>;<br>&nbsp;&nbsp;<span class=\「tag\」>let</span> <span class=\「text\」>person</span> = {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\「text\」>name</span>: <span class=\「text\」>name</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\「text\」>level</span>: <span class=\「text\」>level</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\「text\」>fee</span>: <span class=\「text\」>fee</span><br>&nbsp;&nbsp;};<br>&nbsp;&nbsp;<span class=\「text\」>influencers</span>.<span class=\「text\」>push</span>(<span class=\「text\」>person</span>);<br>&nbsp;&nbsp;<span class=\「tag\」>return</span> <span class=\「text\」>person</span>;<br>}",

            analogy: "这个项目就像你的Excel达人表格——每一行是一个对象（达人），每个对象有名字、等级、费用。函数就是计算公式，事件就是用户操作。你每天都在处理这些数据，只是以前用Excel，现在用代码。",
            tip: "综合练习的秘诀：别想一次写完。先写变量→再写函数→再加事件→最后调试。一步一步来，每步都能单独测试。"
          },
          {
            tag: "📚 复习",
            title: "知识点回顾——两周学了什么",
            explain:
              "Week 5：变量（let/const）、数据类型（字符串/数字/布尔值）、<br>字符串操作、数学运算、数组。<br>Week 6：条件判断（if/else）、循环（for/while）、函数、对象、事件。",
            code:
              "<span class=\「comment\」>// 两周知识点一览：</span><br><span class=\「comment\」>// 📦 变量: let / const</span><br><span class=\「comment\」>// 🔤 类型: string / number / boolean</span><br><span class=\「comment\」>// 📋 数组: [1, 2, 3] push/pop</span><br><span class=\「comment\」>// 🔀 判断: if / else / 三元</span><br><span class=\「comment\」>// 🔁 循环: for / while</span><br><span class=\「comment\」>// 📦 函数: function / return</span><br><span class=\「comment\」>// 🗂️ 对象: { key: value }</span><br><span class=\「comment\」>// ⚡ 事件: onclick</span>",

            analogy: "两周的学习就像搭积木：变量是最基本的积木块，数据是积木的颜色，函数是积木模具（可以批量做），对象是拼好的小造型，事件是让造型「活」起来的魔法。你现在已经有一整套积木了，可以做各种造型！",

            tip: "不要死记硬背语法！理解概念比记住写法重要100倍。语法忘了可以随时查，但理解了「变量就是贴标签的盒子\」这个概念，你就永远不会迷路。"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "HTML按钮的 onclick 属性绑定的是什么？",
            options: [
              "A. 样式",
              "B. 一个JavaScript函数",
              "C. 一个变量"
            ],
            answer: "B. 一个JavaScript函数",
            explanation: "onclick属性绑定的是JS函数。当用户点击按钮时，浏览器会执行这个函数。这是HTML和JS交互最基本的方式。"
          },
          {
            type: "选择题",
            question: "document.getElementById(\「msg\」).textContent = \「hi\」 做了什么？",

            options: [
              "A. 创建了一个新元素",
              "B. 把id为msg的元素的文字内容改为\「hi\」",

              "C. 删除了id为msg的元素"
            ],
            answer: "B. 把id为msg的元素的文字内容改为\「hi\」",

            explanation: "getElementById先找到id为\「msg\」的HTML元素，然后textContent=\「hi\」修改它的文字内容。这是JS修改页面内容最基础的操作。"

          },
          {
            type: "选择题",
            question: "以下代码综合了多个JS知识点。let items = []; function add(x) { items.push(x); return items.length; } add(\"a\"); add(\"b\"); items[0] 的值是？",
            options: [
              "A. \"a\"",
              "B. \"b\"",
              "C. 2"
            ],
            answer: "A. \"a\"",
            explanation: "add(\"a\")先把\"a\"推入items数组，items变成[\"a\"]，返回长度1。add(\"b\")再把\"b\"推入，items变成[\"a\",\"b\"]，返回长度2。items[0]是数组第一个元素，即最早加入的\"a\"。这道题综合了数组、函数、参数和返回值四个知识点！"
          }
        ]
      }
    ]
  }
],
  // Weeks 7-8: Projects
  ...[
  // ==================== 第7周 ====================
  {
    topic: '实战篇（上）— DOM操作和事件',
    days: [
      // ---- Day 1 ----
      {
        title: 'Day 1：让网页互动起来',
        desc: '认识DOM，用JavaScript找到网页元素',
        cards: [
          {
            tag: '🎯 什么是DOM',
            title: 'DOM是什么？',
            explain:
              '<strong>DOM</strong>（文档对象模型）是浏览器把网页变成的一种<strong>树形结构</strong>。<br>每个HTML标签、每段文字，在DOM里都是一个<strong>对象</strong>。<br>JavaScript通过DOM来<strong>读取、修改、删除</strong>网页上的任何内容。',
            code: '<span class="comment">// DOM = 网页的"遥控器"</span><br><span class="tag">const</span> <span class="text">title</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"myTitle"</span>);',
            analogy:
              '想象你在用电视遥控器：网页是电视画面，DOM就是遥控器，JavaScript就是你按按钮的手指——不用碰电视，就能换台、调音量！📺',
            tip: '打开浏览器按 F12，在 Console 里输入 `document` 回车，就能看到整个DOM树！'
          },
          {
            tag: '🌳 树形结构',
            title: '网页像一棵大树',
            explain:
              'DOM的结构像一棵<strong>倒过来的树</strong>：最上面是<strong>根节点</strong>（`<html>`），下面分出<strong>树枝</strong>（`<head>`和`<body>`），再分出<strong>树叶</strong>（各种标签）。<br>理解这棵树，你就知道如何用代码「摸」到任何一个元素。',
            code: '<span class="text">html</span><br>├── <span class="text">head</span><br>│   └── <span class="text">title</span> = "我的看板"<br>└── <span class="text">body</span><br>    ├── <span class="text">h1</span> = "达人刊例"<br>    └── <span class="text">table</span>',
            analogy:
              '就像公司的组织架构图：CEO（html）下面有VP（head/body），VP下面有各部门（标签），每个部门里是员工（文字内容）。你想找谁，顺着架构图就能找到！🏢',
            tip: '画一棵你自己的网页DOM树，把HTML标签画上去，理解会更深刻！'
          },
          {
            tag: '🎮 document对象',
            title: 'document对象 — 一切的起点',
            explain:
              '<strong>document</strong>是浏览器提供的全局对象，代表整个网页。<br>所有DOM操作都从它开始，它是你进入网页世界的<strong>大门</strong>。<br>没有document，JavaScript就看不到网页上的任何东西。',
            code: '<span class="comment">// document 代表整个网页</span><br><span class="text">document</span>.<span class="attr">title</span> <span class="comment">// → "达人刊例看板"</span><br><span class="text">document</span>.<span class="attr">body</span> <span class="comment">// → &lt;body&gt;...</span>',
            analogy:
              'document就像你家的门禁卡——有了它你才能进房子。进了门之后，你才能去开灯、开冰箱、看电视。🏠',
            tip: '试试 `document.title = \'新标题\'`，看浏览器标签页标题会不会变！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: 'DOM到底是什么？',
            options: [
              '一种编程语言',
              '浏览器把网页HTML变成的树形对象模型',
              '一种CSS样式',
              '一种服务器技术'
            ],
            answer: '浏览器把网页HTML变成的树形对象模型',
            explanation: 'DOM（Document Object Model）是浏览器解析HTML后生成的树形结构对象，JavaScript通过它来操作网页内容。'
          },
          {
            type: '判断题',
            question: 'document对象是JavaScript用来操作网页的起点。',
            options: ['正确 ✅', '错误 ❌'],
            answer: '正确 ✅',
            explanation: 'document是浏览器提供的全局对象，代表整个网页页面，所有DOM操作都从document开始。'
          },
          {
            type: '选择题',
            question: '在浏览器Console中输入 `document.title = "新标题"` 后，会发生什么？',
            options: [
              '报错，不能修改title',
              '浏览器标签页标题变成「新标题」',
              '网页内容变成「新标题」',
              '什么都没有发生'
            ],
            answer: '浏览器标签页标题变成「新标题」',
            explanation: 'document.title 属性控制浏览器标签页上显示的标题，修改它会立即生效，不需要刷新页面。'
          }
        ]
      },
      // ---- Day 2 ----
      {
        title: 'Day 2：精准找到元素',
        desc: '学习getElementById、querySelector等方法，精准定位网页元素',
        cards: [
          {
            tag: '🔍 getElementById',
            title: '用ID精准定位',
            explain:
              '<strong>getElementById</strong>通过元素的<strong>id属性</strong>来查找元素。<br>id在页面中是<strong>唯一</strong>的，所以这个方法只会返回一个元素。<br>这是最快、最常用的查找方式，就像用身份证号找人一样准确！',
            code: '<span class="comment">// HTML: &lt;h1 id="title"&gt;达人刊例&lt;/h1&gt;</span><br><span class="tag">const</span> <span class="text">title</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"title"</span>);<br><span class="text">console</span>.<span class="attr">log</span>(<span class="text">title</span>); <span class="comment">// → &lt;h1&gt;达人刊例&lt;/h1&gt;</span>',
            analogy:
              '就像在微信群里 @一个人：@小明 只会找到那一个特定的小明，不会找错。📱',
            tip: 'id不能重复！一个页面里同一个id只能出现一次，否则会找错元素。'
          },
          {
            tag: '🎯 querySelector',
            title: '万能查找器 querySelector',
            explain:
              '<strong>querySelector</strong>可以用CSS选择器的方式查找元素。<br>它可以找标签名、类名、id，甚至组合条件。<br>它返回找到的<strong>第一个</strong>匹配元素，非常灵活强大。',
            code: '<span class="comment">// 用标签名找</span><br><span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">"h1"</span>)<br><span class="comment">// 用类名找（注意前面的点）</span><br><span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">".card"</span>)<br><span class="comment">// 用id找（注意前面的#）</span><br><span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">"#totalSales"</span>)',
            analogy:
              '就像用淘宝搜索：你可以搜「手机」（标签名），也可以搜「苹果手机」（组合条件），querySelector帮你找到第一个最匹配的商品！🔍',
            tip: 'querySelector的语法和CSS一模一样！之前学的CSS选择器知识可以直接用上。'
          },
          {
            tag: '📦 querySelectorAll',
            title: '一次找出所有匹配的元素',
            explain:
              '<strong>querySelectorAll</strong>和querySelector类似，但它会返回<strong>所有</strong>匹配的元素。<br>返回的是一个类似数组的集合，可以用<strong>for循环</strong>来逐个处理。<br>非常适合批量操作，比如同时修改所有卡片的颜色。',
            code: '<span class="comment">// 找出所有带 .card 类的元素</span><br><span class="tag">const</span> <span class="text">cards</span> = <span class="text">document</span>.<span class="attr">querySelectorAll</span>(<span class="val">".card"</span>);<br><span class="comment">// 逐个修改背景色</span><br><span class="tag">for</span> (<span class="tag">const</span> <span class="text">card</span> <span class="tag">of</span> <span class="text">cards</span>) {<br>  <span class="text">card</span>.<span class="attr">style</span>.<span class="attr">backgroundColor</span> = <span class="val">"#f0f8ff"</span>;<br>}',
            analogy:
              '如果querySelector是「给我第一个穿红衣服的人」，那querySelectorAll就是「把所有穿红衣服的人都叫来」——一喊全到！👥',
            tip: '返回的集合不是真正的数组，不能直接用map/filter，但可以用for...of循环遍历。'
          },
          {
            tag: '📊 看板实战',
            title: '在看板中找到数据元素',
            explain:
              '在你的达人刊例看板中，每个数据指标都可以用id标记：<br><strong>总销售额</strong>、<strong>达人数量</strong>、<strong>转化率</strong>。<br>用getElementById就能精准拿到这些元素，然后用JavaScript更新数值。',
            code: '<span class="comment">// 找到看板中的销售额元素</span><br><span class="tag">const</span> <span class="text">salesEl</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"total-sales"</span>);<br><span class="comment">// 找到所有机构卡片</span><br><span class="tag">const</span> <span class="text">orgs</span> = <span class="text">document</span>.<span class="attr">querySelectorAll</span>(<span class="val">".org-card"</span>);<br><span class="text">console</span>.<span class="attr">log</span>(<span class="val">`找到 </span><span class="text">$</span>{<span class="text">orgs</span>.<span class="attr">length</span>}<span class="val"> 个机构`</span>);',
            analogy:
              '就像Excel里用单元格地址（A1、B2）来引用数据一样，DOM方法就是用代码版的「单元格地址」来找网页上的数据。📊',
            tip: '给重要数据元素加上有意义的id，比如 `total-sales`、`conversion-rate`，代码可读性会大大提高。'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: '如果页面上有3个 class="card" 的元素，querySelector(".card") 会返回什么？',
            options: [
              '所有3个卡片元素',
              '第1个匹配的卡片元素',
              'null',
              '报错'
            ],
            answer: '第1个匹配的卡片元素',
            explanation: 'querySelector只返回第一个匹配的元素。如果要获取所有匹配的，需要用querySelectorAll。'
          },
          {
            type: '选择题',
            question: '以下哪个方法可以通过id查找元素？',
            options: [
              'document.querySelector("#myId")',
              'document.getElementById("myId")',
              '两个都可以',
              '两个都不行'
            ],
            answer: '两个都可以',
            explanation: 'querySelector("#myId") 和 getElementById("myId") 都能通过id找到元素，效果相同。getElementById性能略快一些。'
          },
          {
            type: '选择题',
            question: 'querySelectorAll(".card") 返回的结果是什么类型？',
            options: [
              '真正的JavaScript数组',
              '单个DOM元素',
              '类似数组的集合（NodeList），可用for...of遍历',
              '字符串'
            ],
            answer: '类似数组的集合（NodeList），可用for...of遍历',
            explanation: 'querySelectorAll返回的是NodeList，它类似数组但不是真正的数组，不能直接用map/filter，但可以用for...of循环遍历。'
          }
        ]
      },
      // ---- Day 3 ----
      {
        title: 'Day 3：修改内容和样式',
        desc: '用JavaScript修改元素的文字、HTML、颜色和样式',
        cards: [
          {
            tag: '✏️ innerHTML',
            title: 'innerHTML — 修改HTML内容',
            explain:
              '<strong>innerHTML</strong>可以获取或设置元素的<strong>HTML内容</strong>。<br>不仅能改文字，还能插入完整的HTML标签（加粗、链接等）。<br>适合需要<strong>动态生成HTML</strong>的场景，比如看板上显示新的数据卡片。',
            code: '<span class="tag">const</span> <span class="text">card</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"data-card"</span>);<br><span class="comment">// 修改纯文字</span><br><span class="text">card</span>.<span class="attr">innerHTML</span> = <span class="val">"销售额：¥128,000"</span>;<br><span class="comment">// 插入带样式的HTML</span><br><span class="text">card</span>.<span class="attr">innerHTML</span> = <span class="val">"&lt;strong&gt;¥128,000&lt;/strong&gt; &lt;span style=\'color:green\'&gt;+15%&lt;/span&gt;"</span>;',
            analogy:
              'innerHTML就像Word里的「替换全部」功能——不仅能换文字，还能连带格式一起换，连加粗、颜色、链接都能塞进去！📝',
            tip: 'innerHTML可以插入HTML标签，但如果内容是用户输入的，要小心XSS安全问题。纯文字场景优先用textContent。'
          },
          {
            tag: '📝 textContent',
            title: 'textContent — 安全的纯文字修改',
            explain:
              '<strong>textContent</strong>只修改<strong>纯文本</strong>，不会解析HTML标签。<br>更安全，性能也更好。<br>当只需要改文字（比如数字、标题）时，推荐使用这个。',
            code: '<span class="tag">const</span> <span class="text">title</span> = <span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">"h1"</span>);<br><span class="text">title</span>.<span class="attr">textContent</span> = <span class="val">"2026年7月达人刊例"</span>;<br><span class="comment">// 即使写了HTML标签，也只当普通文字</span><br><span class="text">title</span>.<span class="attr">textContent</span> = <span class="val">"你好&lt;b&gt;世界&lt;/b&gt;"</span>;<br><span class="comment">// 页面上会显示：你好&lt;b&gt;世界&lt;/b&gt;（不是加粗）</span>',
            analogy:
              'textContent就像在便利贴上重新写字——不管你在便利贴上写什么，它都只是文字，不会变成什么特殊格式。📋',
            tip: '更新看板的数字指标（比如销售额、转化率）时，用textContent是最安全的选择！'
          },
          {
            tag: '🎨 style属性',
            title: '用JS修改CSS样式',
            explain:
              '每个DOM元素都有<strong>style属性</strong>，可以修改它的CSS样式。<br>注意JS里用<strong>驼峰命名</strong>：background-color变成backgroundColor。<br>可以改颜色、大小、位置……几乎任何CSS属性都能用JS改！',
            code: '<span class="tag">const</span> <span class="text">card</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"sales-card"</span>);<br><span class="comment">// 改背景色</span><br><span class="text">card</span>.<span class="attr">style</span>.<span class="attr">backgroundColor</span> = <span class="val">"#e8f5e9"</span>;<br><span class="comment">// 改字体大小</span><br><span class="text">card</span>.<span class="attr">style</span>.<span class="attr">fontSize</span> = <span class="val">"24px"</span>;<br><span class="comment">// 改边框</span><br><span class="text">card</span>.<span class="attr">style</span>.<span class="attr">border</span> = <span class="val">"2px solid #4caf50"</span>;<br><span class="comment">// 隐藏元素</span><br><span class="text">card</span>.<span class="attr">style</span>.<span class="attr">display</span> = <span class="val">"none"</span>;',
            analogy:
              '就像给房间换装修：刷墙漆（改背景色）、换家具大小（改字体）、挂窗帘（加边框）——房间还是那个房间，但看起来完全不一样了！🏠✨',
            tip: 'JS里CSS属性用驼峰命名：font-size → fontSize，text-align → textAlign。记住这个规则就不会错了！'
          },
          {
            tag: '📊 看板实战',
            title: '用JS更新看板数据',
            explain:
              '看板的核心价值是<strong>数据实时更新</strong>。<br>结合前面学的方法，我们可以<strong>找到数据元素</strong>，然后<strong>更新数字和颜色</strong>。<br>比如：销售额达标时变绿色，未达标时变红色。',
            code: '<span class="comment">// 更新销售额并变色</span><br><span class="tag">const</span> <span class="text">el</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"total-sales"</span>);<br><span class="text">el</span>.<span class="attr">textContent</span> = <span class="val">"¥128,000"</span>;<br><span class="tag">const</span> <span class="text">rate</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"conversion-rate"</span>);<br><span class="tag">if</span> (<span class="text">rateNum</span> >= <span class="val">5</span>) {<br>  <span class="text">rate</span>.<span class="attr">style</span>.<span class="attr">color</span> = <span class="val">"#4caf50"</span>; <span class="comment">// 绿色 ✅</span><br>} <span class="tag">else</span> {<br>  <span class="text">rate</span>.<span class="attr">style</span>.<span class="attr">color</span> = <span class="val">"#f44336"</span>; <span class="comment">// 红色 ❌</span><br>}',
            analogy:
              '就像汽车仪表盘：速度超过限速时指针区域变红，正常行驶是绿色。你的看板数据也应该「活」起来，用颜色告诉你数据的健康状态！🚗',
            tip: '在实际看板中，把数据更新逻辑封装成函数，比如 `updateSales(newNumber)`，以后调用就方便多了。'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: 'innerHTML 和 textContent 的区别是什么？',
            options: [
              '没有区别，完全一样',
              'innerHTML会解析HTML标签，textContent只当纯文字',
              'textContent会解析HTML标签，innerHTML只当纯文字',
              'innerHTML只能改文字，不能改HTML'
            ],
            answer: 'innerHTML会解析HTML标签，textContent只当纯文字',
            explanation: 'innerHTML会把内容当作HTML来解析和渲染，可以包含标签；textContent则把所有内容当作纯文本显示，即使写了HTML标签也会原样输出。'
          },
          {
            type: '选择题',
            question: '在JavaScript中，CSS属性 background-color 应该怎么写？',
            options: [
              'background-color',
              'background_color',
              'backgroundColor',
              'Backgroundcolor'
            ],
            answer: 'backgroundColor',
            explanation: 'JavaScript中CSS属性使用驼峰命名法（camelCase），去掉连字符并把后面的字母大写。background-color → backgroundColor。'
          },
          {
            type: '找错题',
            question: '以下代码有什么错误？\n`card.style.background-color = "red";`',
            options: [
              '没有错误，代码正确',
              '应该用驼峰命名：backgroundColor',
              '应该用下划线：background_color',
              '颜色值不能用字符串'
            ],
            answer: '应该用驼峰命名：backgroundColor',
            explanation: 'JavaScript中style属性的CSS属性名必须用驼峰命名法，background-color应写成backgroundColor，否则会导致语法错误（减号会被当作减法运算符）。'
          }
        ]
      },
      // ---- Day 4 ----
      {
        title: 'Day 4：事件处理',
        desc: '学习点击事件，让按钮和元素可以响应用户操作',
        cards: [
          {
            tag: '👆 onclick',
            title: 'onclick — 最简单的点击事件',
            explain:
              '<strong>onclick</strong>是最常用的事件处理方式。<br>当用户<strong>点击</strong>元素时，就会执行绑定的函数。<br>可以直接写在HTML里，也可以用JS来绑定。',
            code: '<span class="comment">// 方式1：HTML内联写法</span><br><span class="val">&lt;button onclick="alert(\'你好！\')"&gt;点我&lt;/button&gt;</span><br><br><span class="comment">// 方式2：JS绑定写法</span><br><span class="tag">const</span> <span class="text">btn</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"myBtn"</span>);<br><span class="text">btn</span>.<span class="attr">onclick</span> = <span class="tag">function</span>() {<br>  <span class="text">alert</span>(<span class="val">"你好！"</span>);<br>};',
            analogy:
              'onclick就像门铃按钮——你按一下，门铃就响。按一次响一次，简单直接！🔔',
            tip: '推荐用JS绑定的方式（方式2），把HTML和JS分开，代码更清晰好维护。'
          },
          {
            tag: '🎧 addEventListener',
            title: 'addEventListener — 更强大的事件绑定',
            explain:
              '<strong>addEventListener</strong>是更现代、更灵活的事件绑定方式。<br>可以给同一个元素绑定<strong>多个</strong>事件监听器。<br>支持的事件类型很多：click（点击）、mouseenter（鼠标移入）、keyup（按键抬起）等。',
            code: '<span class="tag">const</span> <span class="text">btn</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"refreshBtn"</span>);<br><span class="comment">// 点击事件</span><br><span class="text">btn</span>.<span class="attr">addEventListener</span>(<span class="val">"click"</span>, <span class="tag">function</span>() {<br>  <span class="text">alert</span>(<span class="val">"数据刷新中..."</span>);<br>});<br><span class="comment">// 还可以加第二个监听器</span><br><span class="text">btn</span>.<span class="attr">addEventListener</span>(<span class="val">"mouseenter"</span>, <span class="tag">function</span>() {<br>  <span class="text">btn</span>.<span class="attr">style</span>.<span class="attr">cursor</span> = <span class="val">"pointer"</span>;<br>});',
            analogy:
              'addEventListener就像办活动时可以请多个主持人——onclick只能请一个，addEventListener可以请一群，各自负责不同的环节！🎪',
            tip: 'addEventListener的第一个参数是事件名（不要加on），第二个是函数。记住：是 "click" 不是 "onclick"！'
          },
          {
            tag: '⌨️ 常见事件类型',
            title: '事件不只点击——常见事件一览',
            explain:
              '除了<strong>click</strong>，还有很多常用的事件类型：<br><strong>dblclick</strong>（双击）、<strong>mouseover/mouseout</strong>（鼠标移入移出）、<br><strong>input</strong>（输入框内容变化）、<strong>change</strong>（下拉框选项改变）、<br><strong>keydown/keyup</strong>（键盘按键）。<br>每种事件对应不同的用户行为。',
            code: '<span class="comment">// 鼠标移入时变亮</span><br><span class="text">card</span>.<span class="attr">addEventListener</span>(<span class="val">"mouseover"</span>, () => {<br>  <span class="text">card</span>.<span class="attr">style</span>.<span class="attr">boxShadow</span> = <span class="val">"0 4px 12px rgba(0,0,0,0.2)"</span>;<br>});<br><span class="comment">// 鼠标移出时恢复</span><br><span class="text">card</span>.<span class="attr">addEventListener</span>(<span class="val">"mouseout"</span>, () => {<br>  <span class="text">card</span>.<span class="attr">style</span>.<span class="attr">boxShadow</span> = <span class="val">"none"</span>;<br>});',
            analogy:
              '事件类型就像不同场景的「传感器」：门磁传感器（click）、光线传感器（mouseover）、声音传感器（keydown）——每种传感器触发不同的反应！🤖',
            tip: 'hover效果用CSS做更简单（:hover伪类），但如果你需要复杂的交互逻辑，用JS事件处理更灵活。'
          },
          {
            tag: '📊 看板实战',
            title: '看板中的交互事件',
            explain:
              '看板中的按钮、筛选下拉框、刷新按钮，都需要<strong>事件监听</strong>。<br>比如点击<strong>「筛选机构」</strong>按钮时，只显示目标机构的数据。<br>鼠标移到<strong>数据卡片</strong>上时显示更多信息（tooltip效果）。',
            code: '<span class="comment">// 筛选按钮：点击后只看某机构</span><br><span class="tag">const</span> <span class="text">filterBtn</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"filter-org"</span>);<br><span class="text">filterBtn</span>.<span class="attr">addEventListener</span>(<span class="val">"click"</span>, () => {<br>  <span class="tag">const</span> <span class="text">cards</span> = <span class="text">document</span>.<span class="attr">querySelectorAll</span>(<span class="val">".org-card"</span>);<br>  <span class="tag">for</span> (<span class="tag">const</span> <span class="text">c</span> <span class="tag">of</span> <span class="text">cards</span>) {<br>    <span class="tag">if</span> (<span class="text">c</span>.<span class="attr">dataset</span>.<span class="attr">org</span> === <span class="val">"star"</span>) {<br>      <span class="text">c</span>.<span class="attr">style</span>.<span class="attr">display</span> = <span class="val">"block"</span>; <span class="comment">// 显示</span><br>    } <span class="tag">else</span> {<br>      <span class="text">c</span>.<span class="attr">style</span>.<span class="attr">display</span> = <span class="val">"none"</span>; <span class="comment">// 隐藏</span><br>    }<br>  }<br>});',
            analogy:
              '就像在餐厅用「只看川菜」的筛选按钮——按一下，菜单上只显示川菜，其他菜系都藏起来了。再按一下「全部」，所有菜又回来了！🍽️',
            tip: 'dataset属性可以读取HTML中 data-* 开头的自定义属性，比如 `<div data-org="star">`，用 `el.dataset.org` 就能拿到值。'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: 'addEventListener的第一个参数应该怎么写？',
            options: [
              '"onclick"',
              '"click"',
              'click',
              'onClick'
            ],
            answer: '"click"',
            explanation: 'addEventListener的事件名不带"on"前缀，且必须是字符串。所以是 "click" 而不是 "onclick"。'
          },
          {
            type: '判断题',
            question: '一个元素只能用addEventListener绑定一个事件。',
            options: ['正确 ✅', '错误 ❌'],
            answer: '错误 ❌',
            explanation: 'addEventListener可以为同一个元素绑定多个事件，也可以为同一事件绑定多个处理函数。这是它比onclick更强大的地方。'
          },
          {
            type: '选择题',
            question: '如果想监听用户在输入框中打字时的实时变化，应该使用哪个事件？',
            options: [
              '"click"',
              '"input"',
              '"submit"',
              '"focus"'
            ],
            answer: '"input"',
            explanation: 'input事件在输入框内容每次发生变化时触发（包括键盘输入、粘贴等），非常适合实时搜索、实时验证等场景。'
          }
        ]
      },
      // ---- Day 5 ----
      {
        title: 'Day 5：综合小练习',
        desc: '用本周所学知识，亲手做一个互动小工具',
        cards: [
          {
            tag: '🔢 练习1：点击计数器',
            title: '做一个点击计数器',
            explain:
              '综合运用DOM查找、内容修改、事件处理，<br>做一个<strong>点击计数器</strong>：每点一次按钮，数字加1。<br>这是理解DOM操作的经典入门练习！',
            code: '<span class="comment">// HTML 结构：</span><br><span class="comment">// &lt;h2 id="counter"&gt;0&lt;/h2&gt;</span><br><span class="comment">// &lt;button id="btn"&gt;+1&lt;/button&gt;</span><br><br><span class="tag">let</span> <span class="text">count</span> = <span class="val">0</span>;<br><span class="tag">const</span> <span class="text">display</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"counter"</span>);<br><span class="tag">const</span> <span class="text">btn</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"btn"</span>);<br><br><span class="text">btn</span>.<span class="attr">addEventListener</span>(<span class="val">"click"</span>, () => {<br>  <span class="text">count</span>++;<br>  <span class="text">display</span>.<span class="attr">textContent</span> = <span class="text">count</span>;<br>});',
            analogy:
              '就像超市门口的「今日客流计数器」——每进来一个人，工作人员按一下按钮，数字就加1。你做的就是这个计数器！🏪',
            tip: '试试加一个「重置」按钮，点击后把计数器清零，巩固所学知识！'
          },
          {
            tag: '🎨 练习2：颜色切换器',
            title: '做一个颜色切换器',
            explain:
              '做一个<strong>按钮切换颜色</strong>的小工具：<br>每次点击按钮，背景颜色在几个预设颜色中切换。<br>练习style属性的修改和数组的使用。',
            code: '<span class="tag">const</span> <span class="text">colors</span> = [<span class="val">"#ff6b6b"</span>, <span class="val">"#ffd93d"</span>, <span class="val">"#6bcb77"</span>, <span class="val">"#4d96ff"</span>, <span class="val">"#9b59b6"</span>];<br><span class="tag">let</span> <span class="text">index</span> = <span class="val">0</span>;<br><span class="tag">const</span> <span class="text">body</span> = <span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">"body"</span>);<br><span class="tag">const</span> <span class="text">btn</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"colorBtn"</span>);<br><br><span class="text">btn</span>.<span class="attr">addEventListener</span>(<span class="val">"click"</span>, () => {<br>  <span class="text">index</span> = (<span class="text">index</span> + <span class="val">1</span>) % <span class="text">colors</span>.<span class="attr">length</span>;<br>  <span class="text">body</span>.<span class="attr">style</span>.<span class="attr">backgroundColor</span> = <span class="text">colors</span>[<span class="text">index</span>];<br>});',
            analogy:
              '就像按遥控器换电视背景墙的颜色——按一下红色，再一下黄色，再一下绿色，循环播放！🎨',
            tip: '用 `% colors.length` 可以让索引自动循环，不用写 if 判断，这就是取余运算符的妙用！'
          },
          {
            tag: '📊 练习3：看板迷你版',
            title: '做一个迷你看板',
            explain:
              '综合运用本周全部知识：<br>创建一个<strong>迷你数据看板</strong>，包含标题、3个数据卡片、一个刷新按钮。<br>点击刷新按钮时，随机更新卡片中的数字。',
            code: '<span class="tag">function</span> <span class="attr">randomSales</span>() {<br>  <span class="tag">return</span> <span class="text">Math</span>.<span class="attr">floor</span>(<span class="text">Math</span>.<span class="attr">random</span>() * <span class="val">200000</span>);<br>}<br><br><span class="tag">function</span> <span class="attr">updateBoard</span>() {<br>  <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"sales"</span>).<span class="attr">textContent</span><br>    = <span class="val">"¥"</span> + <span class="attr">randomSales</span>();<br>  <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"creators"</span>).<span class="attr">textContent</span><br>    = <span class="attr">randomSales</span>() / <span class="val">1000</span> + <span class="val">"人"</span>;<br>}<br><br><span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"refresh"</span>)<br>  .<span class="attr">addEventListener</span>(<span class="val">"click"</span>, <span class="attr">updateBoard</span>);',
            analogy:
              '就像股票APP的「刷新行情」按钮——一点一下，所有价格数字全部更新。你的迷你看板做的就是同样的事！📈',
            tip: '把更新逻辑写成函数（updateBoard），以后可以直接调用，不需要每次写一堆代码。这就是函数的威力！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: '点击计数器的核心原理是什么？',
            options: [
              '用HTML重新写一遍整个页面',
              '用一个变量记录次数，点击时变量+1，然后把变量显示到页面上',
              '刷新页面让数字自动增加',
              '修改CSS样式'
            ],
            answer: '用一个变量记录次数，点击时变量+1，然后把变量显示到页面上',
            explanation: '计数器的核心三步：1. 用变量记住当前数字 2. 点击事件触发时变量+1 3. 用DOM方法把新数字更新到页面上。'
          },
          {
            type: '填空题',
            question: '在颜色切换器中，`index = (index + 1) % colors.length` 的作用是什么？',
            options: [
              '让索引在数组范围内循环',
              '删除数组最后一个元素',
              '把索引变成负数',
              '让数组变长'
            ],
            answer: '让索引在数组范围内循环',
            explanation: '取余运算符 % 保证了索引始终在 0 到 colors.length-1 之间循环，到达末尾后自动回到0。'
          },
          {
            type: '选择题',
            question: '迷你看板中 `Math.floor(Math.random() * 200000)` 的作用是什么？',
            options: [
              '生成一个固定的数字',
              '生成0到199999之间的随机整数',
              '生成0到200000之间的小数',
              '把200000变成负数'
            ],
            answer: '生成0到199999之间的随机整数',
            explanation: 'Math.random()生成0到1之间的随机小数，乘以200000后变成0到199999.999...，再用Math.floor()取整得到0到199999的随机整数。'
          }
        ]
      }
    ]
  },

  // ==================== 第8周 ====================
  {
    topic: '实战篇（下）— 综合看板项目',
    days: [
      // ---- Day 1 ----
      {
        title: 'Day 1：读懂看板代码（上）',
        desc: '分析一个真实看板HTML结构，找到关键部分',
        cards: [
          {
            tag: '🏗️ 结构分析',
            title: '看板HTML整体结构',
            explain:
              '一个完整的达人刊例看板，HTML结构通常分为<strong>三大块</strong>：<br><strong>头部</strong>（header）：标题、日期、操作按钮。<br><strong>主体</strong>（main）：数据卡片、表格、图表。<br><strong>底部</strong>（footer）：数据来源、更新时间。<br>就像读文章先看段落结构一样，先看HTML骨架。',
            code: '<span class="val">&lt;div class="dashboard"&gt;</span><br>  <span class="val">&lt;header&gt;</span> <span class="comment">&lt;!-- 标题区 --&gt;</span><br>    <span class="val">&lt;h1&gt;</span>达人刊例看板<span class="val">&lt;/h1&gt;</span><br>    <span class="val">&lt;button id="refresh"&gt;</span>刷新数据<span class="val">&lt;/button&gt;</span><br>  <span class="val">&lt;/header&gt;</span><br>  <span class="val">&lt;main&gt;</span> <span class="comment">&lt;!-- 数据区 --&gt;</span><br>    <span class="val">&lt;div class="cards"&gt;</span>...<span class="val">&lt;/div&gt;</span><br>    <span class="val">&lt;table&gt;</span>...<span class="val">&lt;/table&gt;</span><br>  <span class="val">&lt;/main&gt;</span><br><span class="val">&lt;/div&gt;</span>',
            analogy:
              '就像看一份PPT：先看目录（整体结构），知道有封面、正文、结尾三部分，再看每一页的内容。不要一上来就钻到细节里！📑',
            tip: '读HTML代码时，先看最外层的容器（最上面的`<div>`和最下面的`</div>`），然后一层层往里看。'
          },
          {
            tag: '🔑 关键元素',
            title: '找到数据展示的核心元素',
            explain:
              '看板中最重要的部分是<strong>数据展示区域</strong>。<br>通常包括：<strong>数据卡片</strong>（大数字指标）、<strong>表格</strong>（详细数据列表）、<strong>图表容器</strong>（可视化图形）。<br>每个区域都应该有清晰的class或id标记。',
            code: '<span class="comment">&lt;!-- 关键数据指标卡片 --&gt;</span><br><span class="val">&lt;div class="kpi-cards"&gt;</span><br>  <span class="val">&lt;div class="kpi-card" id="total-sales"&gt;</span><br>    <span class="val">&lt;h3&gt;</span>总销售额<span class="val">&lt;/h3&gt;</span><br>    <span class="val">&lt;span class="number"&gt;</span>¥128,000<span class="val">&lt;/span&gt;</span><br>    <span class="val">&lt;span class="trend up"&gt;</span>+15%<span class="val">&lt;/span&gt;</span><br>  <span class="val">&lt;/div&gt;</span><br>  <span class="val">&lt;div class="kpi-card" id="conversion"&gt;</span><br>    <span class="val">&lt;h3&gt;</span>转化率<span class="val">&lt;/h3&gt;</span><br>    <span class="val">&lt;span class="number"&gt;</span>3.2%<span class="val">&lt;/span&gt;</span><br>  <span class="val">&lt;/div&gt;</span><br><span class="val">&lt;/div&gt;</span>',
            analogy:
              '就像体检报告：最重要的几项指标（血压、血糖、血脂）放在最醒目的位置，详细数据在后面。看板的KPI卡片就是这些「关键指标」！🏥',
            tip: '注意看每个卡片的id和class，这是后续用JavaScript操作它们的「把手」。'
          },
          {
            tag: '📋 表格结构',
            title: '读懂看板中的表格',
            explain:
              '看板的<strong>数据表格</strong>通常包含：机构名、内容形式、报价、转化率等。<br>HTML表格用<strong>&lt;table&gt;</strong>标签包裹，<strong>&lt;tr&gt;</strong>表示行，<br><strong>&lt;th&gt;</strong>是表头（列名），<strong>&lt;td&gt;</strong>是数据单元格。',
            code: '<span class="val">&lt;table class="org-table"&gt;</span><br>  <span class="val">&lt;thead&gt;</span><br>    <span class="val">&lt;tr&gt;</span><br>      <span class="val">&lt;th&gt;</span>机构<span class="val">&lt;/th&gt;</span><br>      <span class="val">&lt;th&gt;</span>报价<span class="val">&lt;/th&gt;</span><br>      <span class="val">&lt;th&gt;</span>转化率<span class="val">&lt;/th&gt;</span><br>    <span class="val">&lt;/tr&gt;</span><br>  <span class="val">&lt;/thead&gt;</span><br>  <span class="val">&lt;tbody&gt;</span><br>    <span class="val">&lt;tr data-org="star"&gt;</span><br>      <span class="val">&lt;td&gt;</span>星辰传媒<span class="val">&lt;/td&gt;</span><br>      <span class="val">&lt;td&gt;</span>¥15,000<span class="val">&lt;/td&gt;</span><br>      <span class="val">&lt;td&gt;</span>5.2%<span class="val">&lt;/td&gt;</span><br>    <span class="val">&lt;/tr&gt;</span><br>  <span class="val">&lt;/tbody&gt;</span><br><span class="val">&lt;/table&gt;</span>',
            analogy:
              'HTML表格的结构和你天天看的Excel一模一样：thead是标题行，tbody是数据区，每一行tr就是一条记录。你已经很熟悉了！📊',
            tip: '注意 `data-org="star"` 这样的自定义属性，这是JS做筛选和排序时的重要标识。'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: '看板HTML通常分为哪三大部分？',
            options: [
              '标题、正文、注释',
              '头部(header)、主体(main)、底部(footer)',
              '输入、处理、输出',
              'HTML、CSS、JS'
            ],
            answer: '头部(header)、主体(main)、底部(footer)',
            explanation: '标准看板布局分为header（标题和操作区）、main（数据展示区）、footer（补充信息区），结构清晰好维护。'
          },
          {
            type: '判断题',
            question: 'HTML表格中的 <th> 标签表示数据单元格。',
            options: ['正确 ✅', '错误 ❌'],
            answer: '错误 ❌',
            explanation: '<th> 表示表头单元格（通常加粗居中显示列名），<td> 才是普通的数据单元格。'
          },
          {
            type: '选择题',
            question: 'HTML中的 `data-org="star"` 是什么？',
            options: [
              '一个CSS类名',
              '一个自定义数据属性，可以用 element.dataset.org 读取',
              '一个JavaScript变量',
              '一个错误的写法'
            ],
            answer: '一个自定义数据属性，可以用 element.dataset.org 读取',
            explanation: 'HTML中以 data- 开头的属性是自定义数据属性，JavaScript中可以通过 el.dataset.org 来读取其值，常用于存储与元素相关的额外数据。'
          }
        ]
      },
      // ---- Day 2 ----
      {
        title: 'Day 2：读懂看板代码（下）',
        desc: '分析CSS样式，理解布局和配色方案',
        cards: [
          {
            tag: '🎨 配色分析',
            title: '看板的配色方案',
            explain:
              '好的看板<strong>配色有层次</strong>：<br><strong>主色</strong>用于关键数据（如品牌蓝），<strong>辅助色</strong>用于趋势标识（涨=绿、跌=红）。<br>背景用浅色，文字用深色，保证<strong>可读性</strong>。<br>数据可视化中，不同类别用不同颜色区分。',
            code: '<span class="comment">/* 主色：品牌蓝 */</span><br><span class="attr">--primary</span>: <span class="val">#2563eb</span>;<br><span class="comment">/* 成功：绿色 */</span><br><span class="attr">--success</span>: <span class="val">#16a34a</span>;<br><span class="comment">/* 警告：橙色 */</span><br><span class="attr">--warning</span>: <span class="val">#ea580c</span>;<br><span class="comment">/* 趋势上升 */</span><br><span class="val">.trend.up</span> { <span class="attr">color</span>: <span class="val">var(--success)</span>; }<br><span class="comment">/* 趋势下降 */</span><br><span class="val">.trend.down</span> { <span class="attr">color</span>: <span class="val">var(--warning)</span>; }',
            analogy:
              '就像交通灯：绿色=通行（数据增长），红色=停止（数据下降），黄色=注意（需要关注）。好的看板用颜色「说话」，一眼就知道数据状况！🚦',
            tip: '用CSS变量（--primary）定义颜色，以后改主题色只需要改一处，所有引用都会自动更新。'
          },
          {
            tag: '📐 布局分析',
            title: 'Flexbox网格布局',
            explain:
              '看板中的数据卡片通常用<strong>Flexbox或Grid</strong>布局。<br><strong>display: flex</strong>让卡片横向排列，<strong>gap</strong>控制间距，<br><strong>flex-wrap: wrap</strong>让卡片自动换行。<br>这样在大屏上显示一排多个，小屏自动换行。',
            code: '<span class="val">.kpi-cards</span> {<br>  <span class="attr">display</span>: <span class="val">flex</span>;       <span class="comment">/* 启用弹性布局 */</span><br>  <span class="attr">gap</span>: <span class="val">20px</span>;           <span class="comment">/* 卡片间距 */</span><br>  <span class="attr">flex-wrap</span>: <span class="val">wrap</span>;     <span class="comment">/* 空间不够自动换行 */</span><br>}<br><span class="val">.kpi-card</span> {<br>  <span class="attr">flex</span>: <span class="val">1</span>;               <span class="comment">/* 平均分配空间 */</span><br>  <span class="attr">min-width</span>: <span class="val">200px</span>;    <span class="comment">/* 最小宽度 */</span><br>  <span class="attr">padding</span>: <span class="val">20px</span>;<br>  <span class="attr">border-radius</span>: <span class="val">12px</span>;<br>  <span class="attr">background</span>: <span class="val">white</span>;<br>}',
            analogy:
              'Flexbox就像排队——大家站成一排，有固定间距，人多了自动排成第二排。flex:1的意思是「每个人都分到一样宽的位置」！👫',
            tip: '改gap的值就能调整卡片间距，改min-width就能控制每行最多显示几个卡片，试试看！'
          },
          {
            tag: '📋 表格样式',
            title: '表格的美观样式',
            explain:
              '表格样式的关键点：<strong>隔行变色</strong>（提升可读性）、<br><strong>表头固定</strong>（滚动时可见）、<strong>边框线</strong>分隔单元格、<br><strong>hover高亮</strong>（鼠标移到行时变色）。<br>这些样式让数据一目了然。',
            code: '<span class="val">.org-table</span> {<br>  <span class="attr">width</span>: <span class="val">100%</span>;<br>  <span class="attr">border-collapse</span>: <span class="val">collapse</span>; <span class="comment">/* 合并边框 */</span><br>}<br><span class="comment">/* 隔行变色 */</span><br><span class="val">.org-table tbody tr:nth-child(even)</span> {<br>  <span class="attr">background</span>: <span class="val">#f8fafc</span>;<br>}<br><span class="comment">/* 鼠标移入高亮 */</span><br><span class="val">.org-table tbody tr:hover</span> {<br>  <span class="attr">background</span>: <span class="val">#e8f0fe</span>;<br>}',
            analogy:
              '隔行变色就像笔记本上的横线纸——有了横线，一行一行看就不会串行。鼠标移入高亮就像用荧光笔标记正在看的那一行！📓',
            tip: '`nth-child(even)` 选中偶数行，`nth-child(odd)` 选中奇数行。这是CSS的「隔行选择器」，做表格样式超好用。'
          },
          {
            tag: '📊 看板实战',
            title: '拆解你的达人刊例看板',
            explain:
              '拿出你之前做的达人刊例看板HTML文件，<br>用今天学的方法<strong>逐层分析</strong>：<br>1. 最外层容器是什么？ 2. 有几个数据卡片？<br>3. 用了什么颜色方案？ 4. 布局是flex还是grid？<br>把分析结果记在笔记里，这是你读代码能力的重要练习！',
            code: '<span class="comment">/* 分析笔记模板 */</span><br><span class="comment">// 1. 容器: &lt;div class="dashboard"&gt;</span><br><span class="comment">// 2. 卡片数: 4个 (销售额/转化/达人/内容)</span><br><span class="comment">// 3. 主色: #2563eb (蓝) 辅色: #16a34a (绿)</span><br><span class="comment">// 4. 布局: flex + gap: 20px</span><br><span class="comment">// 5. 表格: 隔行变色 ✓ hover高亮 ✓</span><br><span class="comment">// 6. 响应式: ✓ (flex-wrap: wrap)</span>',
            analogy:
              '就像拆开一个快递：先看外包装多大（容器），再看里面有几件东西（卡片），每件是什么颜色、什么形状（样式），最后拼起来就是完整的样子！📦',
            tip: '用浏览器的F12开发者工具，点击「元素检查」按钮，鼠标移到页面上就能看到对应的HTML代码，非常方便！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: 'CSS中 `flex-wrap: wrap` 的作用是什么？',
            options: [
              '让元素重叠在一起',
              '当空间不够时，让元素自动换行到下一排',
              '隐藏超出容器的元素',
              '让元素垂直排列'
            ],
            answer: '当空间不够时，让元素自动换行到下一排',
            explanation: 'flex-wrap: wrap 让弹性布局中的子元素在容器宽度不够时自动换行，是响应式布局的关键属性。'
          },
          {
            type: '选择题',
            question: 'CSS变量 `--primary: #2563eb` 定义后，如何引用这个变量？',
            options: [
              'color: --primary;',
              'color: var(--primary);',
              'color: primary;',
              'color: #2563eb;'
            ],
            answer: 'color: var(--primary);',
            explanation: 'CSS变量需要用 var() 函数来引用，格式为 var(--变量名)。这样修改变量值时，所有引用的地方都会自动更新。'
          },
          {
            type: '填空题',
            question: 'CSS中 `:nth-child(even)` 的作用是什么？',
            options: [
              '选中第一个子元素',
              '选中所有偶数位置的子元素',
              '选中所有奇数位置的子元素',
              '选中最后一个子元素'
            ],
            answer: '选中所有偶数位置的子元素',
            explanation: 'nth-child(even) 是CSS伪类选择器，选中父元素下第2、4、6...等偶数位置的子元素，常用于表格隔行变色。nth-child(odd) 则选中奇数位置。'
          }
        ]
      },
      // ---- Day 3 ----
      {
        title: 'Day 3：修改看板样式',
        desc: '用学到的知识修改看板颜色、字体和布局',
        cards: [
          {
            tag: '🎨 换主题色',
            title: '把看板换成你的品牌色',
            explain:
              '只需要修改CSS<strong>变量</strong>的值，就能一键更换整个看板的主题色。<br>所有用到 <strong>var(--primary)</strong> 的地方都会自动更新。<br>这是CSS变量最强大的地方——<strong>一处修改，全局生效</strong>！',
            code: '<span class="comment">/* 原版：科技蓝 */</span><br><span class="attr">--primary</span>: <span class="val">#2563eb</span>;<br><span class="comment">/* 换成：活力橙 🍊 */</span><br><span class="attr">--primary</span>: <span class="val">#f97316</span>;<br><span class="comment">/* 换成：清新绿 🌿 */</span><br><span class="attr">--primary</span>: <span class="val">#16a34a</span>;<br><span class="comment">/* 换成：优雅紫 💜 */</span><br><span class="attr">--primary</span>: <span class="val">#8b5cf6</span>;<br><span class="comment">// 改一行，标题、按钮、链接、边框全都变色！</span>',
            analogy:
              'CSS变量就像手机的主题模式——切换「深色模式」，整个APP的颜色都变了。你只需要选一个主题，不用一个页面一个页面改！📱',
            tip: '试试把看板换成你喜欢的颜色，截图前后对比发给朋友看，成就感满满！'
          },
          {
            tag: '✍️ 调整字体',
            title: '让数字和标题更醒目',
            explain:
              '看板中的<strong>数字</strong>是最重要的信息，应该更醒目。<br>用 <strong>font-weight: bold</strong> 加粗，<strong>font-size</strong> 调大字号。<br>可以用Google Fonts引入好看的数字字体（如 Roboto）。',
            code: '<span class="val">.kpi-card .number</span> {<br>  <span class="attr">font-size</span>: <span class="val">32px</span>;       <span class="comment">/* 大号数字 */</span><br>  <span class="attr">font-weight</span>: <span class="val">700</span>;     <span class="comment">/* 加粗 */</span><br>  <span class="attr">font-family</span>: <span class="val">"Roboto", sans-serif</span>;<br>  <span class="attr">letter-spacing</span>: <span class="val">-0.5px</span>; <span class="comment">/* 数字紧凑更好看 */</span><br>}<br><span class="val">.kpi-card h3</span> {<br>  <span class="attr">font-size</span>: <span class="val">14px</span>;       <span class="comment">/* 标题小一些 */</span><br>  <span class="attr">color</span>: <span class="val">#64748b</span>;        <span class="comment">/* 浅灰色 */</span><br>  <span class="attr">text-transform</span>: <span class="val">uppercase</span>; <span class="comment">/* 全大写 */</span><br>}',
            analogy:
              '就像报纸排版：标题用粗体大字吸引注意，正文用小字提供细节。看板的数字就是「大标题」，要让看的人第一眼就看到！📰',
            tip: 'letter-spacing 设为负值（如 -0.5px）可以让数字看起来更紧凑专业，很多数据产品都这么做。'
          },
          {
            tag: '📐 调整间距',
            title: '让看板呼吸起来',
            explain:
              '好的间距让数据更<strong>易读</strong>。<br>增加 <strong>padding</strong>（内边距）让卡片内容不那么挤，<br>增加 <strong>gap</strong>（间距）让卡片之间留白。<br>「呼吸感」是专业设计的重要标志！',
            code: '<span class="comment">/* 紧凑型 ❌ */</span><br><span class="val">.kpi-card</span> { <span class="attr">padding</span>: <span class="val">10px</span>; }<br><span class="val">.kpi-cards</span> { <span class="attr">gap</span>: <span class="val">8px</span>; }<br><br><span class="comment">/* 舒适型 ✅ */</span><br><span class="val">.kpi-card</span> { <span class="attr">padding</span>: <span class="val">24px</span>; }<br><span class="val">.kpi-cards</span> { <span class="attr">gap</span>: <span class="val">24px</span>; }<br><br><span class="comment">/* 数字对比一目了然！ */</span>',
            analogy:
              '就像餐厅摆盘：菜和盘子边缘留点空间，看着就高级；塞得满满的，就算菜再好吃也显得廉价。设计也是一样的道理！🍽️',
            tip: '专业设计常用 8 的倍数做间距（8、16、24、32），这是「8pt网格系统」，试试用这个规律调间距！'
          },
          {
            tag: '📊 看板实战',
            title: '个性化你的看板',
            explain:
              '现在动手改造你的看板：<br>1. 换成你喜欢的<strong>主题色</strong> 2. 调整数字<strong>字号和字重</strong><br>3. 增加卡片的<strong>圆角和阴影</strong><br>4. 给表格添加<strong>隔行变色</strong><br>改完刷新浏览器，效果立竿见影！',
            code: '<span class="comment">/* 卡片美化 */</span><br><span class="val">.kpi-card</span> {<br>  <span class="attr">border-radius</span>: <span class="val">16px</span>;     <span class="comment">/* 更圆润的圆角 */</span><br>  <span class="attr">box-shadow</span>: <span class="val">0 2px 8px rgba(0,0,0,0.08)</span>; <span class="comment">/* 轻柔阴影 */</span><br>  <span class="attr">transition</span>: <span class="val">box-shadow 0.3s</span>; <span class="comment">/* 悬停过渡 */</span><br>}<br><span class="val">.kpi-card:hover</span> {<br>  <span class="attr">box-shadow</span>: <span class="val">0 4px 16px rgba(0,0,0,0.12)</span>;<br>  <span class="attr">transform</span>: <span class="val">translateY(-2px)</span>; <span class="comment">/* 微微上浮 */</span><br>}',
            analogy:
              '就像装修房子：换墙纸（主题色）、换家具（字体大小）、调整家具间距（padding）、加灯光效果（阴影）。一步步来，房子越来越温馨！🏡',
            tip: '加 transition 属性让hover效果有平滑过渡动画，不用JS也能做出精美的交互效果！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: '修改CSS变量后，所有引用该变量的地方会怎样？',
            options: [
              '只有第一个引用的地方会改变',
              '所有引用该变量的地方都会自动更新',
              '需要手动刷新每个页面',
              '会报错'
            ],
            answer: '所有引用该变量的地方都会自动更新',
            explanation: 'CSS变量的核心优势就是「一处定义，处处引用」。修改 :root 中的变量值，所有 var(--xxx) 引用的地方都会自动使用新值。'
          },
          {
            type: '选择题',
            question: '以下哪个CSS属性可以让卡片在鼠标移入时有平滑过渡效果？',
            options: [
              'animation: smooth',
              'transition: box-shadow 0.3s',
              'transform: smooth',
              'hover: 0.3s'
            ],
            answer: 'transition: box-shadow 0.3s',
            explanation: 'transition 属性定义状态变化时的过渡动画。transition: box-shadow 0.3s 表示阴影变化在0.3秒内平滑完成，而不是瞬间跳变。'
          },
          {
            type: '选择题',
            question: '专业设计常用的「8pt网格系统」是什么意思？',
            options: [
              '页面必须分成8个部分',
              '间距、边距等尺寸使用8的倍数（如8、16、24、32）',
              '字体大小必须是8px',
              '网格只能有8列'
            ],
            answer: '间距、边距等尺寸使用8的倍数（如8、16、24、32）',
            explanation: '8pt网格系统是UI设计中常用的间距规范，所有padding、margin、gap等间距值都取8的倍数，保证视觉节奏统一和谐。'
          }
        ]
      },
      // ---- Day 4 ----
      {
        title: 'Day 4：添加互动功能',
        desc: '用JavaScript给看板添加筛选和排序按钮',
        cards: [
          {
            tag: '🔍 筛选功能',
            title: '按机构筛选数据',
            explain:
              '看板中最实用的功能之一就是<strong>筛选</strong>。<br>点击某个机构按钮，表格只显示该机构的数据。<br>核心思路：用JS找到所有行，判断是否符合条件，<strong>不符合的行隐藏</strong>。',
            code: '<span class="tag">function</span> <span class="attr">filterByOrg</span>(<span class="text">orgName</span>) {<br>  <span class="tag">const</span> <span class="text">rows</span> = <span class="text">document</span>.<span class="attr">querySelectorAll</span>(<span class="val">".org-table tbody tr"</span>);<br>  <span class="tag">for</span> (<span class="tag">const</span> <span class="text">row</span> <span class="tag">of</span> <span class="text">rows</span>) {<br>    <span class="tag">if</span> (<span class="text">orgName</span> === <span class="val">"all"</span> || <span class="text">row</span>.<span class="attr">dataset</span>.<span class="attr">org</span> === <span class="text">orgName</span>) {<br>      <span class="text">row</span>.<span class="attr">style</span>.<span class="attr">display</span> = <span class="val">""</span>; <span class="comment">// 显示</span><br>    } <span class="tag">else</span> {<br>      <span class="text">row</span>.<span class="attr">style</span>.<span class="attr">display</span> = <span class="val">"none"</span>; <span class="comment">// 隐藏</span><br>    }<br>  }<br>}<br><span class="comment">// 绑定按钮事件</span><br><span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"btn-star"</span>)<br>  .<span class="attr">addEventListener</span>(<span class="val">"click"</span>, () => <span class="attr">filterByOrg</span>(<span class="val">"star"</span>));',
            analogy:
              '就像用漏斗过滤咖啡粉：按钮选了「星辰传媒」，漏斗只让星辰的数据通过，其他机构的数据被「滤」掉了。再选「全部」，漏斗拿掉，所有数据都看得见！☕',
            tip: '把筛选逻辑写成函数，传入不同的参数就能筛选不同机构，代码复用率极高！'
          },
          {
            tag: '📊 排序功能',
            title: '点击表头排序',
            explain:
              '让表头<strong>可点击</strong>，点击后按该列数据<strong>升序或降序</strong>排列。<br>核心思路：拿到所有行，用JS的<strong>sort方法</strong>排序，<br>然后重新<strong>append</strong>到表格中。',
            code: '<span class="tag">function</span> <span class="attr">sortTable</span>(<span class="text">colIndex</span>) {<br>  <span class="tag">const</span> <span class="text">tbody</span> = <span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">".org-table tbody"</span>);<br>  <span class="tag">const</span> <span class="text">rows</span> = <span class="text">Array</span>.<span class="attr">from</span>(<span class="text">tbody</span>.<span class="attr">querySelectorAll</span>(<span class="val">"tr"</span>));<br>  <span class="text">rows</span>.<span class="attr">sort</span>((<span class="text">a</span>, <span class="text">b</span>) => {<br>    <span class="tag">const</span> <span class="text">aVal</span> = <span class="text">a</span>.<span class="attr">children</span>[<span class="text">colIndex</span>].<span class="attr">textContent</span>;<br>    <span class="tag">const</span> <span class="text">bVal</span> = <span class="text">b</span>.<span class="attr">children</span>[<span class="text">colIndex</span>].<span class="attr">textContent</span>;<br>    <span class="tag">return</span> <span class="text">aVal</span>.<span class="attr">localeCompare</span>(<span class="text">bVal</span>, <span class="val">"zh"</span>);<br>  });<br>  <span class="tag">for</span> (<span class="tag">const</span> <span class="text">row</span> <span class="tag">of</span> <span class="text">rows</span>) {<br>    <span class="text">tbody</span>.<span class="attr">appendChild</span>(<span class="text">row</span>);<br>  }<br>}',
            analogy:
              '就像给扑克牌排序：把所有牌拿在手里（拿到rows），按数字大小排好（sort），再一张张放回去（appendChild）。只不过这次排的是数据行！🃏',
            tip: 'localeCompare(\'zh\') 支持中文排序！如果是数字列，记得先转成数字再比较：parseFloat(aVal) - parseFloat(bVal)。'
          },
          {
            tag: '🔘 按钮激活状态',
            title: '让筛选按钮有选中效果',
            explain:
              '用户点了筛选按钮后，应该<strong>视觉上显示选中状态</strong>。<br>用JS给按钮添加/移除 <strong>class</strong> 来实现。<br>同时取消其他按钮的选中状态，保持互斥。',
            code: '<span class="tag">const</span> <span class="text">buttons</span> = <span class="text">document</span>.<span class="attr">querySelectorAll</span>(<span class="val">".filter-btn"</span>);<br><br><span class="tag">function</span> <span class="attr">setActive</span>(<span class="text">clickedBtn</span>) {<br>  <span class="comment">// 取消所有按钮的激活状态</span><br>  <span class="tag">for</span> (<span class="tag">const</span> <span class="text">btn</span> <span class="tag">of</span> <span class="text">buttons</span>) {<br>    <span class="text">btn</span>.<span class="attr">classList</span>.<span class="attr">remove</span>(<span class="val">"active"</span>);<br>  }<br>  <span class="comment">// 给点击的按钮加激活状态</span><br>  <span class="text">clickedBtn</span>.<span class="attr">classList</span>.<span class="attr">add</span>(<span class="val">"active"</span>);<br>}',
            analogy:
              '就像电梯按钮：你按了3楼，3楼的灯亮了，其他楼层的灯灭了。再按5楼，3楼的灯灭了，5楼的灯亮了。互斥选中！🛗',
            tip: 'classList.add() 和 classList.remove() 是操作CSS类名最常用的方法，比直接改 style 更优雅，因为样式都写在CSS里。'
          },
          {
            tag: '📊 看板实战',
            title: '给你的看板加完整交互',
            explain:
              '综合今天所学，给看板添加完整的交互功能：<br>1. 顶部加<strong>机构筛选按钮</strong> 2. 表格表头<strong>点击可排序</strong><br>3. 筛选按钮有<strong>选中/未选中</strong>的视觉区别<br>4. 加一个<strong>「显示全部」</strong>按钮恢复默认状态<br>这是你8周学习的集大成之作！',
            code: '<span class="comment">// 完整交互流程</span><br><span class="comment">// 1. 用户点击"星辰传媒"按钮</span><br><span class="comment">// 2. 按钮变亮（active class）</span><br><span class="comment">// 3. 表格只显示星辰的数据（filterByOrg）</span><br><span class="comment">// 4. 用户点击"报价"表头</span><br><span class="comment">// 5. 数据按报价从高到低排序（sortTable）</span><br><span class="comment">// 6. 用户点击"显示全部"恢复原状</span><br><span class="comment">// 一气呵成，完全用你学过的DOM操作！✨</span>',
            analogy:
              '这就像组装一台机器：筛选是齿轮A，排序是齿轮B，按钮状态是齿轮C——每个零件你都会做了，现在把它们装在一起，机器就能运转了！⚙️',
            tip: '完成交互后，用F12的Console测试每个功能：手动调用 filterByOrg(\'star\') 看看效果，这是调试的好习惯！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: 'classList.remove("active") 的作用是什么？',
            options: [
              '删除整个元素',
              '从元素的class列表中移除"active"这个类',
              '把所有class都删除',
              '把active改名为inactive'
            ],
            answer: '从元素的class列表中移除"active"这个类',
            explanation: 'classList.remove() 只移除指定的class，不影响其他class。这是切换元素样式状态的标准做法。'
          },
          {
            type: '选择题',
            question: '给表格排序后，如何把排好序的行重新放入表格？',
            options: [
              '用 innerHTML 替换整个表格',
              '用 tbody.appendChild(row) 逐个重新插入',
              '刷新页面',
              '修改CSS样式'
            ],
            answer: '用 tbody.appendChild(row) 逐个重新插入',
            explanation: 'appendChild会把元素从原来的位置移动到新的位置。对已经排序的rows数组逐个调用appendChild，就实现了行的重新排列，不需要删除再创建。'
          },
          {
            type: '选择题',
            question: '在筛选功能中，`row.style.display = "none"` 和 `row.style.display = ""` 分别做什么？',
            options: [
              '都隐藏元素',
              '都显示元素',
              '隐藏元素 / 恢复默认显示状态',
              '删除元素 / 创建元素'
            ],
            answer: '隐藏元素 / 恢复默认显示状态',
            explanation: 'display: "none" 让元素完全隐藏（不占空间），display: "" 清除内联display属性，让元素恢复CSS中定义的默认显示状态。'
          }
        ]
      },
      // ---- Day 5 ----
      {
        title: 'Day 5：毕业总结与下一步',
        desc: '8周知识回顾，学习路线图，下一步建议',
        cards: [
          {
            tag: '🎓 知识回顾',
            title: '8周学习旅程回顾',
            explain:
              '回顾这8周你学到的所有内容：<br><strong>第1-2周</strong>：HTML基础——网页的骨架<br><strong>第3-4周</strong>：CSS基础——网页的外衣<br><strong>第5-6周</strong>：JavaScript基础——网页的大脑<br><strong>第7周</strong>：DOM操作——让网页活起来<br><strong>第8周</strong>：综合项目——做出真正的看板<br>你已经从零基础变成了能独立做看板的开发者！',
            code: '<span class="comment">// 🎉 你掌握的核心技能</span><br><span class="comment">// ✅ HTML: 语义化标签、表格、表单</span><br><span class="comment">// ✅ CSS: 选择器、Flexbox、Grid、动画</span><br><span class="comment">// ✅ JS:   变量、函数、数组、循环、条件</span><br><span class="comment">// ✅ DOM:  查找元素、修改内容、事件处理</span><br><span class="comment">// ✅ 实战: 独立完成达人刊例看板项目</span><br><span class="comment">//</span><br><span class="comment">// 这已经超越了90%的纯业务运营同学！</span>',
            analogy:
              '8周前你连HTML是什么都不知道，现在已经能做出数据看板了！这就像8周前不会做饭，现在已经能做一桌四菜一汤了！🎉',
            tip: '把8周做的所有项目截图整理成一个作品集，这在求职或内部分享时都是极好的展示材料！'
          },
          {
            tag: '🗺️ 学习路线图',
            title: '下一步可以学什么',
            explain:
              '你已经打下了坚实的基础，接下来有更多有趣的路线可以选择：<br><strong>路线A</strong>：深入学习JavaScript（ES6+、异步、API调用）<br><strong>路线B</strong>：学习React/Vue框架，做更复杂的应用<br><strong>路线C</strong>：学习Python+数据分析，做自动化报表<br>三条路线都能让你的看板能力升级！',
            code: '<span class="comment">// 🗺️ 推荐学习路线</span><br><span class="comment">//</span><br><span class="comment">// 路线A：JS进阶（2-4周）</span><br><span class="comment">// → fetch API 调用数据接口</span><br><span class="comment">// → async/await 异步编程</span><br><span class="comment">// → localStorage 本地数据持久化</span><br><span class="comment">//</span><br><span class="comment">// 路线B：前端框架（4-8周）</span><br><span class="comment">// → React 或 Vue 入门</span><br><span class="comment">// → 组件化开发思维</span><br><span class="comment">// → 状态管理</span><br><span class="comment">//</span><br><span class="comment">// 路线C：数据自动化（4-6周）</span><br><span class="comment">// → Python 基础</span><br><span class="comment">// → pandas 数据处理</span><br><span class="comment">// → 自动生成Excel/看板</span>',
            analogy:
              '现在你学会了骑自行车（HTML/CSS/JS），接下来可以选择：骑山地车去更远的地方（JS进阶）、开小汽车（前端框架）、甚至坐火车（Python自动化）——方向由你选！🚲',
            tip: '建议先走路线A（JS进阶），因为它和你现在的工作最直接相关——学会调用API，你的看板数据就可以自动更新了！'
          },
          {
            tag: '🚀 实战建议',
            title: '把看板能力用到实际工作中',
            explain:
              '你已经有能力做出实用的工具了：<br><strong>自动化报表</strong>：用JS读取Excel数据，自动生成看板<br><strong>投放分析</strong>：把投放数据可视化，一眼看出哪些内容效果好<br><strong>内容排期表</strong>：用HTML+CSS做一个可视化的内容日历<br>工具的价值在于解决实际问题，你已经具备了起步的能力！',
            code: '<span class="comment">// 💡 你可以马上开始做的实战项目</span><br><span class="comment">//</span><br><span class="comment">// 1. 达人刊例看板（已完成 ✅）</span><br><span class="comment">//    → 下一步：接入真实数据源</span><br><span class="comment">//</span><br><span class="comment">// 2. 投放数据可视化（建议 ⭐）</span><br><span class="comment">//    → 把疏肝益阳胶囊的投放数据做成图表</span><br><span class="comment">//    → 用不同颜色区分不同平台的ROI</span><br><span class="comment">//</span><br><span class="comment">// 3. 内容选题库（实用 ⭐⭐）</span><br><span class="comment">//    → 表格展示所有选题，支持筛选/排序</span><br><span class="comment">//    → 加"已完成"按钮更新状态</span><br><span class="comment">//</span><br><span class="comment">// 4. 日报/周报生成器（进阶 ⭐⭐⭐）</span><br><span class="comment">//    → 输入数据，自动生成格式化的报告HTML</span><br><span class="comment">//    → 一键复制发给领导</span>',
            analogy:
              '就像学完驾照后，你可以选择：开通勤车上下班、开货车做生意、开房车去旅行——车是一样的车，但用途由你决定！🚗',
            tip: '从小处开始：把你工作中最重复、最耗时的一个手动操作，试着用代码自动化。哪怕只省5分钟，也是你的第一个实用工具！'
          },
          {
            tag: '🌟 毕业寄语',
            title: '小克给你的毕业祝福',
            explain:
              '亲爱的同学，<strong>恭喜你完成了8周的学习之旅！</strong><br>从零基础到能独立做出数据看板，这份坚持值得为自己鼓掌。<br>记住：<strong>编程不是天才的专利，是每一个愿意动手练习的人的技能。</strong><br>你已经证明了这一点，继续加油，未来无限可能！',
            code: '<span class="comment">// 🌟 小克的毕业寄语</span><br><span class="comment">//</span><br><span class="comment">// "学代码最好的时间是8周前，</span><br><span class="comment">//  第二好的时间，就是今天。"</span><br><span class="comment">//</span><br><span class="comment">// 你已经勇敢地开始了，</span><br><span class="comment">// 每一个bug都是成长的机会，</span><br><span class="comment">// 每一次"跑通了"都是满满的成就感。</span><br><span class="comment">//</span><br><span class="comment">// 保持好奇，保持动手，</span><br><span class="comment">// 未来的你，一定会感谢</span><br><span class="comment">// 今天打开这份代码学习系统的自己！</span><br><span class="comment">//</span><br><span class="comment">// 🎓 毕业快乐！</span>',
            analogy:
              '这8周就像种了一棵小树：每天浇一点水（学一点知识），每周施一次肥（做一个练习），现在小树已经长出了枝丫（能做出看板了）。继续浇水，它一定会枝繁叶茂！🌳',
            tip: '遇到卡壳的地方不要急，停下来喝杯水，回来再看。每一个程序员都经历过「怎么都跑不通」的时刻，这是成长的一部分！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: '完成这8周学习后，最直接有用的下一步是什么？',
            options: [
              '重新从第1周开始学一遍',
              '学习fetch API调用真实数据，让看板数据自动更新',
              '放弃前端直接学AI模型训练',
              '只看教程不动手'
            ],
            answer: '学习fetch API调用真实数据，让看板数据自动更新',
            explanation: '学会调用API获取真实数据后，看板就不再是静态演示，而是真正的数据工具。这是从学习走向实战的关键一步。'
          },
          {
            type: '选择题',
            question: '遇到代码跑不通时，最好的做法是什么？',
            options: [
              '立刻放弃，说明自己不适合编程',
              '不看报错信息，随便改代码试试',
              '仔细阅读报错信息，用console.log逐步排查',
              '找别人帮忙写'
            ],
            answer: '仔细阅读报错信息，用console.log逐步排查',
            explanation: '读报错信息 + console.log 排查是程序员最基本的调试技能。每个报错都是线索，耐心追踪就能找到问题所在。这是8周学习中最有价值的软技能！'
          },
          {
            type: '选择题',
            question: '以下哪个建议最能帮助初学者从学习走向实战？',
            options: [
              '把学过的所有知识重新学一遍',
              '从工作中最重复、最耗时的手动操作开始，尝试用代码自动化',
              '等完全学透所有知识再动手',
              '只做练习项目，不做实际工具'
            ],
            answer: '从工作中最重复、最耗时的手动操作开始，尝试用代码自动化',
            explanation: '实战的最佳起点是解决自己真实遇到的问题。哪怕只省5分钟的小工具，也能带来成就感，并激励你继续学习和改进。'
          }
        ]
      }
    ]
  }
]
];

const COURSE_DATA = { weeks: COURSE_DATA_WEEKS };
