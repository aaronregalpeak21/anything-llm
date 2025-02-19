import React, { useState } from "react";
import { CheckCircle, CopySimple, X } from "@phosphor-icons/react";
import showToast from "@/utils/toast";
import hljs from "highlight.js";
import "@/utils/chat/themes/github-dark.css";
import "@/utils/chat/themes/github.css";

function CopyableBox({ code, language, onCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    onCopy();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative rounded-lg border border-theme-modal-border p-4 bg-theme-bg-secondary">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white">Embed Code</span>
        <button
          onClick={handleCopy}
          className="text-white p-1 hover:bg-theme-modal-border rounded-lg"
        >
          <CopySimple size={20} weight="bold" />
        </button>
      </div>
      <pre>
        <code className={`hljs language-${language}`}>{code}</code>
      </pre>
      {copied && (
        <div className="absolute top-2 right-2 text-xs text-green-500">
          <CheckCircle size={16} weight="bold" />
        </div>
      )}
    </div>
  );
}

const createScriptTagSnippet = (embed, scriptHost, serverHost) => {
  return `<!--
Paste this script at the bottom of your HTML before the </body> tag.

<script
  data-embed-id="${embed.uuid}"
  data-base-api-url="${serverHost}/api/embed"
  src="${scriptHost}/embed/anythingllm-chat-widget.min.js">
</script>
<!-- AnythingLLM (https://anythingllm.com) -->
`;
};

const ScriptTag = ({ embed }) => {
  const [copied, setCopied] = useState(false);
  const scriptHost = import.meta.env.DEV
    ? "http://localhost:3000"
    : window.location.origin;
  const serverHost = import.meta.env.DEV
    ? "http://localhost:3001"
    : window.location.origin;
  const snippet = createScriptTagSnippet(embed, scriptHost, serverHost);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    showToast("Script snippet copied to clipboard!", "success", { clear: true });
  };

  return (
    <div>
      <div className="flex flex-col mb-2">
        <label className="block text-sm font-medium text-white">
          HTML Script Tag Embed Code
        </label>
        <p className="text-theme-text-secondary text-xs">
          Have your workspace chat embed function like a help desk chat in the corner of your website.
        </p>
      </div>
      <CopyableBox code={snippet} language="html" onCopy={handleCopy} />
    </div>
  );
};

const createIframeEmbedSnippet = () => {
  return `<!--
Paste this iframe embed code wherever you want your chat widget to appear on your website.
-->
<iframe src="${window.location.origin}/embed.html" frameborder="0" width="100%" height="500"></iframe>
<!-- AnythingLLM Chat Embed -->`;
};

const IframeTag = () => {
  const [copied, setCopied] = useState(false);
  const snippet = createIframeEmbedSnippet();

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    showToast("Iframe snippet copied to clipboard!", "success", { clear: true });
  };

  return (
    <div>
      <div className="flex flex-col mb-2">
        <label className="block text-sm font-medium text-white">
          HTML Iframe Embed Code
        </label>
        <p className="text-theme-text-secondary text-xs">
          Paste this iframe code into your website where you want the chat widget to appear.
        </p>
      </div>
      <CopyableBox code={snippet} language="html" onCopy={handleCopy} />
    </div>
  );
};

export default function CodeSnippetModal({ embed, closeModal }) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative w-full max-w-2xl bg-theme-bg-secondary rounded-lg shadow border-2 border-theme-modal-border">
        <div className="relative p-6 border-b rounded-t border-theme-modal-border">
          <div className="w-full flex gap-x-2 items-center">
            <h3 className="text-xl font-semibold text-white overflow-hidden overflow-ellipsis whitespace-nowrap">
              Copy your embed code
            </h3>
          </div>
          <button
            onClick={closeModal}
            type="button"
            className="absolute top-4 right-4 transition-all duration-300 bg-transparent rounded-lg text-sm p-1 inline-flex items-center hover:bg-theme-modal-border hover:border-theme-modal-border hover:border-opacity-50 border-transparent border"
          >
            <X size={24} weight="bold" className="text-white" />
          </button>
        </div>
        <div className="px-7 py-6">
          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
            <ScriptTag embed={embed} />
            <IframeTag />
          </div>
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-theme-modal-border">
            <button
              onClick={closeModal}
              type="button"
              className="transition-all duration-300 text-white hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
