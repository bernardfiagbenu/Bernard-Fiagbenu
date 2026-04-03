import { LinkedinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ArticleHeaderProps {
  articleUrl: string;
  articleTitle: string;
}

export default function ArticleHeader({ articleUrl, articleTitle }: ArticleHeaderProps) {
  const author = "Bernard Fiagbenu";
  // Using a dynamic date for "last updated" feel
  const publicationDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-portfolio-url.com';
  const fullArticleUrl = `${siteUrl}${articleUrl}`;

  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullArticleUrl)}`;

  return (
    <div className="mb-8 pb-4 border-b border-dashed">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground text-center sm:text-left">
          <p>By <span className="font-semibold text-foreground">{author}</span></p>
          <p>Published on {publicationDate}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Share this article:</span>
          <Button variant="outline" size="icon" asChild>
            <a href={linkedInShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
              <LinkedinIcon className="h-5 w-5 text-primary" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
