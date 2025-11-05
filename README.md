# 🦆 Duckumetns

> **AI-Powered Documentation Generator for VSCode**  
> Automatically generate, maintain, and update your project documentation using AI - with full support for local LLMs and cloud APIs.

[![VSCode Version](https://img.shields.io/badge/VSCode-1.85.0+-blue.svg)](https://code.visualstudio.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/yourusername/duckumetns/pulls)

---

## 🌟 Features

### 🤖 Multi-LLM Support
- **Cloud APIs**: OpenAI, Anthropic Claude, and more
- **Local LLMs**: Full Ollama integration for privacy-focused teams
- **Flexible**: Switch between models based on your needs

### 📚 Intelligent Documentation
- **Context-Aware**: Understands your code structure and relationships
- **Dependency Tracking**: Maps connections between files, functions, and modules
- **Auto-Updates**: Watches for changes and keeps docs in sync
- **Mirror Structure**: Organizes docs to match your project structure

### 🔍 Deep Code Analysis
- **AST Parsing**: Understands code at a structural level
- **Relationship Mapping**: Discovers and documents dependencies
- **Cross-Reference**: Links related components automatically
- **Multi-Language**: Supports JavaScript, TypeScript, Python, Java, and more

### 💬 Intuitive Interface
- **Chat UI**: GitHub Copilot-style interaction
- **File Picker**: Git-aware file selection
- **Live Preview**: See documentation before committing
- **Inline Actions**: Quick commands from editor context menu

### 🗄️ Smart Caching
- **SQLite Storage**: Fast local database for parsed code
- **Incremental Updates**: Only processes what's changed
- **Offline Mode**: Works without internet when using local LLMs

---

## 🚀 Quick Start

### Installation

1. **From VSCode Marketplace** (Coming Soon)
   ```
   Search for "Duckumetns" in VSCode Extensions
   ```

2. **From Source**
   ```bash
   git clone https://github.com/yourusername/duckumetns.git
   cd duckumetns
   npm install
   npm run compile
   # Press F5 in VSCode to launch extension development host
   ```

### Configuration

1. **Open Settings** (`Ctrl+,` or `Cmd+,`)
2. **Search for "Duckumetns"**
3. **Choose your AI provider:**

   **Option A: Local LLM (Ollama)**
   ```json
   {
     "duckumetns.provider": "ollama",
     "duckumetns.ollama.model": "codellama",
     "duckumetns.ollama.endpoint": "http://localhost:11434"
   }
   ```

   **Option B: OpenAI API**
   ```json
   {
     "duckumetns.provider": "openai",
     "duckumetns.openai.apiKey": "your-api-key",
     "duckumetns.openai.model": "gpt-4"
   }
   ```

   **Option C: Anthropic Claude**
   ```json
   {
     "duckumetns.provider": "anthropic",
     "duckumetns.anthropic.apiKey": "your-api-key",
     "duckumetns.anthropic.model": "claude-3-sonnet-20240229"
   }
   ```

---

## 📖 Usage

### Generate Documentation for Entire Project
```
1. Open Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
2. Type: "Duckumetns: Generate Project Documentation"
3. Wait for AI to analyze and generate docs
4. Review in ./duckumetns/ folder
```

### Generate Documentation for Single File
```
1. Open the file you want to document
2. Right-click in editor
3. Select "Duckumetns: Document This File"
4. Or use Command Palette: "Duckumetns: Document Current File"
```

### Chat with Duckumetns
```
1. Open Command Palette
2. Type: "Duckumetns: Open Chat"
3. Ask questions like:
   - "Document the authentication module"
   - "Explain the relationship between User and Order classes"
   - "Update docs for changed files"
```

### Enable Auto-Update
```json
{
  "duckumetns.autoUpdate": true,
  "duckumetns.watchPatterns": ["**/*.ts", "**/*.js", "**/*.py"]
}
```

---

## 🏗️ Project Structure

```
your-project/
├── src/
│   ├── index.ts
│   ├── auth/
│   │   ├── login.ts
│   │   └── register.ts
│   └── utils/
│       └── helpers.ts
├── duckumetns/              # Generated documentation
│   ├── index.md
│   ├── auth/
│   │   ├── login.md
│   │   └── register.md
│   ├── utils/
│   │   └── helpers.md
│   ├── _relationships.md     # Dependency map
│   └── _index.md             # Project overview
└── .duckumetns/
    ├── cache.db              # SQLite cache
    └── config.json           # Local config
```

---

## ⚙️ Configuration Options

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `duckumetns.provider` | string | `"ollama"` | AI provider: `ollama`, `openai`, `anthropic` |
| `duckumetns.outputFolder` | string | `"duckumetns"` | Folder name for generated docs |
| `duckumetns.autoUpdate` | boolean | `false` | Auto-update docs on file changes |
| `duckumetns.includePrivate` | boolean | `false` | Document private methods/functions |
| `duckumetns.format` | string | `"markdown"` | Output format: `markdown`, `html` |
| `duckumetns.detailLevel` | string | `"detailed"` | `brief`, `detailed`, `comprehensive` |
| `duckumetns.excludePatterns` | array | `["**/node_modules/**"]` | Paths to exclude |
| `duckumetns.generateExamples` | boolean | `true` | Include code examples in docs |
| `duckumetns.trackDependencies` | boolean | `true` | Analyze and document relationships |

---

## 🎯 Roadmap

### v0.1.0 - MVP (Current)
- [ ] Basic file reading and documentation
- [ ] Ollama integration
- [ ] Simple folder structure
- [ ] File watcher
- [ ] Command palette integration

### v0.2.0 - Core Features
- [ ] SQLite caching
- [ ] AST parsing
- [ ] Dependency analysis
- [ ] API integration (OpenAI/Anthropic)
- [ ] Configuration UI

### v0.3.0 - Advanced Features
- [ ] Chat interface
- [ ] Git integration
- [ ] Incremental updates
- [ ] Multi-language support
- [ ] Relationship visualization

### v1.0.0 - Production Ready
- [ ] Performance optimization
- [ ] Comprehensive testing
- [ ] Documentation portal
- [ ] Marketplace release

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 🐛 Known Issues

- Large projects (>10k files) may experience slow initial indexing
- Some complex TypeScript generics may not parse correctly
- Real-time updates can be resource-intensive on large codebases

See [Issues](https://github.com/yourusername/duckumetns/issues) for full list.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by GitHub Copilot's excellent UX
- Built with [VSCode Extension API](https://code.visualstudio.com/api)
- Powered by [Ollama](https://ollama.ai/) for local AI
- AST parsing by language-specific parsers

---

**Made with ❤️ and 🦆 by the Open Source Community**