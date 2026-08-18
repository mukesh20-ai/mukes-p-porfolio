@echo off
title Push to mukesh20-ai/mukes-p-porfolio
echo ===============================================================
echo Pushing your project to https://github.com/mukesh20-ai/mukes-p-porfolio.git
echo ===============================================================
"c:\Users\anush\Downloads\mukesh-portfolio\mingit_tool\bin\cmd\git.exe" remote set-url origin https://github.com/mukesh20-ai/mukes-p-porfolio.git
"c:\Users\anush\Downloads\mukesh-portfolio\mingit_tool\bin\cmd\git.exe" push -u origin main --force
echo ===============================================================
echo SUCCESS! Refresh your GitHub page to see your code!
echo ===============================================================
pause
