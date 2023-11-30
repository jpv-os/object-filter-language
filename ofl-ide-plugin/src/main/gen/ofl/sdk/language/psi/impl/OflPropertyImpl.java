// This is a generated file. Not intended for manual editing.
package ofl.sdk.language.psi.impl;

import java.util.List;
import org.jetbrains.annotations.*;
import com.intellij.lang.ASTNode;
import com.intellij.psi.PsiElement;
import com.intellij.psi.PsiElementVisitor;
import com.intellij.psi.util.PsiTreeUtil;
import static ofl.sdk.language.psi.OflTypes.*;
import com.intellij.extapi.psi.ASTWrapperPsiElement;
import ofl.sdk.language.psi.*;

public class OflPropertyImpl extends ASTWrapperPsiElement implements OflProperty {

  public OflPropertyImpl(@NotNull ASTNode node) {
    super(node);
  }

  public void accept(@NotNull OflVisitor visitor) {
    visitor.visitProperty(this);
  }

  @Override
  public void accept(@NotNull PsiElementVisitor visitor) {
    if (visitor instanceof OflVisitor) accept((OflVisitor)visitor);
    else super.accept(visitor);
  }

}
