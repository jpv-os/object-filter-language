package ofl.sdk.language

import com.intellij.psi.tree.TokenSet
import ofl.sdk.language.psi.OflTypes


interface OflTokenSets {
    companion object {
        val IDENTIFIERS = TokenSet.create(OflTypes.KEY)
        val COMMENTS = TokenSet.create(OflTypes.COMMENT)
    }
}