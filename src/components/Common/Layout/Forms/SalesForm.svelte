<script lang="ts">
  export let salesForm: any;

  import { Validators } from '../../../../utlities/Validators';
  import type {
    ValidatorFn,
    ValidatorResult,
  } from '../../../../utlities/Validators';

  //REALTOR NAME CONDITIONAL

  let workingWithRealtor = false;

  // SUCCESS MESSAGE
  let showSuccessMessage = false;
  function displaySuccessMessage() {
    showSuccessMessage = true;
    setTimeout(() => {
      showSuccessMessage = false;
    }, 3000);
  }

  // ERROR MESSAGE
  let showErrorMessage = false;
  function displayErrorMessage() {
    showErrorMessage = true;
    setTimeout(() => {
      showErrorMessage = false;
    }, 3000);
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
    e.preventDefault();

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
    class="font-heading text-grey-200 font-bold text-4xl sm:text-5xl text-center mb-2"
  >
    {salesForm.heading}
  </span>
  <div
    class="text-grey-200 text-xl leading-loose mb-10 [&>*>a]:text-grey-200 [&>*>a]:underline"
  >
    {@html salesForm.body}
  </div>
  <form
    name="Sales Form"
    method="POST"
    data-netlify="true"
    class="flex flex-col w-full"
    on:submit|preventDefault={onSubmit}
  >
    <input type="hidden" name="form-name" value="Sales Form" />
    <div class="w-full mb-5">
      <label for="firstName" class="hidden" />
      <input
        type="text"
        id="firstName"
        name="first_name"
        class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400"
        placeholder="First Name"
      />
      {#if errors.first_name?.required?.error}
        <p class="error-message bg-[#e12d2d] text-white my-2 p-2 rounded">
          Please provide your first name.
        </p>
      {/if}
    </div>
    <div class="w-full mb-5">
      <label for="lastName" class="hidden" />
      <input
        type="text"
        id="lastName"
        name="last_name"
        class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400"
        placeholder="Last Name"
      />
      {#if errors.last_name?.required?.error}
        <p class="error-message bg-[#e12d2d] text-white my-2 p-2 rounded">
          Please provide your last name.
        </p>
      {/if}
    </div>
    <div class="w-full mb-5">
      <label for="email" class="hidden" />
      <input
        type="Email"
        id="email"
        name="email"
        class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400"
        placeholder="Email"
      />
      {#if errors.email?.required?.error}
        <p class="error-message bg-[#e12d2d] text-white my-2 p-2 rounded">
          Please provide your email address.
        </p>
      {/if}
    </div>
    <div class="w-full mb-5">
      <label for="phone" class="hidden" />
      <input
        type="tel"
        id="phone"
        name="phone_number"
        class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400"
        placeholder="Phone Number"
      />
      {#if errors.phone_number?.required?.error}
        <p class="error-message bg-[#e12d2d] text-white my-2 p-2 rounded">
          Please provide your phone number.
        </p>
      {/if}
    </div>
    <div class="w-full mb-5">
      <label for="message" class="hidden" />
      <textarea
        id="message"
        name="message"
        rows="4"
        class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400 resize-y"
        placeholder="Watercolour interests me because..."
      />
    </div>
    <div class="w-full mb-5">
      <label for="message" class="hidden" />
      <textarea
        id="message"
        name="message"
        rows="4"
        class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400 resize-y"
        placeholder="Watercolour interests me because..."
      />
    </div>
    <div class="w-full mb-5">
      <label for="realtor" class="hidden" />
      <input
        id="realtor"
        name="realtor"
        class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400 resize-y"
        placeholder="Are you a realtor?"
      />
    </div>
    <div class="w-full mb-5 mt-5">
      <div class="flex mb-2">
        <input type="checkbox" bind:checked={workingWithRealtor} />
        <p class="text-white ml-5 text-xl">Are you working with a Realtor</p>
      </div>
      <div class="invisible" class:workingWithRealtor>
        <label for="realtor-name" class="hidden" />
        <input
          id="realtor-name"
          name="Realtor Name"
          type="text"
          class="w-full bg-transparent border-b-2 border-white p-3 text-xl placeholder:text-grey-200 text-grey-200 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400 resize-y"
          placeholder="Realtor Name"
        />
      </div>
    </div>
    <button
      type="submit"
      class="w-full p-3 text-2xl text-white border-2 border-white rounded  hover:bg-red transition-colors hover:border-red"
      >Submit</button
    >
    {#if showSuccessMessage}
      <p
        class="success-message bg-green-form text-white my-2 p-2 rounded text-center"
      >
        Thank you for submitting, we will get back to you soon!
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

<style>
  .workingWithRealtor {
    visibility: visible;
  }
</style>
