$folder = 'D:\\shanmugam_associates\\public\\images\\gallery'
$files = Get-ChildItem -Path $folder -File | Where-Object { $_.Name -match '^1 \(' }
$counter = 1
foreach ($file in $files) {
    $ext = $file.Extension
    $newName = ('extra-{0:D2}{1}' -f $counter, $ext)
    Rename-Item -Path $file.FullName -NewName $newName -Force
    $counter++
}
Write-Output "Renamed $($counter-1) files"

