// This is a generated file. Not intended for manual editing.
package ofl.sdk.language.psi;

import com.intellij.psi.tree.IElementType;
import com.intellij.psi.PsiElement;
import com.intellij.lang.ASTNode;
import ofl.sdk.language.OflElementType;
import ofl.sdk.language.OflTokenType;
import ofl.sdk.language.psi.impl.*;

public interface OflTypes {

  IElementType PROPERTY = new OflElementType("PROPERTY");

  IElementType COMMENT = new OflTokenType("COMMENT");
  IElementType CRLF = new OflTokenType("CRLF");
  IElementType KEY = new OflTokenType("KEY");
  IElementType SEPARATOR = new OflTokenType("SEPARATOR");
  IElementType VALUE = new OflTokenType("VALUE");

  class Factory {
    public static PsiElement createElement(ASTNode node) {
      IElementType type = node.getElementType();
      if (type == PROPERTY) {
        return new OflPropertyImpl(node);
      }
      throw new AssertionError("Unknown element type: " + type);
    }
  }
}
