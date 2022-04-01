import sanitizeHtml from 'sanitize-html';

function contentFormat(excerpt) {
  return sanitizeHtml(excerpt);
}

export default contentFormat;
