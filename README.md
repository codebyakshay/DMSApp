# 📄 Document Management App (DMSApp)

A mobile document management application built using **React Native (Expo)**. It enables users to securely upload, tag, and manage PDF/image documents. This project was built as part of the **Allsoft React Native Developer Assignment**.

---

## 🚀 Features

- 🔐 OTP-based authentication flow
- 📤 Upload PDF/image files
- 🏷️ Add remarks, major/minor heads, and tags
- 📆 Date handling with `moment.js`
- 💾 Redux Toolkit + Thunks for state management
- 🌐 API integration with Axios
- 📱 Built for both iOS and Android using Expo

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/DMSApp.git
cd DMSApp
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. (Optional) For iOS

```bash
cd ios && pod install
```

### 4. Run the app

```bash
npx expo start
```

Scan the QR code using Expo Go (iOS or Android).

---

## 🧱 Project Structure

```
src/
├── Screen/
│   ├── AuthScreen/
│   ├── FileUploadScreen/
│   ├── DashboardScreen/
│   └── SplashScreen/
├── services/               # API layer (Axios + Token setup)
├── store/                  # Redux slices and thunks
└── utils/                  # Token storage
```

---

## 💡 Development Practices

- ✅ Incremental Git commits with meaningful messages
- ✅ Field validation before submission
- ✅ Modular and reusable code components
- ✅ Token-based authentication with secure storage

---

## 📦 Dependencies Used

- `expo-document-picker` – for file selection
- `moment` – for formatting and handling dates
- `react-native-paper` – UI components and styling
- `@reduxjs/toolkit`, `react-redux` – state management
- `axios` – for API calls
- `react-native-toast-message` – toast notifications

---

## 📌 Notes

- Currently uses a hardcoded user ID: `nitin` (can be replaced with actual login user later)
- Token is securely stored using `AsyncStorage`
- API endpoints can be replaced or tested using the attached Postman collection

---

## 📬 Contact

If you have any questions or feedback:

**Akshay Kumar Sinha**  
📱 +91 79875 22152  
📧 aksinha8989@gmail.com
