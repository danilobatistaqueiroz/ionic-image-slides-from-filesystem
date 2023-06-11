import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.labs.efilereader',
  appName: 'ebook-filereader',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
