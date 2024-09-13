import { defineConfigWithTheme } from 'vitepress'
import escookConfig from '@escook/vitepress-theme/config'

// const language = localStorage.getItem("language")
// console.log('language:', language)

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme(
  {
    extends: escookConfig,
    title: "TGAI",
    description: "",
    head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
    themeConfig: {
      search: {
        provider: 'local'
      },
      confetti: false,
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        // { component: 'SelectLanguage' },
      ],

      sidebar: [
        {
          text: '入门',
          items: [
            {
              text: '欢迎使用 TGAI',
              link: '/',
              collapsed: true,
              items: [
                { text: '特性与技术规格', link: '/getting-started/readme/features-and-specifications' },
                { text: '模型供应商列表', link: '/getting-started/readme/model-providers' }
              ]
            },
            { text: '云服务', link: '/getting-started/cloud' },
            {
              text: '社区版',
              link: '/getting-started/install-self-hosted/README',
              collapsed: true,
              items: [
                { text: 'Docker Compose 部署', link: '/getting-started/install-self-hosted/docker-compose' },
                { text: '本地源码启动', link: '/getting-started/install-self-hosted/local-source-code' },
                { text: '单独启动前端 Docker 容器', link: '/getting-started/install-self-hosted/start-the-frontend-docker-container' },
                { text: '环境变量说明', link: '/getting-started/install-self-hosted/environments' },
                { text: '常见问题', link: '/getting-started/install-self-hosted/faq' }
              ]
            },
            { text: 'TGAI Premium', link: '/getting-started/dify-premium' }
          ]
        },
        {
          text: '手册',
          items: [
            {
              text: '模型',
              link: '/guides/model-configuration/README',
              collapsed: true,
              items: [
                { text: '增加新供应商', link: '/guides/model-configuration/new-provider' },
                { text: '预定义模型接入', link: '/guides/model-configuration/predefined-model' },
                { text: '自定义模型接入', link: '/guides/model-configuration/customizable-model' },
                { text: '接口方法', link: '/guides/model-configuration/interfaces' },
                { text: '配置规则', link: '/guides/model-configuration/schema' },
                { text: '接入 Hugging Face 上的开源模型', link: '/guides/model-configuration/hugging-face' },
                { text: '接入 Replicate 上的开源模型', link: '/guides/model-configuration/replicate' },
                { text: '接入 Xinference 部署的本地模型', link: '/guides/model-configuration/xinference' },
                { text: '接入 OpenLLM 部署的本地模型', link: '/guides/model-configuration/openllm' },
                { text: '接入 LocalAI 部署的本地模型', link: '/guides/model-configuration/localai' },
                { text: '接入 Ollama 部署的本地模型', link: '/guides/model-configuration/ollama' },
                { text: '负载均衡', link: '/guides/model-configuration/load-balancing' }
              ]
            },
            {
              text: '构建',
              link: '/guides/application-orchestrate/README',
              collapsed: true,
              items: [
                { text: '创建应用', link: '/guides/application-orchestrate/creating-an-application' },
                { text: '聊天助手', link: '/guides/application-orchestrate/conversation-application' },
                { text: 'Agent', link: '/guides/application-orchestrate/agent' },
                {
                  text: '应用工具箱',
                  link: '/guides/application-orchestrate/app-toolkits/README',
                  collapsed: true,
                  items: [
                    { text: '敏感内容审查', link: '/guides/application-orchestrate/app-toolkits/moderation-tool' }
                  ]
                }
              ]
            },
            {
              text: '工作流',
              link: '/guides/workflow/README',
              collapsed: true,
              items: [
                { text: '关键概念', link: '/guides/workflow/key-concept' },
                { text: '变量', link: '/guides/workflow/variables' },
                {
                  text: '节点说明',
                  link: '/guides/workflow/node/README',
                  collapsed: true,
                  items: [
                    { text: '开始', link: '/guides/workflow/node/start' },
                    { text: '结束', link: '/guides/workflow/node/end' },
                    { text: '直接回复', link: '/guides/workflow/node/answer' },
                    { text: 'LLM', link: '/guides/workflow/node/llm' },
                    { text: '知识检索', link: '/guides/workflow/node/knowledge-retrieval' },
                    { text: '问题分类', link: '/guides/workflow/node/question-classifier' },
                    { text: '条件分支', link: '/guides/workflow/node/ifelse' },
                    { text: '代码执行', link: '/guides/workflow/node/code' },
                    { text: '模板转换', link: '/guides/workflow/node/template' },
                    { text: '变量聚合', link: '/guides/workflow/node/variable-assigner' },
                    { text: '变量赋值', link: '/guides/workflow/node/variable-assignment' },
                    { text: '迭代', link: '/guides/workflow/node/iteration' },
                    { text: '参数提取', link: '/guides/workflow/node/parameter-extractor' },
                    { text: 'HTTP 请求', link: '/guides/workflow/node/http-request' },
                    { text: '工具', link: '/guides/workflow/node/tools' }
                  ]
                },
                { text: '编排节点', link: '/guides/workflow/orchestrate-node' },
                {
                  text: '预览与调试',
                  link: '/guides/workflow/debug-and-preview/README',
                  collapsed: true,
                  items: [
                    { text: '预览与运行', link: '/guides/workflow/debug-and-preview/yu-lan-yu-yun-hang' },
                    { text: '单步调试', link: '/guides/workflow/debug-and-preview/step-run' },
                    { text: '对话/运行日志', link: '/guides/workflow/debug-and-preview/log' },
                    { text: '检查清单', link: '/guides/workflow/debug-and-preview/checklist' },
                    { text: '运行历史', link: '/guides/workflow/debug-and-preview/history' }
                  ]
                },
                { text: '应用发布', link: '/guides/workflow/publish' }
              ]
            },
            {
              text: '知识库',
              link: '/guides/knowledge-base/README',
              collapsed: true,
              items: [
                { text: '创建知识库&上传文档', link: '/guides/knowledge-base/create-knowledge-and-upload-documents' },
                { text: '知识库及文档维护', link: '/guides/knowledge-base/knowledge-and-documents-maintenance' },
                { text: '在应用内集成知识库', link: '/guides/knowledge-base/integrate-knowledge-within-application' },
                { text: '召回测试/引用归属', link: '/guides/knowledge-base/retrieval-test-and-citation' },
                { text: '从 Notion 导入数据', link: '/guides/knowledge-base/sync-from-notion' },
                { text: '从网页导入数据', link: '/guides/knowledge-base/sync-from-website' },
                { text: '通过 API 维护知识库', link: '/guides/knowledge-base/maintain-dataset-via-api' },
                { text: '外部数据工具', link: '/guides/knowledge-base/wai-bu-shu-ju-gong-ju' }
              ]
            },
            {
              text: '工具',
              link: '/guides/tools/README',
              collapsed: true,
              items: [
                { text: '快速接入工具', link: '/guides/tools/quick-tool-integration' },
                { text: '高级接入工具', link: '/guides/tools/advanced-tool-integration' },
                {
                  text: '工具配置',
                  link: '/guides/tools/tool-configuration/README',
                  collapsed: true,
                  items: [
                    { text: 'Google', link: '/guides/tools/tool-configuration/google' },
                    { text: 'Bing', link: '/guides/tools/tool-configuration/bing' },
                    { text: 'SearchApi', link: '/guides/tools/tool-configuration/searchapi' },
                    { text: 'StableDiffusion', link: '/guides/tools/tool-configuration/stable-diffusion' },
                    { text: 'Dall-e', link: '/guides/tools/tool-configuration/dall-e' },
                    { text: 'Perplexity Search', link: '/guides/tools/tool-configuration/perplexity' },
                    { text: 'AlphaVantage 股票分析', link: '/guides/tools/tool-configuration/alphavantage' },
                    { text: 'SearXNG', link: '/guides/tools/tool-configuration/searxng' },
                    { text: 'Serper', link: '/guides/tools/tool-configuration/serper' }
                  ]
                }
              ]
            },
            {
              text: '发布',
              link: '/guides/application-publishing/README',
              collapsed: true,
              items: [
                {
                  text: '发布为公开 Web 站点',
                  link: '/guides/application-publishing/launch-your-webapp-quickly/README',
                  collapsed: true,
                  items: [
                    { text: 'Web 应用的设置', link: '/guides/application-publishing/launch-your-webapp-quickly/web-app-settings' },
                    { text: '文本生成型应用', link: '/guides/application-publishing/launch-your-webapp-quickly/text-generator' },
                    { text: '对话型应用', link: '/guides/application-publishing/launch-your-webapp-quickly/conversation-application' }
                  ]
                },
                { text: '嵌入网站', link: '/guides/application-publishing/embedding-in-websites' },
                { text: '基于 APIs 开发', link: '/guides/application-publishing/developing-with-apis' },
                { text: '基于前端组件再开发', link: '/guides/application-publishing/based-on-frontend-templates' }
              ]
            },
            {
              text: '标注',
              link: '/guides/biao-zhu/README',
              collapsed: true,
              items: [
                { text: '日志与标注', link: '/guides/biao-zhu/logs' },
                { text: '标注回复', link: '/guides/biao-zhu/annotation-reply' }
              ]
            },
            {
              text: '监测',
              link: '/guides/monitoring/README',
              collapsed: true,
              items: [
                {
                  text: '集成外部 Ops 工具',
                  link: '/guides/monitoring/integrate-external-ops-tools/README',
                  collapsed: true,
                  items: [
                    { text: '集成 LangSmith', link: '/guides/monitoring/integrate-external-ops-tools/integrate-langsmith' },
                    { text: '集成 Langfuse', link: '/guides/monitoring/integrate-external-ops-tools/integrate-langfuse' }
                  ]
                },
                { text: '数据分析', link: '/guides/monitoring/analysis' }
              ]
            },
            {
              text: '扩展',
              link: '/guides/extension/README',
              collapsed: true,
              items: [
                {
                  text: 'API 扩展',
                  link: '/guides/extension/api-based-extension/README',
                  collapsed: true,
                  items: [
                    { text: '外部数据工具', link: '/guides/extension/api-based-extension/external-data-tool' },
                    { text: '使用 Cloudflare Workers 部署 API Tools', link: '/guides/extension/api-based-extension/cloudflare-workers' },
                    { text: '敏感内容审查', link: '/guides/extension/api-based-extension/moderation' }
                  ]
                },
                {
                  text: '代码扩展',
                  link: '/guides/extension/code-based-extension/README',
                  collapsed: true,
                  items: [
                    { text: '外部数据工具', link: '/guides/extension/code-based-extension/external-data-tool' },
                    { text: '敏感内容审查', link: '/guides/extension/code-based-extension/moderation' }
                  ]
                }
              ]
            },
            {
              text: '协同',
              link: '/guides/workspace/README',
              collapsed: true,
              items: [
                { text: '发现', link: '/guides/workspace/app/README' },
                { text: '邀请与管理成员', link: '/guides/workspace/invite-and-manage-members' }
              ]
            },
            {
              text: '管理',
              link: '/guides/management/README',
              collapsed: true,
              items: [
                { text: '管理应用', link: '/guides/management/manage-app' }
              ]
            }
          ]
        },
        {
          text: '社区',
          // link: '/community/README',
          // collapsed: true,
          items: [
            { text: '寻求支持', link: '/community/support' },
            { text: '成为贡献者', link: '/community/contribution' },
            { text: '为 TGAI 文档做出贡献', link: '/community/docs-contribution' }
          ]
        },
        {
          text: '研发',
          // link: '/development/README',
          // collapsed: true,
          items: [
            {
              text: '后端',
              link: '/development/backend/README',
              collapsed: true,
              items: [
                {
                  text: 'DifySandbox',
                  link: '/development/backend/sandbox/README',
                  collapsed: true,
                  items: [
                    { text: '贡献指南', link: '/development/backend/sandbox/contribution' }
                  ]
                }
              ]
            }
          ]
        },
        {
          text: '阅读更多',
          // link: '/learn-more/README',
          // collapsed: true,
          items: [
            {
              text: '应用案例',
              link: '/learn-more/use-cases/README',
              collapsed: true,
              items: [
                { text: '如何训练出专属于“你”的问答机器人？', link: '/learn-more/use-cases/train-a-qa-chatbot-that-belongs-to-you' },
                { text: '教你十几分钟不用代码创建 Midjourney 提示词机器人', link: '/learn-more/use-cases/create-a-midjoureny-prompt-word-robot-with-zero-code' },
                { text: '构建一个 Notion AI 助手', link: '/learn-more/use-cases/build-an-notion-ai-assistant' },
                { text: '如何在几分钟内创建一个带有业务数据的官网 AI 智能客服', link: '/learn-more/use-cases/create-an-ai-chatbot-with-business-data-in-minutes' },
                { text: '使用全套开源工具构建 LLM 应用实战：在 TGAI 调用 Baichuan 开源模型能力', link: '/learn-more/use-cases/practical-implementation-of-building-llm-applications-using-a-full-set-of-open-source-tools' },
                { text: '手摸手教你把 TGAI 接入微信生态', link: '/learn-more/use-cases/dify-on-wechat' },
                { text: '使用 TGAI 和 Twilio 构建 WhatsApp 机器人', link: '/learn-more/use-cases/dify-on-whatsapp' },
                { text: '如何让 LLM 应用提供循序渐进的聊天体验？', link: '/learn-more/use-cases/how-to-make-llm-app-provide-a-progressive-chat-experience' },
                { text: '如何将 TGAI Chatbot 集成至 Wix 网站？', link: '/learn-more/use-cases/how-to-integrate-dify-chatbot-to-your-wix-website' }
              ]
            },
            {
              text: '扩展阅读',
              link: '/learn-more/extended-reading/README',
              collapsed: true,
              items: [
                { text: '什么是 LLMOps？', link: '/learn-more/extended-reading/what-is-llmops' },
                {
                  text: '检索增强生成（RAG）',
                  link: '/learn-more/extended-reading/retrieval-augment/README',
                  collapsed: true,
                  items: [
                    { text: '混合检索', link: '/learn-more/extended-reading/retrieval-augment/hybrid-search' },
                    { text: '重排序', link: '/learn-more/extended-reading/retrieval-augment/rerank' },
                    { text: '召回模式', link: '/learn-more/extended-reading/retrieval-augment/retrieval' }
                  ]
                },
                {
                  text: '提示词编排',
                  link: '/learn-more/extended-reading/prompt-engineering/README'
                }
              ]
            },
            {
              text: '常见问题',
              link: '/learn-more/faq/README',
              collapsed: true,
              items: [
                { text: '本地部署相关', link: '/learn-more/faq/install-faq' },
                { text: 'LLM 配置与使用', link: '/learn-more/faq/llms-use-faq' }
              ]
            }
          ]
        },
        {
          text: '政策',
          // link: '/policies/README',
          items: [
            { text: '开源许可证', link: '/policies/open-source' },
            {
              text: '用户协议',
              link: '/policies/agreement/README',
              collapsed: true,
              items: [
                { text: '服务条款', link: 'https://dify.ai/terms' },
                { text: '隐私政策', link: 'https://dify.ai/privacy' }
              ]
            }
          ]
        }

      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    },
    vite: {
      ssr: {
        noExternal: ['@escook/vitepress-theme', 'vitepress']
      }
    }

  })
