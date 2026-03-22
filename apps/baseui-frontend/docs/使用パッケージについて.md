# shadcnで使用されているパッケージについて

## 全コンポーネントの一括インストール

```bash
pnpm dlx shadcn@latest add --all
```

---

## 基盤・コアライブラリ

### `shadcn`

shadcn/ui の CLI ツール。`pnpm dlx shadcn add ...` でコンポーネントを追加・管理するために使われる。

### `@base-ui/react`

shadcn v4 (base-nova スタイル) の基盤となるヘッドレス UI ライブラリ。Radix UI の後継にあたるもので、Button, Dialog, Select, Tooltip などの多くのコンポーネントのプリミティブ（ロジック・アクセシビリティ）を提供する。

---

## スタイリング関連

### `tailwindcss` / `@tailwindcss/vite`

Tailwind CSS v4 本体と Vite 用プラグイン。shadcn のすべてのコンポーネントは Tailwind のユーティリティクラスでスタイリングされている。

### `tailwind-merge`

Tailwind のクラス名を安全にマージするユーティリティ。例えば `p-4` と `p-2` を渡した場合、競合を解決して `p-2` だけを残してくれる。`cn()` 関数の中で使われている。

### `clsx`

条件付きでクラス名を結合する軽量ユーティリティ。`cn()` 関数の中で `tailwind-merge` と組み合わせて使われる。

### `class-variance-authority` (cva)

コンポーネントのバリアント（variant, size など）を型安全に定義するライブラリ。Button の `variant="outline"` や `size="sm"` のような API はこれで実現されている。

### `tw-animate-css`

Tailwind CSS v4 向けのアニメーションユーティリティ。Accordion の開閉や Dialog のフェードインなど、shadcn コンポーネントのアニメーションに使われる。

---

## フォント

### `@fontsource-variable/geist`

Vercel が開発した Geist フォント（可変フォント版）。shadcn のデフォルトフォントとして `index.css` で `--font-sans` に設定されている。

---

## アイコン

### `lucide-react`

shadcn のデフォルトアイコンライブラリ。Chevron, Check, X, Search など、各コンポーネント内で使われるアイコンを提供する。

---

## 個別コンポーネントの依存ライブラリ

### `cmdk`

Command コンポーネント（コマンドパレット / ⌘K メニュー）の基盤ライブラリ。検索・フィルタリング付きのコマンドメニューを実現する。`command.tsx` と `combobox.tsx` で使われている。

### `vaul`

Drawer コンポーネントの基盤ライブラリ。モバイル向けのボトムシート（下からスライドするパネル）を実装する。

### `sonner`

Toast（通知）ライブラリ。`sonner.tsx` コンポーネントで、画面端にポップアップする通知メッセージを表示する。

### `input-otp`

OTP（ワンタイムパスワード）入力コンポーネントの基盤。`input-otp.tsx` で、6桁の認証コード入力UIなどを実現する。

### `embla-carousel-react`

Carousel コンポーネントの基盤ライブラリ。スワイプ対応のカルーセル / スライダーを実装する。

### `react-resizable-panels`

Resizable コンポーネントの基盤。ドラッグでサイズ変更可能なパネルレイアウトを提供する。

### `react-day-picker`

Calendar / DatePicker コンポーネントの基盤ライブラリ。日付選択UIを提供する。

### `date-fns`

日付操作のユーティリティライブラリ。`react-day-picker` が日付のフォーマットや計算に内部で使用する。

### `recharts`

Chart コンポーネントの基盤ライブラリ。D3.js ベースの React 向けチャートライブラリで、棒グラフ・折れ線グラフなどを描画する。

### `next-themes`

テーマ（ライト/ダークモード）切り替えのためのライブラリ。名前に "next" とあるが、Vite + React でも動作する。

---

## 補足: Radix UI から Base UI への移行について

shadcn/ui はもともと **Radix UI** をベースにしていたが、**v4（2025年）** から **Base UI** に移行した。

### 経緯

- **shadcn v0〜v3**: Radix UI Primitives（`@radix-ui/react-dialog` など個別パッケージ）がベース
- **shadcn v4**: `@base-ui/react` に移行。スタイルも `base-nova` という新しいデフォルトスタイルに変更

### Base UI とは

Base UI はもともと MUI（Material UI）チームが開発していたヘッドレス UI ライブラリだが、途中から **Radix の開発元である WorkOS に移管** された。つまり、Radix UI と Base UI は現在同じチーム（WorkOS）が開発している。

実質的には **Radix UI の後継・統合プロジェクト** という位置付けで、Radix の設計思想を引き継ぎつつ、API がよりモダンに整理されている。

### Radix UI と Base UI の主な違い

| | Radix UI (旧) | Base UI (新) |
|---|---|---|
| パッケージ | `@radix-ui/react-*` (個別) | `@base-ui/react` (単一) |
| 開発元 | WorkOS | WorkOS（MUIから移管） |
| API | Compound Components 中心 | よりシンプルな API |
| スタイル名 | `default` / `new-york` | `base-nova` |

Radix がなくなったというより、Radix の発展形として Base UI に統合された、という流れである。
