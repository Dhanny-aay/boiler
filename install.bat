@echo off
REM Dashboard Template Installation Script for Windows

echo 🚀 Setting up Dashboard Template...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ and try again.
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Note about new dependency
echo 📝 Note: lucide-react has been added for modern iconography

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Run type check
echo 🔍 Running type check...
npm run type-check

if %errorlevel% neq 0 (
    echo ⚠️  TypeScript type check failed, but continuing...
) else (
    echo ✅ TypeScript type check passed
)

echo.
echo 🎉 Setup complete! You can now run:
echo    npm run dev    - Start development server
echo    npm run build  - Build for production
echo    npm run preview - Preview production build
echo.
echo 📚 Check README.md for more information
pause
