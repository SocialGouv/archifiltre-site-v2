import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArchifiltreProductVersionInfo } from '../../utils';

interface ProductVersionProps {
    versions: string | ArchifiltreProductVersionInfo[number][];
}

export const ProductVersion = ({ versions }: ProductVersionProps) => (
    <div className="product__versions" data-panel="versions">
        <div className="product__versions__title">
            <span>Versions</span>
        </div>
        <div className="product__versions__item__wrapper">
            {typeof versions === 'string'
                ? versions
                : versions?.map((version, index) => (
                      <div className="product__versions__item" key={index}>
                          <div className="product__versions__item__title">
                              <span>{version.name}</span>
                          </div>
                          <div className="product__versions__item__date">
                              {version.published_at &&
                                  new Date(
                                      version.published_at,
                                  ).toLocaleDateString()}
                          </div>
                          <div className="product__versions__item__changelog">
                              {version.body && (
                                  <ReactMarkdown>{version.body}</ReactMarkdown>
                              )}
                          </div>
                          <Link
                              href={version.html_url}
                              target="_blank"
                              className="product__versions__item__download underline"
                          >
                              Télécharger la version
                          </Link>
                      </div>
                  ))}
        </div>
    </div>
);
