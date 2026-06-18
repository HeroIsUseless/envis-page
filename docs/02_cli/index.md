# Envis CLI 命令

除了图形界面之外，Envis 也提供了几个常用命令，方便在终端里切换和查看环境。

如果直接运行 `envis` 或 `ev` 而不带任何参数，程序会继续按桌面应用方式启动 GUI；只有带上命令参数时，才会走 CLI 分支。

## 命令行用法

| 命令 | 说明 |
| --- | --- |
| `envis use <环境名或环境ID>` | 激活指定环境。会优先按环境 ID 精确匹配，找不到时再按环境名称精确匹配；激活时会停用其他已激活环境。 |
| `envis list` / `envis ls` | 列出所有环境，并用 `*` 标记当前激活的环境。输出中会显示环境名称和环境 ID 的前 8 位。 |
| `envis refresh` / `envis rs` | 刷新当前 shell 中的 Envis 环境配置。命令本体不做额外操作，实际的重新加载由 shell wrapper 完成。 |
| `envis --help` / `envis -h` | 输出帮助信息。 |
| `envis --version` / `envis -v` | 输出当前版本号。 |
| `envis --complete-use` | 隐式内部命令，输出所有环境名称（每行一个），供 shell 自动补全使用。 |

## 简化与别名

Envis 对几个高频命令做了简化：

- `ev` 是 `envis` 的简化入口
- `ls` 是 `list` 的别名
- `rs` 是 `refresh` 的别名
- `-h` 是 `--help` 的简写
- `-v` 是 `--version` 的简写

其中 `refresh` / `rs` 自身是 no-op，真正的重新加载动作由 shell wrapper 在命令成功退出后完成。

也就是说，下面这些写法都是等价的：

```bash
envis list
ev list
envis ls
ev ls
```

### `envis --help`

```bash
envis --help
envis -h
ev --help
ev -h
```

会输出 CLI 的用法、可用命令和示例。

### `envis --version`

```bash
envis --version
envis -v
ev --version
ev -v
```

会输出当前版本号，格式类似：

```text
Envis version 0.1.0
```

### `envis use`

```bash
envis use my-project
envis use 2f4c7e91
ev use my-project
ev use 2f4c7e91
```

`use` 命令必须显式提供一个环境名或环境 ID；如果缺少参数，会直接报错并提示：

```text
错误: 必须指定环境名称或 ID
用法: envis use <name_or_id>
```

执行成功后会输出“正在激活环境”和“成功激活环境”的提示；如果目标环境不存在，或者环境切换失败，命令会直接报错退出。

环境切换成功后，Envis 会把当前激活的环境记录为“最近使用环境”，这样 UI 下次启动时可以更准确地恢复状态。

### `envis list` / `envis ls`

```bash
envis list
envis ls
ev list
ev ls
```

示例输出：

```text
* my-project      2f4c7e91
  legacy-backend  a1b2c3d4
```

其中 `*` 表示该环境当前处于激活状态。

### `envis refresh` / `envis rs`

```bash
envis refresh
envis rs
ev refresh
ev rs
```

这个命令主要给 shell 集成使用：当 shell wrapper 检测到它成功退出后，会自动重新加载终端配置，让当前会话立即拿到最新的环境变量和 PATH。

### `envis --complete-use`

这是一个内部使用的隐式命令，主要用于 shell tab 补全：

```bash
envis --complete-use
ev --complete-use
```

它会静默输出所有环境名称，每行一个；如果初始化失败，也不会像普通命令那样主动打印错误信息。
