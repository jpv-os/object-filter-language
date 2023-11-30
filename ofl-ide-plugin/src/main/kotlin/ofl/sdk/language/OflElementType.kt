package ofl.sdk.language

import com.intellij.psi.tree.IElementType
import ofl.sdk.language.OflLanguage
import org.jetbrains.annotations.NonNls
import org.jetbrains.annotations.NotNull

class OflElementType(@NotNull @NonNls debugName: String) : IElementType(debugName, OflLanguage.INSTANCE) {
}
