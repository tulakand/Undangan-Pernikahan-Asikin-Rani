@echo off
title Deploy Undangan Pernikahan ke Vercel
cd /d "%~dp0"

echo ========================================================
echo   DEPLOY UNDANGAN PERNIKAHAN DIGITAL KE VERCEL
echo ========================================================
echo.
echo Sedang menyiapkan Vercel CLI...
echo File dan folder dari komputer Anda (termasuk src & assets)
echo akan langsung diunggah ke akun Vercel Anda.
echo.
echo JIKA MUNCUL PERTANYAAN:
echo 1. "Set up and deploy?" -> Tekan Enter (Y)
echo 2. "Which scope?" -> Tekan Enter (Pilih akun Anda)
echo 3. "Link to existing project?" -> Ketik Y lalu Enter
echo 4. "What's the name of your existing project?" -> Pilih project yang sudah ada (undangan-pernikahan-asikin-rani)
echo.
echo ========================================================
echo.

call npx vercel --prod

echo.
echo ========================================================
echo Selesai! Tekan tombol apa saja untuk menutup jendela ini.
pause >nul
