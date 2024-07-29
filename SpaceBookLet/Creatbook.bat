@echo off
setlocal enabledelayedexpansion

REM Array of chapter names
set chapters=Introduction Getting_Started Fundamentals_of_Digital_Work Essential_Skills_and_Techniques Advanced_Digital_Techniques Case_Studies_and_Real_World_Applications Troubleshooting_and_Problem_Solving Exploring_New_Frontiers Conclusion Appendices

REM Create .qmd files for each chapter
for %%c in (%chapters%) do (
    set "title=%%c"
    set "file=%%c.qmd"
    echo --- > !file!
    echo title: "!title:_= !" >> !file!
    echo --- >> !file!
    echo # !title:_= ! >> !file!
    echo. >> !file!
    echo Content for !title:_= ! goes here. >> !file!
)

REM Update _quarto.yml
(
echo project:
echo   type: book
echo.
echo book:
echo   title: "SpaceBooklet"
echo   author: "Your Name"
echo   chapters:
for %%c in (%chapters%) do (
    echo     - %%c.qmd
)
) > _quarto.yml

echo All chapters have been created and _quarto.yml has been updated.
