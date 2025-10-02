export const initForm = (selector) => {
  const form = document.querySelector(selector);
  const submitBtn = form.querySelector(".button");

  if (!form) {
    return;
  }
  const formState = {};
  const errors = {};

  const validators = {
    name: (value) => {
      if (!value.trim()) return "Name is required";
      return value.length >= 3 || "Username must be at least 3 characters";
    },

    "last-name": (value) => {
      if (!value.trim()) return "Last name is required";
      return value.length >= 3 || "Last name must be at least 3 characters";
    },

    phone: (value) => {
      if (!value.trim()) return "Phone is required";
      return /^[0-9]{10}$/.test(value) || "Phone must be 10 digits";
    },

    email: (value) => {
      if (!value.trim()) return "Email is required";
      return /\S+@\S+\.\S+/.test(value) || "Invalid email format";
    },

    city: (value) => {
      if (!value.trim()) return "City is required";
      return value.length >= 3 || "City must be at least 3 characters";
    },

    "property-type": (value) => {
      if (!value.trim()) return "Property type is required";
      return true;
    },

    area: (value) => {
      if (!value.trim()) return "Area is required";
      return true;
    },
  };

  Array.from(form.elements).forEach((el) => {
    if (el.name) {
      formState[el.name] = "";
      errors[el.name] = null;
    }
  });
  updateSubmitState();

  function validateField(name, value) {
    const rule = validators[name];
    console.log("validator", validators);
    if (!rule) return null;
    console.log("rule", rule);
    const result = rule(value);
    return result === true ? null : result;
  }

  function setError(el, message) {
    let parent = null;
    let errorEl = null;

    if (el.name === "property-type") {
      parent = el.parentElement.parentElement;
      errorEl = parent.querySelector(".error");

      console.log("parent Select", parent);
    } else {
      parent = el.parentElement;
      errorEl = parent.querySelector(".error");
    }

    if (message) {
      errorEl.textContent = message;
      errorEl.classList.add("active");
    } else {
      errorEl.textContent = "";
      errorEl.classList.remove("active");
    }
  }

  function updateSubmitState() {
    const hasErrors = Object.values(errors).some((err) => err !== null);
    const requiredFields = [
      "name",
      "last-name",
      "phone",
      "email",
      "city",
      "property-type",
      "area",
    ];
    const allFilled = requiredFields.every(
      (field) => formState[field].trim() !== ""
    );

    submitBtn.disabled = hasErrors || !allFilled;
  }

  form.addEventListener("input", (e) => {
    const { name, value } = e.target;
    if (!name) return;

    formState[name] = value;

    if (errors[name]) {
      const err = validateField(name, value);
      errors[name] = err;
      setError(e.target, err);
    }

    updateSubmitState();
  });

  form.addEventListener(
    "blur",
    (e) => {
      const { name, value } = e.target;
      if (!name) return;

      if (name === "area") {
        return;
      }

      const err = validateField(name, value);
      errors[name] = err;
      setError(e.target, err);

      updateSubmitState();
    },
    true
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Submit:", formState);
  });
};
