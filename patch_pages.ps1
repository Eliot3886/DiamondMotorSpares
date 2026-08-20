$files = @(
    'BrakingSystem.html',
    'Electrical.html',
    'EngineComponents.html',
    'Fuel Components.html',
    'OilsLubricates.html',
    'Suspension.html',
    'Timing.html'
)

$mobileNav = "`n    <nav class=""mobile-bottom-nav"" aria-label=""Mobile navigation"">`n        <a href=""index.html#home""><i class=""fas fa-house""></i><span>Home</span></a>`n        <a href=""index.html#about""><i class=""far fa-building""></i><span>About</span></a>`n        <a href=""index.html#dedicated-products"" class=""is-active"" aria-current=""page""><i class=""fas fa-box-open""></i><span>Products</span></a>`n        <a href=""index.html#contact""><i class=""far fa-envelope""></i><span>Contact</span></a>`n    </nav>"

foreach ($file in $files) {
    $path = "c:\me\DiamondMotorSpares\$file"
    if (-not (Test-Path $path)) { Write-Host "SKIP: $file"; continue }

    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

    # 1. Upgrade Font Awesome 6.0 to 6.5.1
    $content = $content -replace 'font-awesome/6\.0\.0/css/all\.min\.css', 'font-awesome/6.5.1/css/all.min.css'

    # 2. Add mobile-premium.css if missing
    if ($content -notmatch 'mobile-premium\.css') {
        $content = $content -replace '(<link rel="stylesheet" href="style/nav-footer\.css">)', ('<link rel="stylesheet" href="style/nav-footer.css">' + "`n    " + '<link rel="stylesheet" href="style/mobile-premium.css">')
    }

    # 3. Inject mobile-bottom-nav after the FIRST </nav> tag (the top navbar) if not already there
    if ($content -notmatch 'mobile-bottom-nav') {
        $insertAfter = '</nav>'
        $idx = $content.IndexOf($insertAfter)
        if ($idx -ge 0) {
            $content = $content.Substring(0, $idx + $insertAfter.Length) + $mobileNav + $content.Substring($idx + $insertAfter.Length)
        }
    }

    [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
    Write-Host "PATCHED: $file"
}

Write-Host "All done!"
