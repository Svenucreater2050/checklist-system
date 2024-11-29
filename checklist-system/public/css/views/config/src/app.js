const rules = require('../config/checklistRules');

const evaluateRules = (data) => {
  return rules.map((rule) => ({
    id: rule.id,
    description: rule.description,
    passed: rule.condition(data),
  }));
};

module.exports = evaluateRules;
