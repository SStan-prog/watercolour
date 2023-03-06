<script lang="ts">
  export let contactForm: any;

  import { Validators } from '../../../../utlities/Validators';
  import type {
    ValidatorFn,
    ValidatorResult,
  } from '../../../../utlities/Validators';

  // SUCCESS MESSAGE
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

  let errors: { [inputName: string]: ValidatorResult } = {};

  let form: {
    [inputName: string]: {
      validators: ValidatorFn[];
    };
  } = {
    first_name: {
      validators: [Validators.required],
    },
    last_name: {
      validators: [Validators.required],
    },
    email: {
      validators: [Validators.required],
    },
    phone_number: {
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
        .then(() =>
          setTimeout(() => {
            e.target.reset();
          }, 1000)
        )
        .catch((error) => {
          console.log(error);
          displayErrorMessage();
        });
    } else {
      console.log('Invalid Form');
    }
  }
</script>

<div class="flex flex-col items-center">
  <span
    class="font-heading text-grey-200 font-bold text-4xl sm:text-5xl mb-2 text-center"
  >
    {contactForm.heading}
  </span>
  <div class="text-grey-200 text-xl leading-loose mb-10">
    {@html contactForm.body}
  </div>
  <form
    name="Newsletter Form"
    method="POST"
    data-netlify="true"
    class="flex flex-col w-full"
    on:submit|preventDefault={onSubmit}
  >
    <input type="hidden" name="form-name" value="Newsletter Form" />
    <div class="w-full mb-5">
      <label for="nl-firstName" class="hidden" />
      <input
        type="text"
        id="nl-firstName"
        name="first_name"
        class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400 rounded-none"
        placeholder="First Name"
      />
      {#if errors.first_name?.required?.error}
        <p class="error-message bg-[#e12d2d] text-white my-2 p-2 rounded">
          Please provide your first name.
        </p>
      {/if}
    </div>
    <div class="w-full mb-5">
      <label for="nl-lastName" class="hidden" />
      <input
        type="text"
        id="nl-lastName"
        name="last_name"
        class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400 rounded-none"
        placeholder="Last Name"
      />
      {#if errors.last_name?.required?.error}
        <p class="error-message bg-[#e12d2d] text-white my-2 p-2 rounded">
          Please provide your last name.
        </p>
      {/if}
    </div>
    <div class="w-full mb-5">
      <label for="nl-email" class="hidden" />
      <input
        type="Email"
        id="nl-email"
        name="email"
        class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400 rounded-none"
        placeholder="Email"
      />
      {#if errors.email?.required?.error}
        <p class="error-message bg-[#e12d2d] text-white my-2 p-2 rounded">
          Please provide your email address.
        </p>
      {/if}
    </div>
    <div class="w-full mb-5">
      <label for="nl-phone" class="hidden" />
      <input
        type="tel"
        id="nl-phone"
        name="phone_number"
        class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400 rounded-none"
        placeholder="Phone Number"
      />
      {#if errors.phone_number?.required?.error}
        <p class="error-message bg-[#e12d2d] text-white my-2 p-2 rounded">
          Please provide your phone number.
        </p>
      {/if}
    </div>
    <button
      type="submit"
      class="w-full p-3 text-2xl text-white border-2 border-white rounded  hover:bg-red transition-colors hover:border-red"
      >Subscribe</button
    >
    {#if showSuccessMessage}
      <p
        class="success-message bg-green-form text-white my-2 p-2 rounded text-center"
      >
        Thank you for visiting! You have successfully subscribed to our mailing
        list. Your welcome email will be sent shortly!
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

  <div class="my-5 mb-20 text-grey-200">
    {@html contactForm.disclaimer}
  </div>
</div>
