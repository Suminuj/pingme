# PingMe

**Ping me. Stay connected.**

The first milestone is a mobile-first welcome and authentication interface.

## Current prototype
- Responsive welcome screen
- Login / create-account tab interaction
- Password show/hide control
- Light/dark theme toggle

**Authentication and messaging are not connected yet. Do not enter real passwords.**

## Planned stack
- HTML, CSS and JavaScript
- Firebase Authentication
- Cloud Firestore with restrictive security rules
- Free Android APK packaging workflow

## Security rules for development
- Never commit private keys or service-account credentials.
- Test database access rules before storing private conversations.
- Authentication alone is not end-to-end encryption.
- Do not claim end-to-end encryption until it is implemented and verified.

## Next
- [ ] Firebase Authentication
- [ ] Unique usernames and profiles
- [ ] Secure real-time one-to-one messaging
- [ ] Android APK packaging and device testing
