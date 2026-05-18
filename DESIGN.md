# MovieLab Detailed Components Spec (Full)

Tài liệu này tổng hợp toàn bộ thông số kỹ thuật, cấu trúc và quy tắc thiết kế cho hệ thống component của MovieLab, kết hợp chi tiết từ các phiên bản trước đó.

---

## 0. Hệ thống Khoảng cách (Spacing Scale)
Sử dụng bội số của 4px (Theo tiêu chuẩn Tailwind CSS):
- **4 (16px):** Padding tiêu chuẩn cho container.
- **2 (8px):** Khoảng cách nhỏ giữa các phần tử phụ.
- **6 (24px):** Khoảng cách giữa các item trong grid (gap).
- **8 (32px):** Padding lề (gutter) trên Desktop.

---

## 1. Hệ thống Điều hướng (Navigation System)

### TopNavBar (Desktop)
Thanh điều hướng cố định phía trên, sử dụng hiệu ứng làm mờ nền.
- **Kích thước:** Chiều cao `h-16` (64px).
- **Padding:** Ngang `px-8` (32px) hoặc `px-gutter`.
- **Background:** `bg-surface/80` với `backdrop-blur-xl`.
- **Logo:** Căn trái, sử dụng `text-primary` (#e11d48), font Geist Bold, size `text-2xl`.
- **Nav Links:** 
  - Khoảng cách giữa các link: `gap-8` (32px).
  - **Active:** `text-primary`, border bottom 2px.
  - **Inactive:** `text-on-surface-variant`, hover: `text-primary`.
- **Search Bar:** Căn phải, nền `surface-container-high`, bo góc `full`.
- **Actions:** Icons thông báo và Avatar người dùng ở góc phải.

### SideNavBar
- **Kích thước:** Chiều rộng `w-64` (256px).
- **Item Padding:** `px-4 py-3` (16px ngang, 12px dọc).
- **Gap:** Giữa các item là `gap-2` (8px).
- **Active State:** Nền `secondary-container`, chữ `on-secondary-container`, bo góc `xl`.

---

## 2. Thẻ Phim (Movie Card)
- **Tỉ lệ:** `aspect-[2/3]` (Poster chuẩn).
- **Bo góc:** `rounded-lg` (8px).
- **Border:** `border border-outline-variant/10`.
- **Padding Metadata:** `p-4` (16px) cho phần thông tin.
- **Overlay:**
  - **Rating Badge:** Góc trên phải, nền `surface/60` blur.
  - **Hover State:** Hiệu ứng `scale-105` (tăng 5%), `duration-300`. Hiển thị nút "View Details".
- **Metadata:** Gap giữa Title & Year là `gap-1` (4px).

---

## 3. Nút bấm & Input (Buttons & Inputs)

### Primary Button (Watch Now, Add to Watchlist)
- **Background:** `bg-primary` (#e11d48).
- **Padding:** `px-6 py-3` (24px ngang, 12px dọc).
- **Radius:** `rounded-lg` (8px).
- **Text:** `text-on-primary`, font-medium, size `text-sm/base`.

### Secondary/Outline Button (Favorite, Filters)
- **Style:** Border `1px` màu `outline`, nền transparent.
- **Padding:** `px-4 py-2` (16px ngang, 8px dọc).
- **Hover:** `bg-surface-bright`.

### Genre Filter Pills
- **Padding:** `px-4 py-1.5` (16px ngang, 6px dọc).
- **Gap:** `gap-2` (8px).
- **Selected:** Nền `primary`, chữ `white`.

---

## 4. Lưới & Bố cục (Layout Grids)
- **Desktop Grid Gap:** `gap-6` (24px).
- **Section Margin Bottom:** `mb-12` (48px).
- **Container Max Width:** `max-w-7xl` (1280px).

---

## 5. Trạng thái & Phản hồi (States & Feedback)

### Skeleton Loading
- **Style:** Hiệu ứng `animate-pulse` trên nền `surface-container`.
- **Hình dạng:** Khớp hoàn toàn với Movie Card và Text blocks.

### Movie Detail Modal
- **Overlay:** `bg-black/60` backdrop blur.
- **Container:** Nền `surface`, bo góc `2xl`, bóng đổ `shadow-2xl`.
- **Layout:** Grid 2 cột trên Desktop (Poster trái, Content phải).