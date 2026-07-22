const WEEKS_3_4 = [
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
];
