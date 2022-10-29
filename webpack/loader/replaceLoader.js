const loaderUtils = require('loader-utils');
const validate = require('schema-utils');

module.exports = function (content) {
  const options = loaderUtils.getOptions(this);
  const schema = {
    type: "object",
    properties: {
      name: {
        type: "string"
      }
    },
    additionalProperties: false
  }

  validate(schema, options, 'replaceLoader');

  const callback = this.async();
  setTimeout(() => {
    content = content.replace('zhangsan', options.name);
    callback(null, content);
  })
}