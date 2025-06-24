package com.yourappname // <-- use your actual package name

import android.os.Bundle
import com.facebook.react.ReactActivity
import org.devio.rn.splashscreen.SplashScreen  // <-- add this import

class MainActivity : ReactActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this) // <-- show splash screen
        super.onCreate(savedInstanceState)
    }

    override fun getMainComponentName(): String {
        return "Beta" // <-- match with your AppRegistry name
    }
}
