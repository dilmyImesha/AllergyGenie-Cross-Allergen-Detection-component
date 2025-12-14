# AllergyGenie – Cross Allergen Detection Component

## 📌 Project Overview

**AllergyGenie** is a mobile application developed as part of an undergraduate product-based project. The system focuses on helping users identify potential **cross-reactive allergen risks** based on allergens they already know they have, with optional support for extracting allergen data from **Skin Prick Test (SPT) reports**.

This repository mainly contains the implementation of the **Login & Authentication module**, along with the **Cross Allergen Detection component**, which together ensure secure, personalized allergy risk prediction.

---

## 🎯 Component Scope (My Contribution)

This repository highlights my individual contribution to the project, which includes:

* ✅ Secure **Login and Authentication functionality**
* ✅ User session management and persistence
* ✅ User-specific access to the Cross Allergen Detection component
* ✅ Integration-ready structure for allergen prediction logic

The authentication module ensures that all allergy data and predictions are securely associated with individual users.

---

## 🧠 Cross Allergen Detection Component

The Cross Allergen Detection component enables users to:

* Manually enter allergens they already know they are allergic to
* Optionally extract allergen information from Skin Prick Test (SPT) reports
* Receive predictions of **potential cross-reactive allergens**
* View allergen risk levels based on medical knowledge and AI-based mapping

This component is designed to support users who may not have regular access to medical professionals, while still allowing clinical data usage when available.

---

## 🔐 Login & Authentication Module

The login module is implemented using **React Native** and provides:

* User login using email and password
* Input validation and error handling
* Secure session persistence using local storage
* Automatic login detection and redirection
* Password visibility toggle for better usability

Once authenticated, users are redirected to their profile, where personalized allergen data and predictions can be accessed.

---

## 🛠️ Technologies Used

* **Frontend:** React Native (Expo)
* **Language:** TypeScript / JavaScript
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Storage:** Local storage utility (for session persistence)
* **UI Enhancements:** Expo Linear Gradient, Safe Area Context



