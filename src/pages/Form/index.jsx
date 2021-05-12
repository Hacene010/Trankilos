import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SForm from './style';

export default function Form() {
  const [formAnswers, setAnswers] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    setAnswers(data);
  };

  return (
    <SForm>
      <h3>Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstField">
          <input
            id="firstField"
            {...register('firstField', { required: true, minLength: 10 })}
          />
          {errors.firstField?.type === 'required' && (
            <span>First field required</span>
          )}
          {errors.firstField?.type === 'minLength' && (
            <span>First field must be 10 characters long</span>
          )}
        </label>
        <label htmlFor="secondField">
          <input
            id="secondField"
            {...register('secondField', { required: true })}
          />
          {errors.secondField && <span>Second field required</span>}
        </label>
        <input type="submit" value="Submit" />
      </form>
      {isValid && <pre>{JSON.stringify(formAnswers, null, 4)}</pre>}
    </SForm>
  );
}
