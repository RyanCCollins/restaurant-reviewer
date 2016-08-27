function hash(input) {
  let hash = 0, i, chr, len;
  if (input.length === 0) return hash;
  for (i = 0, len = input.length; i < len; i++) {
    chr = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

export default {
  findScrollParents (element, horizontal) {
    let result = [];
    let parent = element.parentNode;
    while (parent && parent.getBoundingClientRect) {
      let rect = parent.getBoundingClientRect();
      if (horizontal) {
        if (rect.width && parent.scrollWidth > (rect.width + 10)) {
          result.push(parent);
        }
      } else {
        if (rect.height && parent.scrollHeight > (rect.height + 10)) {
          result.push(parent);
        }
      }
      parent = parent.parentNode;
    }
    if (result.length === 0) {
      result.push(document);
    }
    return result;
  },

  isDescendant (parent, child) {
    let node = child.parentNode;
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  },

  findAncestor (element, className) {
    let node = element.parentNode;
    while (node != null) {
      if (node.classList && node.classList.contains(className)) {
        break;
      }
      node = node.parentNode;
    }
    return node;
  },

  filterByFocusable (elements) {
    return Array.prototype.filter.call(elements || [], function(element) {
      let currentTag = element.tagName.toLowerCase();
      let validTags = /(svg|a|area|input|select|textarea|button|iframe|div)$/;
      let isValidTag = currentTag.match(validTags) && element.focus;

      if (currentTag === 'a') {
        return isValidTag && element.childNodes.length > 0 &&
          element.getAttribute('href');
      } else if (currentTag === 'svg' || currentTag === 'div') {
        return isValidTag && element.hasAttribute('tabindex');
      }

      return isValidTag;
    });
  },

  getBestFirstFocusable (elements) {
    let bestFirstFocusable;

    Array.prototype.some.call(elements || [], function(element) {
      let currentTag = element.tagName.toLowerCase();
      let isValidTag = currentTag.match(/(input|select|textarea)$/);
      return isValidTag ? ((bestFirstFocusable = element), true) : false;
    });

    if (!bestFirstFocusable) {
      bestFirstFocusable = this.filterByFocusable(elements)[0];
    }

    return bestFirstFocusable;
  },

  isFormElement (element) {
    const elementType = element ? element.tagName.toLowerCase() : undefined;
    return elementType && (
      elementType === 'input' || elementType === 'textarea'
    );
  },

  generateId (element) {
    let id;
    const elementId = element.getAttribute('id');
    if (!elementId) {
      const parentElement = element.parentElement || element.parentNode;
      if (parentElement) {
        id = hash(parentElement.innerHTML);
        element.setAttribute('id', id);
      }
    } else {
      id = elementId;
    }
    return id;
  }
};
