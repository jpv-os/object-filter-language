package ofl.sdk.language

import com.intellij.lexer.FlexAdapter

class OflLexerAdapter : FlexAdapter(OflLexer(null))