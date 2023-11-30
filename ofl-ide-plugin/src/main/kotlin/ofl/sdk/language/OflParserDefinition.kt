package ofl.sdk.language

import com.intellij.lang.ASTNode
import com.intellij.lang.ParserDefinition
import com.intellij.lang.PsiParser
import com.intellij.lexer.Lexer
import com.intellij.openapi.project.Project
import com.intellij.psi.FileViewProvider
import com.intellij.psi.PsiElement
import com.intellij.psi.PsiFile
import com.intellij.psi.tree.IFileElementType
import com.intellij.psi.tree.TokenSet
import ofl.sdk.language.parser.OflParser
import ofl.sdk.language.psi.OflTypes
import org.jetbrains.annotations.NotNull


class OflParserDefinition : ParserDefinition {
    @NotNull
    override fun createLexer(project: Project?): Lexer {
        return OflLexerAdapter()
    }

    @NotNull
    override fun getCommentTokens(): TokenSet {
        return OflTokenSets.COMMENTS
    }

    @NotNull
    override fun getStringLiteralElements(): TokenSet {
        return TokenSet.EMPTY
    }

    @NotNull
    override fun createParser(project: Project?): PsiParser {
        return OflParser()
    }

    @NotNull
    override fun getFileNodeType(): IFileElementType {
        return FILE
    }

    @NotNull
    override fun createFile(@NotNull viewProvider: FileViewProvider): PsiFile {
        return OflFile(viewProvider)
    }

    @NotNull
    override fun createElement(node: ASTNode?): PsiElement {
        return OflTypes.Factory.createElement(node)
    }

    companion object {
        val FILE = IFileElementType(OflLanguage.INSTANCE)
    }
}