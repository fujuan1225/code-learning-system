// ============================================
// 小克的代码学习系统 — Week 1-2 课程数据
// 面向零基础中文学习者的 HTML 入门课程
// ============================================

const WEEKS_1_2 = [
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
];
