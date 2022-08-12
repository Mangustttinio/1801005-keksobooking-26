const getTemplateElement = (selector) => {
  const templateElement = document.querySelector(selector);
  if (templateElement && templateElement.content.children) {
    return templateElement.content.children[0];
  }
};

export { getTemplateElement };

