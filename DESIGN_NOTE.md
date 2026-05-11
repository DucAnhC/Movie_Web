# MovieLab - DESIGN_NOTES

## 1. Style chính

MovieLab dùng style:

- Dark cinematic
- Giao diện tối, tập trung vào poster phim
- Ít màu, chỉ dùng rose/red làm màu nhấn
- Card bo góc lớn, border nhẹ
- Button/input/card theo style tối giản kiểu shadcn

Không làm giao diện quá màu mè. Poster phim là phần nổi bật nhất.

---

## 2. Màu cần dùng

### Màu chính

| Vai trò | Màu | Tailwind |
|---|---|---|
| Background chính | `#09090B` | `bg-[#09090B]` |
| Card / modal | `#18181B` | `bg-[#18181B]` |
| Hover surface | `#27272A` | `bg-[#27272A]` |
| Border nhẹ | `#27272A` | `border-[#27272A]` |
| Border rõ hơn | `#3F3F46` | `border-[#3F3F46]` |
| Text chính | `#FAFAFA` | `text-[#FAFAFA]` |
| Text phụ | `#A1A1AA` | `text-[#A1A1AA]` |
| Text rất mờ | `#71717A` | `text-[#71717A]` |
| Primary rose | `#E11D48` | `bg-[#E11D48]` |
| Primary hover | `#BE123C` | `hover:bg-[#BE123C]` |

### Quy tắc dùng màu

- Nền toàn trang: `#09090B`
- Card, modal: `#18181B`
- Border card/input/button phụ: `#27272A`
- Text chính như title phim: `#FAFAFA`
- Text phụ như năm, genre, mô tả ngắn: `#A1A1AA`
- Màu rose chỉ dùng cho hành động chính, rating badge, active state

Không dùng quá nhiều màu khác.

---

## 3. Font chữ

DESIGN.md dùng:

- Heading: Geist
- Body: Inter

Nếu chưa setup font, có thể dùng tạm:

```html
<body class="font-sans">