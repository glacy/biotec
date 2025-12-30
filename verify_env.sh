#!/usr/bin/env bash

# ------------------------------------------------------------
# Verificación del entorno técnico oficial del curso
# Curso: Diseño semántico de documentos académicos
# ------------------------------------------------------------

set -e

echo "=============================================="
echo " Verificación del entorno: frontmatter-academico"
echo "=============================================="
echo

# 1. Verificar entorno Conda activo
if [[ -z "$CONDA_DEFAULT_ENV" ]]; then
  echo "❌ ERROR: No hay ningún entorno Conda activo."
  echo "   Active el entorno con:"
  echo "   conda activate frontmatter-academico"
  exit 1
fi

if [[ "$CONDA_DEFAULT_ENV" != "frontmatter-academico" ]]; then
  echo "❌ ERROR: El entorno activo es '$CONDA_DEFAULT_ENV'"
  echo "   Se requiere: 'frontmatter-academico'"
  exit 1
fi

echo "✔ Entorno Conda activo: $CONDA_DEFAULT_ENV"
echo

# 2. Función auxiliar para verificar comandos
check_command () {
  local cmd=$1
  local name=$2

  if command -v "$cmd" &> /dev/null; then
    echo "✔ $name encontrado: $($cmd --version | head -n 1)"
  else
    echo "❌ ERROR: '$name' no está disponible en el entorno."
    exit 1
  fi
}

# 3. Verificación de herramientas clave
check_command myst "MyST"
check_command pandoc "Pandoc"
check_command quarto "Quarto"
check_command jupyter-book "Jupyter Book"
check_command python3 "Python 3"

# 4. Verificación de librerías Python
if python3 -c "import yaml" &> /dev/null; then
  echo "✔ PyYAML encontrado"
else
  echo "❌ ERROR: 'PyYAML' no está disponible en el entorno (requerido para validar frontmatter)."
  exit 1
fi

echo
echo "=============================================="
echo " ✔ El entorno está correctamente configurado"
echo "=============================================="
echo
echo "Puede continuar con las actividades del curso."

