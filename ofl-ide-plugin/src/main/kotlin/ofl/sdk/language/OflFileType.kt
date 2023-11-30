package ofl.sdk.language

import com.intellij.openapi.fileTypes.LanguageFileType
import org.jetbrains.annotations.NotNull
import org.jetbrains.annotations.Nullable
import javax.swing.Icon


class OflFileType private constructor() : LanguageFileType(OflLanguage.INSTANCE) {
    companion object {
        val INSTANCE = OflFileType()
    }

    @NotNull
    override fun getName(): String {
        return "OFL File"
    }

    @NotNull
    override fun getDescription(): String {
        return "OFL file"
    }

    @NotNull
    override fun getDefaultExtension(): String {
        return "ofl"
    }

    @Nullable
    override fun getIcon(): Icon {
        return OflIcons.FILE
    }


}