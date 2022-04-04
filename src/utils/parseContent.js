import sanitizeHtml from 'sanitize-html';

function contentFormat(excerpt) {
  return sanitizeHtml(excerpt, {
    allowedTags: [
      'article',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'hgroup',
      'main',
      'section',
      'blockquote',
      'li',
      'main',
      'ol',
      'p',
      'ul',
      'a',
      'b',
      'br',
      'em',
      'i',
      'mark',
      'small',
      'span',
      'strong',
    ],
    disallowedTagsMode: 'discard',
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      // We don't currently allow img itself by default, but
      // these attributes would make sense if we did.
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
    },
    // Lots of these won't come up by default because we don't allow them
    selfClosing: [
      'img',
      'br',
      'hr',
      'area',
      'base',
      'basefont',
      'input',
      'link',
      'meta',
    ],
    // URL schemes we permit
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
    allowProtocolRelative: true,
    enforceHtmlBoundary: false,
  });
}

export default contentFormat;
