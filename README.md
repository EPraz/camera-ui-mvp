# 📹 CamViewer – Monitor & Playback App

Mobile and web application for **real-time camera monitoring and playback**, built with **React Native (Expo)**, designed to provide a smooth, modern, and optimized experience on both **mobile** and **desktop** modes.

Created as a portfolio project to showcase skills in **cross-platform development**, modular architecture, and the use of modern libraries for UI and navigation.

---

## 🚀 Current Features (MVP)

- **Responsive UI** adapted for mobile devices and large screens.
- **Bottom Navigation Bar** and intelligent **Sidebar** for desktop/tablet.
- **Timeline section** for navigating recent clips (currently disabled).
- **Coming Soon screen** for sections under construction.
- Animated navigation with **smooth transitions** between screens.
- Styling with **NativeWind (TailwindCSS)** for speed and consistency.
- **Feed Section** to view all available cameras.
- **VideoPlayer Section** to view the selected camera, expandable to full screen.
- **Feed Section Menu** allows filtering, adding, and removing camera mockups.

---

## 🛠️ Technologies Used

- **Frontend:** React Native (Expo)
- **Styling:** NativeWind (TailwindCSS for React Native) + custom styles
- **Navigation:** Expo Router, React Navigation
- **Icons:** Ionicons
- **Utilities:** React Native Safe Area Context, custom hooks
- **Animations:** Built-in `expo-router` transitions with `slide_from_right`

---

## 🗺️ Future Implementations

If development continues, the following features are planned:

- **Secure authentication** (JWT / OAuth2)
- **Real-time camera streaming** (WebRTC or RTSP)
- **Push notifications** for detected events
<!-- - **User and role management** -->
- **Recorded clip playback** with filters by date and time
<!-- - **Offline mode** for reviewing downloaded recordings -->
- **Cloud storage integration** (AWS S3, GCP Storage, etc.)

---

## 📸 Screenshots

### Mobile View

<p align="center">
   <img src="./assets/images/mobileCapture.jpeg" alt="Mobile view" width="300" /> &nbsp;&nbsp;&nbsp;
   <img src="./assets/images/mobileFeedMenu.jpeg" alt="Mobile view" width="300" /> &nbsp;&nbsp;&nbsp;
   <img src="./assets/images/mobileInConstructionPage.jpeg" alt="Mobile view" width="300" />
</p>

### Desktop View

<p align="center">
   <img src="./assets/images/desktopCapture.png" alt="Desktop view" width="600" /> &nbsp;&nbsp;&nbsp;
   <img src="./assets/images/desktopInContructionPage.png" alt="Desktop view" width="600" />
</p>

---

## ⚙️ Installation & Usage

```bash
# Clone the repository
git clone https://github.com/EPraz/camera-ui-mvp.git

# Enter the project folder
cd camera-ui-mvp

# Install dependencies
npm install

# Run in development mode
npx expo start

# Run in web mode
npx expo start --web
```
