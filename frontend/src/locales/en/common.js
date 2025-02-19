const TRANSLATIONS = {
  onboarding: {
    home: {
      title: "Welcome to",
      getStarted: "Get Started",
    },
    aiPreference: {
      title: "AI Provider Preference",
      description:
        "Mito can work with many AI providers. This service handles all AI chat functionalities.",
    },
    userSetup: {
      title: "User Setup",
      description: "Configure your user settings.",
      howManyUsers: "How many users will be using this instance?",
      justMe: "Just me",
      myTeam: "My team",
      instancePassword: "Instance Password",
      setPassword: "Would you like to set up a password?",
      passwordReq: "Passwords must be at least 8 characters.",
      passwordWarn:
        "It's important to save this password because there is no recovery method.",
      adminUsername: "Admin account username",
      adminUsernameReq:
        "Username must be at least 6 characters long and only contain lowercase letters, numbers, underscores, and hyphens with no spaces.",
      adminPassword: "Admin account password",
      adminPasswordReq: "Passwords must be at least 8 characters.",
      teamHint:
        "By default, you will be the only admin. Once onboarding is completed you can create and invite others to be users or admins. Do not lose your password as only admins can reset passwords.",
    },
    data: {
      title: "Data Handling & Privacy",
      description:
        "We are committed to transparency and control when it comes to your personal data.",
      settingsHint:
        "These settings can be reconfigured at any time in the settings.",
    },
    survey: {
      title: "Welcome to Mito Labs",
      description: "Help us tailor Mito to your needs. Optional.",
      email: "What's your email?",
      useCase: "What will you use Mito for?",
      useCaseWork: "For work",
      useCasePersonal: "For personal use",
      useCaseOther: "Other",
      comment: "How did you hear about Mito?",
      commentPlaceholder:
        "Reddit, Twitter, GitHub, YouTube, etc. - Let us know how you found us!",
      skip: "Skip Survey",
      thankYou: "Thank you for your feedback!",
    },
    workspace: {
      title: "Create your first workspace",
      description:
        "Create your first workspace and get started with Mito.",
    },
  },
  common: {
    "workspaces-name": "Workspace Name",
    error: "Error",
    success: "Success",
    user: "User",
    selection: "Model Selection",
    saving: "Saving...",
    save: "Save changes",
    previous: "Previous Page",
    next: "Next Page",
    optional: "Optional",
    yes: "Yes",
    no: "No",
  },
  settings: {
    title: "Instance Settings",
    system: "General Settings",
    invites: "Invites",
    users: "Users",
    workspaces: "Workspaces",
    "workspace-chats": "Workspace Chats",
    customization: "Customization",
    "api-keys": "Developer API",
    ai: "AI Provider",
    transcription: "Transcription",
    embedder: "Embedder",
    "text-splitting": "Text Splitter & Chunking",
    "voice-speech": "Voice & Speech",
    "vector-database": "Vector Database",
    embeds: "Chat Embed",
    "embed-chats": "Chat Embed History",
    security: "Security",
    "event-logs": "Event Logs",
    privacy: "Privacy & Data",
    "ai-providers": "AI Providers",
    "agent-skills": "Agent Skills",
    admin: "Admin",
    tools: "Tools",
    "experimental-features": "Experimental Features",
    contact: "Contact Support",
    "browser-extension": "Browser Extension",
  },
  login: {
    "multi-user": {
      welcome: "Welcome to",
      "placeholder-username": "Username",
      "placeholder-password": "Password",
      login: "Login",
      validating: "Validating...",
      "forgot-pass": "Forgot password",
      reset: "Reset",
    },
    "sign-in": {
      start: "Sign in to your",
      end: "account.",
    },
    "password-reset": {
      title: "Password Reset",
      description:
        "Provide the necessary information below to reset your password.",
      "recovery-codes": "Recovery Codes",
      "recovery-code": "Recovery Code {{index}}",
      "back-to-login": "Back to Login",
    },
  },
  welcomeMessage: {
    part1:
      "Welcome to Mito Labs, the AI-powered performance engine that transforms your business. Mito unifies your data, automates processes, and delivers actionable insights in one powerful platform.",
    part2:
      "With Mito, you gain a unified system that integrates project management, CRM, finance, and more—eliminating the need for multiple, expensive subscriptions.",
    part3:
      "Mito leverages a vectorized database to instantly search, analyze, and retrieve performance data, ensuring your business operates at peak efficiency.",
    user1: "How do I get started?!",
    part4:
      "Everything is organized into Workspaces—buckets of files, documents, images, PDFs, and more—transformed into actionable data for our AI.",
    createWorkspace: "Create your first workspace",
    user2:
      "Is this like an AI-powered file hub with chat capabilities? Tell me more about it.",
    part5:
      "Mito is more than a smarter file storage system. It offers two ways to interact with your data:",
    user3: "Wow, this sounds amazing—let me try it out!",
    part6: "Have Fun!",
    contact: "Contact Support",
  },
  "new-workspace": {
    title: "New Workspace",
    placeholder: "My Workspace",
  },
  "workspaces—settings": {
    general: "General Settings",
    chat: "Chat Settings",
    vector: "Vector Database",
    members: "Members",
    agent: "Agent Configuration",
  },
  general: {
    vector: {
      title: "Vector Count",
      description: "Total number of vectors in your vector database.",
    },
    names: {
      description: "This will change the display name of your workspace.",
    },
    message: {
      title: "Suggested Chat Messages",
      description:
        "Customize the messages that will be suggested to your workspace users.",
      add: "Add new message",
      save: "Save Messages",
      heading: "Explain to me",
      body: "the benefits of Mito",
    },
    pfp: {
      title: "Assistant Profile Image",
      description:
        "Customize the profile image of the assistant for this workspace.",
      image: "Workspace Image",
      remove: "Remove Workspace Image",
      replace: "Replace",
    },
    delete: {
      title: "Delete Workspace",
      description:
        "Delete this workspace and all of its data. This will remove the workspace for all users.",
      delete: "Delete Workspace",
      deleting: "Deleting Workspace...",
      "confirm-start": "You are about to delete your entire",
      "confirm-end":
        "workspace. This will remove all vector embeddings in your vector database.\n\nThe original source files will remain untouched. This action is irreversible.",
    },
  },
  chat: {
    ai: {
      title: "Workspace AI Provider",
      description:
        "Select the AI provider that will power this workspace's chat functionality. By default, it uses the system's preferred AI.",
      search: "Search all AI providers",
    },
    model: {
      title: "Workspace Chat Model",
      description:
        "The specific chat model for this workspace. If left empty, the system's default AI settings will be used.",
      wait: "-- waiting for models --",
    },
    mode: {
      title: "Chat Mode",
      chat: {
        title: "Chat",
        "desc-start": "Provides answers using the AI's general knowledge",
        and: "and",
        "desc-end": "document context when available.",
      },
      query: {
        title: "Query",
        "desc-start": "Provides answers only",
        only: "if document context is found.",
        "desc-end": "",
      },
    },
    history: {
      title: "Chat History",
      "desc-start":
        "Number of previous chats included in short-term memory for responses.",
      recommend: "Recommend 20. ",
      "desc-end":
        "Anything more than 45 may lead to chat performance issues.",
    },
    prompt: {
      title: "Prompt",
      description:
        "Define the context and instructions for the AI to generate a response. A well-crafted prompt ensures accurate and relevant responses.",
    },
    refusal: {
      title: "Query Mode Refusal Response",
      "desc-start": "When in query mode, return a custom response if no document context is found.",
      "desc-end": "",
    },
    temperature: {
      title: "AI Temperature",
      "desc-start":
        "Controls the creativity of AI responses. Higher values result in more creative outputs, but may reduce coherence.",
      "desc-end":
        "Consult your AI provider for recommended ranges.",
      hint: "Refer to your AI provider's guidelines.",
    },
  },
  "vector-workspace": {
    identifier: "Vector Database Identifier",
    snippets: {
      title: "Max Context Snippets",
      description:
        "Controls the maximum number of context snippets sent to the AI per chat or query.",
      recommend: "Recommended: 4",
    },
    doc: {
      title: "Document Similarity Threshold",
      description:
        "Minimum similarity score required for a source to be considered relevant. Higher scores mean stricter matching.",
      zero: "No restriction",
      low: "Low (≥ 0.25)",
      medium: "Medium (≥ 0.50)",
      high: "High (≥ 0.75)",
    },
    reset: {
      reset: "Reset Vector Database",
      resetting: "Clearing vectors...",
      confirm:
        "You are about to reset this workspace's vector database. This will remove all vector embeddings. The original source files remain unchanged. This action is irreversible.",
      error: "Unable to reset the vector database!",
      success: "Vector database reset successfully!",
    },
  },
  agent: {
    "performance-warning":
      "Performance of AI providers that do not explicitly support tool-calling may vary. Some capabilities might be limited.",
    provider: {
      title: "Workspace Agent AI Provider",
      description:
        "Select the AI provider for this workspace's agent functionality.",
    },
    mode: {
      chat: {
        title: "Workspace Agent Chat Model",
        description:
          "The chat model used by this workspace's agent. If left empty, the system's default AI settings will be applied.",
      },
      title: "Workspace Agent Model",
      description:
        "The specific AI model that will be used for this workspace's agent.",
      wait: "-- waiting for models --",
    },
    skill: {
      title: "Default Agent Skills",
      description:
        "Enhance the default agent with pre-built skills that apply across all workspaces.",
      rag: {
        title: "RAG & Long-Term Memory",
        description:
          "Enable the agent to leverage local documents to answer queries or retain long-term memory.",
      },
      view: {
        title: "View & Summarize Documents",
        description:
          "Allow the agent to list and summarize the content of workspace files.",
      },
      scrape: {
        title: "Scrape Websites",
        description:
          "Allow the agent to retrieve content from websites.",
      },
      generate: {
        title: "Generate Charts",
        description:
          "Enable the agent to create various types of charts from provided data.",
      },
      save: {
        title: "Generate & Save Files",
        description:
          "Allow the agent to generate, write, and save files that can be downloaded.",
      },
      web: {
        title: "Live Web Search & Browsing",
        "desc-start":
          "Enable the agent to perform live web searches to answer queries.",
        "desc-end":
          "This feature requires a configured web search provider.",
      },
    },
  },
  recorded: {
    title: "Workspace Chats",
    description:
      "Recorded chats and messages, organized by creation date.",
    export: "Export",
    table: {
      id: "ID",
      by: "Sent By",
      workspace: "Workspace",
      prompt: "Prompt",
      response: "Response",
      at: "Sent At",
    },
  },
  appearance: {
    title: "Appearance",
    description: "Customize the appearance settings of your platform.",
    logo: {
      title: "Customize Logo",
      description: "Upload your custom logo to personalize your platform.",
      add: "Add a custom logo",
      recommended: "Recommended size: 800 x 200",
      remove: "Remove",
      replace: "Replace",
    },
    message: {
      title: "Customize Messages",
      description:
        "Customize the automatic messages displayed to your users.",
      new: "New",
      system: "System",
      user: "User",
      message: "Message",
      assistant: "Mito Chat Assistant",
      "double-click": "Double click to edit...",
      save: "Save Messages",
    },
    icons: {
      title: "Custom Footer Icons",
      description:
        "Customize the footer icons displayed on the sidebar.",
      icon: "Icon",
      link: "Link",
    },
  },
  api: {
    title: "API Keys",
    description:
      "API keys allow programmatic access and management of your Mito instance.",
    link: "Read the API documentation",
    generate: "Generate New API Key",
    table: {
      key: "API Key",
      by: "Created By",
      created: "Created",
    },
  },
  llm: {
    title: "AI Provider Preference",
    description:
      "Configure your credentials and settings for your preferred AI chat and embedding provider. Ensure these keys are current for optimal functionality.",
    provider: "AI Provider",
  },
  transcription: {
    title: "Transcription Model Preference",
    description:
      "Set up your preferred transcription model. Ensure the keys are correct to enable accurate media transcription.",
    provider: "Transcription Provider",
    "warn-start":
      "Using a local transcription model on limited hardware may impact performance.",
    "warn-recommend":
      "We recommend at least 2GB of RAM and files smaller than 10Mb.",
    "warn-end":
      "The built-in model will download on first use.",
  },
  embedding: {
    title: "Embedding Preference",
    "desc-start":
      "Configure credentials for your embedding engine if your AI provider does not natively support embeddings.",
    "desc-end":
      "Embeddings convert text into vectors for AI processing.",
    provider: {
      title: "Embedding Provider",
      description:
        "No setup required when using Mito's native embedding engine.",
    },
  },
  text: {
    title: "Text Splitting & Chunking Preferences",
    "desc-start":
      "Modify how new documents are split and chunked before insertion into the vector database.",
    "desc-end":
      "Only adjust if you understand text splitting and its effects.",
    "warn-start": "Changes here apply only to",
    "warn-center": "new documents",
    "warn-end": ", not existing ones.",
    size: {
      title: "Text Chunk Size",
      description:
        "Maximum number of characters per vector.",
      recommend: "Embed model max length is",
    },
    overlap: {
      title: "Text Chunk Overlap",
      description:
        "Maximum overlap between adjacent text chunks.",
    },
  },
  vector: {
    title: "Vector Database",
    description:
      "Configure how Mito stores and retrieves data. Ensure your keys are correct for optimal performance.",
    provider: {
      title: "Vector Database Provider",
      description: "No additional configuration needed for the default provider.",
    },
  },
  embeddable: {
    title: "Embeddable Chat Widgets",
    description:
      "Create public-facing chat interfaces linked to a single workspace for external engagement.",
    create: "Create Embed",
    table: {
      workspace: "Workspace",
      chats: "Sent Chats",
      Active: "Active Domains",
    },
  },
  "embed-chats": {
    title: "Embed Chats",
    export: "Export",
    description:
      "Recorded chats and messages from published embeds.",
    table: {
      embed: "Embed",
      sender: "Sender",
      message: "Message",
      response: "Response",
      at: "Sent At",
    },
  },
  multi: {
    title: "Multi-User Mode",
    description:
      "Set up your instance to support team collaboration by activating Multi-User Mode.",
    enable: {
      "is-enable": "Multi-User Mode is Enabled",
      enable: "Enable Multi-User Mode",
      description:
        "By default, you are the only admin. Create accounts for additional users or admins. Keep your password safe; only admins can reset passwords.",
      username: "Admin account username",
      password: "Admin account password",
    },
    password: {
      title: "Password Protection",
      description:
        "Secure your Mito instance with a password. If lost, there is no recovery method.",
    },
    instance: {
      title: "Password Protect Instance",
      description:
        "Set a password for your instance. Only admins can reset passwords.",
      password: "Instance password",
    },
  },
  event: {
    title: "Event Logs",
    description:
      "View all actions and events on your instance for monitoring purposes.",
    clear: "Clear Event Logs",
    table: {
      type: "Event Type",
      user: "User",
      occurred: "Occurred At",
    },
  },
  privacy: {
    title: "Privacy & Data-Handling",
    description:
      "Configure how connected third-party providers and Mito handle your data.",
    ai: "AI Selection",
    embedding: "Embedding Preference",
    vector: "Vector Database",
    anonymous: "Anonymous Telemetry Enabled",
  },
};

export default TRANSLATIONS;
