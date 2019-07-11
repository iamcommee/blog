---
title: "Android Q beta 5"
date: 2019-07-11T13:35:42+07:00
url: /2019/07/11/android-q-beta-5
cover: /2019/07/11/android-q-beta-5/images/cover.jpg
description: "ใกล้ stable แล้ว ก็จัด Android Q beta 5 เลยละกัน"
tags:
---

{{< image-frame class="post-image-frame" src="images/android-q-install.jpg" alt="Android Q beta 5 มาแล้ว">}}

เมื่อคืนที่ผ่านมา ประมาณตี 1 Google ได้ปล่อย Android Q beta 5 มาให้ผู้ใช้กลุ่ม Android Beta Program ได้ลองทดสอบ

ก่อนปล่อย Beta 6 และ ตัวเต็ม ในช่วงเดือน สิงหาคม ผู้ใช้ Pixel อย่างผมจึงไม่รีรอกด Enroll & Install 

เพราะเห็นว่าใกล้เข้าสู่ Stable จึงคิดว่า Bug คงน้อยลงแล้วแหละ ต้องบอกก่อนว่านี่เป็นการ Update จาก Android 9 -> Android 10

และแล้วก็เผลอหลับไปจ้า ~

<br>

ตื่นขึ้นมา ล้างหน้าล้างตา หยิบโทรศัพท์ขึ้นมาทดสอบ สิ่งแรกที่เจอคือ Pixel Launcher keeps stopping ครับ

ก็เลยทำการ Stop working มันไป รอสักพักก็กลับมาเป็นปกติแบบนิ

{{< image-frame class="post-image-frame" src="images/android-q-lock-screen.jpg" alt="Android Q beta 5 lock screen" image-caption="Android Q beta 5 lock screen">}}

จุดเด่นที่เห็นได้ชัดเลยในเวอร์ชั่นนี้คือ Google ย้าย Lock screen icon จากข้างล่างขึ้นไปอยู่ข้างบนเหมือนในรูป

ดูๆไปแล้วเหมือนของอีกค่ายเลยแหะ -3- หลังจาก Unlock สิ่งแรกที่อยากลองคือ Dark mode กับ Navigation bar แบบใหม่

เพราะฉะนั้นวันนี้เราจะทดสอบเฉพาะแค่ Dark mode และ Navigation bar เด้อ

# Dark mode

{{< image-frame class="post-image-frame" src="images/android-q-dark-mode-1.jpg" alt="Android Q beta 5 dark mode" image-caption="Android Q beta 5 dark mode">}}

พอเปลี่ยนแล้วก็รู้สึกได้เลยว่า สบายตาขึ้นเยอะ ! แถมข้อดีของ Dark mode อีกอย่าง ก็คือช่วยประหยัดแบตเมื่อเราใช้จอแบบ OLED 

ที่พี่ Google พึ่งออกมายอมรับว่า มันประหยัดแบตได้มากถึง 60% เชียวนะ

สำหรับ Android Q beta เราสามารถ Force ให้แอพอื่นๆกลายเป็น Dark mode ได้ด้วยนะ 

ด้วยการเข้าไปที่ 

> Settings > System > Developer options > Override force-dark 

แต่พอลองเปิดดูแล้วก็ได้ผลลัพธ์แบบนี้ครับ

{{< image-frame class="post-image-frame" src="images/android-q-dark-mode-2.jpg" alt="Android Q beta 5 facebook" image-caption="Android Q beta 5 Facebook">}}

{{< image-frame class="post-image-frame" src="images/android-q-dark-mode-3.jpg" alt="Android Q beta 5 instagram" image-caption="Android Q beta 5 Instagram">}}

จะเห็นว่า Facebook มีการมั่วสีในบางจุดซึ่งก็คงต้องรอให้ทั้ง Facebook , Google อัพเดทอีกทีครับ

แต่ Instagram ค่อนข้างโอเคเลยทีเดียว ~

# Navigation bar

หลังจากที่พยายามเปลี่ยน Navigation bar ใน Android P ไปแล้วครั้งหนึ่ง รอบนี้พี่แกก็เลยจัดการทำ Navigation bar ใหม่อีกครั้ง


> โดยเรียกมันว่า Gesture navigation

ซึ่งเราสามารถเปิดการใช้งานได้เลยในตั้งค่า ถ้าหากไม่ชอบใจก็สามารถเปลี่ยนกลับได้เลย มี 3 แบบ ให้เลือกเหมือนรูปข้างล่างเลยครับ

