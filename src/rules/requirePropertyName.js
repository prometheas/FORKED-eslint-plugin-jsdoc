import iterateJsdoc from '../iterateJsdoc';

export default iterateJsdoc(({
  report,
  utils,
}) => {
  utils.forEachPreferredTag('property', (jsdoc, targetTagName) => {
    if (jsdoc.tag && jsdoc.name === '') {
      report(
        `There must be an identifier after @${targetTagName} ${jsdoc.type === '' ? 'type' : 'tag'}.`,
        null,
        jsdoc,
      );
    }
  });
}, {
  iterateAllJsdocs: true,
  meta: {
    type: 'suggestion',
  },
});
