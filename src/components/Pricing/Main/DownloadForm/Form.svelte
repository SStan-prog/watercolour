<script lang="ts">
  import { Validators } from '../../../../utlities/Validators';
  import type {
    ValidatorFn,
    ValidatorResult,
  } from '../../../../utlities/Validators';

  // Form Data from WP
  export let fileUrl: any;

  //SUCCESS MESSAGE
  let showSuccessMessage = false;
  function displaySuccessMessage() {
    showSuccessMessage = true;
    setTimeout(() => {
      showSuccessMessage = false;
    }, 5000);
  }

  // ERROR MESSAGE
  let showErrorMessage = false;
  function displayErrorMessage() {
    showErrorMessage = true;
    setTimeout(() => {
      showErrorMessage = false;
    }, 5000);
  }

  // FORM VALIDATION

  let errors: { [inputName: string]: ValidatorResult } = {};

  let form: {
    [inputName: string]: {
      validators: ValidatorFn[];
    };
  } = {
    email: {
      validators: [Validators.required],
    },
  };

  function isFormValid(): boolean {
    return !Object.values(errors).some((field) =>
      Object.values(field).some((errorObject) => errorObject.error)
    );
  }

  function validateForm(data: { [inputName: string]: any }): void {
    Object.keys(data).forEach((field) => validateField(field, data[field]));
  }

  function validateField(field: any, value: any) {
    form[field]?.validators &&
      form[field].validators.forEach((fn) => {
        const error = fn(value);
        errors[field] = { ...errors[field], ...error };
      });
  }

  function onSubmit(e: any) {
    console.log('working');
    const formData = new FormData(e.target);

    const data: any = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    validateForm(data);

    if (isFormValid()) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
        .then(() => displaySuccessMessage())
        .then(() => {
          setTimeout(() => {
            e.target.reset();
            window.open(fileUrl, '_blank');
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          displayErrorMessage();
        });
    } else {
      console.log('Invalid Form');
    }
  }
</script>

<div class="flex flex-col items-center max-w-[500px] mx-auto">
  <form
    class="flex flex-col w-full"
    on:submit|preventDefault={onSubmit}
    name="Standard Features Form"
    method="POST"
    data-netlify="true"
  >
    <div class="w-full mb-5">
      <input type="hidden" name="form-name" value="Standard Features Form" />
      <label for="email" class="hidden" />
      <input
        type="email"
        id="email"
        name="email"
        class="w-full p-3 text-xl bg-grey-200 placeholder:text-grey-400 text-grey-400 focus:outline-none focus:bg-grey-200 focus:text-black-400 focus:placeholder:text-black-400 rounded"
        placeholder="Email"
      />
      {#if errors.email?.required?.error}
        <p class="error-message bg-red-form text-white my-2 p-2 rounded">
          Please provide your email address.
        </p>
      {/if}
    </div>

    <button
      type="submit"
      class="w-full transition-colors p-3 text-2xl text-white hover:text-red border-2 bg-red border-red rounded hover:bg-transparent"
      >View Now</button
    >
    {#if showSuccessMessage}
      <p
        class="success-message bg-green-form text-white my-2 p-2 rounded text-center"
      >
        Your submission was successful!
      </p>
    {/if}
    {#if showErrorMessage}
      <p
        class="error-message bg-red-form text-white my-2 p-2 rounded text-center"
      >
        We're sorry, something went wrong.<br /> Please try submitting agian.
      </p>
    {/if}
  </form>
</div>
