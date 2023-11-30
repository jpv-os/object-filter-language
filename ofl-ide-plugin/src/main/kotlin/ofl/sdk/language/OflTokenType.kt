package ofl.sdk.language

import com.intellij.psi.tree.IElementType
import ofl.sdk.language.OflLanguage
import org.jetbrains.annotations.NonNls
import org.jetbrains.annotations.NotNull

class OflTokenType(@NotNull @NonNls debugName: String) : IElementType(debugName, OflLanguage.INSTANCE) {
    override fun toString(): String = "OflTokenType.${super.toString()}"
}