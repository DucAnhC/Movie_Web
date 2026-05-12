# MovieLab — Component Color Guide

Nguồn màu chính lấy từ design system MovieLab.

## 1. Màu nền tổng thể

| Component | Màu | Tailwind gợi ý | Ghi chú |
|---|---:|---|---|
| App background | `#09090B` | `bg-[#09090B]` | Nền chính, gần đen, cinematic |
| Section background | `#1f0f10` | `bg-[#1f0f10]` | Nền vùng lớn nếu muốn ấm hơn |
| Card / surface | `#18181B` | `bg-[#18181B]` | Card phim, modal, block nội dung |
| Surface high | `#2c1b1c` | `bg-[#2c1b1c]` | Layer nổi hơn card thường |
| Border subtle | `#27272A` | `border-[#27272A]` | Border card/input nhẹ |
| Border hover | `#3F3F46` | `hover:border-[#3F3F46]` | Border khi hover |

## 2. Text

| Component | Màu | Tailwind gợi ý | Ghi chú |
|---|---:|---|---|
| Heading / title chính | `#FAFAFA` | `text-[#FAFAFA]` | Tiêu đề hero, section title |
| Body text | `#D4D4D8` | `text-[#D4D4D8]` | Mô tả dễ đọc |
| Muted text | `#A1A1AA` | `text-[#A1A1AA]` | Year, genre, meta info |
| Very muted text | `#71717A` | `text-[#71717A]` | Text phụ rất nhỏ |
| Text trên primary button | `#FFFFFF` | `text-white` | Dùng trên nền rose |

## 3. Brand / Accent

| Component | Màu | Tailwind gợi ý | Ghi chú |
|---|---:|---|---|
| Primary / CTA | `#E11D48` | `bg-[#E11D48]` | Nút chính, badge IMDb, active tab |
| Primary hover | `#BE123C` | `hover:bg-[#BE123C]` | Hover nút chính |
| Accent light | `#FFB3B6` | `text-[#FFB3B6]` | Link/label nhẹ nếu cần |
| Focus glow | `rgba(225,29,72,0.35)` | `focus:ring-[#E11D48]/35` | Input focus |

## 4. Component mapping thực chiến

### Navbar
```html
<header class="bg-[#18181B]/40 backdrop-blur-xl border-b border-[#27272A] text-[#A1A1AA]">
  <a class="text-[#E11D48] font-bold">MovieLab</a>
  <nav class="text-[#A1A1AA]">
    <a class="hover:text-[#FAFAFA]">Home</a>
    <a class="hover:text-[#FAFAFA]">Trending</a>
    <a class="hover:text-[#FAFAFA]">Library</a>
  </nav>
</header>
```

### Search input
```html
<div class="bg-[#09090B] border border-[#27272A] focus-within:border-[#E11D48] focus-within:ring-2 focus-within:ring-[#E11D48]/35 rounded-full">
  <input class="bg-transparent text-[#FAFAFA] placeholder:text-[#71717A] outline-none" placeholder="Search movies, actors, directors..." />
</div>
```

### Hero section
```html
<section class="bg-[#09090B] text-[#FAFAFA]">
  <span class="bg-[#E11D48] text-white rounded-full">Featured Story</span>
  <h1 class="text-[#FAFAFA]">Discover your next favorite story</h1>
  <p class="text-[#D4D4D8]">From heart-pounding action to soul-stirring drama...</p>
</section>
```

### Primary button
```html
<button class="bg-[#E11D48] hover:bg-[#BE123C] text-white rounded-xl">
  Watch Now
</button>
```

### Secondary button
```html
<button class="bg-[#27272A]/70 hover:bg-[#3F3F46] text-[#FAFAFA] border border-[#3F3F46] rounded-xl">
  Watchlist
</button>
```

### Section title
```html
<div class="flex items-center justify-between">
  <h2 class="text-[#FAFAFA]">Popular Movies</h2>
  <a class="text-[#FFB3B6] hover:text-[#FAFAFA]">View all</a>
</div>
```

### Genre chips
```html
<button class="bg-[#27272A] text-[#A1A1AA] hover:bg-[#E11D48] hover:text-white rounded-full">
  All Stories
</button>
```

### Active chip
```html
<button class="bg-[#E11D48] text-white rounded-full">
  All Stories
</button>
```

### Movie card
```html
<article class="bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] rounded-xl overflow-hidden hover:scale-[1.03] transition">
  <img class="aspect-[2/3] object-cover" />
  <div class="p-3">
    <h3 class="text-[#FAFAFA]">Movie title</h3>
    <p class="text-[#A1A1AA]">2024</p>
  </div>
</article>
```

### IMDb badge
```html
<span class="bg-[#E11D48] text-white rounded-md">
  IMDb 8.2
</span>
```

### Movie meta / detail nhỏ
```html
<p class="text-xs text-[#71717A]">
  Action • Sci-fi • 2024
</p>
```

## 5. CSS variables nếu muốn gom màu

```css
:root {
  --color-bg: #09090B;
  --color-surface: #18181B;
  --color-surface-warm: #1f0f10;
  --color-surface-high: #2c1b1c;
  --color-border: #27272A;
  --color-border-hover: #3F3F46;
  --color-text: #FAFAFA;
  --color-text-body: #D4D4D8;
  --color-text-muted: #A1A1AA;
  --color-text-dim: #71717A;
  --color-primary: #E11D48;
  --color-primary-hover: #BE123C;
  --color-accent-light: #FFB3B6;
}
```

## 6. Ghi nhớ nhanh

- Nền chính: `#09090B`
- Card: `#18181B`
- Border: `#27272A`
- Text chính: `#FAFAFA`
- Text phụ: `#A1A1AA`
- Accent/nút/badge: `#E11D48`
- Hover accent: `#BE123C`
