# Customization Instructions for Diamond Motor Spares

Hello! Welcome to your learning guide. Below are the step-by-step instructions to make the changes you requested on your website. 

Follow these steps one by one to edit your code. You can use any text editor (like VS Code or Notepad) to open the files and make the edits.

---

### Table of Contents
1. [Make the Nav Bar Short in Height](#1-make-the-nav-bar-short-in-height)
2. [Remove the Hamburger Menu](#2-remove-the-hamburger-menu)
3. [Remove the Line Between View Our Stock and About Us](#3-remove-the-line-between-view-our-stock-and-about-us)
4. [Fix the Inquiries to Lead to WhatsApp](#4-fix-the-inquiries-to-lead-to-whatsapp)
5. [Change the WhatsApp Floating Icon to "Chat on WhatsApp"](#5-change-the-whatsapp-floating-icon-to-chat-on-whatsapp)

---

### 1. Make the Nav Bar Short in Height

Currently, your navigation bar has a height of `100px`. To make it shorter (for example, `70px`), we will update the style sheet.

#### Steps:
1. Open the file [style/style.css](file:///c:/me/DiamondMotorSpares/style/style.css).
2. Find the `.navbar` CSS block (around **line 18**).
3. Change the `height` property from `100px` to `70px`.
4. (Optional) To make sure page links scroll to the right position and don't get covered by the sticky navbar, find the `html,body` block at the top of the file (around **line 6**) and change `scroll-padding-top: 80px;` to `scroll-padding-top: 70px;` (matching the new height).

**Code Change in `style/style.css`:**
```diff
 /* Nav bar */
 .navbar {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 10%;
   background-color: #0c2340;
   box-shadow: 0 2px 10px rgba(0,0,0,0.1);
   position: relative;
   z-index: 1000;
   top: 0;
   position: sticky;
   color: white;
-  height: 100px;
+  height: 70px;
   border-radius: 1px;
 }
```

---

### 2. Remove the Hamburger Menu

The hamburger icon is the three-line toggle button visible on mobile screens. If you want to remove it entirely:

#### Steps:
1. Open the file [index.html](file:///c:/me/DiamondMotorSpares/index.html).
2. Locate the hamburger code around **lines 19 to 24**:
   ```html
   <input type="checkbox" id="menu-toggle" class="menu-toggle">
   <label for="menu-toggle" class="hamburger">
     <span></span>
     <span></span>
     <span></span>
   </label>
   ```
3. **Delete** those lines (or comment them out by wrapping them in `<!--` and `-->`).

**Code Change in `index.html`:**
```diff
   <div class="logo"><h1> <img src="images/logo.png" alt="diamondmotorspares">DIAMOND <span>MOTOR SPARES</span></h1></div>
   
-  <input type="checkbox" id="menu-toggle" class="menu-toggle">
-  <label for="menu-toggle" class="hamburger">
-    <span></span>
-    <span></span>
-    <span></span>
-  </label>
 
   <ul class="nav-links">
```

---

### 3. Remove the Line Between View Our Stock and About Us

There is a thick white line (`border-top`) styling at the top of the About Us section that separates it from the Home (hero) section.

#### Steps:
1. Open the file [style/style.css](file:///c:/me/DiamondMotorSpares/style/style.css).
2. Scroll down towards the end of the file to the second `.about-section` block (around **line 679**).
3. Find the line that says `border-top: white solid 10px;` (around **line 685**).
4. **Delete** this line (or change it to `border-top: none;`).

**Code Change in `style/style.css`:**
```diff
     .about-section {
         background-color: #142d4c; /* Light Navy */
         color: #ffffff;
         padding:0px;
         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
         padding-top: 7%;
-        border-top: white solid 10px;
+        border-top: none;
     }
```

---

### 4. Fix the Inquiries to Lead to WhatsApp

Currently, the "Inquire Now" buttons on your product cards are set up as telephone calls (`href="tel:+263788158614"`). To make them open a WhatsApp chat directly with a prefilled message:

#### Steps:
1. Open the file [index.html](file:///c:/me/DiamondMotorSpares/index.html).
2. Search for `class="btn-inquire"` (around **lines 127, 136, and 144**).
3. Replace the `href="tel:+263788158614"` with the WhatsApp link. For example:
   - For Engine Parts: `href="https://wa.me/263784664658?text=Hello,%20I%20am%20inquiring%20about%20Engine%20Parts."`
   - For Suspension: `href="https://wa.me/263784664658?text=Hello,%20I%20am%20inquiring%20about%20Suspension%20Parts."`
   - For Brake Systems: `href="https://wa.me/263784664658?text=Hello,%20I%20am%20inquiring%20about%20Brake%20Systems."`

**Code Change in `index.html`:**
```diff
 <div class="product-card-dedicated">
     <div class="icon-wrapper">
         <i class="fas fa-tools"></i>
     </div>
     <h4>Engine Parts</h4>
     <p>Pistons, valves, and timing kits precision-engineered for peak performance.</p>
-    <a href="tel:+263788158614" class="btn-inquire">Inquire Now</a>
+    <a href="https://wa.me/263784664658?text=Hello,%20I%20am%20inquiring%20about%20Engine%20Parts." class="btn-inquire" target="_blank">Inquire Now</a>
 </div>
```
*(You can apply this same replacement to the "Inquire Now" buttons on your category files like `BrakingSystem.html`, `Electrical.html`, etc. if you wish!)*

---

### 5. Change the WhatsApp Floating Icon to "Chat on WhatsApp"

Currently, the WhatsApp button is a floating circle with only a WhatsApp icon. To convert it into a pill-shaped button that reads **"Chat on WhatsApp"**:

#### Step 5A: Edit index.html
1. Open [index.html](file:///c:/me/DiamondMotorSpares/index.html).
2. Locate the floating button code at the bottom (around **lines 242 to 245**).
3. Insert a text label (e.g. `<span>Chat on WhatsApp</span>`) inside the link.

**HTML Code Change:**
```diff
-<a href="https://wa.me/263784664658?text=Hello%20Diamond%20Motor%20Spares" class="whatsapp-float" target="_blank">
-    <i class="fab fa-whatsapp"></i>
-    <span class="whatsapp-notify">1</span>
-</a>
+<a href="https://wa.me/263784664658?text=Hello%20Diamond%20Motor%20Spares" class="whatsapp-float" target="_blank">
+    <i class="fab fa-whatsapp"></i>
+    <span class="whatsapp-text">Chat on WhatsApp</span>
+    <span class="whatsapp-notify">1</span>
+</a>
```

#### Step 5B: Edit style/style.css
1. Open [style/style.css](file:///c:/me/DiamondMotorSpares/style/style.css).
2. Locate `.whatsapp-float` (around **line 610**).
3. Change its styling to support text side-by-side with the icon, and give it padding instead of a fixed small circular width.

**CSS Code Change:**
```diff
 .whatsapp-float {
-    width: 55px;
-    height: 55px;
+    width: auto;
+    height: auto;
+    padding: 10px 20px;
     background-color: #25d366;
     color: #fff;
-    font-size: 30px;
+    font-size: 16px;
+    font-weight: 700;
+    gap: 8px; /* space between icon and text */
 }
```
4. Add a rule inside `style/style.css` to keep the icon looking great:
```css
.whatsapp-float i {
    font-size: 22px;
}
```

---

Good luck with your changes! If you run into any issues or want help testing, let me know!
