# MyMobileApp

A simple mobile app built with Expo that links to GitHub, HNG Hire Pages, and Telex.

## 📌 Project Overview
This project is part of the MOBILE-DESKTOP STAGE 0 TASK - "Git-ting Started" using React Native (Expo). The goal is to set up a GitHub repository, develop a React Native Expo application, document the process, and deploy it on Appetize.io.

## 🚀 Features
- Links to the project's GitHub repository
- Links to HNG Hire Pages
- Links to Telex or Delve
- Works on both iOS and Android

## 📂 Repository Structure
```
MyMobileApp/
│-- README.md
│-- LICENSE
│-- .gitignore
│-- mobile-app/
   │-- App.js
   │-- package.json
   │-- node_modules/
   │-- assets/
   │-- components/
   │-- screens/
```

## 🔧 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR_USERNAME/MyMobileApp.git
cd MyMobileApp
```

### 2️⃣ Install Dependencies
```sh
cd mobile-app
npm install
```

### 3️⃣ Run the App
```sh
npm start
```
This will open Expo Developer Tools in your browser.

## 📱 UI Implementation
Modify `App.js` to include buttons that link to relevant pages:

```jsx
import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to MyMobileApp</Text>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/YOUR_USERNAME/MyMobileApp')}>
        <Text style={styles.buttonText}>View GitHub Repository</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://hng.tech/')}>
        <Text style={styles.buttonText}>Visit HNG Hire Pages</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://telex.ai/')}>
        <Text style={styles.buttonText}>Visit Telex</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5, marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16 }
});
```

## 🚀 Deployment on Appetize.io
To allow easy testing, follow these steps:

### 1️⃣ Build the App
For Android:
```sh
expo build:android
```
For Web Preview:
```sh
expo build:web
```

### 2️⃣ Upload to Appetize.io
- Go to [Appetize.io](https://appetize.io/upload)
- Upload the APK or Web Build
- Copy and share the generated preview link

## 📤 Submission
- **Deadline:** Friday, February 7th, 11:59 PM (GMT+1, WAT)
- Submit via the provided submission link

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Summary
✅ Create GitHub Repository  
✅ Clone Repo & Set Up React Native Expo App  
✅ Add UI with Buttons Linking to GitHub & HNG  
✅ Commit & Push to GitHub  
✅ Update README.md  
✅ Deploy to Appetize.io  
✅ Submit Before Deadline  

