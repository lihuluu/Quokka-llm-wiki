#!/usr/bin/env node
/**
 * 自动将 Obsidian 风格的 [[wikilink]] 转换为 VitePress 兼容的标准 Markdown 链接
 * 
 * 转换规则：
 * [[path/to/page|显示文本]] → [显示文本](/path/to/page)
 * [[path/to/page]] → [path/to/page](/path/to/page)
 */

const fs = require('fs');
const path = require('path');

const WIKILINK_REGEX = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

function convertWikilinks(content) {
  return content.replace(WIKILINK_REGEX, (match, link, text) => {
    const displayText = (text || link).trim();
    const normalizedLink = link.trim().startsWith('/') ? link.trim() : `/${link.trim()}`;
    return `[${displayText}](${normalizedLink})`;
  });
}

function findMarkdownFiles(dir, ignoreDirs = ['node_modules', '.vitepress', '.git', 'scripts']) {
  const files = [];
  
  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        if (!ignoreDirs.includes(entry.name)) {
          walk(fullPath);
        }
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return files;
}

function main() {
  const rootDir = process.cwd();
  const files = findMarkdownFiles(rootDir);
  let convertedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      WIKILINK_REGEX.lastIndex = 0;
      
      if (WIKILINK_REGEX.test(content)) {
        WIKILINK_REGEX.lastIndex = 0;
        const converted = convertWikilinks(content);
        fs.writeFileSync(file, converted, 'utf-8');
        console.log(`✓ 已转换: ${path.relative(rootDir, file)}`);
        convertedCount++;
      }
    } catch (err) {
      console.error(`✗ 失败: ${file}`, err.message);
    }
  }
  
  console.log(`\n完成！共转换 ${convertedCount} 个文件`);
}

main();
