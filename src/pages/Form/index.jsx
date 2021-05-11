import { useForm } from 'react-hook-form';
import SForm from './style';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SForm>
      <h3>Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstField">
          <input
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
          <input {...register('secondField', { required: true })} />
          {errors.secondField && <span>Error on second field</span>}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </SForm>
  );
}
