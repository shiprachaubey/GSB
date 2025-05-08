# --- React Native core ---
-keep class com.facebook.react.** { *; }
-dontwarn com.facebook.react.**

# --- Hermes (JS Engine) ---
-keep class com.facebook.hermes.** { *; }
-dontwarn com.facebook.hermes.**

# --- Common AndroidX / Google classes ---
-keep class androidx.** { *; }
-dontwarn androidx.**

-keep class com.google.** { *; }
-dontwarn com.google.**

# --- Common RN packages (adjust if you use others) ---
-keep class com.swmansion.** { *; }
-dontwarn com.swmansion.**

-keep class com.facebook.** { *; }
-dontwarn com.facebook.**

-keep class expo.** { *; }
-dontwarn expo.**

-keep class com.airbnb.** { *; }
-dontwarn com.airbnb.**

# --- Network Libraries ---
-dontwarn okhttp3.**
-dontwarn okio.**
-dontwarn javax.annotation.**

# --- Keep JSI bindings (if any used) ---
-keep class com.facebook.jni.** { *; }

# --- Prevent stripping of native methods ---
-keepclasseswithmembers class * {
    native <methods>;
}
