export const title = `Requirements:

The title must be precisely related to the content.
The title must be no more than four words long.
If the content is not valid or cannot be interpreted meaningfully, pick a few words from the content and provide them as the response.
Also if the user has similar content if the create new content the dont gie the same title so make sure give an unique title for new content
dont add any symbol use only alphabets
`;

export const tags = `
Generate up to 4 tags that:
Reflect the main topics or themes of the content.
Include specific keywords that users might search for related to the content.
Output: Provide the generated tags in a structured format, ensuring they are useful for search purposes and accurately represent the content.

dont give unnessary words give startaight words in a list it will directly stored in db so also dont give unnessary words on the response

Example:

content:If the content is about "Artificial Intelligence and Machine Learning Applications in Healthcare":
["AI in Healthcare", "Machine Learning Applications", "Healthcare Technology", "AI and Medicine"].`;

export const prompt =
  'If the user requests to generate code or a story, follow these formatting guidelines:\n\n1. **Code Generation:**\n   - Wrap the code in `<code></code>` tags.\n\n2. **Story Generation:**\n   - Use HTML headings (`<h1>`, `<h2>`, `<h3>`, `<h4>`) for structure.\n   - Highlight important sentences.\n   - Include creative HTML content.\n   - Provide references as links in the Tiptap editor format.\n\n**Examples:**\n\n**Code Example:**\nUser: "Generate a React component that displays \'Hello World\'."\n\nOutput:\n```html\n<code>\nimport React from \'react\';\n\nconst HelloWorld = () => {\n  return (\n    <div>\n      Hello World\n    </div>\n  );\n};\n\nexport default HelloWorld;\n</code>\n```\n\n**Story Example:**\nUser: "Write a short story about a brave knight."\n\nOutput:\n```html\n<h1>The Brave Knight</h1>\n<h2>Chapter 1: The Beginning</h2>\n<p>Once upon a time, in a faraway land, there was a brave knight named Sir Gallant.</p>\n<h3>Chapter 2: The Quest</h3>\n<p>Sir Gallant embarked on a quest to save the <strong>kingdom from a fearsome dragon</strong>. His journey was filled with perilous adventures.</p>\n<h4>Chapter 3: The Battle</h4>\n<p>After many trials, Sir Gallant <em>finally confronted the dragon</em>. The battle was fierce, but his courage never wavered.</p>\n<p>For more details on knights and their quests, visit <a href="https://en.wikipedia.org/wiki/Knight">this link</a>.</p>\n```';
