At my current company, Data Market, my team was tasked with developing a new product: **a web-based platform** that allows users to create custom assistant AI agents tailored to their company's needs. These agents can serve various purposes, such as interactive internal or external customer support, contract management assistance, email filtering and redirection, and many more.

## Development Process

### Why?

AI has advanced rapidly, and many companies must act quickly to leverage the advantages it offers. Based on the feedback we've received from customers, most of their needs are relatively straightforward: providing their employees with role-based chatbots, establishing integrations to enhance the capabilities of their existing applications, and ensuring that the company’s data remains within the organization.

Factors such as the need for a **deep understanding** of configuring services like Azure AI Foundry or AWS, and the fact that not every company has the personnel resources to meet this requirement, were also important considerations.

Taking these into account, our new application provides the following solutions:

1. An **admin interface** that shifts the configuration burden from the customer, while maintaining flexibility, enabling end users to create their own assistant bots.
2. A **chatbot interface**.
3. A system where embeddings are generated and search & retrieval operations are **performed locally** to ensure data privacy for companies (a separate article could be written about the backend aspects of our application, but since it’s unrelated to the UI and due to privacy concerns, this topic is beyond the scope of this article).

### 💻 The (Very Modern) Tech Stack

![test](../projectsContent/Generative%20AI%20Chatbot%20Interface/images/3.png)

- **React:** The primary UI framework used to build the core structure of the application.

- **TypeScript:** A superset of JavaScript that adds static typing, improving code quality, reducing runtime errors, and enabling better developer experience through enhanced tooling and autocompletion.

- **Redux Toolkit (RTK):** A library designed to simplify managing the application state.

- **RTK Query:** A powerful data fetching and caching tool included with Redux Toolkit. Instead of using Axios, I opted for RTK Query as it integrates seamlessly with Redux Toolkit and simplifies the process of handling API calls and caching responses.

- **i18next:** An internationalization framework that makes it easy to manage translations and adapt the UI to different languages, enhancing the global usability of the application.

- **Formik:** A library for form validation and management. It helps streamline the process of creating robust, user-friendly forms with built-in validation capabilities.

- **Framer Motion:** A modern animation library for React. I used this to add smooth, engaging animations to specific UI components, improving the visual appeal and user experience.

![test](../projectsContent/Generative%20AI%20Chatbot%20Interface/images/1.png)

## Website Features

**🤖 Creating Chatbots**

Users can upload files (e.g., PDF, Word, TXT) to create job-specific chatbots. They can also define system prompts to specify how the bot should respond.

**🔐 Managing Users (Authentication and Authorization)**

Administrators can create users and user groups, then assign specific chatbots to these groups.

**💬 Chatting**

The chat interface is designed in a familiar format, similar to ChatGPT or Gemini.

Users can select which chatbot they want to interact with. They are then presented with a screen where they can either type their own questions or select from a predefined pool of questions created by the administrator.

In the chat window, the chatbot provides answers based on the documents it has been trained on. Responses are streamed in Markdown format for clarity and ease of use.

Each chat instance takes into account the conversation history within that session when generating new replies.

**⚙️ User Settings**

Users can personalize their experience by customizing the website’s theme and language preferences. These settings are saved and automatically applied when users return to the website.

![test](../projectsContent/Generative%20AI%20Chatbot%20Interface/images/4.gif)

### Conclusion

Building this application was an exciting journey for me and my team. We wanted to create something that makes it easier for businesses to use AI without needing a deep technical background. By focusing on flexibility, privacy, and user-friendly design, we built a platform that helps companies create their own AI assistants for a variety of tasks.

This project taught me a lot about balancing cutting-edge tech with real-world needs, and I’m excited to see how businesses will use it to make their work more efficient and effective.

![test](../projectsContent/Generative%20AI%20Chatbot%20Interface/images/2.gif)
