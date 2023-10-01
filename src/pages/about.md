---
layout: '../layouts/Page.astro'
title: 'เกี่ยวกับเรา'
description: 'เกี่ยวกับตัวอย่างเว็บไซต์ไทยยูไอ'
---

เว็บไซต์นี้เป็นตัวอย่างการสร้างเว็บจากเทมเพลต [ThaiUI](https://thaiui.com) ด้วย [Astro web framework](https://astro.build/)

โดยสร้างตัวอย่างหน้าเว็บไว้ให้ 2 หน้า คือ

## 1. หน้าแรก

`/src/pages/index.astro`

สำหรับแสดงเนื้อหาหน้าแรก โดยแสดงตัวอย่างการนำ Component ที่ชื่อ **Hero.astro** มาประกอบ

## 2. หน้าเกี่ยวกับเรา

`/src/pages/about.md`

เป็นตัวอย่างการใช้ไฟล์ Markdown เพื่อแสดงเนื้อหาเว็บไซต์ โดยสามารถใช้ร่วมกับคำสั่ง HTML ได้ เช่น การแบ่งคอลัมน์ด้วยคลาส `th-grid -d2` ตามด้านล่าง

---

<div class="th-grid -d2">
<div>
<h4>ตัวอย่างข้อความในคอลัมน์ที่ 1</h4>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi nisi, blandit sit amet justo in, euismod viverra augue. Cras et libero enim.
</div>
<div>
<h4>ตัวอย่างข้อความในคอลัมน์ที่ 2</h4>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi nisi, blandit sit amet justo in, euismod viverra augue. Cras et libero enim.
</div>
</div>

---
