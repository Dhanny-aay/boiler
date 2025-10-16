#!/bin/bash

# Dashboard Template Installation Script

echo "🚀 Setting up Dashboard Template..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Note about new dependency
echo "📝 Note: lucide-react has been added for modern iconography"

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Run type check
echo "🔍 Running type check..."
npm run type-check

if [ $? -eq 0 ]; then
    echo "✅ TypeScript type check passed"
else
    echo "⚠️  TypeScript type check failed, but continuing..."
fi

echo ""
echo "🎉 Setup complete! You can now run:"
echo "   npm run dev    - Start development server"
echo "   npm run build  - Build for production"
echo "   npm run preview - Preview production build"
echo ""
echo "📚 Check README.md for more information"
