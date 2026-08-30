#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const API_BASE = process.env.TOKENVERIFY_API_URL || "https://tokenverifyapi.com";
const API_KEY = process.env.TOKENVERIFY_API_KEY || "";

const server = new Server({ name: "tokenverify-mcp", version: "1.0.0" }, { capabilities: { tools: {} } });

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "verify_b2b_lead",
      description: "Sub-50ms unified validation of European VAT checksums (ISO 7064), disposable email domains, and telco phone risk.",
      inputSchema: {
        type: "object",
        properties: {
          email: { type: "string", description: "Business email address to verify." },
          tax_id: { type: "string", description: "VAT/Tax ID string (e.g. DE811123456, GB123456789)." },
          country_code: { type: "string", description: "Two-letter ISO country code." }
        },
        required: ["email"]
      }
    }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  if (name === "verify_b2b_lead") {
    try {
      const res = await fetch(`${API_BASE}/v1/verify/b2b-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": API_KEY ? `Bearer ${API_KEY}` : "" },
        body: JSON.stringify(args)
      });
      const data = await res.json();
      return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
    } catch (err) {
      return { content: [{ type: "text", text: `Error: ${err.message}` }], isError: true };
    }
  }
  return { content: [{ type: "text", text: "Unknown tool" }], isError: true };
});

const transport = new StdioServerTransport();
server.connect(transport);
