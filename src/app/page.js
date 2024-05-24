import CarForm from './ui/CarForm';
import TriggerButton from './ui/TriggerButton';

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <TriggerButton name={"Add Car"} />
      </div>
      <CarForm />
    </>
  );
}
