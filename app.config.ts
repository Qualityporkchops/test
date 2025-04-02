import "dotenv/config";

export default {
  expo: {
    name: "MealMate",
    slug: "mealmate",
    version: "1.0.0",
    orientation: "portrait",
    scheme: "mealmate",
    extra: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
        FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
        GOOGLE_CLIENT_ID_IOS: process.env.GOOGLE_CLIENT_ID_IOS,
        GOOGLE_CLIENT_ID_ANDROID: process.env.GOOGLE_CLIENT_ID_ANDROID,
        eas: {
          projectId: "a14f331e-a168-4d09-bef0-ae74d5c67c95"
        }
    },
    android: {
      package: "com.mealmate.app"
    },
    ios: {
      bundleIdentifier: "com.mealmate.app"
    },
  },
};
