import { toast } from 'react-toastify';
import SToasts from './style';

export default function Toasts() {
  const alertSuccess = () => {
    toast.success('Yay! \\o/');
  };
  const alertFailure = () => {
    toast.error('Oh noez ! é_è');
  };

  return (
    <SToasts>
      <h3>Toasts</h3>
      <div>
        <button type="button" onClick={alertSuccess}>
          Toast!
        </button>
        <button type="button" onClick={alertFailure}>
          Error!
        </button>
      </div>{' '}
    </SToasts>
  );
}