{{< gif-image class="post-gif-image" src="images/android-q-gesture.gif" alt="Android Q beta 5 gesture navigation" image-caption="Android Q Gesture navigation">}}

## การใช้งาน Gesture

1) ปัดขึ้น
    
* ปัดขึ้นอย่างรวดเร็วเพื่อใช้แทนปุ่ม Home
    
{{< gif-image class="post-gif-image" src="images/android-q-swipe-up-to-home.gif" alt="Android Q beta 5 swipe up to home" image-caption="Android Q swipe up to home">}}

* แต่ถ้าหากปัดขึ้นอย่างรวดเร็วในหน้า Home screen จะหมายถึงการเข้า App drawer

{{< gif-image class="post-gif-image" src="images/android-q-swipe-up-to-app-drawer.gif" alt="Android Q beta 5 swipe up to app drawer" image-caption="Android Q swipe up to app drawer">}}

2) การเข้าหน้า Recent app สามารถทำได้โดยการลากขึ้นไปตรงกลางหน้าจอ

{{< gif-image class="post-gif-image" src="images/android-q-swipe-up-to-recent-app.gif" alt="Android Q beta 5 swipe up to recent app" image-caption="Android Q swipe up to recent app">}}

2) ปัดขึ้นจากมุม ซ้าย-ขวา ล่าง เป็นการเรียกใช้ Google assistant แทนของเดิมที่กดปุ่ม Home ค้างไว้

{{< gif-image class="post-gif-image" src="images/android-q-swipe-up-to-google-assistant.gif" alt="Android Q beta 5 swipe up to google assistant" image-caption="Android Q swipe up to google assistant">}}

3) ปัดขวาใน Home screen จะหมายถึงการเรียก App ล่าสุดที่เราใช้งาน

{{< gif-image class="post-gif-image" src="images/android-q-swipe-to-last-app.gif" alt="Android Q beta 5 swipe to last app" image-caption="Android Q swipe to last app">}}

4) ปัด ซ้าย-ขวา ในหน้าแอพจะเป็นการสลับแอพไปมา

{{< gif-image class="post-gif-image" src="images/android-q-switch-app.gif" alt="Android Q beta 5 switch app" image-caption="Android Q switch app">}}

5) ปุ่ม Back ที่หายไปถูกทดแทนด้วยการปัด ซ้าย-ขวา

{{< gif-image class="post-gif-image" src="images/android-q-back.gif" alt="Android Q beta 5 back" image-caption="Android Q back">}}

6) การลากจากขอบซ้ายหน้าจอจะเป็นการเรียก Hamburger menu

{{< gif-image class="post-gif-image" src="images/android-q-hamburger-menu.gif" alt="Android Q beta 5 swipe to hamburger menu" image-caption="Android Q beta 5 swipe to hamburger menu">}}

# สรุป

จากการใช้งาน Gesture แบบใหม่มาครึ่งวันก็พบว่า การใช้งานช้ากว่าเดิมขึ้นหลายเท่า (หมายถึงการปัดเพื่อทำนั่นทำนี่นะ) 

อาจจะเป็นเพราะว่ายังไม่ชิน + Pixel 2 XL มีขนาดหน้าจอที่ใหญ่จึงไม่สะดวกเวลาปัดไปปัดมาด้วยมือเดียว

ถ้าเป็น Pixel 2, 3a, 3 คิดว่าน่าจะใช้งานง่ายกว่านี้เพราะตัวเครื่องมีขนาดเล็ก 

ความคิดเห็นส่วนตัว จริงๆแล้วไอ่แถบเล็กๆด้านล่างเอาออกไปเลยก็ได้นะ เพราะมีความรู้สึกว่ามันไปละม้ายคล้ายคลึงกับอีกค่าย

ในส่วนของ Performace รู้สึกว่าไหลลื่นขึ้นกว่า Android P เยอะมาก(จริงๆนะ) แอพส่วนใหญ่ที่อยู่ในเครื่องแทบจะไม่มีปัญหา

จะมีแต่แอพของธนาคารสีเขียวนี่แหละ ที่ไม่สามารถใช้งานได้ นอกนั้นคิดว่าได้หมดนะ

สุดท้าย สำหรับใครที่อยากลองผมคิดว่าตั้งแต่ Beta นี้ไป User ทั่วไปสามารถใช้งานจริงได้แล้วครับ เพราะ Bug น้อยลงมากแล้วและใกล้เคียงกับตัว Stable ครับ




