# MovieLab - Project Plan

## 1. Ý tưởng

MovieLab là một web app tìm kiếm phim. Người dùng có thể xem danh sách phim phổ biến, tìm phim theo tên và xem thông tin chi tiết của phim.

Project được xây dựng để luyện HTML, Tailwind CSS, JavaScript DOM, fetch API, async/await và cách tổ chức một dự án frontend nhỏ.

## 2. Mục tiêu

- Xây dựng giao diện web phim hiện đại theo design từ Stitch.
- Render danh sách phim từ dữ liệu mẫu, sau đó kết nối TMDB API.
- Cho phép người dùng tìm kiếm phim.
- Cho phép người dùng xem chi tiết phim.
- Xử lý các trạng thái loading, empty và error.
- Deploy project để có link demo.

## 3. Công nghệ

- HTML
- Tailwind CSS
- JavaScript thuần
- TMDB API
- Stitch design
- Git / GitHub
- Vercel hoặc GitHub Pages

## 4. Đối tượng người dùng

Người dùng muốn tìm kiếm phim nhanh, xem poster, rating, năm phát hành và mô tả ngắn của phim.

## 5. User Flow chính

Người dùng mở web
→ xem danh sách phim phổ biến
→ nhập tên phim vào ô search
→ xem kết quả tìm kiếm
→ click vào một phim
→ xem chi tiết phim

## 6. Functional Requirements

### Must-have

- Hiển thị giao diện MovieLab
- Hiển thị danh sách phim
- Hiển thị movie card gồm poster, tên phim, năm, rating
- Tìm kiếm phim theo từ khóa
- Xem chi tiết phim
- Hiển thị loading khi gọi API
- Hiển thị empty state khi không có kết quả
- Hiển thị error state khi API lỗi
- Responsive desktop/mobile

### Nice-to-have

- Lưu phim yêu thích bằng localStorage
- Lọc theo thể loại
- Load more
- Dark/light mode
- Trailer phim

## 7. Use Cases

### UC01 - Xem danh sách phim phổ biến

Actor: Người dùng

Mô tả:
Người dùng mở trang web và hệ thống hiển thị danh sách phim phổ biến.

Kết quả:
Danh sách phim được hiển thị dưới dạng movie grid.

### UC02 - Tìm kiếm phim

Actor: Người dùng

Mô tả:
Người dùng nhập từ khóa vào ô tìm kiếm và bấm nút tìm.

Kết quả:
Hệ thống hiển thị danh sách phim phù hợp với từ khóa.

### UC03 - Xem chi tiết phim

Actor: Người dùng

Mô tả:
Người dùng click vào một movie card hoặc nút xem chi tiết.

Kết quả:
Hệ thống hiển thị thông tin chi tiết của phim.

### UC04 - Xem trạng thái không có kết quả

Actor: Người dùng

Mô tả:
Người dùng tìm kiếm một từ khóa không có phim phù hợp.

Kết quả:
Hệ thống hiển thị empty state.

### UC05 - Xem thông báo lỗi

Actor: Người dùng

Mô tả:
Khi API lỗi hoặc mất mạng, hệ thống hiển thị thông báo lỗi.

Kết quả:
Người dùng biết có lỗi xảy ra và có thể thử lại.

## 8. Phases

### Phase 1 - Static UI

Mục tiêu:
Dựng giao diện tĩnh theo design từ Stitch.

Task:
- Tạo cấu trúc file
- Setup Tailwind
- Tạo navbar
- Tạo search bar
- Tạo hero section
- Tạo movie grid
- Tạo movie card tĩnh
- Responsive cơ bản

Done khi:
- Giao diện hiển thị đúng layout web phim
- Có ít nhất 6 card phim mẫu
- Desktop và mobile không vỡ layout
- Chưa cần API thật

Estimate:
1 - 2 ngày

Status:
Done

### Phase 2 - Render Fake Data

Mục tiêu:
Dùng JavaScript render danh sách phim từ mảng dữ liệu mẫu.

Task:
- Tạo fakeMovies array
- Viết hàm renderMovies()
- Render card bằng innerHTML/map/join
- Xử lý fallback ảnh cơ bản

Done khi:
- Không viết card cứng trong HTML
- JS render được danh sách phim từ fakeMovies

Estimate:
1 ngày

Status:
Done

### Phase 3 - Connect TMDB API

Mục tiêu:
Lấy dữ liệu phim thật từ TMDB API.

Task:
- Tạo API key
- Viết hàm fetchPopularMovies()
- Gọi API bằng fetch/async await
- Render data.results ra giao diện

Done khi:
- Reload trang thấy danh sách phim thật từ API

Estimate:
1 - 2 ngày

Status:
Done

### Phase 4 - Search Movies

Mục tiêu:
Cho phép người dùng tìm phim theo tên.

Task:
- Bắt sự kiện submit form
- Lấy keyword
- Gọi API search
- Render kết quả
- Xử lý search rỗng

Done khi:
- Gõ tên phim và nhận kết quả đúng
- Search rỗng quay về danh sách popular

Estimate:
1 ngày

Status:
Done

### Phase 5 - Movie Detail

Mục tiêu:
Hiển thị chi tiết phim khi click vào card.

Task:
- Gắn id vào card
- Bắt sự kiện click
- Gọi API detail
- Hiển thị modal/detail section

Done khi:
- Click phim nào hiển thị đúng thông tin phim đó

Estimate:
1 - 2 ngày

Status:
Done

### Phase 6 - UX States

Mục tiêu:
Xử lý loading, empty và error state.

Task:
- Loading skeleton
- Empty state
- Error state
- Fallback poster

Done khi:
- App không bị im lặng khi loading/lỗi/không có kết quả

Estimate:
1 ngày

Status:
Todo

### Phase 7 - Polish & Deploy

Mục tiêu:
Hoàn thiện giao diện, dọn code và deploy.

Task:
- Refactor code
- Kiểm tra responsive
- Viết README
- Deploy
- Gắn link demo vào README

Done khi:
- Có link demo
- Có README rõ ràng
- Project chạy ổn trên desktop/mobile

Estimate:
1 ngày

Status:
Todo