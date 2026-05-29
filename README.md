# StickerSmash 🖼️✨

Welcome to **StickerSmash**! This is a cross-platform mobile app built with **React Native** and **Expo** that lets you take a photo, smash some emoji stickers on top of it, scale/rotate them with gestures, and save your masterpiece back to your phone.

I'm opening this up to our Discord community because the core mechanics are built, but it’s a total blank canvas. **I want us to brainstorm and build the absolute wildest, funniest, or most useful features on top of this foundation.**

---

## 🛠️ What the App Does Right Now (The Baseline)
- 📸 **Choose a Background:** Pops open your native phone gallery to pick any picture.
- 🎨 **Add Stickers:** Opens a modal menu to pick from a list of emojis.
- 🤌 **Smooth Gestures:** You can drag, pinch-to-zoom, and rotate the stickers natively using `react-native-gesture-handler` and `reanimated`.
- 💾 **Save to Device:** Captures a screenshot of your finished creation and saves it straight to your photo library (handles Android 13+ permissions).

---

## 💡 Hacking Ideas: What Should We Build Next?
Here are some jumping-off points to get the community brainstorming. What sounds the coolest to build out?

1. **The Game Loop (Gamification):**
   - Can we turn it into a "Meme Challenge" app where the app gives you a daily prompt (e.g., *"Make this cat look like a wizard"*), and users have to smash stickers to match the prompt?
   - Add an unlockable "Trophy Room" where using certain combinations of stickers unlocks custom achievements or virtual badges.

2. **Community & Sharing (Discord Integration?):**
   - A button that uses a webhook to instantly post your finished "smashed" image directly to a dedicated `#gallery` channel in our Discord server.
   - An in-app leaderboard or voting system for the funniest image of the week.

3. **Sticker Upgrades:**
   - Instead of just standard text emojis, allow uploading custom `.png` graphics (like custom Discord server emojis, community inside jokes, or gaming assets).
   - Add sound effects when a sticker is "smashed" or dropped onto the canvas.

4. **AI Chaos Engine:**
   - A button that feeds the image to an AI model (like Qwen/OpenAI) to "rate" the humor of your meme, or auto-generate a chaotic caption based on the stickers you chose.

*Have a completely different crazy idea? Drop it in the Discord channel or open an Issue/PR!*

---

## 🚀 How to Get It Running Locally

If you want to pull the code down and see how it works on your own machine/phone:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed, and grab the **Expo Go** app from the App Store or Google Play Store on your physical phone.

### Setup
1. **Clone the repo:**
   ```bash
   git clone [https://github.com/lifeinData/StickerSmash.git](https://github.com/lifeinData/StickerSmash.git)
   cd StickerSmash