# MovieLab Component Mapping

File nay dung de map design system sang class Tailwind khi code UI.
Nguyen tac: chon mau theo vai tro cua component, khong chon mau theo cam tinh.

---

## 1. Color Tokens

| Token | Hex | Tailwind hien tai | Dung cho |
|---|---:|---|---|
| `app-bg` | `#09090B` | `bg-[#09090B]` | Nen body/app chinh |
| `section-bg` | `#1f0f10` | `bg-[#1f0f10]` | Nen wrapper hoac section am hon |
| `surface` | `#18181B` | `bg-[#18181B]` | Card phim, modal, block noi dung |
| `surface-high` | `#2c1b1c` | `bg-[#2c1b1c]` | Layer noi hon surface, button phu |
| `border-subtle` | `#27272A` | `border-[#27272A]` | Border card/input nhe |
| `border-hover` | `#3F3F46` | `hover:border-[#3F3F46]` | Border hover hoac secondary border |
| `text-main` | `#FAFAFA` | `text-[#FAFAFA]` | Heading, title chinh |
| `text-body` | `#D4D4D8` | `text-[#D4D4D8]` | Mo ta, paragraph |
| `text-muted` | `#A1A1AA` | `text-[#A1A1AA]` | Year, genre, meta info |
| `text-dim` | `#71717A` | `text-[#71717A]` | Placeholder, label rat phu |
| `primary` | `#E11D48` | `bg-[#E11D48]` | CTA, active state, badge IMDb |
| `primary-hover` | `#BE123C` | `hover:bg-[#BE123C]` | Hover cua CTA |
| `accent-light` | `#FFB3B6` | `text-[#FFB3B6]` | Link, icon nhe, highlight phu |

---

## 2. Component Mapping

### App Shell

| Part | Class nen dung |
|---|---|
| `body` | `bg-[#09090B] text-[#FAFAFA]` |
| `#app` wrapper | `bg-[#1f0f10] max-w-7xl mx-auto` |
| Main content | `text-[#FAFAFA]` |

### Navbar

| State/part | Class nen dung |
|---|---|
| Container | `bg-[#18181B]/40 backdrop-blur-xl border-b border-[#27272A]` |
| Nav text | `text-[#A1A1AA]` |
| Nav hover | `hover:text-[#FAFAFA]` |
| Active nav | `text-[#E5BDBE] border-b-2 border-current` |
| Icon button hover | `hover:bg-[#27272A]` |
| Notification dot | `bg-[#E11D48]` |

### Search Input

| State/part | Class nen dung |
|---|---|
| Input base | `bg-[#09090B] text-[#FAFAFA] placeholder:text-[#71717A]` |
| Border base | `border border-[#27272A]` |
| Focus | `focus:border-[#E11D48] focus:ring-2 focus:ring-[#E11D48]/35` |
| Search icon | `text-[#FFB3B6]` |

### Hero Section

| Part | Class nen dung |
|---|---|
| Label badge | `bg-[#E11D48] text-white rounded-full` |
| H1 | `text-[#FAFAFA]` |
| Description | `text-[#D4D4D8]` |
| Primary CTA | `bg-[#E11D48] hover:bg-[#BE123C] text-white rounded-lg` |
| Secondary CTA | `bg-[#27272A]/70 hover:bg-[#3F3F46] border border-[#3F3F46] text-[#FAFAFA]` |

### Section Header

| Part | Class nen dung |
|---|---|
| Title | `text-[#FAFAFA] font-bold` |
| Link | `text-[#FFB3B6] hover:text-[#FAFAFA]` |

### Genre Filter

| State | Class nen dung |
|---|---|
| Default | `bg-[#27272A] text-[#A1A1AA] rounded-full` |
| Hover | `hover:bg-[#E11D48] hover:text-white` |
| Active | `bg-[#E11D48] text-white` |

### Movie Card

| Part | Class nen dung |
|---|---|
| Card container | `bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden` |
| Hover | `transition duration-300 hover:border-[#3F3F46] hover:scale-[1.03]` |
| Poster | `aspect-[2/3] object-cover` |
| IMDb badge | `bg-[#E11D48] text-white rounded-md` |
| Title | `text-[#FAFAFA] truncate` |
| Year | `text-[#A1A1AA]` |
| Genre tag | `bg-[#27272A] text-[#A1A1AA] text-xs rounded` |

### Movie Detail Modal

| Part | Class nen dung |
|---|---|
| Overlay | `bg-black/60 backdrop-blur-sm` |
| Container | `bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl` |
| Close icon | `text-[#FAFAFA] hover:text-[#E11D48]` |
| Small label | `text-[#71717A]` |
| Meta text | `text-[#A1A1AA]` |
| Rating star | `text-[#FFB3B6]` |
| Overview text | `text-[#A1A1AA]` |
| Primary action | `bg-[#E11D48] hover:bg-[#BE123C] text-white` |
| Secondary action | `border border-[#3F3F46] bg-transparent hover:bg-[#27272A] text-[#FAFAFA]` |

### Load More Button

| State | Class nen dung |
|---|---|
| Default | `bg-[#2c1b1c] text-[#FAFAFA] rounded-lg` |
| Hover | `hover:bg-[#E11D48]` |

---

## 3. Quick Rules

- Khong dung `text-gray-*`, `bg-red-*`, `bg-amber-*`, `text-yellow-*` neu design system da co token tuong ung.
- Khong tao them hex moi neu khong co trong bang token.
- Component nao cung loai thi phai dung cung mapping. Vi du: moi movie card deu phai la `bg-[#18181B] border-[#27272A]`.
- Mau hover nen lay tu token hover co san: `#BE123C` cho primary, `#3F3F46` cho border/surface.
- Neu can mau phu, them vao bang token truoc roi moi dung trong code.

---

## 4. Example

Movie card chuan:

```html
<article class="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden transition duration-300 hover:border-[#3F3F46] hover:scale-[1.03]">
  <img class="w-full aspect-[2/3] object-cover" />
  <div class="p-3">
    <div class="flex items-center justify-between gap-2">
      <h3 class="truncate text-[#FAFAFA]">Movie title</h3>
      <span class="shrink-0 text-[#A1A1AA]">2026</span>
    </div>
    <span class="mt-2 inline-block rounded bg-[#27272A] px-2 py-1 text-xs text-[#A1A1AA]">Action</span>
  </div>
</article>
```
