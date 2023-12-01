import 'dotenv/config';

export default {
  expo: {
    name: 'Impact Fund',
    slug: 'impact-fund',
    owner: 'impactfunddev',
    version: '0.0.1',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 3000,
    },
    assetBundlePatterns: ['assets/*'],
    ios: {
      supportsTablet: false,
      bundleIdentifier: 'org.calblueprint.impactfund',
      //   icon: './assets/images/appstore.png',
      buildNumber: '2',
    },
    android: {
      package: 'org.calblueprint.impactfund',
      versionCode: 1,
      //   icon: './assets/images/playstore.png',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: 'd1a810ad-7132-4890-888f-0142c444b21d',
      },
    },
  },
};
