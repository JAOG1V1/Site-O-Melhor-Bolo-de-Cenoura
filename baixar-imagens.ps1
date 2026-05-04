# =============================================================
# Script para baixar imagens REAIS de bolo de cenoura brasileiro
# Fonte: Wikimedia Commons (verificadas e gratuitas)
# Autor: João Gabriel
#
# Como usar:
#   1. Clique com o botão direito neste arquivo
#   2. Escolha "Executar com PowerShell"
#   (ou abra o PowerShell e execute: .\baixar-imagens.ps1)
# =============================================================

Write-Host "Baixando imagens REAIS de bolo de cenoura brasileiro..." -ForegroundColor Yellow
Write-Host "Fonte: Wikimedia Commons" -ForegroundColor Gray
Write-Host ""

$pasta = Join-Path $PSScriptRoot "imagens"
if (-not (Test-Path $pasta)) {
    New-Item -ItemType Directory -Path $pasta | Out-Null
}

# URLs verificadas do Wikimedia Commons - bolo de cenoura brasileiro
$mapa = @{
    "bolo-principal.jpg"         = "https://upload.wikimedia.org/wikipedia/commons/4/40/Bolo_de_cenoura_com_cobertura_de_chocolate_vegano.jpg"
    "bolo-1.jpg"                 = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Bolo_de_cenoura_com_chocolate_e_granulado.jpg"
    "bolo-2.jpg"                 = "https://upload.wikimedia.org/wikipedia/commons/c/cc/Bolo_de_cenoura.jpg"
    "bolo-3.jpg"                 = "https://upload.wikimedia.org/wikipedia/commons/4/42/Bolo_de_Cenoura_%28cima%29%2C_08-12-2020.jpg"
    "bolo-4.jpg"                 = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bolo_de_Cenoura_%28diagonal%29%2C_08-12-2020.jpg"
    "bolo-5.jpg"                 = "https://upload.wikimedia.org/wikipedia/commons/6/69/Bolo_de_cenoura_%28lateral%29%2C_08-12-2020.jpg"
    "bolo-6.jpg"                 = "https://upload.wikimedia.org/wikipedia/commons/c/ca/Peda%C3%A7o_de_Bolo_de_Cenoura%2C_08-12-2020.jpg"
    "relacionada-fuba.jpg"       = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Bolo_de_Fub%C3%A1_%28milho%29_02.jpg"
    "relacionada-brigadeiro.jpg" = "https://upload.wikimedia.org/wikipedia/commons/8/8b/Brigadeiro_%28candy%29.JPG"
    "relacionada-chocolate.jpg"  = "https://upload.wikimedia.org/wikipedia/commons/2/21/Bolo_de_chocolate_com_maionese.JPG"
}

# Header obrigatório do Wikimedia
$headers = @{
    "User-Agent" = "BoloCenouraProject/1.0 (educational-project)"
    "Accept" = "image/jpeg,image/*,*/*"
}

$total = $mapa.Count
$contador = 0

foreach ($item in $mapa.GetEnumerator()) {
    $contador++
    $dest = Join-Path $pasta $item.Key

    Write-Host "[$contador/$total] Baixando $($item.Key)..." -ForegroundColor Cyan

    try {
        Invoke-WebRequest -Uri $item.Value -OutFile $dest -UseBasicParsing -Headers $headers
        $tam = [math]::Round((Get-Item $dest).Length / 1KB, 1)
        Write-Host "    OK! ($tam KB)" -ForegroundColor Green
    } catch {
        Write-Host "    ERRO: $($_.Exception.Message)" -ForegroundColor Red
    }

    # Delay entre requests para evitar rate-limit do Wikimedia
    if ($contador -lt $total) {
        Start-Sleep -Seconds 2
    }
}

Write-Host ""
Write-Host "Pronto! Imagens baixadas em: $pasta" -ForegroundColor Green
Write-Host ""
Write-Host "DICA: Para personalizar, substitua os arquivos em /imagens" -ForegroundColor Yellow
Write-Host "      mantendo os mesmos nomes de arquivo." -ForegroundColor Yellow
Write-Host ""
Read-Host "Pressione ENTER para fechar"
