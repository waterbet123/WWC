# 华美时装企业官网 - 使用说明

## 目录结构

```
website/
├── index.html          # 首页
├── about.html          # 关于我们
├── products.html       # 产品服务
├── contact.html        # 联系我们
│
├── css/
│   ├── style.css       # 全局样式
│   └── products.css    # 产品页专用样式
│
├── js/
│   ├── main.js         # 全局脚本
│   └── products.js     # 产品页脚本
│
├── images/
│   ├── banner/         # 首页 Banner 图片（建议尺寸：1920x1080）
│   │   ├── banner1.jpg
│   │   ├── banner2.jpg
│   │   └── banner3.jpg
│   │
│   ├── products/       # 产品图片（建议尺寸：600x800，竖版3:4比例）
│   │   ├── product1.jpg
│   │   ├── product2.jpg
│   │   ├── ...（product1.jpg 到 product12.jpg）
│   │   └── productXX.jpg（可继续添加）
│   │
│   └── about/          # 关于我们页面图片
│       ├── story.jpg       # 公司故事图片（建议4:5竖版）
│       ├── factory.jpg     # 首页关于我们区域图片
│       ├── factory1.jpg    # 工厂实景1（建议4:5竖版，作为大图）
│       ├── factory2.jpg    # 工厂实景2
│       ├── factory3.jpg    # 工厂实景3
│       ├── factory4.jpg    # 工厂实景4
│       └── factory5.jpg    # 工厂实景5
│
└── videos/
    └── products/       # 产品展示视频（MP4格式，建议9:16竖版）
        ├── product1.mp4
        ├── product2.mp4
        ├── ...
        └── productXX.mp4
```

---

## 图片替换方法

### 产品图片
1. 将新图片**命名为与原文件相同的文件名**（如 `product1.jpg`）
2. 放入 `images/products/` 文件夹
3. 刷新浏览器即可看到新图片

> 建议尺寸：600 × 800 像素（宽:高 = 3:4），JPEG 格式，文件大小 < 500KB

### 产品视频
1. 将视频命名为对应的 `productX.mp4`（与图片序号相同）
2. 放入 `videos/products/` 文件夹
3. 产品卡片上的播放按钮将自动关联对应视频

> 支持格式：MP4（H.264编码）、建议竖版 9:16，文件大小 < 50MB

### Banner 图片
1. 替换 `images/banner/banner1.jpg`、`banner2.jpg`、`banner3.jpg`
2. 首页将自动轮播这三张图片

> 建议尺寸：1920 × 1080 像素，JPEG 格式

---

## 添加新产品

在 `products.html` 的 `#productsGrid` 区域内，复制以下模板并粘贴：

```html
<div class="product-card" data-category="dress" data-tags="连衣裙,标签2,标签3">
  <div class="product-media">
    <img src="images/products/productXX.jpg" alt="产品名称" />
    <span class="product-badge">新品</span>
    <button class="product-video-btn" data-video="videos/products/productXX.mp4" title="播放视频">
      <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
    </button>
  </div>
  <div class="product-info">
    <h3 class="product-name">产品名称</h3>
    <p class="product-desc">产品简短描述</p>
    <div class="product-meta">
      <span class="product-moq">最低XX件</span>
      <span class="product-price">询价</span>
    </div>
  </div>
</div>
```

**data-category 可选值：**
- `dress`（连衣裙）
- `top`（上装）
- `pants`（裤装）
- `suit`（套装）
- `coat`（外套大衣）
- `evening`（晚礼服）

---

## 修改公司信息

全站公司信息集中在各 HTML 文件中，搜索以下内容并替换：

| 原内容 | 说明 |
|--------|------|
| `华美时装` | 中文公司名 |
| `HUAMEI FASHION` | 英文公司名 |
| `info@huameifashion.com` | 联系邮箱 |
| `+86 20 1234 5678` | 联系电话 |
| `广东省广州市白云区某某路88号` | 公司地址 |
| `粤ICP备XXXXXXXX号` | 备案号 |

---

## 本地预览

直接双击 `index.html` 文件，用浏览器打开即可预览。

若视频播放不正常，建议使用本地服务器：
```bash
# Python 3
cd website
python3 -m http.server 8080
# 然后访问 http://localhost:8080
```

---

*最后更新：2026-05-14*
