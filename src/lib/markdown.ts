/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface Slide {
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  image: string;
}

interface Frontmatter {
  [key: string]: any; // Allow any other properties
  slides?: Slide[];
  title?: string;
  subtitle?: string;
  button_text?: string;
  button_link?: string;
  phone_number?: string;
  features?: string[];
  services?: Array<{ title: string; description: string }>;
  points?: string[];
  availability?: string;
  email_address?: string;
  location?: string;
  company_name?: string;
  slogan?: string;
  copyright_year?: string;
  address?: string;
  links?: Array<{ text: string; href: string }>;
  services_links?: Array<{ text: string; href: string }>;
  social_links?: Array<{ icon: string; href: string }>;
}

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMarkdownContent(fileName: string) {
  const fullPath = path.join(contentDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    contentHtml,
    ...(matterResult.data as Frontmatter),
  };
}
