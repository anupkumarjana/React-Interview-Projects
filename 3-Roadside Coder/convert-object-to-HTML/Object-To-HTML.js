function render(obj) {
  const element =
    typeof obj.type === "function"
      ? obj.type(obj.props)
      : document.createElement(obj.type);

  if (obj.props) {
    Object.keys(obj.props).forEach((key) => {
      if (key === "children") {
        // Check if children is an array before iterating
        if (Array.isArray(obj.props.children)) {
          obj.props.children.forEach((child) => {
            const childElement = render(child);
            element.appendChild(childElement);
          });
        } else if (obj.props.children) {
          // Check if children exists
          const childElement = render(obj.props.children);
          element.appendChild(childElement);
        }
      } else if (typeof obj.props[key] === "function" && key !== "onclick") {
        // Handle functional component
        const functionalComponent = obj.props[key];
        const functionalComponentElement = render(
          functionalComponent(obj.props)
        );
        element.appendChild(functionalComponentElement);
      } else {
        if (key === "onclick") {
          element.addEventListener("click", obj.props[key]);
        } else {
          element.setAttribute(key, obj.props[key]);
        }
      }
    });
  }

  return element;
}

// Test
const objToRender = {
  type: "div",
  props: {
    id: "container",
    class: "main-container",
    children: [
      {
        type: "h1",
        props: {
          id: "heading",
          children: "Hello, World!",
        },
      },
      {
        type: "p",
        props: {
          class: "description",
          children: "This is a paragraph.",
        },
      },
      {
        type: (props) => {
          const button = document.createElement("button");
          button.textContent = props.label;
          button.onclick = props.onclick;
          return button;
        },
        props: {
          label: "Click Me",
          onclick: () => alert("Button clicked!"),
        },
      },
    ],
  },
};

const rootElement = render(objToRender);
document.body.appendChild(rootElement);
