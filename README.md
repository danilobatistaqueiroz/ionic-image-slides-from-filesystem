```
copy the folder device/Documents/ebookfile to Document's device folder
pnpm i
ionic build
ionic cap copy android

export JAVA_HOME=~/android-studio/jbr
cd android

    ./gradlew clean
    ./gradlew build
    ./gradlew assembleDebug
    ./gradlew installDebug
adb shell am start -n "br.labs.efilereader/br.labs.efilereader.MainActivity" -a android.intent.action.MAIN -c android.intent.category.LAUNCHER
```

#### converting jpg to txt base64 ########
node convert-jpg-to-txt.ts