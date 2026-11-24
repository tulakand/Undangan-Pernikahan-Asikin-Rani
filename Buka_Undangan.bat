@echo off
title Undangan Pernikahan Asikin & Rani
cd /d "%~dp0"

echo ========================================================
echo   UNDANGAN PERNIKAHAN DIGITAL ASIKIN & RANI
echo   Memeriksa & Mengaktifkan Server Lokal...
echo ========================================================

:: Periksa apakah server sudah aktif di port 5173
netstat -ano | findstr 127.0.0.1:5173 | findstr LISTENING >nul
if %errorlevel% equ 0 (
    echo.
    echo [OK] Server sudah berjalan aktif!
    echo Membuka undangan di peramban...
    start "" "http://localhost:5173"
    timeout /t 2 >nul
    exit
)

:: Jika belum aktif, jalankan server di latar belakang
echo.
echo Menjalankan server aplikasi di latar belakang...
start /min "Server Undangan Asikin & Rani" cmd /c "npm.cmd run dev -- --host 127.0.0.1 --port 5173"

echo Menunggu server siap menerima koneksi...
set /a count=0

:wait_loop
timeout /t 1 /nobreak >nul
set /a count+=1

:: Cek apakah port 5173 sudah listening
netstat -ano | findstr 127.0.0.1:5173 | findstr LISTENING >nul
if %errorlevel% equ 0 (
    echo.
    echo [SUKSES] Server sudah siap!
    echo Membuka undangan pernikahan di browser...
    start "" "http://localhost:5173"
    timeout /t 2 >nul
    exit
)

if %count% geq 25 (
    echo.
    echo [PERINGATAN] Server membutuhkan waktu lebih lama untuk inisialisasi.
    echo Mencoba membuka peramban sekarang...
    start "" "http://localhost:5173"
    timeout /t 3 >nul
    exit
)

echo Menyiapkan server... (%count%/25)
goto wait_loop