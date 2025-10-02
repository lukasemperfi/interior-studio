import { initModal } from "../modal/modal.js";
import { initForm } from "../make-request-form/make-request-form.js";
import { addClickToAll } from "../button/button.js";

export const initMakeRequestModal = () => {
  const makeRequestModal = initModal(".make-request-modal");
  const successModal = initModal(".success-modal");

  const form = initForm(".make-request-form", (formState) => {
    console.log("formState", formState);
    makeRequestModal.close();
    successModal.open();
  });

  addClickToAll(".make-request-btn", () => {
    form.resetForm();
    makeRequestModal.open();
  });
};
