# 🛡️ TokenVerify (`tokenverifyapi.com`)

> **Sub-50ms Edge B2B Trust, VAT/Tax Checksum & Anti-Fraud Gateway**  
> Engineered for SaaS signup auth, checkout rails, and autonomous AI agents.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![MCP](https://img.shields.io/badge/MCP-1.0_Compliant-emerald.svg)](https://modelcontextprotocol.io)
[![Part of Quite Good Project](https://img.shields.io/badge/Maintained_by-Quite_Good_Project-09090b.svg)](https://quitegoodproject.com)

---

## ⚡ Capabilities
* **Algorithmic Tax & VAT Checksums**: Deterministic ISO 7064 & Modulo math for 27 EU member states, UK HMRC VAT, and US IRS EINs.
* **Deep Email Deliverability**: Cloudflare DoH MX resolver + 3,500+ disposable domain blacklist.
* **Sub-50ms Latency**: Edge execution with zero third-party latency bottlenecks.

---

## 🚀 Quickstart

### Claude Desktop & Cursor MCP Setup

> 🎁 **Free Sandbox Bonus**: Pass `--email you@company.com` in `args` to instantly double your free sandbox quota from 50 to **100 requests**! Zero credit card required.

```json
{
  "mcpServers": {
    "tokenverify": {
      "command": "npx",
      "args": ["-y", "@quitegoodproject/tokenverify-mcp", "--email", "you@company.com"]
    }
  }
}
```

Or run via CLI:
```bash
npx -y @quitegoodproject/tokenverify-mcp --email you@company.com
```

### REST API (`POST /v1/verify/b2b-lead`)

```bash
curl -X POST "https://tokenverifyapi.com/v1/verify/b2b-lead" \
  -H "Authorization: Bearer <TOKENVERIFY_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "contact@stripe.com",
    "tax_id": "DE811123456",
    "country_code": "DE"
  }'
```

---

## 🏛️ Governance
Part of **[The Quite Good Project](https://quitegoodproject.com)** developer suite.
