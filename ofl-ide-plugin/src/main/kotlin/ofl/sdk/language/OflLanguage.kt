package ofl.sdk.language

import com.intellij.lang.Language


class OflLanguage private constructor() : Language("OFL") {
    companion object {
        val INSTANCE: OflLanguage = OflLanguage()
    }
}