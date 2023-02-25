<script lang="ts">
  import { Validators } from '../../../utlities/Validators';
  import type {
    ValidatorFn,
    ValidatorResult,
  } from '../../../utlities/Validators';

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
    const formData = new FormData(e.target);

    const data: any = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    validateForm(data);

    if (isFormValid()) {
      console.log(data);
    } else {
      console.log('Invalid Form');
    }
  }
</script>

<div class="flex flex-col items-center max-w-[500px] mx-auto">
  <form class="flex flex-col w-full" on:submit|preventDefault={onSubmit}>
    <div class="w-full mb-5">
      <label for="email" class="hidden" />
      <input
        type="Email"
        id="email"
        name="email"
        class="w-full bg-white p-3 text-xl placeholder:text-grey-400 text-grey-400 focus:outline-none focus:bg-white focus:text-black-400 focus:placeholder:text-black-400 rounded"
        placeholder="Email"
      />
      {#if errors.email?.required?.error}
        <p class="error-message bg-[#e12d2d] text-white my-2 p-2 rounded">
          Please provide your email address.
        </p>
      {/if}
    </div>

    <button
      type="submit"
      class="w-full transition-colors p-3 text-2xl text-white hover:text-red border-2 bg-red border-red rounded hover:bg-transparent"
      >View Now</button
    >
  </form>
</div>
