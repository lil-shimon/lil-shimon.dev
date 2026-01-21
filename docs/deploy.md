# Cloudflare Pages デプロイ手順書

## 1. ドメイン取得（Cloudflare Registrar）

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) にログイン
2. 左メニューから「Domain Registration」>「Register Domains」を選択
3. `lil-shimon.dev` を検索し、カートに追加
4. 支払い情報を入力して購入完了

## 2. GitHubへのpush

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

## 3. Cloudflare Pages 設定

### 3.1 GitHubリポジトリ連携

1. Cloudflare Dashboard で「Workers & Pages」を選択
2. 「Create application」>「Pages」>「Connect to Git」をクリック
3. GitHubアカウントを連携し、対象リポジトリを選択
4. 「Begin setup」をクリック

### 3.2 Build settings

| 項目 | 設定値 |
|------|--------|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `pnpm build` |
| Build output directory | `out` |

**Environment variables（必要に応じて設定）:**
- `NODE_VERSION`: `22`

### 3.3 カスタムドメイン設定

1. プロジェクトの「Custom domains」タブを開く
2. 「Set up a custom domain」をクリック
3. `lil-shimon.dev` を入力
4. DNS設定が自動で追加される（Cloudflare Registrarで取得済みのため）
5. SSL証明書が自動発行される（数分待機）

## 4. 自動デプロイの仕組み

- **本番環境**: `main` ブランチへのpushで自動デプロイ
- **プレビュー環境**: その他のブランチへのpushでプレビューURLが発行
- Pull Requestにはプレビューリンクが自動コメントされる

## 5. 注意事項

### 無料プラン（Free）の制限

| 項目 | 制限 |
|------|------|
| ビルド回数 | 500回/月 |
| 同時ビルド | 1 |
| サイト数 | 無制限 |
| 帯域幅 | 無制限 |
| リクエスト数 | 無制限 |

### その他の注意点

- Static HTML Exportでは動的ルート（API Routes等）は使用不可
- `next.config.ts` に `output: 'export'` が設定されていることを確認
- 画像最適化（next/image）はCloudflare Imagesまたは外部サービスが必要
- ビルドエラー時はCloudflare Dashboardのログを確認

## 参考リンク

- [Cloudflare Pages ドキュメント](https://developers.cloudflare.com/pages/)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
