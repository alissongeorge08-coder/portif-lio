$content = Get-Content -Raw "css\style.css"
$content = $content -replace '(?s)(?m)/\* Filtros \*/.*?/\* ============================================\r?\n   PROJETOS\r?\n   ============================================ \*/', "/* ============================================`r`n   PROJETOS`r`n   ============================================ */"
$content = $content -replace '(?s)\.projetos-featured \.projeto-card \{.*?(?=\.projetos-grid \{)', ''
Set-Content -Path "css\style.css" -Value $content -Encoding UTF8
