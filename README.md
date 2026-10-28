# 🛒 Ecommerce Mobile App (React Native)

[![React Native](https://img.shields.io/badge/React%20Native-0.85.3-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FCM%2021.14-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Razorpay](https://img.shields.io/badge/Payment-Razorpay-0C2340?logo=razorpay&logoColor=white)](https://razorpay.com/)
[![Socket.IO](https://img.shields.io/badge/Real--Time-Socket.io-010101?logo=socketdotio&logoColor=white)](https://socket.io/)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-brightgreen)](#prerequisites)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A production-grade, full-featured React Native e-commerce mobile application built for high performance and smooth user experience across Android and iOS. Powered by a modern architecture featuring **instant session resumption**, **Firebase Cloud Messaging with status bar push alerts & deep linking**, **Socket.IO real-time order tracking**, **Razorpay payments**, and a **complete post-purchase returns & support ticketing system**.

---

## 🌟 Key Features

### 🔐 1. Authentication & Onboarding
- **Branded Splash & Walkthrough:** Fluid onboarding carousel with multi-step interactive slides and language selection.
- **Persistent User Sessions:** Non-blocking optimistic session restoration from `AsyncStorage` (`@ecommerce/session`) paired with silent background token validation.
- **Complete Auth Flow:** User registration, credential login, password reset, and SMS/OTP verification.

### 🛍️ 2. Product Catalog & Discovery
- **Dynamic Home Feed:** Interactive hero promotional banners, category carousels, trending collections, and deals of the day.
- **Category Explorer & Smart Search:** Real-time debounced keyword search with filtering across categories, pricing, and ratings.
- **Rich Product Detail Screens:** Multi-angle image viewing, size/variant selector, dynamic stock updates, color options, and customer reviews.
- **Wishlist & Saved Items:** One-tap save for later with instant synchronization to cart.

### 💳 3. Cart, Checkout & Multi-Channel Payments
- **Dynamic Cart Management:** Real-time quantity increment/decrement, tax & discount breakdowns, and promo coupon application.
- **Saved Delivery Addresses:** Multiple shipping address management with GPS device geolocation (`react-native-geolocation-service`).
- **Payment Gateway Integration:** Integrated with **Razorpay** supporting UPI, Credit/Debit cards, Net Banking, and Cash on Delivery (COD).
- **Digital In-App Wallet:** User wallet balance with top-up ("Add Money") capabilities.
- **Celebratory Order Success:** Animated order confirmation with direct one-click handoff to order tracking.

### 📍 4. Real-Time Order Tracking & Management
- **Order History:** Tabbed categorization for *Active*, *Completed*, and *Cancelled* orders.
- **Live Order Tracking:** Powered by **Socket.IO WebSocket** connections for real-time delivery status, driver updates, and shipment milestones.
- **Itemized Receipts:** Complete invoice breakdown, status history, and delivery estimates.

### 🛎️ 5. Post-Purchase Support & Returns Lifecycle
- **Tickets Dashboard:** Central hub to monitor all customer service requests and disputes.
- **Issue Resolution:** Submit support tickets with issue categories and descriptions.
- **Complete Return & Exchange Engine:**
  - Return request flow with pickup tracking (`ReturnTrackingScreen`)
  - Product replacement & replacement dispatch tracking (`ReplacementTrackingScreen`)
  - Bank/Wallet refund request & timeline tracking (`RefundTrackingScreen`)
- **Direct Support Channels:** Built-in customer service chat and hotline dialing.

### 🔔 6. Native Push Notifications & Deep Linking
- **Firebase Cloud Messaging (FCM):** Background, foreground, and cold-start push notification handling.
- **Android 8+ Notification Channels:** Tailored channels for Orders (high-priority vibration), Support Chats, Product Drops, and System Announcements.
- **Smart Deep Linking:** Tapping notifications routes directly to the relevant screen:
  - `chat_message` ➔ Opens exact product support chat session
  - `order_update` ➔ Opens live order tracking screen
  - `product_message` ➔ Opens targeted product detail screen

---

## 🏗️ Architecture & Tech Stack

```text
ecommerce-user-app/
├── android/                   # Native Android project (Gradle, NDK, Kotlin/Java)
├── ios/                       # Native iOS project (Xcode, CocoaPods)
├── scripts/                   # Android automation & emulator run scripts
├── src/
│   ├── assets/                # Logos, icons, branding & payment badges
│   ├── components/            # Reusable UI components (ProductCard, CustomButton, etc.)
│   ├── config/                # API endpoints, Socket URLs & environment switching
│   ├── constants/             # Design tokens & mock fallbacks
│   ├── context/               # Global state management (Auth, Cart, Orders, Theme)
│   ├── navigation/            # RootNavigator, Stack & Bottom Tab navigators
│   ├── screens/               # 45+ feature screens
│   │   ├── auth/              # Login, Register, OTP, ForgotPassword
│   │   ├── cart/              # CartScreen
│   │   ├── checkout/          # CheckoutScreen, PaymentScreen
│   │   ├── home/              # HomeScreen, Categories, ProductDetails, Search
│   │   ├── notifications/     # NotificationScreen
│   │   ├── onboarding/        # SplashScreen, LanguageScreen, Walkthrough screens
│   │   ├── orders/            # OrdersScreen, OrderDetails, TrackOrder, OrderSuccess
│   │   ├── profile/           # Profile, Addresses, Wallet, PaymentMethods, Support
│   │   ├── support/           # Tickets, Returns, Replacements, Refunds
│   │   └── wishlist/          # WishlistScreen
│   ├── services/              # API Client, FCM, WebSockets, Geolocation
│   ├── theme/                 # Harmonious color palettes, typography, spacing
│   └── utils/                 # Geocoding, formatters & data sanitizers
├── App.tsx                    # Top-level shell with FCM initialization & Theme
├── index.js                   # Application entry point
├── package.json               # Dependencies & scripts
└── tsconfig.json              # TypeScript configuration
```

| Technology | Purpose |
| :--- | :--- |
| **React Native 0.85.3** | Cross-platform mobile runtime |
| **React 19.2.3** | Component UI library |
| **TypeScript 5.8** | Type safety and autocompletion |
| **@react-navigation/native-stack 7** | Smooth native stack navigation transitions |
| **react-native-reanimated 4.3** | 60/120 FPS native thread animations |
| **react-native-gesture-handler 2.31** | Fluid gesture and touch handling |
| **@react-native-async-storage** | Persistent offline session and preferences |
| **@react-native-firebase/messaging** | Native push notifications & status bar alerts |
| **react-native-razorpay** | Secure in-app checkout and payments |
| **socket.io-client** | Real-time live order tracking via WebSockets |
| **react-native-geolocation-service** | Device location for shipping address detection |
| **react-native-nitro-image** | High-performance image rendering |

---

## ⚙️ Configuration & Environment

Network configuration is centralized in [`src/config/apiConfig.js`](src/config/apiConfig.js). You can switch between production cloud hosting and local development with a single toggle:

```javascript
export const API_CONFIG = {
  // Use 'public' for the deployed cloud backend, or 'local' for LAN/emulator
  mode: 'public',

  // Live backend (Render)
  publicBaseUrl: 'https://ecommerce-app-backend-1kn0.onrender.com/api/v1',
  publicSocketUrl: 'https://ecommerce-app-backend-1kn0.onrender.com',
  publicTrackingSocketUrl: 'https://ecommerce-app-backend-1kn0.onrender.com',

  // Local development backend
  localBaseUrl: 'http://10.0.2.2:5001/api/v1', // Android emulator default
  localSocketUrl: 'http://10.0.2.2:5001',
  localTrackingSocketUrl: 'http://10.0.2.2:5000',
};
```

### Android Firebase Setup
The Android client includes [`android/app/google-services.json`](android/app/google-services.json) configured for Firebase Cloud Messaging (`com.ecommerce`). For custom Firebase projects, place your own `google-services.json` inside `android/app/`.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `>= 22.11.0`
- **JDK**: Java Development Kit 17 (recommended for React Native 0.85)
- **Android SDK & Android Studio**: Platform 34+, Android Build-Tools, and an Android Virtual Device (AVD) or physical device with USB debugging.
- **Xcode & CocoaPods** *(macOS only for iOS)*.

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Abdulsami12166/Ecommerce-app-.git
cd Ecommerce-app-
npm install
```

### 2. Run on Android
Launch Metro bundler and start the Android application:

```bash
# Option A: Built-in stable launch script (restarts adb, checks device, and runs)
npm run android

# Option B: Standard React Native CLI
npm run android:cli
```

### 3. Run on iOS (macOS required)
```bash
cd ios
pod install
cd ..
npm run ios
```

### 4. Start Metro Server Separately
If you want to start the Metro bundler manually:
```bash
npm start
```

---

## 📱 Scripts Reference

| Command | Action |
| :--- | :--- |
| `npm start` | Starts the React Native Metro bundler |
| `npm run android` | Executes the stable Android emulator boot and app deployment script |
| `npm run android:cli` | Direct call to `react-native run-android` |
| `npm run ios` | Direct call to `react-native run-ios` |
| `npm run lint` | Runs ESLint across the source code |
| `npm test` | Runs Jest test suites |

---

## 🔗 Related Repositories

- **Backend API Server**: [Abdulsami12166/Ecommerce-App-Backend-](https://github.com/Abdulsami12166/Ecommerce-App-Backend-) — Express.js, MongoDB, JWT Auth, Razorpay, Cloudinary, and Socket.IO server deployed on Render.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
