package ofl.sdk.language

import com.intellij.extapi.psi.PsiFileBase
import com.intellij.openapi.fileTypes.FileType
import com.intellij.psi.FileViewProvider
import org.jetbrains.annotations.NotNull

class OflFile(@NotNull viewProvider: FileViewProvider) : PsiFileBase(viewProvider, OflLanguage.INSTANCE) {
    override fun getFileType(): FileType = OflFileType.INSTANCE
    override fun toString(): String = "OFL File"
}