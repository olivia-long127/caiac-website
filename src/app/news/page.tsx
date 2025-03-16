import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { visit } from 'unist-util-visit';

// Custom remark plugin to add width attribute to images
function customImageSize() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      node.data = {
        hProperties: {
          ...node.data?.hProperties,
          width: '300', // Set the desired width here
        },
      };
    });
  };
}

export default async function NewsPage() {
  // Function to read and parse markdown files
  const getNewsEntries = async () => {
    const newsDir = path.join(process.cwd(), 'src/app/news/entries');
    const files = fs.readdirSync(newsDir).reverse(); // Read all files in the directory
    const newsEntries = await Promise.all(files.map(async (file) => {
      const filePath = path.join(newsDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const processedContent = await remark()
        .use(html)
        .use(customImageSize)
        .process(content);
      const contentHtml = processedContent.toString();
      return { title: data.title, date: data.date, contentHtml };
    }));
    return newsEntries;
  };

  const newsEntries = await getNewsEntries();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-light tracking-wide mb-8">News</h1> {/* Adjusted the text size */}
      <div className="space-y-8">
        {newsEntries.map((news, index) => (
          <div key={index} className="prose prose-lg text-gray-600">
            <p className="text-sm text-gray-500">{news.date}</p>
            <h2 className="text-2xl">{news.title}</h2> {/* Adjusted the text size */}
            <div dangerouslySetInnerHTML={{ __html: news.contentHtml }} />
          </div>
        ))}
      </div>
    </div>
  );
}